import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

export class FooterTemplate extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Footer data={data} />
    )
  }
}

FooterTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default () => (
  <StaticQuery
    render={(data) => <FooterTemplate data={data.markdownRemark.frontmatter} />}
    query={graphql`
      query FooterTemplateQuery {
      
        markdownRemark(frontmatter: { templateKey: { eq: "footer-template" } }) {
          frontmatter {
            email
            phone
            copyright
          }
        }
      }
    `}
  />
)

