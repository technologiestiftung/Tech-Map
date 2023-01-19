import { LatLngExpression } from 'leaflet'

interface Icon {
  coordinates: LatLngExpression
  orientation: 'NE' | 'E' | 'SE' | 'NW' | 'W' | 'SW'
}

export type TechnologyLine = 'tools' | 'frameworks' | 'programming' | 'hardware'
export type Zone = 'hauptzone' | 'neue zone' | 'haltezone' | 'wunschzone'

export interface Technology {
  title: string
  description: string
  link: string
  status: Zone
  technologyLine: TechnologyLine
  icon: Icon
}

interface Description {
  title: string
  subTitle: string
  disclaimer: string
  status: string
  zones: { [key in Zone]: string }
  lines: { [key in TechnologyLine]: string }
}

interface Content {
  description: Description
  technologies: { [id: string]: Technology }
}

export const content: Content = {
  description: {
    title: 'Tech Map',
    subTitle: 'Digital Service Team',
    disclaimer:
      'Auf dieser Karte verorten wir die  wir die Technologien die bei uns im Einsatz sind und kategorisieren diese.',
    status:
      'Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.',
    zones: {
      hauptzone:
        'Die Technologien, die sich über einen längeren Zeitraum und mehrere Projekt hinweg als stabil erwiesen haben sammeln wir hier unter diesem Punkt.',
      'neue zone':
        'Technologien, die erste Male benutzt wurden aber Potential besitzen nach weiterem testen ins Standartrepertoir aufgenommen zu werden',
      haltezone:
        'Info Haltezone Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorem voluptatum soluta commodi modi optio repellendus blanditiis illo nostrum id at perspiciatis ut, nobis, porro sint fuga voluptates dolorum.',
      wunschzone:
        'Info Wartezone Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorem voluptatum soluta commodi modi optio repellendus blanditiis illo nostrum id at perspiciatis ut, nobis, porro sint fuga voluptates dolorum.',
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
      title: 'Arduino',
      description:
        'Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users’ needs from students to makers and all the way to professional developers.',
      link: 'https://www.arduino.cc/',
      status: 'hauptzone',
      technologyLine: 'hardware',
      icon: { coordinates: [1153.1538978526582, 2516.3060969315156], orientation: 'E' },
    },
    figma: {
      title: 'Figma',
      description:
        'Figma ist unser Go-To-Tool, wenn es um grafische Arbeiten geht und deckt dabei den Workflow von Konzeption und Wireframing, über Prototyping bis zum Development-Handover des Visual Designs ab.',
      link: 'https://www.figma.com/de/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1114.7941992048732, 2476], orientation: 'W' },
    },
    html: {
      title: 'HTML/CSS3',
      description:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
      link: 'https://www.w3schools.com/html/',
      status: 'hauptzone',
      technologyLine: 'programming',
      icon: { coordinates: [893.5394459170407, 1614], orientation: 'E' },
    },
    jira: {
      title: 'Atlassian Jira',
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
      title: 'leaflet',
      description:
        'Leaflet is an open source JavaScript library used to build web mapping applications. First released in 2011, it supports most mobile and desktop platforms, supporting HTML5 and CSS3. ',
      link: 'https://leafletjs.com/',
      status: 'neue zone',
      technologyLine: 'frameworks',
      icon: { coordinates: [1396.8039365208926, 1844.5], orientation: 'W' },
    },
  },
}
export default content
