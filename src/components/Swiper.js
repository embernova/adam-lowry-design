import React from 'react'
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination])

const SwiperComponent = class extends React.Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
    this.swiperPaginationRef = React.createRef();
    this.state = {
      backgroundImage: props.projects[0].backgroundImage
    }
  }
  render() {
    const image = !!this.state.backgroundImage.childImageSharp ? this.state.backgroundImage.childImageSharp.fluid.src : this.state.backgroundImage;

    return (
      <section className="featured-section" id="swiper" style={{backgroundImage: `url(${image})`}}>
        <div className="featured-section--inner">
          <h2 className="featured-section--heading-main">{this.props.heading}</h2>

          <div className="swiper-container" ref={this.swiperRef}>
            <div className="swiper-wrapper">
              {this.props.projects.map((project, index) => this.renderSlide(project, index))}
            </div>

            <div className="swiper-pagination" ref={this.swiperPaginationRef}/>
          </div>
        </div>

      </section>

    )
  }

  renderSkills = (skills) => {
    return skills.map((skill, index) => (<li key={index}>{skill}</li>));
  }

  renderSlide = (project, index) => {
    return (
      <a key={index} className="swiper-slide" href={project.linkURL}>
        <img src={!!project.image.childImageSharp ? project.image.childImageSharp.fluid.src : project.image}
             alt={project.imageAlt} onLoad={this.firstImageLoaded()}/>
        <div className="featured-section--text">
          <h3 className="featured-section--heading-secondary">{project.title}</h3>
          <ul className="featured-section--highlights">
            {this.renderSkills(project.skills)}
          </ul>
        </div>
      </a>
    )
  }

  firstImageLoaded = () => {
    if (this.loaded) {
      return;
    }

    this.loaded = true;

    if ( typeof requestAnimationFrame === 'undefined') {
      return;
    }
    requestAnimationFrame(() => {
      this.createSwiper();
    });
  }

  createSwiper = () => {
    this.swiper = new Swiper(this.swiperRef.current, {
      // Optional parameters
      loop: true,
      autoHeight: true,

      // If we need pagination
      pagination: {
        el: this.swiperPaginationRef.current,
        clickable: true
      },

      spaceBetween: 15,
      slidesPerView: 'auto',

      breakpoints: {
        768: {
          spaceBetween: 100
        }
      }
    });

    this.swiper.on('slideChange', () => {
      this.updateImage();
    })
  }

  updateImage = () => {
    this.setState({backgroundImage: this.props.projects[this.swiper.realIndex].backgroundImage});
  }
}


export default SwiperComponent
