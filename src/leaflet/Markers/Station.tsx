import { LatLngExpression } from 'leaflet'
import { FC, useEffect, useState } from 'react'
import { Circle, useMapEvents } from 'react-leaflet'
import TextPath from 'react-leaflet-textpath'
import { TechnologyLine } from '../../data/digital-services'

import styles from '../../styles'

interface StationProps {
  position: LatLngExpression
  label: string
  orientation: string
  stationId: string
  technologyLine: TechnologyLine
  generator?: boolean
  activeTechIdSet?: (id: string) => void
  activeTechId?: string
}

export const Station: FC<StationProps> = ({
  position,
  label,
  orientation,
  stationId,
  technologyLine,
  generator,
  activeTechIdSet,
  activeTechId,
}: StationProps) => {
  const [reversed, reversedSet] = useState<boolean>(false)
  const [orientationVector, orientationVectorSet] = useState<LatLngExpression[]>([
    [position[0], position[1] + 14],
    [position[0], position[1] + 100],
  ])
  const [rimColor, rimColorSet] = useState(styles.colors.corporateBlue)

  const reversedLabel = label.split('').reverse().join('')

  const [zoomLevel, setZoomLevel] = useState(-2) // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })

  useEffect(() => {
    const createOrientationVector = () => {
      const offset = 30
      const offsetVertical = 42
      const length = 300

      switch (orientation) {
        case 'NE':
          orientationVectorSet([
            [position[0] + offset, position[1] + offset],
            [position[0] + length, position[1] + length],
          ])
          reversedSet(false)
          break
        case 'E':
          orientationVectorSet([
            [position[0] - 3, position[1] + offsetVertical],
            [position[0], position[1] + length],
          ])
          reversedSet(false)
          break
        case 'SE':
          orientationVectorSet([
            [position[0] - offset, position[1] + offset],
            [position[0] - length, position[1] + length],
          ])
          reversedSet(false)
          break
        case 'NW':
          orientationVectorSet([
            [position[0] + offset, position[1] - offset],
            [position[0] + length, position[1] - length],
          ])
          reversedSet(true)
          break
        case 'W':
          orientationVectorSet([
            [position[0] - 3, position[1] - offsetVertical],
            [position[0], position[1] - length],
          ])
          reversedSet(true)
          break
        case 'SW':
          orientationVectorSet([
            [position[0] - offset, position[1] - offset],
            [position[0] - length, position[1] - length],
          ])
          reversedSet(true)
          break
        default:
          return
      }
    }
    createOrientationVector()
  }, [orientation, position])

  useEffect(() => {
    const newRimColor = generator
      ? styles.colors.testMarker
      : technologyLine === 'programming'
      ? styles.colors.lineProgramming
      : technologyLine === 'tools'
      ? styles.colors.lineTools
      : technologyLine === 'hardware'
      ? styles.colors.lineHardware
      : styles.colors.corporateBlue

    rimColorSet(newRimColor)
  }, [technologyLine, generator])

  return (
    <>
      <Circle
        center={position}
        pathOptions={{
          color: activeTechId === stationId ? styles.colors.corporateBlueMedium : rimColor,
          fillColor: generator ? rimColor : 'white',
          fillOpacity: 1,
          weight: Math.max(1, (zoomLevel + 2) * 3),
        }}
        radius={18}
        eventHandlers={{
          click: () => {
            activeTechIdSet(stationId)
          },
        }}
      />
      <TextPath
        positions={orientationVector}
        text={reversed ? reversedLabel : label}
        // @ts-ignore
        color="#00000000"
        attributes={{
          class: 'station-label',
          'font-size': `${8 + (zoomLevel + 3) * 4}`,
          rotate: reversed ? '180' : '0',
          fill: activeTechId === stationId ? styles.colors.corporateBlueMedium : styles.colors.text,
        }}
        eventHandlers={{
          click: () => {
            activeTechIdSet(stationId)
          },
        }}
      />
    </>
  )
}
