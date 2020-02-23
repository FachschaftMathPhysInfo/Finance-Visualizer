Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: '.',
    loading: 'Daten werden geladen...',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    viewFullscreen: "Vollbildmodus",
    exportButtonTitle: "Exportieren",
    printButtonTitle: "Drucken",
    printChart: "Diagramm drucken",
    rangeSelectorFrom: "Von",
    rangeSelectorTo: "Bis",
    rangeSelectorZoom: "Zeitraum",
    downloadPNG: 'Download als PNG-Bild',
    downloadJPEG: 'Download als JPEG-Bild',
    downloadPDF: 'Download als PDF-Dokument',
    downloadSVG: 'Download als SVG-Bild',
    resetZoom: "Zoom zurücksetzen",
    resetZoomTitle: "Zoom zurücksetzen"
  }
});

fetch('einnahmen.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displaytext = function (event) {
      $('#einnahmenname').text(this.name);
      $('#einnahmenvalue').text('Betrag: ' + Number(this.value).toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €');
      $('#einnahmentext').html(this.text);
    }

    var parents = [];
    for (var i = 0; i < data.length; i++) {
      data[i]['events'] = {'click': displaytext};
      parents.push(data[i]['parent']);
    }
    parents = Array.from(new Set(parents));
    var colorSeq = palette('tol-rainbow', parents.length);
    var colorMap = {};
    for (var i = 0; i < parents.length; i++) {
      colorMap[parents[i]] = "#" + colorSeq[i];
    }
    for (var i = 0; i < data.length; i++) {
      if (data[i]['parent'] == "0.0") {
        data[i]['color'] = colorMap[data[i]["id"]];
      } else if (data[i]['id'] == "0.0") {
        data[i]['color'] = '#ededed';
      }
    }

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
            format: '{point.title}:<br> {point.value:,.2f} €',
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
        pointFormat: '<b>{point.name}</b>: <b>{point.value:,.2f} €</b>'
      }
    });
  });
