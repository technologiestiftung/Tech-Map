import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import styles from '../../../styles'
import { Paragraph } from './Paragraph'
import { Title } from './Title'
import { useTranslation } from 'react-i18next'
import { content } from '../../../i18n/digital-services-de'

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

interface GeneralInfoProps {
  mobile?: boolean
}
export const GeneralInfo: FC<GeneralInfoProps> = ({ mobile }: GeneralInfoProps) => {
  const { t } = useTranslation()
  return (
    <>
      {!mobile && <Paragraph text={t('description.disclaimer')} />}
      <Title label={t('description.manual.usage.title')} />
      <Paragraph text={t('description.manual.usage.description')} />
      <Title label={t('description.manual.zones.title')} />
      <Paragraph text={t('description.manual.zones.description')} />

      {Object.keys(content.description.zones).map((zone) => (
        <Fragment key={zone}>
          <ZoneLabel>{zone}</ZoneLabel>
          <Paragraph marginLeft text={t(`description.zones.${zone}.description`)} />
        </Fragment>
      ))}
    </>
  )
}
