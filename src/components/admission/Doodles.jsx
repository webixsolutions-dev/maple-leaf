import { FiSun } from 'react-icons/fi'
import { FaLeaf, FaRegHeart } from 'react-icons/fa'

export function SunDoodle({ className = '' }) {
  return <FiSun className={`text-marigold ${className}`} aria-hidden="true" />
}

export function LeafDoodle({ className = '' }) {
  return <FaLeaf className={`text-leaf ${className}`} aria-hidden="true" />
}

export function HeartDoodle({ className = '' }) {
  return <FaRegHeart className={`text-coral ${className}`} aria-hidden="true" />
}
