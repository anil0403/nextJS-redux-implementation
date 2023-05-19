"use client";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/components/NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
