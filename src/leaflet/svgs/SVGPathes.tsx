import { LatLngBoundsExpression } from 'leaflet'
import { FC } from 'react'
import { SVGOverlay } from 'react-leaflet'

export const frameworkPath = () => {
  return (
    <path
      d="M3969.5 1865.5H2959C2932.49 1865.5 2911 1844.01 2911 1817.5V1726C2911 1699.49 2889.51 1678 2863 1678H2677C2650.49 1678 2629 1656.51 2629 1630V1294C2629 1267.49 2607.51 1246 2581 1246H1606C1588.33 1246 1574 1231.67 1574 1214V823.735C1574 806.062 1588.33 791.735 1606 791.735H1804.5C1826.59 791.735 1844.5 773.827 1844.5 751.735V148C1844.5 121.49 1823.01 100 1796.5 100H1661.5"
      stroke="#1E3791"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="blue-line"
      id="blue-line"
    />
  )
}

export const hardwarePath = () => {
  return (
    <path
      d="M4013 126H3672C3645.49 126 3624 147.49 3624 174V314C3624 340.51 3602.51 362 3576 362H3287.01C3260.5 362 3239 383.496 3239.01 410.009L3239.07 715.991C3239.07 742.504 3217.58 764 3191.07 764H2564.16C2537.62 764 2516.11 785.542 2516.16 812.085L2516.94 1253.94C2516.97 1271.64 2502.64 1286 2484.94 1286L1598.49 1285.91C1563.15 1285.91 1534.5 1257.25 1534.5 1221.91V1098.15C1534.5 1076.07 1516.6 1058.16 1494.51 1058.15L963.013 1058.01C936.498 1058.01 915 1079.5 915 1106.01V1278C915 1304.51 893.51 1326 867 1326H502.5C475.99 1326 454.5 1304.51 454.5 1278V1224C454.5 1197.49 433.01 1176 406.5 1176H174"
      stroke="#41B496"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const programmingPath = () => {
  return (
    <path
      d="M195 1797H662C688.51 1797 710 1775.51 710 1749V1663.5C710 1636.99 731.49 1615.5 758 1615.5H1288C1314.51 1615.5 1336 1594.01 1336 1567.5V1378C1336 1351.49 1357.49 1330 1384 1330H1590C1603.25 1330 1614 1319.25 1614 1306V803.5C1614 776.99 1635.49 755.5 1662 755.5H2448C2474.51 755.5 2496 734.01 2496 707.5V456.5C2496 429.99 2474.51 408.5 2448 408.5H2320C2293.49 408.5 2272 387.01 2272 360.5V134"
      stroke="#E60032"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const toolPath = () => {
  return (
    <path
      d="M243.5 331H816.5C843.01 331 864.5 352.49 864.5 379V583C864.5 609.51 885.99 631 912.5 631H1293.5C1320.01 631 1341.5 652.49 1341.5 679V779.5C1341.5 806.01 1362.99 827.5 1389.5 827.5H2428C2454.51 827.5 2476 848.99 2476 875.5V1175C2476 1188.25 2465.25 1199 2452 1199H2189.5C2158.57 1199 2133.5 1224.07 2133.5 1255V1419C2133.5 1445.51 2112.01 1467 2085.5 1467H1833.5C1806.99 1467 1785.5 1488.49 1785.5 1515V1813.5C1785.5 1840.01 1806.99 1861.5 1833.5 1861.5H2094"
      stroke="#91C882"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

const pathes = [toolPath, programmingPath, frameworkPath, hardwarePath]

interface SVGPathesProps {
  bounds: LatLngBoundsExpression
}

export const SVGPathes: FC<SVGPathesProps> = ({ bounds }) => {
  return (
    <>
      {pathes.map((path, i) => (
        <SVGOverlay bounds={bounds} key={i}>
          <svg
            viewBox={`${bounds[0][1]} ${bounds[0][0]} ${bounds[1][1]} ${bounds[1][0]}`}
            fill="none"
          >
            {path()}
          </svg>
        </SVGOverlay>
      ))}
    </>
  )
}
