'use client'

import { useEffect, useRef, useState } from 'react'

const education = [
  {
    degree: 'High School Diploma',
    school: 'Azad Khan High School',
    period: '2011 – 2022',
  },
  {
    degree: 'Self-Directed Learning',
    school: 'Programming & Development',
    period: '2016 – Present',
    description: 'Backend systems, cloud infrastructure, AI/ML, LLM engineering',
  },
]

export function Education() {
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="border-l border-border pl-6 py-2">
              <h3 className="text-lg font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-accent font-medium text-sm mb-1">
                {edu.school}
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                {edu.period}
              </p>
              {edu.description && (
                <p className="text-sm text-muted-foreground">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
