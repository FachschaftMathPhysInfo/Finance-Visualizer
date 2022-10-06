import csv
import os
import yaml
import argparse


def get_list(file_name):
    with open(file_name, 'r') as stream:
        items = list(csv.reader(stream, delimiter=",", quotechar='"'))
        money_out = [item for item in items if item[0][0] == "-"]
        money_in = [item for item in items if item[0][0] != "-"]

        bins_out = list(set(list(zip(*money_out[1:]))[2]))
        bins_in = list(set(list(zip(*money_in[1:]))[2]))
    return money_out, bins_out, money_in, bins_in

def save_result(result, file_name):
    if os.path.isfile(file_name):
        print(file_name + ' exists. Shall I overwrite it? [y/N]', end='')
        choice = input().lower()
        if choice[:1]!='y':
            print('Cancel')
            return
    with open(file_name, 'w') as f:
        yaml.dump(result, f, indent=2, sort_keys=False, allow_unicode=True)
        f.write('\n')
    print('Result saved.')

def getItemsForBinOut(bin, items):
    #print(items)
    items = [item for item in items if item[2] == bin]
    itemsDicts = [{"name": item[1], "value": float(item[0][1:])} for item in items]
    return itemsDicts

def getItemsForBinIn(bin, items):
    #print(items)
    items = [item for item in items if item[2] == bin]
    itemsDicts = [{"name": item[1], "value": float(item[0])} for item in items]
    return itemsDicts

def process(name, money_out, bins_out, money_in, bins_in):
    # generate result dict from items and bins
    data_out = [{"name": bin, "short_name": bin, "children": getItemsForBinOut(bin, money_out)} for bin in bins_out]
    data_in = [{"name": bin, "short_name": bin, "children": getItemsForBinIn(bin, money_in)} for bin in bins_in]

    result_out = {"name": "Ausgaben "+ name, "short_name": "Ausgaben", "children": data_out}
    result_in = {"name": "Einnahmen "+ name, "short_name": "Einnahmen", "children": data_in}

    return result_out, result_in

def main():
    parser = argparse.ArgumentParser(description='Script to create the Jeson files.')

    parser.add_argument('input',
        action='store',
        type=str,
        help='csv file defining the tree')

    args = vars(parser.parse_args())

    name, ext = os.path.splitext(os.path.basename(args["input"]))
    directory = os.path.dirname(args['input'])

    result_out, result_in = process(name, *get_list(args['input']))
    save_result(result_out, directory + "/ausgaben.yaml" )
    save_result(result_in, directory + "/einnahmen.yaml" )


if __name__=='__main__':
    main()
