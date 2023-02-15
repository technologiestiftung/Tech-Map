import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../styles'

const StyledButton = styled.button`
  border: none;
  color: ${styles.colors.white};
  background-color: ${styles.colors.corporateBlueMedium};
  font-family: Clan Pro;
  font-size: 14px;
  line-height: 24px;
  padding: 0.5rem 1rem;
  border-radius: ${styles.borderRadius};
`

interface ButtonProps {
  label: string
  clickHandler: () => void
}

export const Button: FC<ButtonProps> = ({ label, clickHandler }: ButtonProps) => {
  return <StyledButton onClick={clickHandler}>{label}</StyledButton>
}
