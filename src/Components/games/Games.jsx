import React, { useState } from 'react';
import DinoGame from './DinoGame/DinoGame';
import TicTacToe from './TicTacToe/TicTacToe';
import './Games.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <section className="games-section">
      <div className="games-header">
        <h1>Mini <span>Arcade</span></h1>
        <p>Take a break and test your skills!</p>
      </div>

      {/* Game Selection Buttons */}
      <div className="game-selector">
        <button 
          className={`game-btn ${activeGame === 'tictactoe' ? 'active' : ''}`}
          onClick={() => setActiveGame('tictactoe')}
        >
          ⭕ Tic Tac Toe
        </button>
        <button 
          className={`game-btn ${activeGame === 'dino' ? 'active' : ''}`}
          onClick={() => setActiveGame('dino')}
        >
          🦖 Dino Runner
        </button>
      </div>

      {/* Game Display Area */}
      <div className="game-display">
        {!activeGame && <p className="placeholder-text">Select a game to start playing!</p>}
        {activeGame === 'tictactoe' && <TicTacToe />}
        {activeGame === 'dino' && <DinoGame />}
      </div>
    </section>
  );
};

export default Games;