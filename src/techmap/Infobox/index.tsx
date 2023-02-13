import { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import { Technology, content } from '../../data/digital-services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, thin, light, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const Popover = styled.div`
  width: 100%;
  z-index: 2000;
  background: ${styles.colors.white};
  overflow: hidden;
  position: absolute;
  margin: auto;
  transition: ${styles.transitions.hight};

  @media (min-width: ${styles.breakpoints.desktop}) {
    z-index: 0;
    width: 29rem;
    height: 100vh;
    position: relative;
    bottom: 0;
    left: 0;
  }
`

const Slider = styled.div<{ leftFrame; inactive?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: ${styles.transitions.maxHeight};
  width: 200%;
  overflow-x: hidden;
  transform: translateX(${(props) => (props.leftFrame ? 0 : '-50%')});
  z-index: 40000;
  max-height: ${(props) => (props.inactive ? 0 : '100vh')};

  @media (min-width: ${styles.breakpoints.desktop}) {
    transition: ${styles.transitions.all};
    width: 45rem;
    max-width: 200%;
    max-height: 100vh;
    z-index: 0;
    box-shadow: ${styles.boxShadow};
    position: relative;
  }
`

const HeaderSlideContainer = styled.div<{ side: string; inactive?: boolean }>`
  max-height: 100vh;
  max-width: 50%;
  height: auto;
  padding: 0;
  display: flex;
  overflow-y: scroll;
  transition: ${styles.transitions.all};
  transition-delay: 0.25s;
  flex: 1;
  background-color: white;
`

const SlideContainer = styled.div<{ side: string }>`
  max-height: 100vh;
  max-width: 50%;
  height: 100vh;
  padding: 1.5rem 3.5rem 1.5rem 2.5rem;
  display: block;
  overflow-y: scroll;
  transition: ${styles.transitions.all};
  transition-delay: 0.25s;
  flex: 1;
`

const LogoArea = styled.div<{ hideMobile: boolean; inactive?: boolean }>`
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.inactive ? '0' : '1rem 0')};
  gap: 1.5rem;
  width: 100%;
  display: ${(props) => (props.hideMobile ? 'none' : 'flex')};
  position: relative;
  max-height: ${(props) => (props.inactive ? '0' : '100px')};
  transition: ${styles.transitions.all};

  @media (min-width: ${styles.breakpoints.desktop}) {
    display: ${(props) => (props.hideMobile ? 'flex' : 'none')};
  }
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
  width: 100%;
  border: none;
  padding: 0;
  background: none;
`

const DesktopContent = styled.div`
  flex: 1;
  font-size: 12px;
  padding-left: 2.25rem;
  display: none;
  align-items: center;
  justify-content: flex-start;
  color: ${styles.colors.corporateBlue};
  height: 100%;
  width: 100%;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: flex;
    width: 50%;
  }
`
const MobileContent = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 1rem 2rem;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${styles.colors.white};
  background-color: ${styles.colors.corporateBlueMedium};
  height: 100%;
  width: 100%;
  @media (min-width: ${styles.breakpoints.desktop}) {
    width: 50%;
    display: none;
  }
`

const CloseIcon = styled.img``
const ButtonLabel = styled.span``
const ButtonIcon = styled.img``

interface InfoBoxProps {
  activeTechId: string
  activeInstitute: string
  unmountTechnology: () => void
}

export const Infobox: FC<InfoBoxProps> = ({
  activeTechId,
  activeInstitute,
  unmountTechnology,
}: InfoBoxProps) => {
  const [leftFrame, leftFrameSet] = useState<boolean>(true)
  const [activeTechObj, activeTechObjSet] = useState<Technology | null>(null)

  useEffect(() => {
    activeTechObjSet(content.technologies[activeTechId])
    leftFrameSet(activeTechId ? false : true)
  }, [activeTechId])

  const slideBack = () => {
    activeTechObjSet(null)
    unmountTechnology()
    leftFrameSet(true)
  }
  const hideInfobox = () => {
    activeTechObjSet(null)
    leftFrameSet(false)
  }

  return (
    <Popover>
      <LogoArea hideMobile={false} inactive={activeTechObj != null}>
        <Logo src={'assets/tsb-logo.png'} alt="Logo" />
        <HeaderDivider>
          <Header>Tech Map</Header>
          <Subheader>
            {activeInstitute === 'digitalServices' ? 'Digital Service Team' : 'CityLab Team'}
          </Subheader>
        </HeaderDivider>
      </LogoArea>
      <Slider leftFrame={leftFrame} inactive={activeTechObj == null}>
        <HeaderSlideContainer side="left">
          <LogoArea hideMobile={true}>
            <Logo src={'assets/tsb-logo.png'} alt="Logo" />
            <HeaderDivider>
              <Header>Tech Map</Header>
              <Subheader>
                {activeInstitute === 'digitalServices' ? 'Digital Service Team' : 'CityLab Team'}
              </Subheader>
            </HeaderDivider>
          </LogoArea>
          <MobileContent onClick={() => hideInfobox()}>
            <ButtonLabel>Infobox schließen</ButtonLabel>
            <CloseIcon width="26" height="26" src={'assets/x-circle.svg'} alt="close icon" />
          </MobileContent>
        </HeaderSlideContainer>
        <HeaderSlideContainer side="right">
          <BackButton onClick={() => slideBack()}>
            <DesktopContent>
              <ButtonIcon src={'assets/arrow-left.svg'} alt="arrow left" />
              <ButtonLabel>Zurück zum Index</ButtonLabel>
            </DesktopContent>
            <MobileContent onClick={() => hideInfobox()}>
              <ButtonLabel>Infobox schließen</ButtonLabel>
              <CloseIcon width="26" height="26" src={'assets/x-circle.svg'} alt="close icon" />
            </MobileContent>
          </BackButton>
        </HeaderSlideContainer>
      </Slider>
      <Slider leftFrame={leftFrame} inactive={activeTechObj == null}>
        <SlideContainer side="left">
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
        <SlideContainer side="right">
          {activeTechObj && (
            <>
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
            </>
          )}
        </SlideContainer>
      </Slider>
    </Popover>
  )
}
