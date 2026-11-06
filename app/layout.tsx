import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Samantha Salazar | Web Development Portfolio",
  description:
    "Samantha Salazar's web development portfolio, featuring projects and learning in React and Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}