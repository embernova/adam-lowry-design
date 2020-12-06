import React from 'react'


const Footer = class extends React.Component {
  render() {
    const date = new Date().getFullYear();
    const phoneLink = `tel:${this.props.data.phone}`;
    const emailLink = `mailto:${this.props.data.email}`;
    return (
      <footer>
        <div>
          <div>
            <a href={emailLink}>{this.props.data.email}</a>
          </div>
          <div className="lighter">
            <a href={phoneLink}>Ph. {this.props.data.phone}</a>
          </div>
        </div>

        <div className="copyright">
          © <span id="pageCopyright">{date}</span> — {this.props.data.copyright}
        </div>
      </footer>
    )
  }
}

export default Footer
