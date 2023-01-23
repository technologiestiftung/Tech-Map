import { FC } from 'react'

import { Station } from './Station'

import { content } from '../../data/digital-services'

interface MarkersProps {
  activeTechIdSet: (id: string) => void
  activeTechId: string
}

export const Markers: FC<MarkersProps> = ({ activeTechIdSet, activeTechId }: MarkersProps) => {
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
