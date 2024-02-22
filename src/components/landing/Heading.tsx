'use client'
import { Button, Link } from '@nextui-org/react'
import HeadingImage from './../../../public/HeadingImage.jpg'
import Image from 'next/image'
import React from 'react'

export const Heading = () => {
  return (
    <>
        <section className='flex justify-between bg-foreground-50'>
            <section className='flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal'>
                <h2 className='text-3xl !leading-snug md:text-5xl font-bold tracking-wide'>¿En búsqueda de mejorar tu <span className='bg-teal-700 text-white'>rendimiento deportivo?</span></h2>
                <p className='text-xl md:text-2xl text-foreground-600 text-justify antialiased'>Capturamos momentos cruciales y jugadas destacadas para que mejores tu desempeño como deportista.</p>
                <Button size='lg' className='rounded-md p-7 mt-5 text-xl' as={Link} color="primary" href="/videos">
                    Ver videos
                </Button>
            </section>
            <article className='hidden md:block'>
                <Image className='opacity-60' src={HeadingImage} alt="Heading image"/>
            </article>
        </section>
        <section className='w-full bg-foreground rounded-sm p-14 animate-fade-right animate-once animate-ease-in-out md:p-28'>
            <section className='flex text-foreground-200 gap-5 md:gap-96 justify-center'>
                <section>
                    <span className='text-3xl'>+10</span>
                    <p>Clientes satisfechos</p>
                </section>
                <section>
                    <span className='text-3xl'>2</span>
                    <p>Países</p>
                </section>
                <section>
                    <span className='text-3xl'>+300</span>
                    <p>Videos</p>
                </section>
            </section>
        </section>
    </>
  )
}
