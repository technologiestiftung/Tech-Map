import { FC } from 'react'
import { Station } from './Station'

import { content as contentDigiServices } from '../../../i18n/digital-services-de'

interface MarkersProps {
  activeTechIdSet: (id: string) => void
  activeTechId: string
  activeInstitute: string
}

export const Markers: FC<MarkersProps> = ({ activeTechIdSet, activeTechId }: MarkersProps) => {
  const content = contentDigiServices

  const stations = Object.keys(content.technologies).map((key) => {
    return { ...content.technologies[key], id: key }
  })

  return (
    <>
      {stations.map((station) => (
        <Station
          key={station.id}
          stationId={station.id}
          position={station.icon.coordinates}
          label={station.title}
          orientation={station.icon.orientation}
          technologyLine={station.technologyLine}
          activeTechIdSet={activeTechIdSet}
          activeTechId={activeTechId}
        />
      ))}
    </>
  )
}
