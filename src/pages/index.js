import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/developer-pic-1.png'
import { homePageContent, homePageHeading } from '@/components/static';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Footer from '@/components/Footer';

export default function Home() {
  return (
   <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content='Generated by create next app'/>
    </Head>
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt='ProfileImg' className='w-full h-auto'/>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text={homePageHeading} className='!text-6xl !text-left'/>
            <p className='my-4 text-base font-medium'>{homePageContent}</p>
            <div className='flex items-center self-start mt-2'>
              <Link href="/Resume.pdf" target={"_blank"} 
              className='flex items-center p-2.5 px-6
               bg-dark text-light  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
               border-2 border-solid border-transparent hover:border-dark'
              //  download={true} //for downloading resume uncomment this
              >
                Resume <LinkArrow className='w-6 ml-1'/>
              </Link>
              <Link href="mailto:nevinedwin100@gmail.com" 
              className='ml-4 text-lg font-medium capitalize text-dark underline'
              target={"_blank"}>Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
    <Footer/>
   </>
  )
}