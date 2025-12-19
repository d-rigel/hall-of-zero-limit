import { motion } from 'framer-motion'

function Card({ children, className = '', onClick, hoverable = true }) {
  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.05, boxShadow: 'var(--glow-green)' } : {}}
      onClick={onClick}
      className={`relative overflow-hidden border-2 transition-all duration-300 ${className}`}
      style={{ 
        borderColor: 'var(--wakanda-green)',
        backgroundColor: 'var(--wakanda-dark-secondary)'
      }}
    >
      {children}
    </motion.div>
  )
}

export default Card