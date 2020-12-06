import React from 'react'
import PropTypes from 'prop-types'
import { FooterTemplate } from '../../templates/footer-template'

const FooterTemplatePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FooterTemplate
        data={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FooterTemplatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FooterTemplatePreview
