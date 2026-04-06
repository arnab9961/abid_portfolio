import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl tracking-tight text-foreground hover:text-primary transition">
          আবিদ হোসেইন
        </Link>
        <div className="hidden md:flex gap-12">
          <a href="#portfolio" className="text-foreground/80 hover:text-primary font-medium transition duration-300">
            পোর্টফোলিও
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition duration-300">
            পরিচয়
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary font-medium transition duration-300">
            যোগাযোগ
          </a>
        </div>
      </nav>
    </header>
  )
}
