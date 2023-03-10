import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import styles from '../../../styles'
import { ZoneLabel } from './GeneralInfo'
import { Header } from './LogoArea'
import { Paragraph } from './Paragraph'
import { Technology } from '../../../i18n/digital-services-de'

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

const LabeledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const TechnologyLink = styled.a`
  display: block;
  color: ${styles.colors.corporateBlueMedium};
  text-align: left;
  margin-bottom: 3.5rem;
  margin-top: -1rem;
  align-self: flex-start;
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
      : styles.colors.corporateBlueMedium};
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
  const { t } = useTranslation()
  return (
    <>
      <Header center>{t(`technologies.${activeTechId}.title`)}</Header>
      <LabeledTitle>
        <Title>{t(`functionality.description`)}</Title>
        <LineLabel zone={activeTechObj.technologyLine}>{activeTechObj.technologyLine}</LineLabel>
      </LabeledTitle>
      <Paragraph text={t(`technologies.${activeTechId}.description`)} />
      <TechnologyLink href={t(`technologies.${activeTechId}.link`)} target="_blank">
        {t(`technologies.${activeTechId}.displayLink`)}
      </TechnologyLink>
      <LabeledTitle>
        <Title>{t(`functionality.status`)}</Title>
        <ZoneLabel>{t(`description.zones.${activeTechObj.status}.title`)}</ZoneLabel>
      </LabeledTitle>
      <Paragraph text={t(`description.zones.${activeTechObj.status}.description`)} />
    </>
  )
}
