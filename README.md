# VS-Finance-Visualizer

Live Version: [mathphys.info/finanzen/](https://mathphys.info/finanzen/)

![Screenshot](https://mathphys.info/~tbuss/Finance-Visualizer.png)

## Verwendet
* HighCharts für das sunburst Diagramm
* jQuery für sämtliche Interaktionen
* Semantic UI für das schöne Aussehen
* [palette.js](https://github.com/google/palette.js) für die Farbauswahl

## Anpassen
Die Daten werden in `einnahmen.js` bzw. `ausgaben.js` in einer Liste mit Objekten der folgenden Struktur gespeichert:

```js
{
  'id': '0.0',
  'parent': '0',
  'title': 'kurzer Titel',
  'name': 'längerer Titel',
  'text': 'langer Beschreibungstext, bei dem auch html Tags verwendet werden können',
  'value': 10.00, 
}
```
Das Attribut "value" gibt an, wie fiel Geld ausgegeben wurde, es sollte nur in der untersten Ebene verwendet Werden. Das Attribut "parent" gibt die ID des Elternknotens an und definiert so die Baumstruktur. Beispielsweise ist bei uns "Veranstaltungen und Projekte" (ID: 0.8) Elternknoten von "Frustcafe", deshalb ist bei "Frustcafe" 0.8 als parent eingetragen.

Möchte man den Finance-Visualizer in anderen Fachschaften einsetzen, müssen außerdem die Dateien im Ordner `logos` und die `index.html` angepasst werden.