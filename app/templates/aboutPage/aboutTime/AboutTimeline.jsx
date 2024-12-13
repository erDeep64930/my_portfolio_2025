import React from "react";

const AboutTimeline = () => {
  return (
    <div className="mt-32">
         <h1 className="text-3xl mt-34 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-neutral-700 text-center ">
           Frontend  Powerhouse <br /> Made by Deepak
          </h1>
      <div className="h-screen w-full flex justify-center items-center mt-40">
   
        <div className="max-w-5xl mx-auto w-full grid grid-cols-9 px-2">
          {/* <!-- Stack 1 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-sec rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">Frontend Developer</h1>
              <p className="text-gray-100 sm:text-sm text-xs">As frontend developer  in the IT industry, crafting user-facing components of web applications to ensure they are visually appealing, responsive, and user-friendly. I transform designs into functional code using HTML, CSS, and JavaScript, often utilizing frameworks like React or Angular to build dynamic interfaces. Collaborating with designers and backend developers, they integrate APIs, optimize performance, and ensure cross-browser compatibility. Frontend developers focus on accessibility standards to create inclusive applications while enhancing user satisfaction and retention. 
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-pri"></div>
            <div className="absolute w-6 h-6 rounded-full bg-pri z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* <!-- Stack 2 --> */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-pri"></div>
            <div className="absolute w-6 h-6 rounded-full bg-pri z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-sec rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">React Developer</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
              As a React developer, my role is to build dynamic, responsive, and scalable user interfaces using React’s component-based architecture. i create reusable components, manage state efficiently with tools like Redux, and ensure seamless API integration. By optimizing performance, implementing accessibility standards, and collaborating with teams, you deliver modern, user-friendly applications. React developers are essential in crafting interactive experiences, contributing to business success in an increasingly digital-first industry.
              </p>
            </div>
          </div>

          {/* <!-- Stack 3 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-sec rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">MERN Developer</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
              As a MERN developer (MongoDB, Express.js, React, Node.js), my role in the IT industry is to build full-stack web applications that handle both frontend and backend tasks seamlessly. i develop dynamic user interfaces with React, create server-side logic using Node.js and Express, and manage databases with MongoDB. By handling the complete development lifecycle, you streamline processes, ensure efficient API integrations, and deliver scalable, high-performance applications essential for modern businesses.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-pri"></div>
            <div className="absolute w-6 h-6 rounded-full bg-pri z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
