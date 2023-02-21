import React from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import { useTranslation } from 'react-i18next'

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 4.5rem;
  width: 100vw;
  min-height: 3.25rem;
  color: ${styles.colors.white};
  font-size: 14px;
  font-family: Clan;
  background-color: ${styles.colors.corporateBlueMedium};

  @media (min-width: ${styles.breakpoints.desktop}) {
    flex-direction: row;
  }
`

const Copyright = styled.p``
const LinkWrapper = styled.div`
  display: flex;
  gap: 2.23rem;
`
const StyledLink = styled.a`
  color: ${styles.colors.white};
  text-decoration: none;
  font-weight: 700;
`

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterWrapper>
      <Copyright> © 2022 Technologiestiftung Berlin</Copyright>
      <LinkWrapper>
        <StyledLink href="https://www.technologiestiftung-berlin.de/impressum" target="_blank">
          {t('functionality.impressum')}
        </StyledLink>
        <StyledLink href="https://www.technologiestiftung-berlin.de/datenschutz" target="_blank">
          {t('functionality.privacyNotice')}
        </StyledLink>
      </LinkWrapper>
    </FooterWrapper>
  )
}
