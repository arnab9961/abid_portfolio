'use client'

import { useState } from 'react'
import Image from 'next/image'

const artworks = [
  {
    id: 1,
    title: 'পর্বত শৃঙ্গ',
    category: 'ল্যান্ডস্কেপ',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'নদীর তীরে',
    category: 'প্রকৃতি',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'সূর্যাস্ত',
    category: 'আকাশ',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'বন প্রান্তর',
    category: 'প্রকৃতি',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'পাহাড়ি শিল্প',
    category: 'ল্যান্ডস্কেপ',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'নক্ষত্রময় রাত',
    category: 'আকাশ',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop'
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('সব')

  const categories = ['সব', ...new Set(artworks.map(art => art.category))]
  const filteredArtworks = selectedCategory === 'সব'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <section id="portfolio" className="py-28 px-4 bg-gradient-to-b from-background to-secondary/3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-4 text-lg">পোর্টফোলিও</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            আমার শিল্পকর্ম
          </h2>
          <p className="text-lg text-foreground/60 mb-12 text-balance max-w-2xl mx-auto">
            টেক্সচার্ড ৩D পেইন্টিং এর একটি সংগ্রহ যেখানে প্রতিটি কাজ একটি অনন্য যাত্রা
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map(artwork => (
            <div
              key={artwork.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-border/50 hover:border-primary/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {artwork.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-foreground/60 text-sm">
                    {artwork.category}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
