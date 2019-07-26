import React from 'react'
import './Image.css'

class Image extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    if (this.state.clicked) {
      console.log('You lose')
    } else {
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