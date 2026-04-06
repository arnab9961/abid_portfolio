export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-white to-secondary/5 overflow-hidden pt-20 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        <p className="text-primary font-semibold tracking-wide mb-6 text-lg">স্বাগতম আমার পৃথিবীতে</p>
        
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
          ৩D ল্যান্ডস্কেপ<br />শিল্পী
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance font-light leading-relaxed max-w-3xl mx-auto">
          টেক্সচার্ড পেইন্টিং এর মাধ্যমে প্রকৃতির অসাধারণ সৌন্দর্য এবং গভীরতা প্রকাশ করি
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition duration-300 shadow-lg hover:shadow-xl"
          >
            আমার কাজ দেখুন
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition duration-300"
          >
            যোগাযোগ করুন
          </a>
        </div>

        <p className="text-foreground/50 mt-16 text-sm">বিশ্বব্যাপী শিল্প সংগ্রাহকদের দ্বারা বিশ্বাসপ্রাপ্ত</p>
      </div>
    </section>
  )
}
