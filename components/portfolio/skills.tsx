'use client'

import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  SiGo, SiTypescript, SiJavascript, SiPython, SiRust,
  SiNestjs, SiExpress, SiDjango, SiFlask,
  SiNextdotjs, SiReact, SiTailwindcss,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiDocker, SiKubernetes, SiGithub,
  SiPytorch, SiTensorflow, SiPandas, SiNumpy,
  SiGit, SiPostman, SiNotion
} from 'react-icons/si'
import { Wrench, Code } from 'lucide-react'

const skillIcons: { [key: string]: any } = {
  'Go': SiGo,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Rust': SiRust,
  'NestJS': SiNestjs,
  'Express.js': SiExpress,
  'Gin': Wrench,
  'Django': SiDjango,
  'FastAPI': SiFlask,
  'Flask': SiFlask,
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'TailwindCSS': SiTailwindcss,
  'shadcn/ui': Wrench,
  'Redux': Wrench,
  'HTML5/CSS3': Wrench,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'MySQL': SiMysql,
  'SQLite': Wrench,
  'ClickHouse': Wrench,
  'gRPC': Wrench,
  'REST API Design': Wrench,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'GitHub Actions': SiGithub,
  'Linux': Wrench,
  'Terraform': Wrench,
  'AWS': Wrench,
  'GCP': Wrench,
  'Firebase': Wrench,
  'Supabase': Wrench,
  'HashiCorp Vault': Wrench,
  'Hugging Face': Wrench,
  'LangChain': Wrench,
  'NumPy': SiNumpy,
  'Pandas': SiPandas,
  'PyTorch': SiPytorch,
  'TensorFlow': SiTensorflow,
  'Scikit-learn': Wrench,
  'OpenCV': Wrench,
  'Jupyter': Wrench,
  'NLTK': Wrench,
  'spaCy': Wrench,
  'Git': SiGit,
  'GitHub': SiGithub,
  'VS Code': Code,
  'Cursor': Wrench,
  'Claude Code': Wrench,
  'Postman': SiPostman,
  'Swagger': Wrench,
  'Jira': Wrench,
  'Notion': SiNotion,
  'JWT Auth': Wrench,
  'RBAC': Wrench,
  'Kafka': Wrench,
  'WebSockets': Wrench,
  'TanStack Start': Wrench,
  'React Native': SiReact,
  'Flutter': Wrench,
  'Electron.js': Wrench,
  'Oracle': Wrench,
}

// Color mapping for category borders
const categoryColors: { [key: string]: string } = {
  All: 'border-l-4 border-l-[#0284c7]',
  Languages: 'border-l-4 border-l-[#7c3aed]',
  Backend: 'border-l-4 border-l-[#2563eb]',
  Frontend: 'border-l-4 border-l-[#ea580c]',
  Databases: 'border-l-4 border-l-[#0891b2]',
  'DevOps & Cloud': 'border-l-4 border-l-[#db2777]',
  'AI & ML': 'border-l-4 border-l-[#9333ea]',
  Tools: 'border-l-4 border-l-[#0369a1]',
}

const skillsData = {
  All: [
    'Go', 'TypeScript', 'JavaScript', 'Python', 'Java',
    'NestJS', 'Express.js', 'Gin', 'Spring Boot', 'Django', 'FastAPI', 'Flask',
    'Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Redux',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Terraform', 'AWS', 'GCP',
    'Hugging Face', 'NumPy', 'Pandas', 'PyTorch', 'TensorFlow', 'Scikit-learn',
    'Git', 'GitHub'
  ],
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Java'],
  Backend: [
    'NestJS', 'Express.js', 'Gin', 'Spring Boot', 'Django', 'FastAPI', 'Flask',
     'Kafka', 'WebSockets'
  ],
  Frontend: [
    'Next.js', 'React', 'TanStack Start', 'TailwindCSS', 'shadcn/ui',
  ],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis'],
  'DevOps & Cloud': [
    'Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Terraform',
    'AWS', 'GCP', 'Firebase', 'Supabase', 'HashiCorp Vault'
  ],
  'AI & ML': [
    'Hugging Face', 'LangChain', 'NumPy', 'Pandas', 'PyTorch',
    'TensorFlow', 'Scikit-learn', 'OpenCV', 'Jupyter', 'NLTK', 'spaCy'
  ],
  Tools: [
    'Git', 'GitHub',
  ],
}

type SkillCategory = keyof typeof skillsData

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All')
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-12">Skills</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-4 py-2 rounded-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-foreground border border-border hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills display with colored left borders */}
        <div className={`pb-6 pl-6 ${categoryColors[activeCategory]}`}>
          <div className="flex flex-wrap gap-3">
            {skillsData[activeCategory].map((skill) => {
              const IconComponent = skillIcons[skill]
              return (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-border rounded-sm hover:border-accent transition-colors"
                >
                  {IconComponent ? (
                    <IconComponent className="w-5 h-5" />
                  ) : (
                    <Wrench className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
