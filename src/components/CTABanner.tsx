import Link from 'next/link'

interface CTABannerProps {
  title?: string
  highlightText?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  title = 'NEED TOP-QUALITY INSULATION SOLUTIONS IN SEMINOLE, TX,',
  highlightText = 'AND SURROUNDING AREAS?',
  buttonText = 'GET A FREE QUOTE',
  buttonHref = '/contact-us/',
}: CTABannerProps) {
  return (
    <section className="bg-purple-dark py-16">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-2">
          {title}
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-tan-gold uppercase tracking-wide mb-8">
          {highlightText}
        </p>
        <Link href={buttonHref} className="btn-outline">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
