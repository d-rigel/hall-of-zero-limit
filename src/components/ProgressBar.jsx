import { motion } from 'framer-motion'

function ProgressBar({ progress = 0, className = '' }) {
  return (
    <div className={`w-full h-1 bg-white/10 overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-full"
        style={{
          background: 'linear-gradient(90deg, var(--wakanda-green), #5eff9d)',
          boxShadow: '0 0 10px var(--wakanda-green)'
        }}
      />
    </div>
  )
}

export default ProgressBar