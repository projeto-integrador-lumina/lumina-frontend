import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lolá - Gamificando a fala",
  description: "PWA de fonoaudiologia infantil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}></body>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-[375px] min-h-screen bg-white rounded-[32px] flex flex-col overflow-hidden relative">
          {children}
        </div>
      </div>
    </html>
  );
}
