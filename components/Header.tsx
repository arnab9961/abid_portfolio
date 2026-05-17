import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl tracking-tight text-foreground hover:text-primary transition-colors duration-300">
          আবিদ হোসেইন
        </Link>
        <div className="hidden md:flex gap-12">
          <a href="#portfolio" className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 hover:-translate-y-0.5 transform">
            পোর্টফোলিও
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 hover:-translate-y-0.5 transform">
            পরিচয়
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 hover:-translate-y-0.5 transform">
            যোগাযোগ
          </a>
        </div>
      </nav>
    </header>
  )
}
