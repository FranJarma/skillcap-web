'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { useLogo } from '@/hooks/useLogo'
import { useInView } from 'react-intersection-observer';

export const WhoWeAre = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section id="who-we-are" className={`flex flex-col ${inView ? 'inline animate-fade animate-once animate-ease-in-out' : 'hidden'} md:flex-row justify-between max-lg:ml-12 max-lg:mr-12 max-lg:mt-12`}>
        <section className='flex flex-col gap-10 text-clip md:m-20  md:mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl'>
            <h2 className='text-3xl md:text-5xl !leading-snug font-bold'>Somos <span className='bg-teal-700 text-white'>Skillcap</span> la solución para tu rendimiento deportivo.</h2>
            <p className='text-xl md:text-2xl text-foreground-600 text-justify antialiased'>No solo nos enfocamos en tu desempeño en el campo, sino también en cómo te presentas ante el mundo. Queremos que tu imagen y la de tu equipo brillen tanto como tus habilidades. Somos jóvenes, amigables y siempre estamos a tu lado para ofrecerte el apoyo visual que necesitas.</p>
            <Button className='rounded-sm w-full p-8 text-sm md:text-xl' as={Link} color="primary" href="/about-us">
                Más acerca de nosotros
            </Button>
        </section>
      </section>
    </div>
  )
}
