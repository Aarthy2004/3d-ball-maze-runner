import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const MazeGame = ({ level, gameState, onGameComplete, onMovesUpdate, isMobile }) => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const ballRef = useRef(null)
  const wallsRef = useRef([])
  const exitRef = useRef(null)
  const animationRef = useRef(null)
  const keysRef = useRef({})
  
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0.5, z: 0 })
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 })
  const [isOnGround, setIsOnGround] = useState(true)

  // Level configuration
  const getLevelConfig = useCallback((levelNum) => {
    const baseSize = 20 + levelNum * 5
    return {
      size: baseSize,
      ballStart: { x: 0, y: 0.5, z: 0 },
      exit: { x: (baseSize/2) - 2, y: 0.05, z: (baseSize/2) - 2 }
    }
  }, [])

  const currentConfig = getLevelConfig(level)

  // Initialize scene
  useEffect(() => {
    if (!mountRef.current) return

    // Clear previous
    if (mountRef.current.children.length > 0) {
      mountRef.current.innerHTML = ''
    }

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a1a)
    scene.fog = new THREE.Fog(0x0a0a1a, 10, 100)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(15, 20, 15)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    mountRef.current.appendChild(renderer.domElement)

    // Controls (desktop only)
    if (!isMobile) {
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(currentConfig.size * 2, currentConfig.size * 2)
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a2e })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    // Ball
    const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32)
    const ballMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff6b6b,
      roughness: 0.3,
      metalness: 0.7
    })
    const ball = new THREE.Mesh(ballGeometry, ballMaterial)
    ball.position.set(
      currentConfig.ballStart.x,
      currentConfig.ballStart.y,
      currentConfig.ballStart.z
    )
    ball.castShadow = true
    scene.add(ball)

    // Ball light
    const ballLight = new THREE.PointLight(0xff6b6b, 1, 15)
    ball.add(ballLight)

    // Generate maze walls
    const walls = []
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x3a506b })
    const halfSize = currentConfig.size / 2

    // Boundary walls
    const boundaryWalls = [
      [0, 1, -halfSize, currentConfig.size, 2, 0.5], // North
      [0, 1, halfSize, currentConfig.size, 2, 0.5],  // South
      [-halfSize, 1, 0, 0.5, 2, currentConfig.size], // West
      [halfSize, 1, 0, 0.5, 2, currentConfig.size],  // East
    ]

    // Random interior walls
    const interiorWalls = []
    for (let i = -halfSize + 2; i < halfSize; i += 4) {
      for (let j = -halfSize + 2; j < halfSize; j += 4) {
        if (Math.random() < 0.4 && !(i === 0 && j === 0)) {
          const width = Math.random() > 0.5 ? 3 : 0.5
          const depth = width === 3 ? 0.5 : 3
          interiorWalls.push([i, 1, j, width, 2, depth])
        }
      }
    }

    const allWalls = [...boundaryWalls, ...interiorWalls]

    allWalls.forEach(wall => {
      const wallGeometry = new THREE.BoxGeometry(wall[3], wall[4], wall[5])
      const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial)
      wallMesh.position.set(wall[0], wall[1], wall[2])
      wallMesh.castShadow = true
      scene.add(wallMesh)
      walls.push({
        mesh: wallMesh,
        x: wall[0], y: wall[1], z: wall[2],
        width: wall[3], height: wall[4], depth: wall[5]
      })
    })

    // Exit
    const exitGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32)
    const exitMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.3
    })
    const exit = new THREE.Mesh(exitGeometry, exitMaterial)
    exit.position.set(currentConfig.exit.x, currentConfig.exit.y, currentConfig.exit.z)
    exit.rotation.x = Math.PI / 2
    scene.add(exit)

    // Exit light
    const exitLight = new THREE.PointLight(0x00ff88, 2, 20)
    exitLight.position.set(currentConfig.exit.x, 3, currentConfig.exit.z)
    scene.add(exitLight)

    // Store refs
    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer
    ballRef.current = ball
    wallsRef.current = walls
    exitRef.current = exit

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)
    renderer.render(scene, camera)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [level, currentConfig, isMobile])

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'playing') return
      const key = e.key.toLowerCase()
      if (['arrowup', 'w'].includes(key)) keysRef.current.up = true
      if (['arrowdown', 's'].includes(key)) keysRef.current.down = true
      if (['arrowleft', 'a'].includes(key)) keysRef.current.left = true
      if (['arrowright', 'd'].includes(key)) keysRef.current.right = true
      if (key === ' ' && isOnGround) {
        setVelocity(prev => ({ ...prev, y: 7 }))
        setIsOnGround(false)
      }
      if (key === 'r') {
        ballRef.current.position.set(
          currentConfig.ballStart.x,
          currentConfig.ballStart.y,
          currentConfig.ballStart.z
        )
        setBallPosition(currentConfig.ballStart)
        setVelocity({ x: 0, y: 0, z: 0 })
      }
    }

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase()
      if (['arrowup', 'w'].includes(key)) keysRef.current.up = false
      if (['arrowdown', 's'].includes(key)) keysRef.current.down = false
      if (['arrowleft', 'a'].includes(key)) keysRef.current.left = false
      if (['arrowright', 'd'].includes(key)) keysRef.current.right = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameState, isOnGround, currentConfig])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing' || !ballRef.current) return

    let moveCount = 0
    let lastMoveTime = 0

    const animate = (currentTime) => {
      animationRef.current = requestAnimationFrame(animate)
      
      const ball = ballRef.current
      const keys = keysRef.current
      
      // Apply gravity
      setVelocity(prev => ({ ...prev, y: prev.y - 0.1 }))
      
      // Move ball
      const speed = 0.2
      let dx = 0, dz = 0
      if (keys.up) dz -= speed
      if (keys.down) dz += speed
      if (keys.left) dx -= speed
      if (keys.right) dx += speed
      
      // Apply velocity
      setVelocity(prev => ({
        x: prev.x * 0.9 + dx,
        y: prev.y,
        z: prev.z * 0.9 + dz
      }))
      
      // Update position
      const newPosition = {
        x: ball.position.x + velocity.x,
        y: ball.position.y + velocity.y,
        z: ball.position.z + velocity.z
      }
      
      // Check floor
      if (newPosition.y < 0.5) {
        newPosition.y = 0.5
        setVelocity(prev => ({ ...prev, y: 0 }))
        setIsOnGround(true)
      } else {
        setIsOnGround(false)
      }
      
      // Check walls (simple collision)
      const ballRadius = 0.5
      let finalPosition = { ...newPosition }
      
      wallsRef.current.forEach(wall => {
        const wallHalfWidth = wall.width / 2
        const wallHalfDepth = wall.depth / 2
        
        const distX = Math.abs(finalPosition.x - wall.x)
        const distZ = Math.abs(finalPosition.z - wall.z)
        
        if (distX < wallHalfWidth + ballRadius && distZ < wallHalfDepth + ballRadius) {
          if (distX > distZ) {
            const direction = finalPosition.x > wall.x ? 1 : -1
            finalPosition.x = wall.x + direction * (wallHalfWidth + ballRadius)
            setVelocity(prev => ({ ...prev, x: -prev.x * 0.5 }))
          } else {
            const direction = finalPosition.z > wall.z ? 1 : -1
            finalPosition.z = wall.z + direction * (wallHalfDepth + ballRadius)
            setVelocity(prev => ({ ...prev, z: -prev.z * 0.5 }))
          }
        }
      })
      
      // Apply final position
      ball.position.set(finalPosition.x, finalPosition.y, finalPosition.z)
      setBallPosition(finalPosition)
      
      // Count moves
      if ((dx !== 0 || dz !== 0) && currentTime - lastMoveTime > 100) {
        lastMoveTime = currentTime
        moveCount++
        onMovesUpdate(moveCount)
      }
      
      // Check win
      const distance = Math.sqrt(
        Math.pow(finalPosition.x - currentConfig.exit.x, 2) +
        Math.pow(finalPosition.z - currentConfig.exit.z, 2)
      )
      if (distance < 2) onGameComplete()
      
      // Camera follow (mobile)
      if (isMobile && cameraRef.current) {
        cameraRef.current.position.x = finalPosition.x
        cameraRef.current.position.y = finalPosition.y + 15
        cameraRef.current.position.z = finalPosition.z + 15
        cameraRef.current.lookAt(finalPosition.x, 0, finalPosition.z)
      }
      
      // Render
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [gameState, velocity, currentConfig, onGameComplete, onMovesUpdate, isMobile])

  return <div className="game-canvas" ref={mountRef} />
}

export default MazeGame