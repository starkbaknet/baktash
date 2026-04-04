'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'


export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <img
            src="/avatar.png"
            alt="Salim Baktash"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-border object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Salim Baktash
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          I build distributed, high-performance backend systems and modern web apps. Specializing in Go, TypeScript, NestJS, and Next.js.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            View My Work
            <ArrowRight size={18} />
          </button>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/starkbaknet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mohammad-salim-8453a729b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:baktash@starkbak.net"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://twitter.com/StarkBakTec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com/starkbaktec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
