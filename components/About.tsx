export default function About() {
  return (
    <section id="about" className="py-28 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">১০+</div>
                <p className="text-foreground/80 font-medium">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-3">৫০+</div>
                <p className="text-foreground/80 font-medium">সম্পন্ন প্রজেক্ট</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">২৫+</div>
                <p className="text-foreground/80 font-medium">আন্তর্জাতিক পুরস্কার</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-3">১০০%</div>
                <p className="text-foreground/80 font-medium">গ্রাহক সন্তুষ্টি</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold tracking-wide mb-4 text-lg">আমার গল্প</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance">
              আবিদ হোসেইন
            </h2>
            
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
              আমি একজন অভিজ্ঞ ৩D ল্যান্ডস্কেপ শিল্পী যিনি প্রকৃতির সৌন্দর্য এবং গভীরতা প্রকাশ করতে প্রতিশ্রুতিবদ্ধ। প্রতিটি পেইন্টিং একটি নতুন যাত্রা, যেখানে টেক্সচার এবং রঙের মাধ্যমে আমি জীবন্ত দৃশ্য তৈরি করি।
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
              আমার শিল্পকর্ম বাস্তবতা এবং কল্পনার এক অনন্য সংমিশ্রণ। প্রতিটি স্ট্রোক, প্রতিটি রঙের স্তর সতর্কতার সাথে নির্বাচিত হয় যাতে দর্শক একটি অবিস্মরণীয় অভিজ্ঞতা পায়। আমার লক্ষ্য শুধুমাত্র সুন্দর চিত্র তৈরি করা নয়, বরং আবেগ এবং গল্প বলা।
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['৩D পেইন্টিং', 'টেক্সচার শিল্প', 'ল্যান্ডস্কেপ ডিজাইন'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
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
