'use client'

import { Button, Chip, Input } from '@nextui-org/react';
import Image from 'next/image'
import React, { useState } from 'react'
import HeadingImage from 'public/HeadingImage.jpg'
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from 'next-themes';
import { Check } from '@/ui/icons/index';
export const Cta = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSent = () => {
    setEmailSent(true);
    toast("Uno de nuestros operadores se comunicará contigo pronto!")
  };

  return (
    <div ref={ref}>
        <section id='cta' className='flex justify-between bg-foreground-50'>
            <article className='hidden md:block'>
                <Image className='opacity-60' src={HeadingImage} alt="Heading image"/>
            </article>
            <section className='flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal'>
                <h2 className='text-3xl !leading-snug md:text-5xl font-bold tracking-wide'>¿Quieres implementar <span className='bg-teal-700 text-white'>Skillcap</span> en tu negocio?</h2>
                
                { emailSent ?

                  <section className={`bg-teal-700 border-b-4 border-foreground-500 text-white w-full p-14 animate-fade animate-once animate-ease-in-out`}>
                    <p className='text-lg flex justify-center align-center text-center'><Check/> Nos comunicaremos muy pronto</p>
                  </section>
                  :
                  <React.Fragment>
                  <p className='text-xl md:text-2xl text-foreground-600 text-justify antialiased'>Déjanos tu correo electrónico y uno de nuestros operadores se pondrá en contacto.</p>
                  <Input
                      className="w-full"
                      disabled={emailSent}
                      label="Email"
                      defaultValue="test@skillcap.com"
                      endContent={ <Button isDisabled={emailSent} color='primary' onClick={handleEmailSent}>Enviar</Button> }
                  />
                  <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={theme === "dark" ? "light" : "dark"}
                    />
                    </React.Fragment>
                  }
            </section>
        </section>
    </div>
  )
}
