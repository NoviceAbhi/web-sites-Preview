'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "HomeList helped us find our dream home in just 3 weeks. The virtual tours saved us so much time, and the agent was incredibly knowledgeable about the area.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Manhattan, NY",
    rating: 5,
    text: "The interactive map feature was a game-changer. We could see exactly what was nearby before even visiting. Professional service from start to finish.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "Outstanding experience! The lifestyle tags helped us find a pet-friendly home in a walkable neighborhood. Couldn't be happier with our choice.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-800 mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 font-sans font-light">
              Hear from families who found their perfect homes with us
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="bounce-in">
          <div className="relative">
          <div className="bg-neutral-sand rounded-sm p-8 md:p-12 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 font-sans font-light text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div className="text-center">
                <div className="font-serif font-semibold text-primary-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 font-sans text-sm">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-primary-600" />
          </button>
        </div>
        </ScrollReveal>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}