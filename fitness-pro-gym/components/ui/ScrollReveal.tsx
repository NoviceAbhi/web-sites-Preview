'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const animationClass = getAnimationClass(direction)
              entry.target.classList.add(animationClass)
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, direction])

  const getAnimationClass = (dir: string) => {
    switch (dir) {
      case 'up': return 'fade-in-up'
      case 'left': return 'slide-in-left'
      case 'right': return 'slide-in-right'
      case 'bounce': return 'bounce-in'
      case 'scale': return 'scale-in'
      default: return 'fade-in-up'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`opacity-100 ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal