import Image from 'next/image'
import styles from './page.module.css'
import { Footer, Header, Sidebar } from '@/ui'

export default function Home() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <main>
      <p>main</p>
    </main>
    <Footer/>
  </>
  )
}
