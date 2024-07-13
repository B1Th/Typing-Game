import "./App.css";
import Alphabet from "./components/Alphabet";
import Home from "./components/Home";
import PlayGame from "./components/PlayGame";
import EndGame from "./components/EndGame";
import React, { useEffect, useState, useCallback } from "react";

function App() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (statusGame === "playing" && isTimerRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setStatusGame("endGame");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [statusGame, isTimerRunning]);

  const handleChangeStatusGame = (status = "playing") => {
    setStatusGame(status);
    if (status === "playing") {
      setScore({ right: 0, wrong: 0 });
      setTimeLeft(60);
      setIsTimerRunning(false);
    }
  };

  const handleChangeScore = (type = 1) => {
    if (type === 1) {
      setScore({ ...score, right: score.right + 1 });
    } else {
      setScore({ ...score, wrong: score.wrong + 1 });
    }
  };

  const startTimer = useCallback(() => {
    setIsTimerRunning(true);
  }, []);

  let showMain;
  switch (statusGame) {
    case "playing":
      showMain = (
        <PlayGame
          onGame={handleChangeStatusGame}
          onChangeScore={handleChangeScore}
          timeLeft={timeLeft}
          startTimer={startTimer}
        />
      );
      break;
    case "endGame":
      showMain = <EndGame onGame={handleChangeStatusGame} score={score} />;
      break;
    default:
      showMain = <Home onGame={handleChangeStatusGame} />;
      break;
  }

  return (
    <>
      <div className="bgImg"></div>
      <div className="App">{showMain}</div>
    </>
  );
}

export default App;
