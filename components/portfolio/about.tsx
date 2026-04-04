'use client'

import { useEffect, useRef, useState } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-8">About Me</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a passionate backend and full-stack engineer with 4+ years of professional experience building scalable systems. Based in Afghanistan and working remotely for global opportunities. I&apos;m also a software engineering educator with 3+ years of teaching experience, mentoring developers and creating curriculum for modern web development.
          </p>

          <p>
            <span className="font-semibold text-foreground">Most recently</span>, I worked as a Senior Backend Developer at <span className="text-accent font-medium">Netlinks Inc</span>, where I architected microservices, optimized databases, and led technical improvements. I&apos;m now exploring opportunities in full-stack development and transitioning toward AI/ML and LLM engineering, to build intelligent systems at scale.
          </p>

          <p>
            I&apos;m open to remote opportunities globally and excited to collaborate on projects that involve building robust APIs, microservices architectures, and modern web applications. I believe in clean code, strong fundamentals, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  )
}
