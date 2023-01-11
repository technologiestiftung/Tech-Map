import { PolygonProps, PolylineProps } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

export const baseLayer: PolygonProps = {
  positions: [
    [0, 0],
    [0, 1280],
    [720, 1280],
    [720, 0],
  ],
  pathOptions: {
    color: '#DBDBDB',
    fillColor: '#DBDBDB',
    fillOpacity: 1,
  },
};

export const innerRingPolygon = [
  [100, 0],
  [130, 30],
  [130, 320],
  [100, 350],
  [30, 350],
  [0, 320],
  [0, 30],
  [30, 0],
];

// This polygon has a size of 450 x 230 including the outer stroke of 50
export const innerRingCenterVector = [300, 465];
export const innerRing: PolygonProps = {
  positions: innerRingPolygon.map(pos => [pos[0] + innerRingCenterVector[0], pos[1] + innerRingCenterVector[1]]),
  pathOptions: {
    color: '#FFFFFF',
    fillColor: '#FFFFFF',
    fillOpacity: 1,
  },
  weight: 100
};

export const middelRingPolygon = [
  [250, 0],
  [300, 50],
  [300, 600],
  [250, 650],
  [50, 650],
  [0, 600],
  [0, 50],
  [50, 0],
];

// This polygon has a size of 750 x 400 including the outer stroke of 50
export const middelRingCenterVector = [215, 315];
export const middelRing: PolygonProps = {
  positions: middelRingPolygon.map(pos => [pos[0] + middelRingCenterVector[0], pos[1] + middelRingCenterVector[1]]),
  pathOptions: {
    color: '#F2F2F2',
    fillColor: '#F2F2F2',
    fillOpacity: 1,
  },
  weight: 100
};


export const outerRingPolygon = [
  [340, 0],
  [450, 120],
  [450, 760],
  [340, 880],
  [120, 880],
  [0, 760],
  [0, 120],
  [120, 0],
];

// This polygon has a size of 980 x 550 including the outer stroke of 50
export const outerRingCenterVector = [140, 200];
export const outerRing: PolygonProps = {
  positions: outerRingPolygon.map(pos => [pos[0] + outerRingCenterVector[0], pos[1] + outerRingCenterVector[1]]),
  pathOptions: {
    color: '#E3E3E3',
    fillColor: '#E3E3E3',
    fillOpacity: 1,
  },
  weight: 100
};

export const programmingLineCoordinates: LatLngExpression[] = [
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
];

export const programmingLine: PolylineProps = {
  positions: programmingLineCoordinates,
  pathOptions: {
    color: 'red',
    weight: 8,
  },
};

export const frameworkLineCoordinates: LatLngExpression[] = [
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
];

export const frameworkLine: PolylineProps = {
  positions: frameworkLineCoordinates,
  pathOptions: {
    color: 'yellow',
    weight: 8,
  },
};

export const lineData = {
  framework: frameworkLine,
  programming: programmingLine,
};
