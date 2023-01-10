import { FC, useState, useEffect } from 'react';
import GeometryUtil from 'leaflet-geometryutil';
import { LatLngExpression } from 'leaflet';
import { Circle } from 'react-leaflet';

interface MarkerCloudProps {
  progLine: any;
  map: any;
}

export const MarkerCloud: FC<MarkerCloudProps> = ({ progLine, map }) => {
  const [distributedValues, distributedValuesSet] = useState([]);

  useEffect(() => {
    const percentages = [0.001, 0.1, 0.2, 0.33, 0.5, 0.75, 0.78];
    const latLngArray = progLine ? progLine.current.getLatLngs() : null;
    const pointsAtPercentages: LatLngExpression[] = latLngArray
      ? percentages.map(value => GeometryUtil.interpolateOnLine(map.current, latLngArray, value)).map(obj => [obj.latLng.lat, obj.latLng.lng])
      : [];
    distributedValuesSet(pointsAtPercentages);
  }, [progLine, map]);

  return (
    <>
      {distributedValues &&
        distributedValues.map((marker, i) => (
          <Circle
            center={marker}
            pathOptions={{
              color: 'gray',
              fillColor: 'white',
              fillOpacity: 1,
              weight: 4,
            }}
            radius={8}
            key={i}
          />
        ))}
    </>
  );
};
