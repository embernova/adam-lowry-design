import React from 'react'

const ChangingText = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.options[0]
    }
    this.textRef = React.createRef();
  }

  render() {
    return (
      <span>
        <span ref={this.textRef}>{this.state.text}</span>
        <span className="cursor">&nbsp;</span>
      </span>
    )
  }

  updateText = () => {
    const max = this.props.options.length - 1;
    const random = Math.ceil(Math.random() * max);
    const text = this.props.options[random];

    const previousText = this.state.text;

    if (previousText === text) {
      this.updateText();
      return;
    }

    this.removeText(text);
  }

  addText = (text) => {
    if (this.destroyed) {
      return;
    }

    if (this.state.text !== text) {
      setTimeout(() => {
        const nextChar = text[this.state.text.length];
        this.setState({text: this.state.text + (nextChar || '')});
        this.addText(text);
      }, this.getTypeDelay(150, 25))
    } else {
      setTimeout(() => {
        this.updateText();
      }, 5000)
    }
  }

  removeText = (text) => {
    if (this.destroyed) {
      return;
    }

    if (this.state.text) {
      setTimeout(() => {
        const chars = this.textRef.current.innerText.split('');
        chars.pop();
        this.setState({text: chars.join('') || ''});
        this.removeText(text);
      }, this.getTypeDelay(50, 10))
    } else {
      this.addText(text)
    }
  }

  getTypeDelay = (max, min) => {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    setTimeout(() => {
      this.updateText();
    }, 8000)
  }

  componentWillUnmount() {
    this.destroyed = true;
  }
}


export default ChangingText
