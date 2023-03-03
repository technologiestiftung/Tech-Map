import { MapContainer, Polyline, ImageOverlay, AttributionControl } from 'react-leaflet'
import { CRS, LatLngBoundsLiteral, LatLngExpression, Map, Polyline as PolyLineType } from 'leaflet'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { createRef, FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../../styles'
import { Controls } from './Controls'
import { HeadquaterIcon } from './HeadquaterIcon'
import { Infobox } from './Infobox'
import { MarkerGenerator } from './MarkerGenerator'
import { Markers } from './Markers'

import { DisplayLines } from './svgs/DisplayLines'
import { lineData } from './polygonData'
import { Station } from './Markers/Station'
import { Popover } from '../Popover'
import { Footer } from '../Footer'
import { LogoArea } from './Infobox/LogoArea'

const baseLayerBounds: LatLngBoundsLiteral = [
  [0, 0],
  [2048, 4096],
]

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const MapWrapper = styled.div<{ generator }>`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'logo'
    'map';
  padding-top: ${(props) => (props.generator ? '16rem' : '')};

  @media (min-width: ${styles.breakpoints.desktop}) {
    grid-template-columns: 21.25rem 1fr;
    grid-template-rows: 1fr 3.5rem;
    grid-template-areas: ${(props) =>
      props.generator
        ? `
        'map map'
        'footer footer'
      `
        : `
        'infobox map'
        'footer footer'
      `};
  }
`

const StyledMapContainer = styled(MapContainer)`
  @media (min-width: ${styles.breakpoints.desktop}) {
    transform: translateY(0);
    grid-area: map;
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

const ShowDesktop = styled.div`
  display: none;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: block;
  }
`
const ShowMobile = styled.div`
  display: block;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: none;
  }
`

interface TechMapProps {
  generator?: boolean
}

export const TechMap: FC<TechMapProps> = ({ generator }: TechMapProps) => {
  const { i18n } = useTranslation()
  const mapRef = createRef<Map>()
  const programmingLineRef = createRef<PolyLineType>()
  const hardwareLineRef = createRef<PolyLineType>()
  const frameworkLineRef = createRef<PolyLineType>()
  const toolLineRef = createRef<PolyLineType>()

  const { locale } = useParams()

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
    <PageWrapper>
      <MapWrapper generator={generator}>
        {showPopover && <Popover closePopover={() => showPopoverSet(false)} />}
        <ShowMobile>
          <LogoArea visible={true} activeInstitute={activeInstitute} />
        </ShowMobile>
        {!generator && (
          <Infobox
            activeTechId={activeTechId}
            activeInstitute={activeInstitute}
            unmountTechnology={() => activeTechIdSet(null)}
          />
        )}
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
        <ShowDesktop>
          <Footer />
        </ShowDesktop>
      </MapWrapper>
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
    </PageWrapper>
  )
}
