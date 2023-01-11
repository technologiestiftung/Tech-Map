// Obsolete but here is the integration of a custom div in the map

import { divIcon, DivIcon } from 'leaflet'
import styled from 'styled-components'
import { FC } from 'react'
import { renderToString } from 'react-dom/server'

const Label = styled.div`
  height: 20px;
  width: 77px;
  color: #375aa5;
  background: #f6f6f6;
  border: 1px solid #375aa5;
  border-radius: 2.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-50px, -50px);
`

interface ZoneLabelProps {
  text: string
}

const ZoneLabel: FC<ZoneLabelProps> = ({ text }: ZoneLabelProps) => {
  return <Label>{text}</Label>
}

export const zoneLabelIcon: (label: string) => DivIcon = (label) => {
  return divIcon({
    className: 'zone-label',
    iconSize: [20, 77],
    iconAnchor: [-10, -35],
    html: renderToString(<ZoneLabel text={label} />),
  })
}
