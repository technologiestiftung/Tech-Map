import { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles'

const ButtonWrapper = styled.button<{ left?: number; bottom?: number; right?: number }>`
  width: 3rem;
  height: 3rem;
  box-shadow: ${styles.boxShadow};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  left: ${(props) => (props.left ? props.left + 'px' : null)};
  bottom: ${(props) => (props.bottom ? props.bottom + 'px' : null)};
  right: ${(props) => (props.right ? props.right + 'px' : null)};
  pointer-events: auto;
`

interface ControlButtonProps {
  icon: string
  position: {
    left?: number
    bottom?: number
    right?: number
  }
  clickHandler: () => void
}
export const ControlButton: FC<ControlButtonProps> = ({
  icon,
  position,
  clickHandler,
}: ControlButtonProps) => {
  return (
    <ButtonWrapper
      left={position.left}
      bottom={position.bottom}
      right={position.right}
      onClick={() => clickHandler()}
    >
      <img src={icon} alt="control-icon" />
    </ButtonWrapper>
  )
}
