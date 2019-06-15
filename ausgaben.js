displaytext = function(event) {
    $('#ausgabenname').text(this.name);
    $('#ausgabenvalue').text('Betrag: ' + Number(this.value).toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €');
    $('#ausgabentext').text(this.text);
}

var data = [{
    'id': '0.0',
    'parent': '',
    'title': 'Ausgaben',
    'name': 'Ausgaben 2018',
    'text': 'Damit die Fachschaft ihren Aufgaben nachkommen kann, sind verschiedene Ausgaben nötig. Die Mittel, die zum Ende des Haushaltsjahres nicht verausgabt wurden, fließen an die zentrale Ebene der Verfassten Studierendenschaft zurück.',
    'events': { 'click': displaytext },
//    'color': '#ededed'
}, {
    'id': '1.1',
    'parent': '0.0',
    'title': 'EDV-Bedarf und Infrastruktur',
    'name': 'EDV-Bedarf und Infrastruktur',
    'text': 'Unsere Fachschaft betreibt ihren eigenen Server samt EDV-System. Aktive Fachschaftler haben in diesem System einen Account samt Mailadresse. In diesem System können Mailinglisten betrieben werden, Dateien, Prüfungsberichte und vertrauliche Gremienunterlagen verwaltet werden, Informationen in einem Wiki dokumentiert werden und der sog. Kummerkasten betrieben werden. Diese Programme sind inzwischen essentieller Teil der Arbeitsabläufe in unserer Fachschaft. Damit diese Infrastruktur langfristig einsetzbar bleibt und technische Probleme nicht die inhaltliche Arbeit der Fachschaft behindern, ist es regelmäßig nötig, Komponenten auszutauschen und zu reparieren.',
    'events': { 'click': displaytext }
}, {
    'id': '1.2',
    'parent': '0.0',
    'title': 'Büromaterial',
    'name': 'Büromaterial',
    'text': 'Um Verwaltungsarbeiten, die im Rahmen der Fachschaftsarbeit anfallen (z.B. Verwaltung der Finanzen), sachgemäß durchführen zu können, muss regelmäßig Büromaterial nachbeschafft werden. Dazu hat die Fachschaft einen Kundenaccount bei Büro Mix, über den unter den Bedinungen des Rahmenvertrages zwischen der Universität und Büro Mix das benötigte Büromaterial zu günstigen Preisen beschafft werden kann.',
    'events': { 'click': displaytext }
}, {
    'id': '1.3',
    'parent': '0.0',
    'title': 'Druck- und Kopierkosten',
    'name': 'Druck- und Kopierkosten',
    'text': 'Die Fachschaft betreibt in ihrem Büro einen eigenen Drucker, um alltäglich anfallende Dokumente und Unterlagen bei Bedarf schnell und unkompliziert drucken zu können. Um diesen Drucker in Betrieb zu halten, müssen regelmäßg Papier und Toner beschafft werden. Für Veranstaltungen muss der Druck von Plakaten, Flyern und ähnlichem meist extern in Auftrag gegeben werden.',
    'events': { 'click': displaytext }
}, {
    'id': '1.4',
    'parent': '0.0',
    'title': 'Stadtmobil',
    'name': 'Transportkosten (Stadtmobil)',
    'text': 'Die Fachschaft hat bei dem Carsharing-Dienst Stadtmobil ein Kundenkonto, über das PKW bis zur Größe von Kastenwägen ausgeliehen werden können. Mit diesen Fahrzeugen können Einkäufe für größere Veranstaltungen (z.B. die Vollversammlungen) erledigt werden und auch die Reise zu Bundesfachschaftentagungen und anderen Konferenzen außerhalb Heidelbergs durchgeführt werden, da dies in manchen Situation günstiger ist als mit der Bahn oder anderen Alternativen zu reisen.',
    'events': { 'click': displaytext }
}, {
    'id': '1.5',
    'parent': '0.0',
    'title': 'Bewirtung',
    'name': 'Bewirtungskosten',
    'text': 'Im Lauf des Haushaltsjahres richtet die Fachschaft meist eine Reihe kleinerer Veranstaltungen aus, wie beispielsweise Berufsinformationsveranstaltungen (meist als "Wissenschaftler im Beruf" betitelt) oder Treffen, bei denen sich Tutor*innen über die Erfahrungen in ihren Übungsgruppen austauschen können. Da viele dieser Veranstaltungen nach Ende der meisten Lehrveranstaltungen um 18:00 beginnen und bis in den späten Abend gehen, ist es oft nötig für die Teilnehmenden Verpflegung bereitzustellen, damit diese nicht gezwungen sind wegen Hungers eine Veranstaltung vorzeitig zu verlassen. Weiterhin finden jedes Semester einige Gremiensitzungen der Fachschaft und Arbeitstreffen statt, die so lange dauern, dass eine Verpflegung notwendig ist, um die Arbeit sinnvoll zu Ende führen zu können. Ein Beispiel hierfür wäre das Abtippen der Lehrevaluation in der Physik, wofür mehrere Fachschaftler meist von Samstagvormittag bis in den frühen Abend brauchen, weshalb die Fachschaft in den vergangen Jahren für eine Bewirtung zu Mittag gesorgt hat.',
    'events': { 'click': displaytext }
}, {
    'id': '1.6',
    'parent': '0.0',
    'title': 'Sonstiges',
    'name': 'Sonstige Materialien und Dienstleistungen',
    'text': 'Hierunter fallen Ausgaben, deren Natur und Höhe sich im Augenblick noch nicht abzeichnen oder die in keine der anderen Kategorien einzuordnen sind.',
    'events': { 'click': displaytext }
}, {
    'id': '1.7',
    'parent': '0.0',
    'title': 'Reise- und<br>Teilnahme',
    'name': 'Reise- und Teilnahmekosten',
    'text': 'Aktive Mitglieder der Fachschaften nehmen im Laufe des Jahres an verschiedenen Tagungen und Konferenzen außerhalb Heidelbergs teil, wobei Reise- und Teilnahmekosten anfallen. Eine repräsentative aber nicht zwangsläufig vollständige Auswahl dieser Veranstaltungen findet sich im Folgenden:<ul><li>Bundesfachschaftentagungen und Konferenzen von Verbänden, die unter Posten 45 aufgeführt sind. Die Teilnahme an diesen Tagungen bringt für die Fachschaft die folgenden Vorteile: <ul> <li> Die fachlichen oder hochschulpolitischen Interessen der Studierenden können auch auf einer überregionalen Ebene vertreten werden. Dies ist insbesondere interessant bei Themen mit einer überregionalen Dimension (z.B. Gesetzesnovellen auf Bundes- oder Landesebene) oder bei Themen, für die andere überregionale Gremien (wie z.B. die Hochschulrektorenkonferenz) Rahmenordnungen o.ä. erstellen, die bei der Umsetzung eines Sachverhaltes auf Ebene der Fakultäten oft eine sehr wichtige Rolle spielen. </li><li> Überregionalen Studierendenbeziehungen können so sehr günstig und nachhaltig etabliert und gepflegt werden. Der Austausch mit Studierndenvertretern anderer Universitäten und deren Erfahrungen vereinfacht Gremienvertretern der Fachschaft die Arbeit in Gremien in Heidelberg oft erheblich und eröffnet neue Perspektiven auf Probleme, die an anderen Universitäten eventuell bereits gelöst wurden.</li><li> Die Pflege der Mitgliedschaft in den Verbänden, die unter Posten 45 aufgeführt werden.</ul></li><li>Studentische Akkreditierungsseminare und Poolvernetzungstreffen (PVT). Auf sutdentischen Akkreditierungsseminaren werden Teilnehmenden die Grundlagen von Programmakkreditierung vermittelt, sodass sie im Anschluss qualifiziert sind als studentische Gutachter an Akkreditierungsverfahren teilzunehmen. Die bei der Schulung und bei Akkreditierungsverfahren an anderen Universitäten gesammelten Erfahrungen kommen den Gremienvertretern auch bei ihrer Arbeit in den Gremien der Universität zugute, sodass die Fortbildung im Interesse der Fachschaft ist. Weiterhin nimmt die Fachschaft nach §65 LHG BaWü an den Aufgaben der Hochschule nach §§2 bis 5 teil, worunter Qualitätssicherung an den Hochschulen zählt und somit Akkreditierung. Auf den PVT treffen sich Vertreter des studentischen Akkrediterungspools, um aktuelle Entwicklungen und veränderte Regelungen im Akkreditierungswesen zu diskutieren und zu ihnen Stellung zu beziehen. Das bietet die Gelegenheit das Akkreditierungswesen gemäß der Interessen der Heidelberger Studierenden weiterzuentwickeln.</li><li>Außerdem bietet sich Finanzverantwortlichen und anderen Amtsträgern unregelmäßig die Möglichkeit, an Schulungen teilzunehmen, die ihnen jurisitsche und formale Grundlagen ihrer Aufgaben vermitteln, die für Studierende, die ihre Tätigkeit ehrenamtlich ausüben, oft nur schwer zu durchschauen sind. Für die ordnungsgemäße Verwaltung der Angelegenheit ist es allerdings unerläßlich, dass diese Amtsträger adäquat auf ihre Aufgaben vorbereitet und über diese informiert sind.</li>',
    'events': { 'click': displaytext }
}, {
    'id': '1.8',
    'parent': '0.0',
    'title': 'Mitgliedsbeiträge',
    'name': 'Mitgliedsbeiträge',
    'text': 'Unsere SFSen sind Mitglied in verschiedenen Verbänden und Dachorganisationen; derzeit sind das die "Deutsche Mathematiker Vereinigung" (DMV), "Zusammenkunft aller Physikfachschaften e.V." (ZaPF e.V.), "Konferenz der Mathematikfachschaften e.V." (KoMa e.V.) und "Konferenz der Informatik Fachschaften e.V." (KIF e.V.).In diesen Verbänden sind die SFSen Mitglied, weil sie sich mit Themen der Lehre in den jeweiligen Fächern auseinandersetzen und auf eine Weiterentwicklung dieser im Sinne der Studierenden hinarbeiten. Die Mitgliedschaft unterstützt diese Verbände dabei, ihre Tätigkeit auch langfristig fortsetzen zu können und ermöglicht es Mitgliedern der Fachschaften an Tagungen und Konferenzen der Verbände teilzunehmen und dort die Interessen der Heidelberger Studierenden zu vertreten.',
    'events': { 'click': displaytext }
}, {
    'id': '1.9',
    'parent': '0.0',
    'title': 'Veranstaltungen und Projekte',
    'name': 'Veranstaltungen und Projekte',
    'text': '',
    'events': { 'click': displaytext }
}, {
    'id': '1.10',
    'parent': '0.0',
    'title': 'Ausstattung Büro',
    'name': 'Ausstattung Büro/Fachschaftsraum',
    'text': '',
    'events': { 'click': displaytext }
}, {
    'id': '2.1',
    'parent': '1.1',
    'title': 'Anschaffung Server',
    'name': 'Anschaffung Server',
    'text': '',
    'value': 8859.81,
    'events': { 'click': displaytext }
}, {
    'id': '2.2',
    'parent': '1.1',
    'title': 'USB Sicherheitsschlüssel',
    'name': 'USB Sicherheitsschlüssel',
    'text': '',
    'value': 95.18,
    'events': { 'click': displaytext }
}, {
    'id': '2.3',
    'parent': '1.1',
    'title': 'Anschaffung Acess-Point',
    'name': 'Anschaffung Acess-Point',
    'text': '',
    'value': 137.90,
    'events': { 'click': displaytext }
}, {
    'id': '2.4',
    'parent': '1.1',
    'title': 'Domains',
    'name': 'Erneuerung Domains mathphysinfo, zapf',
    'text': '',
    'value': 21.31,
    'events': { 'click': displaytext }
}, {
    'id': '2.5',
    'parent': '1.2',
    'title': 'Dokumententaschen',
    'name': 'Anschaffung Dokumententaschen',
    'text': '',
    'value': 32.40,
    'events': { 'click': displaytext }
}, {
    'id': '2.6',
    'parent': '1.2',
    'title': 'Büromaterial',
    'name': 'Textmarker, Papier, Tafelstifte',
    'text': '',
    'value': 330.23,
    'events': { 'click': displaytext }
}, {
    'id': '2.8',
    'parent': '1.3',
    'title': 'Toner',
    'name': 'Toner',
    'text': '',
    'value': 99.91,
    'events': { 'click': displaytext }
}, {
    'id': '2.9',
    'parent': '1.3',
    'title': 'Kopierpapier',
    'name': 'Kopierpapier',
    'text': '',
    'value': 38.32,
    'events': { 'click': displaytext }
}, {
    'id': '2.10',
    'parent': '1.3',
    'title': 'Ersatzteil Drucker',
    'name': 'Ersatzteil Drucker',
    'text': '',
    'value': 201.80,
    'events': { 'click': displaytext }
}, {
    'id': '2.11',
    'parent': '1.3',
    'title': 'Plakate WiB',
    'name': 'Plakate WiB',
    'text': '',
    'value': 35.00,
    'events': { 'click': displaytext }
}, {
    'id': '2.12',
    'parent': '1.4',
    'title': 'Transportkosten (Stadtmobil)',
    'name': 'Transportkosten (Stadtmobil)',
    'text': '',
    'value': 890.32,
    'events': { 'click': displaytext }
}, {
    'id': '2.17',
    'parent': '1.5',
    'title': 'Wissenschaftler<br>im Beruf',
    'name': 'Verpflegung Wissenschaftler im Beruf',
    'text': '',
    'value': 489.69,
    'events': { 'click': displaytext }
}, {
    'id': '2.18',
    'parent': '1.5',
    'title': 'Tutorenversammlung Physik',
    'name': 'Verpflegung Tutorenversammlung Physik',
    'text': '',
    'value': 45.00,
    'events': { 'click': displaytext }
}, {
    'id': '2.19',
    'parent': '1.5',
    'title': 'Kaffeemaschine',
    'name': 'Anschaffung Gastokaffeemaschine',
    'text': '',
    'value': 82.90,
    'events': { 'click': displaytext }
}, {
    'id': '2.20',
    'parent': '1.6',
    'title': 'Gasflasche Grill',
    'name': 'Gasflasche Grill',
    'text': '',
    'value': 15.60,
    'events': { 'click': displaytext }
}, {
    'id': '2.21',
    'parent': '1.6',
    'title': 'Handrührgeräte',
    'name': 'Handrührgeräte',
    'text': '',
    'value': 37.99,
    'events': { 'click': displaytext }
}, {
    'id': '2.22',
    'parent': '1.6',
    'title': 'Waffeleisen',
    'name': 'Waffeleisen',
    'text': '',
    'value': 79.96,
    'events': { 'click': displaytext }
}, {
    'id': '2.23',
    'parent': '1.6',
    'title': 'Anschaffung Geschirrtücher',
    'name': 'Anschaffung Geschirrtücher',
    'text': '',
    'value': 42.97,
    'events': { 'click': displaytext }
}, {
    'id': '2.24',
    'parent': '1.7',
    'title': 'KoMa ',
    'name': 'Reisekosten, KoMa ',
    'text': '',
    'value': 100.00,
    'events': { 'click': displaytext }
}, {
    'id': '2.25',
    'parent': '1.7',
    'title': 'ZaPF ',
    'name': 'Reisekosten, ZaPF ',
    'text': '',
    'value': 49.40,
    'events': { 'click': displaytext }
}, {
    'id': '2.26',
    'parent': '1.7',
    'title': 'KIF',
    'name': 'Reisekosten, KIF',
    'text': '',
    'value': 1280.63,
    'events': { 'click': displaytext }
}, {
    'id': '2.27',
    'parent': '1.7',
    'title': 'Poolvernetzungs-<br>treffen',
    'name': 'Reisekosten, Poolvernetzungstreffen',
    'text': '',
    'value': 495.25,
    'events': { 'click': displaytext }
}, {
    'id': '2.28',
    'parent': '1.7',
    'title': 'Akkreditierungsseminar',
    'name': 'Reisekosten, Akkreditierungsseminar',
    'text': '',
    'value': 159.85,
    'events': { 'click': displaytext }
}, {
    'id': '2.30',
    'parent': '1.8',
    'title': 'Mitgliedsbeitrag, DMV',
    'name': 'Mitgliedsbeitrag, DMV',
    'text': '',
    'value': 210,
    'events': { 'click': displaytext }
}, {
    'id': '2.31',
    'parent': '1.9',
    'title': 'Vorkurs',
    'name': 'Vorkurs',
    'text': 'Die Erstsemestereinführungen (im Folgenden "Vorkurs") in unseren Fächern werden durch die MathPhysInfo ausgerichtet. Als Abschluss dieses Vorkurses gibt es eine abendliche Feier, die sog. AnfiFete. Für dein Einkauf der Lebensmittel und Getränke sowie die Bereitstellung der nötigen Technik fallen Kosten an, die allerdings durch die Einnahmen im Posten "Einnahmen aus hoheitlichen Veranstaltungen" gedeckt werden.',
    'value': 1639.14,
    'events': { 'click': displaytext }
}, {
    'id': '2.33',
    'parent': '1.9',
    'title': 'Vollversammlungen',
    'name': 'Vollversammlungen',
    'text': '',
    'value': 1167.12,
    'events': { 'click': displaytext }
}, {
    'id': '2.32',
    'parent': '1.9',
    'title': 'FSWE',
    'name': 'FSWE',
    'text': 'Einmal im Semester organisiert die Fachschaft das Fachschaftswochende (FSWE):<br>Während des FSWE fahren aktive Fachschaftler*innen gemeinsam in ein Landheim im Odenwald, um dort zusammen an größeren inhaltlichen Themen zu arbeiten, die Diskussionen zu führen, für die während der Woche und den zeitlich begrenzten Sitzungen keine Zeit bleibt und um langfristige Projekte voranzutreiben. Dazu finden im Lauf des Samstag mehrere Arbeitskreise statt und am Sonntag das Abschlussplenum, in dem die Ergebnisse der AKs vorgestellt und diskutiert werden. In einem Gremienplanspiel werden außerdem die neuen aktiven Fachschaftsmitglieder, die noch keine Gremienerfahrung haben, auf ihre zukünftigen Ämter vorbereitet. Es ist üblich, dass die Teilnehmenden, die nicht zum ersten Mal auf dem FSWE sind, eine Eigenbeteiligung von 10€ entrichten, da die Teilnehmenden während des Wochenendes mit Essen, Snacks und Getränken versorgt werden.<br>Da auf dem FSWE der Fokus eindeutig auf inhaltlicher Arbeit, Fortbildung für Gremienarbeit und Stärkung des sozialen Zusammenhalts unter den aktiven Fachschaftsmitgliedern liegen soll, ist vorgesehen, dass nur aktive Fachschaftler (also meist solche, die ein Amt ausüben) und Einsteiger, die ein ernstzunehmendes Interesse dan der inhaltlichen Arbeit der Fachschaft haben, am FSWE teilnehmen.',
    'value': 2564.15,
    'events': { 'click': displaytext }
}, {
    'id': '2.34',
    'parent': '1.9',
    'title': 'ZaPF in Heidelberg',
    'name': 'ZaPF in Heidelberg',
    'text': '',
    'value': 5000.00,
    'events': { 'click': displaytext }
}, {
    'id': '2.35',
    'parent': '1.9',
    'title': 'MathPhysTheo SoSe18',
    'name': 'MathPhysTheo - Kooperation IMP e.V. SoSe18',
    'text': '',
    'value': 1126.00,
    'events': { 'click': displaytext }
}, {
    'id': '2.36',
    'parent': '1.9',
    'title': 'MathPhysTheo WiSe18/19',
    'name': 'MathPhysTheo WiSe18/19',
    'text': '',
    'value': 14857.48,
    'events': { 'click': displaytext }
}, {
    'id': '2.37',
    'parent': '1.10',
    'title': 'Anschaffung Tresor',
    'name': 'Anschaffung Tresor',
    'text': '',
    'value': 1506.43,
    'events': { 'click': displaytext }
}, {
    'id': '2.38',
    'parent': '1.10',
    'title': 'Sonstige Büroausstattung',
    'name': 'Sonstige Büroausstattung',
    'text': '',
    'value': 274.03,
    'events': { 'click': displaytext }
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
        pointFormat: '<b>{point.name}</b>: <b>{point.value:.2f} €</b>'
    }
});