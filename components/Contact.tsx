'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-28 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-4 text-lg">যোগাযোগ</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            আমার সাথে কথা বলুন
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            আপনার প্রকল্প নিয়ে আলোচনা করতে আজই যোগাযোগ করুন। আমি প্রতিটি বার্তার উত্তর দিতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <p className="text-xl text-foreground font-semibold">ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।</p>
            <p className="text-foreground/60 mt-2">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border/50">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-3">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="আপনার সম্পূর্ণ নাম"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-3">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="আপনার ইমেইল"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-foreground font-semibold mb-3">
                আপনার বার্তা
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder="আপনার প্রকল্প এবং চিন্তাভাবনা সম্পর্কে বলুন..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition duration-300 shadow-lg hover:shadow-xl"
            >
              বার্তা পাঠান
            </button>
          </form>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">ইমেইল</h3>
            <p className="text-foreground/70 hover:text-primary transition">abid.hussain@art.bd</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">ফোন</h3>
            <p className="text-foreground/70 hover:text-accent transition">+880 1234 567890</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">অবস্থান</h3>
            <p className="text-foreground/70 hover:text-primary transition">ঢাকা, বাংলাদেশ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
