function Story({ img, username }) {
  return (
    <div>
      <img
        className="transistion h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] duration-200 ease-out hover:scale-110"
        src={img}
        alt=""
      />
      <p className="w-14 truncate text-center text-xs text-black dark:text-slate-50">
        {username}
      </p>
    </div>
  )
}

export default Story
