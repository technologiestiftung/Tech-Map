import { forwardRef } from 'react'
import { Polyline } from 'react-leaflet'
import { Polyline as PolyLineType } from 'leaflet'
import { lineData } from './polygonData'

export const PolyLineComponent = forwardRef<PolyLineType>((_props, forwardedref) => (
  <>
    <Polyline
      pathOptions={lineData.programming.line.pathOptions}
      positions={lineData.programming.line.positions}
      ref={forwardedref}
    />
  </>
))

PolyLineComponent.displayName = 'PolyLineComponent'
