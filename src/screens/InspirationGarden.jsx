import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Check } from 'lucide-react'
import { getQuotesByPage, getTotalPages } from '../data/quoteData'
import useAppStore from '../store/useAppStore'
import Card from '../components/Card'
import NavigationArrows from '../components/NavigationArrows'
import Button from '../components/Button'

function InspirationGarden() {
  const navigate = useNavigate()
  const { page } = useParams()
  const currentPage = parseInt(page) || 1
  const totalPages = getTotalPages()
  
  const readQuotes = useAppStore((state) => state.readQuotes)
  const quotes = getQuotesByPage(currentPage)

  const isRead = (quoteId) => readQuotes.includes(quoteId)

  const handleNext = () => {
    if (currentPage < totalPages) {
      navigate(`/inspiration/${currentPage + 1}`)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      navigate(`/inspiration/${currentPage - 1}`)
    }
  }

  const handleTakeQuiz = () => {
    navigate('/quiz/intro')
  }

  const isLastPage = currentPage === totalPages

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-8 geometric-pattern"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      {/* Navigation Arrows */}
      <NavigationArrows
        onPrevious={handlePrevious}
        onNext={handleNext}
        showPrevious={currentPage > 1}
        showNext={currentPage < totalPages}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="heading-lg mb-6 glow-text" style={{ color: 'var(--wakanda-white)' }}>
            INSPIRATION <span style={{ color: 'var(--wakanda-green)' }}>GARDEN</span>
          </h1>
          <p className="body-lg mb-4" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
            Words of wisdom from Wakanda's greatest minds
          </p>
          <p className="text-sm tracking-wider" style={{ color: 'var(--wakanda-green)' }}>
            Page {currentPage} of {totalPages}
          </p>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-4 py-1 text-xs font-semibold tracking-wider border"
                      style={{ 
                        borderColor: 'var(--wakanda-green)',
                        color: 'var(--wakanda-green)'
                      }}
                    >
                      {quote.category}
                    </div>

                    {/* Read Indicator */}
                    {isRead(quote.id) && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--wakanda-green)' }}
                      >
                        <Check size={14} style={{ color: 'var(--wakanda-dark-bg)' }} />
                      </div>
                    )}
                  </div>

                  {/* Quote Preview */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-lg italic leading-relaxed" style={{ color: 'var(--wakanda-white)' }}>
                      "{quote.text}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="mb-6">
                    <p className="font-bold" style={{ color: 'var(--wakanda-green)' }}>
                      {quote.author}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--wakanda-white)', opacity: 0.6 }}>
                      {quote.role}
                    </p>
                  </div>

                  {/* Read Button */}
                  <button
                    onClick={() => navigate(`/quote/${quote.id}`)}
                    className="w-full py-3 border-2 font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg) flex items-center justify-center gap-2"
                    style={{ 
                      borderColor: 'var(--wakanda-green)',
                      color: 'var(--wakanda-green)'
                    }}
                  >
                    <BookOpen size={18} />
                    {isRead(quote.id) ? 'READ AGAIN' : 'READ MORE'}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Take Quiz Button - Only on Last Page */}
        {isLastPage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-32 h-0.5 mx-auto mb-8"
                style={{ backgroundColor: 'var(--wakanda-green)' }}
              />
              <h2 className="heading-md mb-4" style={{ color: 'var(--wakanda-white)' }}>
                DISCOVER YOUR <span style={{ color: 'var(--wakanda-green)' }}>GIFT</span>
              </h2>
              <p className="body-md mb-8 max-w-2xl mx-auto" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
                Every individual in the Hall of Zero Limits possesses a unique gift. 
                Take our aptitude quiz to discover yours.
              </p>
            </div>
            <Button onClick={handleTakeQuiz}>
              TAKE THE QUIZ
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default InspirationGarden