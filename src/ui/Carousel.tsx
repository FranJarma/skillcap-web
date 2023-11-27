import React from 'react'
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import LeftControl from './../../public/LeftArrow.svg';
import RightControl from './../../public/RightArrow.svg';
import Image from 'next/image';

export const Slider = ({children}: any) => {

  const carouselTheme: CustomFlowbiteTheme['carousel'] = {
    indicators: {
      wrapper: "flex justify-center align-center gap-3 mt-5",
      active: {
        on: "bg-primary",
        off: "bg-foreground-100"
      }
    },
  }

  return (
    <Carousel leftControl={<Image width={25} alt="Left Control" src={LeftControl}/>} rightControl={<Image width={25} alt="Right Control" src={RightControl}/>} theme={carouselTheme}>
      {children}
    </Carousel>
  );
}