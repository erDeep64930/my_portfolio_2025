import Heading from "@/app/shared/Heading";
import React from "react";
import { FcAdvance } from "react-icons/fc";

const ContactMe = () => {
  return (
    <div>
      <div className=" lg:py-32 ">
        <Heading heading="Let's Talk" />
        <div className="w-full lg:w-11/12 xl:w-9/12 mx-auto mt-10 shadow-md shadow-sec">
          <div
            className="shadow-lg lg:rounded-xl py-12 px-12 relative bg-cover bg-center z-50 "
            style={{ backgroundImage: "url(ds1.jpg)" }}
          >
            <div className="bg-black/70 absolute inset-0 h-full lg:rounded-xl -z-10"></div>
            <div className="flex  flex-col-reverse gap-5 lg:flex-row items-end  lg:gap-0">
              <div className="w-full lg:w-1/2 text-pri">
                <div className="mb-5">
                  <p className="text-4xl font-bold font-rale mb-5">Find Us</p>
                  <div className="flex gap-6">
                    <div className="border-r border-white pr-4">
                      <p className="font-bold text-2xl font-robot">Hydrabad</p>
                      <p className="text-sm">Amerpet, South Telangana</p>
                    </div>
                    <div className="border-r border-white pr-4">
                      <p className="font-bold text-2xl font-robot">Jharkhand</p>
                      <p className="text-sm">Domchanch, Koderma</p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl font-robot">Delhi</p>
                      <p className="text-sm">Ashok Vihar , North Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-black/40 bg-blur-md  max-w-lg rounded-md shadow p-6 mx-auto lg:ml-auto space-y-6 text-sec">
                  <div>
                    <p className="text-4xl font-bold font-robot mb-4">
                      Get In Touch
                    </p>
                    <p className="">Need help or have some feedback for us?</p>
                    <p className="">
                      Fill out the form below to contact our team.
                    </p>
                  </div>
                  <form action="" className="space-y-4">
                    <div className="flex text-gray-600 dark:text-gray-100 gap-10">
                      <div>
                        <label htmlFor="first-name">First Name</label>
                        <input
                          placeholder="John"
                          type="text"
                          className="bg-transparent  py-2 px-3 w-full placeholder:text-gray-600  rounded-md border dark:border-gray-700 mt-0.5"
                          id="first-name"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          placeholder="Doe"
                          type="text"
                          className="bg-transparent py-2 px-3 w-full placeholder:text-gray-600  rounded-md border  mt-0.5"
                          id="last-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder="mail@example.com"
                        type="email"
                        className="bg-transparent dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 rounded-md border  mt-0.5"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        rows="4"
                        placeholder="Good Job! I only have this question..."
                        className="bg-white dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 dark:text-gray-100 rounded-md border dark:border-gray-700 mt-0.5"
                        id="message"
                      ></textarea>
                    </div>
                    <div>
                      <button className="py-2 px-3 border border-gray-600 rounded-md shadow bg-transparent text-pri hover:bg-white-500  hover:text-sec hover:shadow-xl  mr-1 flex items-center hover:scale-95 transition-all duration-300">
                        Get In Touch <FcAdvance className="ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
