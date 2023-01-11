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

