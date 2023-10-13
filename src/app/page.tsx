import { CTA, Footer, Header } from '@/ui'
import { Clients, Heading, Services, Testimonial, Ubication, WhoWeAre } from '@/components/landing'

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <Heading/>
        <WhoWeAre/>
        <Services/>
        <Ubication/>
        <Clients/>
        <Testimonial/>
        <CTA/>
      </main>
    <Footer/>
  </>
  )
}
