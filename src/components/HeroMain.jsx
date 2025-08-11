import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import studentIcon1 from "/assets/mainimage.png";
import Modal from "./Modal";
import CourseEnquiryForm from "./CourseEnquiryForm";

const HeroMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-sm text-primary font-semibold">
          India’s Leading Institute
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-3 font-opens text-gray-900">
          AI Based <span className="text-primary">Professional Courses</span> <br />
          in Varanasi <span className="text-primary">With Placements</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-md text-base">
          We Provide courses - Graphic Design | Web Design | Web Development |
          Basic Stock Market | Professional Stock Market | Digital Marketing
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-sm">
          <span className="text-primary font-semibold">Google</span>
          <span className="text-primary font-semibold">facebook</span>
          <span className="font-semibold text-gray-800">4.9/5</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        <button
          className="mt-6 px-6 py-3 bg-primary hover:bg-blue-700 text-white rounded-md font-semibold shadow-md transition"
          onClick={() => setIsModalOpen(true)}
        >
          BOOK FREE DEMO CLASS →
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={studentIcon1} alt="Hero" className="w-full object-cover" />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4 text-center">
          Book Your Free Demo Class
        </h2>
        <CourseEnquiryForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default HeroMain;
