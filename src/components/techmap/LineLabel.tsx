import L, { LatLngExpression } from 'leaflet'
import { FC, useState } from 'react'
import { Polygon, useMapEvents, Marker } from 'react-leaflet'
import { TechnologyLine } from '../../i18n/digital-services-de'

import styles from '../../styles'

interface LineLabelProps {
  position: LatLngExpression
  label: string
  line: TechnologyLine
}
export const LineLabel: FC<LineLabelProps> = ({ position, label, line }: LineLabelProps) => {
  const defineText = (zoomLevel) => {
    return L.divIcon({
      html: `<span class='invisible-marker' style="font-size: ${
        Math.pow(2, zoomLevel + 2) * 10
      }px">${label}</span>`,
      className: 'line-label',
    })
  }
  const [text, textSet] = useState(defineText(-1.75))

  const mapEvents = useMapEvents({
    zoomend: () => {
      textSet(defineText(mapEvents.getZoom()))
    },
  })

  const width = label.length * 29 + 50

  const color =
    line == 'programming'
      ? styles.colors.lineProgramming
      : line == 'hardware'
      ? styles.colors.lineHardware
      : line == 'tools'
      ? styles.colors.lineTools
      : styles.colors.corporateBlue

  const height = 70

  const rect: LatLngExpression[] = [
    position,
    [position[0], position[1] + width],
    [position[0] + height, position[1] + width],
    [position[0] + height, position[1]],
  ]
  const center = L.polygon(rect).getBounds().getCenter()

  return (
    <Polygon color={color} weight={0} positions={rect} fillOpacity={1}>
      <Marker
        position={center}
        //@ts-ignore
        fill="#00000000"
        width={0}
        weight={0}
        icon={text}
      />
    </Polygon>
  )
}
