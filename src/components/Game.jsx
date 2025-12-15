import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { getLevelById } from '../game/levels'

const Game = ({ level, gameState, onGameComplete, onMovesUpdate, isMobile }) => {
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
  const [isJumping, setIsJumping] = useState(false)

  const currentLevel = getLevelById(level)
  const ballRadius = 0.5

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return

    // Clear previous
    if (mountRef.current.children.length > 0) {
      mountRef.current.innerHTML = ''
    }

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a1a)
    scene.fog = new THREE.Fog(0x0a0a1a, 10, currentLevel.size * 2)

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
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)

    // Orbit Controls for desktop
    if (!isMobile) {
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.minDistance = 5
      controls.maxDistance = 50
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(currentLevel.size * 2, currentLevel.size * 2)
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a2e,
      roughness: 0.8
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    // Create ball
    const ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32)
    const ballMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff6b6b,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0xff6b6b,
      emissiveIntensity: 0.2
    })
    const ball = new THREE.Mesh(ballGeometry, ballMaterial)
    ball.position.set(
      currentLevel.ballStart.x,
      currentLevel.ballStart.y,
      currentLevel.ballStart.z
    )
    ball.castShadow = true
    ball.receiveShadow = true
    scene.add(ball)

    // Ball light
    const ballLight = new THREE.PointLight(0xff6b6b, 1, 15)
    ball.add(ballLight)

    // Create walls
    const walls = []
    const wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3a506b,
      roughness: 0.7
    })

    currentLevel.walls.forEach(wall => {
      const wallGeometry = new THREE.BoxGeometry(wall.width, wall.height, wall.depth)
      const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial)
      wallMesh.position.set(wall.x, wall.y, wall.z)
      wallMesh.castShadow = true
      wallMesh.receiveShadow = true
      scene.add(wallMesh)
      walls.push({
        mesh: wallMesh,
        ...wall
      })
    })

    // Create exit
    const exitGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32)
    const exitMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.3
    })
    const exit = new THREE.Mesh(exitGeometry, exitMaterial)
    exit.position.set(currentLevel.exit.x, currentLevel.exit.y, currentLevel.exit.z)
    exit.rotation.x = Math.PI / 2
    exit.receiveShadow = true
    scene.add(exit)

    // Exit light
    const exitLight = new THREE.PointLight(0x00ff88, 2, 20)
    exitLight.position.set(currentLevel.exit.x, 3, currentLevel.exit.z)
    scene.add(exitLight)

    // Store references
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
    }
  }, [level, currentLevel, isMobile])

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'playing') return

      const key = e.key.toLowerCase()
      
      if (['arrowup', 'w'].includes(key)) {
        e.preventDefault()
        keysRef.current.up = true
      }
      if (['arrowdown', 's'].includes(key)) {
        e.preventDefault()
        keysRef.current.down = true
      }
      if (['arrowleft', 'a'].includes(key)) {
        e.preventDefault()
        keysRef.current.left = true
      }
      if (['arrowright', 'd'].includes(key)) {
        e.preventDefault()
        keysRef.current.right = true
      }
      
      if (key === ' ' && ballRef.current && ballRef.current.position.y <= 0.6) {
        e.preventDefault()
        setIsJumping(true)
        setVelocity(prev => ({ ...prev, y: 6 }))
      }
      
      if (key === 'r') {
        e.preventDefault()
        ballRef.current.position.set(
          currentLevel.ballStart.x,
          currentLevel.ballStart.y,
          currentLevel.ballStart.z
        )
        setBallPosition(currentLevel.ballStart)
        setVelocity({ x: 0, y: 0, z: 0 })
        setIsJumping(false)
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
  }, [gameState, currentLevel])

  // Improved collision detection function
  const checkCollision = (newPos, wall) => {
    const wallHalfWidth = wall.width / 2
    const wallHalfDepth = wall.depth / 2
    const wallHalfHeight = wall.height / 2
    
    // Calculate distance between ball center and wall center
    const dx = Math.abs(newPos.x - wall.x)
    const dy = Math.abs(newPos.y - wall.y)
    const dz = Math.abs(newPos.z - wall.z)
    
    // If ball is too far away on any axis, no collision
    if (dx > wallHalfWidth + ballRadius) return false
    if (dy > wallHalfHeight + ballRadius) return false
    if (dz > wallHalfDepth + ballRadius) return false
    
    // Collision detected
    return true
  }

  // Handle collision response
  const handleCollision = (ballPos, wall, vel) => {
    const wallHalfWidth = wall.width / 2
    const wallHalfDepth = wall.depth / 2
    
    const newPosition = { ...ballPos }
    const newVelocity = { ...vel }
    
    // Calculate penetration on each axis
    const penetrationX = wallHalfWidth + ballRadius - Math.abs(ballPos.x - wall.x)
    const penetrationZ = wallHalfDepth + ballRadius - Math.abs(ballPos.z - wall.z)
    
    // Resolve collision based on minimum penetration
    if (penetrationX < penetrationZ) {
      // X-axis collision
      const direction = ballPos.x > wall.x ? 1 : -1
      newPosition.x = wall.x + direction * (wallHalfWidth + ballRadius + 0.01)
      newVelocity.x = -newVelocity.x * 0.7 // Bounce with friction
    } else {
      // Z-axis collision
      const direction = ballPos.z > wall.z ? 1 : -1
      newPosition.z = wall.z + direction * (wallHalfDepth + ballRadius + 0.01)
      newVelocity.z = -newVelocity.z * 0.7 // Bounce with friction
    }
    
    return { position: newPosition, velocity: newVelocity }
  }

  // Game loop with improved physics
  useEffect(() => {
    if (gameState !== 'playing' || !ballRef.current) return

    let moveCount = 0
    let lastMoveTime = 0

    const animate = (currentTime) => {
      animationRef.current = requestAnimationFrame(animate)
      
      const ball = ballRef.current
      const keys = keysRef.current
      
      // Apply gravity if jumping
      if (isJumping || ball.position.y > 0.5) {
        setVelocity(prev => ({ ...prev, y: prev.y - 0.2 }))
      } else {
        setVelocity(prev => ({ ...prev, y: 0 }))
        ball.position.y = 0.5
        setIsJumping(false)
      }
      
      // Apply movement based on keys
      const moveSpeed = 0.1
      let moveX = 0
      let moveZ = 0
      
      if (keys.up) moveZ -= moveSpeed
      if (keys.down) moveZ += moveSpeed
      if (keys.left) moveX -= moveSpeed
      if (keys.right) moveX += moveSpeed
      
      // Update velocity with movement
      const newVelocity = {
        x: velocity.x * 0.95 + moveX,
        y: velocity.y,
        z: velocity.z * 0.95 + moveZ
      }
      
      // Limit maximum speed
      const maxSpeed = 0.5
      const currentSpeed = Math.sqrt(newVelocity.x ** 2 + newVelocity.z ** 2)
      if (currentSpeed > maxSpeed) {
        const scale = maxSpeed / currentSpeed
        newVelocity.x *= scale
        newVelocity.z *= scale
      }
      
      // Calculate new position
      const newPosition = {
        x: ball.position.x + newVelocity.x,
        y: ball.position.y + newVelocity.y,
        z: ball.position.z + newVelocity.z
      }
      
      // Check floor collision
      if (newPosition.y < ballRadius) {
        newPosition.y = ballRadius
        newVelocity.y = 0
      }
      
      // Check wall collisions
      let collisionDetected = false
      wallsRef.current.forEach(wall => {
        if (checkCollision(newPosition, wall)) {
          collisionDetected = true
          const collisionResult = handleCollision(newPosition, wall, newVelocity)
          newPosition.x = collisionResult.position.x
          newPosition.z = collisionResult.position.z
          newVelocity.x = collisionResult.velocity.x
          newVelocity.z = collisionResult.velocity.z
        }
      })
      
      // Check boundary collisions (prevent ball from going outside maze)
      const boundary = currentLevel.size / 2 - ballRadius - 0.5
      if (Math.abs(newPosition.x) > boundary) {
        newPosition.x = Math.sign(newPosition.x) * boundary
        newVelocity.x = -newVelocity.x * 0.5
      }
      if (Math.abs(newPosition.z) > boundary) {
        newPosition.z = Math.sign(newPosition.z) * boundary
        newVelocity.z = -newVelocity.z * 0.5
      }
      
      // Apply final position and velocity
      ball.position.set(newPosition.x, newPosition.y, newPosition.z)
      setBallPosition(newPosition)
      setVelocity(newVelocity)
      
      // Count moves only when actually moving
      const moving = keys.up || keys.down || keys.left || keys.right
      if (moving && currentTime - lastMoveTime > 200) {
        lastMoveTime = currentTime
        moveCount++
        onMovesUpdate(moveCount)
      }
      
      // Check win condition
      const distance = Math.sqrt(
        Math.pow(newPosition.x - currentLevel.exit.x, 2) +
        Math.pow(newPosition.z - currentLevel.exit.z, 2)
      )
      
      if (distance < 2) {
        onGameComplete()
      }
      
      // Update camera for mobile
      if (isMobile && cameraRef.current) {
        cameraRef.current.position.x = newPosition.x
        cameraRef.current.position.y = Math.max(8, newPosition.y + 8)
        cameraRef.current.position.z = newPosition.z + 12
        cameraRef.current.lookAt(newPosition.x, 0, newPosition.z)
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
  }, [gameState, velocity, isJumping, currentLevel, onGameComplete, onMovesUpdate, isMobile])

  return <div className="game-canvas" ref={mountRef} />
}

export default Game