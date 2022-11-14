import Loader from "../loader/Loader";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CouponGenerator from "../couponGenerator/CouponGenerator";
import "./Game.css";
import axios from "axios";
const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 170;
let discount = 0;

function Game() {
  const URL = process.env.REACT_APP_API_URL;
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [obstacleHight, setObstacleHight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHight;
  const [topScores, setTopScores] = useState([]);
  const [level, setLevel] = useState(-2);
  const [gameOver, setGameOver] = useState(true);
  const [scoreBreaker, setScoreBreaker] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  discount = 0;
  const fetchScores = async () => {
    try {
      const res = await axios.get(`${URL}/scores/`);
      setTopScores(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchScores();
  }, [gameOver]);

  useEffect(() => {
    let timeId;
    if (gameHasStarted && birdPosition < 610) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameHasStarted]);

  useEffect(() => {
    let obstacleId;
    if (gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 15);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
      setObstacleHight(
        Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );
      setLevel((level) => level + 1);
    }
  }, [gameHasStarted, obstacleLeft]);

  useEffect(() => {
    const hitTopObstacle = birdPosition >= 125 && birdPosition < obstacleHight;
    const hitBottomObstacle =
      birdPosition <= 610 && birdPosition >= 610 - bottomObstacleHeight;
    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      (hitTopObstacle || hitBottomObstacle)
    ) {
      setGameHasStarted(false);
      setGameOver(true);
      discount = 0;
      setLevel((level) => level - 2);
    }
  }, [birdPosition, obstacleHight, bottomObstacleHeight, obstacleLeft]);

  const handleClick = () => {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if (!gameHasStarted) {
      setGameHasStarted(true);
      setGameOver(false);
      setLevel(0);
    }
    if (newBirdPosition < 125) {
      setBirdPosition(125);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  if (topScores.length > 0) {
    if (level > topScores[0].score) {
      discount = 15;
    } else if (level > topScores[1].score || level > topScores[2].score) {
      discount = 10;
    }
  }

  console.log(discount);
  useEffect(() => {
    if (topScores.length > 0) {
      console.log("in top scores");

      if (level + 2 > topScores[2].score) {
        axios
          .post(`${URL}/scores/`, { newScore: level + 2 })
          .catch((error) => console.log(error));
      }
    }
  }, [gameOver]);

  setTimeout(function () {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="gameContainer">
        <Div onClick={handleClick}>
          <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
            <Obstacle
              top={0}
              width={OBSTACLE_WIDTH}
              height={obstacleHight}
              left={obstacleLeft}
            />
            <Obstacle
              top={GAME_HEIGHT - (obstacleHight + bottomObstacleHeight)}
              width={OBSTACLE_WIDTH}
              height={bottomObstacleHeight}
              left={obstacleLeft}
            />
            <Bird size={BIRD_SIZE} top={birdPosition} />
          </GameBox>
          <span>{level}</span>
        </Div>
        <div className="topScoresContainer">
          <div className="topScoresTitle">Top Scores</div>
          <div className="scores">
            {topScores.map((score, i) => {
              return (
                <div className="scores">
                  {i + 1}. {score.score}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
        {discount > 5 && gameOver ? (
          <CouponGenerator discount={discount} />
        ) : (
          ""
        )}
      </div>
      {gameOver && (
        <div className="gameRulesContainer">
          <div className="gameRules">
            <div className="gameRulesTitle">Rules Of the Game</div>
            <div className="rules">
              <div className="rule">
                1. Click on the blue square to start the game
              </div>
              <div className="rules">
                2. Keep clicking to make the dot keep jumping
              </div>
              <div className="rules">
                3. Beat one of the bottom 2 scores to earn a 10% discount or
                beat number 1 score to earn a 15% discount the{" "}
              </div>
              <div className="rules">
                {" "}
                After loosing simple press the blue square again to start over
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;

const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;
const Div = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;
const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: blue;
  overflow: hidden;
`;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  background-color: green;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;
