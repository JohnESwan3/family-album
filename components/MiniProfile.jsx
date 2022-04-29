import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src="https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-pot-boy-location-1.jpg"
        className="h-16 w-16 rounded-full border object-cover p-[2px]"
        alt="profile pic"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">JohnESwan3</h2>
        <h3 className="text-sm text-slate-400">Welcome</h3>
      </div>

      <button className="text-sm font-semibold text-sky-500">Sign Out</button>
    </div>
  )
}

export default MiniProfile
