'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'

export function Contact() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-12">Contact</h2>

        <div className="space-y-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase mb-4">Email</h3>
            <a
              href="mailto:baktash@starkbak.net"
              className="inline-flex items-center gap-3 text-lg text-accent hover:text-accent/80 transition-colors"
            >
              <Mail size={20} className="shrink-0" aria-hidden />
              baktash@starkbak.net
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase mb-4">Social Media</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/starkbaknet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
                <span>github.com/starkbaknet</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-salim-8453a729b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
                <span>Mohammad Salim</span>
              </a>
              <a
                href="https://x.com/StarkBakTec?t=LkhI8Ia-lewG7-_sZASoVA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
                <span>@StarkBakTec</span>
              </a>
              <a
                href="https://www.instagram.com/starkbaktec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
                <span>@starkbaktec</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
