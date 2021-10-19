import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <div className="container mx-auto max-w-1/2 text-center">
      <h1 className="text-5xl">This guy vims</h1>
      <div>
        <Image src="/theprimeagen.png" layout="fill"/>
      </div>
      <div className="hidden">
       if you want to be added, @refactor_this on the twatters
      </div>
    </div>
  )
}
