import React from 'react'
import TopicList from './TopicList'
import './SpeakerCard.css'

function SpeakerCard({ speaker }) {
  return (
    <div className="card">
      <h2>{speaker.name}</h2>
      <p>{speaker.job} at {speaker.company}</p>
      <h3>{speaker.talk}</h3>
      <p>{speaker.description}</p>
      <TopicList topics={speaker.topics} />
    </div>
  )
}

export default SpeakerCard
