import { navLinks } from "@/app/constant/navLinks";
import Link from "next/link";


const DemoNav = () => {
  return (
    <div>
        <div className="backdrop-blur-sm bg-white/20  w-[22rem] mx-auto p-2 rounded-2xl border border-gray-600">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium  sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
        {navLinks.map((link) => (
          <li
            className="h-3/4 flex items-center justify-center relative mx-auto"
            key={link.id}
            
          >
            <Link
              className={`
                flex w-full items-center justify-center px-3 py-3 text-pri hover:text-sec transition ",
               `
               }
              href={link.path}
             
            >
              {link.name}

              
                <span
                  className="bg-black/10 rounded-full absolute inset-0 -z-10 "
                 
                ></span>
              
            </Link>
          </li>
        ))}
      </ul>

        </div>

      
    </div>
  );
}

export default DemoNav;
