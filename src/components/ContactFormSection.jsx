import React from "react";
import { CheckCircle } from "lucide-react";
import Logo from "/assets/logo2.png"
import FormControl from "./FormControl";
const contactPoints = [
  {
    text: `100% Practical & Job-Oriented Training`,
    isHTML: true,
  },
  {
    text: ` Expert Trainers with Industry Experience`,
    isHTML: true,
  },
  {
    text: `Online & Offline Learning Modes`,
    isHTML: true,
  },
  {
    text: `Certifications for Each Course`,
    isHTML: true,
  },
  {
    text: `Real Tools, Projects, and Live Assignments`,
    isHTML: true,
  },
  {
    text: `Career & Freelancing Guidance + Placement Support`,
    isHTML: true,
  },
];

const ContactFormSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-start">
          <div className="w-full">
             <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-4">
  <span className="text-primary hover:opacity-60 transition">Program </span>{" "}
   <span className="text-primary hover:opacity-60 transition">Overview</span>{" "}
  {/* <span className="text-primary hover:opacity-60 transition">Course</span>  */}
  <span className="text-black">/ Training Highlights</span>
</h2>
            <h4 className="text-lg sm:text-sm font-semibold text-gray-600 mb-4">
              Unlock a complete career-focused training program that covers the most in-demand skills across Digital Marketing,
            </h4>
            <p className=" text-sm text-gray-600 mb-6">
              Web & Graphic Design, Financial Markets, and Accounting. Designed for students, job seekers, working professionals, entrepreneurs, and freelancers, this program gives you the flexibility to learn what matters most — practically and professionally.
            </p>
             <h4 className="text-lg sm:text-sm font-semibold text-gray-600 mb-4">
              Features Of The Course
            </h4>
            <ul className="space-y-3">
              {contactPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
                  {point.isHTML ? (
                    <span dangerouslySetInnerHTML={{ __html: point.text }} />
                  ) : (
                    <span>{point.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary rounded-xl text-white p-6 sm:p-8 w-full">
            <div className="text-center mb-6">
              <img
                src={Logo}
                alt="Logo"
                className="mx-auto h-16 mb-3"
              />
              <h4 className="text-xl sm:text-2xl font-bold">Take a free session today!!</h4>
              <p className="text-sm text-red-100">
                Go Digital | Go Global<br/>Speak To Our Specialist - +91 9161276060
              </p>
            </div>
<FormControl />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
