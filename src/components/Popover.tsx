import React, { FC } from 'react'
import styled from 'styled-components/macro'
import styles from '../styles'
import { Button } from './Button'
import { LogoArea } from './techmap/Infobox/LogoArea'
import { Paragraph } from './techmap/Infobox/Paragraph'
import { useTranslation } from 'react-i18next'

const Backdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #3b3b3a99;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${styles.breakpoints.desktop}) {
    display: none;
  }
`

const Screen = styled.div`
  padding: 0 auto 2rem;
  max-width: 90%;
  max-height: 90%;
  width: 20rem;
  background-color: ${styles.colors.white};
  border-radius: ${styles.borderRadius};
`
const ContentArea = styled.div`
  padding: 0 1.5rem 1.5rem;
`

interface PopoverProps {
  closePopover: () => void
}

export const Popover: FC<PopoverProps> = ({ closePopover }: PopoverProps) => {
  const { t } = useTranslation()

  return (
    <Backdrop>
      <Screen>
        <LogoArea visible={true} activeInstitute={'digitalServices'} />
        <ContentArea>
          <Paragraph text={t('description.disclaimer')} fontSize="1rem" />
          <Button
            label={t('functionality.buttonClosePopover')}
            clickHandler={() => closePopover()}
          />
        </ContentArea>
      </Screen>
    </Backdrop>
  )
}
