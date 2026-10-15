import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Lolá - Gamificando a fala",
  description: "PWA de fonoaudiologia infantil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased bg-gray-100 min-h-screen flex items-center justify-center`}>
        <div className="w-[375px] min-h-[750px] max-h-[850px] h-[85dvh] bg-white rounded-[32px] flex flex-col overflow-hidden relative shadow-2xl border-4 border-gray-300">
          {children}
        </div>
      </body>
    </html>
  );
}