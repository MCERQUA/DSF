import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <div className="relative group overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-purple-dark/60 group-hover:bg-purple-dark/70 transition-colors" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-200 text-sm mb-4 max-w-xs">
          {description}
        </p>
        <Link href={href} className="btn-secondary text-sm">
          Learn More
        </Link>
      </div>
    </div>
  )
}
