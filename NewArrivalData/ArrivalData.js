//ArrivalData
import product from "../src/assets/product.png";
import product1 from "../src/assets/product1.png";
import product2 from "../src/assets/product2.png";
import product3 from "../src/assets/product3.png";
//BesellingData
import product4 from "../src/assets/product4.png";
import product5 from "../src/assets/product5.png";
import product6 from "../src/assets/product6.png";
import product7 from "../src/assets/product7.png";
//BestsellerData
import product8 from "../src/assets/product8.png";
import product9 from "../src/assets/product9.png";
import product10 from "../src/assets/product10.png";
import product11 from "../src/assets/product11.png";
export const ArrivalData = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$100.00",
    badge: true,
    color: false,
    productImg: product,
    productStatus: "New",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$75.00",
    badge: true,
    color: true,
    productImg: product1,
    productStatus: "Trending",
  },
  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$115.00",
    badge: true,
    color: true,
    productImg: product2,
    productStatus: "Sold",
  },
  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$25.00",
    badge: true,
    color: true,
    productImg: product3,
    productStatus: "75%",
  },
];

export const BesellingData = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$100.00",
    badge: true,
    color: false,
    productImg: product4,
    productStatus: "New",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$75.00",
    badge: true,
    color: true,
    productImg: product5,
    productStatus: "Trending",
  },
  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$115.00",
    badge: true,
    color: true,
    productImg: product6,
    productStatus: "Sold",
  },
  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$25.00",
    badge: true,
    color: true,
    productImg: product7,
    productStatus: "75%",
  },
];

export const BestsellerData = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$100.00",
    badge: true,
    color: false,
    productImg: product8,
    productStatus: "New",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$75.00",
    badge: true,
    color: true,
    productImg: product9,
    productStatus: "Trending",
  },
  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$115.00",
    badge: true,
    color: true,
    productImg: product10,
    productStatus: "Sold",
  },
  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$25.00",
    badge: true,
    color: true,
    productImg: product11,
    productStatus: "75%",
  },
];

export const Catagorise = [
  {
    id: 1,
    title: "Mobile",
    subcategores: [
      { id: 1, title: "Oppo A5s" },
      { id: 2, title: "vivo" },
      { id: 3, title: "Xiamoi" },
      { id: 4, title: "Samsung" },
    ],
  },
  {
    id: 2,
    title: "Apple",
    subcategores: [
      { id: 1, title: "Iphone 13" },
      { id: 2, title: "Iphone 14" },
      { id: 3, title: "Iphone 15" },
      { id: 4, title: "Iphone 8" },
      { id: 5, title: "Iphone 11 pro max" },
      { id: 6, title: "Iphone 10" },
    ],
  },
  {
    id: 3,
    title: "Desktop",
    subcategores: [
      { id: 1, title: "Asus" },
      { id: 2, title: "Dell" },
      { id: 3, title: "Walton" },
      { id: 4, title: "Gigabyte" },
    ],
  },
  {
    id: 4,
    title: "Accesoris",
    subcategores: [],
  },
  {
    id: 5,
    title: "Cloths",
    subcategores: [
      { id: 1, title: "Mens" },
      { id: 2, title: "Womens" },
      { id: 3, title: "Beby" },
      { id: 4, title: "costom" },
    ],
  },
];

export const ShopColor = [
  { id: 1, Colorcode: "#000000", title: "Black" },
  { id: 2, Colorcode: "#FF8686", title: "Pink" },
  { id: 3, Colorcode: "#7ED321", title: "Green" },
  { id: 4, Colorcode: "#B6B6B6", title: "Offwhite" },
  { id: 5, Colorcode: "#15CBA5", title: "blue" },
];

export const ShopBrand = [
  { id: 1, title: "Rolls Royce" },
  { id: 2, title: "Lamborghini" },
  { id: 3, title: "Ferrari" },
  { id: 4, title: "BMW" },
  { id: 5, title: "Honda" },
];

