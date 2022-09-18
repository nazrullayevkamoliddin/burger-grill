// all images imported from images directory
import product_01_image_01 from "../images/product1.1.jpg";
import product_01_image_02 from "../images/product1.2.jpg";
import product_01_image_03 from "../images/product1.3.jpg";
import product_01_image_04 from "../images/product1.4.jpg";
import product_01_image_05 from "../images/product1.5.jpg";
import product_01_image_06 from "../images/product1.6.jpg";

import product_02_image_01 from "../images/product3.2.png";
import product_02_image_02 from "../images/product3.2.png";
import product_02_image_03 from "../images/product3.2.png";

import product_03_image_04 from '../images/product5.1.png'

import product_03_image_01 from "../images/product2.1.png";
import product_03_image_02 from "../images/product2.2.png";
import product_03_image_03 from "../images/product2.1.png";

import product_04_image_01 from "../images/product4.1.png";
import product_04_image_02 from "../images/product4.2.png";
import product_04_image_03 from "../images/product4.3.png";

import product_05_image_01 from '../images/qanotcha1.png'

// Ichimliklar

import adrenalin from '../images/drink_adrenalin_1.png'
import pepsi from '../images/drink_pepsi_1.png'
import bliss from '../images/drink_bliss_1.png'
import meva from '../images/drink_meva_1.png'
import dew from '../images/drink_dew_1.png'
import lipton from '../images/drink_lipton_1.png'
import rockstar from '../images/drink_rockstar_1.png'
import pepsi1 from '../images/razlivniy.png'
// import jescoEnergy from '../images/jesco_energy-removebg-preview.png'
import jesco from '../images/drink_jesco_sok.jpg'
import nashsad from '../images/nash_sad.jpg'

// Shirinliklar
import medovik from '../images/dessert_medovik_1.png'
import blina from '../images/blina.png'

// import product_05_image_01 from "../images/product_04.jpg";
// import product_05_image_02 from "../images/product_08.jpg";
// import product_05_image_03 from "../images/product_09.jpg";

