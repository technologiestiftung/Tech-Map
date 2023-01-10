import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { Circle } from 'react-leaflet'
import TextPath from 'react-leaflet-textpath';

export const TestMarker = ({position, label, orientation}) => {

  const [reversed, reversedSet] = useState<boolean>(false);
  const [orientationVector, orientationVectorSet] = useState<LatLngExpression[]>(
    [
      [position[0],position[1] + 14], 
      [position[0],position[1] + 100]
    ]
  );

  const reversedLabel = label.split('').reverse().join('')
  
  useEffect(() => {
    const createOrientationVector = () => {
      const offset = 10;
      const offsetVertical = 14;
      const length = 200;
  
      switch(orientation) {
        case 'NE':
          orientationVectorSet([
            [position[0] + offset, position[1] + offset], 
            [position[0] + length, position[1] + length]
          ])
          reversedSet(false)
        break;
        case 'E':
          orientationVectorSet([
            [position[0], position[1] + offsetVertical], 
            [position[0], position[1] + length]
          ])
          reversedSet(false)
          break;
        case 'SE':
          orientationVectorSet([
            [position[0] - offset, position[1] + offset], 
            [position[0] - length, position[1] + length]
          ])
          reversedSet(false)
        break;
        case 'NW':
          orientationVectorSet([
            [position[0] + offset, position[1] - offset], 
            [position[0] + length, position[1] - length]
          ])
          reversedSet(true)
        break;
        case 'W':
          orientationVectorSet([
            [position[0], position[1] - offsetVertical], 
            [position[0], position[1] - length]
          ])
          reversedSet(true)
          break;
        case 'SW':
          orientationVectorSet([
            [position[0] - offset, position[1] - offset], 
            [position[0] - length, position[1] - length]
          ])
          reversedSet(true)
        break;
      default:
        return
      }
    }
    createOrientationVector()
  }, [orientation, position])
  

  return(
    <>
      <Circle
        center={position}
        pathOptions={{ color: 'red', fillColor: 'black', fillOpacity: 1, weight: 4 }}
        radius={8}
      />
      <TextPath
        positions={orientationVector}
        text={reversed ? reversedLabel : label}
        // @ts-ignore
        color='#00000000'
        attributes={{
          fill: "#3B3B3A",
          class: "station-label",
          'font-size': '16',
          rotate: reversed ? '180' : '0'
        }}
    />
    </>
  )
}