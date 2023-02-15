import React, { FC } from 'react'
import styled from 'styled-components'
import content from '../data/digital-services'
import styles from '../styles'
import { Button } from './Button'
import { LogoArea } from './techmap/Infobox/LogoArea'
import { Paragraph } from './techmap/Infobox/Paragraph'

const Backdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #3b3b3a99;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Screen = styled.div`
  padding: 0 1.5rem 2rem;
  max-width: 90%;
  max-height: 90%;
  width: 20rem;
  background-color: ${styles.colors.white};
  border-radius: ${styles.borderRadius};
`

interface PopoverProps {
  closePopover: () => void
}

export const Popover: FC<PopoverProps> = ({ closePopover }: PopoverProps) => {
  return (
    <Backdrop>
      <Screen>
        <LogoArea visible={true} activeInstitute={'digitalServices'} />
        <Paragraph text={content.description.disclaimer} fontSize="1rem" />
        <Button label="Map erkunden" clickHandler={() => closePopover()} />
      </Screen>
    </Backdrop>
  )
}
