import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

export class HeaderTemplate extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Navbar data={data} preview={this.props.preview} />
    )
  }
}

HeaderTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default () => (
  <StaticQuery
    render={(data) => <HeaderTemplate data={data.markdownRemark.frontmatter} />}
    query={graphql`
      query HeaderTemplateQuery {
      
        markdownRemark(frontmatter: { templateKey: { eq: "header-template" } }) {
          frontmatter {
            title
            text
            textHighlight
            projectsHeading
            contactHeading
            phone
            email
            projects {
              blurbs {
                text
                url
              }
            }
          }
        }
      }
    `}
  />
)

