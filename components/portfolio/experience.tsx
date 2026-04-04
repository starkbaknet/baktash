'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Senior Backend Developer',
    company: 'Netlinks Inc',
    period: 'Oct 2024 – Mar 2026',
    location: 'On-site',
    logo: '/netlinks.png',
    bullets: [
      'Architected microservices with Go (Gin) + NestJS, serving thousands of concurrent users',
      'Built event-driven pipelines with Kafka, cutting processing latency by ~40%',
      'Integrated 10+ third-party APIs and cloud services (AWS S3, Firebase)',
      'Led microservices migration, improving observability and deployment velocity',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Listoli LLC',
    period: 'Jan 2024 – Jun 2024',
    location: 'Remote',
    logo: '/listoli.png',
    bullets: [
      'Built e-commerce and listing platforms with NestJS + Next.js',
      'Implemented JWT auth + RBAC for secure, role-based API access',
      'Reduced API response time by 25% through query and route optimization',
      'Designed DB schemas in PostgreSQL and MongoDB; managed Docker deployments',
    ],
  },
  {
    role: 'Software Development Instructor',
    company: 'Top In Town Technology',
    period: '2021 – Oct 2023',
    location: 'On-site',
    logo: '/ttt.jpg',
    bullets: [
      'Taught full-stack development to 100+ students (Node.js, React, databases, architecture)',
      'Mentored students to land developer jobs through real-world capstone projects',
      'Created curriculum covering microservices, DevOps, and clean architecture',
    ],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Timeline visual */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-border flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Fixed: always show vertical line */}
                <div className="w-0.5 h-24 bg-border mt-4" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.role}
                </h3>

                <p className="text-accent font-medium mb-1">
                  {exp.company}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {exp.period} • {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="text-base text-muted-foreground flex gap-3"
                    >
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}