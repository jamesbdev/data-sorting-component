
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import Search from "@/components/Search";
import Title from "@/components/Title";
import CourseCard from "@/components/CourseCard";
import data from "../../public/data.json"
import Courses from "@/components/Courses";
import Navigation from "@/components/Navigation";

const courses = data.courses

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
  return (
   <div>
    <Title />
    <main className={inter.className}>
      <div className="search-container">
      <Search />
      <Navigation />

      </div>
   
     
     <Courses />

    </main>
  

   </div>
  );
}
