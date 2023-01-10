import GeometryUtil from 'leaflet-geometryutil';
import { useState } from 'react';
import styled from 'styled-components';

import { lineData } from './polygonData';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
  max-width: 30rem;
`
const OrientationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  text-align: left;
  margin: 1rem 0;
 `

const RangeSlider = styled.input`
  width: 100%;
  margin: 1rem 0;
`

const Input = styled.input`
  margin-right: .5rem;
`

const LabelInputWrapper = styled.label`
  display: flex;
  gap: .5rem;
  align-items: center;
`

export const TestSlider = (
  {
    position,
    changePosition,
    label,
    changeLabel,
    orientation,
    changeOrientation, 
    mapRef
  }) => {
    
  const [initialRange,initialRangeSet] = useState(50);
  const [activeLine, activeLineSet] = useState(Object.keys(lineData)[0]);

  const eastOrientations = ['NE', 'E', 'SE'] 
  const westOrientations = ['NW', 'W', 'SW'] 


  const findCoordinates = (value) => {
    const latLng = GeometryUtil.interpolateOnLine(mapRef?.current, lineData[activeLine].positions, (value/100)).latLng
    return [latLng.lat, latLng.lng]
  }
  
  const updatePosition = (e) => {
    initialRangeSet(e.target.value);
    changePosition(findCoordinates(e.target.value));
  }

  return (
    <SliderWrapper>
      <RadioWrapper>
        {Object.keys(lineData).map((line) => (
          <label key={line}>
            <Input 
            type="radio" 
            name="line" 
            value={line}
            checked={line === activeLine}
            onChange={e => activeLineSet(e.target.value)}
          />
            {line}
          </label>
        ))}
      </RadioWrapper>
      <RangeSlider 
        type="range" 
        min="0" 
        max="100"
        value={initialRange}
        onChange={e => updatePosition(e)}
      />
      <LabelInputWrapper>
        Label
        <input value={label} onChange={e => changeLabel(e.target.value)}/>
      </LabelInputWrapper>
      <OrientationWrapper>
        <RadioWrapper>
          {westOrientations.map((direction) => (
            <label key={direction}>
              <Input 
              type="radio" 
              name="orientation" 
              value={direction}
              checked={direction === orientation}
              onChange={e => changeOrientation(e.target.value)}
            />
              {direction}
            </label>
          ))}
        </RadioWrapper>
        <p>Orientation</p>
        <RadioWrapper>
          {eastOrientations.map((direction) => (
            <label key={direction}>
              <Input 
              type="radio" 
              name="orientation" 
              value={direction}
              checked={direction === orientation}
              onChange={e => changeOrientation(e.target.value)}
            />
              {direction}
            </label>
          ))}
        </RadioWrapper>

      </OrientationWrapper>
      <p>{activeLine}-line coordinates: {position[0]} / {position[1]}</p>
    </SliderWrapper>
  )
}