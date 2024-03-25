'use client'
import Image from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import WorldMap from './../../../public/WorldMap.png'

export const Ubication = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <section id="ubication" className={`flex flex-col ${inView ? 'inline animate-fade animate-once animate-ease-in-out' : 'invisible'} m-10 md:m-40`}>
          <h2 className='text-3xl md:text-5xl font-bold text-center'>Ubicación</h2>
          <Image
              alt="Album cover"
              className="rounded-2xl hover:scale-105 duration-500 mt-10 object-cover flex justify-center items-center text-center"
              src={WorldMap}
              width={1600}
              height={900}
          />
      </section>
    </div>
  )
}
