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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
