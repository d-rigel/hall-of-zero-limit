import { motion } from 'framer-motion'
import { useState } from 'react'

function QuizChoiceCard({ option, onSelect, disabled = false }) {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    if (disabled || !option.nextQuestion) return
    setIsSelected(true)
    setTimeout(() => {
      onSelect()
    }, 400)
  }

  const isDeadEnd = !option.nextQuestion

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled || isDeadEnd}
      whileHover={!disabled && !isDeadEnd ? { scale: 1.05, y: -5 } : {}}
      whileTap={!disabled && !isDeadEnd ? { scale: 0.98 } : {}}
      className={`relative w-full p-8 border-2 transition-all duration-300 ${
        isDeadEnd ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
      }`}
      style={{
        borderColor: isSelected ? 'var(--wakanda-green)' : 'rgba(63, 220, 119, 0.3)',
        backgroundColor: 'var(--wakanda-dark-secondary)',
        boxShadow: isSelected ? 'var(--glow-green-strong)' : 'none'
      }}
    >
      {/* Selection Animation */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 border-4"
          style={{
            borderColor: 'var(--wakanda-green)',
            backgroundColor: 'rgba(63, 220, 119, 0.1)'
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 
          className="text-3xl md:text-4xl font-bold mb-3 transition-all duration-300"
          style={{ 
            color: isSelected ? 'var(--wakanda-green)' : 'var(--wakanda-white)'
          }}
        >
          {option.text}
        </h3>
        <p 
          className="text-sm md:text-base"
          style={{ 
            color: 'var(--wakanda-white)', 
            opacity: 0.7 
          }}
        >
          {option.description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div 
        className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 transition-all duration-300"
        style={{ 
          borderColor: isSelected ? 'var(--wakanda-green)' : 'rgba(63, 220, 119, 0.3)'
        }}
      />

      {/* Dead End Indicator */}
      {isDeadEnd && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <p className="text-sm font-semibold tracking-wider" style={{ color: 'var(--wakanda-white)' }}>
            PATH UNAVAILABLE
          </p>
        </div>
      )}
    </motion.button>
  )
}

export default QuizChoiceCard