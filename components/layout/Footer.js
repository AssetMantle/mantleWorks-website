import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo-dark.png";

export default function Footer() {
  return (
    <footer className="am-mw-footer position-fixed bottom-0 start-0 end-0 w-100">
      <div className="am-mw-footer-line"></div>
      <div className="am-mw-footer-container d-flex flex-column flex-md-row align-items-center justify-content-md-between gap-2">
        <Link href="#hero" className="logo position-relative">
          <Image
            src={Logo}
            alt="mantleWorks Logo"
            className="w-100 h-100"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Link>

        <p className="m-0">&copy; MantleWorks 2024 - All rights reserved </p>
      </div>
    </footer>
  );
}
