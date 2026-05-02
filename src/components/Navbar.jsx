'use client'
import Image from "next/image";
import Link from "next/link";
import avatarLogo from "@/assets/user.png"
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();
  return (
    <div className="flex justify-between items-center mt-5 container mx-auto">
      <div className=""></div>

      <ul className="flex gap-4">
        <li>
          <Link href={"/"} className={`p-2 rounded-2xl ${pathName === '/' ? "bg-gray-200" : " "}`}>Home</Link>
        </li>
        <li>
          <Link href={"/about"} className={`p-2 rounded-2xl ${pathName === '/about' ? "bg-gray-200" : " "}`}>About</Link>
        </li>
        <li>
          <Link href={"/career"} className={`p-2 rounded-2xl ${pathName === '/career' ? "bg-gray-200" : " "}`}>Career</Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Image src={avatarLogo} alt="avatar logo" width={40} height={40}></Image>
        <button className="btn btn-primary"><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
