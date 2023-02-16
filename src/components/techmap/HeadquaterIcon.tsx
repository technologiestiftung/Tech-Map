import { Icon } from 'leaflet'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Marker, MarkerProps, useMapEvents } from 'react-leaflet'

interface HeadquaterIconProps {
  activeInstituteSet: Dispatch<SetStateAction<'cityLab' | 'digitalServices'>>
}
export const HeadquaterIcon: FC<HeadquaterIconProps> = ({}: // activeInstituteSet,
HeadquaterIconProps) => {
  const [iconSize, iconSizeSet] = useState(20)

  const mapEvents = useMapEvents({
    zoomend: () => {
      const zoomLevel = mapEvents.getZoom()
      iconSizeSet((zoomLevel + 3) * 15)
    },
  })

  const TSBMarkerOptions: MarkerProps = {
    position: [900, 2050],
  }

  const TSBMarkerIcon = new Icon({
    iconUrl: '../assets/tsb-logo-bw.png',
    iconSize: [iconSize, iconSize],
  })

  const CityLabMarkerOptions: MarkerProps = {
    position: [1000, 1850],
  }
  const CityLabMarkerIcon = new Icon({
    iconUrl: '../assets/citylab-logo-bw.png',
    iconSize: [iconSize, iconSize],
  })

  return (
    <>
      <Marker
        position={TSBMarkerOptions.position}
        icon={TSBMarkerIcon}
        // eventHandlers={{
        //   click: () => activeInstituteSet('digitalServices'),
        // }}
      />
      <Marker
        position={CityLabMarkerOptions.position}
        icon={CityLabMarkerIcon}
        // eventHandlers={{
        //   click: () => activeInstituteSet('cityLab'),
        // }}
      />
    </>
  )
}
