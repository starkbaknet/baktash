'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Crown } from 'lucide-react'

const projects = [
  {
    title: 'jobs.af',
    category: 'Professional',
    role: 'Backend Team Lead',
    status: 'Live',
    featured: true,
    description:
      "Afghanistan's leading job board platform. Led the backend team in architecting and building a scalable job listing, search, and application system.",
    tags: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'REST API',
      'Docker',
      'Microservices',
      'Team Leadership',
    ],
    github: '',
    live: 'https://jobs.af',
  },
  {
    title: 'AFEX Consultancy Platform',
    category: 'Professional',
    role: 'Full Stack Developer',
    status: 'Live',
    featured: true,
    description:
      'Full-featured consultancy platform for AFEX. Built the backend infrastructure, APIs, and content management system powering services, blog, and contact flows.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'REST API', 'Docker'],
    github: '',
    live: 'https://afex.space',
  },
  {
    title: 'Skypen — ICT & Digital Transformation',
    category: 'Professional',
    role: 'Full Stack Developer',
    status: 'Live',
    featured: true,
    description:
      'Corporate technology platform for Skypen. Built and maintained backend services and API layer for software, cloud, AI, and cybersecurity offerings.',
    tags: [
      'TypeScript',
      'Tanstack Start',
      'TailwindCSS',
      'shadcn/ui',
      'Docker',
    ],
    github: '',
    live: 'https://skypen.net',
  },
  {
    title: "Sky Sarafi — Currency Exchange SaaS Platform",
    category: "Professional",
    role: "Full Stack Developer",
    status: "Live",
    featured: true,
    description: "A comprehensive cloud-based platform for modern currency exchange businesses. Built and maintained the full-stack monorepo architecture including a NestJS backend, admin portals, and a multi-lingual React front-end.",
    tags: [
      "TypeScript",
      "NestJS",
      "React",
      "TanStack Start",
      "shadcn/ui",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Docker"
    ],
    github: "",
    live: "https://sky-sarafi.skypen.net"
  }, 
  {
    title: 'Project Vectorizer',
    category: 'Open Source',
    role: 'Solo Developer',
    status: 'Open Source',
    featured: true,
    description:
      'CLI tool that vectorizes entire codebases and exposes them via MCP (Model Context Protocol), enabling AI agents to understand and navigate large projects.',
    tags: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Vector Database',
      'MCP',
      'CLI',
      'AI Tooling',
      'Embeddings',
    ],
    github: 'https://github.com/starkbaknet/project-vectorizer',
    live: '',
  },
  {
    title: 'Job Recommendation System',
    category: 'AI & ML',
    role: 'Solo Developer',
    status: 'Open Source',
    featured: true,
    description:
      'High-performance job recommendation engine using vector embeddings and cosine similarity to deliver personalized, accurate job matches at scale.',
    tags: [
      'TypeScript',
      'Express.js',
      'TypeORM',
      'PostgreSQL',
      'pgvector',
      'Vector Embeddings',
      'Cosine Similarity',
    ],
    github: 'https://github.com/starkbaknet/job-recommendation-system-ts',
    live: '',
  },
  {
    title: 'AI Image Detector',
    category: 'AI & ML',
    role: 'Solo Developer',
    status: 'Open Source',
    featured: true,
    description:
      'AI-powered image detection and classification system using computer vision models to analyze and classify images with high accuracy.',
    tags: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Computer Vision',
      'Image Classification',
    ],
    github: 'https://github.com/starkbaknet/ai-image-dectector',
    live: '',
  },
  {
    title: 'Job Portal Spam Detector',
    category: 'AI & ML',
    role: 'Solo Developer',
    status: 'Open Source',
    featured: true,
    description:
      'Python spam detection for job portals: zero-shot NLP (BART-MNLI), rule-based checks, metadata heuristics, and aggregated risk scoring with allow / shadow review / block actions—plus a FastAPI REST API.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'Transformers', 'NLP', 'REST API', 'Hugging Face'],
    github: 'https://github.com/starkbaknet/spam-detector',
    live: '',
  },
  {
    title: 'Applicant–Job Matcher',
    category: 'AI & ML',
    role: 'Solo Developer',
    status: 'Production',
    featured: true,
    description:
      'Semantic applicant–job matching gRPC service (protobuf messages) with hybrid Sentence-Transformers and heuristic scoring and explainable factor breakdowns. Integrated into the jobs.af applicant tracking system.',
    tags: ['Python', 'gRPC', 'Protobuf', 'Sentence-Transformers', 'scikit-learn', 'NLP'],
    github: 'https://github.com/starkbaknet/applicant-job-matcher',
    live: '',
  }, 
]

const categories = ['All', 'Professional', 'Open Source', 'AI & ML']

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
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

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const getCardBorderColor = (category: string) => {
    switch (category) {
      case 'Professional':
        return 'border-l-4 border-l-[#0284c7]'
      case 'AI & ML':
        return 'border-l-4 border-l-[#7C3AED]'
      case 'Open Source':
        return 'border-l-4 border-l-[#f59e0b]'
      default:
        return 'border-l-4 border-l-[#0284c7]'
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Projects
        </h2>

        {/* Fixed Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-card border border-border ${getCardBorderColor(
                project.category
              )} rounded-md p-6 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex flex-col relative`}
              style={{
                animation: isVisible
                  ? `fadeUpStagger 0.6s ease-out ${idx * 0.1}s forwards`
                  : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Crown size={18} className="text-accent" />
                </div>
              )}

              <div className="mb-3">
                <h3 className="text-lg font-bold text-foreground pr-6">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-accent-foreground bg-accent px-2.5 py-1 rounded-sm inline-block mt-2">
                  {project.role}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-secondary text-foreground px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground">
                  {project.status}
                </span>

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-sm bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-xs font-medium"
                    >
                      <Github size={14} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-sm bg-accent text-accent-foreground hover:bg-accent/80 transition-colors text-xs font-medium"
                    >
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUpStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}