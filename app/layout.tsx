import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Car App",
  description: "Rent The Best Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relative"}>
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
