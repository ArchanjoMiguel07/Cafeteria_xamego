import { Dancing_Script, Pacifico, Roboto_Slab } from "next/font/google";
import "./globals.css";

// 1. Configurando a Dancing Script (adicionado peso 400)
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing",
});

// 2. Configurando a Pacifico (adicionado peso 400 exigido pelo erro)
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// 3. Configurando a Roboto Slab
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Cafeteria Xamego",
  description: "O aconchego em forma de café",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${dancingScript.variable} ${pacifico.variable} ${robotoSlab.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}