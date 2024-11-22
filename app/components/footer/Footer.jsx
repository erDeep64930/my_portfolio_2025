import { navLinks } from "@/app/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 border-b-2 border-t-[1px] border-pri items-center">
        {/* logo  */}
        <div className="flex flex-col items-center justify-center space-y-10 my-4">
          <Image src="/dpk.JPG" alt="logo" width="80" height="80" className="rounded-full"/>
          <p className="text-sec">© <span className="text-pri">All Right Reserved 2025</span></p>

        </div>
        {/* link */}
        <div className="my-4">
          <p className="text-2xl font-semibold text-center font-rale  text-sec">Pages</p>
          <ul className="text-center space-y-8 font-robot">
            {navLinks.map((link,i)=>{
              return (
                <Link href={link.path} key={i}>
                  <li  className="text-pri font-normal hover:text-sec cursor-pointer">{link.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        {/* contact */}
        <div className="flex flex-col space-y-2 my-4 md:my-0 lg:-my-4 ">
          <p className="text-2xl font-semibold text-center font-rale  text-sec ">Contact Me</p>

          <div className="flex justify-between items-center p-2 text-pri">
            <FaPhone />
            <p>+91-9939183692</p>

          </div>

          {/*  */}

          <div className="flex justify-between items-center p-2 text-pri">
          <SiGmail />
            <p>erdeep64930@gmail.com</p>

          </div>
        </div>

      </div>

     
    </div>
  );
};

export default Footer;
