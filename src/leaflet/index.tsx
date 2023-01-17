import { MapContainer, Polyline, Polygon, MarkerProps, Marker, Popup } from 'react-leaflet'
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
import { Link } from 'react-router-dom'

import { MarkerGenerator } from './MarkerGenerator'
import { MarkerCloud } from './MarkerCloud'

import { baseLayer, middelRing, innerRing, frameworkLine } from './polygonData'
import { TestMarker } from './TestMarker'
import { PolyLineComponent } from './PolyLine'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [750, 1000],
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
  width: 90vw;
  height: 90vh;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border: solid 8px #5b8acb;
`
const BackLink = styled(Link)`
  margin: 1rem auto;
  display: flex;
  align-items: center;
`

interface TechMapProps {
  development?: boolean
}

export const TechMap: FC<TechMapProps> = ({ development }: TechMapProps) => {
  const mapRef = createRef<null | Map>()
  const programmingLineRef = createRef<PolyLineType>()

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
        center={[375, 500]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={0}
        maxZoom={5}
        scrollWheelZoom={false}
        style={mapContainerStyles}
        ref={mapRef}
      >
        <>
          <Polygon pathOptions={baseLayer.pathOptions} positions={baseLayer.positions} />
          <Polygon pathOptions={middelRing.pathOptions} positions={middelRing.positions} />
          <Polygon pathOptions={innerRing.pathOptions} positions={innerRing.positions} />
        </>
        <PolyLineComponent ref={programmingLineRef} />
        <Polyline pathOptions={frameworkLine.pathOptions} positions={frameworkLine.positions} />

        {development && (
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
        <MarkerCloud progLine={programmingLineRef} map={mapRef} />
      </MapContainer>

      {development && (
        <MarkerGenerator
          position={slidePosition}
          changePosition={slidePositionSet}
          label={slideLabel}
          changeLabel={slideLabelSet}
          orientation={slideOrientation}
          changeOrientation={slideOrientationSet}
          mapRef={mapRef}
        />
      )}
      {development && (
        <BackLink to="/">
          <img src="./assets/arrow-left.svg" alt="arrow left" />
          Main Page
        </BackLink>
      )}
    </MapWrapper>
  )
}
