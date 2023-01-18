import { LatLngExpression } from 'leaflet'
import { FC, useEffect, useState } from 'react'
import { Circle, useMapEvents } from 'react-leaflet'
import TextPath from 'react-leaflet-textpath'
// The TextPath is a little clumsy for that usecase. maybe this would be a good alternative: https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9

interface TestMarkerProps {
  position: LatLngExpression
  label: string
  orientation: string
}

export const TestMarker: FC<TestMarkerProps> = ({
  position,
  label,
  orientation,
}: TestMarkerProps) => {
  const [reversed, reversedSet] = useState<boolean>(false)
  const [orientationVector, orientationVectorSet] = useState<LatLngExpression[]>([
    [position[0], position[1] + 14],
    [position[0], position[1] + 100],
  ])

  const reversedLabel = label.split('').reverse().join('')

  const [zoomLevel, setZoomLevel] = useState(0) // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })

  console.log(zoomLevel)

  useEffect(() => {
    const createOrientationVector = () => {
      const offset = 30
      const offsetVertical = 42
      const length = 600

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
            [position[0], position[1] + offsetVertical],
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
            [position[0], position[1] - offsetVertical],
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

  return (
    <>
      <Circle
        center={position}
        pathOptions={{
          color: 'red',
          fillColor: '#FFFFFF',
          fillOpacity: 1,
          weight: 4,
        }}
        radius={20}
      />
      <TextPath
        positions={orientationVector}
        text={reversed ? reversedLabel : label}
        // @ts-ignore
        color="#00000000"
        attributes={{
          fill: '#3B3B3A',
          class: 'station-label',
          'font-size': `${8 + zoomLevel * 4}`,
          rotate: reversed ? '180' : '0',
        }}
      />
    </>
  )
}
