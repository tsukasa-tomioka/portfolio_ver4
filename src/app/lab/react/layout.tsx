import "@/sass/globals.scss";
import commonStyles from "./_common.module.scss"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function LabLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="ja">
      <body className={commonStyles.body}>
        {children}
      </body>
    </html>
  </>
}
