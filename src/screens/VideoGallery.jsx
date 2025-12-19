import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Check } from 'lucide-react'
import { videos } from '../data/videoData'
import useAppStore from '../store/useAppStore'
import Card from '../components/Card'

function VideoGallery() {
  const navigate = useNavigate()
  const watchedVideos = useAppStore((state) => state.watchedVideos)

  const isWatched = (videoId) => watchedVideos.includes(videoId)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-8 geometric-pattern"
      style={{ backgroundColor: 'var(--wakanda-dark-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="heading-lg mb-6 glow-text" style={{ color: 'var(--wakanda-white)' }}>
            VIDEO <span style={{ color: 'var(--wakanda-green)' }}>GALLERY</span>
          </h1>
          <p className="body-lg" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
            Explore the stories that shaped Wakanda's legacy
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hoverable className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: 'var(--wakanda-green)' }}
                    >
                      <Play size={24} fill="var(--wakanda-green)" style={{ color: 'var(--wakanda-green)' }} />
                    </motion.div>
                  </div>

                  {/* Watched Indicator */}
                  {isWatched(video.id) && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--wakanda-green)' }}
                    >
                      <Check size={16} style={{ color: 'var(--wakanda-dark-bg)' }} />
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 text-xs font-semibold"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'var(--wakanda-white)'
                    }}
                  >
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--wakanda-white)' }}>
                    {video.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--wakanda-white)', opacity: 0.7 }}>
                    {video.description}
                  </p>

                  {/* Watch Button */}
                  <button
                    onClick={() => navigate(`/video/${video.id}`)}
                    className="w-full py-3 border-2 font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg)"
                    style={{ 
                      borderColor: 'var(--wakanda-green)',
                      color: 'var(--wakanda-green)'
                    }}
                  >
                    {isWatched(video.id) ? 'WATCH AGAIN' : 'WATCH'}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default VideoGallery