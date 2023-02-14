import React, { FC } from 'react'
import styled from 'styled-components'
import content, { Technology } from '../../../data/digital-services'
import styles from '../../../styles'
import { ZoneLabel } from './GeneralInfo'
import { Header } from './LogoArea'
import { Paragraph } from './Paragraph'

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

const LabeledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const LineLabel = styled(ZoneLabel)<{ zone }>`
  font-weight: 475;
  font-size: 12px;
  margin-bottom: 0.5rem;
  background: ${(props) =>
    props.zone == 'tools'
      ? styles.colors.lineTools
      : props.zone == 'hardware'
      ? styles.colors.lineHardware
      : props.zone == 'programming'
      ? styles.colors.lineProgramming
      : styles.colors.corporateBlue};
  color: ${styles.colors.white};
  padding: 0 0.5rem;
  width: fit-content;
  text-transform: uppercase;
`

interface ActtiveTechInfoProps {
  activeTechObj: Technology
  activeTechId: string
}
export const ActiveTechInfo: FC<ActtiveTechInfoProps> = ({
  activeTechObj,
  activeTechId,
}: ActtiveTechInfoProps) => {
  return (
    <>
      <Header center>{activeTechObj.title}</Header>
      <LabeledTitle>
        <Title>Description</Title>
        <LineLabel zone={activeTechObj.technologyLine}>{activeTechObj.technologyLine}</LineLabel>
      </LabeledTitle>
      <Paragraph text={activeTechObj.description} />
      <LabeledTitle>
        <Title>Status</Title>
        <ZoneLabel>{activeTechObj.status}</ZoneLabel>
      </LabeledTitle>
      <Paragraph text={content.description.zones[content.technologies[activeTechId].status]} />
    </>
  )
}
