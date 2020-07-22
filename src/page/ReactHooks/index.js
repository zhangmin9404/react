import React, { Component, useState } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = { buttonText: 'Click me, please' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(() => {
      return { buttonText: 'Thanks, been clicked' }
    })
  }

  render () {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick} >{buttonText}</button>
  }
}

// useState 状态钩子
export default function FuncButton () {
  const [buttonText, setButtonText] = useState('Click me, hooks, please');
  function handleClick () {
    return setButtonText('Thanks, been clicked')
  }

  return <button onClick={handleClick} >{buttonText}</button>
}


export {
  FuncButton,
  Button,

}