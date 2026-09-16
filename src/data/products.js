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
    category: "adventure gears"
  },
  {
    id: 2,
    name: "camping tent", 
    price: 450, 
    img: campingTent, 
    category: "adventure gears"
  },
  {
    id: 3,
    name: "fleece jacket", 
    price: 150, 
    img: fleeceJacket, 
    category: "clothing"
  },
  {
    id: 4,
    name: "head lamp", 
    price: 98, 
    img: headLamp, 
    category: "adventure gears"
  },
  {
    id: 5,
    name: "hiking boots", 
    price: 380, 
    img: hikingBoots, 
    category: "footwear"
  },
  {
    id: 6,
    name: "hiking jacket", 
    price: 300, 
    img: hikingJacket, 
    category: "clothing"
  },
  {
    id: 7,
    name: "hiking pants", 
    price: 240, 
    img: hikingPants, 
    category: "clothing"
  },
  {
    id: 8,
    name: "running shoes", 
    price: 300, 
    img: runningShoes, 
    category: "footwear"
  },
  {
    id: 9,
    name: "sleeping bag", 
    price: 360, 
    img: sleepingBag, 
    category: "adventure gears"
  },
  {
    id: 10,
    name: "trecking pole", 
    price: 100, 
    img: treckingPole, 
    category: "adventure gears"
  },
  {
    id: 11,
    name: "treking sandals", 
    price: 230, 
    img: treckingSandals, 
    category: "footwears"
  },
  
  
  
]