import React from 'react'
import PropTypes from 'prop-types'
import { HeaderTemplate } from '../../templates/header-template'

const HeaderTemplatePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HeaderTemplate
        data={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HeaderTemplatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HeaderTemplatePreview
