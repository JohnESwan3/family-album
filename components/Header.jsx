import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm dark:border-slate-900 dark:bg-slate-900">
      <div className="mx-5 flex max-w-6xl justify-between bg-white dark:bg-slate-900 lg:mx-auto">
        {/* Left */}
        {/* Placeholder Icons */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-60 cursor-pointer lg:inline-grid"
        >
          <Image src="/BFFABig.webp" layout="fill" objectFit="contain" />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative inline-grid w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <Image src="/BFFASquare.webp" layout="fill" objectFit="contain" />
        </div>

        {/* Middle - search input field change p-8 back to p-3 when enabling search bar */}
        <div className="max-w-xs">
          <div className="relative w-10 rounded-md p-8">
            {/* Search Icon Div */}
            {/* <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-slate-500" />
            </div>
            <input
              className="block w-full rounded-md border-slate-300 bg-slate-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            /> */}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          {/* <MenuIcon className="h-6 cursor-pointer md:hidden" /> */}
          {session ? (
            <>
              {/* <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div> */}
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              {/* <UserGroupIcon className="navBtn" /> */}
              {/* <HeartIcon className="navBtn" /> */}

              <img
                onClick={signOut}
                className="h-10 w-10 cursor-pointer rounded-full object-cover"
                src={session.user.image}
                alt="profile pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
