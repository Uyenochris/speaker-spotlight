import React from 'react'
function TopicList({ topics }) {
  return (
    <div>
      <h4>Topics</h4>
      <ul>
        {topics.map((topic) => <li key={topic}>{topic}</li>)}
      </ul>
    </div>
  )
}

export default TopicList
