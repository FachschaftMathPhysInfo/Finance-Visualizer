displaytext = function(event) {
  $('#ausgabenname').text(this.name);
  $('#ausgabenvalue').text('Betrag: ' + Number(this.value).toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €');
  $('#ausgabentext').html(this.text);
}

var data = [{
  'id': '0.0',
  'parent': '',
  'title': 'Ausgaben',
  'name': 'Ausgaben 2018',
  'text': 'Damit die Fachschaft ihren Aufgaben nachkommen kann, sind verschiedene Ausgaben nötig. Die Mittel, die zum Ende des Haushaltsjahres nicht verausgabt wurden, fließen an die zentrale Ebene der Verfassten Studierendenschaft zurück.<br>Die Unterposten im Diagramm kann man durch Anklicken auswählen.',
  'value': 62568.44,
}, {
  'id': '1.1',
  'parent': '0.0',
  'title': 'EDV-Bedarf',
  'name': 'EDV-Bedarf und Infrastruktur',
  'text': '<p>Die Fachschaft betreibt ihren eigenen Server samt EDV-System. Aktive Fachschaftler haben in diesem System einen Account samt Mailadresse. In diesem System können Mailinglisten betrieben werden, Dateien inklusive Altklausuren, Prüfungsberichte und vertraulicher Gremienunterlagen verwaltet werden, Informationen in einem Wiki dokumentiert werden und der sog. Kummerkasten betrieben werden. Diese Programme sind inzwischen essentieller Teil der Arbeitsabläufe in unserer Fachschaft. </p><p>Damit diese Infrastruktur langfristig einsetzbar bleibt und technische Probleme nicht die inhaltliche Arbeit der Fachschaft behindern, ist es regelmäßig nötig, Komponenten zu reparieren und auszutauschen.</p>',
}, {
  'id': '1.2',
  'parent': '0.0',
  'title': 'Büromaterial',
  'name': 'Büromaterial',
  'text': 'Um Verwaltungsarbeiten, die im Rahmen der Fachschaftsarbeit anfallen (z.B. Verwaltung der Finanzen), sachgemäß durchführen zu können, muss regelmäßig Büromaterial nachbeschafft werden. Dazu hat die Fachschaft einen Kundenaccount bei Büro Mix, über den unter den Bedinungen des Rahmenvertrages zwischen der Universität und Büro Mix das benötigte Büromaterial zu günstigen Preisen beschafft werden kann.',
}, {
  'id': '1.3',
  'parent': '0.0',
  'title': 'Druck- und Kopierkosten',
  'name': 'Druck- und Kopierkosten',
  'text': '<p>Die Fachschaft betreibt in ihrem Büro einen eigenen Drucker, um alltäglich anfallende Dokumente und Unterlagen bei Bedarf schnell und unkompliziert drucken zu können. Um diesen Drucker in Betrieb zu halten, müssen regelmäßg Papier und Toner beschafft werden.</p><p> Für Veranstaltungen muss der Druck von Plakaten, Flyern und ähnlichem meist extern in Auftrag gegeben werden.</p>',
}, {
  'id': '1.4',
  'parent': '0.0',
  'title': 'Stadtmobil',
  'name': 'Transportkosten (Stadtmobil)',
  'text': 'Die Fachschaft hat bei dem Carsharing-Dienst Stadtmobil ein Kundenkonto, über das PKW bis zur Größe von Kastenwägen ausgeliehen werden können. Mit diesen Fahrzeugen können Einkäufe für größere Veranstaltungen (z.B. die Vollversammlungen) erledigt werden und auch die Reise zu Bundesfachschaftentagungen und anderen Konferenzen außerhalb Heidelbergs durchgeführt werden, da dies in manchen Situation günstiger ist als mit der Bahn oder anderen Alternativen zu reisen.',
}, {
  'id': '1.5',
  'parent': '0.0',
  'title': 'Bewirtung',
  'name': 'Bewirtungskosten',
  'text': '<p>Im Lauf des Haushaltsjahres richtet die Fachschaft meist auch eine Reihe kleinerer Veranstaltungen wie beispielsweise Berufsinformationsveranstaltungen (meist als “Wissenschaftler im Beruf” betitelt) oder Treffen, bei denen sich Tutor*innen über die Erfahrungen in ihren Übungsgruppen austauschen können. Da viele dieser Veranstaltungen nach Ende der meisten Lehrveranstaltungen um 18:00 beginnen und bis in den späten Abend gehen, ist es oft angemessen für die Teilnehmer Verpflegung bereitzustellen, damit diese nicht gezwungen sind, eine Veranstaltung vorzeitig zu verlassen, um zu Abend zu essen.</p><p>Weiterhin finden jedes Semester einige Gremiensitzungen der Fachschaft und Arbeitstreffen statt, die so lange dauern, dass eine Verpflegung notwendig ist, um die Arbeit sinnvoll zu Ende führen zu können. Ein Beispiel hierfür wäre das Abtippen der Lehrevaluation in der Physik, wofür mehrere Fachschaftler meist von Samstagvormittag bis in den frühen Abend brauchen, weshalb die Fachschaft in den vergangen Jahren für eine Bewirtung zu Mittag gesorgt hat</p>',
}, {
  'id': '1.6',
  'parent': '0.0',
  'title': 'Sonstiges',
  'name': 'Sonstige Materialien und Dienstleistungen',
  'text': 'Hierunter fallen Ausgaben, deren Natur und Höhe sich im Augenblick noch nicht abzeichnen oder die in keine der anderen Kategorien einzuordnen sind.',
}, {
  'id': '1.7',
  'parent': '0.0',
  'title': 'Reise- und<br>Teilnahme',
  'name': 'Reise- und Teilnahmekosten',
  'text': 'Aktive Mitglieder der Fachschaften nehmen im Laufe des Jahres an verschiedenen Tagungen und Konferenzen außerhalb Heidelbergs teil, wobei Reise- und Teilnahmekosten anfallen. Eine repräsentative aber nicht zwangsläufig vollständige Auswahl dieser Veranstaltungen findet sich im Folgenden:<ul><li>Bundesfachschaftentagungen und Konferenzen von Verbänden, die unter Posten 45 aufgeführt sind. Die Teilnahme an diesen Tagungen bringt für die Fachschaft die folgenden Vorteile: <ul> <li> Die fachlichen oder hochschulpolitischen Interessen der Studierenden können auch auf einer überregionalen Ebene vertreten werden. Dies ist insbesondere interessant bei Themen mit einer überregionalen Dimension (z.B. Gesetzesnovellen auf Bundes- oder Landesebene) oder bei Themen, für die andere überregionale Gremien (wie z.B. die Hochschulrektorenkonferenz) Rahmenordnungen o.ä. erstellen, die bei der Umsetzung eines Sachverhaltes auf Ebene der Fakultäten oft eine sehr wichtige Rolle spielen. </li><li> Überregionalen Studierendenbeziehungen können so sehr günstig und nachhaltig etabliert und gepflegt werden. Der Austausch mit Studierndenvertretern anderer Universitäten und deren Erfahrungen vereinfacht Gremienvertretern der Fachschaft die Arbeit in Gremien in Heidelberg oft erheblich und eröffnet neue Perspektiven auf Probleme, die an anderen Universitäten eventuell bereits gelöst wurden.</li><li> Die Pflege der Mitgliedschaft in den Verbänden, die unter Posten 45 aufgeführt werden.</ul></li><li>Studentische Akkreditierungsseminare und Poolvernetzungstreffen (PVT). Auf sutdentischen Akkreditierungsseminaren werden Teilnehmenden die Grundlagen von Programmakkreditierung vermittelt, sodass sie im Anschluss qualifiziert sind als studentische Gutachter an Akkreditierungsverfahren teilzunehmen. Die bei der Schulung und bei Akkreditierungsverfahren an anderen Universitäten gesammelten Erfahrungen kommen den Gremienvertretern auch bei ihrer Arbeit in den Gremien der Universität zugute, sodass die Fortbildung im Interesse der Fachschaft ist. Weiterhin nimmt die Fachschaft nach §65 LHG BaWü an den Aufgaben der Hochschule nach §§2 bis 5 teil, worunter Qualitätssicherung an den Hochschulen zählt und somit Akkreditierung. Auf den PVT treffen sich Vertreter des studentischen Akkrediterungspools, um aktuelle Entwicklungen und veränderte Regelungen im Akkreditierungswesen zu diskutieren und zu ihnen Stellung zu beziehen. Das bietet die Gelegenheit das Akkreditierungswesen gemäß der Interessen der Heidelberger Studierenden weiterzuentwickeln.</li><li>Außerdem bietet sich Finanzverantwortlichen und anderen Amtsträgern unregelmäßig die Möglichkeit, an Schulungen teilzunehmen, die ihnen jurisitsche und formale Grundlagen ihrer Aufgaben vermitteln, die für Studierende, die ihre Tätigkeit ehrenamtlich ausüben, oft nur schwer zu durchschauen sind. Für die ordnungsgemäße Verwaltung der Angelegenheit ist es allerdings unerläßlich, dass diese Amtsträger adäquat auf ihre Aufgaben vorbereitet und über diese informiert sind.</li>',
}, {
  'id': '1.8',
  'parent': '0.0',
  'title': 'Mitgliedsbeiträge',
  'name': 'Mitgliedsbeiträge',
  'text': '<p>Unsere SFSen sind Mitglied in verschiedenen Verbänden und Dachorganisationen; derzeit sind das die "Deutsche Mathematiker Vereinigung" (DMV), "Zusammenkunft aller Physikfachschaften e.V." (ZaPF e.V.), "Konferenz der Mathematikfachschaften e.V." (KoMa e.V.) und "Konferenz der Informatik Fachschaften e.V." (KIF e.V.).</p><p>In diesen Verbänden sind die SFSen Mitglied, weil sie sich mit Themen der Lehre in den jeweiligen Fächern auseinandersetzen und auf eine Weiterentwicklung dieser im Sinne der Studierenden hinarbeiten. Die Mitgliedschaft unterstützt diese Verbände dabei, ihre Tätigkeit auch langfristig fortsetzen zu können und ermöglicht es Mitgliedern der Fachschaften an Tagungen und Konferenzen der Verbände teilzunehmen und dort die Interessen der Heidelberger Studierenden zu vertreten.</p>',
}, {
  'id': '1.9',
  'parent': '0.0',
  'title': 'Veranstaltungen und Projekte',
  'name': 'Veranstaltungen und Projekte',
  'text': '',
}, {
  'id': '1.10',
  'parent': '0.0',
  'title': 'Ausstattung Büro',
  'name': 'Ausstattung Büro/Fachschaftsraum',
  'text': 'Die Fachschaft hat zwei Räume zur Verfügung, in denen Gremienarbeit vorbereitet wird, formale Aufgaben durchgeführt werden, Sitzungen abgehalten werden und in denen man den Studierenden bei Fragen und Problemen zur Verfügung stehen kann. Um diese Aufgaben weiterhin durchführen zu können, müssen je nach Bedarf z.B. Tische, Stühle, Regale oder ähnliches angeschafft werden.',
}, {
  'id': '1.11',
  'parent': '0.0',
  'title': 'Rücklagen',
  'name': 'Einstellung in die Rücklagen & Abfluss an die VS',
  'text': '<p><ul><li>Zweckgebundene Rücklagen: Diese kann die Fachschaft im nächsten Haushaltsjahr zweckgebunden ausgeben</li><li>Abfluss an die VS: Nicht verwendete Mittel fließen an die zentrale Ebene der VS ab.</li></ul></p>',
}, {
  'id': '2.1',
  'parent': '1.1',
  'title': 'Anschaffung Server',
  'name': 'Anschaffung Server',
  'text': '<p>Die Fachschaft MathPhysInfo betreibt derzeit verschiedene EDV-Systeme, die aktive Fachschaftler*innen bei ihren verschiedenen Aufgaben unterstützen.Die meisten dieser Programme nehmen inzwischen einen elementaren Platz im Workflow der gesamten FS-Arbeit ein und wird für die effiziente Selbstverwaltung der Angelegenheiten unserer Fachschaft als notwendig erachtet. Deshalb ist es aus Sicht der Autoren eine große Priorität das Vorhandensein und Funktionieren dieser Programm auch in Zukunft sicherzustellen.</p><p>Aktuell wird diese Software auf einem eigenen Server der Fachschaft betrieben. Dieser Server ist seit 2010 in Betrieb also z.B. auch schon länger als die VS der Universität der Heidelberg. Der alte Server hat somit bereits seinen Abschreibungszeitraum durchlebt und wird in absehbarer Zeit nicht mehr in der Lage sein, den Anforderungen der verwendeten Software und den bei der FS-Arbeit anfallenden Datenmengen gerecht zu werden. Um unsere EDV-Infrastruktur auf dem derzeitigen Niveau erhalten zu können und in Zukunft den Gegebenheiten entsprechend erweitern zu können, ist eine Aufwertung der Kapazitäten notwendig. Eine Aufwertung des derzeitigen Servers ist aus technsicher Sicht weder sinnvoll noch möglich. Gleichzeitig sollte bei der Neuanschaffung die zukünftige Erweiterbarkeit des Servers im Auge behalten werden.</p><p>Auf der Grundlage dieser Planungen wurden folgende Anforderungen für einen neuen Server erarbeitet:<ul><li>2x CPUs mit jeweils 16 Kernen</li><li>128 GB DDR4 ECC Ram</li><li>2x 240GB SSD Hotswap Fähig (fürs Betriebssystem)</li><li>6x 4TB SAS HDD Hotswap Fähig</li><li>2x 10Gbit RJ45 Kupfer Netzwerk</li><li>Unterstützung für bis zu 4 hotswapfähige NVMe SSDs</li><li>SAS HBA mit 8 externen Anschlüssen</li><li>Redundante Netzteile</li><li>2 Höheneinheiten</li></ul></p><p>Sowohl Haupt- als auch Sekundärspeicher lassen sich problemlos erweitern. Der alte Server soll danach als Backup-Server genutzt werden. <br> Weitere Informationen finden sich im <a href="https://mathphys.fsk.uni-heidelberg.de/w/wp-content/protokolle/gemeinsam/archiv/2018-06-20.pdf">Protokoll vom 20. 6. 2018</a>. </p>',
  'value': 8859.81,
}, {
  'id': '2.2',
  'parent': '1.1',
  'title': 'USB Sicherheitsschlüssel',
  'name': 'USB Sicherheitsschlüssel',
  'text': '',
  'value': 95.18,
}, {
  'id': '2.3',
  'parent': '1.1',
  'title': 'Anschaffung Acess-Point',
  'name': 'Anschaffung Acess-Point',
  'text': '',
  'value': 137.90,
}, {
  'id': '2.4',
  'parent': '1.1',
  'title': 'Domains',
  'name': 'Erneuerung Domains mathphysinfo, zapf',
  'text': '',
  'value': 21.31,
}, {
  'id': '2.5',
  'parent': '1.2',
  'title': 'Dokumententaschen',
  'name': 'Anschaffung Dokumententaschen',
  'text': '',
  'value': 32.40,
}, {
  'id': '2.6',
  'parent': '1.2',
  'title': 'Büromaterial',
  'name': 'Textmarker, Papier, Tafelstifte',
  'text': '',
  'value': 330.23,
}, {
  'id': '2.8',
  'parent': '1.3',
  'title': 'Toner',
  'name': 'Toner',
  'text': '',
  'value': 99.91,
}, {
  'id': '2.9',
  'parent': '1.3',
  'title': 'Kopierpapier',
  'name': 'Kopierpapier',
  'text': '',
  'value': 38.32,
}, {
  'id': '2.10',
  'parent': '1.3',
  'title': 'Ersatzteil Drucker',
  'name': 'Ersatzteil Drucker',
  'text': '',
  'value': 201.80,
}, {
  'id': '2.11',
  'parent': '1.3',
  'title': 'Plakate WiB',
  'name': 'Plakate WiB',
  'text': '',
  'value': 35.00,
}, {
  'id': '2.12',
  'parent': '1.4',
  'title': 'Transportkosten (Stadtmobil)',
  'name': 'Transportkosten (Stadtmobil)',
  'text': 'Diverse Stadtmobilfahrten',
  'value': 890.32,
}, {
  'id': '2.17',
  'parent': '1.5',
  'title': 'Wissenschaftler<br>im Beruf',
  'name': 'Verpflegung Wissenschaftler im Beruf',
  'text': '',
  'value': 489.69,
}, {
  'id': '2.18',
  'parent': '1.5',
  'title': 'Tutorenversammlung',
  'name': 'Verpflegung Tutorenversammlung Physik',
  'text': '',
  'value': 45.00,
}, {
  'id': '2.19',
  'parent': '1.5',
  'title': 'Kaffeemaschine',
  'name': 'Anschaffung Gastokaffeemaschine',
  'text': '',
  'value': 82.90,
}, {
  'id': '2.20',
  'parent': '1.6',
  'title': 'Gasflasche Grill',
  'name': 'Gasflasche Grill',
  'text': '',
  'value': 15.60,
}, {
  'id': '2.21',
  'parent': '1.6',
  'title': 'Handrührgeräte',
  'name': 'Handrührgeräte',
  'text': '',
  'value': 37.99,
}, {
  'id': '2.22',
  'parent': '1.6',
  'title': 'Waffeleisen',
  'name': 'Waffeleisen',
  'text': '',
  'value': 79.96,
}, {
  'id': '2.23',
  'parent': '1.6',
  'title': 'Anschaffung Geschirrtücher',
  'name': 'Anschaffung Geschirrtücher',
  'text': '',
  'value': 42.97,
}, {
  'id': '2.24',
  'parent': '1.7',
  'title': 'KoMa ',
  'name': 'Reisekosten, KoMa ',
  'text': '',
  'value': 100.00,
}, {
  'id': '2.25',
  'parent': '1.7',
  'title': 'ZaPF ',
  'name': 'Reisekosten, ZaPF ',
  'text': '',
  'value': 49.40,
}, {
  'id': '2.26',
  'parent': '1.7',
  'title': 'KIF',
  'name': 'Reisekosten, KIF',
  'text': '',
  'value': 1280.63,
}, {
  'id': '2.27',
  'parent': '1.7',
  'title': 'Poolvernetzungs-<br>treffen',
  'name': 'Reisekosten, Poolvernetzungstreffen',
  'text': '',
  'value': 495.25,
}, {
  'id': '2.28',
  'parent': '1.7',
  'title': 'Akkreditierungsseminar',
  'name': 'Reisekosten, Akkreditierungsseminar',
  'text': '',
  'value': 159.85,
}, {
  'id': '2.30',
  'parent': '1.8',
  'title': 'Mitgliedsbeitrag, DMV',
  'name': 'Mitgliedsbeitrag, DMV',
  'text': '',
  'value': 210,
}, {
  'id': '2.31',
  'parent': '1.9',
  'title': 'Vorkurs',
  'name': 'Vorkurs',
  'text': 'Die Erstsemestereinführungen (im Folgenden “Vorkurs”) in unseren Fächern werden durch die MathPhysInfo ausgerichtet. Als Abschluss dieses Vorkurses gibt es eine abendliche Feier, die sog. AnfiFete. Die Einnahmen, die durch den Verkauf von Getränken auf der AnfiFete erzielt werden, fließen unter diesem Posten dem Haushalt wieder zu. Kosten, die bei der Ausrichtung der AnfiFete entstehen (vor allem der Einkauf der Getränke) fallen unter den Posten 48.01 “Vorkurs”.',
  'value': 1639.14,
}, {
  'id': '2.33',
  'parent': '1.9',
  'title': 'Vollversammlungen',
  'name': 'Vollversammlungen',
  'text': '<p>Die Fachschaft strebt an, einmal im Semester eine Vollversammlung in jedem ihrer Fächer abzuhalten. Diese Vollversammlungen bestehen meist aus den selben Bestandteilen:<ol><li>ein Anfangsplenum, in dem hochschulpolitische Ereignisse des letzten Semesters dargestellt werden und Themen für die anschließenden Arbeitskreise (AKs) gesammelt werden.</li><li>eine Phase, in der parallel mehrere AKs stattfinden, in denen je nach Interesse der Teilnehmer über verschiedene Themen diskutiert wird. Abhängig vom konkreten Plan der Vollversammlung gibt es einen oder zwei AK-Slots mit jeweils zwei Stunden Dauer.</li><li>ein Abschlussplenum oder eine Sitzung, in der die Ergebnisse der Diskussionen zusammengefasst werden.</li><li>und am Ende ein geselliges Beisamensein während dessen die Themen der Vollversammlung in einem informellen Kreis weiterdiskutiert werden können.</li></ol></p><p>Mit einem solchen Ablaufplan dauert eine Vollversammlung mindestens vier und meist etwa sechs Stunden an. Deshalb werden die Teilnehmenden während der Veranstaltung mit alkoholfreien Getränken und Snacks versorgt. Je nach der Dauer der Veranstaltung und den anderen Umständen der Vollversammlung wird außerdem nach Ablauf des Endplenums eine Bewirtung organisiert, da dies schon in den späten Abendstunden ist und es den Teilnehmern dadurch erst ermöglicht wird am späteren Teil der Vollversammlung beizuwohnen.</p><p>Somit fallen im Rahmen eine Vollversammlung die folgenden Kosten an:<ul><li>Kosten für Ankündigung der Vollversammlung. Meist handelt es sich hierbei um Druckkosten für Plakate und Flyer.</li><li>Kosten für Lebensmittel und Getränke während der Vollversammlung.</li><li>Kosten für Bewirtung am Ende der Vollversammlung.</li></ul></p><p>Aus den folgenden Gründen hält die Fachschaft es für sinnvoll Vollversammlungen in diesem Modus durchzuführen:<ul><li> der Bericht über Entwicklungen in den Gremien der Fakultäten macht die Arbeit der Gremienvertreter transparenter und ermöglicht es einer größeren Zahl an Studis an diesen teilzuhaben.</li><li>den Studierenden wird in den Arbeitskreisen die Möglichkeit gegeben auf Basis dieser Informationen Grundsatz- und Richtungsentscheidungen bei Themen, die ihr Studium betreffen, mitzubeeinflussen und -zugestalten.</li><li>der Austausch zwischen Studierenden und Gremienvertretern in den Arbeitskreisen und beim geselligen Beisamensein ermöglicht es den Studierenden ihre Meinungen einfacher als sonst in hochschulpolitische Entscheidungsprozesse einzubringen und gibt den Gremienvertern die Gelegenheit Input von den Studierenden einzusammeln. Grundsätzlich ist das natürlich auch in den wöchentlich stattfindenden Fachschaftssitzungen möglich, allerdings zeigt die Erfahrung, dass diese Option von vielen Studierenden scheinbar als aufwendiger und weniger attraktiv wahrgenommen wird als eine einmal pro Semester stattfindende Vollversammlung.</li><li>deshalb misst die Fachschaft aber auch gerade den informellen Diskussionen am Ende der Vollversammlung eine hohe Bedeutung zu, da der Austausch hier nochmals einfacher und direkter stattfinden kann.</li><li>durch die zuvor genannten Aspekte wird es den Gremienvertretern also ermöglicht die fachlichen und hochschulpolitischen Interessen der Studierenden in universitären Gremien deutlich besser zu vertreten.</li><li>außerdem wird den Studierenden die Möglichkeit gegeben sich mit Komillitonen aus anderen Semestern und Fachrichtungen auszutauschen.</li></ul></p>',
  'value': 1167.12,
}, {
  'id': '2.32',
  'parent': '1.9',
  'title': 'FSWE',
  'name': 'FSWE',
  'text': '<p>Einmal im Semester organisiert die Fachschaft das Fachschaftswochende (FSWE):</p><p>Während des FSWE fahren aktive Fachschaftler*innen der SFSen Physik, Mathematik und Informatik gemeinsam in ein Landheim im Odenwald, um dort zusammen an größeren inhaltlichen Themen zu arbeiten, die Diskussionen zu führen, für die während derWoche und den zeitlich begrenzten Sitzungen keine Zeit bleibt und um langfristige Projekte voranzutreiben. Dazu finden im Lauf des Samstag mehrere Arbeitskreise statt und am Sonntag das Abschlussplenum, in dem die Ergebnisse der AKs vorgestellt und diskutiert werden. In einem Gremienplanspiel werden außerdem die neuen aktiven Fachschaftsmitglieder, die noch keine Gremienerfahrung haben, auf ihre zukünftigen Ämter vorbereitet. Es ist üblich, dass die Teilnehmenden, die nicht zum ersten Mal auf dem FSWE sind, eine Eigenbeteiligung von 10e entrichten, da die Teilnehmenden während des Wochenendes mit Essen, Snacks und Getränken versorgt werden.</p><p> Durch das FSWE ermöglicht die Fachschaft den Meinungsaustausch in der Gruppe der Studierenden und durch die auf dem FSWE erstellten Konzepte und durch die Ausbildung von Nachwuchs für universitäre Gremien werden langfristig die hochschulpolitischen Belange der Studierenden wahrgenommen.</p><p>Da auf dem FSWE der Fokus eindeutig auf inhaltlicher Arbeit, Fortbildung für Gremienarbeit und Stärkung des sozialen Zusammenhalts unter den aktiven Fachschaftsmitgliedern liegen soll, ist vorgesehen, dass nur aktive Fachschaftler (also meist solche, die ein Amt ausüben) und Einsteiger, die ein ernstzunehmendes Interesse daran haben, in Zukunft an der inhaltlichen Arbeit der Fachschaft teilzunehmen, am FSWE teilnehmen.</p>',
  'value': 2564.15,
}, {
  'id': '2.34',
  'parent': '1.9',
  'title': 'ZaPF in Heidelberg',
  'name': 'ZaPF in Heidelberg',
  'text': '<p>Im Sommersemester 2018 richtet die SFS Physik in Heidelberg eine Bundesfachschaftentagung der Physik aus, eine sog. Zusammenkunft aller Physikfachschaften (ZaPF). Offiziell wird die ZaPF von einen gemeinnützigen Verein, den ZaPF e.V. veranstaltet, inhaltlich wird die Tagung allerdings von Mitgliedern der SFS Physik durchgeführt. Um die Ausrichtung der ZaPF zu unterstützen soll ein Teil der Kosten der ZaPF übernommen werden. Konkret soll ein Teil der Kosten für die Unterbringung der Teilnehmer in der Jugendherberge im Neuenheimer Feld übernommen werden.</p><p> Es wird erwartet, dass 200 Studierende anderer Physik-Fachschaften an der ZaPF teilnehmen werden. Jeder Teilnehmende entrichtet einen Teilnahmebeitrag in Höhe von 25e. Auf der Konferenz werden hochschulpolitische und für Physikstudiengänge spezifische Themen diskutiert und Stellungen zu diesen ausgearbeitet. Außerdem dient die Konferenz der Pflege der überregionalen Studierendenbeziehungen und der Pflege der Mitgliedschaft im ZaPF e.V. (in dem die SFS Physik ebenfalls Mitglied ist).</p>',
  'value': 5000.00,
}, {
  'id': '2.35',
  'parent': '1.9',
  'title': 'MathPhysTheo SoSe 18',
  'name': 'MathPhysTheo - Kooperation IMP e.V. SoSe 18',
  'text': '<p>Der Förderverein der Fachschaften Mathematik, Physik und Informatik an der Universität Heidelberg, IMP e.V., veranstaltet die seit mehr als 20 Jahren von verschiedenen mit der Fachschaft verbundenen Veranstaltern ausgerichtete Studierendenfeier MathPhysTheo. Die Veranstaltung gilt als unter Studierenden etabliertes soziales Ereignis zu Beginn der Vorlesungszeit. Entsprechend liegt das Ereignis im Interesse der drei Studienfachschaften gemäß LHG §65, Abs. 2, Satz 1. Ebenfalls werden die dort auch genannten kulturellen Belange der Studierenden auf dem Ereignis bedient, beispielsweise durch Auftritte von Künstlern auf diesen Veranstaltungen. Die Fachschaftssitzung MathPhysInfo sieht es demnach als ihre Aufgabe an, diese Veranstaltung durch das Abschließen eines Überlassungsvertrages für den Veranstaltungsort zu unterstützen. Dafür ist ein Kooperationsvertrag zwischen den Studienfachschaften Mathematik, Physik und Informatik, vertreten durch den Vorsitz der Verfassten Studierendenschaft einerseits und dem Förderverein IMP e.V. andererseits, notwendig.</p>',
  'value': 1126.00,
}, {
  'id': '2.36',
  'parent': '1.9',
  'title': 'MathPhysTheo WiSe 18/19',
  'name': 'MathPhysTheo WiSe 18/19',
  'text': '<p>Aufgrund rechtlicher Unklarheiten ist es nicht möglich, dass der IMP e.V. die MathPhysTheo im Wintersemester 2018/2019 ausrichtet. Da diese Probleme erst Anfang August bekannt wurden, der Termin für die MathPhysTheo aber bereits auf Mitte Oktober angesetzt worden war, ist es nicht möglich, diese Probleme rechtzeitig auszuräumen. Die einzige Möglichkeit, die MathPhysTheo nicht abzusagen, ist, dass die Studienfachschaften in Ihrer Funktion als Teilkörperschaften öffentlichen Rechts die MathPhysTheo veranstalten. Das heißt, dass alle Einnahmen und Ausgaben über die Fachschaften abgewickelt werden. Entsprechend ist das Finanzvolumen dieses Posten sehr viel größer als das von Posten "MathPhysTheo - Kooperation IMP e.V. SoSe 18", inhaltlich handelt es sich um die selbe Veranstaltung. </br> Für einige noch ausstehende Rechnung, die aufgrund von Problemen bei der Rechnungsstellung noch nicht in 2018 bezahlt werden konten, wurde ende des Jahres eine zweckgebundene Rücklage in Höhe von 6.00,00€ angelegt. </p>',
  'value': 14857.48,
}, {
  'id': '2.37',
  'parent': '1.10',
  'title': 'Anschaffung Tresor',
  'name': 'Anschaffung Tresor',
  'text': '<p>Seit Oktober 2017 ist das elektronische Schloss des alten Tresors defekt und der Tresor kann somit nur noch mit dem einzigen vorhandenen Schlüssel geöffnet werden. Das ist mittelfristig nicht mehr hinnehmbar, da es einen routinierten Fachschaftsdienst unmöglich macht (so kann z.B. nicht regulär Pfand ausgegeben werden). Für dieses Problem werden Lösungen gesucht: Eine Option wäre eine Reparatur des Tresors. Das erscheint der Sitzung allerdings nicht sinnvoll, da der Tresor relativ schlecht ist, sodass die Kosten einer Reparatur wahrscheinlich ähnlich hoch wie die Kosten einer Neuanschaffung wären. Außerdem hat sich in den letzten Monaten herausgestellt, dass der alte Tresor den Anforderungen der Fachschaft nicht mehr gewachsen ist: </p><p> So ist seit den letzten Wahlen M. Jalea studentisches Mitglied im Senat. Für jede Senatssitzung erhält er mehrere hundert Seiten Sitzungsunterlagen, die vertraulich sind und sicher gelagert werden müssen. Das ist derzeit im Fachschaftsraum nicht möglich.Weiterhin sind Fachschaftsmitglieder auch in diverse Zulassungs- und Berufungskommissionen entsandt, in denen sie auch jeweils Unterlagen erhalten, die vertrauliche personenbezogene Daten enthalten; und auch diesen Gremienmitgliedern sollte die Möglichkeit gegeben werden, ihre Arbeitsunterlagen angemessen in der Universität lagern zu können. Im Fachschaftsraum, der ganz bewusst allen Studierenden offen steht, ist das im Allgemeinen nicht möglich. Deshalb wird über die Anschaffung eines Tresors diskutiert, der groß genug ist, um darin mehrere Leitz-Ordner an Unterlagen, sowie die Handkasse, die Stadtmobil-Unterlagen, Fundsachen, teure Hardware, die die Systemadministratoren der Fachschafts-EDV zwischenlagern müssen, und Kassen, die vor und nach Veranstaltungen der Fachschaft sicher gelagert werden müssen, aufnehmen zu können. Als Vorschlag kommt dabei der Wertschutztresor HTI 100-04 der Firma Hartmann auf, der gerade im Angebot ist und den ausformulierten Anforderungen genügt. Der zusätzliche Einbau eines elektronischen Schlosses wird aber für notwendig befunden, damit denjenigen, die regelmäßigen Fachschaftsdienst verüben, auch Zugriff gewährt werden kann und nicht nur den Schlüsselhaltern. </p><p>Der Beschluss einen neuen Tresor anzuschaffen wurde am 15. November 2017 gefasst und da eine Anschaffung 2017 logistisch nicht mehr möglich war, wurde 20. Dezember 2017 beschlossen eine zweckgebundene Rücklage für die Anschaffung eines Tresors einzurichten.</p>',
  'value': 1506.43,
}, {
  'id': '2.38',
  'parent': '1.10',
  'title': 'Sonstige Büroausstattung',
  'name': 'Sonstige Büroausstattung',
  'text': '',
  'value': 274.03,
}, {
  'id': '2.39',
  'parent': '1.11',
  'title': 'Zweckgebundene<br>Rücklage',
  'name': 'Zweckgebundene Rücklage',
  'text': '<p>Rücklagen aus 2018 mit einem expliziten Verwendungszweck fließen dem Haushalt 2019 unter diesem Posten zu. Dieses Jahr handelt es sich dabei um einen Beitrag von 6000 Euro für eine noch ausstehende Rechnung von der MathPhysTheo im WiSe 18/19, die aufgrund von Problemen bei der Rechnungsstellung nicht noch in 2018 bezahlt werden konnte. Details dazu finden sich im Protokoll vom 12.12.2018.</p>',
  'value': 6000,
}, {
  'id': '2.40',
  'parent': '1.11',
  'title': 'Abfluss an die VS',
  'name': 'Abfluss an die VS',
  'text': '<p>Am Jahresende fließen nicht verwendete Mittel an den zentralen Haushalt der Verfassten Studierendenschaft (VS) ab. Eine allgemeine, zweck-ungebundene Rücklage wie in den Vorjahren gibt es nicht mehr. Ausgenommen hiervon sind zweckgebundene Rücklagen, deren Dauer auf maximal zwei Jahre beschränkt ist.</p>',
  'value': 14602.67,
}];

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
  if (data[i]['parent'] == "0.0" || data[i]['parent'] == '') {
    data[i]['color'] = colorMap[data[i]['id']];
  }
  else {
    data[i]['color'] = colorMap[data[i]["parent"]];
  }
}

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
    resetZoomTitle: "Zoom zurücksetzen",
    drillUpText: "abc"
  }
});

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
        format: '{point.title}:<br>{point.value:,.2f}€',
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
