import { FC, Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import { Technology, content } from '../../data/digital-services'

const Popover = styled.div`
  width: 30rem;
  height: 100vh;
  max-width: 22.5rem;
  position: absolute;
  z-index: 2000;
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
  max-height: 100vh;
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
  display: flex;
  align-items: center;
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
  color: ${styles.colors.text};
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

interface InfoBoxProps {
  activeTechId: string
  activeInstitute: string
}

export const Infobox: FC<InfoBoxProps> = ({ activeTechId, activeInstitute }: InfoBoxProps) => {
  const [leftFrame, leftFrameSet] = useState<boolean>(true)
  const [activeTechObj, activeTechObjSet] = useState<Technology | null>(null)

  useEffect(() => {
    activeTechObjSet(content.technologies[activeTechId])
    leftFrameSet(activeTechId ? false : true)
  }, [activeTechId])

  return (
    <Popover>
      <Slider leftFrame={leftFrame}>
        <SlideContainer>
          <LogoArea>
            <Logo src={'assets/tsb-logo.png'} alt="Logo" />
            <HeaderDivider>
              <Header>Tech Map</Header>
              <Subheader>
                {activeInstitute === 'digitalServices' ? 'Digital Service Team' : 'CityLab Team'}
              </Subheader>
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
          {Object.keys(content.description.zones).map((zone) => (
            <Fragment key={zone}>
              <ZoneLabel>{zone}</ZoneLabel>
              <Paragraph marginLeft>{content.description.zones[zone]}</Paragraph>
            </Fragment>
          ))}
        </SlideContainer>
        {activeTechObj && (
          <SlideContainer>
            <BackButton onClick={() => leftFrameSet(true)}>
              <ButtonIcon src={'assets/arrow-left.svg'} alt="arrow left" />
              <ButtonLabel>Zurück zum Index</ButtonLabel>
            </BackButton>
            <Header center>{activeTechObj.title}</Header>
            <LabeledTitle>
              <Title>Description</Title>
              <LineLabel zone={activeTechObj.technologyLine}>
                {activeTechObj.technologyLine}
              </LineLabel>
            </LabeledTitle>
            <Paragraph>{activeTechObj.description}</Paragraph>
            <LabeledTitle>
              <Title>Status</Title>
              <ZoneLabel>{activeTechObj.status}</ZoneLabel>
            </LabeledTitle>
            <Paragraph>
              {content.description.zones[content.technologies[activeTechId].status]}
            </Paragraph>
          </SlideContainer>
        )}
      </Slider>
    </Popover>
  )
}