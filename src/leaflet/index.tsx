import { MapContainer, Polyline, MarkerProps, Marker, Popup, ImageOverlay } from 'react-leaflet'
import {
  CRS,
  LatLngBoundsLiteral,
  Icon,
  LatLngExpression,
  Map,
  Polyline as PolyLineType,
} from 'leaflet'
import styled from 'styled-components'
import { createRef, FC, useState } from 'react'

import { TestSlider } from './TestSlider'
import { MarkerCloud } from './MarkerCloud'
import { lineData } from './polygonData'
import { TestMarker } from './TestMarker'
import { Infobox } from './Infobox'
import { SVGPathes } from './svgs/SVGPathes'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [2048, 4096],
]

const TSBMarkerOptions: MarkerProps = {
  position: [900, 2100],
}
const TSBMarkerIcon = new Icon({
  iconUrl: '../assets/tsb-logo-bw.png',
  iconSize: [20, 20],
})

const CityLabMarkerOptions: MarkerProps = {
  position: [1000, 1850],
}
const CityLabMarkerIcon = new Icon({
  iconUrl: '../assets/citylab-logo-bw.png',
  iconSize: [20, 20],
})

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1280px;
  max-height: 640px;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`
const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem;
`

export const TechMap: FC = () => {
  const mapRef = createRef<null | Map>()
  const programmingLineRef = createRef<PolyLineType>()
  const hardwareLineRef = createRef<PolyLineType>()
  const frameworkLineRef = createRef<PolyLineType>()
  const toolLineRef = createRef<PolyLineType>()

  const [showTestSlider, showTestSliderSet] = useState<boolean>(true)
  const [slidePosition, slidePositionSet] = useState<LatLngExpression>([290, 500])
  const [slideLabel, slideLabelSet] = useState<string>('label-placeholder')
  const [slideOrientation, slideOrientationSet] = useState<string>('E')

  const mapContainerStyles = {
    height: '100%',
    width: '100%',
  }
  const lineRefs = {
    programming: programmingLineRef,
    hardware: hardwareLineRef,
    framework: frameworkLineRef,
    tool: toolLineRef,
  }

  return (
    <MapWrapper>
      <Infobox />
      <MapContainer
        center={[1024, 2048]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={-2}
        maxZoom={5}
        minZoom={-2}
        scrollWheelZoom={false}
        style={mapContainerStyles}
        ref={mapRef}
      >
        <MarkerCloud progLine={programmingLineRef} map={mapRef} />
        <ImageOverlay
          url={'./assets/Zonen.svg'}
          bounds={[baseLayerBounds[0], [baseLayerBounds[1][0] + 204, baseLayerBounds[1][1]]]}
        />

        {/* These are invisible helper pathes to distribute markers */}
        {Object.keys(lineData).map((key) => (
          <Polyline
            key={key}
            pathOptions={lineData[key].pathOptions}
            positions={lineData[key].positions}
            ref={lineRefs[key]}
          />
        ))}

        {showTestSlider && (
          <TestMarker
            position={slidePosition as LatLngExpression}
            label={slideLabel}
            orientation={slideOrientation}
          />
        )}
        <Marker position={TSBMarkerOptions.position} icon={TSBMarkerIcon}>
          <Popup>Hey, It&apos;s TSB</Popup>
        </Marker>
        <Marker position={CityLabMarkerOptions.position} icon={CityLabMarkerIcon}>
          <Popup>Yeah, found the CityLab</Popup>
        </Marker>

        <SVGPathes bounds={baseLayerBounds} />
      </MapContainer>

      <Button onClick={() => showTestSliderSet(!showTestSlider)}>
        {showTestSlider ? 'Hide Testslider' : 'Show Testslider'}
      </Button>

      {showTestSlider && (
        <TestSlider
          position={slidePosition}
          changePosition={slidePositionSet}
          label={slideLabel}
          changeLabel={slideLabelSet}
          orientation={slideOrientation}
          changeOrientation={slideOrientationSet}
          mapRef={mapRef}
        />
      )}
    </MapWrapper>
  )
}
