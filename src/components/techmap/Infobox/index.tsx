import { FC, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import styles from '../../../styles'
import { GeneralInfo } from './GeneralInfo'
import { ActiveTechInfo } from './ActiveTechInfo'
import { LogoArea } from './LogoArea'
import content, { Technology } from '../../../i18n/digital-services-de'
import { useTranslation } from 'react-i18next'
import { Footer } from '../../Footer'

const StyledInfobox = styled.div<{ visible }>`
  width: 100%;
  z-index: 20000;
  max-height: 100%;
  height: ${(props) => (props.visible ? '0' : '100%')};
  background: ${styles.colors.white};
  overflow: hidden;
  position: absolute;
  margin: auto;
  transition: ${styles.transitions.hight};

  @media (min-width: ${styles.breakpoints.desktop}) {
    z-index: 3000;
    grid-area: infobox;
    width: 21.25rem;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
  }
`

const MobileContent = styled.div`
  display: block;
  height: 100%;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: none;
  }
`
const DesktopContent = styled.div`
  display: none;
  @media (min-width: ${styles.breakpoints.desktop}) {
    display: block;
    height: 100vh;
    padding-bottom: 5rem;
  }
`

const Slider = styled.div<{ leftFrame; inactive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  width: 200%;
  overflow-x: hidden;
  transform: translateX(${(props) => (props.leftFrame ? 0 : '-50%')});
  z-index: 40000;
  max-height: ${(props) => (props.inactive ? 0 : '100%')};

  @media (min-width: ${styles.breakpoints.desktop}) {
    transition: ${styles.transitions.all};
    width: 45rem;
    max-width: 200%;
    max-height: calc(100vh - 7rem);
    z-index: 0;
    box-shadow: ${styles.boxShadow};
    position: relative;
    justify-content: stretch;
  }
`

const BottomSlider = styled(Slider)`
  height: 100%;
`

const HeaderSlideContainer = styled.div`
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
  max-width: 50%;
  padding: 1.375rem 2.75rem 3.5rem 1.5rem;
  display: block;
  overflow-y: scroll;
  transition: ${styles.transitions.all};
  transition-delay: 0.25s;
  flex: 1;

  @media (min-width: ${styles.breakpoints.desktop}) {
    padding: 1.5rem 3.5rem 3.5rem 2.5rem;
  }
`

const SlideContainerIncludingFooter = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const BackButtonMobile = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  font-size: 14px;
  padding: 1.2rem 2rem;
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
  color: ${styles.colors.corporateBlueMedium};
  height: 100%;
  width: 50%;
`
const MobileFooterWrapper = styled.div`
  display: block;
  margin-left: -1.5rem;
  @media (min-width: ${styles.breakpoints.desktop}) {
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
  const { t } = useTranslation()
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
    leftFrameSet(true)
  }

  return (
    <StyledInfobox visible={!sliderVisible}>
      <MobileContent>
        <Slider leftFrame={leftFrame} inactive={!sliderVisible}>
          <HeaderSlideContainer>
            <BackButtonMobile onClick={() => hideInfobox()}>
              <ButtonLabel>{t('functionality.buttonCloseInfobox')}</ButtonLabel>
              <CloseIcon width="26" height="26" src={'../assets/x-circle.svg'} alt="close icon" />
            </BackButtonMobile>
          </HeaderSlideContainer>
          <HeaderSlideContainer>
            <BackButtonMobile onClick={() => hideInfobox()}>
              <ButtonLabel>{t('functionality.buttonCloseExplanation')}</ButtonLabel>
              <CloseIcon width="26" height="26" src={'../assets/x-circle.svg'} alt="close icon" />
            </BackButtonMobile>
          </HeaderSlideContainer>
        </Slider>
        <Slider leftFrame={leftFrame} inactive={!sliderVisible}>
          <SlideContainerIncludingFooter>
            <GeneralInfo mobile />
            <MobileFooterWrapper>
              <Footer />
            </MobileFooterWrapper>
          </SlideContainerIncludingFooter>
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
              <ButtonIcon src={'../assets/arrow-left.svg'} alt="arrow left" />
              <ButtonLabel>{t('functionality.buttonBackToIndex')}</ButtonLabel>
            </BackButtonDesktop>
          </HeaderSlideContainer>
        </Slider>
        <BottomSlider leftFrame={leftFrame} inactive={sliderVisible}>
          <SlideContainer>
            <GeneralInfo />
          </SlideContainer>
          <SlideContainer>
            {activeTechObj && (
              <ActiveTechInfo activeTechObj={activeTechObj} activeTechId={activeTechId} />
            )}
          </SlideContainer>
        </BottomSlider>
      </DesktopContent>
    </StyledInfobox>
  )
}
