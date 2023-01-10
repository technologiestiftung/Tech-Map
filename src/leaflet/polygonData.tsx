import { PolygonProps, PolylineProps } from 'react-leaflet'
import { LatLngExpression } from "leaflet"

export const baseLayer:PolygonProps = {
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

export const innerRingPolygon = [
  [290, 0],
  [320, 30],
  [320, 450],
  [290, 480],
  [30, 480],
  [0, 450],
  [0, 30],
  [30, 0],
]

export const innerRingCenterVector = [220, 260];

export const innerRing:PolygonProps = {
  positions: innerRingPolygon.map(pos => [pos[0] + innerRingCenterVector[0], pos[1] + innerRingCenterVector[1]]),
  pathOptions: { 
    color: 'white',
    fillColor: 'white',
    fillOpacity: 1
  }
}

export const middelRingPolygon = [
  [540, 0],
  [620, 80],
  [620, 700],
  [540, 780],
  [80, 780],
  [0, 700],
  [0, 80],
  [80, 0],
]

export const middelRingCenterVector = [70, 110];

export const middelRing:PolygonProps = {
  positions: middelRingPolygon.map(pos => [pos[0] + middelRingCenterVector[0], pos[1] + middelRingCenterVector[1]]),
  pathOptions: { 
    color: '#A0D3E4',
    fillColor: '#A0D3E4',
    fillOpacity: 1
  }
}

export const programmingLineCoordinates:LatLngExpression[] = [
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

export const programmingLine:PolylineProps = {
  positions: programmingLineCoordinates,
  pathOptions: { 
    color: 'red',
    weight: 8
  }
}

export const frameworkLineCoordinates:LatLngExpression[] = [
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

export const frameworkLine:PolylineProps = {
  positions: frameworkLineCoordinates,
  pathOptions: { 
    color: 'yellow',
    weight: 8
  }
}

export const lineData = {
  framework: frameworkLine,
  programming: programmingLine
}