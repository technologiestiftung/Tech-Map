import React, { Dispatch, FC, RefObject, SetStateAction, useState } from 'react'
import { useMapEvents } from 'react-leaflet'

import { Map } from 'leaflet'
import styled from 'styled-components'
import { ControlButton } from './ControlButton'

const ControlsWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10000;
  pointer-events: none;
`
interface ControlsProps {
  mapRef: RefObject<Map>
}
export const Controls: FC<ControlsProps> = ({ mapRef }: ControlsProps) => {
  const [zoomLevel, setZoomLevel] = useState(-1.75) // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })
  const controlButtons = [
    {
      position: {
        left: 8,
        bottom: 72,
      },
      icon: 'assets/info.svg',
      clickHandler: () => {
        console.log('info')
      },
    },
    {
      position: {
        left: 8,
        bottom: 16,
      },
      icon: 'assets/globe.svg',
      clickHandler: () => {
        console.log('lang')
      },
    },
    {
      position: {
        right: 8,
        bottom: 16,
      },
      icon: 'assets/minus.svg',
      clickHandler: () => console.log(mapRef?.current.setZoom(zoomLevel - 1)),
    },
    {
      position: {
        right: 8,
        bottom: 72,
      },
      icon: 'assets/plus.svg',
      clickHandler: () => console.log(mapRef?.current.setZoom(zoomLevel + 1)),
    },
  ]
  return (
    <ControlsWrapper>
      {controlButtons.map((button) => (
        <ControlButton
          key={button.icon}
          icon={button.icon}
          position={button.position}
          clickHandler={button.clickHandler}
        />
      ))}
    </ControlsWrapper>
  )
}
