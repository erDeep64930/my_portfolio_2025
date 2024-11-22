import Heading from "@/app/shared/Heading";
import RotatedAppSkill from "@/app/shared/RotatedAppSkill";
import Image from "next/image";


const MySkills = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
    <Heading heading="My Skill"/>
        <div class="flex
 items-center py-6 md:py-12 flex-col md:flex-row px-7 md:px-0">
  
 {/* <!--left section --> */}
     <div className=" flex-1">
      <RotatedAppSkill />
     </div>

     {/* <!-- right section --> */}
     <div className=" flex-1">
       <div class=" mx-auto">
         <h1
           className="font-robot text-4xl font-semibold text-center">
           My Web Development journey with these Tech stack:~
         </h1>
         <p className="text-center font-rale text-sm lg:text-md mt-8 leading-6 tracking-wider">
         As a Web Developer involves working with different programming languages, frameworks, and tools to build the front-end and back-end of websites, ensuring they are functional, visually appealing, and user-friendly. have expertise in various technologies such as HTML, CSS, JavaScript and React . On the back-end, I am familiar with server-side languages like Node.js and work with databases such as MongoDB
         </p>
         <Image src="/mernstack.png" alt="" width={180} height={70} className="ml-32 mt-6"/>
       </div>
     </div>
 </div>
 </div>
  );
}

export default MySkills;
