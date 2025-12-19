import { motion } from 'framer-motion'

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon: Icon,
  ...props 
}) {
  const baseStyles = 'relative overflow-hidden font-semibold tracking-wider uppercase transition-all duration-300'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-(--wakanda-dark-bg)',
    icon: 'p-3 bg-transparent border-2 border-(--wakanda-green) hover:bg-(--wakanda-green) hover:text-(--wakanda-dark-bg)'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  )
}

export default Button