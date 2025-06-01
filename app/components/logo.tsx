import Link from "next/link"
import { Stethoscope } from "lucide-react"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="bg-themeBlue-dark rounded-lg p-2">
        <Stethoscope className="h-6 w-6 text-white" />
      </div>
      <span className="text-2xl font-bold text-gray-800">Jozef Farkaš</span>
    </Link>
  )
}
