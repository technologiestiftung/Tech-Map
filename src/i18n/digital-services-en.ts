import { Content } from './digital-services-de'

export const content: Content = {
  description: {
    title: 'EN-Tech Map',
    subTitle: 'Digital Service Team',
    disclaimer:
      'Welcome to our Tech Map. \n\nOn this map Culpa cillum sit dolor qui aliquip id eiusmod. ',
    manual: {
      usage: {
        title: 'EN-Benutzung der Karte',
        description:
          'Auf dieser Karte verorten wir die wir die Technologien die bei uns im Einsatz sind und kategorisieren diese.\n\nUm weitere Informationen über ein Tool zu bekommen kann man die einzelnen Stationen auf der Karte auswählen.',
      },
      zones: {
        title: 'EN-Erklärung der Zonen',
        description:
          'Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.',
      },
    },
    zones: {
      hauptzone: {
        title: 'EN-Hauptzone',
        description:
          'Die Technologien, die sich über einen längeren Zeitraum und mehrere Projekt hinweg als stabil erwiesen haben sammeln wir hier unter diesem Punkt.',
      },
      neueZone: {
        title: 'EN-Neue Zone',
        description:
          'Technologien, die erste Male benutzt wurden aber Potential besitzen nach weiterem testen ins Standartrepertoir aufgenommen zu werden',
      },
      haltezone: {
        title: 'EN-Haltezone',
        description:
          'Info Haltezone Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorem voluptatum soluta commodi modi optio repellendus blanditiis illo nostrum id at perspiciatis ut, nobis, porro sint fuga voluptates dolorum.',
      },
      wunschzone: {
        title: 'EN-Wunschzone',
        description:
          'Info Wartezone Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorem voluptatum soluta commodi modi optio repellendus blanditiis illo nostrum id at perspiciatis ut, nobis, porro sint fuga voluptates dolorum.',
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
    arduino: {
      title: 'EN-Arduino',
      description:
        'Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users’ needs from students to makers and all the way to professional developers.',
      link: 'https://www.arduino.cc/',
      status: 'hauptzone',
      technologyLine: 'hardware',
      icon: { coordinates: [1153.1538978526582, 2516.3060969315156], orientation: 'E' },
    },
    esp32: {
      title: 'EN-ESP32',
      description: 'EN-lorem ipsum',
      link: '',
      status: 'neueZone',
      technologyLine: 'hardware',
      icon: { coordinates: [1284, 2785.353673693966], orientation: 'SW' },
    },
    figma: {
      title: 'EN-Figma',
      description:
        'Figma ist unser Go-To-Tool, wenn es um grafische Arbeiten geht und deckt dabei den Workflow von Konzeption und Wireframing, über Prototyping bis zum Development-Handover des Visual Designs ab.',
      link: 'https://www.figma.com/de/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1114.7941992048732, 2476], orientation: 'W' },
    },
    tester: {
      title: 'EN-Longer Label',
      description:
        'Figma ist unser Go-To-Tool, wenn es um grafische Arbeiten geht und deckt dabei den Workflow von Konzeption und Wireframing, über Prototyping bis zum Development-Handover des Visual Designs ab.',
      link: 'https://www.figma.com/de/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1050.7941992048732, 2476], orientation: 'W' },
    },
    html: {
      title: 'EN-HTML/CSS3',
      description:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
      link: 'https://www.w3schools.com/html/',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [893.5394459170407, 1614], orientation: 'E' },
    },
    jira: {
      title: 'EN-Atlassian Jira',
      description:
        'Zur Organisation unserer Zusammenarbeit nutzen wir die verschiedenen Arten von Boards, die uns Jira zur Verfügung stellt.',
      link: 'https://jira.atlassian.com',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: {
        coordinates: [849, 2233.8138644783044],
        orientation: 'NW',
      },
    },
    leaflet: {
      title: 'EN-leaflet',
      description:
        'Leaflet is an open source JavaScript library used to build web mapping applications. First released in 2011, it supports most mobile and desktop platforms, supporting HTML5 and CSS3. ',
      link: 'https://leafletjs.com/',
      status: 'neueZone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1396.8039365208926, 1844.5], orientation: 'W' },
    },
    vscode: {
      title: 'EN-VS Code',
      description: 'EN-lorem ipsum',
      link: '',
      status: 'neueZone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 2059.6665915655126], orientation: 'SE' },
    },
  },
  functionality: {
    description: 'EN-Beschreibung',
    status: 'Status',
    buttonClosePopover: 'Map erkunden',
    buttonBackToIndex: 'Zurück zum Index',
    buttonCloseInfobox: 'Infobox schließen',
    buttonCloseExplanation: 'Beschreibung schließen',
  },
}
export default content