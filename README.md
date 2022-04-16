# VS-Finance-Visualizer

Live Version: [mathphys.info/finanzen/](https://mathphys.info/finanzen/)

![Screenshot](https://mathphys.info/~tbuss/Finance-Visualizer.png)

## Verwendet

* HighCharts für das sunburst Diagramm
* jQuery für sämtliche Interaktionen
* Semantic UI für das schöne Aussehen
* [palette.js](https://github.com/google/palette.js) für die Farbauswahl

## Anpassen

Die Daten für ein Jahr (z.B. `2019`) werden im Ordner `data/<jahr>/` (z.B. `data/2019`) gespeichert.
Dieser Ordner enthält drei Dateien:

* `einnahmen.json`: Einnahmen im JSON-Format
* `ausgaben.json`: Ausgaben im JSON-Format
* `Haushaltsplan.pdf`: Der Haushaltsplan für dieses Jahr, kann im Tab "Allgemein" heruntergeladen werden

Die Datei `data/years.json` enthält eine aufsteigend sortierte Liste von den Jahren, zu denen es Daten gibt, z.B.

```json
[
    2017,
    2018,
    2019
]
```

Fügt man einen Ordner für ein neues Jahr hinzu, muss man das Jahr auch in `data/years.json` eintragen, sonst taucht es auf dem UI nicht auf.

### Struktur für `einnahmen.json` und `ausgaben.json`

Die Dateien enthalten jeweils eine Liste von Objekten mit der folgenden Struktur:

```json
{
  "id": "0.0",
  "parent": "0",
  "title": "Kurzer Titel, wird im Diagramm angezeigt",
  "name": "Längerer Titel, wird in der Beschreibung und im Diagramm als Tooltip angezeigt",
  "text": "Langer Beschreibungstext, der auch <strong>HTML-Tags</strong> enthalten kann.",
  "value": 42.13
},
```

Das Attribut `value` gibt an, wie viel Geld ausgegeben wurde, es darf nur in der untersten Ebene verwendet werden. Das Attribut "parent" gibt die ID des Elternknotens an und definiert so die Baumstruktur. Beispielsweise ist bei uns "Veranstaltungen und Projekte" (ID: 0.8) Elternknoten von "Frustcafe", deshalb ist bei "Frustcafe" 0.8 als `parent` eingetragen.

Als Wurzelknoten in den Dateien `ausgaben.json` und `einnahmen.json` verwenden wir einen generischen "Ausgaben"- bzw. "Einnahmen"-Knoten mit generischem Beschreibungstext, rein theoretisch kann aber auch ein für ein Jahr spezifischer Text verfasst werden (falls man z.B. auf eine Besonderheit in den Bilanzen hinweisen möchte).

In der Datei `einnahmen.json` gibt es insgesamt 2 Ebenen (Wurzelebene und Eintragsebene), in der Datei `ausgaben.json` gibt es insgesamt 3 Ebenen (Wurzelebene, eine Zwischenebene und die Eintragsebene). Falls man das ändern möchte, muss der Code in `js/display.js` geändert werden.

Wichtig: Die Dateien müssen valide JSON-Dateien sein (im Zweifelsfall mit einem Online-Tool (einfach nach "JSON validator" suchen) prüfen), sonst zeigt die Oberfläche nichts an. Insbesondere darf nach dem letzten Eintrag in einem Objekt kein Komma stehen.

Möchte man den Finance-Visualizer in anderen Fachschaften einsetzen, müssen außerdem die Dateien im Ordner `logos` und die `index.html` angepasst werden.

## Installation

Um den Finance-Visualizer zu installieren, benötigt man nur einen Webserver (z.B. Apache oder Nginx), der den Inhalt dieses ganzen Verzeichnisses bereitstellt.

Wichtig: Auch zur Entwicklungszeit wird ein (temporärer) Webserver benötigt, da das Programm JavaScript-Module enthält, die nur über einen Webserver nachgeladen werden können. Dieser Server kann aber lokal auf der eigenen Maschine laufen (muss also nichts ins Internet veröffentlichen).

Möglichkeiten, um einen temporären Webserver zu starten:

* [Pythons `http.server`-Modul](https://docs.python.org/3/library/http.server.html) (weiter unten auf der verlinkten Website befindet sich der Befehl zum direkten Starten des Servers auf der Kommandozeile)
* [npm `static-server` Modul](https://www.npmjs.com/package/static-server#getting-started) (einfach global installieren und dann im gewünschten Verzeichnis, also auf der Ebene der `index.html` den Befehl `static-server` ausführen)

## Aktive Instanzen

Instanzen des Finance-Visualizers, von denen wir wissen. Fühlt euch frei, eure eigenen Instanzen über einen Pull Request der Liste hinzuzufügen:

* [Fachschaftshaushalt MathPhysInfo](https://mathphys.stura.uni-heidelberg.de/finanzen/)
