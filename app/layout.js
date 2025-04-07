import { Outfit, Ovo as OvoFont } from "next/font/google"; 
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = OvoFont({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - AmirHoseinRashidi",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} scroll-smooth  ` }>
      <body className={`antialiased font-outfit font-ovo bg-white text-black leading-8 overflow-x-hidden   dark:bg-black
        dark:text-white` }  >
        {children}
      </body>
    </html>
  );
}