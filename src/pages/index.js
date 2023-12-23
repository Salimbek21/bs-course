import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroComponent from '@/components/Hero'
import Brands from '@/components/Brands'
import RecommendationProducts from '@/components/RecommendationProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
     {/* <HeroComponent/> */}
      <Brands/>
      <RecommendationProducts/>

    </>
  )
}
