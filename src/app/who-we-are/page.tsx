import { Footer, Header } from '@/ui';
import React from 'react'

const WhoWeAre = () => {
  return (
    <React.Fragment>
      <Header showMenuItems={false}>
        <main>
          <h1>Who We Are</h1>
        </main>
      </Header>
      <Footer/>
  </React.Fragment>
  )
}

export default WhoWeAre;