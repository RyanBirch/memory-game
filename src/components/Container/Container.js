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
    this.setState({ winStatus: 'You lose' })
  }

  shuffle = arr => {
    arr.sort(() => Math.random() - 0.5)
  }

  render() {
    let images = [
      <Image 
        id='1' 
        incrementScore={this.incrementScore}
        lossStatus={this.lossStatus} 
      />,
      <Image 
        id='2' 
        incrementScore={this.incrementScore}
        lossStatus={this.lossStatus} 
      />,
      <Image 
        id='3' 
        incrementScore={this.incrementScore}
        lossStatus={this.lossStatus} 
      />,
      <Image 
        id='4' 
        incrementScore={this.incrementScore}
        lossStatus={this.lossStatus} 
      />,
      <Image 
        id='5' 
        incrementScore={this.incrementScore}
        lossStatus={this.lossStatus} 
      />
    ]

    this.shuffle(images)
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h2>{this.state.winStatus}</h2>
        {images}
      </div>
    )
  }
}

export default Container