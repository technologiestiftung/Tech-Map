import { divIcon, LatLngExpression } from 'leaflet'
import { FC, useEffect, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Circle, Marker, useMapEvents } from 'react-leaflet'
import { TechnologyLine } from '../../../i18n/digital-services-de'

import styles from '../../../styles'

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
  const [rimColor, rimColorSet] = useState(styles.colors.corporateBlueMedium)
  const [transformation, transformationSet] = useState<string>(`rotate(0) translate3d(30%, 0, 0)`)

  const [zoomLevel, setZoomLevel] = useState(-1.75) // initial zoom level provided for MapContainer
  const [markerOpacity, markerOpacitySet] = useState(1) // initial zoom level provided for MapContainer
  const [circleWeight, circleWeightSet] = useState(Math.max(1, (zoomLevel + 2) * 3) + 0.5)

  const mapEvents = useMapEvents({
    zoomstart: () => {
      markerOpacitySet(0)
    },
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
      markerOpacitySet(1)
    },
  })

  useEffect(() => {
    const XOffset = 32 * Math.pow(2, zoomLevel)
    const YOffset =
      zoomLevel < -1
        ? 2.5
        : zoomLevel === -1
        ? 0
        : zoomLevel === 0
        ? -6
        : zoomLevel === 1
        ? -16
        : zoomLevel === 2
        ? -36
        : 60

    switch (orientation) {
      case 'NE':
        transformationSet(`rotate(${'-45deg'}) translate3d(${XOffset}px, ${YOffset}px, 0)`)
        break
      case 'E':
        transformationSet(`rotate(0) translate3d(${XOffset}px, ${YOffset}px, 0)`)
        break
      case 'SE':
        transformationSet(`rotate(${'45deg'}) translate3d(${XOffset}px, ${YOffset}px, 0)`)
        break
      case 'NW':
        transformationSet(
          `rotate(${'45deg'}) translate3d(calc(-100% - ${XOffset + zoomLevel + 1}px), ${
            YOffset - 3
          }px, 0)`
        )
        break
      case 'W':
        transformationSet(`rotate(0) translate3d(calc(-100% - ${XOffset}px ), ${YOffset}px, 0)`)
        break
      case 'SW':
        transformationSet(
          `rotate(${'-45deg'}) translate3d(calc(-100% - ${XOffset}px), ${YOffset + 1}px, 0)`
        )
        break
      default:
        break
    }

    circleWeightSet(Math.max(1, (zoomLevel + 2) * 3) + 1.5)
  }, [orientation, position, zoomLevel, circleWeight])

  useEffect(() => {
    const newRimColor = generator
      ? styles.colors.testMarker
      : technologyLine === 'programming'
      ? styles.colors.lineProgramming
      : technologyLine === 'tools'
      ? styles.colors.lineTools
      : technologyLine === 'hardware'
      ? styles.colors.lineHardware
      : styles.colors.corporateBlueMedium

    rimColorSet(newRimColor)
    setZoomLevel(mapEvents.getZoom())
  }, [technologyLine, generator, mapEvents])

  const stationDivIcon = divIcon({
    className: 'custom-station',
    html: ReactDOMServer.renderToString(
      <span
        className="custom-station-label"
        style={{
          width: 'max-content',
          position: 'absolute',
          transformOrigin: 'left',
          transform: transformation,
          fontSize:
            activeTechId === stationId
              ? `${16 * Math.pow(2, zoomLevel) * 1.2}px`
              : `${16 * Math.pow(2, zoomLevel)}px`,
          fontWeight: activeTechId === stationId ? 'bold' : 'normal',
          fontFamily: 'Clan',
          color: activeTechId === stationId ? rimColor : styles.colors.text,
        }}
      >
        {label}
      </span>
    ),
  })

  return (
    <>
      <Circle
        center={position}
        pathOptions={{
          color: rimColor,
          fillColor: activeTechId === stationId ? rimColor : 'white',
          fillOpacity: 1,
          weight: activeTechId === stationId ? circleWeight * 2 : circleWeight,
        }}
        radius={activeTechId === stationId ? 15 : 18}
        eventHandlers={{
          click: () => {
            activeTechIdSet(stationId)
          },
        }}
      />
      <Marker
        position={position}
        opacity={markerOpacity}
        icon={stationDivIcon}
        eventHandlers={{
          click: () => {
            activeTechIdSet(stationId)
          },
        }}
      />
    </>
  )
}
