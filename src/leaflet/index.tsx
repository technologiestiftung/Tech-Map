import { MapContainer, Polyline, ImageOverlay, ZoomControl } from 'react-leaflet'
import { CRS, LatLngBoundsLiteral, LatLngExpression, Map, Polyline as PolyLineType } from 'leaflet'
import styled from 'styled-components'
import { createRef, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { MarkerGenerator } from './MarkerGenerator'
import { Markers } from './Markers'
import { lineData } from './polygonData'
import { Infobox } from './Infobox'
import { SVGPathes } from './svgs/SVGPathes'
import { Station } from './Markers/Station'
import { LineLabel } from './Label'
import content, { TechnologyLine } from '../data/digital-services'
import { HeadquaterIcon } from './HeadquaterIcon'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [2048, 4096],
]

const MapWrapper = styled.div`
  width: calc(100vw - 22.5rem);
  height: 100vh;
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
  const [activeInstitute, activeInstituteSet] = useState<'digitalServices' | 'cityLab'>(
    'digitalServices'
  )

  const mapContainerStyles = {
    height: '100%',
    width: '100%',
    marginLeft: '22.5rem',
  }
  const lineRefs = {
    programming: programmingLineRef,
    hardware: hardwareLineRef,
    frameworks: frameworkLineRef,
    tools: toolLineRef,
  }

  return (
    <MapWrapper>
      <Infobox activeTechId={activeTechId} activeInstitute={activeInstitute} />
      <MapContainer
        center={[1024, 2048]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={-1.75}
        maxZoom={2}
        minZoom={-1.75}
        zoomControl={false}
        scrollWheelZoom={false}
        style={mapContainerStyles}
        ref={mapRef}
      >
        <Markers
          activeTechIdSet={activeTechIdSet}
          activeTechId={activeTechId}
          activeInstitute={activeInstitute}
        />

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

        <HeadquaterIcon activeInstituteSet={activeInstituteSet} />

        <SVGPathes bounds={baseLayerBounds} />

        <ZoomControl position="bottomright" />
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
