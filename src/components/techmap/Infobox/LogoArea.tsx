import React, { FC } from 'react'
import styled from 'styled-components/macro'
import styles from '../../../styles'

const StyledLogoArea = styled.div<{ visible?: boolean }>`
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: relative;
  padding: 1.3rem 0 1.3rem;
  transition: ${styles.transitions.all};

  @media (min-width: ${styles.breakpoints.desktop}) {
    padding: 29px 0 24px;
  }
`

export const Header = styled.h1<{ center? }>`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: ${(props) => (props.center ? '2rem' : 0)};

  @media (min-width: ${styles.breakpoints.desktop}) {
    text-align: ${(props) => (props.center ? 'center' : 'left')};
  }
`

const Subheader = styled.p`
  font-weight: 475;
  font-size: 1rem;
  color: ${styles.colors.gray_70};
`

const Logo = styled.img`
  width: 4.125rem;
`

const HeaderDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
interface LogoAreaProps {
  visible: boolean
  activeInstitute
}

export const LogoArea: FC<LogoAreaProps> = ({ visible, activeInstitute }: LogoAreaProps) => {
  return (
    <StyledLogoArea visible={visible}>
      <Logo src={'../assets/tsb-logo.png'} alt="Logo" />
      <HeaderDivider>
        <Header>Tech Map</Header>
        <Subheader>
          {activeInstitute === 'digitalServices' ? 'Digital Service Team' : 'CityLab Team'}
        </Subheader>
      </HeaderDivider>
    </StyledLogoArea>
  )
}
