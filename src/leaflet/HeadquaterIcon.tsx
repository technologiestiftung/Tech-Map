import { Icon } from 'leaflet'
import { useState } from 'react'
import { Marker, MarkerProps, Popup, useMapEvents } from 'react-leaflet'

export const HeadquaterIcon = () => {
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
      <Marker position={TSBMarkerOptions.position} icon={TSBMarkerIcon}>
        <Popup>Hey, It&apos;s TSB</Popup>
      </Marker>
      <Marker position={CityLabMarkerOptions.position} icon={CityLabMarkerIcon}>
        <Popup>Yeah, found the CityLab</Popup>
      </Marker>
    </>
  )
}
