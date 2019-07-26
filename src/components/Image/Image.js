import React from 'react'
import './Image.css'

class Image extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    // if the image has already been clicked, you lose
    if (this.state.clicked) {
      this.props.lossStatus()
    } else {
      // mark component as clicked and increment score
      this.setState({ clicked: !this.state.clicked })
      this.props.incrementScore()
    }
  }

  render() {
    return (
      <div className="image" onClick={this.handleClick}>
        <p>Image {this.props.id}</p>

      </div>
    )
  }
}

export default Image