import React from 'react'

const UI = ({ 
  gameState, 
  level, 
  totalLevels,
  score, 
  moves, 
  time, 
  isMobile,
  onStart,
  onReset,
  onNextLevel
}) => {
  
  const handleMobileControl = (direction) => {
    // In a real implementation, this would update the game state
    console.log(`Mobile control: ${direction}`)
  }

  return (
    <div className="ui-overlay">
      {/* Header */}
      <div className="header">
        <div className="logo">
          <h1>3D Ball Maze</h1>
        </div>
        
        {gameState === 'playing' && (
          <div className="header-stats">
            <div className="stat">
              <div className="stat-label">Level</div>
              <div className="stat-value">{level}/{totalLevels}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Score</div>
              <div className="stat-value">{score}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Moves</div>
              <div className="stat-value">{moves}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Time</div>
              <div className="stat-value">{time}s</div>
            </div>
          </div>
        )}
      </div>

      {/* Menu Screen */}
      {gameState === 'menu' && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h1 className="menu-title">Ball Maze Runner</h1>
            <p className="menu-description">
              Navigate the ball through 3D mazes to reach the exit!
              Avoid walls and complete each level as fast as possible.
            </p>
            <div className="menu-buttons">
              <button className="btn btn-primary" onClick={onStart}>
                Start Game
              </button>
              <button className="btn btn-secondary" onClick={onReset}>
                Reset Progress
              </button>
            </div>
            <div className="instructions" style={{ marginTop: '20px' }}>
              <p><strong>Controls:</strong> WASD to move • SPACE to jump • R to reset</p>
              <p><strong>Goal:</strong> Reach the green platform to complete each level</p>
            </div>
          </div>
        </div>
      )}

      {/* Win Screen */}
      {gameState === 'won' && (
        <div className="win-overlay">
          <div className="win-content">
            <h1 className="win-title">Level Complete!</h1>
            <div className="win-stats">
              <div className="win-stat">
                <div className="win-stat-label">Time</div>
                <div className="win-stat-value">{time}s</div>
              </div>
              <div className="win-stat">
                <div className="win-stat-label">Moves</div>
                <div className="win-stat-value">{moves}</div>
              </div>
              <div className="win-stat">
                <div className="win-stat-label">Level</div>
                <div className="win-stat-value">{level}</div>
              </div>
              <div className="win-stat">
                <div className="win-stat-label">Score</div>
                <div className="win-stat-value">+{Math.max(100, 1000 - (time * 10) - (moves * 5))}</div>
              </div>
            </div>
            <div className="win-buttons">
              {level < totalLevels ? (
                <button className="btn btn-success" onClick={onNextLevel}>
                  Next Level ({level + 1}/{totalLevels})
                </button>
              ) : (
                <button className="btn btn-success" onClick={onReset}>
                  Game Complete!
                </button>
              )}
              <button className="btn btn-primary" onClick={() => onStart()}>
                Play Again
              </button>
              <button className="btn btn-secondary" onClick={onReset}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Controls */}
      {isMobile && gameState === 'playing' && (
        <div className="controls">
          <div className="mobile-controls">
            <div className="mobile-row">
              <button 
                className="control-btn"
                onTouchStart={() => handleMobileControl('up')}
                onTouchEnd={() => {}}
              >
                ↑
              </button>
            </div>
            <div className="mobile-row">
              <button 
                className="control-btn"
                onTouchStart={() => handleMobileControl('left')}
                onTouchEnd={() => {}}
              >
                ←
              </button>
              <button 
                className="control-btn"
                onTouchStart={() => handleMobileControl('down')}
                onTouchEnd={() => {}}
              >
                ↓
              </button>
              <button 
                className="control-btn"
                onTouchStart={() => handleMobileControl('right')}
                onTouchEnd={() => {}}
              >
                →
              </button>
            </div>
            <div className="mobile-row">
              <button 
                className="control-btn"
                style={{ background: '#4caf50' }}
                onClick={() => handleMobileControl('jump')}
              >
                JUMP
              </button>
              <button 
                className="control-btn"
                style={{ background: '#f44336' }}
                onClick={onReset}
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="instructions">
        {gameState === 'playing' && !isMobile && (
          <p>WASD: Move • SPACE: Jump • R: Reset • Mouse: Rotate view</p>
        )}
        {gameState === 'playing' && isMobile && (
          <p>Use touch controls to move the ball</p>
        )}
      </div>
    </div>
  )
}

export default UI