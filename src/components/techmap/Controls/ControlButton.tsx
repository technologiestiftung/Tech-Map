import { FC } from 'react'
import styled from 'styled-components'
import styles from '../../../styles'

const ButtonWrapper = styled.button<{ position }>`
  width: 3rem;
  height: 3rem;
  box-shadow: ${styles.boxShadow};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  pointer-events: auto;
  background-color: ${styles.colors.white};
  padding: 1rem;

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
    height: 2rem;
    display: ${(props) => (props.position.desktop ? 'flex' : 'none')};
    left: ${(props) => (props.position.desktop?.left ? props.position.desktop?.left + 'px' : null)};
    bottom: ${(props) =>
      props.position.desktop?.bottom ? props.position.desktop?.bottom + 'px' : null};
    right: ${(props) =>
      props.position.desktop?.right ? props.position.desktop?.right + 'px' : null};
    top: ${(props) => (props.position.desktop?.top ? props.position.desktop?.top + 'px' : null)};
  }
`

const Icon = styled.img`
  width: 2rem;
  @media (min-width: ${styles.breakpoints.desktop}) {
    width: 1rem;
  }
`
export interface Positions {
  left?: number
  bottom?: number
  top?: number
  right?: number
}

interface ControlButtonProps {
  icon: string
  position: {
    mobile?: Positions
    desktop?: Positions
  }
  clickHandler: () => void
}
export const ControlButton: FC<ControlButtonProps> = ({
  icon,
  position,
  clickHandler,
}: ControlButtonProps) => {
  return (
    <ButtonWrapper position={position} onClick={() => clickHandler()}>
      <Icon src={icon} alt="control-icon" />
    </ButtonWrapper>
  )
}
