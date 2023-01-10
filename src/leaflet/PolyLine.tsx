import { forwardRef } from 'react'
import { Polyline } from 'react-leaflet'
import { Polyline as PolyLineType } from 'leaflet'
import { programmingLine } from './polygonData'

export const PolyLineComponent = forwardRef<PolyLineType>((_props, forwardedref) => (
  <Polyline
    pathOptions={programmingLine.pathOptions}
    positions={programmingLine.positions}
    ref={forwardedref}
  />
))

PolyLineComponent.displayName = 'PolyLineComponent'
