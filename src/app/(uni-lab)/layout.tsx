import type { Metadata } from "next";
import "@/sass/globals.scss";
import StoreProvider from "@/lib/store/provider";
import styles from "./_layout.module.scss";
import { zenKakuGothicNew_w400 } from "@/lib/fonts";
import Footer from "@/components/organisms/Footer";
import ULHeader from "@/components/organisms/ULHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
  base
}: Readonly<{
  children: React.ReactNode;
  base: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${styles.html}`}>
      <body className={`${styles.body} ${zenKakuGothicNew_w400.className}`}>
        <ULHeader />
        <div className={`${styles.container}`}>
          <StoreProvider>
            {children}
            {base}
          </StoreProvider>
        </div>
        <Footer />
        <div className={`${styles.globalBg}`}></div>
      </body>
    </html>
  )
}
