import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

function WelcomeScreen() {
  const navigate = useNavigate()

  const features = [
    {
      title: 'The Stories',
      description: 'Journey through five inspiring narratives of innovation and perseverance',
      path: '/story/3'
    },
    {
      title: 'Video Gallery',
      description: 'Watch exclusive content showcasing Wakanda\'s legacy and impact',
      path: '/videos'
    },
    {
      title: 'Inspiration Garden',
      description: 'Discover wisdom from Wakanda\'s greatest minds and leaders',
      path: '/inspiration'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-8 geometric-pattern"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="heading-xl mb-8 glow-text" style={{ color: 'var(--wakanda-white)' }}>
            WELCOME TO
            <br />
            <span style={{ color: 'var(--wakanda-green)' }}>THE HALL OF ZERO LIMITS</span>
          </h1>
          <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--wakanda-white)', opacity: 0.8 }}>
            An immersive experience celebrating innovation, courage, and the boundless potential
            of those who dare to dream beyond conventional boundaries.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.path}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="h-full p-8 border-2 transition-all duration-300 hover:border-(--wakanda-green) hover:glow-border"
                style={{ 
                  borderColor: 'rgba(63, 220, 119, 0.3)',
                  backgroundColor: 'var(--wakanda-dark-secondary)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:glow-text transition-all duration-300"
                  style={{ color: 'var(--wakanda-white)' }}
                >
                  {feature.title}
                </h3>
                <p className="mb-6" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  style={{ color: 'var(--wakanda-green)' }}
                >
                  <span className="font-semibold tracking-wider uppercase text-sm">Explore</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Button onClick={() => navigate('/landing')}>
            BEGIN YOUR JOURNEY
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-20 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-1 h-16"
              style={{ backgroundColor: 'var(--wakanda-green)' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default WelcomeScreen