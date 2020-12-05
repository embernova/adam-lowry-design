import React from 'react'


const Footer = class extends React.Component {
  render() {
    const date = new Date().getFullYear();
    return (
      <footer>
        <div>
          <div>
            <a href="mailto:hello@adamlowrydesigns.com">hello@adamlowrydesigns.com</a>
          </div>
          <div className="lighter">
            <a href="tel:18012305579">Ph. 1.801.230.5579</a>
          </div>
        </div>

        <div className="copyright">
          © <span id="pageCopyright">{date}</span> — Adam Lowry
        </div>
      </footer>
    )
  }
}

export default Footer
