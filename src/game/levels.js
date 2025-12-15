export const levels = [
  {
    id: 1,
    name: "Beginner Maze",
    difficulty: "Easy",
    ballStart: { x: 0, y: 0.5, z: 0 },
    exit: { x: 12, y: 0.05, z: 12 },
    size: 30,
    description: "A simple maze to learn the controls",
    walls: [
      // Boundary walls (thicker to prevent escape)
      { x: 0, y: 1, z: -14.5, width: 30, height: 2, depth: 1, color: 0x3a506b }, // North
      { x: 0, y: 1, z: 14.5, width: 30, height: 2, depth: 1, color: 0x3a506b },  // South
      { x: -14.5, y: 1, z: 0, width: 1, height: 2, depth: 30, color: 0x3a506b }, // West
      { x: 14.5, y: 1, z: 0, width: 1, height: 2, depth: 30, color: 0x3a506b },  // East
      
      // Simple obstacles (placed to guide player)
      { x: 0, y: 1, z: -8, width: 12, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 6, y: 1, z: -4, width: 0.5, height: 2, depth: 8, color: 0x4361ee },
      { x: -6, y: 1, z: 4, width: 8, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 8, y: 1, z: 8, width: 0.5, height: 2, depth: 6, color: 0x4361ee },
    ]
  },
  {
    id: 2,
    name: "Winding Path",
    difficulty: "Easy",
    ballStart: { x: -13, y: 0.5, z: -13 },
    exit: { x: 13, y: 0.05, z: 13 },
    size: 30,
    description: "Navigate through winding corridors",
    walls: [
      // Boundary
      { x: 0, y: 1, z: -14.5, width: 30, height: 2, depth: 1, color: 0x3a506b },
      { x: 0, y: 1, z: 14.5, width: 30, height: 2, depth: 1, color: 0x3a506b },
      { x: -14.5, y: 1, z: 0, width: 1, height: 2, depth: 30, color: 0x3a506b },
      { x: 14.5, y: 1, z: 0, width: 1, height: 2, depth: 30, color: 0x3a506b },
      
      // Maze pattern
      { x: 0, y: 1, z: -10, width: 20, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 10, y: 1, z: -5, width: 0.5, height: 2, depth: 10, color: 0x4361ee },
      { x: -8, y: 1, z: 0, width: 16, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 0, y: 1, z: 5, width: 15, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 7, y: 1, z: 10, width: 0.5, height: 2, depth: 8, color: 0x4361ee },
      { x: -12, y: 1, z: 8, width: 8, height: 2, depth: 0.5, color: 0x4361ee },
      { x: -5, y: 1, z: -6, width: 0.5, height: 2, depth: 8, color: 0x4361ee },
    ]
  },
  {
    id: 3,
    name: "The Labyrinth",
    difficulty: "Medium",
    ballStart: { x: -13, y: 0.5, z: -13 },
    exit: { x: 13, y: 0.05, z: 13 },
    size: 30,
    description: "A more complex maze with dead ends",
    walls: [
      // Boundary
      { x: 0, y: 1, z: -14.5, width: 30, height: 2.5, depth: 1, color: 0x3a506b },
      { x: 0, y: 1, z: 14.5, width: 30, height: 2.5, depth: 1, color: 0x3a506b },
      { x: -14.5, y: 1, z: 0, width: 1, height: 2.5, depth: 30, color: 0x3a506b },
      { x: 14.5, y: 1, z: 0, width: 1, height: 2.5, depth: 30, color: 0x3a506b },
      
      // Complex maze
      { x: 0, y: 1, z: -12, width: 25, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 12, y: 1.5, z: -6, width: 0.5, height: 3, depth: 12, color: 0x4361ee },
      { x: -10, y: 1, z: 0, width: 20, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 8, y: 1, z: 6, width: 0.5, height: 2, depth: 12, color: 0x4361ee },
      { x: -5, y: 1, z: 8, width: 10, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 0, y: 1.5, z: 12, width: 15, height: 3, depth: 0.5, color: 0x4361ee },
      { x: -12, y: 1, z: -8, width: 0.5, height: 2, depth: 10, color: 0x4361ee },
      { x: 5, y: 1, z: -4, width: 10, height: 2, depth: 0.5, color: 0x4361ee },
      { x: -8, y: 1.5, z: 4, width: 0.5, height: 3, depth: 8, color: 0x4361ee },
      { x: 10, y: 1, z: 2, width: 8, height: 2, depth: 0.5, color: 0x4361ee },
    ]
  },
  {
    id: 4,
    name: "Dead End Alley",
    difficulty: "Hard",
    ballStart: { x: -13, y: 0.5, z: -13 },
    exit: { x: 13, y: 0.05, z: 13 },
    size: 30,
    description: "Many dead ends, find the correct path",
    walls: [
      // Boundary
      { x: 0, y: 1.5, z: -14.5, width: 30, height: 3, depth: 1, color: 0x3a506b },
      { x: 0, y: 1.5, z: 14.5, width: 30, height: 3, depth: 1, color: 0x3a506b },
      { x: -14.5, y: 1.5, z: 0, width: 1, height: 3, depth: 30, color: 0x3a506b },
      { x: 14.5, y: 1.5, z: 0, width: 1, height: 3, depth: 30, color: 0x3a506b },
      
      // Challenging maze
      { x: 0, y: 2, z: -12, width: 28, height: 4, depth: 0.5, color: 0x4361ee },
      { x: 14, y: 1.5, z: -8, width: 0.5, height: 3, depth: 16, color: 0x4361ee },
      { x: -12, y: 1, z: -4, width: 24, height: 2, depth: 0.5, color: 0x4361ee },
      { x: 10, y: 2, z: 0, width: 0.5, height: 4, depth: 20, color: 0x4361ee },
      { x: -8, y: 1.5, z: 4, width: 16, height: 3, depth: 0.5, color: 0x4361ee },
      { x: 0, y: 1, z: 8, width: 15, height: 2, depth: 0.5, color: 0x4361ee },
      { x: -14, y: 2, z: 12, width: 0.5, height: 4, depth: 16, color: 0x4361ee },
      { x: 5, y: 1.5, z: -10, width: 10, height: 3, depth: 0.5, color: 0x4361ee },
      { x: -10, y: 1, z: 10, width: 0.5, height: 2, depth: 8, color: 0x4361ee },
      { x: 8, y: 2, z: 6, width: 4, height: 4, depth: 0.5, color: 0x4361ee },
      { x: -5, y: 1.5, z: -6, width: 0.5, height: 3, depth: 8, color: 0x4361ee },
      { x: 12, y: 1, z: 2, width: 4, height: 2, depth: 0.5, color: 0x4361ee },
      { x: -2, y: 2, z: 14, width: 4, height: 4, depth: 0.5, color: 0x4361ee },
    ]
  },
  {
    id: 5,
    name: "The Final Challenge",
    difficulty: "Expert",
    ballStart: { x: -13, y: 0.5, z: -13 },
    exit: { x: 13, y: 0.05, z: 13 },
    size: 30,
    description: "The ultimate test of skill and patience",
    walls: [
      // Boundary (taller)
      { x: 0, y: 2, z: -14.5, width: 30, height: 4, depth: 1, color: 0x3a506b },
      { x: 0, y: 2, z: 14.5, width: 30, height: 4, depth: 1, color: 0x3a506b },
      { x: -14.5, y: 2, z: 0, width: 1, height: 4, depth: 30, color: 0x3a506b },
      { x: 14.5, y: 2, z: 0, width: 1, height: 4, depth: 30, color: 0x3a506b },
      
      // Extremely complex maze
      { x: 0, y: 2.5, z: -12, width: 28, height: 5, depth: 0.5, color: 0x4361ee },
      { x: 14, y: 3, z: -8, width: 0.5, height: 6, depth: 16, color: 0x4361ee },
      { x: -12, y: 2, z: -4, width: 24, height: 4, depth: 0.5, color: 0x4361ee },
      { x: 10, y: 2.5, z: 0, width: 0.5, height: 5, depth: 20, color: 0x4361ee },
      { x: -8, y: 2, z: 4, width: 16, height: 4, depth: 0.5, color: 0x4361ee },
      { x: 0, y: 3, z: 8, width: 15, height: 6, depth: 0.5, color: 0x4361ee },
      { x: -14, y: 2.5, z: 12, width: 0.5, height: 5, depth: 16, color: 0x4361ee },
      { x: 5, y: 2, z: -10, width: 10, height: 4, depth: 0.5, color: 0x4361ee },
      { x: -10, y: 3, z: 10, width: 0.5, height: 6, depth: 8, color: 0x4361ee },
      { x: 8, y: 2.5, z: 6, width: 4, height: 5, depth: 0.5, color: 0x4361ee },
      { x: -5, y: 2, z: -6, width: 0.5, height: 4, depth: 8, color: 0x4361ee },
      { x: 12, y: 3, z: 2, width: 4, height: 6, depth: 0.5, color: 0x4361ee },
      { x: -2, y: 2.5, z: 14, width: 4, height: 5, depth: 0.5, color: 0x4361ee },
      { x: 6, y: 2, z: -2, width: 12, height: 4, depth: 0.5, color: 0x4361ee },
      { x: -4, y: 3, z: 2, width: 8, height: 6, depth: 0.5, color: 0x4361ee },
      { x: 2, y: 2, z: 10, width: 0.5, height: 4, depth: 8, color: 0x4361ee },
      { x: -14, y: 2.5, z: -6, width: 12, height: 5, depth: 0.5, color: 0x4361ee },
      { x: 8, y: 3, z: -14, width: 4, height: 6, depth: 0.5, color: 0x4361ee },
      { x: -6, y: 2, z: 8, width: 0.5, height: 4, depth: 4, color: 0x4361ee },
      { x: 10, y: 2.5, z: 12, width: 8, height: 5, depth: 0.5, color: 0x4361ee },
    ]
  }
];

export const getLevelById = (id) => {
  return levels.find(level => level.id === id) || levels[0];
};

export const getTotalLevels = () => levels.length;

export const getLevelScore = (levelId, time, moves) => {
  const level = getLevelById(levelId);
  const baseScore = 1000;
  const timeBonus = Math.max(0, 300 - time);
  const moveBonus = Math.max(0, 200 - moves);
  const difficultyMultiplier = {
    'Easy': 1,
    'Medium': 1.5,
    'Hard': 2,
    'Expert': 3
  }[level.difficulty] || 1;
  
  return Math.max(100, (baseScore + timeBonus + moveBonus) * difficultyMultiplier);
};