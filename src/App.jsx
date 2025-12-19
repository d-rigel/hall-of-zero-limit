import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import LoadingScreen from './screens/LoadingScreen'
import LandingScreen from './screens/LandingScreen'
import StoryScreen from './screens/StoryScreen'
import VideoGallery from './screens/VideoGallery'
import VideoPlayer from './screens/VideoPlayer'
import InspirationGarden from './screens/InspirationGarden'
import QuoteDetail from './screens/QuoteDetail'
import WelcomeScreen from './screens/WelcomeScreen'
import QuizIntro from './screens/QuizIntro'
import QuizQuestion from './screens/QuizQuestion'
import QuizResult from './screens/QuizResult'

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route element={<Layout />}>
            <Route path="/landing" element={<LandingScreen />} />
            <Route path="/story/:id" element={<StoryScreen />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/inspiration/:page?" element={<InspirationGarden />} />
            <Route path="/quote/:id" element={<QuoteDetail />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/quiz/intro" element={<QuizIntro />} />
            <Route path="/quiz/question/:id" element={<QuizQuestion />} />
            <Route path="/quiz/result/:id" element={<QuizResult />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App