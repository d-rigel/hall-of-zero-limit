import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import useAppStore from '../store/useAppStore'
import MenuOverlay from './MenuOverlay'

function Layout() {
  const { menuOpen, toggleMenu } = useAppStore()

  return (
    <div className="min-h-screen relative">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-3 bg-transparent border-2 hover:bg-(--wakanda-green) transition-all duration-300"
        style={{ 
          borderColor: 'var(--wakanda-green)',
          backgroundColor: menuOpen ? 'var(--wakanda-green)' : 'transparent'
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X size={24} style={{ color: 'var(--wakanda-dark-bg)' }} />
        ) : (
          <Menu size={24} style={{ color: 'var(--wakanda-green)' }} />
        )}
      </button>

      {/* Menu Overlay */}
      <MenuOverlay />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout