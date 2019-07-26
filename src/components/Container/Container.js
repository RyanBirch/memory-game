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
    if (this.state.score === 12) {
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
      <Image key='1' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb1.jpg')} />,
      <Image key='2' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb2.jpeg')}/>,
      <Image key='3' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb3.jpg')} />,
      <Image key='4' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb4.jpg')} />,
      <Image key='5' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb5.jpg')} />,
      <Image key='6' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb6.jpg')} />,
      <Image key='7' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb7.jpg')}/>,
      <Image key='8' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb8.jpg')} />,
      <Image key='9' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb9.png')} />,
      <Image key='10' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb10.webp')} />,
      <Image key='11' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb11.jpg')} />,
      <Image key='12' incrementScore={this.incrementScore} lossStatus={this.lossStatus} imgSrc={require('./images/sb12.jpg')} />
    ]

    this.shuffle(images)

    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h2>{this.state.winStatus}</h2>
        <div className="img-wrapper">
          {images.map(item => item)}
        </div>
      </div>
    )
  }
}

export default Container