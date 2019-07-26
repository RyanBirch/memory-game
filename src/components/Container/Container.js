import React from 'react'
import Image from '../Image/Image'

class Container extends React.Component {

  state = {
    score: 0,
    winStatus: ''
  }

  incrementScore = () => {
    this.setState({ 
      score: this.state.score + 1,
    }, () => {
      // if they haven't won yet, shuffle the images
      if (!this.checkWin()) {
        this.forceUpdate()
      }
    })
  }

  checkWin = () => {
    if (this.state.score === 5) {
      this.setState({ winStatus: 'You win' })
      return true
    }
  }

  lossStatus = () => {
    this.setState({ 
      winStatus: 'You lose',
      score: 0
    })
  }

  shuffle = arr => {
    arr.sort(() => Math.random() - 0.5)
  }

  render() {
    let images = [
      <Image key='1' id='1' incrementScore={this.incrementScore} lossStatus={this.lossStatus} />,
      <Image key='2' id='2' incrementScore={this.incrementScore} lossStatus={this.lossStatus} />,
      <Image key='3' id='3' incrementScore={this.incrementScore} lossStatus={this.lossStatus} />,
      <Image key='4' id='4' incrementScore={this.incrementScore} lossStatus={this.lossStatus} />,
      <Image key='5' id='5' incrementScore={this.incrementScore} lossStatus={this.lossStatus} />
    ]

    this.shuffle(images)

    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h2>{this.state.winStatus}</h2>
        {/* render images array */}
        {images}
      </div>
    )
  }
}

export default Container