import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omor Faruk Rony | Full Stack Web Developer",
  description: "Omor Faruk Rony is a full-stack web developer with 4 years of experience",
  keywords: "Omor Faruk Rony, full stack web developer, web developer, portfolio, projects, skills, experience, contact",
  authors: [{ name: "Omor Faruk Rony", url: "https://omorfarukrony.com" }],
  creator: "Omor Faruk Rony",
  publisher: "Omor Faruk Rony",
  openGraph: {
    title: "Omor Faruk Rony | Full Stack Web Developer",
    description: "Omor Faruk Rony is a full-stack web developer with 4 years of experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omor Faruk Rony | Full Stack Web Developer",
    description: "Omor Faruk Rony is a full-stack web developer with 4 years of experience",
    images: ["https://omorfarukrony.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://omorfarukrony.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification=1234567890",
  },
  appleWebApp: {
    title: "Omor Faruk Rony | Full Stack Web Developer",
    description: "Omor Faruk Rony is a full-stack web developer with 4 years of experience",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="Y6ga1NruSONi83oYQYxLcZ0tWoQ25Jc_6HgXY439epw" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
