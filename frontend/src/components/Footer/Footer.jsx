import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/c/CodingWithMuhib",
    icon: <AiFillYoutube className="■group-hover: text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/codingwithmuhib",
    icon: <AiFillGithub className="■group-hover: text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/muhib160.official/",
    icon: <AiOutlineInstagram className=" group-hover: text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/codingwithmuhib/",
    icon: <RiLinkedinFill className="group-hover: text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "خانه",
  },
  {
    path: "/",
    display: "درباره ما",
  },
  {
    path: "/services",
    display: "خدمات",
  },
  {
    path: "/",
    display: "وبلاگ",
  },
];

const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "یافتن پزشک",
  },
  {
    path: "/",
    display: "درخواست وقت ملاقات",
  },
  {
    path: "/",
    display: "یافتن مکان",
  },
  {
    path: "/",
    display: "دریافت نظر",
  },
];

const quickLink03 = [
  {
    path: "/",
    display: "کمک مالی ",
  },
  {
    path: "/",
    display: "تماس با ما",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="pb-16 pt-10 bg-gray-100">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
              <img src={logo} alt="" />
              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                Copyright {year} ایجادشده توسط آرش ملک زاده
              </p>

              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group bg-black hover:bg-primaryColor hover:border-none"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-[20px] leading[30px] font-[700] mb-6 text-headingColor">
                لینک های سریع
              </h2>
              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      className="text-[16px] leading-7 font-[600] text-textColor"
                      to={item.path}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] leading[30px] font-[700] mb-6 text-headingColor">
                من می خواهم:
              </h2>
              <ul>
                {quickLink02.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      className="text-[16px] leading-7 font-[600] text-textColor"
                      to={item.path}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] leading[30px] font-[700] mb-6 text-headingColor">
                پشتیبانی
              </h2>
              <ul>
                {quickLink03.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      className="text-[16px] leading-7 font-[600] text-textColor"
                      to={item.path}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
