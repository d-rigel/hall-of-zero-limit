import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from '../components/ProgressBar'

function LoadingScreen() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => navigate('/landing'), 500)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center geometric-pattern"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1: Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(63, 220, 119, 0.4), transparent)'
          }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(63, 220, 119, 0.3), transparent)'
          }}
        />

        {/* Layer 2: Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5
            }}
            className="absolute w-20 h-20 border-2"
            style={{
              borderColor: 'var(--wakanda-green)',
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-8">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-8 mb-12"
        >
          {/* Sprite Logo Placeholder */}
          <div className="text-4xl font-bold tracking-wider" style={{ color: 'var(--wakanda-green)' }}>
            SPRITE
          </div>
          
          <div className="text-3xl" style={{ color: 'var(--wakanda-green)' }}>×</div>
          
          {/* Wakanda Forever Logo Placeholder */}
          <div className="text-center">
            <div className="text-sm tracking-widest mb-1" style={{ color: 'var(--wakanda-white)' }}>
              MARVEL STUDIOS
            </div>
            <div className="text-2xl font-bold tracking-wider" style={{ color: 'var(--wakanda-white)' }}>
              WAKANDA FOREVER
            </div>
            <div className="text-xs tracking-widest mt-1" style={{ color: 'var(--wakanda-green)' }}>
              ONLY IN THEATERS
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="heading-xl text-center mb-16 glow-text"
          style={{ color: 'var(--wakanda-white)' }}
        >
          THE HALL OF
          <br />
          <span style={{ color: 'var(--wakanda-green)' }}>ZERO LIMITS</span>
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-md"
        >
          <ProgressBar progress={progress} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-right mt-2 text-sm tracking-wider"
            style={{ color: 'var(--wakanda-green)' }}
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen