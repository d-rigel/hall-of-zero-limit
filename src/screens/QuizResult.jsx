import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Sparkles, RotateCcw } from 'lucide-react'
import { getResultById } from '../data/quizData'
import useAppStore from '../store/useAppStore'
import Button from '../components/Button'

function QuizResult() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { resetQuiz } = useAppStore()
  
  const result = getResultById(parseInt(id))

  useEffect(() => {
    if (!result) {
      navigate('/quiz/intro')
    }
  }, [result, navigate])

  if (!result) return null

  const handleRetakeQuiz = () => {
    resetQuiz()
    navigate('/quiz/intro')
  }

  const handleClose = () => {
    resetQuiz()
    navigate('/inspiration/5')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center geometric-pattern relative overflow-hidden px-8"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Celebration Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: '50vw',
              y: '50vh'
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              ease: 'easeOut'
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--wakanda-green)' }}
          />
        ))}
      </div>

      {/* Glowing Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(63, 220, 119, 0.4), transparent)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.3
          }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center"
            style={{ 
              borderColor: 'var(--wakanda-green)',
              boxShadow: 'var(--glow-green-strong)'
            }}
          >
            <Sparkles size={40} style={{ color: 'var(--wakanda-green)' }} />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <span className="text-lg tracking-widest" style={{ color: 'var(--wakanda-green)' }}>
            {result.subtitle}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="heading-xl mb-8 glow-text"
          style={{ color: 'var(--wakanda-white)' }}
        >
          {result.title}
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-32 h-0.5 mx-auto mb-12"
          style={{ backgroundColor: 'var(--wakanda-green)' }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="body-lg mb-8 leading-relaxed"
          style={{ color: 'var(--wakanda-white)', opacity: 0.9 }}
        >
          {result.description}
        </motion.p>

        {/* Full Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="body-md mb-12 leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}
        >
          {result.fullDescription}
        </motion.p>

        {/* Path Taken */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-12 p-6 border"
          style={{ 
            borderColor: 'rgba(63, 220, 119, 0.3)',
            backgroundColor: 'rgba(26, 26, 46, 0.5)'
          }}
        >
          <p className="text-sm tracking-wider mb-2" style={{ color: 'var(--wakanda-green)' }}>
            YOUR PATH
          </p>
          <p className="text-sm" style={{ color: 'var(--wakanda-white)', opacity: 0.6 }}>
            {result.path}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button onClick={handleRetakeQuiz} variant="secondary">
            <RotateCcw size={18} className="mr-2" />
            RETAKE QUIZ
          </Button>
          <Button onClick={handleClose}>
            CONTINUE EXPLORING
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default QuizResult