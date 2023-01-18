import { FC, useState } from 'react'
import styled from 'styled-components'
import styles from '../../styles'

const Popover = styled.div`
  width: 100%;
  height: 90vh;
  max-width: 22.5rem;
  max-height: 37rem;
  position: absolute;
  z-index: 2000;
  margin: 1.5rem 2rem;
  background: ${styles.colors.white};
  box-shadow: 0px 0px 1px rgba(59, 59, 58, 0.16), 0px 0px 24px rgba(59, 59, 58, 0.16);
  border-radius: 4px;
  overflow: hidden;
`

const Slider = styled.div<{ leftFrame }>`
  display: flex;
  flex-direction: row;
  transform: translateX(${(props) => (props.leftFrame ? 0 : '-100%')});
  transition: transform 330ms ease-in-out;
`

const SlideContainer = styled.div`
  min-width: 22.5rem;
  padding: 1.5rem;
  max-height: 39.5rem;
  overflow-y: scroll;
`

const LogoArea = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`

const Logo = styled.img`
  width: 4.5rem;
  margin-top: -4px;
`

const HeaderDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Header = styled.h1<{ center? }>`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  margin-bottom: ${(props) => (props.center ? '2rem' : 0)};
`

const Subheader = styled.p`
  font-weight: 475;
  font-size: 1rem;
  color: ${styles.colors.gray_70};
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

const LabeledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const ZoneLabel = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
  background: ${styles.colors.gray_05};
  color: ${styles.colors.corporateBlue};
  font-weight: 450;
  font-size: 14px;
  height: 1.5rem;
  padding: 0 0.5rem;
  width: fit-content;
  text-transform: uppercase;
  border-radius: 0.25rem;
`

const LineLabel = styled(ZoneLabel)<{ zone }>`
  font-weight: 475;
  font-size: 12px;
  margin-bottom: 0.5rem;
  background: ${(props) =>
    props.zone == 'tools'
      ? styles.colors.lineTools
      : props.zone == 'hardware'
      ? styles.colors.lineHardware
      : props.zone == 'programming'
      ? styles.colors.lineProgramming
      : styles.colors.corporateBlue};
  color: ${styles.colors.white};
  padding: 0 0.5rem;
  width: fit-content;
  text-transform: uppercase;
`

const Paragraph = styled.p<{ marginLeft? }>`
  margin-bottom: 2rem;
  margin-left: ${(props) => (props.marginLeft ? '.5rem' : 0)};
  font-size: 14px;
  color: #3b3b3a;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  padding: 0;
  margin-bottom: 2.25rem;
  background: none;
  color: ${styles.colors.corporateBlue};
  font-size: 12px;
`

const ButtonLabel = styled.span``
const ButtonIcon = styled.img``

export const Infobox: FC = () => {
  const [leftFrame, leftFrameSet] = useState(false)

  return (
    <Popover>
      <Slider leftFrame={leftFrame}>
        <SlideContainer>
          <LogoArea>
            <Logo src={'./assets/tsb-logo.png'} alt="Logo" />
            <HeaderDivider>
              <Header>Tech Map</Header>
              <Subheader>Digital Service Team</Subheader>
            </HeaderDivider>
          </LogoArea>
          <Paragraph>
            Auf dieser Karte verorten wir die wir die Technologien die bei uns im Einsatz sind und
            kategorisieren diese.
          </Paragraph>
          <Title>Status</Title>
          <Paragraph>
            Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten
            wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.
          </Paragraph>
          <ZoneLabel>Hauptzone</ZoneLabel>
          <Paragraph marginLeft>
            Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten
            wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.
          </Paragraph>
          <ZoneLabel>Neue Zone</ZoneLabel>
          <Paragraph marginLeft>
            Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten
            wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.
          </Paragraph>
        </SlideContainer>
        <SlideContainer>
          <BackButton onClick={() => leftFrameSet(true)}>
            <ButtonIcon src={'./assets/arrow-left.svg'} alt="arrow left" />
            <ButtonLabel>Zurück zum Index</ButtonLabel>
          </BackButton>
          <Header center>Figma</Header>
          <LabeledTitle>
            <Title>Description</Title>
            <LineLabel zone="tools">Tools</LineLabel>
          </LabeledTitle>
          <Paragraph>
            Um den Stand der jeweiligen Technologie in unserer täglichen Arbeit zu verorten arbeiten
            wir mit verschiedenen Kategorien, die auf der Map als “Zonen” visualisiert werden.
          </Paragraph>
          <LabeledTitle>
            <Title>Status</Title>
            <ZoneLabel>Adopt</ZoneLabel>
          </LabeledTitle>
          <Paragraph>
            Die Technologien, die sich über einen längeren Zeitraum und mehrere Projekt hinweg als
            stabil erwiesen haben sammeln wir hier unter diesem Punkt.
          </Paragraph>
        </SlideContainer>
      </Slider>
    </Popover>
  )
}
