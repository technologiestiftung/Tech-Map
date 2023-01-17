import { FC } from 'react'
import styled from 'styled-components'

const Popover = styled.div`
  width: 100%;
  height: 100%;
  max-width: 18.5rem;
  max-height: 38.5rem;
  position: absolute;
  z-index: 2000;
  margin: 2rem;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(59, 59, 58, 0.16), 0px 0px 24px rgba(59, 59, 58, 0.16);
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
`

const General = styled.div``

const Detail = styled.div``

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
const Header = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
`

const Subheader = styled.p`
  font-weight: 475;
  font-size: 1rem;
  color: #6f6f6e;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

const ZoneLabel = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
  background: #f6f6f6;
  color: #375aa5;
  font-weight: 450;
  font-size: 14px;
  height: 1.5rem;
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

export const Infobox: FC = () => {
  return (
    <Popover>
      <General>
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
      </General>
    </Popover>
  )
}
