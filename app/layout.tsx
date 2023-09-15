import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Wrapper from "@/components/Wrapper";
import { Inter } from "next/font/google";

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
      <html lang="en">
        <body>
          <main className={inter.className}>
            <Navbar />
            <Wrapper>{children}</Wrapper>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
