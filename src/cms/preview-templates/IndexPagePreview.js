import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import Layout from '../../components/Layout'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Layout>
        <IndexPageTemplate
          image={getAsset(data.image)}
          title={data.title}
          heading={data.heading}
          preHeading={data.preHeading}
          postHeading={data.postHeading}
          description={data.description}
          projects={data.projects}
          main={data.main || {}}
        />
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
