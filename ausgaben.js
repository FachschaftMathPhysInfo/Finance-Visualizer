displaytext = function(event){
    $('#ausgabenname').text(this.name);
    $('#ausgabenvalue').text('Betrag: ' + this.value + ' €');
    $('#ausgabentext').text(this.text);
}
        
    var data = [{
        'id': '0.0',
        'parent': '',
        'title': 'Ausgaben',
        'name': 'Ausgaben 2017',
        'text': 'Lorem Ipsum',
        'events': {'click': displaytext},
        'color': '#ededed'
    },{
        'id': '1.1',
        'parent': '0.0',
        'title': 'Ausgaben',
        'name': 'Ausgaben',
        'text': '',
        'color': 'red',
        'events': {'click': displaytext}
    },{
        'id': '1.2',
        'parent': '0.0',
        'title': 'Rücklagen',
        'name': 'Rücklagen',
        'text': '',
        'value': 23007.69,
        'color': 'green',
        'events': {'click': displaytext}
    },{
        'id': '2.1',
        'parent': '1.1',
        'title': 'EDV-Bedarf und Infrastruktur',
        'name': 'EDV-Bedarf und Infrastruktur',
        'text': '',
        'value': 224.64,
        'events': {'click': displaytext}
    },{
        'id': '2.2',
        'parent': '1.1',
        'title': 'Büromaterial',
        'name': 'Büromaterial',
        'text': '',
        'value': 668.94,
        'events': {'click': displaytext}
    },{
        'id': '2.3',
        'parent': '1.1',
        'title': 'Druck- und Kopierkosten',
        'name': 'Druck- und Kopierkosten',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.4',
        'parent': '1.1',
        'title': 'Stadtmobil',
        'name': 'Transportkosten (Stadtmobil)',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.5',
        'parent': '1.1',
        'title': 'Bewirtung',
        'name': 'Bewirtungskosten',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.6',
        'parent': '1.1',
        'title': 'Sonstiges',
        'name': 'Sonstige Materialien und Dienstleistungen',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.7',
        'parent': '1.1',
        'title': 'Reise- und<br>Teilnahme',
        'name': 'Reise- und Teilnahmekosten',
        'text': 'Reisen ist schön.',
        'value': 4012.73,
        'events': {'click': displaytext}
    },{
        'id': '2.8',
        'parent': '1.1',
        'title': 'Mitgliedsbeiträge',
        'name': 'Mitgliedsbeiträge',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.9',
        'parent': '1.1',
        'title': 'Vorkurs',
        'name': 'Vorkurs',
        'text': '',
        'events': {'click': displaytext}
    },{
        'id': '2.10',
        'parent': '1.1',
        'title': 'FSWE',
        'name': 'FSWE',
        'text': '',
        'color': 'orange',
        'events': {'click': displaytext}
    },{
        'id': '2.11',
        'parent': '1.2',
        'title': 'Rücklage<br>der Fachschaft',
        'name': 'Einstellung in die Rücklage der Fachschaft',
        'text': '',
        'color': 'green',
        'events': {'click': displaytext}
    },{
        'id': '2.12',
        'parent': '1.2',
        'title': 'Rücklage<br>"ZaPF2018"',
        'name': 'Einstellung in zweckgebundene Rücklage "ZaPF2018"',
        'text': '',
        'color': '#006000',
        'events': {'click': displaytext}
    },{
        'id': '2.13',
        'parent': '1.2',
        'title': 'Rücklage<br>"Tresor"',
        'name': 'Einstellung in die zweckgebundene Rücklage "Tresor"',
        'text': '',
        'color': '#004000',
        'events': {'click': displaytext}
    },{
        'id': '3.1',
        'parent': '2.1',
        'title': 'Drucker, Ersatzteile',
        'name': 'Drucker, Ersatzteil',
        'text': '',
        'value': 177.18,
        'events': {'click': displaytext}
    },{
        'id': '3.2',
        'parent': '2.1',
        'title': 'Netzwerkkabel',
        'name': 'Netzwerkkabel',
        'text': '',
        'value': 31.99,
        'events': {'click': displaytext}
    },{
        'id': '3.3',
        'parent': '2.1',
        'title': 'Domain mathphys.info',
        'name': 'Domain mathphys.info',
        'text': '',
        'value': 15.47,
        'events': {'click': displaytext}
    },{
        'id': '3.4',
        'parent': '2.2',
        'title': 'Druckerpapier',
        'name': 'Druckerpapier',
        'text': '',
        'value': 169.93,
        'events': {'click': displaytext}
    },{
        'id': '3.5',
        'parent': '2.2',
        'title': 'Druckertoner',
        'name': 'Druckertoner',
        'text': '',
        'value': 483.12,
        'events': {'click': displaytext}
    },{
        'id': '3.6',
        'parent': '2.2',
        'title': 'Schlüsselkasten',
        'name': 'Schlüsselkasten',
        'text': '',
        'value': 12.90,
        'events': {'click': displaytext}
    },{
        'id': '3.7',
        'parent': '2.2',
        'title': 'Stifte',
        'name': 'Stifte',
        'text': '',
        'value': 2.99,
        'events': {'click': displaytext}
    },{
        'id': '3.8',
        'parent': '2.3',
        'title': 'Plakate Vollversammlungen',
        'name': 'Plakate Vollversammlungen',
        'text': '',
        'value': 193.90,
        'events': {'click': displaytext}
    },{
        'id': '3.9',
        'parent': '2.3',
        'title': 'Plakate studentischer Arbeitsraum',
        'name': 'Plakate studentischer Arbeitsraum',
        'text': '',
        'value': 10,
        'events': {'click': displaytext}
    },{
        'id': '3.10',
        'parent': '2.3',
        'title': 'Lehrevaluation Physik',
        'name': 'Lehrevaluation Physik',
        'text': '',
        'value': 90.80,
        'events': {'click': displaytext}
    },{
        'id': '3.11',
        'parent': '2.3',
        'title': 'Anschaffung Banner',
        'name': 'Anschaffung Banner',
        'text': '',
        'value': 50.74,
        'events': {'click': displaytext}
    },{
        'id': '3.12',
        'parent': '2.4',
        'title': 'Reisekosten KIFKoMa',
        'name': 'Reisekosten KIFKoMa',
        'text': '',
        'value': 419.75,
        'events': {'click': displaytext}
    },{
        'id': '3.13',
        'parent': '2.4',
        'title': 'Reisekosten ZaPF',
        'name': 'Reisekosten ZaPF',
        'text': '',
        'value': 629.10,
        'events': {'click': displaytext}
    },{
        'id': '3.14',
        'parent': '2.5',
        'title': 'Fachschaftssitzung',
        'name': 'Verpflegung Fachschaftssitzung',
        'text': '',
        'value': 1115.30,
        'events': {'click': displaytext}
    },{
        'id': '3.15',
        'parent': '2.5',
        'title': 'Vollversammlungen',
        'name': 'Verpflegung Vollversammlungen',
        'text': '',
        'value': 866.88,
        'events': {'click': displaytext}
    },{
        'id': '3.16',
        'parent': '2.5',
        'title': 'Hackathon',
        'name': 'Verpflegung Hackathon',
        'text': '',
        'value': 72.30,
        'events': {'click': displaytext}
    },{
        'id': '3.17',
        'parent': '2.5',
        'title': 'Wissenschaftler<br>im Beruf',
        'name': 'Verpflegung Wissenschaftler im Beruf',
        'text': '',
        'value': 262.14,
        'events': {'click': displaytext}
    },{
        'id': '3.18',
        'parent': '2.5',
        'title': 'Tutorenversammlung Physik',
        'name': 'Verpflegung Tutorenversammlung Physik',
        'text': '',
        'value': 77.54,
        'events': {'click': displaytext}
    },{
        'id': '3.19',
        'parent': '2.5',
        'title': 'Vorkurs',
        'name': 'Verpflegung Vorkurs',
        'text': '',
        'value': 399.54,
        'events': {'click': displaytext}
    },{
        'id': '3.20',
        'parent': '2.6',
        'title': 'Anschaffung Kochtopf (KoMa)',
        'name': 'Anschaffung Kochtopf (KoMa)',
        'text': '',
        'value': 228.47,
        'events': {'click': displaytext}
    },{
        'id': '3.21',
        'parent': '2.6',
        'title': 'Anschaffung Schlüssel FS-Raum',
        'name': 'Anschaffung Schlüssel FS-Raum',
        'text': '',
        'value': 353.43,
        'events': {'click': displaytext}
    },{
        'id': '3.22',
        'parent': '2.6',
        'title': 'Material Vollversammlung',
        'name': 'Material Vollversammlung',
        'text': '',
        'value': 145.66,
        'events': {'click': displaytext}
    },{
        'id': '3.23',
        'parent': '2.6',
        'title': 'Miete Zentralmensa (MathPhysTheo)',
        'name': 'Miete Zentralmensa (MathPhysTheo)',
        'text': '',
        'value': 1698.39,
        'events': {'click': displaytext}
    },{
        'id': '3.24',
        'parent': '2.7',
        'title': 'KoMa ',
        'name': 'Reisekosten, KoMa ',
        'text': '',
        'value': 1787.3,
        'events': {'click': displaytext}
    },{
        'id': '3.25',
        'parent': '2.7',
        'title': 'ZaPF ',
        'name': 'Reisekosten, ZaPF ',
        'text': '',
        'value': 332.4,
        'events': {'click': displaytext}
    },{
        'id': '3.26',
        'parent': '2.7',
        'title': 'KIF',
        'name': 'Reisekosten, KIF',
        'text': '',
        'value': 853.53,
        'events': {'click': displaytext}
    },{
        'id': '3.27',
        'parent': '2.7',
        'title': 'Poolvernetzungstreffen',
        'name': 'Reisekosten, Poolvernetzungstreffen',
        'text': '',
        'value': 256.5,
        'events': {'click': displaytext}
    },{
        'id': '3.28',
        'parent': '2.7',
        'title': 'KIFKoMa',
        'name': 'Reisekosten, KIFKoMa',
        'text': '',
        'value': 214.25,
        'events': {'click': displaytext}
    },{
        'id': '3.29',
        'parent': '2.7',
        'title': 'DMV-Jahrestagung',
        'name': 'Reisekosten, DMV-Jahrestagung',
        'text': '',
        'value': 568.75,
        'events': {'click': displaytext}
    },{
        'id': '3.30',
        'parent': '2.8',
        'title': 'Mitgliedsbeitrag, DMV',
        'name': 'Mitgliedsbeitrag, DMV',
        'text': '',
        'value': 210,
        'events': {'click': displaytext}
    },{
        'id': '3.31',
        'parent': '2.9',
        'title': 'Anschaffung, Gastro-Kaffeemaschine',
        'name': 'Anschaffung, Gastro-Kaffeemaschine',
        'text': '',
        'value': 98.65,
        'events': {'click': displaytext}
    },{
        'id': '3.32',
        'parent': '2.10',
        'title': 'Miete Landheim',
        'name': 'Miete Landheim',
        'text': '',
        'value': 2475,
        'events': {'click': displaytext}
    },{
        'id': '3.33',
        'parent': '2.11',
        'title': 'Allgemein Rücklage für 2018',
        'name': 'Allgemein Rücklage für 2018',
        'text': '',
        'value': 16307.69,
        'events': {'click': displaytext}
    },{
        'id': '3.34',
        'parent': '2.12',
        'title': 'Zweckgebundene Rücklage "ZaPF"',
        'name': 'Zweckgebundene Rücklage "ZaPF"',
        'text': '',
        'value': 5000.00,
        'events': {'click': displaytext}
    },{
        'id': '3.35',
        'parent': '2.13',
        'title': 'Zweckgebundene Rücklage "Tresor"',
        'name': 'Zweckgebundene Rücklage "Tresor"',
        'text': '',
        'value': 1700.00,
        'events': {'click': displaytext}
    }];

    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');


    Highcharts.chart('ausgabencontainer', {

        chart: {
            height: '100%'
        },

        title: {
            text: 'Ausgaben'
        },
        subtitle: {
            text: 'der Fachschaft MathPhysInfo 2017'
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
                    format: '{point.title}:<br>{point.value}€',
                    filter: {
                        property: 'outerArcLength',
                        operator: '>',
                        value: 64
                    }
                }
            }, {
                level: 2,
                dataLabels: {
                    rotationMode: 'parallel',
                }
            }, {
                level: 3,
                colorByPoint: true,
                dataLabels: {
                    
                }
            }, {
                level: 4,
                colorVariation: {
                    key: 'brightness',
                    to: -0.5
                },
                dataLabels: {
                    
                }
            }]

        }],
        tooltip: {
            headerFormat: "",
            pointFormat: '<b>{point.name}</b>: <b>{point.value} €</b>'
        }
    });