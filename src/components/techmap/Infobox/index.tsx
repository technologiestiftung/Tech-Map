import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from '../../../styles'
import { Technology, content } from '../../../data/digital-services'
import { GeneralInfo } from './GeneralInfo'
import { ActiveTechInfo } from './ActiveTechInfo'
import { LogoArea } from './LogoArea'

const StyledInfobox = styled.div`
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

const MobileContent = styled.div`
  display: block;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: none;
  }
`
const DesktopContent = styled.div`
  display: none;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: block;
  }
`

const Slider = styled.div<{ leftFrame; inactive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  /* transition: ${styles.transitions.maxHeight}; */
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

const HeaderSlideContainer = styled.div`
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

const SlideContainer = styled.div`
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

const BackButtonMobile = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  font-size: 14px;
  padding: 1rem 2rem;
  gap: 0.5rem;
  color: ${styles.colors.white};
  background-color: ${styles.colors.corporateBlueMedium};
  height: 100%;
  width: 100%;
`

const BackButtonDesktop = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: none;
  flex: 1;
  font-size: 12px;
  padding: 0;
  padding-left: 2.25rem;
  color: ${styles.colors.corporateBlue};
  height: 100%;
  width: 50%;
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
  const [sliderVisible, sliderVisibleSet] = useState<boolean>(false)

  useEffect(() => {
    if (!activeTechId) {
      sliderVisibleSet(false)
    } else if (activeTechId === 'general_info') {
      leftFrameSet(true)
      sliderVisibleSet(true)
    } else {
      activeTechObjSet(content.technologies[activeTechId])
      leftFrameSet(activeTechId ? false : true)
      sliderVisibleSet(true)
    }
  }, [activeTechId])

  const slideBack = () => {
    activeTechObjSet(null)
    unmountTechnology()
    leftFrameSet(true)
  }

  const hideInfobox = () => {
    unmountTechnology()
    activeTechObjSet(null)
    leftFrameSet(false)
  }

  return (
    <StyledInfobox>
      <MobileContent>
        <LogoArea visible={!sliderVisible} activeInstitute={activeInstitute} />
        <Slider leftFrame={leftFrame} inactive={!sliderVisible}>
          <HeaderSlideContainer>
            <BackButtonMobile onClick={() => hideInfobox()}>
              <ButtonLabel>Infobox schließen</ButtonLabel>
              <CloseIcon width="26" height="26" src={'assets/x-circle.svg'} alt="close icon" />
            </BackButtonMobile>
          </HeaderSlideContainer>
          <HeaderSlideContainer>
            <BackButtonMobile onClick={() => hideInfobox()}>
              <ButtonLabel>Beschreibung schließen</ButtonLabel>
              <CloseIcon width="26" height="26" src={'assets/x-circle.svg'} alt="close icon" />
            </BackButtonMobile>
          </HeaderSlideContainer>
        </Slider>
        <Slider leftFrame={leftFrame} inactive={!sliderVisible}>
          <SlideContainer>
            <GeneralInfo mobile />
          </SlideContainer>
          <SlideContainer>
            {activeTechObj && (
              <ActiveTechInfo activeTechObj={activeTechObj} activeTechId={activeTechId} />
            )}
          </SlideContainer>
        </Slider>
      </MobileContent>

      <DesktopContent>
        <Slider leftFrame={leftFrame} inactive={sliderVisible}>
          <HeaderSlideContainer>
            <LogoArea visible={true} activeInstitute={activeInstitute} />
          </HeaderSlideContainer>
          <HeaderSlideContainer>
            <BackButtonDesktop onClick={() => slideBack()}>
              <ButtonIcon src={'assets/arrow-left.svg'} alt="arrow left" />
              <ButtonLabel>Zurück zum Index</ButtonLabel>
            </BackButtonDesktop>
          </HeaderSlideContainer>
        </Slider>
        <Slider leftFrame={leftFrame} inactive={sliderVisible}>
          <SlideContainer>
            <GeneralInfo />
          </SlideContainer>
          <SlideContainer>
            {activeTechObj && (
              <ActiveTechInfo activeTechObj={activeTechObj} activeTechId={activeTechId} />
            )}
          </SlideContainer>
        </Slider>
      </DesktopContent>
    </StyledInfobox>
  )
}
