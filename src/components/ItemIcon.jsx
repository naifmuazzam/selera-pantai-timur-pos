import {
  Drumstick,
  Beef,
  Fish,
  Egg,
  Cookie,
  Sprout,
  Soup,
  CookingPot,
  Star,
  CircleDot,
  CupSoda,
  Coffee,
  Milk,
  IceCreamBowl,
  Wheat,
  Leaf,
  Zap,
  Citrus,
  Dumbbell,
  Grape,
  Martini,
  GlassWater,
  Sparkles,
  Utensils,
} from "lucide-react"

const iconMap = {
  Drumstick,
  Beef,
  Fish,
  Egg,
  Cookie,
  Sprout,
  Soup,
  CookingPot,
  Star,
  CircleDot,
  CupSoda,
  Coffee,
  Milk,
  IceCreamBowl,
  Wheat,
  Leaf,
  Zap,
  Citrus,
  Dumbbell,
  Grape,
  Martini,
  GlassWater,
  Sparkles,
}

const ItemIcon = ({ name, className = "w-8 h-8", strokeWidth = 1.5 }) => {
  const Icon = iconMap[name] || Utensils
  return <Icon className={className} strokeWidth={strokeWidth} />
}

export default ItemIcon