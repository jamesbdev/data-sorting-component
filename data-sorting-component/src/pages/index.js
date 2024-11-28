
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import Search from "@/components/Search";
import Title from "@/components/Title";

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
     <Search />
      {/* layout icons */}
      <nav className="layout-icons">
        <ul>
          <li>Grid</li>
          <li>List</li>
        </ul>
      </nav>
      {/* course cards */}
    </main>
  

   </div>
  );
}
