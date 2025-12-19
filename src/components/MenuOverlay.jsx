import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import useAppStore from '../store/useAppStore'

function MenuOverlay() {
  const { menuOpen, closeMenu } = useAppStore()
  const navigate = useNavigate()

  const menuItems = [
    { label: 'WELCOME', path: '/welcome' },
    { label: 'THE HALL', path: '/landing' },
    { label: 'THE STORIES', path: '/story/3' },
    { label: 'VIDEO GALLERY', path: '/videos' },
    { label: 'INSPIRATION GARDEN', path: '/inspiration/1' },
    { label: 'TAKE THE QUIZ', path: '/quiz/intro' },
  ]

  const handleNavigation = (path) => {
    navigate(path)
    closeMenu()
  }

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] z-50 flex flex-col"
            style={{ backgroundColor: 'var(--wakanda-dark-secondary)' }}
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-8 right-8 p-3 border-2 hover:bg-(--wakanda-green) transition-all duration-300"
              style={{ borderColor: 'var(--wakanda-green)' }}
              aria-label="Close menu"
            >
              <X size={24} style={{ color: 'var(--wakanda-green)' }} />
            </button>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-16 py-24">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => handleNavigation(item.path)}
                    className="block w-full text-left text-3xl md:text-4xl font-bold tracking-wider hover:translate-x-4 transition-transform duration-300"
                    style={{ color: 'var(--wakanda-white)' }}
                  >
                    <span className="inline-block hover:glow-text transition-all duration-300">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Decorative Element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-16 h-1"
                style={{ 
                  background: 'linear-gradient(90deg, var(--wakanda-green), transparent)',
                  transformOrigin: 'left'
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MenuOverlay