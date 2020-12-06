import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SwiperComponent from '../components/Swiper'
import ChangingText from '../components/ChangingText'


export const IndexPageTemplate = ({
  image,
  title,
  preHeading,
  heading,
  postHeading,
  main,
  description,
  projects,
  actionText
}) => {
  return (
    <main>
      {renderMainSection(preHeading, heading, postHeading, image, actionText)}
      <SwiperComponent projects={projects.blurbs} heading={projects.heading} />
      {renderChatSection(main)}
    </main>
  );
}

const renderChatSection = (main) => {
 return (
   <div className="position-relative">
     <div className="container">
       <section className="main-section main-section__2">
         <div className="main-section-inner">
           <h1 className="main-heading">
             <span className="main-heading-small">{main.preHeading}</span>
             <span className="main-heading-large">
               {main.heading}
               <br/>
               <ChangingText options={main.headingOptions} />
             </span>
           </h1>

           <div className="">
             <Link to="/contact" className="button-contrast">{main.actionText}</Link>
           </div>
         </div>

         <div className="empty"/>

       </section>
     </div>

   </div>

 );
}

const renderMainSection = (preHeading, heading, postHeading, image, actionText) => {
  return (
    <div className="position-relative">
      <div className="container">
        <section className="main-section">
          <div className="main-section-inner">
            <h1 className="main-heading">
              <span className="main-heading-small">{preHeading}</span>
              <span className="main-heading-large">{heading}</span>
            </h1>
            <p className="main-section-paragraph">{postHeading}</p>
          </div>

          <img className="main-section-image" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="" />

        </section>
      </div>

      <div className="section-sideways-action">
        <Link to="/contact" className="button-contrast button-sideways">{actionText}</Link>
      </div>

    </div>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  preHeading: PropTypes.string,
  heading: PropTypes.string,
  postHeading: PropTypes.string,
  main: PropTypes.object,
  description: PropTypes.string,
  actionText: PropTypes.string,
  projects: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        preHeading={frontmatter.preHeading}
        heading={frontmatter.heading}
        postHeading={frontmatter.postHeading}
        actionText={frontmatter.actionText}
        main={frontmatter.main}
        description={frontmatter.description}
        projects={frontmatter.projects}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        preHeading
        heading
        postHeading
        description
        actionText
        projects {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 805, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            linkURL
            backgroundImage {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            skills
          }
          heading
        }
        main {
          preHeading
          heading
          actionText
          headingOptions
        }
      }
    }
  }
`
