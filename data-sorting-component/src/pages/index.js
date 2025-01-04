
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import Search from "@/components/Search";
import Title from "@/components/Title";
import Courses from "@/components/Courses";
import Navigation from "@/components/Navigation";
import { useState } from 'react';



const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function Home() {
  const [layout, setLayout] = useState('grid');

  return (
   <div>
    <Title />
    <main className={inter.className}>
      <div className="search-container">
      <Search />
      <Navigation layout={layout}/>

      </div>
   
     
     <Courses layout={layout}/>

    </main>
  

   </div>
  );
}
