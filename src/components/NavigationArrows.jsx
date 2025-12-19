import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function NavigationArrows({ onPrevious, onNext, showPrevious = true, showNext = true }) {
  const arrowStyles = "fixed top-1/2 -translate-y-1/2 p-4 bg-transparent border-2 hover:bg-(--wakanda-green) hover:border-(--wakanda-green) transition-all duration-300 z-30"

  return (
    <>
      {showPrevious && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          onClick={onPrevious}
          className={`${arrowStyles} left-8`}
          style={{ borderColor: 'var(--wakanda-green)' }}
          aria-label="Previous"
        >
          <ChevronLeft size={32} style={{ color: 'var(--wakanda-green)' }} />
        </motion.button>
      )}

      {showNext && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 5 }}
          onClick={onNext}
          className={`${arrowStyles} right-8`}
          style={{ borderColor: 'var(--wakanda-green)' }}
          aria-label="Next"
        >
          <ChevronRight size={32} style={{ color: 'var(--wakanda-green)' }} />
        </motion.button>
      )}
    </>
  )
}

export default NavigationArrows