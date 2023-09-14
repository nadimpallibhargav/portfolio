'use client';

//imports
import Navbar from '@/components/navbar';
import { FiChevronDown } from 'react-icons/fi';
import Hero from '@/components/hero';
import Header from '@/components/header';
import heartAnimation from '@/animations/heart.json';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-4">
      <Navbar />
      <div className='min-h-screen flex flex-col justify-center'>
        <Header />
        <Hero />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer" />
      </div>
      
      <div className="container mx-auto py-16">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap'>
          <span className='text-gray-500'>some of the</span> 
          <span className='font-medium'>technologies I have</span>
          <span className='font-medium'>used and </span>
          <Lottie
            animationData={heartAnimation}
            loop={true}
            className="w-12 lg:w-24"
          />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full pt-10">
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="nextjs" src="/images/nextjs.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="reactjs" src="/images/reactjs.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="javascript" src="/images/javascript.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="html" src="/images/html.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="css" src="/images/css.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="redux" src="/images/redux.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="jquery" src="/images/jquery.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="sass" src="/images/sass.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="bootstrap" src="/images/bootstrap.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>        
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="tailwindcss" src="/images/tailwindcss.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="github" src="/images/github.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="vercel" src="/images/vercel.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="netlify" src="/images/netlify.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>          
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="npm" src="/images/npm.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="wordpress" src="/images/wordpress.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="shopify" src="/images/shopify.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="elementor" src="/images/elementor.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="figma" src="/images/figma.svg" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className='text-3xl lg:text-5xl font-light pb-14' id='work'>
          <span className='text-gray-500'>Selected </span> 
          <span className='font-medium'> Works</span>
        </div>

        <div className='mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full pb-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/indigg.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Online Community-Based Gaming Platform</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A Web3 play-to-earn gaming platform in India. </span>
                <span className='font-semibold'>It brings gamers and game developers together to create a community that sparks new innovations in the gaming world.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://indi.gg/" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/quick-recruit.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Recruitment Management Application</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A recruitment management application that offers hiring-related services to corporate agencies. </span>
                <span className='font-semibold'>It enables the management of candidates and provides tracking and analysis of job vacancies.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://alpha.quickrecruit.com/signin" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/2hub.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Recruitment Management Application</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A recruitment management application that offers hiring-related services to corporate agencies. </span>
                <span className='font-semibold'>It enables the management of candidates and provides tracking and analysis of job vacancies.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://alpha.quickrecruit.com/signin" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/wise-drive.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Recruitment Management Application</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A recruitment management application that offers hiring-related services to corporate agencies. </span>
                <span className='font-semibold'>It enables the management of candidates and provides tracking and analysis of job vacancies.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://alpha.quickrecruit.com/signin" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/propdigital.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Recruitment Management Application</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A recruitment management application that offers hiring-related services to corporate agencies. </span>
                <span className='font-semibold'>It enables the management of candidates and provides tracking and analysis of job vacancies.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://alpha.quickrecruit.com/signin" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50 border-b border-stone-500'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/revise-network.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Recruitment Management Application</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>A recruitment management application that offers hiring-related services to corporate agencies. </span>
                <span className='font-semibold'>It enables the management of candidates and provides tracking and analysis of job vacancies.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://alpha.quickrecruit.com/signin" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-12 lg:pb-50'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/sirovate.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-center space-y-8'>
              <h1 className='uppercase font-medium'>Clinical Trial Accelerating Platform</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>Sirovate enables clients to deploy transformative data privacy solutions.</span>
                <span className='font-semibold'> It is an flexible suite for drug development with automated workflow capabilities.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Development</h6>
              <Link href="https://www.sirovate.com/" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Visit Website</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap uppercase' id='about'>
          <span className='text-gray-500'>a bit</span> 
          <span className='font-medium'>about me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20">
          <div className="col-span-1 text-3xl font-light leading-relaxed h-full items-center">
            <span className='text-gray-500'>I am a Web developer who is passionate about </span>
            <span className='font-bold'> helping Businesses to establish their digital presence in various industries, such as e-commerce, real estate, and IT services. I also love Books, Trekking. </span>
            <div className='flex gap-5 pt-20 text-2xl'>            
              <Link href="tel:+916301725336" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Call Me</Link>
              <Link href="mailto:bhargavraju98@gmail.com" className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>Send Mail</Link>
            </div>
          </div>          

          <div className='col-span-1 relative h-56 mt-10 lg:h-96 lg:ml-20 lg:-mt-14'>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic1.png)] lg:animate-card bg-cover h-full w-44 lg:w-72 lg:-top-10 lg:-left-10 -rotate-3"></div>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic2.png)] lg:animate-card2 bg-cover h-full w-44 lg:w-72 left-24 -top-5 lg:-top-32 lg:left-48"></div>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic3.png)] lg:animate-card3 bg-cover h-full w-44 lg:w-72 left-44 top-6 lg:top-10 lg:left-72 rotate-6"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
