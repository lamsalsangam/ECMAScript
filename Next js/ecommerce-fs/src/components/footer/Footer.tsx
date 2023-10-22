import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 mt-16 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Cateogories</h3>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>Laptop</Link>
            <Link href={"#"}>Desktop</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>TV</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <p className="mb-2">
              At our electronics store, we are dedicated in providing the
              gretest and latest accessories to our customers. With a wide
              selection of Phones, TVs, Laptops, Watches and Accessories.
            </p>
            <p>&copy; {new Date().getFullYear()} E~Shop. All right reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <MdFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <RiTwitterXFill size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillGithub size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
