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
    <section ref={ref}>
      <section id="who-we-are" className={`flex flex-col ${inView ? 'inline animate-fade animate-once animate-ease-in-out' : 'hidden'} md:flex-row justify-between m-20`}>
        <article className='justify-center text-center mb-10 md:inline'>
          {
            useLogo(1000, 1000)
          }
        </article>
        <section className='flex flex-col justify-center items-center gap-10 md:m-20'>
            <h2 className='text-3xl md:text-5xl font-bold'>Somos Skillcap, la solución para tu rendimiento deportivo.</h2>
            <p className='text-xl md:text-2xl text-foreground-600 antialiased'>No solo nos enfocamos en tu desempeño en el campo, sino también en cómo te presentas ante el mundo. Queremos que tu imagen y la de tu equipo brillen tanto como tus habilidades. Somos jóvenes, amigables y siempre estamos a tu lado para ofrecerte el apoyo visual que necesitas.</p>
            <Button className='rounded-sm w-full p-5 text-sm md:text-xl' as={Link} color="primary" href="/about-us" variant="ghost">
                Más acerca de nosotros
            </Button>
        </section>
      </section>
    </section>
  )
}
