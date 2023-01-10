import { MapContainer, Polyline, Polygon,  MarkerProps, Marker, Popup } from 'react-leaflet'
import { CRS, LatLngBoundsLiteral, Icon, LatLngExpression } from "leaflet"
import styled from 'styled-components';
import { createRef, useState } from 'react';
import TextPath from 'react-leaflet-textpath';


import { TestSlider } from './TestSlideComponent'
import { MarkerCloud } from './MarkerCloud'

import { 
  baseLayer, 
  middelRing,
  innerRing,
  frameworkLine } from './polygonData';
import { TestMarker } from './TestMarker';
import { PolyLineComponent } from './PolyLine';
import { Polyline as PolyLineType } from "leaflet";

const baseLayerBounds:LatLngBoundsLiteral = [
  [0,0],
  [750,1000]
]

const TSBMarkerOptions:MarkerProps = {
  position: [330, 470]
}
const TSBMarkerIcon = new Icon({
  iconUrl: require('../assets/tsb-logo.png'),
  iconSize: [35, 35]
})

const CityLabMarkerOptions:MarkerProps = {
  position: [270, 530]
}
const CityLabMarkerIcon = new Icon({
  iconUrl: require('../assets/citylab-logo.png'),
  iconSize: [35, 35]
})


const MapWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border: solid 8px #5B8ACB;
`;


export const TechMap = () => {
  const mapRef = createRef<null | any>();
  const programmingLineRef = createRef<PolyLineType<any>>();
  const [showTestSlider, showTestSliderSet]= useState(true)

  const [slidePosition, slidePositionSet] = useState([290, 500]);
  const [slideLabel, slideLabelSet] = useState("label-placeholder");
  const [slideOrientation, slideOrientationSet] = useState("E");

  console.log("ORIENTATION", slideOrientation)
  console.log("Label", slideLabel)
  

  const mapContainerStyles = { 
    height: '100%', 
    width: '100%', 
  }

  return(
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
        <PolyLineComponent ref={programmingLineRef}/>
        <Polyline pathOptions={frameworkLine.pathOptions} positions={frameworkLine.positions} />

        <TestMarker position={slidePosition as LatLngExpression} label={slideLabel} orientation={slideOrientation} />
        <Marker position={TSBMarkerOptions.position} icon={TSBMarkerIcon}>
          <Popup>
            Hey, It's TSB
          </Popup>
        </Marker>
        <Marker position={CityLabMarkerOptions.position} icon={CityLabMarkerIcon}>
          <Popup>
            Yeah, found the CityLab
          </Popup>
        </Marker>
        <MarkerCloud progLine={programmingLineRef} map={mapRef}/>
      </MapContainer>

      <TestSlider 
        position={slidePosition} 
        changePosition={slidePositionSet} 
        label={slideLabel} 
        changeLabel={slideLabelSet} 
        orientation={slideOrientation}
        changeOrientation={slideOrientationSet} 
        mapRef={mapRef}/>
    </MapWrapper>
  )
}