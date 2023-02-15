import { PolygonProps, PolylineProps } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import { TechnologyLine } from '../../i18n/digital-services-de'

export const baseLayer: PolygonProps = {
  positions: [
    [0, 0],
    [0, 4096],
    [2048, 4096],
    [2048, 0],
  ],
  pathOptions: {
    color: 'white',
    fillColor: 'white',
    fillOpacity: 1,
  },
}

const pathStringToCoordinates = (string): LatLngExpression[] => {
  return string.split(', ').map((element) =>
    element
      .split(' ')
      .map((val, i) => {
        return i ? 2048 - parseFloat(val) : parseFloat(val)
      })
      .reverse()
  )
}
// This is an converted SVG-Path via https://betravis.github.io/shape-tools/path-to-polygon/
export const frameworkPathString =
  '3969.500 1865.500, 2959.000 1865.500, 2911.000 1817.500, 2911.000 1726.000, 2863.000 1678.000, 2677.000 1678.000, 2629.000 1630.000, 2629.000 1294.000, 2581.000 1246.000, 1606.000 1246.000, 1574.000 1214.000, 1574.000 823.735, 1606.000 791.735, 1804.500 791.735, 1844.500 751.735, 1844.500 148.000, 1796.500 100.000, 1661.500 100.000'

export const hardwarePathString =
  '4013.000 126.000, 3672.000 126.000, 3624.000 174.000, 3624.000 314.000, 3576.000 362.000, 3287.010 362.000, 3239.010 410.009, 3239.070 715.991, 3191.070 764.000, 2564.160 764.000, 2516.160 812.085, 2516.940 1253.940, 2484.940 1286.000, 1598.490 1285.910, 1534.500 1221.910, 1534.500 1098.150, 1494.510 1058.150, 963.013 1058.010, 915.000 1106.010, 915.000 1278.000, 867.000 1326.000, 502.500 1326.000, 454.500 1278.000, 454.500 1224.000, 406.500 1176.000, 174.000 1176.000'

export const toolPathString =
  '243.500 331.000, 816.500 331.000, 864.500 379.000, 864.500 583.000, 912.500 631.000, 1293.500 631.000, 1341.500 679.000, 1341.500 779.500, 1389.500 827.500, 2428.000 827.500, 2476.000 875.500, 2476.000 1175.000, 2452.000 1199.000, 2189.500 1199.000, 2133.500 1255.000, 2133.500 1419.000, 2085.500 1467.000, 1833.500 1467.000, 1785.500 1515.000, 1785.500 1813.500, 1833.500 1861.500, 2094.000 1861.500'

export const programmingPathString =
  '195.000 1797.000, 662.000 1797.000, 710.000 1749.000, 710.000 1663.500, 758.000 1615.500, 1288.000 1615.500, 1336.000 1567.500, 1336.000 1378.000, 1384.000 1330.000, 1590.000 1330.000, 1614.000 1306.000, 1614.000 803.500, 1662.000 755.500, 2448.000 755.500, 2496.000 707.500, 2496.000 456.500, 2448.000 408.500, 2320.000 408.500, 2272.000 360.500, 2272.000 134.000'

const frameworkLine: PolylineProps = {
  positions: pathStringToCoordinates(frameworkPathString),
  pathOptions: {
    color: 'blue',
    weight: 0,
  },
}

const programmingLine: PolylineProps = {
  positions: pathStringToCoordinates(programmingPathString),
  pathOptions: {
    color: 'red',
    weight: 0,
  },
}

const toolLine: PolylineProps = {
  positions: pathStringToCoordinates(toolPathString),
  pathOptions: {
    color: 'green',
    weight: 0,
  },
}

const hardwareLine: PolylineProps = {
  positions: pathStringToCoordinates(hardwarePathString),
  pathOptions: {
    color: 'turquoise',
    weight: 0,
  },
}

const frameworkLabels: LatLngExpression[] = [
  [1936, 1400],
  [171, 3690],
]
const programmingLabels: LatLngExpression[] = [
  [1898, 2260],
  [239, 50],
]
const toolLabels: LatLngExpression[] = [
  [175, 2010],
  [1705, 140],
]
const hardwareLabels: LatLngExpression[] = [
  [861, 120],
  [1864, 3750],
]

type LineData = {
  [key in TechnologyLine]: {
    line: PolylineProps
    labels: LatLngExpression[]
  }
}
export const lineData: LineData = {
  frameworks: {
    line: frameworkLine,
    labels: frameworkLabels,
  },
  programming: {
    line: programmingLine,
    labels: programmingLabels,
  },
  hardware: {
    line: hardwareLine,
    labels: hardwareLabels,
  },
  tools: {
    line: toolLine,
    labels: toolLabels,
  },
}
