import GeometryUtil from 'leaflet-geometryutil'
import { LatLngExpression, Map } from 'leaflet'
import { FC, RefObject, useState } from 'react'
import styled from 'styled-components'
import { lineData } from './polygonData'

const SliderWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 2rem;
  flex: 1;
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
  gap: 0.5rem;
  text-align: left;
  margin: 1rem 0;
`

const RangeSlider = styled.input`
  width: 100%;
  margin: 1rem 0;
`

const Input = styled.input`
  margin-right: 0.5rem;
`

const InputWrapper = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const DescriptionInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  margin: 1rem 0;
`

const SliderInputWrapper = styled.label`
  text-align: start;
  margin: 1rem 0;
  width: 100%;
`

const JSONDisplay = styled.pre`
  text-align: left;
  white-space: pre-wrap;
  background: darkslategrey;
  color: orange;
  padding: 1rem;
  width: 100%;
`
const StyledButton = styled.button``

const eastOrientations = ['NE', 'E', 'SE']
const westOrientations = ['NW', 'W', 'SW']
const zones = ['hauptzone', 'neue zone', 'haltezone', 'wunschzone']

interface MarkerGeneratorProps {
  position: LatLngExpression
  changePosition: (arg: LatLngExpression) => void
  label: string
  changeLabel: (arg: string) => void
  orientation: string
  changeOrientation: (arg: string) => void
  mapRef: RefObject<Map>
}

export const MarkerGenerator: FC<MarkerGeneratorProps> = ({
  position,
  changePosition,
  label,
  changeLabel,
  orientation,
  changeOrientation,
  mapRef,
}: MarkerGeneratorProps) => {
  const [initialRange, initialRangeSet] = useState(50)
  const [activeLine, activeLineSet] = useState(Object.keys(lineData)[0])

  const [dataJSON, dataJSONSet] = useState({
    title: label,
    description: '',
    link: '',
    status: 'hauptzone',
    technologyLine: activeLine,
    icon: {
      coordinates: position,
      orientation: orientation,
    },
  })

  const update = (type, value) => {
    switch (type) {
      case 'TITLE':
        dataJSONSet({ ...dataJSON, title: value })
        changeLabel(value)
        break
      case 'POSITION':
        initialRangeSet(value)
        const coordinates = findCoordinates(value)
        dataJSONSet({ ...dataJSON, icon: { ...dataJSON.icon, coordinates } })
        changePosition(coordinates)
        break
      case 'ORIENTATION':
        dataJSONSet({ ...dataJSON, icon: { ...dataJSON.icon, orientation: value } })
        changeOrientation(value)
        break
      case 'DESCRIPTION':
        dataJSONSet({ ...dataJSON, description: value })
        break
      case 'LINK':
        dataJSONSet({ ...dataJSON, link: value })
        break
      case 'TECHNOLOGY':
        dataJSONSet({ ...dataJSON, technologyLine: value })
        activeLineSet(value)
        break
      case 'ZONE':
        dataJSONSet({ ...dataJSON, status: value })
        break
    }
  }

  const findCoordinates = (value): LatLngExpression => {
    const latLng = GeometryUtil.interpolateOnLine(
      mapRef?.current,
      lineData[activeLine].positions,
      value / 100
    ).latLng
    return [latLng.lat, latLng.lng]
  }

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(dataJSON))
  }

  return (
    <SliderWrapper>
      <Column>
        <RadioWrapper>
          Line:
          {Object.keys(lineData).map((line) => (
            <label key={line}>
              <Input
                type="radio"
                name="line"
                value={line}
                checked={line === activeLine}
                onChange={(e) => update('TECHNOLOGY', e.target.value)}
              />
              {line}
            </label>
          ))}
        </RadioWrapper>
        <SliderInputWrapper>
          Position:
          <RangeSlider
            type="range"
            min="0"
            max="100"
            value={initialRange}
            onChange={(e) => update('POSITION', e.target.value)}
          />
        </SliderInputWrapper>
        <InputWrapper>
          Title:
          <input value={label} onChange={(e) => update('TITLE', e.target.value)} />
        </InputWrapper>
        <OrientationWrapper>
          <RadioWrapper>
            {westOrientations.map((direction) => (
              <label key={direction}>
                <Input
                  type="radio"
                  name="orientation"
                  value={direction}
                  checked={direction === orientation}
                  onChange={(e) => update('ORIENTATION', e.target.value)}
                />
                {direction}
              </label>
            ))}
          </RadioWrapper>
          <p>Orientation:</p>
          <RadioWrapper>
            {eastOrientations.map((direction) => (
              <label key={direction}>
                <Input
                  type="radio"
                  name="orientation"
                  value={direction}
                  checked={direction === orientation}
                  onChange={(e) => update('ORIENTATION', e.target.value)}
                />
                {direction}
              </label>
            ))}
          </RadioWrapper>
        </OrientationWrapper>
        <RadioWrapper>
          Zone:
          {zones.map((zone) => (
            <label key={zone}>
              <Input
                type="radio"
                name="status"
                value={zone}
                checked={zone === dataJSON.status}
                onChange={(e) => update('ZONE', e.target.value)}
              />
              {zone}
            </label>
          ))}
        </RadioWrapper>
      </Column>
      <Column>
        <DescriptionInputWrapper>
          Description:
          <textarea
            placeholder="enter description"
            value={dataJSON.description}
            onChange={(e) => update('DESCRIPTION', e.target.value)}
            rows={4}
            cols={50}
          />
        </DescriptionInputWrapper>
        <InputWrapper>
          Link:
          <input
            placeholder="https://www.example.com"
            value={dataJSON.link}
            onChange={(e) => update('LINK', e.target.value)}
          />
        </InputWrapper>
        <p>Copy\paste into data/:team.ts</p>
        <JSONDisplay>{JSON.stringify(dataJSON, null, 2)}</JSONDisplay>
        <StyledButton onClick={copyJSON}>Copy JSON</StyledButton>
      </Column>
    </SliderWrapper>
  )
}
