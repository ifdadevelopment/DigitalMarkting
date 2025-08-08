import React from "react";
import Logo from "/assets/logo.png";
import {
  FiFacebook,
  FiMessageCircle,
  FiCamera,
  FiBell,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";

const ProfileInfoPage = () => {
  const links = [
    {
      href: "https://banarasdigitalsolution.com",
      icon: <FiGlobe size={22} />,
      text: "Go to Website",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      href: "https://whatsapp.com/channel/0029VbAdEW57z4kYIGQieJ2L",
      icon: <FiMessageCircle size={22} />,
      text: "Talk To Us",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      href: "https://www.facebook.com/share/1M9F3B3uDm/",
      icon: <FiFacebook size={22} />,
      text: "Like Page",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      href: "https://www.instagram.com/banaras_digital_solution?igsh=MXBxazRmb3V1Nmdobg==",
      icon: <FiCamera size={22} />,
      text: "Follow Us",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      href: "https://youtube.com/@banarasdigitalhub?si=Uvje_krqowilgqaE",
      icon: <FiBell size={22} />,
      text: "Subscribe",
      color: "bg-yellow-500 hover:bg-yellow-600 text-black hover:text-black",
    },
    {
      href: "https://t.me/ifdainstitute",
      icon: <FiMessageSquare size={22} />,
      text: "Join Us",
      color: "bg-gray-700 hover:bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-gray-900 text-white px-4 py-10">
      {/* Logo */}
      <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 transition-transform hover:scale-105">
        <img
          src={Logo}
          alt="Banaras Digital Solution"
          className="w-40 md:w-56"
        />
      </div>

      {/* Description */}
      <p className="text-center text-base md:text-lg font-medium max-w-md mb-8 leading-relaxed">
        Banaras Digital Solution provides a wide range of short-term and
        long-term job-oriented IT courses.
      </p>

      {/* Social Links */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center py-2 px-5 rounded-xl text-white font-medium shadow-md transition-all duration-300 transform hover:scale-105 ${link.color}`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black bg-opacity-20">
              {link.icon}
            </div>
            <span className="ml-4">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfoPage;
