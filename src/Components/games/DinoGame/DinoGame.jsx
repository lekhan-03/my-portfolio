import React, { useState, useEffect, useRef, useCallback } from 'react';
import './DinoGame.css';

const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Lazy Initialize High Score
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('dinoHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const scoreRef = useRef(0);
  const gameLoopRef = useRef(null); 

  // --- GAME LOGIC ---

  // 1. Handle Game Over
  const handleGameOver = useCallback(() => {
    if (gameOver) return;

    setGameOver(true);
    setGameStarted(false);

    // Save High Score
    const currentScore = scoreRef.current;
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('dinoHighScore', currentScore);
    }

    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
  }, [gameOver, highScore]);

  // 2. Start Game
  const startGame = useCallback(() => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    scoreRef.current = 0;
    setIsJumping(false);
  }, []);

  // 3. Jump Action
  const jump = useCallback(() => {
    if (!isJumping && gameStarted && !gameOver) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    } else if (!gameStarted || gameOver) {
      startGame();
    }
  }, [isJumping, gameStarted, gameOver, startGame]);

  // --- EFFECT HOOKS ---

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  // The Game Loop
  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = setInterval(() => {
        // Update Score
        setScore((prev) => {
          const newScore = prev + 1;
          scoreRef.current = newScore; 
          return newScore;
        });

        // Collision Detection
        if (dinoRef.current && cactusRef.current) {
          const dinoTop = parseInt(window.getComputedStyle(dinoRef.current).getPropertyValue('top'));
          const cactusLeft = parseInt(window.getComputedStyle(cactusRef.current).getPropertyValue('left'));

          // --- FIXED COLLISION MATH ---
          // Dino is at top: 135px (Ground). Jump goes to 50px.
          // Collision happens if Dino is LOWER than 130px (meaning on ground)
          // AND Cactus is overlapping the Dino's X position (Left < 50px)
          if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 130) {
            handleGameOver();
          }
        }
      }, 100);
    }

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, handleGameOver]);

  return (
    <div className="dino-container" onClick={jump}>
      <div className="score-board">
        <span className="hi-score">HI {highScore.toString().padStart(5, '0')}</span>
        <span className="current-score">{score.toString().padStart(5, '0')}</span>
      </div>

      <div className="game-window">
        {(!gameStarted || gameOver) && (
          <div className="game-overlay">
            <h2>{gameOver ? 'GAME OVER' : 'DINO RUNNER'}</h2>
            <p>{gameOver ? `Score: ${score}` : 'Press Space to Start'}</p>
            {gameOver && (
              <button 
                className="restart-btn" 
                onClick={(e) => { e.stopPropagation(); startGame(); }}
              >
                Try Again ⟳
              </button>
            )}
          </div>
        )}

        <div ref={dinoRef} className={`dino ${isJumping ? 'jump' : ''}`}>🦖</div>
        <div ref={cactusRef} className={`cactus ${gameStarted && !gameOver ? 'animate' : ''}`}>🌵</div>
        <div className="ground"></div>
      </div>
    </div>
  );
};

export default DinoGame;