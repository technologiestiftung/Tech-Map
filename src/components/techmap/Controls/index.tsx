import React, { FC, RefObject, useState } from 'react'
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
  activeTechIdSet: (id: string) => void
}
export const Controls: FC<ControlsProps> = ({ mapRef, activeTechIdSet }: ControlsProps) => {
  const [zoomLevel, setZoomLevel] = useState(-1.75) // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })
  const controlButtons = [
    {
      position: {
        mobile: {
          left: 8,
          bottom: 72,
        },
      },
      icon: '../assets/info.svg',
      clickHandler: () => activeTechIdSet('general_info'),
    },
    {
      position: {
        mobile: {
          left: 8,
          bottom: 16,
        },
        desktop: {
          right: 24,
          top: 24,
        },
      },
      icon: '../assets/globe.svg',
      clickHandler: () => {
        console.log('lang')
      },
    },
    {
      position: {
        mobile: {
          right: 8,
          bottom: 16,
        },
        desktop: {
          right: 24,
          bottom: 16,
        },
      },
      icon: '../assets/minus.svg',
      clickHandler: () => mapRef?.current.setZoom(zoomLevel - 1),
    },
    {
      position: {
        mobile: {
          right: 8,
          bottom: 72,
        },
        desktop: {
          right: 24,
          bottom: 72,
        },
      },
      icon: '../assets/plus.svg',
      clickHandler: () => mapRef?.current.setZoom(zoomLevel + 1),
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
