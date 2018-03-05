displaytext = function(event){
    $('#einnahmenname').text(this.name);
    $('#einnahmenvalue').text('Betrag: ' + this.value + ' €');
    $('#einnahmentext').text(this.text);
}

    var data = [{
        'id': '0.0',
        'parent': '',
        'title': 'Einnahmen 2017',
        'name': 'Einnahmen 2017',
        'text': 'Lorem Ipsum',
        'events': {'click': displaytext},
        'color': '#ededed',
    },{
        'id': '1.1',
        'parent': '0.0',
        'name': 'Einnahmen aus Eigenbeteiligungen',
        'text': 'FSWE',
        'value': 375,
        'events': {'click': displaytext}
    },{
        'id': '1.2',
        'parent': '0.0',
        'name': 'Einnahmen aus hoheitlichen Aufgaben',
        'text': 'AnfiFete',
        'value': 1675.02,
        'events': {'click': displaytext}
    },{
        'id': '1.3',
        'parent': '0.0',
        'name': 'Einnahme on Pfand',
        'text': '',
        'value': 850,
        'events': {'click': displaytext}
    },{
        'id': '1.4',
        'parent': '0.0',
        'name': 'Spenden an die Fachschaft',
        'text': '',
        'value': 194.11,
        'events': {'click': displaytext}
    },{
        'id': '1.5',
        'parent': '0.0',
        'title': 'Einnahmen<br> aus VS-Beiträgen',
        'name': 'Einnahmen aus VS-Beiträgen',
        'text': '',
        'value': 15717.99,
        'events': {'click': displaytext}
    },{
        'id': '1.6',
        'parent': '0.0',
        'title': 'Rücklagen<br> aus dem Vorjahr',
        'name': 'Rücklagen aus dem Vorjahr',
        'text': '',
        'value': 13559.47,
        'events': {'click': displaytext}
    },{
        'id': '1.7',
        'parent': '0.0',
        'title': 'Zweckgebundene<br> Rücklage "ZaPF"',
        'name': 'Zweckgebundene Rücklage "ZaPF"',
        'text': '',
        'value': 5000,
        'events': {'click': displaytext}
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