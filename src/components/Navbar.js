import React from 'react'
import { Link } from 'gatsby'
import { animateOut } from '../scripts/header/animate-out';
import { animateIn } from '../scripts/header/animate-in';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inverted: false
    }

    document.addEventListener('keyup', (ev => {
      if (ev.key === 'Escape') {
        animateOut();
      }
    }));
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.darkElement = document.getElementById('swiper');
    this.headerHeight = document.getElementById('siteHeader').offsetHeight;
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.darkElement) {
      return;
    }
    const bounds = this.darkElement.getBoundingClientRect();
    if (bounds.top < (this.headerHeight / 2) && bounds.bottom > (this.headerHeight / 2)) {
      if (!this.state.inverted) {
        this.setState({inverted: true});
      }
    } else {
      if (this.state.inverted) {
        this.setState({inverted: false});
      }
    }
  }

  closeMenu = () => {
    animateOut();
  }

  openMenu = () => {
    animateIn();
  }

  render() {
    return (
      <header id="siteHeader" className={this.state.inverted ? 'header__inverted' : ''}>
        <div className="container">
          <div className="header--top header--top__closed" id="siteMenuToggle">
            {this.renderLogo()}

            <button type="button" className="header--action header--action__menu" id="siteMenuOpen" onClick={this.openMenu}>
              <span className="header--action-text">Menu</span>
              <span className="header-lines"/>
            </button>
          </div>

          <div className="header--wrapper" id="siteMenu" hidden>
            <div className="header" id="siteMenuInner">
              <div className="header--top">
                {this.renderLogo()}

                <button type="button" className="header--action header--action__close" id="siteMenuClose" onClick={this.closeMenu}>
                  <span className="header--action-text">Close</span>
                </button>
              </div>

              <div className="header--inner">

                <nav className="header--section">
                  <h2 className="header--outline-title">Projects</h2>
                  <ul className="header--list">
                    <li className="header--list-item"><a href="" className="header--list-link">K’s Wigshop</a></li>
                    <li className="header--list-item"><a href="https://www.maggiesottero.com"
                                                         className="header--list-link">Maggie Sottero</a></li>
                    <li className="header--list-item"><a href="" className="header--list-link">Noms Social Cookbook</a>
                    </li>
                  </ul>

                  <h2 className="header--outline-title">Lets talk</h2>
                  <ul className="header--list header--list__inline">
                    <li className="header--list-item"><a href="mailto:hello@adamlowrydesigns.com"
                                                         className="header--list-link">Email</a></li>
                    <li className="header--list-item"><a href="tel:18012305579"
                                                         className="header--list-link">Telephone</a></li>
                    <li className="header--list-item"><Link to="/" className="header--list-link">Morse Code</Link></li>
                  </ul>
                </nav>

                <div className="header--section">
                  <h2 className="header--outline-title header--outline-title__text">About</h2>

                  <p className="header--paragraph header--paragraph__first">
                    I’m a UI/UX designer based in Salt Lake City, Utah currently working for bridal designer Maggie
                    Sottero.
                    For 8 years I’ve been honing a human-centered design style that places the user at the center of a
                    unique, hand-crafted experience.
                  </p>

                  <p className="header--paragraph highlight-contrast">
                    When I’m not designing, I can be found doing the dad thing, snowmobiling in God’s country,
                    catching up on NBA news, or working on a novel (its really good, my mom said so).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    )
  }

  renderLogo() {
    return (
      <Link to="/" className="logo">
        <svg viewBox="0 0 32 32" x="0px" y="0px" className="icon icon-A-Logo-Final">
          <g>
            <path d="M3.334 29.295h-2.421l12.788-22.367 7.033 12.315h-2.172l-4.739-8.311-10.49 18.363z"/>
            <path d="M31.087 29.295l-14.916-26.59-1.297 2.27 9.328 16.213h-11.805l2.596-4.471-1.196-1.881-4.713 8.298h16.237l3.496 6.161h2.269z"/>
            <path d="M24.264 29.295h2.244l-2.413-4.216h-16.137l-2.375 4.216h2.188l1.312-2.27h13.868l1.312 2.27z"/>
          </g>
        </svg>
        <span className="sr-only">Logo</span>
      </Link>
    )
  }
}

export default Navbar
