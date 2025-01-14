import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import faqImg from "../assets/images/faq-img.png";
import ServiceList from "../components/services/ServiceList";
import featureImg from "../assets/images/feature-Img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from "./Doctors/DoctorList";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px] ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[32px] text-justify leading-[46px] md:text-[60px] md:leading-[70px] font-[600] text-headingColor ">
                  ما به بیماران برای یک زندگی سالم و مفید کمک می کنیم.
                </h1>
                <p className="text__para text-justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <button className="btn text-[22px]"> درخواست ویزیت دکتر</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">سالهای تجربه</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">موقعیت کلینیک</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">رضایت بیماران</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full " src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              ارائه بهترین سرویس های درمانی
            </h2>
            <p className="text__para text-center">
              "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های بهداشتی
              بی‌نظیر و تخصصی ارائه می‌دهد."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  جستجوی پزشک
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های
                  بهداشتی بی‌نظیر و تخصصی ارائه می‌دهد."
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  جستجوی موقعیت
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های
                  بهداشتی بی‌نظیر و تخصصی ارائه می‌دهد."
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  ثبت نوبت ویزیت{" "}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های
                  بهداشتی بی‌نظیر و تخصصی ارائه می‌دهد."
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--- - -- ----about secton ---------------    */}
      <section></section>
      {/*--- - -- ----about secton ---------------    */}

      <About />
      {/*--- - -- ----service secton ---------------    */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> سرویس های پزشکی ما</h2>
            <p className="text__para text-center">
              {" "}
              "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های بهداشتی
              بی‌نظیر و تخصصی ارائه می‌دهد."
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/*--- - -- ----service section ---------------    */}

      {/* ============feature Section =====================  */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row ">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                دریافت درمان مجازی
                <br /> در همه زمانها
              </h2>
              <ul className="pl-4">
                <li className="text__para">1-زمان‌بندی ویزیت به‌صورت مستقیم</li>
                <li className="text__para">2-پزشک خود را اینجا جستجو کنید</li>
                <li className="text__para">
                  3-پزشکانی که بیماران جدید را می‌پذیرند مشاهده کنید و از ابزار
                  زمان‌بندی آنلاین برای انتخاب زمان ملاقات استفاده کنید.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] right-0 md:bottom-[100px] md:right-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]  ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[12px] leading[10px] lg:text-[16px] lg:leading-5 text-headingColor font-[600]  ">
                      سه شنبه , 24
                    </p>
                    <p className="text-[12px] leading[10px] lg:text-[16px] lg:leading-5 text-textColor font-[600]  ">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img className="w-6 h-4" src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] px-2 py-1 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  مشاوره
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[10px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    دکتر پزشک زاده
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============End Of feature Section =====================  */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> پزشکان برجسته ما</h2>
            <p className="text__para text-center">
              {" "}
              "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های بهداشتی
              بی‌نظیر و تخصصی ارائه می‌دهد."
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/*===============Faq Section==========*/}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block ">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2>سؤالات رایج بیماران عزیز ما</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*===============Faq Section End==========*/}

      {/*===============Testimonial Section ==========*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              {" "}
              مراجعین درباره ما چه میگویند؟
            </h2>
            <p className="text__para text-center">
              {" "}
              "مراقبت در سطح جهانی برای همه. سیستم بهداشت ما مراقبت‌های بهداشتی
              بی‌نظیر و تخصصی ارائه می‌دهد."
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

      {/*===============Testimonial Section End ==========*/}
    </>
  );
};

export default Home;
