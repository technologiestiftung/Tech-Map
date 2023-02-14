import React, { Fragment } from 'react'
import styled from 'styled-components'
import content from '../../../data/digital-services'
import styles from '../../../styles'
import { Paragraph } from './Paragraph'
import { Title } from './Title'

export const ZoneLabel = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
  background: ${styles.colors.gray_05};
  color: ${styles.colors.corporateBlue};
  font-weight: 450;
  font-size: 14px;
  height: 1.5rem;
  padding: 0 0.5rem;
  width: fit-content;
  text-transform: uppercase;
  border-radius: 0.25rem;
`

export const GeneralInfo = () => {
  return (
    <>
      <Paragraph
        text="Auf dieser Karte verorten wir die wir die Technologien die bei uns im Einsatz sind und
        kategorisieren diese."
      />
      <Title label="Status" />
      <Paragraph
        text="Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten wir
        mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden."
      />

      {Object.keys(content.description.zones).map((zone) => (
        <Fragment key={zone}>
          <ZoneLabel>{zone}</ZoneLabel>
          <Paragraph marginLeft text={content.description.zones[zone]} />
        </Fragment>
      ))}
    </>
  )
}
