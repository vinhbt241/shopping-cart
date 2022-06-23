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
    category: "Glasses",
    description: "These death-tinted shades come with an odd longing for self-destruction. They're ugly -- you don't even need a mirror to know this. Describing them is futile; better get a glass of wine."
  },
  {
    name: "Jamrock Biker-Cop Sunnies",
    amount: "$2.50",
    image: Biker,
    category: "Glasses",
    description: "For taking your Harmel-Rioux Supersonique out for a ride -- on the streets of Jamrock, where your heart is buried."
  },
  {
    name: "Oversized Superstar Sunglasses",
    amount: "$2.50",
    image: Bugeyes,
    category: "Glasses",
    description: "Is your own stardom too dazzling for your eyes? Can't bear to look at your own fabulous reflection in the mirror? Then these classic oversized sunglasses are for you."
  },
  {
    name: "Flip-up Glasses The Auditor",
    amount: "$2.50",
    image: Flipup,
    category: "Glasses",
    description: "These flip-up sunglasses were fashionable in the Old, but have since lost their popularity. Their thin gold-alloy wire frames are a reminder of drug-addled bohemian artists. These days the glasses are only favored by organized crime accountants who desire to look cool."
  },
  {
    name: "Mega-Bino's Prescription Lenses",
    amount: "$2.50",
    image: Megabinos,
    category: "Glasses",
    description: "Whose idiotic idea were square and beige plastic frames anyway? Beige is a colour that does not look good on *anyone*. Not to mention that seeing the world through these exceedingly thick lenses feels almost nauseating..."
  },
  {
    name: "Neat Office Shades",
    amount: "$2.50",
    image: Rect,
    category: "Glasses",
    description: "These were stuffed away in the Dockworker's Union office. They're perfect for scribbling down paperwork when the sun tries to get in your eye. Good for staring down suspects too."
  },
  {
    name: "Sunglasses Sub-Insulindic Rendezvous",
    amount: "$2.50",
    image: SubInsulin,
    category: "Glasses",
    description: "The truth is, you can't really *see* very well through the darkened specs, but you feel truly *tender* in this newly-found deep sea plane. Two blue-tinted lenses sit in a bone-carved frame like they've always belonged there."
  },
  {
    name: "Orange Bum Hat",
    amount: "$6.00",
    image: Bum,
    category: "Hat",
    description: "An orange beanie with a couple of big-ass holes on the side. It looks like it might have been used as a mask during an armed robbery."
  },
  {
    name: "Camionneur Cap",
    amount: "$6.00",
    image: Camionneur,
    category: "Hat",
    description: "With its long visor and mesh back, this cap keeps the sun out of your eyes and lets perspiration waft away. Might be more useful in the summer though."
  },
  {
    name: 'FALN "Pipo" Pipo',
    amount: "$6.00",
    image: Faln,
    category: "Hat",
    description: "The small wire framing inside this futuristic-looking FALN pipo-hat gives it the aerodynamic shape of a swoop-skiers helmet, but none of its protective qualities. Covers the wearer's ears and eyebrows to bring down the drag coefficient."
  },
  {
    name: "Specialist-Grade Headset",
    amount: "$6.00",
    image: Headset,
    category: "Hat",
    description: "A giant pair of cans to keep you safe from the world. This particular set seems to have changed hands several times. May become sweaty after extended use."
  },
  {
    name: "Dick Mullen's Hat",
    amount: "$6.00",
    image: Mullen,
    category: "Hat",
    description: "If anything, this wide-rimmed hat looks even *better* than the hat Dick Mullen wears. Dick Mullen is stupid -- and not even real. You're real. Your brain is real. Your real real brain is inside the hat."
  },
  {
    name: "RCM Lieutenant's Cap",
    amount: "$6.00",
    image: Rcm,
    category: "Hat",
    description: "The cap is sturdy and comfortable, and seems to retain its form very well. It fits you perfectly. The inside of it smells... like cheap tobacco and typewriter ink. It feels familiar somehow. Perhaps it, too, is yours? Though how *the pigs* got it is a mystery."
  },
  {
    name: "Revolutionary's Hat",
    amount: "$6.00",
    image: Revolutionary,
    category: "Hat",
    description: "An *ushanka* with the mazovian logo -- a pair of deer antlers -- on its silvery-white front. Your ears feel cuddled and cared for by the state."
  },
  {
    name: 'Samaran Conical Hat',
    amount: "$6.00",
    image: Samaran,
    category: "Hat",
    description: "This tawny cone-shaped hat looks like a beacon of Samaran wisdom, its straws sticking up like antennas. Thank god you can't really see people's reactions when they see you strolling around in this incredibly insensitive headpiece."
  }
]

const getItems = () => {
  return items;
}

const getItem = (name) => {
  return items.find(item => {
    return item.name === name;
  })
}

export { getItems, getItem }
