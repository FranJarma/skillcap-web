'use client'

import { Input } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react'
import HeadingImage from 'public/HeadingImage.jpg'
import { useInView } from 'react-intersection-observer';
export const Cta = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
        <section id='cta' className='flex justify-between bg-foreground-50'>
            <article className='hidden md:block'>
                <Image className='opacity-60' src={HeadingImage} alt="Heading image"/>
            </article>
            <section className='flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal'>
                <h2 className='text-3xl !leading-snug md:text-5xl font-bold tracking-wide'>¿Quieres implementar <span className='bg-teal-700 text-white'>Skillcap</span> en tu negocio?</h2>
                <p className='text-xl md:text-2xl text-foreground-600 text-justify antialiased'>Déjanos tus datos y uno de nuestros operadores se pondrá en contacto.</p>
                <section className='grid grid-cols-3 gap-4'>
                <Input
                    className='border-0 border-transparent focus:outline-offset-0'
                    isClearable
                    label="Email"
                    variant="flat"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                />
                                <Input
                    className='border-0 border-transparent focus:outline-offset-0'
                    isClearable
                    label="Email"
                    variant="flat"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                />
                                <Input
                    className='border-0 border-transparent focus:outline-offset-0'
                    isClearable
                    label="Email"
                    variant="flat"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                />
                </section>
            </section>
        </section>
    </div>
  )
}
