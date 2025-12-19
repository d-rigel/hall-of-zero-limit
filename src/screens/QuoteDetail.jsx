import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { getQuoteById } from '../data/quoteData'
import useAppStore from '../store/useAppStore'

function QuoteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const quote = getQuoteById(id)
  const markQuoteRead = useAppStore((state) => state.markQuoteRead)

  useEffect(() => {
    if (!quote) {
      navigate('/inspiration/1')
    } else {
      // Mark as read when viewing
      markQuoteRead(parseInt(id))
    }
  }, [quote, navigate, id, markQuoteRead])

  const handleClose = () => {
    // Navigate back to the page where this quote belongs
    const quotePage = quote?.page || 1
    navigate(`/inspiration/${quotePage}`)
  }

  if (!quote) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-8"
      style={{ backgroundColor: 'rgba(10, 10, 15, 0.95)' }}
    >
      {/* Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-md" onClick={handleClose} />

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
        className="absolute top-8 right-8 z-50 p-3 border-2 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg) transition-all duration-300"
        style={{ borderColor: 'var(--wakanda-green)' }}
        aria-label="Close quote"
      >
        <X size={24} style={{ color: 'var(--wakanda-green)' }} />
      </motion.button>

      {/* Quote Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl w-full p-12 border-2"
        style={{ 
          borderColor: 'var(--wakanda-green)',
          backgroundColor: 'var(--wakanda-dark-secondary)',
          boxShadow: 'var(--glow-green)'
        }}
      >
        {/* Category */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 text-xs font-semibold tracking-wider border"
            style={{ 
              borderColor: 'var(--wakanda-green)',
              color: 'var(--wakanda-green)'
            }}
          >
            {quote.category}
          </div>
        </motion.div>

        {/* Full Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl leading-relaxed italic" style={{ color: 'var(--wakanda-white)' }}>
            "{quote.fullText}"
          </p>
        </motion.blockquote>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-0.5 mb-8"
          style={{ backgroundColor: 'var(--wakanda-green)' }}
        />

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-bold mb-2" style={{ color: 'var(--wakanda-green)' }}>
            {quote.author}
          </p>
          <p className="text-lg" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
            {quote.role}
          </p>
        </motion.div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" 
          style={{ borderColor: 'var(--wakanda-green)' }} 
        />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" 
          style={{ borderColor: 'var(--wakanda-green)' }} 
        />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" 
          style={{ borderColor: 'var(--wakanda-green)' }} 
        />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" 
          style={{ borderColor: 'var(--wakanda-green)' }} 
        />
      </motion.div>
    </motion.div>
  )
}

export default QuoteDetail