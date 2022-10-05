import os
import re
import json
import argparse
import markdown
import yaml
import chardet


def get_tree(file_name):
    with open(file_name, 'r') as stream:
        tree = yaml.safe_load(stream)
    return tree

def get_texts(file_name):
    with open(file_name, 'rb') as reader:
        bites = reader.read()
    string = bites.decode(chardet.detect(bites)['encoding'])
    string = string.replace('\r\n', '\n').replace('\r', '\n')
    pattern = re.compile('.*\n===')
    splits = pattern.split(string)[1:]
    matchs = pattern.findall(string)
    texts = {}
    for match, split in zip(matchs, splits):
        texts[match[:-4]] = markdown.markdown(split)
    return texts

def save_result(result, file_name):
    if os.path.isfile(file_name):
        print(file_name + ' exists. Shall I overwrite it? [y/N]', end='')
        choice = input().lower()
        if choice[:1]!='y':
            print('Cancel')
            return
    with open(file_name, 'w') as f:
        json.dump(result, f, indent=4)
        f.write('\n')
    print('Result saved.')

def save_template(template, file_name):
    if os.path.isfile(file_name):
        print(file_name + ' exists. Shall I overwrite it? [y/N]', end='')
        choice = input().lower()
        if choice[:1]!='y':
            print('Cancel')
            return

    with open(file_name, 'w') as f:
        f.write(template)
    print('Template saved.')

def generate_template(tree):
    def get_names(tree):
        names = [tree['name'],]
        for i, sub_tree in enumerate(tree.get('children', [])):
            names.extend(get_names(sub_tree))
        return names
    names = get_names(tree)
    template = ''
    for name in names:
        template += name + '\n===\n\n\n'
    return template

def prosess(tree, texts, parent_id='', counter=0):
    knot = {}
    knot['name'] = tree['name']
    if parent_id=='':
        knot['id'] = str(counter)
    else:
        knot['id'] = parent_id + '.' + str(counter)
    knot['parent'] = parent_id
    knot['title'] = tree.get('short_name',tree['name'])
    knot['text'] = texts[tree['name']]
    if 'value' in tree.keys():
        knot['value'] = tree['value']
    result = [knot,]
    for i, sub_tree in enumerate(tree.get('children', [])):
        result.extend(prosess(sub_tree, texts, parent_id=knot['id'], counter=i))
    return result

def main():
    parser = argparse.ArgumentParser(description='Script to create the Jeson files.')

    parser.add_argument('input',
        action='store',
        type=str,
        help='YAML file defining the tree')
    parser.add_argument('-d', '--descriptions',
        action='store',
        type=str,
        required=False,
        default='',
        help='Markdown file containing descriptions; Default: same as the YAML file')
    parser.add_argument('-r', '--restults',
        action='store',
        type=str,
        required=False,
        default='',
        help='JSON file to be generated; Default: same as the YAML file')
    parser.add_argument('-t', '--make-template',
        action='store_true',
        help='Only a template for the Markdown file is generated')

    args = vars(parser.parse_args())

    name = os.path.splitext(args['input'])[0]
    if args['descriptions'] == '':
        args['descriptions'] = name + '.md'
    if args['restults'] == '':
        args['restults'] = name + '.json'

    if args['make_template']:
        tree = get_tree(args['input'])
        template = generate_template(tree)
        save_template(template, args['descriptions'])
    else:
        tree = get_tree(args['input'])
        texts = get_texts(args['descriptions'])
        result = prosess(tree, texts)
        save_result(result, args['restults'])

if __name__=='__main__':
    main()
