import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroComponent from "@/components/Hero";
import Brands from "@/components/Brands";
import RecommendationProducts from "@/components/RecommendationProducts";
import CheapProduct from "@/components/CheapProducts";
import AboutFor from "@/components/AboutForCategories";
AboutFor;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <HeroComponent/> */}
      <CheapProduct />
      <AboutFor />
      <Brands />
      <RecommendationProducts />
    </>
  );
}
