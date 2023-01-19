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
import { createRef, FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MarkerGenerator } from './MarkerGenerator'
import { Markers } from './Markers'
import { lineData } from './polygonData'
import { Infobox } from './Infobox'
import { SVGPathes } from './svgs/SVGPathes'
import { Station } from './Markers/Station'
import { LineLabel } from './Label'
import content, { TechnologyLine } from '../data/digital-services'

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
const BackLink = styled(Link)`
  margin: 1rem auto;
  display: flex;
  align-items: center;
`

interface TechMapProps {
  generator?: boolean
}

export const TechMap: FC<TechMapProps> = ({ generator }: TechMapProps) => {
  const mapRef = createRef<null | Map>()
  const programmingLineRef = createRef<PolyLineType>()
  const hardwareLineRef = createRef<PolyLineType>()
  const frameworkLineRef = createRef<PolyLineType>()
  const toolLineRef = createRef<PolyLineType>()

  const [slidePosition, slidePositionSet] = useState<LatLngExpression>([350, 500])
  const [slideLabel, slideLabelSet] = useState<string>('')
  const [slideOrientation, slideOrientationSet] = useState<string>('E')
  const [activeTechId, activeTechIdSet] = useState<string | null>(null)
  const [zoomLevel, zoomLevelSet] = useState(-2)

  const mapContainerStyles = {
    height: '100%',
    width: '100%',
  }
  const lineRefs = {
    programming: programmingLineRef,
    hardware: hardwareLineRef,
    frameworks: frameworkLineRef,
    tools: toolLineRef,
  }

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.options.zoomSnap = 0.25
      if (zoomLevel === -2) {
        mapRef.current.setZoom(-1.75)
        zoomLevelSet(-1.75)
      }
    }
  }, [zoomLevel, mapRef])

  return (
    <MapWrapper>
      <Infobox activeTechId={activeTechId} />
      <MapContainer
        center={[1024, 2048]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={-1.75}
        maxZoom={5}
        minZoom={-1.75}
        scrollWheelZoom={false}
        style={mapContainerStyles}
        ref={mapRef}
      >
        <Markers activeTechIdSet={activeTechIdSet} />

        {Object.keys(lineData).map((lineKey) =>
          [0, 1].map((index) => (
            <LineLabel
              key={lineKey + index}
              position={lineData[lineKey].labels[index]}
              label={content.description.lines[lineKey]}
              line={lineKey as TechnologyLine}
            />
          ))
        )}

        <ImageOverlay
          url={'./assets/Zonen.svg'}
          bounds={[baseLayerBounds[0], [baseLayerBounds[1][0] + 204, baseLayerBounds[1][1]]]}
        />

        {/* These are invisible helper pathes to distribute markers */}
        {Object.keys(lineData).map((key) => (
          <Polyline
            key={key}
            pathOptions={lineData[key].line.pathOptions}
            positions={lineData[key].line.positions}
            ref={lineRefs[key]}
          />
        ))}

        {generator && (
          <Station
            position={slidePosition as LatLngExpression}
            label={slideLabel}
            orientation={slideOrientation}
            stationId="testmarker"
            technologyLine="programming"
            generator
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

      {generator && (
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
      {generator && (
        <BackLink to="/">
          <img src="./assets/arrow-left.svg" alt="arrow left" />
          Main Page
        </BackLink>
      )}
    </MapWrapper>
  )
}
