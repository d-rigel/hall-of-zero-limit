export const stories = [
  {
    id: 3,
    title: "THE ORIGIN",
    subtitle: "Where It All Began",
    content: "In the heart of Wakanda, innovation meets tradition. The Hall of Zero Limits represents the boundless potential of those who dare to dream beyond conventional boundaries. Here, we celebrate the pioneers who refused to accept limitations.",
    nextScreen: 4
  },
  {
    id: 4,
    title: "THE CREATORS",
    subtitle: "Visionaries of Tomorrow",
    content: "Every great achievement starts with a vision. The creators featured in this hall have transformed impossibilities into realities, pushing the boundaries of what we thought achievable. Their stories inspire the next generation of innovators.",
    nextScreen: 5
  },
  {
    id: 5,
    title: "THE JOURNEY",
    subtitle: "Beyond Boundaries",
    content: "The path to greatness is never linear. It's filled with challenges, setbacks, and moments of doubt. But those who persevere, who continue to push forward despite obstacles, are the ones who ultimately reshape our world.",
    nextScreen: 6
  },
  {
    id: 6,
    title: "THE INNOVATION",
    subtitle: "Breaking New Ground",
    content: "Innovation isn't just about technology—it's about mindset. It's about seeing problems as opportunities and limitations as challenges to overcome. The Hall of Zero Limits showcases those who've mastered this art.",
    nextScreen: 7
  },
  {
    id: 7,
    title: "THE LEGACY",
    subtitle: "Inspiring Generations",
    content: "True impact extends beyond individual achievement. It's about creating a legacy that inspires others to reach higher, dream bigger, and achieve more. This is the essence of the Hall of Zero Limits.",
    nextScreen: 8
  }
]

export const getStoryById = (id) => {
  return stories.find(story => story.id === parseInt(id))
}

export const getNextStory = (currentId) => {
  const current = getStoryById(currentId)
  return current ? current.nextScreen : null
}

export const getPreviousStory = (currentId) => {
  const id = parseInt(currentId)
  return id > 3 ? id - 1 : null
}