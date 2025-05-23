import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "midigital | Dijital Baskı, Tabela ve Reklam Hizmetleri",
  description: "midigital; dijital baskı, tabela tasarımı, araç giydirme, cephe kaplama ve reklam çözümlerinde uzmanlaşmış yaratıcı bir ajanstır. Uygun fiyatlı, kaliteli ve hızlı üretim ile İstanbul merkezli profesyonel reklam hizmetleri sunar.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <div className="global-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/videos/keyboard.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navbar />
        <div className="global-content-overlay">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}