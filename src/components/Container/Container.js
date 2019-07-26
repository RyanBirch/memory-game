import React from 'react'
import Image from '../Image/Image'

class Container extends React.Component {

  state = {
    score: 0,
    images: [
      { id: 1, src: '', isClicked: false },
    ],
    imgSrc: ['', '', '', '', '']
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 })
    console.log('score: ' + this.state.score)
  }

  shuffleImages = () => {

  }

  render() {
    return (
      <div>
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
      </div>
    )
  }
}

export default Container