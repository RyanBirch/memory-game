import React from 'react'
import './Image.css'

class Image extends React.Component {

  render() {
    return (
      <img src={this.props.imgSrc} className="image" alt='sponge' width="25%" height="175em" onClick={() => this.props.handleClick(this.props.id)} id={this.props.id} />
    )
  }
}

export default Image