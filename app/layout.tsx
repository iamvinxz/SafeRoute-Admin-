import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderHome from "@/components/header-home";
import SideBar from "@/components/side-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SafeRoute",
  description: "Admin side of saferoute mobile application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen overflow-hidden flex flex-col`}
      >
        <HeaderHome />
        <main className="flex flex-1 overflow-hidden">
          <SideBar />
          <div className="flex-1 bg-accent overflow-y-auto">
            <div className="max-w-7xl mx-auto p-6">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
