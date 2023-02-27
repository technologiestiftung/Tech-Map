import React, { FC } from 'react'
import styled from 'styled-components/macro'
import styles from '../../../styles'

const StyledParagraph = styled.p<{ marginLeft?; fontSize? }>`
  margin-bottom: 2rem;
  margin-left: ${(props) => (props.marginLeft ? '1.5rem' : 0)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  color: ${styles.colors.text};
  white-space: pre-line;
`
interface ParagraphProps {
  text: string
  marginLeft?: boolean
  fontSize?: string
}
export const Paragraph: FC<ParagraphProps> = ({ text, marginLeft, fontSize }: ParagraphProps) => {
  return (
    <StyledParagraph marginLeft={marginLeft} fontSize={fontSize}>
      {text}
    </StyledParagraph>
  )
}