export const ShopPrice = [
  { id: 1, title: "$0.00 - $9.99" },
  { id: 2, title: "$10.00 - $19.99" },
  { id: 3, title: "$20.00 - $29.99" },
  { id: 4, title: "$30.00 - $39.99" },
  { id: 5, title: "$40.00 - $69.99" },
];
export const SortBy = [
  { id: 1, SortItem: "Cloths" },
  { id: 2, SortItem: "Electronics" },
  { id: 3, SortItem: "Bag" },
  { id: 4, SortItem: "Womens" },
  { id: 5, SortItem: "fone" },
];
export const Divison = [
  { id: 1, DivisonItem: "Chittagong" },
  { id: 2, DivisonItem: "Dhaka" },
  { id: 3, DivisonItem: "Rajshahi" },
  { id: 4, DivisonItem: "Sylhet" },
  { id: 5, DivisonItem: "Mymensingh" },
  { id: 6, DivisonItem: "Barisal" },
  { id: 7, DivisonItem: "Rangpur" },
  { id: 8, DivisonItem: "Khulnah" },
];

export const District = [
  { id: 1, DistrictItem: "Chittagong" },
  { id: 2, DistrictItem: "Dhaka" },
  { id: 3, DistrictItem: "Rajshahi" },
  { id: 4, DistrictItem: "Sylhet" },
  { id: 5, DistrictItem: "Jessore" },
  { id: 6, DistrictItem: "Dinajpur" },
  { id: 7, DistrictItem: "Mymensingh" },
  { id: 8, DistrictItem: "Comilla" },
  { id: 9, DistrictItem: "Barisal" },
  { id: 10, DistrictItem: "Faridpur" },
  { id: 11, DistrictItem: "Bogra" },
  { id: 12, DistrictItem: "Pabna" },
  { id: 13, DistrictItem: "Rangamati" },
  { id: 14, DistrictItem: "Kushtia" },
  { id: 15, DistrictItem: "Tangail" },
  { id: 16, DistrictItem: "Panchagarh" },
  { id: 17, DistrictItem: "Bhola" },
  { id: 18, DistrictItem: "Bandarban" },
  { id: 19, DistrictItem: "Chandpur" },
  { id: 20, DistrictItem: "Habiganj" },
  { id: 21, DistrictItem: "Lakshmipur" },
  { id: 22, DistrictItem: "Barguna" },
  { id: 23, DistrictItem: "Jhalokati" },
  { id: 24, DistrictItem: "Pirojpur" },
  { id: 25, DistrictItem: "Patuakhali" },
  { id: 26, DistrictItem: "Jhenaidah" },
  { id: 27, DistrictItem: "Narail" },
  { id: 28, DistrictItem: "Magura" },
  { id: 29, DistrictItem: "Lalmonirhat " },
  { id: 30, DistrictItem: "Nilphamari " },
  { id: 31, DistrictItem: "Gaibandha" },
  { id: 32, DistrictItem: "Kurigram" },
  { id: 1, DistrictItem: "Chittagong" },
  { id: 2, DistrictItem: "Dhaka" },
  { id: 3, DistrictItem: "Rajshahi" },
  { id: 4, DistrictItem: "Sylhet" },
  { id: 5, DistrictItem: "Jessore" },
  { id: 6, DistrictItem: "Dinajpur" },
  { id: 7, DistrictItem: "Mymensingh" },
  { id: 8, DistrictItem: "Meherpur" },
  { id: 9, DistrictItem: "Sirajganj" },
  { id: 10, DistrictItem: "Joypurhat" },
  { id: 11, DistrictItem: "Natore" },
  { id: 12, DistrictItem: "Naogaon" },
  { id: 13, DistrictItem: "Nawabganj" },
  { id: 14, DistrictItem: "Khagrachhari" },
  { id: 15, DistrictItem: "Feni" },
  { id: 16, DistrictItem: "Brahmanbaria" },
  { id: 17, DistrictItem: "Sunamganj" },
  { id: 18, DistrictItem: "Cox's Bazar" },
  { id: 19, DistrictItem: "Moulvibazar" },
  { id: 20, DistrictItem: "Gopalganj" },
  { id: 21, DistrictItem: "Shariatpur" },
  { id: 22, DistrictItem: "Madaripur" },
  { id: 23, DistrictItem: "Rajbari" },
  { id: 24, DistrictItem: "Gazipur" },
  { id: 25, DistrictItem: "Kishoreganj" },
  { id: 26, DistrictItem: "Jamalpur" },
  { id: 27, DistrictItem: "Sherpur" },
  { id: 28, DistrictItem: "Netrakona" },
  { id: 29, DistrictItem: "Munshiganj " },
  { id: 30, DistrictItem: "Narsingdi  " },
  { id: 31, DistrictItem: "Narayanganj" },
  { id: 32, DistrictItem: "Manikganj " },
];
