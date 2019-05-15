displaytext = function(event){
    $('#ausgabenname').text(this.name);
    $('#ausgabenvalue').text('Betrag: ' + Number(this.value).toLocaleString("es-ES", {minimumFractionDigits: 2}) + ' €');
    $('#ausgabentext').text('');
    $('#ausgabentext').append(this.text);
}
        
    var data = [{
        'id': '0.0',
        'parent': '',
        'title': 'Ausgaben,<br> Rücklagen',
        'name': 'Ausgaben & Rücklagen 2018',
        'text': 'Damit die Fachschaft ihren Aufgaben nachkommen kann, sind verschiedene Ausgaben nötig. Die Mittel, die zum Ende des Haushaltsjahres nicht verausgabt wurden, fließen entweder in die Rücklage unserer Fachschaft oder in die Rücklage der Studierendenschaft (falls die Rücklage der Fachschaft ihre Maximalgröße erreicht hat).',
        'events': {'click': displaytext},
        'color': '#ededed'
    },{
        'id': '1.1',
        'parent': '0.0',
        'title': 'Ausgaben',
        'name': 'Ausgaben',
        'text': 'Damit die Fachschaft ihren Aufgaben nachkommen kann, sind verschiedene Ausgaben nötig. Hier sind alle tatsächlich getätigten Ausgaben unserer Fachschaft für das Jahr 2017 aufgeführt.',
        'color': 'red',
        'events': {'click': displaytext}
    },{
        'id': '1.2',
        'parent': '0.0',
        'title': 'Rücklagen',
        'name': 'Rücklagen',
        'text': 'Mittel, die nicht verausgabt wurden, fließen in die allgemeine Rücklage der Fachschaft. Diese Rücklage ist limitiert auf die Höhe der jährlichen VS-Zuweisung (ca. 16.000€, s. Einnahmen). Außerdem können zweckgebundene Rücklagen angelegt werden, die von dieser Limitierung ausgenommen sind. Eine zweckgebundene Rücklage kann maximal 2 Jahre bestehen. Falls alle Rücklagen gefüllt sind, fließen in die Mittel in die sog. "Allgemeine Fachschaftenrücklage" auf (zentraler) Ebene der Verfassten Studierndenschaft.',
        'value': 23007.69,
        'color': 'green',
        'events': {'click': displaytext}
    },{
        'id': '2.1',
        'parent': '1.1',
        'title': 'EDV-Bedarf und Infrastruktur',
        'name': 'EDV-Bedarf und Infrastruktur',
        'text': 'Unsere Fachschaft betreibt ihren eigenen Server samt EDV-System. Aktive Fachschaftler haben in diesem System einen Account samt Mailadresse. In diesem System können Mailinglisten betrieben werden, Dateien, Prüfungsberichte und vertrauliche Gremienunterlagen verwaltet werden, Informationen in einem Wiki dokumentiert werden und der sog. Kummerkasten betrieben werden. Diese Programme sind inzwischen essentieller Teil der Arbeitsabläufe in unserer Fachschaft. Damit diese Infrastruktur langfristig einsetzbar bleibt und technische Probleme nicht die inhaltliche Arbeit der Fachschaft behindern, ist es regelmäßig nötig, Komponenten auszutauschen und zu reparieren.',
        'value': 224.64,
        'events': {'click': displaytext}
    },{
        'id': '2.2',
        'parent': '1.1',
        'title': 'Büromaterial',
        'name': 'Büromaterial',
        'text': 'Um Verwaltungsarbeiten, die im Rahmen der Fachschaftsarbeit anfallen (z.B. Verwaltung der Finanzen), sachgemäß durchführen zu können, muss regelmäßig Büromaterial nachbeschafft werden. Dazu hat die Fachschaft einen Kundenaccount bei Büro Mix, über den unter den Bedinungen des Rahmenvertrages zwischen der Universität und Büro Mix das benötigte Büromaterial zu günstigen Preisen beschafft werden kann.',
        'value': 668.94,
        'events': {'click': displaytext}
    },{
        'id': '2.3',
        'parent': '1.1',
        'title': 'Druck- und Kopierkosten',
        'name': 'Druck- und Kopierkosten',
        'text': 'Die Fachschaft betreibt in ihrem Büro einen eigenen Drucker, um alltäglich anfallende Dokumente und Unterlagen bei Bedarf schnell und unkompliziert drucken zu können. Um diesen Drucker in Betrieb zu halten, müssen regelmäßg Papier und Toner beschafft werden. Für Veranstaltungen muss der Druck von Plakaten, Flyern und ähnlichem meist extern in Auftrag gegeben werden.',
        'events': {'click': displaytext}
    },{
        'id': '2.4',
        'parent': '1.1',
        'title': 'Stadtmobil',
        'name': 'Transportkosten (Stadtmobil)',
        'text': 'Die Fachschaft hat bei dem Carsharing-Dienst Stadtmobil ein Kundenkonto, über das PKW bis zur Größe von Kastenwägen ausgeliehen werden können. Mit diesen Fahrzeugen können Einkäufe für größere Veranstaltungen (z.B. die Vollversammlungen) erledigt werden und auch die Reise zu Bundesfachschaftentagungen und anderen Konferenzen außerhalb Heidelbergs durchgeführt werden, da dies in manchen Situation günstiger ist als mit der Bahn oder anderen Alternativen zu reisen.',
        'events': {'click': displaytext}
    },{
        'id': '2.5',
        'parent': '1.1',
        'title': 'Bewirtung',
        'name': 'Bewirtungskosten',
        'text': 'Im Lauf des Haushaltsjahres richtet die Fachschaft meist eine Reihe kleinerer Veranstaltungen aus, wie beispielsweise Berufsinformationsveranstaltungen (meist als "Wissenschaftler im Beruf" betitelt) oder Treffen, bei denen sich Tutor*innen über die Erfahrungen in ihren Übungsgruppen austauschen können. Da viele dieser Veranstaltungen nach Ende der meisten Lehrveranstaltungen um 18:00 beginnen und bis in den späten Abend gehen, ist es oft nötig für die Teilnehmenden Verpflegung bereitzustellen, damit diese nicht gezwungen sind wegen Hungers eine Veranstaltung vorzeitig zu verlassen. Weiterhin finden jedes Semester einige Gremiensitzungen der Fachschaft und Arbeitstreffen statt, die so lange dauern, dass eine Verpflegung notwendig ist, um die Arbeit sinnvoll zu Ende führen zu können. Ein Beispiel hierfür wäre das Abtippen der Lehrevaluation in der Physik, wofür mehrere Fachschaftler meist von Samstagvormittag bis in den frühen Abend brauchen, weshalb die Fachschaft in den vergangen Jahren für eine Bewirtung zu Mittag gesorgt hat.',
        'events': {'click': displaytext}
    },{
        'id': '2.6',
        'parent': '1.1',
        'title': 'Sonstiges',
        'name': 'Sonstige Materialien und Dienstleistungen',
        'text': 'Hierunter fallen Ausgaben, deren Natur und Höhe sich im Augenblick noch nicht abzeichnen oder die in keine der anderen Kategorien einzuordnen sind.',
        'events': {'click': displaytext}
    },{
        'id': '2.7',
        'parent': '1.1',
        'title': 'Reise- und<br>Teilnahme',
        'name': 'Reise- und Teilnahmekosten',
        'text': 'Aktive Mitglieder der Fachschaften nehmen im Laufe des Jahres an verschiedenen Tagungen und Konferenzen außerhalb Heidelbergs teil, wobei Reise- und Teilnahmekosten anfallen. Eine repräsentative aber nicht zwangsläufig vollständige Auswahl dieser Veranstaltungen findet sich im Folgenden:<ul><li>Bundesfachschaftentagungen und Konferenzen von Verbänden, die unter Posten 45 aufgeführt sind. Die Teilnahme an diesen Tagungen bringt für die Fachschaft die folgenden Vorteile: <ul> <li> Die fachlichen oder hochschulpolitischen Interessen der Studierenden können auch auf einer überregionalen Ebene vertreten werden. Dies ist insbesondere interessant bei Themen mit einer überregionalen Dimension (z.B. Gesetzesnovellen auf Bundes- oder Landesebene) oder bei Themen, für die andere überregionale Gremien (wie z.B. die Hochschulrektorenkonferenz) Rahmenordnungen o.ä. erstellen, die bei der Umsetzung eines Sachverhaltes auf Ebene der Fakultäten oft eine sehr wichtige Rolle spielen. </li><li> Überregionalen Studierendenbeziehungen können so sehr günstig und nachhaltig etabliert und gepflegt werden. Der Austausch mit Studierndenvertretern anderer Universitäten und deren Erfahrungen vereinfacht Gremienvertretern der Fachschaft die Arbeit in Gremien in Heidelberg oft erheblich und eröffnet neue Perspektiven auf Probleme, die an anderen Universitäten eventuell bereits gelöst wurden.</li><li> Die Pflege der Mitgliedschaft in den Verbänden, die unter Posten 45 aufgeführt werden.</ul></li><li>Studentische Akkreditierungsseminare und Poolvernetzungstreffen (PVT). Auf sutdentischen Akkreditierungsseminaren werden Teilnehmenden die Grundlagen von Programmakkreditierung vermittelt, sodass sie im Anschluss qualifiziert sind als studentische Gutachter an Akkreditierungsverfahren teilzunehmen. Die bei der Schulung und bei Akkreditierungsverfahren an anderen Universitäten gesammelten Erfahrungen kommen den Gremienvertretern auch bei ihrer Arbeit in den Gremien der Universität zugute, sodass die Fortbildung im Interesse der Fachschaft ist. Weiterhin nimmt die Fachschaft nach §65 LHG BaWü an den Aufgaben der Hochschule nach §§2 bis 5 teil, worunter Qualitätssicherung an den Hochschulen zählt und somit Akkreditierung. Auf den PVT treffen sich Vertreter des studentischen Akkrediterungspools, um aktuelle Entwicklungen und veränderte Regelungen im Akkreditierungswesen zu diskutieren und zu ihnen Stellung zu beziehen. Das bietet die Gelegenheit das Akkreditierungswesen gemäß der Interessen der Heidelberger Studierenden weiterzuentwickeln.</li><li>Außerdem bietet sich Finanzverantwortlichen und anderen Amtsträgern unregelmäßig die Möglichkeit, an Schulungen teilzunehmen, die ihnen jurisitsche und formale Grundlagen ihrer Aufgaben vermitteln, die für Studierende, die ihre Tätigkeit ehrenamtlich ausüben, oft nur schwer zu durchschauen sind. Für die ordnungsgemäße Verwaltung der Angelegenheit ist es allerdings unerläßlich, dass diese Amtsträger adäquat auf ihre Aufgaben vorbereitet und über diese informiert sind.</li>',
        'value': 4012.73,
        'events': {'click': displaytext}
    },{
        'id': '2.8',
        'parent': '1.1',
        'title': 'Mitgliedsbeiträge',
        'name': 'Mitgliedsbeiträge',
        'text': 'Unsere SFSen sind Mitglied in verschiedenen Verbänden und Dachorganisationen; derzeit sind das die "Deutsche Mathematiker Vereinigung" (DMV), "Zusammenkunft aller Physikfachschaften e.V." (ZaPF e.V.), "Konferenz der Mathematikfachschaften e.V." (KoMa e.V.) und "Konferenz der Informatik Fachschaften e.V." (KIF e.V.).In diesen Verbänden sind die SFSen Mitglied, weil sie sich mit Themen der Lehre in den jeweiligen Fächern auseinandersetzen und auf eine Weiterentwicklung dieser im Sinne der Studierenden hinarbeiten. Die Mitgliedschaft unterstützt diese Verbände dabei, ihre Tätigkeit auch langfristig fortsetzen zu können und ermöglicht es Mitgliedern der Fachschaften an Tagungen und Konferenzen der Verbände teilzunehmen und dort die Interessen der Heidelberger Studierenden zu vertreten.',
        'events': {'click': displaytext}
    },{
        'id': '2.9',
        'parent': '1.1',
        'title': 'Vorkurs',
        'name': 'Vorkurs',
        'text': 'Die Erstsemestereinführungen (im Folgenden "Vorkurs") in unseren Fächern werden durch die MathPhysInfo ausgerichtet. Als Abschluss dieses Vorkurses gibt es eine abendliche Feier, die sog. AnfiFete. Für dein Einkauf der Lebensmittel und Getränke sowie die Bereitstellung der nötigen Technik fallen Kosten an, die allerdings durch die Einnahmen im Posten "Einnahmen aus hoheitlichen Veranstaltungen" gedeckt werden.',
        'events': {'click': displaytext}
    },{
        'id': '2.10',
        'parent': '1.1',
        'title': 'FSWE',
        'name': 'FSWE',
        'text': 'Einmal im Semester organisiert die Fachschaft das Fachschaftswochende (FSWE):<br>Während des FSWE fahren aktive Fachschaftler*innen gemeinsam in ein Landheim im Odenwald, um dort zusammen an größeren inhaltlichen Themen zu arbeiten, die Diskussionen zu führen, für die während der Woche und den zeitlich begrenzten Sitzungen keine Zeit bleibt und um langfristige Projekte voranzutreiben. Dazu finden im Lauf des Samstag mehrere Arbeitskreise statt und am Sonntag das Abschlussplenum, in dem die Ergebnisse der AKs vorgestellt und diskutiert werden. In einem Gremienplanspiel werden außerdem die neuen aktiven Fachschaftsmitglieder, die noch keine Gremienerfahrung haben, auf ihre zukünftigen Ämter vorbereitet. Es ist üblich, dass die Teilnehmenden, die nicht zum ersten Mal auf dem FSWE sind, eine Eigenbeteiligung von 10€ entrichten, da die Teilnehmenden während des Wochenendes mit Essen, Snacks und Getränken versorgt werden.<br>Da auf dem FSWE der Fokus eindeutig auf inhaltlicher Arbeit, Fortbildung für Gremienarbeit und Stärkung des sozialen Zusammenhalts unter den aktiven Fachschaftsmitgliedern liegen soll, ist vorgesehen, dass nur aktive Fachschaftler (also meist solche, die ein Amt ausüben) und Einsteiger, die ein ernstzunehmendes Interesse dan der inhaltlichen Arbeit der Fachschaft haben, am FSWE teilnehmen.',
        'color': 'orange',
        'events': {'click': displaytext}
    },{
        'id': '2.11',
        'parent': '1.2',
        'title': 'Rücklage<br>der Fachschaft',
        'name': 'Einstellung in die Rücklage der Fachschaft',
        'text': 'Die Fachschaft MathPhysInfo bildet eine Rücklage, um unter anderem auf die folgenden Eventualitäten reagieren zu können:<ul><li>Kurzfristig wird eine große Anschaffung nötig. Z.B. falls der Server unvorhergesehen und kurzfristig ausgewechselt werden kann; wegen der hohen Kosten, ist es nicht möglich eine solche Ausgabe unvorbereitet und ohne Rücklage bewältigen zu können.</li><li>Am Ende des Haushaltsjahres kommt es zu Problemen mit Abrechnungen, die im nächsten Haushaltsjahr noch überwiesen werden müssen.</li><li>Eine der drei SFSen richtet eine Bundesfachschaftentagung aus. Sobald die Entscheidung hierzu feststeht, kann eine zweckgebundene Rücklage angelegt werden; dass dieser Fall im Lauf der nächsten Jahre eintreten wird, ist nahezu sicher, da die Organisation einer Bundeschaftentagung meist umlaufend jeder teilnehmenden Fachschaft einmal zufällt. Da aber noch nicht feststeht wann und in welchem Fach die nächste Tagung ausgerichtet wird, ist eine zweckgebundene Rücklage hierfür nicht zielführend.</li></ul>',
        'color': 'green',
        'events': {'click': displaytext}
    },{
        'id': '2.12',
        'parent': '1.2',
        'title': 'Rücklage<br>"ZaPF2018"',
        'name': 'Einstellung in zweckgebundene Rücklage "ZaPF2018"',
        'text': 'Rücklagen aus den Vorjahren können mit einem expliziten Verwendungszweck versehen werden, für die die Mittel in den kommenden Jahren dann genutzt werden können. Diese Rücklage wurde 2016 mit einem Beitrag von 5000€ zur Teilfinanzierung der Bundesfachschaftentagung der Physik im Jahr 2018 angelegt. Entsprechend wird diese Rücklage im Jahr 2017 nicht aufgelöst und erst im Jahr 2018 genutzt.',
        'color': '#006000',
        'events': {'click': displaytext}
    },{
        'id': '2.13',
        'parent': '1.2',
        'title': 'Rücklage<br>"Tresor"',
        'name': 'Einstellung in die zweckgebundene Rücklage "Tresor"',
        'text': 'Seit Oktober 2017 ist das elektronische Schloss des alten Tresors defekt und der Tresor kann somit nur noch mit dem einzigen vorhandenen Schlüssel geöffnet werden. Das ist mittelfristig nicht mehr hinnehmbar, da es einen routinierten Fachschaftsdienst unmöglich macht (so kann z.B. nicht regulär Pfand ausgegeben werden). Außerdem wird ein Tresor benötigt, um vertrauliche Unterlagen sowie Kassen zu lagern. Deshalb ist die Anschaffung eines neuen Tresors notwendig.<br>Der Beschluss einen neuen Tresor anzuschaffen wurde am 15. November 2017 gefasst und da eine Anschaffung 2017 logistisch nicht mehr möglich war, wurde am 20. Dezember 2017 beschlossen eine zweckgebundene Rücklage für die Anschaffung eines Tresors einzurichten.',
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
        'title': 'Poolvernetzungs-<br>treffen',
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
            text: 'Ausgaben & Rücklagen'
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
            pointFormat: '<b>{point.name}</b>: <b>{point.value} €</b>'
        }
    });