import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setreviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor font-semibold mb-4  text-[16px] leading5">
          شما چه امتیازی می دهید؟
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor font-semibold mb-4  text-[16px] leading5">
          نظر یا پیشنهاد خود را به اشتراک بگذارید.{" "}
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="پیغام خود را بگذارید"
          rows="5"
          onChange={() => setreviewText(e.target.value)}
        ></textarea>
      </div>
      <button className="btn" onClick={handleSubmitReview} type="submit">
        ثبت نظر
      </button>
    </form>
  );
};

export default FeedbackForm;
