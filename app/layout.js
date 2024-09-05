import { inter } from "@/config/fonts/GoogleFonts";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/config/styles/index.scss";

export const metadata = {
  title: "MantleWorks",
  description: "The institutional assetization arm of AssetMantle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* open graphs start */}
        <meta property="og:site_name" content="MantleWorks" />
        <meta property="og:url" content="https://mantleworks.one" />
        <meta property="al:web:url" content="https://mantleworks.one" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:title" content="MantleWorks" />
        <meta
          property="og:description"
          content="The institutional assetization arm of AssetMantle"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
