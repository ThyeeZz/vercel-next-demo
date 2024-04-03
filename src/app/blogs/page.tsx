import Head from "next/head"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Blogs",
  description: 'blog list page'
}

export default function BlogList(){

  return (
    <main style={{
      width: '100vw',
      height: '100vh'
    }}>
      

      <section className="">
        this is blog list page
      </section>
    </main>
  )
}
