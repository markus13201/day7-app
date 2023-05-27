import "../styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/nav/page.js";
import Footer from "../components/footer/page.js";
import { Providers } from "../providers/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
       <Providers>
          <Nav />
           {children}
         <Footer />
        </Providers>
       </body>
    </html>
  );
}
