import { CTA, Footer, Header } from '@/ui'
import { Heading, Services, Ubication, WhoWeAre } from '@/components/landing'

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <Heading/>
        <WhoWeAre/>
        <Services/>
        <Ubication/>
        <CTA/>
      </main>
    <Footer/>
  </>
  )
}
