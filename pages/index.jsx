import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-50 scrollbar-hide">
      <Head>
        <title>Family Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      {/* Modal */}
    </div>
  )
}
