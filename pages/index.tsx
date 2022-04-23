import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Family Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Family Album</h1>
    </div>
  )
}
