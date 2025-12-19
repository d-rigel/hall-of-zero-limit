import { useParams, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { getStoryById, getNextStory, getPreviousStory } from '../data/storyData'
import NavigationArrows from '../components/NavigationArrows'

function StoryScreen() {
  const { id } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  
  const story = getStoryById(id)
  const nextStory = getNextStory(id)
  const previousStory = getPreviousStory(id)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  if (!story) {
    navigate('/landing')
    return null
  }

  const handleNext = () => {
    if (nextStory === 8) {
      navigate('/videos')
    } else if (nextStory) {
      navigate(`/story/${nextStory}`)
    }
  }

  const handlePrevious = () => {
    if (previousStory) {
      navigate(`/story/${previousStory}`)
    } else {
      navigate('/landing')
    }
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center geometric-pattern relative overflow-hidden"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
      
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute w-64 h-64 border opacity-10"
              style={{
                borderColor: 'var(--wakanda-green)',
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
                transform: `rotate(${i * 45}deg)`,
                opacity: 0.03
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <NavigationArrows
        onPrevious={handlePrevious}
        onNext={handleNext}
        showPrevious={true}
        showNext={true}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl px-8 text-center"
      >
        {/* Story Number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] mb-4"
          style={{ color: 'var(--wakanda-green)' }}
        >
          {String(story.id - 2).padStart(2, '0')} / 05
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg tracking-widest mb-6"
          style={{ color: 'var(--wakanda-white)', opacity: 0.6 }}
        >
          {story.subtitle}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="heading-lg mb-12 glow-text"
          style={{ color: 'var(--wakanda-white)' }}
        >
          {story.title}
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-0.5 mx-auto mb-12"
          style={{ backgroundColor: 'var(--wakanda-green)' }}
        />

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="body-lg leading-relaxed"
          style={{ color: 'var(--wakanda-white)'  }}
        >
          {story.content}
        </motion.p>
        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-2 mt-16"
        >
          {[3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              className="w-12 h-1 transition-all duration-300"
              style={{
                backgroundColor: num === parseInt(id) ? 'var(--wakanda-green)' : 'rgba(255, 255, 255, 0.2)',
                boxShadow: num === parseInt(id) ? 'var(--glow-green)' : 'none'
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default StoryScreen