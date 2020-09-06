function displaytextAusgaben(event) {
  $('#ausgabenname').text(this.name);
  $('#ausgabenvalue').text('Betrag: ' + toGermanAmount(this.value) + ' €');
  $('#ausgabentext').html(this.text);
}

function displaytextEinnahmen(event) {
  $('#einnahmenname').text(this.name);
  $('#einnahmenvalue').text('Betrag: ' + toGermanAmount(this.value)+ ' €' );
  $('#einnahmentext').html(this.text);
}

function toGermanAmount(value) {
  return Number(value).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function makeColor(data, displaytext) {
  var parents = [];
  for (var i = 0; i < data.length; i++) {
    data[i]['events'] = { 'click': displaytext };
    if (data[i]['parent'] == "0") {
      parents.push(data[i]['id']);
    }
  }

  var colorSeq = palette('tol-rainbow', parents.length);
  var colorMap = {};
  for (var i = 0; i < parents.length; i++) {
    colorMap[parents[i]] = "#" + colorSeq[i];
  }

  for (var i = 0; i < data.length; i++) {
    if (data[i]['parent'] == "0") {
      data[i]['color'] = colorMap[data[i]['id']];
    } else if (data[i]['id'] == "0") {
      data[i]['color'] = '#ededed';
    }
  }
}


export function show(balanceSheet) {
  makeColor(balanceSheet.einnahmen, displaytextEinnahmen)
  makeColor(balanceSheet.ausgaben, displaytextAusgaben)

  let sumEinnahmen  = 0;
  let einnahmenRoot = null;
  for(let entry of balanceSheet.einnahmen) {
    if (entry.id == "0") {
      einnahmenRoot = entry;
    } else {
      sumEinnahmen += Number(entry.value);
    }
  }

  einnahmenRoot.value = sumEinnahmen;
  displaytextEinnahmen.bind(einnahmenRoot)();

  let sumAusgaben  = 0;
  let ausgabenRoot = null;
  for (let entry of balanceSheet.ausgaben) {
    if (entry.id == "0") {
      ausgabenRoot = entry;
    } else if (entry.parent != "0") {
      sumAusgaben += Number(entry.value);
    }
  }

  ausgabenRoot.value = sumAusgaben;
  displaytextAusgaben.bind(ausgabenRoot)();

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
      text: $("#headertext .subtitle").text() + " " + $(".year-switcher").val() // TODO: Refactor this, it is ugly
    },
    series: [{
      type: "sunburst",
      data: balanceSheet.ausgaben,
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
          format: '{point.title}:<br>{point.value:,.2f} €',
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        dataLabels: {}
      }, {
        level: 3,
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
      pointFormat: '<b>{point.name}</b>: <b>{point.value:,.2f} €</b>'
    }
  });

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
      text: $("#headertext .subtitle").text() + " " + $(".year-switcher").val() // TODO: Refactor this, it is ugly
    },
    series: [{
      type: "sunburst",
      data: balanceSheet.einnahmen,
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
}

export function setHaushaltsplanLink(year) {
  $("#haushaltsplan-link").attr("href", "/data/"+year+"/Haushaltsplan.pdf");
}

export function initialize() {
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
}