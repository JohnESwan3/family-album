import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(0)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-md border border-slate-300 bg-white p-6 shadow-md scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