// import product_06_image_01 from "../images/bread(1).png";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 15.000,
    image01: product_01_image_03,
    category: "Burger",

    desc: "Bu mahsulotni siz qulay usulda xarid qilishingiz mumkin: Bizning Click: 8600 0204 5003 6293    --> Jumaboyev Ixvoljon Aloqa uchun: +998 97 988 10 10",
  },

  {
    id: "02",
    title: "Gamburger",
    price: 18.000,
    image01: product_01_image_01,
    category: "Burger",

    desc: "Gamburger odatda to'g'ralgan bulochka ichiga solingan qiyma go'shtdan, odatda mol go'shtidan iborat taomdir. Gamburgerlar ko'pincha pishloq, salat, pomidor, piyoz, tuzlangan bodring, pastırma yoki chili bilan xizmat qiladi; ketchup, xantal, mayonez, lazzat kabi soslar; va ko'pincha ular kunjut bulochkalariga qo'yiladi. Pishloq solingan gamburgerga cheeseburger deyiladi.Gamburger odatda to'g'ralgan bulochka ichiga solingan qiyma go'shtdan, odatda mol go'shtidan iborat taomdir. Gamburgerlar ko'pincha pishloq, salat, pomidor, piyoz, tuzlangan bodring, pastırma yoki chili bilan xizmat qiladi; ketchup, xantal, mayonez, lazzat kabi souslar; va ko'pincha ular kunjut bulochkalariga qo'yiladi. Pishloq solingan gamburgerga cheeseburger deyiladi.",
  },

  {
    id: "03",
    title: "Cheese Burger",
    price: 19.000,
    image01: product_01_image_02,
    category: "Burger",

    desc: "Chizburger - bu pishloqli gamburger. An'anaga ko'ra, bir tilim pishloq go'shtli patti ustiga qo'yiladi. Pishloq odatda pishirilgan gamburgerga xizmat qilishdan oldin qisqa vaqt ichida qo'shiladi, bu pishloqning erishiga imkon beradi. Chizburgerlar tarkibi, tarkibi va tarkibidagi o'zgarishlarni o'z ichiga olishi mumkin.",
  },

  {
    id: "04",
    title: "Chiken Chis",
    price: 18.000,
    image01: product_01_image_04,
    category: "Burger",

    desc: "Qandaydir mazali lazzatlanishni xohlaysizmi? Agar shunday bo'lsa, bizda siz uchun mazali retsept mavjud. Mana, har qanday pishloqni sevuvchilarni aqldan ozdiradigan juda mazali, ammo tayyorlash oson tovuqli pishloqli burger retsepti! Burger bulochkalaridan pishloq oqib chiqsa, bu gazak retsepti barcha yoshdagi odamlarga yoqadi.",
  },

  {
    id: "05",
    title: "Big Burger",
    price: 25.000,
    image01: product_01_image_05,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Burger Grill",
    price: 26.000,
    image01: product_01_image_06,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Big Cheese",
    price: 28.000,
    image01: product_01_image_01,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Lavash Mol go'shti",
    price: 20.000,
    image01: product_02_image_01,
    category: "Lavash",

    desc: "",
  },

  {
    id: "09",
    title: "Lavash Tovuq Go`shti",
    price: 18.000,
    image01: product_02_image_02,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Mix Aralash",
    price: 20.0,
    image01: product_02_image_03,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Pishloqli Mol go`shtli",
    price: 24.000,
    image01: product_02_image_01,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Pishloqli Tovuq Go`shti",
    price: 22.000,
    image01: product_02_image_02,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Mini Mol go`shtli",
    price: 12.000,
    image01: product_02_image_03,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "14",
    title: "Mini Tovuq Go`shtli",
    price: 10.000,
    image01: product_02_image_01,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "15",
    title: "Mini Aralash",
    price: 10.000,
    image01: product_02_image_02,
    category: "Lavash",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "16",
    title: "Katta Grill",
    price: 50.000,
    image01: product_03_image_04,
    category: "Grill",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  // {
  //   id: "17",
  //   title: "Kichik Grill",
  //   price: 38.000,
  //   image01: product_03_image_04,
  //   category: "Grill",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
  {
    id: "18",
    title: "0.5(Yarmi) Grill",
    price: 26.000,
    image01: product_03_image_04,
    category: "Grill",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "19",
    title: "Donar Kulchaga",
    price: 19.000,
    image01: product_04_image_01,
    category: "Donar",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "20",
    title: "Donar Buluchkaga",
    price: 18.000,
    image01: product_04_image_02,
    category: "Donar",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "21",
    title: "Pishloqli Kulchaga",
    price: 23.000,
    image01: product_04_image_03,
    category: "Donar",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "22",
    title: "Pishloqli Buluchaga",
    price: 21.000,
    image01: product_04_image_03,
    category: "Donar",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "23",
    title: "Oddiy",
    price: 7.000,
    image01: product_03_image_01,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "24",
    title: "2 Xissa",
    price: 9.000,
    image01: product_03_image_02,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "25",
    title: "Mix",
    price: 12.000,
    image01: product_03_image_03,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "26",
    title: "Shoxona",
    price: 15.000,
    image01: product_03_image_01,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "27",
    title: "Mol Go`shtli",
    price: 14.000,
    image01: product_03_image_01,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "28",
    title: "Tovuq Go`shtli",
    price: 9.000,
    image01: product_03_image_02,
    category: "XotDog",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "29",
    title: "Chiken Qanotchalar 4X",
    price: 17.00,
    image01: product_05_image_01,
    category: "Qanotcha",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "30",
    title: "Chiken Qanotchalar 8X",
    price: 33.00,
    image01: product_05_image_01,
    category: "Qanotcha",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "31",
    title: "Chiken Qanotchalar 12X",
    price: 48.000,
    image01: product_05_image_01,
    category: "Qanotcha",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "32",
    title: "Chiken Qanotchalar 16X",
    price: 64.00,
    image01: product_05_image_01,
    category: "Qanotcha",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "33",
    title: "Pepsi 0.5L",
    price: 6,
    image01: pepsi,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "34",
    title: "Pepsi 1L",
    price: 9,
    image01: pepsi,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "35",
    title: "Pepsi 1.5L",
    price: 11,
    image01: pepsi,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "36",
    title: "Pepsi 2L",
    price: 15,
    image01: pepsi,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "51",
    title: "Разливное Pepsi",
    price: 7,
    image01: pepsi1,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "37",
    title: "Lipton 0.5L",
    price: 5,
    image01: lipton,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "38",
    title: "Lipton 1L",
    price: 10,
    image01: lipton,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "39",
    title: "Mountain Dew 0.5L",
    price: 6,
    image01: dew,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "40",
    title: "Mounatin Dew 1L",
    price: 10,
    image01: dew,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "41",
    title: "Adrenalin 0,25L",
    price: 8,
    image01: adrenalin,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "42",
    title: "Adrenalin 0,5L",
    price: 12,
    image01: adrenalin,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "43",
    title: "RockStar 0,25",
    price: 6,
    image01: rockstar,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "44",
    title: "RockStar 0,5L",
    price: 8,
    image01: rockstar,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "45",
    title: "Jesco Sharbati ",
    price: 3,
    image01: jesco,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "46",
    title: "Bliss",
    price: 52.00,
    image01: bliss,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "47",
    title: "Наш Сад 0,5",
    price: 5,
    image01: nashsad,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "48",
    title: "Наш Сад 1L",
    price: 10,
    image01: nashsad,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "49",
    title: "Meva",
    price: 10,
    image01: meva,
    category: "drink",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "50",
    title: "Medovik",
    price: 10.00,
    image01: medovik,
    category: "dessert",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "50",
    title: "Blinchik",
    price: 3.00,
    image01: blina,
    category: "dessert",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

];

export default products;
