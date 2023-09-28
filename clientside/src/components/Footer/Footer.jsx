import React from "react";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import git from "../../assets/git.png";
import linkdin from "../../assets/linkdin.png";
import wp from "../../assets/wp.png";
import {LiaHospitalSolid} from "react-icons/lia";
import { BiSolidPhoneCall } from "react-icons/bi";
import {BsFillPrinterFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
const Footer = () => {
  const footerSections = [
    {
      title: "DigiLab",
      content: "From their creative laboratory, Disclosure issues Alchemy, their fourth album which had remained a secret until recent days. —Lars Brandle, Billboard, 14 July 2023",
    },
    {
      title: "Patinet",
      links: [
        { label: "find Test", href: "#" },
        { label: "Book a Test", href: "#" },
        { label: "DownLoad Report", href: "#" },
        { label: "Health packages", href: "#" },
      ],
    },
    {
      title: "About us",
      links: [
        { label: "Our Vision", href: "/" },
        { label: "Our Mission", href: "/" },
        { label: "Our Journey", href: "/" },
        { label: "Why DigiLab", href: "/" },
      ],
    },
    {
      title: "Contect Us",
      content: (
        <>
          <div className="mb-4 flex items-center">
        <div className="mr-2">
          <LiaHospitalSolid />
        </div>
        <span>New York, NY 10012, US</span>
      </div>
      <div className="mb-4 flex items-center">
        <div className="mr-2">
          <AiOutlineMail />
        </div>
        <span>info@example.com</span>
      </div>
      <div className="mb-4 flex items-center">
        <div className="mr-2">
          <BiSolidPhoneCall />
        </div>
        <span>+ 01 234 567 88</span>
      
       
      </div>
      <div className="mb-4 flex items-center">
        <div className="mr-2">
        <BsFillPrinterFill/>
        </div>
        <span> + 01 234 567 89</span>
      
      </div>
          
        </>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-l from-blue-900 to-blue-600 via-blue-700 text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">{section.title}</h2>
              {section.links ? (
                <ul className="text-white opacity-50 font-medium">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <a href={link.href} className="hover:cursor-pointer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-white opacity-50 font-semibold">{section.content}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6  bg-blue-900 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          © 2023 <a href="/">DigiLab</a>. All Rights Reserved.
        </span>
        <div className="md:col-md-5 col-12 mb-4 mb-md-0">
          {/* Email input */}
          <div className="mb-4">
            <div>
              <label className="block mt-1 text-white" htmlFor="form5Example25">
                Email address
              </label>

              <div className="flex items-center">
                <input type="email" id="form5Example25" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:ring-opacity-50 text-black" placeholder="Enter your email address" />

                <button type="submit" className="inline-block ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
          <div className="flex items-center justify-center">
            <a href="https://github.com/kriyanshikamani" target="_blank">
              <img src={fb} alt="fb" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/kriyanshikamani" target="_blank">
              <img src={wp} alt="wp" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/kriyanshikamani" target="_blank">
              <img src={ig} alt="ig" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/kriyanshikamani" target="_blank">
              <img src={git} alt="git" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/kriyanshikamani" target="_blank">
              <img src={linkdin} alt="linkdin" className="w-6 h-6 mx-2 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
