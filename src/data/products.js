import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"

import category1 from "../assets/category1.jpg"
import category2 from "../assets/category2.jpg"
import category3 from "../assets/category3.jpg"

import backpack from "../assets/products/backpack.jpg"
import campingTent from "../assets/products/camping-tent.jpg"
import fleeceJacket from "../assets/products/fleece-jacket.jpg"
import headLamp from "../assets/products/head-lamp.jpeg"
import hikingBoots from "../assets/products/hiking-boots.jpg"
import hikingJacket from "../assets/products/hiking-jacket.jpg"
import hikingPants from "../assets/products/hiking-pants.jpg"
import runningShoes from "../assets/products/running-shoes.jpg"
import sleepingBag from "../assets/products/sleeping-bag.jpg"
import treckingPole from "../assets/products/treking-pole.jpg"
import treckingSandals from "../assets/products/treking-sandals.jpg"

// hero images
export const heroImages = [
  {name: "backpack", img: hero1},
  {name: "hiking gears", img: hero2},
  {name: "treking", img: hero3}
]

// categories
export const categories = [
  {name: "adventure gears", img: category1, path: "#"},
  {name: "clothing", img: category2, path: "#"},
  {name: "footwear", img: category3, path: "#"}
]

// products

export const products = [
  {
    id: 1,
    name: "backpack",
    price: 300,
    img: backpack,
    category: "adventure gears",
    path: "/product/1",
    description: "A durable backpack designed for outdoor adventures and everyday exploring.",
    rating: 4,
    reviewCount: 5
  },

  {
    id: 2,
    name: "camping tent",
    price: 450,
    img: campingTent,
    category: "adventure gears",
    path: "/product/2",
    description: "A reliable camping tent designed to provide comfortable shelter during outdoor adventures.",
    rating: 5,
    reviewCount: 8
  },

  {
    id: 3,
    name: "fleece jacket",
    price: 150,
    img: fleeceJacket,
    category: "clothing",
    path: "/product/3",
    description: "A warm and comfortable fleece jacket suitable for hiking and outdoor activities.",
    rating: 4,
    reviewCount: 6
  },

  {
    id: 4,
    name: "head lamp",
    price: 98,
    img: headLamp,
    category: "adventure gears",
    path: "/product/4",
    description: "A lightweight head lamp providing reliable hands-free lighting for outdoor adventures.",
    rating: 4,
    reviewCount: 7
  },

  {
    id: 5,
    name: "hiking boots",
    price: 380,
    img: hikingBoots,
    category: "footwear",
    path: "/product/5",
    description: "Durable hiking boots designed to provide comfort and support on outdoor trails.",
    rating: 5,
    reviewCount: 10
  },

  {
    id: 6,
    name: "hiking jacket",
    price: 300,
    img: hikingJacket,
    category: "clothing",
    path: "/product/6",
    description: "A versatile hiking jacket designed to provide protection and comfort in changing weather.",
    rating: 4,
    reviewCount: 6
  },

  {
    id: 7,
    name: "hiking pants",
    price: 240,
    img: hikingPants,
    category: "clothing",
    path: "/product/7",
    description: "Comfortable and durable hiking pants designed for outdoor exploration and active movement.",
    rating: 4,
    reviewCount: 5
  },

  {
    id: 8,
    name: "running shoes",
    price: 300,
    img: runningShoes,
    category: "footwear",
    path: "/product/8",
    description: "Lightweight running shoes designed for comfort, movement, and outdoor activities.",
    rating: 5,
    reviewCount: 9
  },

  {
    id: 9,
    name: "sleeping bag",
    price: 360,
    img: sleepingBag,
    category: "adventure gears",
    path: "/product/9",
    description: "A comfortable sleeping bag designed to keep you warm during camping and outdoor trips.",
    rating: 4,
    reviewCount: 7
  },

  {
    id: 10,
    name: "trecking pole",
    price: 100,
    img: treckingPole,
    category: "adventure gears",
    path: "/product/10",
    description: "A sturdy trekking pole designed to provide stability and support while hiking.",
    rating: 4,
    reviewCount: 5
  },

  {
    id: 11,
    name: "treking sandals",
    price: 230,
    img: treckingSandals,
    category: "footwear",
    path: "/product/11",
    description: "Lightweight trekking sandals designed for comfort and support during outdoor activities.",
    rating: 4,
    reviewCount: 6
  }
];