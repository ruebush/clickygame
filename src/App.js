import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Card from './components/Card/Card.js';
import cards from './cans.json';
import './index.css';

class App extends Component {

  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    clickedCards: [],
  }

  // game function

  updateScore = (id) => {

    // if the same image is clicked twice ..

    if (this.state.clickedCards.includes(id)) {
      alert('This can has already been clicked! Try again!');
      this.setState({ score: 0, clickedCards: [] })
    }

    // keep going until the same card is selected again or max score reached

    else {
      this.setState({ clickedCards: [...this.state.clickedCards, id] })
      this.setState({ score: this.state.score + 1 })

      // if new high score is reached 

      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }
      // if user gets max score and wins 
      
      if (this.state.score === 12) {
        this.setState({ score: 0, highScore: 12, clickedCards: [], cards: cards })
        alert('You got them all! Way to go!');
      }
    }
  }

  
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  randomCards = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ randomize: cards });
  }

  // renders app to bootstrap layout

  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <div className="container">
          {this.state.cards.map(cardRender => (
            <div className='col-md-3' id={cardRender.id}>
              <Card
                image={cardRender.image}
                randomCards={() => { this.randomCards(this.state.cards) }}
                updateScore={() => { this.updateScore(cardRender.id) }} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
