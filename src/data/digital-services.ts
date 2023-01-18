
interface Icon {
  coordinates: number[],
  orientation: 'NE' | 'E' | 'SE' | 'NW' | 'W' | 'SW',
  technology: 'tools' | 'frameworks' | 'programmiersprachen' | 'hardware',
}

interface Technology {
  title: string
  description: string
  link: string
  status: string
  icon: Icon
}

interface Description {
  title: string
  subTitle: string
  disclaimer: string
  status: string
  zones: {
    title: string
    description: string
  }[]
}

interface Content {
  description: Description
  technologies: Technology[]
}

const content:Content = {
  description: {
    title: 'Tech Map',
    subTitle: 'Digital Service Team',
    disclaimer: 'Auf dieser Karte verorten wir die  wir die Technologien die bei uns im Einsatz sind und kategorisieren diese.',
    status: 'Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.',
    zones: [
      {
        title: "Hauptzone",
        description: "Die Technologien, die sich über einen längeren Zeitraum und mehrere Projekt hinweg als stabil erwiesen haben sammeln wir hier unter diesem Punkt."
      }
    ]
  },
  technologies: [
    {
      title: 'Figma',
      description:
        'Figma ist unser Go-To-Tool, wenn es um grafische Arbeiten geht und deckt dabei den Workflow von Konzeption und Wireframing, über Prototyping bis zum Development-Handover des Visual Designs ab.',
      link: 'https://www.figma.com',
      status: 'ADOPT',
      icon: {
        coordinates: [500, 519.5244732728173],
        orientation: 'NE',
        technology: 'tools',
      },
    },
  ],
}
export default content
