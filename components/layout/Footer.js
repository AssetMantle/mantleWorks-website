import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo-dark.png";

export default function Footer() {
  return (
    <footer className="am-mw-footer position-fixed bottom-0 start-0 end-0 w-100">
      <div className="am-mw-footer-line"></div>
      <div className="am-mw-footer-container d-flex flex-column-reverse flex-md-row align-items-center justify-content-md-between gap-2">
        <div className="left">
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
        <div className="socials">
          <Link
            href="mailto:hello@mantleworks.one"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/mail.svg"
              alt="mantleWorks Logo"
              className="w-100 h-100"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/mantleworks"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/linkedin.svg"
              alt="mantleWorks Logo"
              className="w-100 h-100"
              width={16}
              height={16}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
          <Link
            href="https://x.com/MantleWorks"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/x-icon.svg"
              alt="mantleWorks Logo"
              className="w-100 h-100"
              width={16}
              height={16}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
