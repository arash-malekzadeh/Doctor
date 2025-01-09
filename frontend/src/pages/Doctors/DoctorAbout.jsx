import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          درباره{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            آرش ملک زاده
          </span>
        </h3>
        <p className="text__para text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          تحصیلات
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("12-01-2020")}-{formateDate("12-01-2023")}{" "}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {" "}
                PHD در جراحی
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              {" "}
              تهران، بیمارستان سینا
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("12-01-2010")}-{formateDate("12-01-2016")}{" "}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {" "}
                PHD در جراحی
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              {" "}
              تهران، بیمارستان سینا
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          تجربیات
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowcolor text-[15px] leading-6 font-semibold ">
              {formateDate("12-01-2020")}-{formateDate("12-01-2023")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              {" "}
              جراح ارشد
            </p>
            <p className="text-[15px] leading-5 font-medium text-textColor">
              {" "}
              تهران، بیمارستان سینا
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowcolor text-[15px] leading-6 font-semibold ">
              {formateDate("12-01-2020")}-{formateDate("12-01-2023")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              {" "}
              جراح ارشد
            </p>
            <p className="text-[15px] leading-5 font-medium text-textColor">
              {" "}
              تهران، بیمارستان سینا
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
