import SelfDestruct from "./images/Glasses_self_destruction.webp";
import Biker from "./images/Glasses_biker.webp";
import Bugeyes from "./images/Glasses_bugeyes.webp";
import Flipup from "./images/Glasses_flipup.webp";
import Megabinos from "./images/Glasses_megabinos.webp";
import Rect from "./images/Glasses_rect.webp";
import SubInsulin from "./images/Glasses_sub_insulindics.webp";
import Bum from "./images/Hat_bum.webp";
import Camionneur from "./images/Hat_camionneur.webp";
import Faln from "./images/Hat_faln.webp";
import Headset from "./images/Hat_headset.webp";
import Mullen from "./images/Hat_mullen.webp";
import Rcm from "./images/Hat_rcm.webp";
import Revolutionary from "./images/Hat_revolutionary.webp";
import Samaran from "./images/Hat_samaran.webp";

let items = [
  {
    name: "Shades of Self-Destruction",
    amount: "$2.50",
    image: SelfDestruct,
    category: "Glass"
  },
  {
    name: "Jamrock Biker-Cop Sunnies",
    amount: "$2.50",
    image: Biker,
    category: "Glass"
  },
  {
    name: "Oversized Superstar Sunglasses",
    amount: "$2.50",
    image: Bugeyes,
    category: "Glass"
  },
  {
    name: "Flip-up Glasses The Auditor",
    amount: "$2.50",
    image: Flipup,
    category: "Glass"
  },
  {
    name: "Mega-Bino's Prescription Lenses",
    amount: "$2.50",
    image: Megabinos,
    category: "Glass"
  },
  {
    name: "Neat Office Shades",
    amount: "$2.50",
    image: Rect,
    category: "Glass"
  },
  {
    name: "Sunglasses Sub-Insulindic Rendezvous",
    amount: "$2.50",
    image: SubInsulin,
    category: "Glass"
  },
  {
    name: "Orange Bum Hat",
    amount: "$2.50",
    image: Bum,
    category: "Hat"
  },
  {
    name: "Camionneur Cap",
    amount: "$2.50",
    image: Camionneur,
    category: "Hat"
  },
  {
    name: 'FALN "Pipo" Pipo',
    amount: "$2.50",
    image: Faln,
    category: "Hat"
  },
  {
    name: "Specialist-Grade Headset",
    amount: "$2.50",
    image: Headset,
    category: "Hat"
  },
  {
    name: "Dick Mullen's Hat",
    amount: "$2.50",
    image: Mullen,
    category: "Hat"
  },
  {
    name: "RCM Lieutenant's Cap",
    amount: "$2.50",
    image: Rcm,
    category: "Hat"
  },
  {
    name: "Revolutionary's Hat ",
    amount: "$2.50",
    image: Revolutionary,
    category: "Hat"
  },
  {
    name: 'Samaran Conical Hat',
    amount: "$2.50",
    image: Samaran,
    category: "Hat"
  }
]

const getItems = () => {
  return items;
}

export { getItems }
