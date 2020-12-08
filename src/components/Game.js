import React, { useState, useEffect } from "react";
import _ from "lodash";
import Card from "./Card";
import uniqid from "uniqid";

function Game(props) {
  const [score, setScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);
  const [seen, setSeen] = useState([]);
  const cardPool = props.cards;
  const [currentCards, setCurrentCards] = useState(_.sampleSize(cardPool, 4));

  useEffect(() => {
    setCurrentCards(_.sampleSize(cardPool, 4));
    if (new Set(seen).size !== seen.length) {
      if (score > highScore) {
        setHighScore(score);
      }
      setSeen([]);
      setScore(-1);
    } else {
      setScore((prevScore) => prevScore + 1);
    }
  }, [seen]);

  return (
    <div>
      <h1>Memory Cards - SMITE edition</h1>
      <p>
        Try to only click gods you haven't selected before. Score will reset on
        selecting a god twice.
      </p>
      <h2>Current Score: {score} </h2>
      <h2>High Score: {highScore} </h2>
      {currentCards.map((card) => {
        return (
          <Card
            key={uniqid()}
            name={card.name}
            image={card.image}
            handleClick={() =>
              setSeen((prevSeen) => prevSeen.concat(card.name))
            }
          />
        );
      })}
    </div>
  );
}

export default Game;
