import React from 'react'
import Image from '../Image/Image'

class Container extends React.Component {

  state = {
    score: 0
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 }, () => {
      console.log('score: ' + this.state.score)
      if (!this.checkWin()) {
        this.forceUpdate()
      }
    })
  }

  checkWin = () => {
    if (this.state.score === 5) {
      console.log('You win')
      return true
    }
  }

  shuffle = arr => {
    arr.sort(() => Math.random() - 0.5)
  }

  render() {
    let images = [
      <Image id='1' incrementScore={this.incrementScore} />,
      <Image id='2' incrementScore={this.incrementScore} />,
      <Image id='3' incrementScore={this.incrementScore} />,
      <Image id='4' incrementScore={this.incrementScore} />,
      <Image id='5' incrementScore={this.incrementScore} />
    ]

    this.shuffle(images)
    return (
      <div>
        {/* <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} />
        <Image incrementScore={this.incrementScore} /> */}
        <h1>Score: {this.state.score}</h1>
        {images}
      </div>
    )
  }
}

export default Container