import React from 'react'
import './Image.css'

class Image extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div className="image" onClick={this.handleClick}>
        <p>Image</p>

      </div>
    )
  }
}

export default Image