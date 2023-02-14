import React, { FC } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`
interface TitleProps {
  label: string
}

export const Title: FC<TitleProps> = ({ label }: TitleProps) => {
  return <StyledTitle>{label}</StyledTitle>
}
