import { motion } from 'framer-motion'
import { X, ChevronLeft } from 'lucide-react'

function QuizNavigation({ onClose, onPrevious, showPrevious = false }) {
  return (
    <>
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="fixed top-8 right-8 z-50 p-3 border-2 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg) transition-all duration-300"
        style={{ borderColor: 'var(--wakanda-green)' }}
        aria-label="Close quiz"
      >
        <X size={24} style={{ color: 'var(--wakanda-green)' }} />
      </motion.button>

      {/* Previous Button */}
      {showPrevious && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onPrevious}
          className="fixed top-8 left-8 z-50 p-3 border-2 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg) transition-all duration-300"
          style={{ borderColor: 'var(--wakanda-green)' }}
          aria-label="Previous question"
        >
          <ChevronLeft size={24} style={{ color: 'var(--wakanda-green)' }} />
        </motion.button>
      )}
    </>
  )
}

export default QuizNavigation