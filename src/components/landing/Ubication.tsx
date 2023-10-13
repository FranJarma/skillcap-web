'use client'
import Image from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import CameraInstallation from './../../../public/CameraInstallation.jpg'

export const Ubication = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={ref}>
      <section id="ubication" className={`flex flex-col ${inView ? 'inline animate-fade animate-once animate-ease-in-out' : 'hidden'} md:flex-row justify-between m-20`}>
        <section className='flex flex-col justify-center items-center gap-10 md:m-20'>
            <h2 className='text-3xl md:text-5xl font-bold'>Ubicación</h2>
            <Image
                alt="Album cover"
                className="object-fit min-h-fit w-screen rounded-2xl opacity-50 hover:scale-105 duration-500 hover:opacity-100 md:h-96"
                src={CameraInstallation}
                sizes="100vw"
                height={500}
                width={200}
            />
        </section>
      </section>
    </section>
  )
}
