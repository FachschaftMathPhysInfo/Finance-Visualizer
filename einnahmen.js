displaytext = function(event){
    $('#einnahmenname').text(this.name);
    $('#einnahmenvalue').text('Betrag: ' + Number(this.value).toLocaleString("es-ES", {minimumFractionDigits: 2}) + ' €');
    $('#einnahmentext').text(this.text);
}

    var data = [{
        'id': '0.0',
        'parent': '',
        'title': 'Einnahmen 2018',
        'name': 'Einnahmen 2018',
        'text': 'Die Fachschaft hat verschiedene Einnahmequellen, die es uns ermöglichen, unsere Aufgaben sachgerecht zu erfüllen. Der wichtigste Einnahmenposten sind die Beiträge, die alle Studierenden an die Verfasste Studierendenschaft zahlen, aber auch die anderen Quellen sind in dieser Grafik aufgeführt.',
        'value': '62568.44',
        'events': {'click': displaytext},
        'color': '#ededed',
    },{
        'id': '1.1',
        'parent': '0.0',
        'name': 'Einnahmen aus Eigenbeteiligungen',
        'text': 'Bei einigen Veranstaltungen der Fachschaft werden Eigenbeteiligungen erhoben, um einen Teil der Kosten, die bei der Veranstaltung entstehen, auszugleichen. Das ist vor allem beim Fachschaftswochenende (FSWE) der Fall, bei dem alle Teilnehmer, die nicht zum ersten Mal teilnehmen, eine Eigenbeteiligung in Höhe von 10€ entrichten. Damit soll der Tatsache Rechnung getragen werden, dass auf dem FSWE neben der inhaltlichen Arbeit für die Fachschaft auch soziale Aktivitäten der Teilnehmenden stattfinden.',
        'value': 235.00,
        'events': {'click': displaytext},
        'color': '#16a085' 
    },{
        'id': '1.2',
        'parent': '0.0',
        'name': 'Einnahmen aus hoheitlichen Aufgaben',
        'text': 'Die Erstsemestereinführungen (im Folgenden "Vorkurs") in unseren Fächern werden durch die Fachschaft MathPhysInfo ausgerichtet. Als Abschluss dieses Vorkurses gibt es eine abendliche Feier, die sog. AnfiFete. Die Einnahmen, die durch den Verkauf von Getränken auf der AnfiFete erzielt werden, fließen unserer Fachschaft in der hier angegbenen Höhe zu. Es ist nicht beabsichtigt mit der AnfiFete Gewinn zu erwirtschaften, sondern die Veranstaltung kostendeckend durchführen zu können.',
        'value': 1564.05,
        'events': {'click': displaytext},
        'color': '#8e44ad'
    },{
        'id': '1.3',
        'parent': '0.0',
        'name': 'Einnahme von Pfand',
        'text': 'Bei unserer Fachschaft können Studierende sich Ordner mit Berichten von mündlichen Prüfungen ausleihen, um sich damit auf eigene Prüfungen vorzubereiten. Beim ersten Ausleihen eines solchen Ordners müssen Studierende ein Pfand in Höhe von 20€ entrichten und erhalten dafür eine Quittung. Wenn sie nach ihrer Prüfung einen eigenen Bericht anfertigen und an die auf unserer Website angegebenen Mailadresse schicken, erhalten sie gegen Vorlage ihrer Quittung das Pfand zurück. Dadurch soll sichergestellt werden, dass es einen kontinuierlichen Zufluss von aktuellen Berichten gibt und das System auch in Zukunft noch funktioniert. Erfahrungen der letzten Jahre haben allerdings gezeigt, dass nicht alle Studierenden einen Bericht einsenden und ihr Pfand wieder abholen, deshalb wird über lange Zeiträume mehr Pfand entgegen genommen als ausgezahlt',
        'value': 500,
        'events': {'click': displaytext},
        'color': '#f39c12'
    },{
        'id': '1.4',
        'parent': '0.0',
        'name': 'Spenden an die Fachschaft',
        'text': 'Unter diesen Posten fallen alle Spenden, die an unsere Fachschaft gehen. Zumeist sind das sog. Tellerspenden bei Veranstaltungen mit Bewirtung.',
        'value': 135.00,
        'events': {'click': displaytext},
        'color': '#2ecc71'
    },{
        'id': '1.5',
        'parent': '0.0',
        'title': 'Einnahmen<br> aus VS-Beiträgen',
        'name': 'Einnahmen aus VS-Beiträgen',
        'text': 'Alle immatrikulierten Studierenden der Universität Heidelberg leisten jedes Semester einen Beitrag zur Verfassten Studierendenschaft (VS) in Höhe von 7,50€. Dieser wird  40% dieses Beitrages fließen als Zuweisung in das Budget der Fachschaften.',
        'value': 17025.14,
        'events': {'click': displaytext},
        'color': '#f1c40f'
    },{
        'id': '1.6',
        'parent': '0.0',
        'title': 'Einnahmen aus<br>kulturellen Veranstaltungen',
        'name': 'Einnahmen aus kulturellen Veranstaltungen',
        'text': 'Alle Einnahmen aus kulturellen Veranstaltungen fießen dem Haushalt unter diesem Posten zu. Die einzige Veranstaltung, auf die das zutrift, ist die MathPhysTheo im Wintersemester 18/19.',
        'value': 20691.26,
        'events': {'click': displaytext},
        'color': '#e74c3c'
    },{
        'id': '1.7',
        'parent': '0.0',
        'title': 'Rücklagen<br> aus dem Vorjahr',
        'name': 'Rücklagen aus dem Vorjahr',
        'text': 'Nicht verausgabte Mittel aus den Vorjahren fließen dem Haushalt unter diesem Posten zu. Diese Rücklage ermöglicht es große Ausgaben so aufzufangen, dass sie den Haushalt eines einzigen Jahres nicht übermäßig einschränken. Ein Beispiel hierfür ist die Anschaffung des neuen Servers mit 7000€; eine solche Anschaffung wäre aus dem Haushalt eines einzigen Jahres nur schwerlich möglich.',
        'value': 15717.99,
        'events': {'click': displaytext},
        'color': '#3498db'
    },{
        'id': '1.8',
        'parent': '0.0',
        'title': 'Zweckgebundene<br> Rücklage "ZaPF"',
        'name': 'Zweckgebundene Rücklage "ZaPF"',
        'text': 'Rücklagen aus den Vorjahren können mit einem expliziten Verwendungszweck versehen werden, für die die Mittel in den kommenden Jahren dann genutzt werden können. Diese Rücklage wurde 2016 mit einem Beitrag von 5000€ zur Teilfinanzierung der Bundesfachschaftentagung der Physik im Jahr 2018 angelegt.',
        'value': 5000,
        'events': {'click': displaytext},
        'color': '#e74c3c'
    },{
        'id': '1.9',
        'parent': '0.0',
        'title': 'Zweckgebundene<br> Rücklage Tresor',
        'name': 'Zweckgebundene Rücklage Tresor',
        'text': 'Rücklagen aus den Vorjahren können mit einem expliziten Verwendungszweck versehen werden, für die die Mittel in den kommenden Jahren dann genutzt werden können. Diese Rücklage wurde Ende 2017 mit einem Beitrag von 1700€ zur Finanzierung eines neuen Tresor.',
        'value': 1700,
        'events': {'click': displaytext},
        'color': '#e74c3c'
    }];

    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');


    Highcharts.chart('einnahmencontainer', {
        
        chart: {
            height: '100%'
        },

        title: {
            text: 'Einnahmen'
        },
        subtitle: {
            text: 'der Fachschaft MathPhysInfo 2018'
        },
        series: [{
            type: "sunburst",
            data: data,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
                format: '{point.title}',
                filter: {
                    property: 'innerArcLength',
                    operator: '>',
                    value: 40
                }
            },
            levels: [{
                level: 1,
                levelIsConstant: false,
                dataLabels: {
                    rotationMode: 'parallel',
                    format: '{point.title}:<br> {point.value} €',
                    filter: {
                        property: 'outerArcLength',
                        operator: '>',
                        value: 64
                    }
                }
            }, {
                level: 2,
                colorByPoint: true,
                dataLabels: {
                    
                }
            }]

        }],
        tooltip: {
            headerFormat: "",
            pointFormat: '<b>{point.name}</b>: <b>{point.value} €</b>'
        }
    });