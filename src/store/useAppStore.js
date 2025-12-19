import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAppStore = create(
  persist(
    (set) => ({
      // Navigation state
      currentScreen: 'loading',
      menuOpen: false,
      
      // Progress tracking
      watchedVideos: [],
      readQuotes: [],
      
      // Quiz state
      quizActive: false,
      currentQuestionId: null,
      answerHistory: [],
      quizResult: null,
      
      // Actions
      setCurrentScreen: (screen) => set({ currentScreen: screen }),
      toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
      closeMenu: () => set({ menuOpen: false }),
      
      markVideoWatched: (videoId) => set((state) => ({
        watchedVideos: state.watchedVideos.includes(videoId)
          ? state.watchedVideos
          : [...state.watchedVideos, videoId]
      })),
      
      markQuoteRead: (quoteId) => set((state) => ({
        readQuotes: state.readQuotes.includes(quoteId)
          ? state.readQuotes
          : [...state.readQuotes, quoteId]
      })),
      
      isVideoWatched: (videoId) => (state) => state.watchedVideos.includes(videoId),
      isQuoteRead: (quoteId) => (state) => state.readQuotes.includes(quoteId),
      
      // Quiz actions
      startQuiz: () => set({ 
        quizActive: true, 
        currentQuestionId: 19, 
        answerHistory: [],
        quizResult: null 
      }),
      
      selectAnswer: (questionId, choice, nextQuestionId) => set((state) => ({
        answerHistory: [...state.answerHistory, { questionId, choice }],
        currentQuestionId: nextQuestionId,
        quizResult: nextQuestionId === 24 || nextQuestionId === 28 ? nextQuestionId : null
      })),
      
      goBackQuestion: () => set((state) => {
        if (state.answerHistory.length === 0) return state
        const newHistory = [...state.answerHistory]
        newHistory.pop()
        const previousQuestion = newHistory.length > 0 
          ? newHistory[newHistory.length - 1].questionId 
          : 19
        return {
          answerHistory: newHistory,
          currentQuestionId: previousQuestion,
          quizResult: null
        }
      }),
      
      closeQuiz: () => set({ 
        quizActive: false, 
        currentQuestionId: null,
        quizResult: null
      }),
      
      resetQuiz: () => set({ 
        quizActive: false,
        currentQuestionId: null, 
        answerHistory: [], 
        quizResult: null 
      }),
    }),
    {
      name: 'wakanda-app-storage',
      partialize: (state) => ({
        watchedVideos: state.watchedVideos,
        readQuotes: state.readQuotes,
      }),
    }
  )
)

export default useAppStore