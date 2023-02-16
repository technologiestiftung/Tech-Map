import { MapContainer, Polyline, ImageOverlay, AttributionControl } from 'react-leaflet'
import { CRS, LatLngBoundsLiteral, LatLngExpression, Map, Polyline as PolyLineType } from 'leaflet'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { createRef, FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../../styles'
import { Controls } from './Controls'
import { HeadquaterIcon } from './HeadquaterIcon'
import { Infobox } from './Infobox'
import { LineLabel } from './LineLabel'
import { MarkerGenerator } from './MarkerGenerator'
import { Markers } from './Markers'

import { DisplayLines } from './svgs/DisplayLines'
import { lineData } from './polygonData'
import { Station } from './Markers/Station'
import { Popover } from '../Popover'
import { TechnologyLine } from '../../i18n/digital-services-de'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [2048, 4096],
]

const MapWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;

  @media (min-width: ${styles.breakpoints.desktop}) {
    height: 100vh;
  }
`

const StyledMapContainer = styled(MapContainer)`
  transform: translateY(100px);
  @media (min-width: ${styles.breakpoints.desktop}) {
    transform: translateY(0);
  }
`

const GeneratorWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
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
  const { t, i18n } = useTranslation()
  const mapRef = createRef<null | Map>()
  const programmingLineRef = createRef<PolyLineType>()
  const hardwareLineRef = createRef<PolyLineType>()
  const frameworkLineRef = createRef<PolyLineType>()
  const toolLineRef = createRef<PolyLineType>()

  const locale = useParams().locale

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale, i18n])

  const [showPopover, showPopoverSet] = useState<boolean>(true)
  const [slidePosition, slidePositionSet] = useState<LatLngExpression>([350, 500])
  const [slideLabel, slideLabelSet] = useState<string>('')
  const [slideOrientation, slideOrientationSet] = useState<string>('E')
  const [activeTechId, activeTechIdSet] = useState<string | null>(null)
  const [activeInstitute, activeInstituteSet] = useState<'digitalServices' | 'cityLab'>(
    'digitalServices'
  )

  const setTechId = (id: string) => {
    activeTechIdSet(id)
  }

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

  return (
    <MapWrapper>
      {showPopover && <Popover closePopover={() => showPopoverSet(false)} />}
      <Infobox
        activeTechId={activeTechId}
        activeInstitute={activeInstitute}
        unmountTechnology={() => activeTechIdSet(null)}
      />
      <StyledMapContainer
        center={[1024, 2048]}
        crs={CRS.Simple}
        bounds={baseLayerBounds}
        maxBounds={baseLayerBounds}
        zoom={-1.75}
        maxZoom={2}
        minZoom={-1.75}
        zoomControl={false}
        scrollWheelZoom={true}
        style={mapContainerStyles}
        ref={mapRef}
        attributionControl={false}
      >
        <Controls mapRef={mapRef} activeTechIdSet={setTechId} />
        <AttributionControl position="topleft" />
        <Markers
          activeTechIdSet={setTechId}
          activeTechId={activeTechId}
          activeInstitute={activeInstitute}
        />

        {Object.keys(lineData).map((lineKey) =>
          [0, 1].map((index) => (
            <LineLabel
              key={lineKey + index}
              position={lineData[lineKey].labels[index]}
              label={t(`description.lines.${lineKey}`)}
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

        <DisplayLines bounds={baseLayerBounds} />
      </StyledMapContainer>

      {generator && (
        <GeneratorWrapper>
          <MarkerGenerator
            position={slidePosition}
            changePosition={slidePositionSet}
            label={slideLabel}
            changeLabel={slideLabelSet}
            orientation={slideOrientation}
            changeOrientation={slideOrientationSet}
            mapRef={mapRef}
          />
          <BackLink to="/">
            <img src="./assets/arrow-left.svg" alt="arrow left" />
            Main Page
          </BackLink>
        </GeneratorWrapper>
      )}
    </MapWrapper>
  )
}