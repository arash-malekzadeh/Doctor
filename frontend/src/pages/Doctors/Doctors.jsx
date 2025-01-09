import React from "react";
import DoctorCards from "./DoctorCards";
import { doctors } from "../../assets/data/doctors";
import Testimonial from "../../components/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">جستجوی پزشک ...</h2>
          <div className="max-w-[570px] mt-[30px] rounded-md flex items-center justify-between bg-[#0066ff2c]  mx-auto">
            <input
              type="search"
              className="py-4 pl-4 w-full cursor-pointer focus:outline-none  pr-2 bg-transparent placeholder:text-textColor"
              placeholder="جستجوی پزشک"
            />
            <button className="btn mt-0 rounded[0px] rounded-md">
              {" "}
              جستجو{" "}
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCards key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              آنچه مراجعین درباره ما می گویند
            </h2>
            <p className="text__para text-center">
              {" "}
              "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های بهداشتی
              بی‌نظیر و تخصصی ارائه می‌دهد."{" "}
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
