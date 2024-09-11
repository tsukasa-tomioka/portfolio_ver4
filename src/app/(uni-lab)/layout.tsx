import type { Metadata } from "next";
import "@/sass/globals.scss";
import StoreProvider from "@/lib/store/provider";
import styles from "./_layout.module.scss";
import { zenKakuGothicNew_w400 } from "@/lib/fonts";
import Footer from "@/components/organisms/Footer";
import Header from "@/app/(uni-lab)/components/organisms/Header";
import NavigatingType from "../(base)/components/atoms/NavigatingType";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function UniLabLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${styles.html}`}>
      <StoreProvider>
        <body className={`${styles.body} ${zenKakuGothicNew_w400.className}`}>
          <NavigatingType />
          <Header />
          <div className={`${styles.container}`}>
            {children}
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
          <div className={`${styles.globalBg}`}></div>
        </body>
      </StoreProvider>
    </html>
  )
}
