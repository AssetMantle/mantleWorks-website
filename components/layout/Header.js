import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo.png";

export default function Header() {
  return (
    <header className="am-mw-header position-fixed top-0 start-0 end-0 w-100">
      <div className="am-mw-header-container">
        <div className="am-mw-header-container-content d-flex">
          <Link href="#hero" className="logo position-relative">
            <Image
              src={Logo}
              alt="mantleWorks Logo"
              className="w-100 h-100"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
