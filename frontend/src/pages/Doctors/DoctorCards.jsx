import React from "react";
import starIcon from "../../assets/images/star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCards = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalPatients,
    totalRating,
    photo,
    specialty,
    hospital,
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <img src={photo} className="w-full" alt="" />
      <h2 className="text-[18px] mt-3 lg:mt-5 leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700]  ">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between ">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 rounded lg:text-[16px] font-semibold lg:leading-7 ">
          {specialty}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading[30px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            در {hospital}
          </p>
        </div>
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                 flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCards;
