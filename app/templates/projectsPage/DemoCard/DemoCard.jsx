import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaUser } from "react-icons/fa";

const DemoCard = () => {
  return (
    <div className="w-11/12 mx-auto max-w-[1080px]">
      <div className="rounded-xl bg-white p-4 pb-5 shadow-sm w-96">
        <Link href="#" className="block rounded-md overflow-hidden ">
          <Image
            src="/dj.jpg"
            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 " width={500} height={500} alt="project_images"
          />
        </Link>
        <div className="mt-3">
          <Link href="#">
            <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.hello from the top university.
            </h2>
          </Link>

          <div className="mt-3 flex space-x-4 ">
            <div className="flex text-gray-400 text-sm items-center ">
              <span className="mr-2 text-xs">
                <FaUser />
              </span>
              Blogiing Tips
            </div>

            <div className="flex text-gray-400 text-sm items-center ">
              <span className="mr-2 text-xs">
              <FaClock />
              </span>
              July 15, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
