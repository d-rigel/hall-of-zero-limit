import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAppStore from '../store/useAppStore'
import Button from '../components/Button'
import QuizNavigation from '../components/QuizNavigation'

function QuizIntro() {
  const navigate = useNavigate()
  const startQuiz = useAppStore((state) => state.startQuiz)

  const handleBeginQuiz = () => {
    startQuiz()
    navigate('/quiz/question/19')
  }

  const handleClose = () => {
    navigate('/inspiration/5')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center geometric-pattern relative"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Navigation */}
      <QuizNavigation onClose={handleClose} showPrevious={false} />

      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(63, 220, 119, 0.3), transparent)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block px-6 py-2 mb-8 border-2"
            style={{ 
              borderColor: 'var(--wakanda-green)',
              color: 'var(--wakanda-green)'
            }}
          >
            <span className="text-sm font-semibold tracking-widest">DISCOVER YOUR GIFT</span>
          </div>

          {/* Title */}
          <h1 className="heading-lg mb-8 glow-text" style={{ color: 'var(--wakanda-white)' }}>
            THE HALL OF ZERO LIMITS
            <br />
            <span style={{ color: 'var(--wakanda-green)' }}>APTITUDE QUIZ</span>
          </h1>

          {/* Description */}
          <p className="body-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--wakanda-white)', opacity: 0.8 }}
          >
            Every individual possesses a unique gift waiting to be discovered. Through a series of choices, 
            we'll help you uncover the talent that defines your path in the Hall of Zero Limits.
            <br /><br />
            There are no wrong answers—only different paths to greatness.
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-0.5 mx-auto mb-12"
            style={{ backgroundColor: 'var(--wakanda-green)' }}
          />

          {/* Begin Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button onClick={handleBeginQuiz}>
              BEGIN QUIZ
            </Button>
          </motion.div>

          {/* Info Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-sm tracking-wider"
            style={{ color: 'var(--wakanda-white)', opacity: 0.5 }}
          >
            5-7 questions • 2-3 minutes
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default QuizIntro