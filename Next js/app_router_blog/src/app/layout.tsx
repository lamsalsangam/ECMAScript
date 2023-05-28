import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import MyProfilePic from "@/components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sangam's Blog",
  description: "Created by Sangam Lamsal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
