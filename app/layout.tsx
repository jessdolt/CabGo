import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Wrapper from "@/components/Wrapper";
import { Inter } from "next/font/google";
import BookingProvider from "@/hooks/context/BookingProvider";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import "react-toastify/dist/ReactToastify.css";
import CheckoutProvider from "@/hooks/context/CheckoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CabGo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <BookingProvider>
        <CheckoutProvider>
          <html lang="en">
            <body>
              <main className={inter.className}>
                <Navbar />
                <Wrapper>{children}</Wrapper>
              </main>
              <ToastContainer
                position="bottom-right"
                theme="colored"
                autoClose={2000}
                hideProgressBar={true}
              />
            </body>
          </html>
        </CheckoutProvider>
      </BookingProvider>
    </ClerkProvider>
  );
}
