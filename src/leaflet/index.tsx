import { MapContainer, Polyline, Polygon, PolygonProps, MarkerProps, Marker, Popup, PolylineProps } from 'react-leaflet'
import { CRS, LatLngBoundsLiteral, Icon, LatLngExpression } from "leaflet"
import styled from 'styled-components';
import { useRef, useEffect, useState, createRef } from 'react';

const baseLayerBounds:LatLngBoundsLiteral = [
  [0,0],
  [750,1000]
]

const FernsehturmMarkerOptions:MarkerProps = {
  position: [400, 550]
}
const FernsehturmMarkerIcon = new Icon({
  iconUrl: require('../assets/fernsehturm.png'),
  iconSize: [35, 35]
})

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

const baseLayer:PolygonProps = {
  positions: [
    [0,0],
    [0,1000],
    [750,1000],
    [750,0],
  ],
  pathOptions: { 
    color: 'white',
    fillColor: 'white',
    fillOpacity: 1,
  }
}

const innerRingPolygon = [
  [290, 0],
  [320, 30],
  [320, 450],
  [290, 480],
  [30, 480],
  [0, 450],
  [0, 30],
  [30, 0],
]

const innerRingCenterVector = [220, 260];

const innerRing:PolygonProps = {
  positions: innerRingPolygon.map(pos => [pos[0] + innerRingCenterVector[0], pos[1] + innerRingCenterVector[1]]),
  pathOptions: { 
    color: 'white',
    fillColor: 'white',
    fillOpacity: 1
  }
}

const middelRingPolygon = [
  [540, 0],
  [620, 80],
  [620, 700],
  [540, 780],
  [80, 780],
  [0, 700],
  [0, 80],
  [80, 0],
]

const middelRingCenterVector = [70, 110];
const middelRing:PolygonProps = {
  positions: middelRingPolygon.map(pos => [pos[0] + middelRingCenterVector[0], pos[1] + middelRingCenterVector[1]]),
  pathOptions: { 
    color: '#A0D3E4',
    fillColor: '#A0D3E4',
    fillOpacity: 1
  }
}

const programmingLineCoordinates:LatLngExpression[] = [
  [640, 20],
  [600, 80],
  [600, 120],
  [520, 200],
  [520, 700],
  [440, 780],
  [200, 780],
  [160, 720],
  [40, 720],
  [20, 740],
]

const programmingLine:PolylineProps = {
  positions: programmingLineCoordinates,
  pathOptions: { 
    color: 'red',
    weight: 10
  }
}

const frameworkLineCoordinates:LatLngExpression[] = [
  [680, 940],
  [680, 800],
  [640, 760],
  [560, 760],
  [500, 700],
  [500, 400],
  [440, 340],
  [240, 340],
  [200, 380],
  [200, 680],
  [180, 700],
  [20, 700],
  [10, 710],
]

const frameworkLine:PolylineProps = {
  positions: frameworkLineCoordinates,
  pathOptions: { 
    color: 'yellow',
    weight: 10
  }
}

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


export const LeafletMap = () => {let programmingLineRef = createRef<null | any>();
  const [progLineObject, progLineObjectSet] = useState({})

  useEffect(() => {
    if(programmingLineRef.current) {
      progLineObjectSet(programmingLineRef.current.children[0])
      console.log(progLineObject)
    } else {
      console.log("EMPTY REF")
    }
  },[progLineObject, programmingLineRef])

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
      >
        <Polygon pathOptions={baseLayer.pathOptions} positions={baseLayer.positions} />
        <Polygon pathOptions={middelRing.pathOptions} positions={middelRing.positions} />
        <Polygon pathOptions={innerRing.pathOptions} positions={innerRing.positions} />

        <Polyline 
          pathOptions={programmingLine.pathOptions} 
          positions={programmingLine.positions}
          ref={programmingLineRef}  
        />
        <Polyline pathOptions={frameworkLine.pathOptions} positions={frameworkLine.positions} />

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
        <Marker position={FernsehturmMarkerOptions.position} icon={FernsehturmMarkerIcon}/>
      </MapContainer>
    </MapWrapper>
  )
}