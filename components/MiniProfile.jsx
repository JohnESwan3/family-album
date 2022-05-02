import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src={session?.user?.image}
        className="h-16 w-16 rounded-full border object-cover p-[2px]"
        alt="profile pic"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-slate-400">Welcome</h3>
      </div>

      <button onClick={signOut} className="text-sm font-semibold text-sky-500">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
