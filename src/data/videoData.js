export const videos = [
  {
    id: 1,
    title: "Shuri's Innovation Lab",
    description: "Discover the cutting-edge technology behind Wakanda's advancement",
    thumbnail: "https://picsum.photos/400/300?random=1",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "3:24"
  },
  {
    id: 2,
    title: "The Dora Milaje",
    description: "Elite warriors protecting the throne with unwavering dedication",
    thumbnail: "https://picsum.photos/400/300?random=2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "4:15"
  },
  {
    id: 3,
    title: "Vibranium Legacy",
    description: "The power source that changed everything",
    thumbnail: "https://picsum.photos/400/300?random=3",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "2:45"
  },
  {
    id: 4,
    title: "Beyond Borders",
    description: "Wakanda's impact on the global stage",
    thumbnail: "https://picsum.photos/400/300?random=4",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "5:30"
  },
  {
    id: 5,
    title: "The Future Awaits",
    description: "Next generation of Wakandan innovation",
    thumbnail: "https://picsum.photos/400/300?random=5",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "3:50"
  },
  {
    id: 6,
    title: "Ancestral Wisdom",
    description: "Honoring the traditions that guide us",
    thumbnail: "https://picsum.photos/400/300?random=6",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "4:20"
  }
]

export const getVideoById = (id) => {
  return videos.find(video => video.id === parseInt(id))
}