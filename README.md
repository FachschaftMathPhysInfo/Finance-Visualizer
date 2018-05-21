# VS-Finance-Visualizer

Live Version: www.mathphys.info/finanzen/

![Screenshot](https://static.ethylomat.de/finvis/finvis.png)

## Verwendet
* HighCharts für das sunburst Diagramm
* jQuery für sämtliche Interaktionen
* Semantic UI für das schöne Aussehen

## Anpassen
Die Daten werden in dem `data` Objekt in `einnahmen.js` bzw. `ausgaben.js` in einer Liste mit Objekten der folgenden Struktur gespeichert:

```js
{
'id': '1.0',
'parent': '0',
'title': 'kurzer Titel',
'name': 'längerer Titel',
'text': 'langer Beschreibungstext, bei dem auch html Tags verwendet werden können',
'events': {'click': displaytext},
'color': '#ededed'
}        
```
