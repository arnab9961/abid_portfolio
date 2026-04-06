export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground via-foreground/95 to-foreground text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-yellow-300">আবিদ হোসেইন</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              ৩D টেক্সচার্ড ল্যান্ডস্কেপ পেইন্টিং এর মাধ্যমে প্রকৃতির অসাধারণ সৌন্দর্য প্রকাশ করি।
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">i</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">in</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-yellow-300">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition duration-300 text-sm">হোম</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-white transition duration-300 text-sm">পোর্টফোলিও</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition duration-300 text-sm">পরিচয়</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition duration-300 text-sm">যোগাযোগ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-yellow-300">সেবা</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition duration-300 text-sm">কাস্টম ডিজাইন</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition duration-300 text-sm">প্রকল্প পরামর্শ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition duration-300 text-sm">শিল্প প্রশিক্ষণ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition duration-300 text-sm">ফ্রিল্যান্স কাজ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-yellow-300">সংযোগ</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">
                <span className="block text-white/50 text-xs mb-1">ইমেইল</span>
                abid.hussain@art.bd
              </li>
              <li className="text-white/70 text-sm">
                <span className="block text-white/50 text-xs mb-1">ফোন</span>
                +880 1234 567890
              </li>
              <li className="text-white/70 text-sm">
                <span className="block text-white/50 text-xs mb-1">অবস্থান</span>
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © ২০२४ আবিদ হোসেইন। সর্বাধিকার সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition">গোপনীয়তা নীতি</a>
              <a href="#" className="text-white/60 hover:text-white transition">শর্তাবলী</a>
              <a href="#" className="text-white/60 hover:text-white transition">কুকিজ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
