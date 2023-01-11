import { MapContainer, Polyline, MarkerProps, ImageOverlay, Marker, Popup } from 'react-leaflet'

import {
  CRS,
  LatLngBoundsLiteral,
  Icon,
  LatLngExpression,
  Polyline as PolyLineType,
  Map,
} from 'leaflet'
import styled from 'styled-components'
import { createRef, FC, useState } from 'react'

import { TestSlider } from './TestSlider'
import { MarkerCloud } from './MarkerCloud'

import { frameworkLine } from './polygonData'
import { TestMarker } from './TestMarker'
import { PolyLineComponent } from './PolyLine'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [720, 1280],
]

const TSBMarkerOptions: MarkerProps = {
  position: [330, 470],
}
const TSBMarkerIcon = new Icon({
  iconUrl: require('../assets/tsb-logo.png'),
  iconSize: [35, 35],
})

const CityLabMarkerOptions: MarkerProps = {
  position: [270, 530],
}
const CityLabMarkerIcon = new Icon({
  iconUrl: require('../assets/citylab-logo.png'),
  iconSize: [35, 35],
})

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1280px;
  max-height: 720px;
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
  const [showTestSlider, showTestSliderSet] = useState<boolean>(true)

  const [slidePosition, slidePositionSet] = useState<LatLngExpression>([290, 500])
  const [slideLabel, slideLabelSet] = useState<string>('label-placeholder')
  const [slideOrientation, slideOrientationSet] = useState<string>('E')

  const mapContainerStyles = {
    height: '100%',
    width: '100%',
  }

  return (
    <MapWrapper>
      <MapContainer
        center={[375, 640]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={0}
        maxZoom={5}
        scrollWheelZoom={false}
        style={mapContainerStyles}
        ref={mapRef}
      >
        <ImageOverlay url={'./assets/Zonen.svg'} bounds={baseLayerBounds} />
        {/* Here is an example of how to place custom html on the map */}
        {/* {zoneLabelData.map((labelObject, i) => (
          <Marker position={labelObject.position} key={i} icon={zoneLabelIcon(labelObject.text)} />
        ))} */}
        <MarkerCloud progLine={programmingLineRef} map={mapRef} />
        <PolyLineComponent ref={programmingLineRef} />
        <Polyline pathOptions={frameworkLine.pathOptions} positions={frameworkLine.positions} />

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
