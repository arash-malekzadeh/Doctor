import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">تماس با ما</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para ">
          مشکلی فنی دارید؟ می‌خواهید درباره یک ویژگی آزمایشی بازخورد ارسال کنید؟
          به ما اطلاع دهید.
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              ایمیل شما
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              موضوع
            </label>
            <input
              type="text"
              id="subject"
              placeholder="چگونه می توانیم کمکتان کنیم؟"
              className="form__input mt-1"
            />
          </div>

          <div className="sm:col-span-7">
            <label htmlFor="message" className="form__label">
              پیغام شما
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="پیغام خود را بگذارید  "
              className="form__input mt-1"
            />
          </div>

          <button type="submit" className="btn rounded sm:w-fit">
            ارسال پیغام
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
