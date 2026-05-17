export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="group bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 drop-shadow-md">১০+</div>
                <p className="text-foreground/80 font-medium tracking-wide">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="group bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(var(--accent),0.2)] hover:-translate-y-2 mt-8">
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-3 drop-shadow-md">৫০+</div>
                <p className="text-foreground/80 font-medium tracking-wide">সম্পন্ন প্রজেক্ট</p>
              </div>
              <div className="group bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:-translate-y-2 -mt-8">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 drop-shadow-md">২৫+</div>
                <p className="text-foreground/80 font-medium tracking-wide">আন্তর্জাতিক পুরস্কার</p>
              </div>
              <div className="group bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(var(--accent),0.2)] hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-3 drop-shadow-md">১০০%</div>
                <p className="text-foreground/80 font-medium tracking-wide">গ্রাহক সন্তুষ্টি</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">আমার গল্প</p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-8 text-balance tracking-tight">
              আবিদ হোসেইন
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-light">
              আমি একজন অভিজ্ঞ ৩D ল্যান্ডস্কেপ শিল্পী যিনি প্রকৃতির সৌন্দর্য এবং গভীরতা প্রকাশ করতে প্রতিশ্রুতিবদ্ধ। প্রতিটি পেইন্টিং একটি নতুন যাত্রা, যেখানে টেক্সচার এবং রঙের মাধ্যমে আমি জীবন্ত দৃশ্য তৈরি করি।
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
              আমার শিল্পকর্ম বাস্তবতা এবং কল্পনার এক অনন্য সংমিশ্রণ। প্রতিটি স্ট্রোক, প্রতিটি রঙের স্তর সতর্কতার সাথে নির্বাচিত হয় যাতে দর্শক একটি অবিস্মরণীয় অভিজ্ঞতা পায়। আমার লক্ষ্য শুধুমাত্র সুন্দর চিত্র তৈরি করা নয়, বরং আবেগ এবং গল্প বলা।
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['৩D পেইন্টিং', 'টেক্সচার শিল্প', 'ল্যান্ডস্কেপ ডিজাইন'].map(skill => (
                <span key={skill} className="px-5 py-2.5 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-colors duration-300 shadow-sm cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
