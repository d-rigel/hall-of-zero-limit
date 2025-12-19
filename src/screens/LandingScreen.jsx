import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function LandingScreen() {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center geometric-pattern relative overflow-hidden"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(63, 220, 119, 0.15), transparent 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="heading-xl mb-8 glow-text"
          style={{ color: 'var(--wakanda-white)' }}
        >
          THE HALL OF
          <br />
          <span style={{ color: 'var(--wakanda-green)' }}>ZERO LIMITS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="body-lg mb-16 max-w-2xl mx-auto"
          style={{ color: 'var(--wakanda-white)', opacity: 0.8 }}
        >
          Step into a world where boundaries dissolve and possibilities expand.
          <br />
          Discover the stories of those who dared to dream beyond limits.
        </motion.p>

        {/* Enter Button with Hover Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative inline-block"
        >
          {/* Top Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-4 left-0 right-0 h-0.5"
            style={{ 
              backgroundColor: 'var(--wakanda-green)',
              transformOrigin: 'center'
            }}
          />

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate('/story/3')}
            className="btn-primary text-2xl px-24 py-6"
          >
            ENTER
          </button>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-4 left-0 right-0 h-0.5"
            style={{ 
              backgroundColor: 'var(--wakanda-green)',
              transformOrigin: 'center'
            }}
          />
        </motion.div>

        {/* Accessible Version Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <a
            href="https://wakanda-forever-master.dogstudio-dev.co/zerolimits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider underline hover:no-underline transition-all duration-300"
            style={{ color: 'var(--wakanda-white)', opacity: 0.6 }}
          >
            Accessible version
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-20">
        <div className="w-32 h-0.5" style={{ backgroundColor: 'var(--wakanda-green)' }} />
        <div className="w-32 h-0.5" style={{ backgroundColor: 'var(--wakanda-green)' }} />
      </div>
    </motion.div>
  )
}

export default LandingScreen