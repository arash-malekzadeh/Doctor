import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

const Home = () => {
  return (
    <>
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[32px] leading-[46px] md:text-[60px] md:leading-[70px] font-[600] text-headingColor ">
                    ما به بیماران برای یک زندگی سالم و مفید کمک می کنیم.
                  </h1>
                  <p className="text__para">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
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
                  <button className="btn"> درخواست ویزیت دکتر</button>
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
      </>
    </>
  );
};

export default Home;
