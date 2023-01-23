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
      const offset = 35
      // const offsetNE = [offset - (zoomLevel + 2) * 5, offset - (zoomLevel + 2) * 5]
      const offsetNE = [(zoomLevel + 2) * 10, (zoomLevel + 2) * 10]
      const offsetSE = [-offset - (3 - (zoomLevel + 3)) * 5, offset + (3 - (zoomLevel + 3)) * 5]
      const offsetNW = [offset - (7 - (zoomLevel + 3)) * 5, -offset + (7 - (zoomLevel + 3)) * 5]
      const offsetSW = [-offset - (3 - (zoomLevel + 3)) * 5, -offset - (3 - (zoomLevel + 3)) * 5]
      const length = 300

      let startPoint: LatLngExpression = [0, 0]
      switch (orientation) {
        case 'NE':
          startPoint = [position[0] + offsetNE[0], position[1] + offsetNE[1]]
          orientationVectorSet([startPoint, [startPoint[0] + length, startPoint[1] + length]])
          reversedSet(false)
          break
        case 'E':
          startPoint = [position[0] - 3, position[1] + offset]
          orientationVectorSet([startPoint, [startPoint[0], startPoint[1] + length]])
          reversedSet(false)
          break
        case 'SE':
          startPoint = [position[0] + offsetSE[0], position[1] + offsetSE[1]]
          orientationVectorSet([startPoint, [startPoint[0] - length, startPoint[1] + length]])
          reversedSet(false)
          break
        case 'NW':
          startPoint = [position[0] + offsetNW[0], position[1] + offsetNW[1]]
          orientationVectorSet([startPoint, [startPoint[0] + length, startPoint[1] - length]])
          reversedSet(true)
          break
        case 'W':
          startPoint = [position[0] - 3, position[1] - offset]
          orientationVectorSet([startPoint, [startPoint[0], startPoint[1] - length]])
          reversedSet(true)
          break
        case 'SW':
          startPoint = [position[0] + offsetSW[0], position[1] + offsetSW[1]]
          orientationVectorSet([startPoint, [startPoint[0] - length, startPoint[1] - length]])
          reversedSet(true)
          break
        default:
          return
      }
    }
    createOrientationVector()
  }, [orientation, position, zoomLevel])

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
        weight="15"
        offset={orientation != 'E' && orientation != 'W' ? 12 : 0}
        attributes={{
          orientation: '20',
          class: 'station-label',
          'font-size': `${2 + (zoomLevel + 3) * 5}`,
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
