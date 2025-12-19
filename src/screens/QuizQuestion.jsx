import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { getQuestionById } from '../data/quizData'
import useAppStore from '../store/useAppStore'
import QuizChoiceCard from '../components/QuizChoiceCard'
import QuizNavigation from '../components/QuizNavigation'

function QuizQuestion() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { selectAnswer, goBackQuestion, closeQuiz, answerHistory } = useAppStore()
  
  const question = getQuestionById(parseInt(id))

  useEffect(() => {
    if (!question) {
      navigate('/quiz/intro')
    }
  }, [question, navigate])

  if (!question) return null

  const handleSelectOption = (choice, nextQuestionId) => {
    selectAnswer(parseInt(id), choice, nextQuestionId)
    
    // Navigate to next question or result
    if (nextQuestionId === 24 || nextQuestionId === 28) {
      setTimeout(() => {
        navigate(`/quiz/result/${nextQuestionId}`)
      }, 600)
    } else if (nextQuestionId) {
      setTimeout(() => {
        navigate(`/quiz/question/${nextQuestionId}`)
      }, 600)
    }
  }

  const handlePrevious = () => {
    goBackQuestion()
    const previousHistory = answerHistory.slice(0, -1)
    const previousQuestionId = previousHistory.length > 0 
      ? previousHistory[previousHistory.length - 1].questionId 
      : 19
    navigate(`/quiz/question/${previousQuestionId}`)
  }

  const handleClose = () => {
    closeQuiz()
    navigate('/inspiration/5')
  }

  const questionNumber = answerHistory.length + 1
  const isFirstQuestion = answerHistory.length === 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center geometric-pattern relative px-8"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Navigation */}
      <QuizNavigation 
        onClose={handleClose} 
        onPrevious={handlePrevious}
        showPrevious={!isFirstQuestion}
      />

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute w-48 h-48 border opacity-5"
            style={{
              borderColor: 'var(--wakanda-green)',
              left: `${20 + i * 30}%`,
              top: `${15 + i * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Question Number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <span className="text-sm tracking-[0.3em]" style={{ color: 'var(--wakanda-green)' }}>
            QUESTION {questionNumber}
          </span>
        </motion.div>

        {/* Question Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="heading-md text-center mb-16"
          style={{ color: 'var(--wakanda-white)' }}
        >
          {question.question}
        </motion.h2>

        {/* Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <QuizChoiceCard
              option={question.optionA}
              onSelect={() => handleSelectOption('A', question.optionA.nextQuestion)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <QuizChoiceCard
              option={question.optionB}
              onSelect={() => handleSelectOption('B', question.optionB.nextQuestion)}
            />
          </motion.div>
        </div>

        {/* Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-12"
        >
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i < questionNumber 
                  ? 'var(--wakanda-green)' 
                  : 'rgba(255, 255, 255, 0.2)'
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default QuizQuestion