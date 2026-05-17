import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_20260505_220531832_HDR.jpg"
          alt="৩D ল্যান্ডস্কেপ আর্ট"
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-6 sm:px-12 backdrop-blur-sm bg-background/20 rounded-3xl border border-white/10 shadow-2xl">
        <p className="text-primary font-semibold tracking-widest mb-6 text-sm uppercase md:text-lg drop-shadow-md">স্বাগতম আমার পৃথিবীতে</p>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-8 text-balance leading-tight drop-shadow-2xl">
          ৩D ল্যান্ডস্কেপ<br />শিল্পী
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 text-balance font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          টেক্সচার্ড পেইন্টিং এর মাধ্যমে প্রকৃতির অসাধারণ সৌন্দর্য এবং গভীরতা প্রকাশ করি
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <a
            href="#portfolio"
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition duration-300 shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] hover:-translate-y-1 transform"
          >
            আমার কাজ দেখুন
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 transform"
          >
            যোগাযোগ করুন
          </a>
        </div>

        <p className="text-white/40 mt-16 text-sm tracking-wide">বিশ্বব্যাপী শিল্প সংগ্রাহকদের দ্বারা বিশ্বাসপ্রাপ্ত</p>
      </div>
    </section>
  )
}
