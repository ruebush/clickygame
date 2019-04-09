import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
<div className="jumbotron">
  <h1>Coca Cola Memory Game</h1>
  <p>Pick a new can each time</p>
  <p>Score: {props.score} <span> High Score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;
