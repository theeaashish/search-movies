import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata: Metadata = {
  title: "Movie Search App",
  description: "Discover trending and latest movies",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-900`}
        style={{
          backgroundImage: "url('/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
