import React from 'react'
import Image from '../Image/Image'
import './Container.css'

class Container extends React.Component {

  state = {
    score: 0,
    highScore: 0,
    winStatus: '',
    gameOver: false,
    images: [
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false },
      { clicked: false }
    ]
  }

  incrementScore = () => {
    this.setState({ 
      score: this.state.score + 1,
      winStatus: '',
      gameOver: false
    }, () => {
      // if they haven't won yet, shuffle the images
      if (!this.checkWin()) {
        this.forceUpdate()
      }
    })
  }

  checkWin = () => {
    if (this.state.score === 12) {
      this.setState({ 
        winStatus: 'You win!'
      }, () => {
        if (this.state.score > this.state.highScore) {
          this.setState({
            highScore: this.state.score,
            gameOver: true
          })
        }
      })
      return true
    }
  }

  loss = () => {
    this.setState({ 
      winStatus: 'You lose',
      gameOver: true
    }, () => {
      if (this.state.score > this.state.highScore) {
        this.setState({ 
          highScore: this.state.score,
          score: 0
        })
      }
    })
  }

  handleGameOver = () => {
    let newImages = this.state.images
    newImages.map(image => {
      image.clicked = false
      return image
    })
    this.setState({
      score: 0,
      winStatus: '',
      gameOver: false,
      images: newImages
    })
  }

  shuffle = arr => {
    arr.sort(() => Math.random() - 0.5)
    return arr
  }

  handleClick = (id) => {

    // if it has already been clicked, they lose
    if (this.state.images[id].clicked) {
      this.loss()
    } else {
      // mark image as clicked and increment score
      let newImages = this.state.images
      newImages[id].clicked = true
      this.setState({ images: newImages }, () => {
        this.incrementScore()
      })
    }
  }

  render() {
    let images = [
      <Image key='0' id='0' handleClick={this.handleClick} imgSrc={require('./images/sb12.jpg')} />,
      <Image key='1' id='1' handleClick={this.handleClick} imgSrc={require('./images/sb1.jpg')} />,
      <Image key='2' id='2' handleClick={this.handleClick} imgSrc={require('./images/sb2.jpeg')}/>,
      <Image key='3' id='3' handleClick={this.handleClick} imgSrc={require('./images/sb3.jpg')} />,
      <Image key='4' id='4' handleClick={this.handleClick} imgSrc={require('./images/sb4.jpg')} />,
      <Image key='5' id='5' handleClick={this.handleClick} imgSrc={require('./images/sb5.jpg')} />,
      <Image key='6' id='6' handleClick={this.handleClick} imgSrc={require('./images/sb6.jpg')} />,
      <Image key='7' id='7' handleClick={this.handleClick} imgSrc={require('./images/sb7.jpg')}/>,
      <Image key='8' id='8' handleClick={this.handleClick} imgSrc={require('./images/sb8.jpg')} />,
      <Image key='9' id='9' handleClick={this.handleClick} imgSrc={require('./images/sb9.png')} />,
      <Image key='10' id='10' handleClick={this.handleClick} imgSrc={require('./images/sb10.webp')} />,
      <Image key='11' id='11' handleClick={this.handleClick} imgSrc={require('./images/sb11.jpg')} />
    ]

    this.shuffle(images)

    return (
      <div>
        <div className="scores">
          <h1>Score: {this.state.score}</h1>
          <h1>High Score: {this.state.highScore}</h1>
          <h2>Try to click all images without clicking the same one twice</h2>
        </div>
        <h2>{this.state.winStatus}</h2>
        <button className={this.state.gameOver ? "play-again" : "hidden"} onClick={this.handleGameOver}>Play again?</button>
        <div className="img-wrapper">

          {images}

        </div>
      </div>
    )
  }
}

export default Container