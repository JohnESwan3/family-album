import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

export default function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center dark:bg-slate-700">
        <img className="-mt-56 w-80" src="/BFFABig.webp" alt="" />

        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-sky-500 p-3 text-white transition-colors duration-150 ease-out hover:bg-sky-600"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
