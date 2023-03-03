import React, { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import styles from '../../styles'
import { ControlButton } from '../techmap/Controls/ControlButton'

const buttonStats = {
  buttonPosition: {
    mobile: {
      left: 8,
      bottom: 26,
    },
    desktop: {
      right: 24,
      top: 24,
    },
  },
  togglePosition: {
    mobile: {
      left: 64,
      bottom: 26,
    },
    desktop: {
      right: 24,
      top: 64,
    },
  },
  icon: '../assets/globe.svg',
  clickHandler: () => {
    console.log('lang')
  },
}

const MobileToggle = styled.div<{ position }>`
  width: 6rem;
  height: 3rem;
  display: flex;
  z-index: 30000;
  box-shadow: ${styles.boxShadow};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  background-color: ${styles.colors.white};

  @media (max-width: ${styles.breakpoints.desktop}) {
    display: ${(props) => (props.position.mobile ? 'flex' : 'none')};
    left: ${(props) => (props.position.mobile?.left ? props.position.mobile?.left + 'px' : null)};
    bottom: ${(props) =>
      props.position.mobile?.bottom ? props.position.mobile?.bottom + 'px' : null};
    right: ${(props) =>
      props.position.mobile?.right ? props.position.mobile?.right + 'px' : null};
    top: ${(props) => (props.position.mobile?.top ? props.position.mobile?.top + 'px' : null)};
  }

  @media (min-width: ${styles.breakpoints.desktop}) {
    width: 2rem;
    height: 4rem;
    flex-direction: column;
    display: ${(props) => (props.position.desktop ? 'flex' : 'none')};
    left: ${(props) => (props.position.desktop?.left ? props.position.desktop?.left + 'px' : null)};
    bottom: ${(props) =>
      props.position.desktop?.bottom ? props.position.desktop?.bottom + 'px' : null};
    right: ${(props) =>
      props.position.desktop?.right ? props.position.desktop?.right + 'px' : null};
    top: ${(props) => (props.position.desktop?.top ? props.position.desktop?.top + 'px' : null)};
  }
`

const LangButton = styled(Link)<{ active: boolean }>`
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: ${styles.colors.text}!important;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  @media (min-width: ${styles.breakpoints.desktop}) {
    font-size: 12px;
    line-height: 15px;
  }
`

export const LanguageToggle: FC = () => {
  const [toggleOpen, toggleOpenSet] = useState(false)
  const params = useParams()
  const locale = params.locale ? params.locale : 'de'

  return (
    <>
      <ControlButton
        icon={buttonStats.icon}
        position={buttonStats.buttonPosition}
        clickHandler={() => toggleOpenSet(!toggleOpen)}
      />
      {toggleOpen && (
        <MobileToggle position={buttonStats.togglePosition}>
          <LangButton active={locale === 'de'} to="/de">
            DE
          </LangButton>
          <LangButton active={locale === 'en'} to="/en">
            EN
          </LangButton>
        </MobileToggle>
      )}
    </>
  )
}
