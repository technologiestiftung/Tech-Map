import { LatLngExpression } from 'leaflet'

interface Icon {
  coordinates: LatLngExpression
  orientation: 'NE' | 'E' | 'SE' | 'NW' | 'W' | 'SW'
}

export type TechnologyLine = 'tools' | 'frameworks' | 'programming' | 'hardware'
export type Zone = 'hauptzone' | 'neueZone' | 'haltezone' | 'wunschzone'
export type Manual = 'usage' | 'zones'

export interface Technology {
  title: string
  description: string
  link: string
  displayLink: string
  status?: Zone
  technologyLine?: TechnologyLine
  icon?: Icon
}

interface Topic {
  title: string
  description: string
}

interface Description {
  title: string
  subTitle: string
  disclaimerDesktop: string
  disclaimerMobile: string
  manual: { [key in Manual]: Topic }
  zones: { [key in Zone]: Topic }
  lines: { [key in TechnologyLine]: string }
}

export interface Content {
  description: Description
  technologies: { [id: string]: Technology }
  functionality: { [id: string]: string }
}

export const content: Content = {
  description: {
    title: 'Tech Map',
    subTitle: 'Digital Services Team',
    disclaimerDesktop:
      'Herzlich willkommen auf unserer Tech Map. \n\nAuf dieser Karte verorten wir die Technologien, die bei uns im Einsatz sind, und kategorisieren diese.\n\nUm weitere Informationen über ein Tool zu bekommen, kann man die einzelnen Stationen auf der Karte auswählen.',
    disclaimerMobile:
      'Herzlich willkommen auf unserer Tech Map. \n\nAuf dieser Karte verorten wir die Technologien, die bei uns im Einsatz sind, und kategorisieren diese.\n\nWeitere Informationen zur Benutzung der Karte findest du in unserer Infobox, die sich über den Button unten öffnen lässt.',
    manual: {
      usage: {
        title: 'Benutzung der Karte',
        description:
          'Auf dieser Karte verorten wir die Technologien, die bei uns im Einsatz sind, und kategorisieren diese.\n\nUm weitere Informationen über ein Tool zu bekommen, kann man die einzelnen Stationen auf der Karte auswählen.',
      },
      zones: {
        title: 'Erklärung der Zonen',
        description:
          'Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten, arbeiten wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.',
      },
    },
    zones: {
      hauptzone: {
        title: 'Hauptzone',
        description:
          'Die Technologien, die sich über einen längeren Zeitraum und mehrere Projekt hinweg als stabil erwiesen haben sammeln wir hier unter diesem Punkt.',
      },
      neueZone: {
        title: 'Neue Zone',
        description:
          'Technologien, die erste Male benutzt wurden aber Potential besitzen nach weiterem testen ins Standartrepertoir aufgenommen zu werden',
      },
      haltezone: {
        title: 'Haltezone',
        description:
          'Hier sind Technologien, die wir nicht weiter empfehlen, aber noch vereinzelt bei bereits bestehenden Projekten verwendet werden.',
      },
      wunschzone: {
        title: 'Wunschzone',
        description:
          'Hier sammeln wir Technologien, die vielversprechend aussehen und mit denen wir vielleicht sogar bereits prototypisch gearbeitet haben, uns aber noch Erfahrungen auf Produktivumgebungen fehlen.',
      },
    },
    lines: {
      tools: 'Tools',
      frameworks: 'Frameworks',
      programming: 'Programmiersprachen',
      hardware: 'Hardware',
    },
  },
  technologies: {
    adobe: {
      title: 'Adobe Creative Cloud',
      description:
        'Die Adobe Creative Cloud wird noch vereinzelt in anderen Bereichen der Technologiestiftung. vor allem im Print-Bereich, eingesetzt. Für die digitalen Projekt die wir im Digital Services Team bearbeiten wollen wir diese allerdings nicht mehr einsetzen. ',
      link: 'https://www.adobe.com/de/creativecloud.html',
      displayLink: 'https://www.adobe.com',
      status: 'haltezone',
      technologyLine: 'tools',
      icon: { coordinates: [1432, 878], orientation: 'SW' },
    },
    asana: {
      title: 'Asana',
      description:
        'Zur Organisation unserer Zusammenarbeit und für unseren Scrum-Prozess nutzen wir Asana.',
      link: 'https://asana.com',
      displayLink: 'https://asana.com',
      status: 'neueZone',
      technologyLine: 'tools',
      icon: {
        coordinates: [500, 1785.5],
        orientation: 'E',
      },
    },
    arduino: {
      title: 'Arduino',
      description:
        'Arduino sind Mikrocontroller-Entwicklungsboards, die eine große Community haben, weil  sich sehr viele Anleitungen im Internet zu finden lässt, was den Einstieg erleichtert. Finden diese auch einzug in Schulen und Bildungssystem. Diese sind gegenüber anderen Mikrocontroller-Entwicklungsboards teuer, jedoch gibt es sehr viele günstige Nachbauten.  Es gibt verschiedene Arduino-Mikrocontroller-Entwicklungsboards, für jedes Projekt das richtige. Diese werden oft verwendet, um Daten von Sensoren zu erfassen, aber auch um kleine Roboter oder ähnliches zu bauen. Seit einiger Zeit bekommt Arduino starke Konkurrenz durch ESP32, diese Mikrocontroller-Entwicklungsboards sind teilweise leistungsfähiger, kleiner und haben WLAN und Bluetooth eingebaut, was sie sehr attraktiv macht. Beide werden mit C/C++ programmiert. Die Mikrocontroller-Entwicklungsboards sind günstiger als der Pi.',
      link: 'https://www.arduino.cc/',
      displayLink: 'https://www.arduino.cc/',
      status: 'hauptzone',
      technologyLine: 'hardware',
      icon: { coordinates: [1060, 2516.3060969315156], orientation: 'E' },
    },
    aws: {
      title: 'AWS',
      description:
        'Amazon Web Services (AWS) ist eine von Amazon bereitgestellte Cloud-Computing-Plattform. Sie bietet eine breite Palette von Cloud-basierten Diensten, darunter Rechenleistung, Speicher, Datenbanken, Analysen und maschinelles Lernen, um die Skalierung und das Wachstum von Anwendungen und Infrastruktur zu unterstützen.',
      link: 'https://aws.amazon.com/',
      displayLink: 'https://aws.amazon.com/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 2220], orientation: 'SE' },
    },
    bullseye: {
      title: 'OS Bullseye',
      description: 'Bullseye ist die neuste Linux Destrubution für den Raspberry Pi',
      link: 'https://www.raspberrypi.com/software/operating-systems/',
      displayLink: 'https://www.raspberrypi.com',
      status: 'neueZone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1510, 1844.5], orientation: 'W' },
    },
    c: {
      title: 'C/C++',
      description:
        'C++ kann alles, was C kann, aber umgekehrt ist das nicht der Fall. Beide werden oft in Verbindung mit Hardwarekomponenten verwendet, da beide sehr nahe an der Maschinenebene arbeiten, aber der C-Compiler ist schneller als der C++-Compiler.',
      link: 'https://de.wikipedia.org/wiki/C_(Programmiersprache)',
      displayLink: 'Wikipedia Link',
      status: 'neueZone',
      technologyLine: 'programming',
      icon: { coordinates: [1430, 2496], orientation: 'W' },
    },
    datasette: {
      title: 'Datasette',
      description:
        'Datasette ist eine Open-Source-Webanwendung, mit der Benutzer Daten mithilfe von SQL-Abfragen untersuchen und veröffentlichen können. Sie wurde mit Python und SQLite entwickelt und bietet eine einfache Möglichkeit, CSV-, JSON- und andere Datenformate in eine SQLite-Datenbank zu konvertieren, die mit SQL-Anweisungen einfach abgefragt werden kann. Mit Datasette können Benutzer schnell eine webbasierte Schnittstelle für ihre Daten erstellen, die es ihnen ermöglicht, ihre Daten mit einer Reihe von Diagrammen und Grafiken zu untersuchen und zu visualisieren. Die Variante DatasetteLite läuft serverlos und vollständig im Browser.',
      link: 'https://datasette.io/',
      displayLink: 'https://datasette.io/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3340], orientation: 'SW' },
    },
    django: {
      title: 'Django',
      description:
        'Django ist ein Open-Source-Web-Framework, das in Python geschrieben ist und dem MVC-Architekturmuster (Model-View-Controller) folgt. Es verwaltet den Datenbankzugriff, das URL-Routing, die Benutzerauthentifizierung, die Modellierung über ein eigenes ORM (Object-Relational Mapping), eine Template-Engine, die es Entwicklern ermöglicht, dynamische HTML-Seiten zu erstellen, indem sie Daten mit Templates rendern, und eine integrierte Verwaltungsschnittstelle, die es auch technisch nicht versierten Benutzern ermöglicht, die Daten in der Anwendung zu verwalten. Django wird häufig für die Erstellung von Webanwendungen verwendet und ist für seine Skalierbarkeit, Sicherheit und Robustheit bekannt.',
      link: 'https://www.djangoproject.com/',
      displayLink: 'https://www.djangoproject.com/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3500], orientation: 'SW' },
    },
    docker: {
      title: 'Docker',
      description:
        'Docker ist ein De-facto-Standard für Container, ein Softwarepaket, das alles enthält, was zur Ausführung einer Anwendung erforderlich ist: Code, Laufzeit, Systemtools, Systembibliotheken und Einstellungen.',
      link: 'https://www.docker.com',
      displayLink: 'https://www.docker.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [940, 2476], orientation: 'W' },
    },
    esp32: {
      title: 'ESP-32',
      description:
        'ESP32 sind Mikrocontroller-Entwicklungsboards, die sehr leistungsfähig, klein und günstig sind. Aus diesem Grund ist die Popularität groß. Auch dank der integrierten Wi-Fi und Bluetooth, die, zum Beispiel, die Boards von Arduino nicht haben. So kann man mit diesen schnell Projekte umsetzen, ein weiterer Vorteil ist, dass man sie mit der Arduino IDE verwenden kann. Wie Arduino können sie für Sensordatenerfassung und andere Projekte verwendet werden. Im Internet findet man viele Beispiele zum Nachmachen, was den Einstig erleichtert. Es wird mit C/C++ programmiert.',
      link: 'https://www.espressif.com/en/products/socs/esp32',
      displayLink: 'https://www.espressif.com/',
      status: 'neueZone',
      technologyLine: 'hardware',
      icon: { coordinates: [1284, 2840], orientation: 'SW' },
    },
    fastapi: {
      title: 'FastAPI',
      description:
        'FastAPI ist ein modernes, schnelles, asynchrones Web-Framework zur Erstellung von APIs mit Python 3.7+, das auf standardmäßigen Python-Typ-Hinweisen basiert. Es wurde entwickelt, um schnell und einfach zu sein und um Entwicklern zu helfen, APIs schnell und effizient zu erstellen. Es bietet automatische Datenvalidierung, Serialisierung und Dokumentation unter Verwendung der OpenAPI- und JSON-Schema-Standards, was es Entwicklern leicht macht, gut dokumentierte und einfach zu verwendende APIs zu erstellen.',
      link: 'https://fastapi.tiangolo.com/',
      displayLink: 'https://fastapi.tiangolo.com/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3420], orientation: 'SW' },
    },
    figma: {
      title: 'Figma',
      description:
        'Figma ist unser Go-To-Tool, wenn es um grafische Arbeiten geht und deckt dabei den Workflow von Konzeption und Wireframing, über Prototyping bis zum Development-Handover des Visual Designs ab.',
      link: 'https://www.figma.com/de/',
      displayLink: 'https://www.figma.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1100, 2476], orientation: 'W' },
    },
    folium: {
      title: 'Folium',
      description: '',
      link: 'https://python-visualization.github.io/folium/',
      displayLink: 'https://python-visualization.github.io/folium/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: {
        coordinates: [182.5, 3100],
        orientation: 'SW',
      },
    },
    github: {
      title: 'Github',
      description:
        'Wir benutzen Github zur Versionsverwaltung für alle Software-Entwicklungsprojekte.',
      link: 'https://github.com',
      displayLink: 'https://github.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1020, 2476], orientation: 'W' },
    },
    html: {
      title: 'HTML/CSS3',
      description:
        'HTML (HyperText Markup Language) ist der Grundbaustein des WWW. Cascading Style Sheets (CSS) ist eine Stylesheet-Sprache, die verwendet wird, um die Darstellung eines in HTML geschriebenen Dokuments zu definieren. Kein Web ohne HTML und CSS.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      displayLink: 'MDN-Web-docs',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [890, 1614], orientation: 'E' },
    },
    javascript: {
      title: 'JavaScript',
      description:
        'Nicht nur unsere Frontends werden hauptsächlich in JavaScript geschrieben, es findet auch in verschiedenen Backend-Frameworks Verwendung, welche wir benutzen.',
      link: 'developer.mozilla.org/en-US/docs/Web/JavaScript',
      displayLink: 'MDN-Web-docs',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [970, 1614], orientation: 'E' },
    },
    jekyll: {
      title: 'Jekyll',
      description:
        'In Kooperation mit externen Stakeholdern wurde bereits jekyll verwendet und es es ist nach wie vor in der ein oder anderen Codebase zu finden. Unser Go-To-Tool ist es jedoch nicht.. ',
      link: 'https://jekyllrb.com/',
      displayLink: 'https://jekyllrb.com/',
      status: 'haltezone',
      technologyLine: 'frameworks',
      icon: { coordinates: [370, 2690], orientation: 'SW' },
    },
    jira: {
      title: 'Atlassian Jira',
      description:
        'Zur Organisation unserer Zusammenarbeit nutzten wir die verschiedenen Arten von Boards, die uns Jira zur Verfügung stellt. Wir werden zukünftig jedoch zu Asana wechselnhaltezone',
      link: 'https://jira.atlassian.com',
      displayLink: 'www.figma.com',
      status: 'haltezone',
      technologyLine: 'tools',
      icon: {
        coordinates: [340, 1785.5],
        orientation: 'E',
      },
    },
    jupyter: {
      title: 'Jupyter Notebook',
      description:
        'Jupyter Notebook ist eine Open-Source-Webanwendung, mit der Benutzer Dokumente erstellen und freigeben können, die Live-Code, Gleichungen, Visualisierungen und erzählenden Text enthalten. Es wird häufig in den Bereichen Datenwissenschaft, wissenschaftliches Rechnen und maschinelles Lernen als bequeme und interaktive Umgebung für die Erstellung von Prototypen und die Erforschung von Daten verwendet. Es unterstützt mehrere Programmiersprachen, vor allem Python, und ermöglicht es Benutzern, Code in einem Webbrowser zu schreiben, auszuführen und zu analysieren. Die Variante JupyterLite arbeitet serverlos und läuft vollständig im Browser.',
      link: 'https://jupyter.org/',
      displayLink: 'https://jupyter.org/',
      status: 'neueZone',
      technologyLine: 'frameworks',
      icon: { coordinates: [620, 2629], orientation: 'W' },
    },
    leaflet: {
      title: 'leaflet',
      description:
        'Leaflet ist eine JavaScript-Library zum erstellen von Web-Gis Anwendungen und wird bei uns bereits erprobt.',
      link: 'https://leafletjs.com/',
      displayLink: 'https://leafletjs.com/',
      status: 'neueZone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1430, 1844.5], orientation: 'W' },
    },
    linux: {
      title: 'Linux',
      description:
        'Linux ist ein offenes, frei zugängliches Betriebssystem. Es gibt auch verschiedene Distributionen, zum Beispiel für die Raspberry Pis, Desktop-PCs und andere anwendungsangepasste Systemen. Da Linux quelloffen ist und seit langem existiert, ist die Gemeinschaft sehr groß. Dennoch ist Linux auf PCs und Laptops ein Nischenprodukt.',
      link: 'https://de.wikipedia.org/wiki/Linux',
      displayLink: 'Wikipedia Link',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: {
        coordinates: [182.5, 3580],
        orientation: 'SW',
      },
    },
    lorawan: {
      title: 'LoRaWan',
      description:
        'LoRaWAN gehört zum Low Power Wide Area Network (LPWAN). Was bedeutet LPWAN, wofür steht LPWAN, es steht für das Senden von Daten über eine große Entfernung und gleichzeitig niedrigen Energieverbrauch. Mit LoRaWAN können Sie in Städten 1 bis 2 km und in ländlichen Gebieten sogar bis zu 10 km oder mehr überbrücken. Es wurden sogar Entfernungen von bis zu 50 km oder mehr überwunden. Dies hängt jedoch von verschiedenen Bedingungen ab, wie der Höhe der angeschlossenen Sensoren, Hindernissen wie Mauern und dergleichen. LoRaWAN wurde sogar schon in Kraftwerken eingesetzt, und selbst diese dicken Wände konnten von LoRaWAN durchdrungen werden. Aufgrund dieser Eigenschaften findet es im Bereich des Internets der Dinge große Anwendung. Der Nachteil ist jedoch, dass die Übertragungszeit und die Datenrate gering sind. Für die Übertragung von Sensordaten ist dies jedoch immer ausreichend. Ein weiterer Vorteil ist, dass LoRaWAN einen Frequenzbereich nutzt, der für jedermann frei zugänglich und nutzbar ist, so dass man nicht um Erlaubnis fragen muss, wenn man ein eigenes Projekt starten möchte. Es wird lediglich die entsprechende Hardware benötigt. Mit einem Gateway können Sie zum Beispiel Ihr ganzes Haus abdecken.',
      link: 'https://de.wikipedia.org/wiki/Long_Range_Wide_Area_Network',
      displayLink: 'Wikipedia Link',
      status: 'neueZone',
      technologyLine: 'hardware',
      icon: { coordinates: [989.9004593526345, 1240], orientation: 'SW' },
    },
    mapbox: {
      title: 'mapbox',
      description:
        'Mapbox ist eine Mapping-Library welche  mittlweile closed-sourced ist und deshalb von uns in Zukunft nicht mehr verwendet wird.',
      link: 'https://www.mapbox.com/',
      displayLink: 'https://www.mapbox.com/',
      status: 'haltezone',
      technologyLine: 'frameworks',
      icon: { coordinates: [370, 2770], orientation: 'SW' },
    },
    maplibre: {
      title: 'maplibre',
      description:
        'MapLibre entstand als open-source fork von mapbox und könnte in Zukunft auch bei uns Verwendung finden.',
      link: 'https://maplibre.org',
      displayLink: 'https://maplibre.org',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1840, 1844.5], orientation: 'W' },
    },
    matomo: {
      title: 'Matomo',
      description:
        'Wir sind große Fans von Datenschutz und setzen daher äußerst selten Analytics-Software ein, sollte das in der Zukunft doch einmal notwendig sein würden wir da gern auf die Open Source Lösung Matomo setzen. ',
      link: 'https://matomo.org',
      displayLink: 'https://matomo.org',
      status: 'neueZone',
      technologyLine: 'tools',
      icon: { coordinates: [1417, 1240], orientation: 'SW' },
    },
    md: {
      title: 'MD/MDX',
      description:
        'Mit Hilfe von Markdown können unsere Autor*innen formatierten Text ohne weitere Bearbeitung in unseren Code einfügen und durch seine Lesbarkeit vorhandene Texte korrigieren. MDX ergänzt diese Markup-Language mit JSX, welches die Verwendung in modernen JS-Frameworks ermöglicht. ',
      link: 'https://mdxjs.com/',
      displayLink: 'https://mdxjs.com/',
      status: 'haltezone',
      technologyLine: 'programming',
      icon: { coordinates: [432.5, 1060], orientation: 'NW' },
    },
    meshnet: {
      title: 'Mesh-Netzwerke',
      description:
        'Mesh-Netzwerke werden derzeit eingesetzt, um die WLAN-Reichweite im Haus zu erhöhen. Ein Vorteil gegenüber Repeatern ist, dass die Datenrate gleich bleibt. Ein weiterer Vorteil des Mesh-Netzes ist, dass, wenn genügend Knoten vorhanden sind, diese sich auch bei Ausfall oder Hinzufügen neuer Knoten automatisch in das Netz einbuchen oder bei Ausfall einen neuen Weg zur Weiterleitung der Daten suchen. Da das Mesh-Netzwerk nur eine SSID verwendet, ist es nicht notwendig, sich immer wieder neu einzuloggen. Ein Nachteil ist jedoch der hohe Energieverbrauch, je nachdem wie viele Mesh-Knoten Sie verwenden.',
      link: 'https://de.wikipedia.org/wiki/Vermaschtes_Netz',
      displayLink: 'Wikipedia Link',
      status: 'neueZone',
      technologyLine: 'hardware',
      icon: { coordinates: [1284, 2920], orientation: 'SW' },
    },
    mongodb: {
      title: 'MongoDB',
      description:
        'MongoDB is an open-source document-oriented NoSQL database that uses a JSON-like format for storing and retrieving data, designed for high performance, scalability, and availability. It is a popular choice for modern web applications and big data solutions. MongoDB supports dynamic schemas, allowing data structures to change without downtime or complex migrations. It also includes advanced features such as automatic sharding, replica sets, geospatial indexing and full-text search.',
      link: 'https://www.mongodb.com/',
      displayLink: 'https://www.mongodb.com/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 2060], orientation: 'SE' },
    },
    msoffice: {
      title: 'Office 365',
      description:
        'Für Dokumentation, Präsentation und Tabellenkalkulationen bzw. Darstellungen nutzen wir Microsoft Office 365. Desweiteren nutzen wir Outlook als Email- und Kalender-Programm sowie OneDrive als Cloud-Hosting Provider für MS Office-Dokumente.',
      link: 'https://www.office.com/?omkt=de-DE',
      displayLink: 'https://www.office.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: {
        coordinates: [849, 2360],
        orientation: 'NW',
      },
    },
    netlify: {
      title: 'Netlify',
      description:
        'Netlify ist danke seiner einfachen Integrierung und dem dynamischen Updaten unsere erste Wahl zum deployen von allen Web-Anwendungen. ',
      link: 'https://www.netlify.com/',
      displayLink: 'https://www.netlify.com/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 1980], orientation: 'SE' },
    },
    netlifyCMS: {
      title: 'NetlifyCMS',
      description:
        'NetlifyCMS ist ein kostenloser CMS-Service, welcher direkt mit einer git-Platform verbunden wird und diese als DB verwendet. Leider wird es von Netlify nicht mehr meintained und wir deshalb bei uns keine Zukunft haben.',
      link: 'https://www.netlifycms.org/',
      displayLink: 'https://www.netlifycms.org/',
      status: 'hauptzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [802, 1920], orientation: 'NW' },
    },
    newsletterToGo: {
      title: 'Newsletter2Go/SendInBlue',
      description:
        'Die verschiedenen Newsletter der Technologiestiftung laufen über SendInBlue, wir vom Digital Services Team schauen uns aber da auch gern nach Alternativen mit mehr Gestaltungsspielraum um.',
      link: 'https://de.sendinblue.com',
      displayLink: 'https://www.sendinblue.com',
      status: 'neueZone',
      technologyLine: 'tools',
      icon: { coordinates: [640, 2133.5], orientation: 'W' },
    },
    node: {
      title: 'node.js',
      description:
        'Node.js ist eine Laufzeitumgebung, mit der JavaScript außerhalb des Browsers ausgeführt werden kann. Als Entwicklungsserver ist es unverzichtbar, wir verwenden es aber auch in production.',
      link: 'https://nodejs.org/de/',
      displayLink: 'https://nodejs.org/',
      status: 'hauptzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [802, 1840], orientation: 'NW' },
    },
    penpot: {
      title: 'Penpot',
      description:
        'Da wir große Fans offener Software sind, haben wir natürlich auch ein Auge auf die Entwicklung des Open Source Design-Tools Penpot und hoffen, dass es bald einen Zustand erreicht in dem wir es produktiv einsetzen können. ',
      link: 'https://penpot.app',
      displayLink: 'https://penpot.app',
      status: 'wunschzone',
      technologyLine: 'tools',
      icon: { coordinates: [1717, 600], orientation: 'SW' },
    },
    postgrsql: {
      title: 'PostgreSQL',
      description:
        'PostgreSQL ist eine relationale Open-Source-Datenbank, die für ihre Robustheit, Skalierbarkeit und ihren erweiterten Funktionsumfang bekannt ist, insbesondere für ihre PostGIS-Erweiterung.',
      link: 'https://www.postgresql.org/',
      displayLink: 'https://www.postgresql.org/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 2140], orientation: 'SE' },
    },
    python: {
      title: 'python',
      description:
        'Python ist eine der am häufigsten verwendeten Programmiersprachen, die in der Datenwissenschaft dominiert und wegen ihrer Einfachheit, Lesbarkeit und Benutzerfreundlichkeit beliebt ist. Es ist auch sehr interessant für die Interaktion mit Software, die in anderen Sprachen erstellt wurde.',
      link: 'https://www.python.org/',
      displayLink: 'https://www.python.org/',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [1130, 1614], orientation: 'E' },
    },
    raspberryPy: {
      title: 'Raspberry Pi',
      description:
        'Raspberry Pis sind Einplatinencomputer, die vor Corona zu einem günstigen Preis erhältlich waren. Mit diesen kleinen Powerprotzen können verschiedene Projekte realisiert werden. Da diese sehr klein sind, vergleichbar mit einer Zigarettenschachtel, können diese platzsparend untergebracht werden. Auch der Verbrauch ist sehr gering und so findet er als Server z.B. in der Heimautomation oder als Medienserver, aber auch teilweise in der Industrie, großen Anklang. Es gibt eigentlich nichts, was man mit einem Pi nicht realisieren kann! Aus diesem Grund ist auch die Community sehr groß. Was die Zukunft des Pis angeht, ist es allerdings noch nicht klar, denn aufgrund von Lieferengpässen und anderen Problemen der Wirtschaft, sind die Pis derzeit schwer zu bekommen und die Preise sind extrem gestiegen, was die Pis wieder etwas unattraktiver macht. Nichtsdestotrotz, da die Pis in Bezug auf Hardware und Software Open Source sind, werden sie ein beliebtes Werkzeug für die Community bleiben.',
      link: 'https://www.raspberrypi.com',
      displayLink: 'https://www.raspberrypi.com',
      status: 'hauptzone',
      technologyLine: 'hardware',
      icon: { coordinates: [980, 2516.493669410175], orientation: 'E' },
    },
    react: {
      title: 'React/Next.js',
      description:
        'Die Komponentenbasierte JavaScript-Library ist unser erste Wahl wenn es um Frontends geht. Wir verwenden hier bevorzugt das Next.js Framework aufgrund seiner Performance durch Server-Side-Rendering.',
      link: 'https://nextjs.org/',
      displayLink: 'https://nextjs.org/',
      status: 'hauptzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [802, 2000], orientation: 'NW' },
    },
    sass: {
      title: 'Sass/SCSS',
      description:
        'Wir benutzen in unseren Stylesheets SCSS um CSS um Variablen, Funktionen, Nesting und vereinfachten Synthax zu erweitern.',
      link: 'https://sass-lang.com/',
      displayLink: 'https://sass-lang.com/',
      status: 'neueZone',
      technologyLine: 'programming',
      icon: { coordinates: [600, 1336], orientation: 'E' },
    },
    slack: {
      title: 'Slack',
      description:
        'Unsere interne Kommunikation funktioniert zu großen Teilen über Slack, was wir auch in mehreren Projekten, in denen es die Umstände zulassen, im Einsatz haben.',
      link: 'https://slack.com/intl/de-de/',
      displayLink: 'https://slack.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: {
        coordinates: [849, 2280],
        orientation: 'NW',
      },
    },
    solidjs: {
      title: 'SolidJS',
      description:
        'SolidJS findet bei uns noch keine regelmässige Anwendung. Wir denken das Framework hat Potential und könnte in Zukunft eine Alternative zur React-Library bieten.',
      link: 'https://www.solidjs.com/',
      displayLink: 'https://www.solidjs.com/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3020], orientation: 'SW' },
    },
    strapi: {
      title: 'Strapi (CL)',
      description:
        'Strapi ist ein quelloffenes, hochgradig anpassbares, headless Content Management System (CMS), das mit Node.js entwickelt wurde. Es ermöglicht Entwicklern die schnelle Erstellung und Verwaltung von Content-APIs, die von verschiedenen Frontend-Anwendungen, einschließlich Web- und Mobilanwendungen, genutzt werden können. Es bietet benutzerdefinierte Inhaltstypen, Zugriffskontrollen und Berechtigungen für verschiedene Benutzerrollen. Die Plattform umfasst eine benutzerfreundliche Verwaltungsoberfläche zum Erstellen und Verwalten von Inhalten.',
      link: 'https://strapi.io/',
      displayLink: 'https://strapi.io/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: {
        coordinates: [182.5, 3180],
        orientation: 'SW',
      },
    },
    streamit: {
      title: 'streamlit',
      description:
        'Streamlit ist eine Open-Source-Python-Bibliothek für die Erstellung interaktiver Webanwendungen für Datenwissenschaft und maschinelles Lernen. Mit Streamlit können Entwickler schnell Benutzeroberflächen für ihre Datenanalyse- oder Machine-Learning-Modelle erstellen, ohne dass sie über Front-End-Entwicklungskenntnisse verfügen müssen, und sie in gemeinsam nutzbare Webanwendungen verwandeln.',
      link: 'https://streamlit.io/',
      displayLink: 'https://streamlit.io/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3260], orientation: 'SW' },
    },
    tailwind: {
      title: 'Tailwind',
      description:
        'Tailwind ist ein weiteres CSS-Framework, welches bei uns fest im Sattel sitzt. Es ermöglicht standardisiertes und schnelles UI-Styling innerhalb der Komponenten.',
      link: 'https://tailwindcss.com/',
      displayLink: 'https://tailwindcss.com/',
      status: 'neueZone',
      technologyLine: 'frameworks',
      icon: { coordinates: [540, 2629], orientation: 'W' },
    },
    typescript: {
      title: 'TypeScript',
      description:
        'TypeScript ist ein Standard geworden. Auch bei uns. Es ergänzt JS um statische Types, hilft beim Debuggen und verhindert Fehler in der Produktionsumgebung.',
      link: 'https://www.typescriptlang.org/',
      displayLink: 'https://www.typescriptlang.org/',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [1050, 1614], orientation: 'E' },
    },
    typo3: {
      title: 'TYPO 3',
      description:
        'TYPO3 ist ein open-source CMS, welches schon lange bei uns in Verwendung ist. Für neue Projekte wird es jedoch selten herangezogen.',
      link: 'https://typo3.org/',
      displayLink: 'https://typo3.org/',
      status: 'haltezone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1730, 1844.5], orientation: 'W' },
    },
    vscode: {
      title: 'VS Code',
      description:
        'Auch wenn bei uns kein Coding-Environment vorgeschrieben ist, ist VS Code eigentlich die Umgebung die zumindest eigentlich alle installiert haben.',
      link: 'https://code.visualstudio.com',
      displayLink: 'https://code.visualstudio.com',
      status: 'neueZone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 22160], orientation: 'SE' },
    },
    vue: {
      title: 'Vue',
      description:
        'In Kooperation mit externen Stakeholdern wird gelegentlich auch mit Vue.js gearbeitet. Unser standard ist allerdings ReactJS.',
      link: 'https://vuejs.org/',
      displayLink: 'https://vuejs.org/',
      status: 'haltezone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1650, 1844.5], orientation: 'W' },
    },
    wordpress: {
      title: 'Wordpress',
      description:
        'Wordpress ist das meistgenutzte CMS der Welt. Bei aktuellen Projekten findet es bei uns jedoch keine Verwendung mehr.',
      link: 'https://wordpress.com/de/',
      displayLink: 'https://wordpress.com/',
      status: 'haltezone',
      technologyLine: 'frameworks',
      icon: { coordinates: [370, 2850], orientation: 'SW' },
    },
  },
  functionality: {
    description: 'Beschreibung',
    status: 'Status',
    buttonClosePopover: 'Map erkunden',
    buttonBackToIndex: 'Zurück zum Index',
    buttonCloseInfobox: 'Infobox schließen',
    buttonCloseExplanation: 'Beschreibung schließen',
    impressum: 'Impressum',
    privacyNotice: 'Datenschutzerklärung',
  },
}
export default content
