import "./globals.css";

//const montserrat = Montserrat({ subsets: ["latin"], weight:["300","400","700"] });

export const metadata = {
  title: "Mi portafolio",
  description: "Conoce de mi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-[#AAAAAA] font-Embed" >{children}</body>
    </html>
  );
}
