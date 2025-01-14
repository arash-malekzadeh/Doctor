import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md ">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          سلام<br></br>
          <span className="text-primaryColor">خوش آمدید</span>
        </h3>
        <form action="" className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] px-4 py-3 rounded-lg"
            >
              Login
            </button>
          </div>
          <p className="mt-5">
            حساب کاربری ندارید؟{" "}
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              ثبت نام
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
