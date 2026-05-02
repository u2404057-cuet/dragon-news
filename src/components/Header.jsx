import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";


const Header = () => {
  return (
    <div className="flex items-center flex-col mt-10 space-y-4">
      <Image src={logo} alt="logo" width={300} height={200}></Image>
      <h2>Journalism Without Fear or Favour</h2>
      <p className="">{format(new Date(), 'EEEE, MMM dd, yyyy')}</p>
    </div>
  );
};

export default Header;
