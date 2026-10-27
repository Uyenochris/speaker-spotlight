import React from 'react'
import SpeakerCard from './components/SpeakerCard'

function App() {
  const speakers = [
    {
      name: 'Amara Johnson',
      job: 'Frontend Developer',
      company: 'Northstar Labs',
      talk: 'Making Better Websites',
      description: 'I will talk about how to make websites easier for everyone to use.',
      topics: ['Components', 'Colors']
    },
    {
      name: 'Leo Martinez',
      job: 'Web Designer',
      company: 'Fieldwork Digital',
      talk: 'Cool CSS Tricks',
      description: 'This talk is about some fun things you can do with CSS.',
      topics: ['Animations', 'Hover effects']
    },
    {
      name: 'Priya Shah',
      job: 'Developer',
      company: 'Launchpad Cloud',
      talk: 'Starting with React',
      description: 'I will show the basics of making a React project.',
      topics: ['React', 'Vite']
    }
  ]

  return (
    <div className="page">
      <header>
        <h1>Circle City Dev Night</h1>
        <h2>Speaker Spotlight</h2>
        <p>November 19, 2026 • Indianapolis</p>
      </header>

      <main>
        <h2>Meet Our Speakers</h2>
        <div className="cards">
          {speakers.map((person) => (
            <SpeakerCard key={person.name} speaker={person} />
          ))}
        </div>
      </main>

      <footer>
        <p>Made for Circle City Dev Night</p>
        <a href="https://github.com/Uyenochris/speaker-spotlight">
  My GitHub
</a>
      </footer>
    </div>
  )
}

export default App
