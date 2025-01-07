// وارد کردن تصاویر پزشکان از مسیر مشخص‌شده
import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

// تعریف لیستی از پزشکان به همراه اطلاعاتشان
export const doctors = [
  {
    id: "01", // شناسه پزشک
    name: "دکتر احمد علوی", // نام پزشک
    specialty: "جراح عمومی", // تخصص پزشک
    avgRating: 4.9, // میانگین امتیازات
    totalRating: 320, // تعداد کل امتیازات
    photo: doctorImg01, // عکس پزشک
    totalPatients: 1800, // تعداد بیماران
    hospital: "بیمارستان آدورا، تهران", // نام بیمارستان
  },
  {
    id: "02",
    name: "دکتر سارا محمودی",
    specialty: "متخصص مغز و اعصاب",
    avgRating: 4.7,
    totalRating: 290,
    photo: doctorImg02,
    totalPatients: 1700,
    hospital: "بیمارستان سینا، اصفهان",
  },
  {
    id: "03",
    name: "دکتر فرید حیدری",
    specialty: "متخصص پوست و مو",
    avgRating: 4.8,
    totalRating: 310,
    photo: doctorImg03,
    totalPatients: 1600,
    hospital: "بیمارستان دی، مشهد",
  },
];
