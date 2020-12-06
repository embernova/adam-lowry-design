import React from 'react'
import { Helmet } from 'react-helmet'
import HeaderTemplate from '../templates/header-template'
import FooterTemplate from '../templates/footer-template'
import './styles/index.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />

      </Helmet>
      <HeaderTemplate />
      <div>{children}</div>
      <FooterTemplate />
    </div>
  )
}

export default TemplateWrapper
