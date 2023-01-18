import { FC, useState, useEffect, RefObject } from 'react'
import GeometryUtil from 'leaflet-geometryutil'
import { LatLngExpression, Map, Polyline } from 'leaflet'
import { Station } from './Station'

import { content } from '../../data/digital-services'

interface MarkersProps {
  progLine: RefObject<Polyline>
  map: RefObject<Map>
}

export const Markers: FC<MarkersProps> = ({ progLine, map }: MarkersProps) => {
  const [distributedValues, distributedValuesSet] = useState([])

  const stations = Object.keys(content.technologies).map((key) => {
    return { ...content.technologies[key], id: key }
  })

  console.log(stations)

  // useEffect(() => {
  //   const percentages = [0.001, 0.1, 0.2, 0.33, 0.5, 0.75, 0.78]
  //   const latLngArray: LatLngExpression[] | null = progLine
  //     ? (progLine.current.getLatLngs() as LatLngExpression[])
  //     : null
  //   const pointsAtPercentages = latLngArray
  //     ? percentages
  //         .map((value) => GeometryUtil.interpolateOnLine(map.current, latLngArray, value))
  //         .map((obj) => [obj.latLng.lat, obj.latLng.lng])
  //     : []
  //   distributedValuesSet(pointsAtPercentages)
  // }, [progLine, map])

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
        />
      ))}
    </>
  )
}
