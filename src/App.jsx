import React, { useState, useEffect } from 'react'
import Game from './components/Game'
import UI from './components/UI'
import { getTotalLevels } from './game/levels'

function App() {
  const [gameState, setGameState] = useState('menu') // menu, playing, won
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalLevels = getTotalLevels()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let timer
    if (gameState === 'playing') {
      timer = setInterval(() => setTime(prev => prev + 1), 1000)
    }
    return () => clearInterval(timer)
  }, [gameState])

  const startGame = () => {
    setGameState('playing')
    setMoves(0)
    setTime(0)
  }

  const resetGame = () => {
    setGameState('menu')
    setLevel(1)
    setScore(0)
    setMoves(0)
    setTime(0)
  }

  const handleLevelComplete = () => {
    const levelScore = Math.max(100, 1000 - (time * 10) - (moves * 5) + (level * 100))
    setScore(prev => prev + levelScore)
    setGameState('won')
  }

  const nextLevel = () => {
    if (level < totalLevels) {
      setLevel(prev => prev + 1)
      setGameState('playing')
      setMoves(0)
      setTime(0)
    } else {
      setGameState('menu')
    }
  }

  const handleMovesUpdate = (newMoves) => {
    setMoves(newMoves)
  }

  return (
    <div className="app">
      <UI
        gameState={gameState}
        level={level}
        totalLevels={totalLevels}
        score={score}
        moves={moves}
        time={time}
        isMobile={isMobile}
        onStart={startGame}
        onReset={resetGame}
        onNextLevel={nextLevel}
      />
      
      <div className="game-area">
        <Game
          level={level}
          gameState={gameState}
          onGameComplete={handleLevelComplete}
          onMovesUpdate={handleMovesUpdate}
          isMobile={isMobile}
        />
      </div>
    </div>
  )
}

export default App