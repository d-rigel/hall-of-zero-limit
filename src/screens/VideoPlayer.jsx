import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Play, Pause } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { getVideoById } from '../data/videoData'
import useAppStore from '../store/useAppStore'

function VideoPlayer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  
  const video = getVideoById(id)
  const markVideoWatched = useAppStore((state) => state.markVideoWatched)

  useEffect(() => {
    if (!video) {
      navigate('/videos')
    }
  }, [video, navigate])

  useEffect(() => {
    // Mark as watched after 3 seconds of playback
    const timer = setTimeout(() => {
      if (isPlaying) {
        markVideoWatched(parseInt(id))
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [isPlaying, id, markVideoWatched])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleClose = () => {
    navigate('/videos')
  }

  if (!video) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        onClick={handleClose}
        className="absolute top-8 right-8 z-50 p-3 border-2 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg) transition-all duration-300"
        style={{ borderColor: 'var(--wakanda-green)' }}
        aria-label="Close video"
      >
        <X size={24} style={{ color: 'var(--wakanda-green)' }} />
      </motion.button>

      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="max-w-full max-h-full"
          onClick={togglePlay}
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full border-4 flex items-center justify-center"
              style={{ borderColor: 'var(--wakanda-green)' }}
            >
              <Play size={40} fill="var(--wakanda-green)" style={{ color: 'var(--wakanda-green)' }} />
            </motion.div>
          </motion.button>
        )}

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showControls && isPlaying ? 1 : 0, y: showControls && isPlaying ? 0 : 20 }}
          className="absolute bottom-8 left-8 right-8 flex items-center gap-4 px-6 py-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <button
            onClick={togglePlay}
            className="p-2 hover:scale-110 transition-transform"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={24} style={{ color: 'var(--wakanda-green)' }} />
            ) : (
              <Play size={24} style={{ color: 'var(--wakanda-green)' }} />
            )}
          </button>

          <div className="flex-1">
            <h3 className="font-semibold" style={{ color: 'var(--wakanda-white)' }}>
              {video.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
              {video.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default VideoPlayer