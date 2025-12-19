// Quiz branching tree structure
export const quizQuestions = {
  19: {
    id: 19,
    question: "What interests you more?",
    optionA: {
      text: "Documentary",
      description: "Exploring real stories and facts",
      nextQuestion: 20
    },
    optionB: {
      text: "Comedy",
      description: "Creating laughter and entertainment",
      nextQuestion: 25
    }
  },
  20: {
    id: 20,
    question: "Choose your preference:",
    optionA: {
      text: "Research & Planning",
      description: "Diving deep into preparation",
      nextQuestion: 21
    },
    optionB: {
      text: "Designing the presentation",
      description: "Crafting the visual experience",
      nextQuestion: null // Dead end - forces option A
    }
  },
  21: {
    id: 21,
    question: "Pick your favorite:",
    optionA: {
      text: "Gaming",
      description: "Interactive digital experiences",
      nextQuestion: 22
    },
    optionB: {
      text: "Photography",
      description: "Capturing moments in time",
      nextQuestion: null // Dead end
    }
  },
  22: {
    id: 22,
    question: "What appeals to you?",
    optionA: {
      text: "Designing a set",
      description: "Creating physical environments",
      nextQuestion: 23
    },
    optionB: {
      text: "Writing a script",
      description: "Crafting narratives and dialogue",
      nextQuestion: null // Dead end
    }
  },
  23: {
    id: 23,
    question: "Final choice:",
    optionA: {
      text: "Device Troubleshooting",
      description: "Solving technical problems",
      nextQuestion: 24 // Result
    },
    optionB: {
      text: "What to wear",
      description: "Fashion and style choices",
      nextQuestion: null // Dead end
    }
  },
  25: {
    id: 25,
    question: "What describes you better?",
    optionA: {
      text: "Content Creator",
      description: "Making engaging media",
      nextQuestion: 26
    },
    optionB: {
      text: "Programmer",
      description: "Building software solutions",
      nextQuestion: null // Dead end
    }
  },
  26: {
    id: 26,
    question: "Choose one:",
    optionA: {
      text: "Astrology",
      description: "Celestial patterns and meaning",
      nextQuestion: 27
    },
    optionB: {
      text: "Astronomy",
      description: "Scientific study of space",
      nextQuestion: null // Dead end
    }
  },
  27: {
    id: 27,
    question: "Where would you rather be?",
    optionA: {
      text: "Studio",
      description: "Creative production space",
      nextQuestion: null // Dead end
    },
    optionB: {
      text: "Lab",
      description: "Scientific research facility",
      nextQuestion: 28 // Result
    }
  }
}

export const quizResults = {
  24: {
    id: 24,
    title: "TECH INNOVATOR",
    subtitle: "Your Gift: Problem Solving",
    description: "You have the mind of a technical pioneer. Like Shuri in her lab, you thrive on breaking down complex challenges and building innovative solutions. Your analytical approach combined with creative thinking makes you a natural problem solver.",
    fullDescription: "Your journey through the Hall of Zero Limits reveals a deep passion for understanding how things work and making them better. You don't just accept the status quo—you question it, dissect it, and rebuild it stronger. This gift of problem-solving is what drives innovation forward and creates the breakthroughs that change the world.",
    path: "Documentary → Research & Planning → Gaming → Designing a set → Device Troubleshooting"
  },
  28: {
    id: 28,
    title: "CREATIVE SCIENTIST",
    subtitle: "Your Gift: Experimentation",
    description: "You blend creativity with analytical thinking in a unique way. Like the greatest minds of Wakanda, you understand that true innovation happens at the intersection of art and science. Your experimental nature drives you to explore uncharted territories.",
    fullDescription: "Your path reveals someone who isn't afraid to try new approaches and test unconventional ideas. You see the lab not just as a place of rigid protocols, but as a playground for discovery. This gift of experimentation allows you to find solutions others might miss and create experiences that inspire wonder.",
    path: "Comedy → Content Creator → Astrology → Lab"
  }
}

export const getQuestionById = (id) => {
  return quizQuestions[id]
}

export const getResultById = (id) => {
  return quizResults[id]
}

export const isResultQuestion = (id) => {
  return id === 24 || id === 28
}