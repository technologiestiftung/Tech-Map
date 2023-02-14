import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../../styles'

const StyledParagraph = styled.p<{ marginLeft? }>`
  margin-bottom: 2rem;
  margin-left: ${(props) => (props.marginLeft ? '.5rem' : 0)};
  font-size: 14px;
  color: ${styles.colors.text};
  white-space: pre-line;
`
interface ParagraphProps {
  text: string
  marginLeft?: boolean
}
export const Paragraph: FC<ParagraphProps> = ({ text, marginLeft }: ParagraphProps) => {
  return <StyledParagraph marginLeft={marginLeft}>{text}</StyledParagraph>
}
