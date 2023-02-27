import React, { FC } from 'react'
import styled from 'styled-components/macro'

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 1rem;
`
interface TitleProps {
  label: string
}

export const Title: FC<TitleProps> = ({ label }: TitleProps) => {
  return <StyledTitle>{label}</StyledTitle>
}
