'use client';

//imports
import Lottie from 'lottie-react';
import coolAnimation from '@/animations/cool.json';

export default function Hero() {
  return (
    <div className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-light w-4/6 mx-auto text-center leading-5 lg:leading-relaxed flex flex-wrap relative z-50 gap-4 items-center justify-center py-8">
      <span className="text-gray-500">I'm a</span>
      <span className="font-bold"><span className='text-green-400'>Web</span> Developer</span>
      <Lottie className="w-10 md:w-12 lg:w-24" animationData={coolAnimation} loop={true} />
    </div>
  );
}
