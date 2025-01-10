import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md  ">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">قیمت ویزیت</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          300000 تومان
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          بازه های زمانی موجود
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              یکشنبه
            </p>
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              4:00 PM الی 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              سه شنبه
            </p>
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              4:00 PM الی 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              چهارشنبه
            </p>
            <p className="text-[15px] leadiing-6 text-textColor font-semibold ">
              4:00 PM الی 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">ثبت نوبت</button>
    </div>
  );
};

export default SidePanel;
