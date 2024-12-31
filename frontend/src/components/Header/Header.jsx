import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navLink = [
  { path: "/home", display: "خانه" },
  { path: "/doctors", display: "یافتن پزشک" },
  { path: "/services", display: "خدمات" },
  { path: "/contact", display: "تماس با ما" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stickyheader");
      } else headerRef.current.classList.remove("stickyheader");
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("showMenu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img className="logo" src={logo} alt="لوگو" />
          </div>
          {/*===========menu=========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[20px] leading-7 font-[600]"
                        : "text-textColor text-[20px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="cursor-pointer w-[35px] h-[35px] rounded-full">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="کاربر"
                  />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="cursor-pointer bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                ورود
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
