import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  return (
    <div className="sticky top-0 z-30 w-full bg-slate-200 shadow-sm">
      <div className="border-b-[1px] py-4"></div>
      <Container>
        <div className="item-center md-gap-0 flex justify-between gap-3">
          <Link href={"/"} className={`${redressed.className} font-bold`}>
            E-Shop
          </Link>
          <div className="hidden md:block">SearchBar</div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>CartCount</div>
            <div>UserMenu</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
