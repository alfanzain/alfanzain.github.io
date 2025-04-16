'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import '../css/contact-toast.css'

const MAX_DISPLAY = 5

// Tech stack items
const techStack = {
  backend: [
    'TypeScript', 'Javascript', 'ExpressJS', 'NodeJS', 'PHP',
    'Laravel', 'Golang', 'Redis', 'Postman'
  ],
  frontend: [
    'Livewire', 'VueJS', 'React', 'NextJS', 'Javascript', 'Bootstrap', 'Tailwind'
  ],
  database: [
    'MySQL', 'PostgreSQL'
  ],
  tools: [
    'GitHub', 'Bitbucket', 'GitLab'
  ],
}

export default function Home({ posts }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isNight, setIsNight] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Check if it's night (between 7PM and 6AM)
    const checkIfNight = () => {
      const hours = new Date().getHours()
      setIsNight(hours >= 19 || hours < 6)
    }

    checkIfNight()
    // Update the night status every minute
    const interval = setInterval(checkIfNight, 60000)

    return () => clearInterval(interval)
  }, [])

  const displayTechStack = activeCategory === 'all'
    ? [...new Set(Object.values(techStack).flat())]
    : techStack[activeCategory] || []

  // Category style configurations
  const categoryStyles = {
    all: "bg-white/10 text-white border-white/10",
    backend: "bg-blue-400/20 text-blue-100 border-blue-400/30",
    frontend: "bg-green-400/20 text-green-100 border-green-400/30",
    database: "bg-yellow-400/20 text-yellow-100 border-yellow-400/30",
    tools: "bg-purple-400/20 text-purple-100 border-purple-400/30"
  }

  // Get the style for a tech item based on category
  const getTechStyle = (tech) => {
    if (activeCategory !== 'all') return categoryStyles[activeCategory];

    // Find which category this tech belongs to (first match if in multiple)
    for (const [category, techs] of Object.entries(techStack)) {
      if (techs.includes(tech)) {
        return categoryStyles[category];
      }
    }
    return categoryStyles.all;
  }

  return (
    <>
      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pixel-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="mt-10 flex justify-center py-2">
        <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/10 shadow-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Ponorogo, Indonesia
          <span className="mx-1.5">•</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          UTC+7
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-6 relative flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-4 sm:px-6 text-center">
        <h1
          className={`text-5xl font-extrabold sm:text-6xl md:text-7xl drop-shadow-lg transition-all duration-500 ease-in-out ${isHovering && isNight
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform -translate-y-1 scale-105'
            : 'text-white'
            }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            textShadow: isHovering && isNight ? '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,0,255,0.4)' : 'none',
            transform: isHovering && isNight ? 'translateY(-4px)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fontFamily: isHovering && isNight ? 'var(--font-pixelify-sans)' : 'inherit',
            letterSpacing: isHovering && isNight ? '1px' : 'normal',
            fontWeight: isHovering && isNight ? '700' : 'inherit',
            imageRendering: 'pixelated'
          }}
        >
          {isNight && isHovering ? siteMetadata.author_full : siteMetadata.author}
          {isHovering && isNight && (
            <>
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-20 blur-xl animate-pulse -z-10"></span>
              {/* Add pixel stars for Undertale feel */}
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute block bg-yellow-200"
                  style={{
                    width: '4px',
                    height: '4px',
                    top: `${Math.random() * 150 - 50}%`,
                    left: `${Math.random() * 150 - 30}%`,
                    opacity: 0.7 + Math.random() * 0.3,
                    animation: `pixel-pulse ${1 + Math.random() * 2}s infinite alternate`,
                    animationDelay: `${Math.random() * 2}s`,
                    imageRendering: 'pixelated'
                  }}
                ></span>
              ))}
            </>
          )}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-white drop-shadow-md">
          Software Engineer
        </p>

        <div className="mt-8 max-w-2xl mx-auto text-white/90">
          <p className="text-md drop-shadow-sm">
            Experienced Fullstack Engineer with 6 years of expertise in scalable web applications and microservices.
            Proficient in <span className="text-blue-400 font-bold">Laravel</span>, <span className="text-green-400 font-bold">TypeScript</span>, and <span className="text-yellow-400 font-bold">Go</span>, with a track record of impactful solutions in government,
            education, and healthcare. Developed complex systems like a government app, Telegram bots, and
            real-time event platforms. Passionate about delivering innovative, user-focused solutions that meet
            technical and business needs.
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          {siteMetadata.github && (
            <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {siteMetadata.linkedin && (
            <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {siteMetadata.x && (
            <a href={siteMetadata.x} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Twitter/X Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          )}
          <a href="/about" className="text-white hover:text-white/80 transition-colors" aria-label="Portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </a>
        </div>

        <div className="mt-10 mb-10 flex flex-col gap-4">
          <Link
            href="https://alfanzain.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-colors border border-white/10 shadow-lg flex items-center justify-center"
          >
            Read Blog
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-xs ml-1.5 opacity-70">(WordPress)</span>
          </Link>
          <Link
            href="https://alfanzain.notion.site/alfanzain/Alfan-Zain-s-Portfolio-f021212cc2e840aba33826efc6032731"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-colors border border-white/10 shadow-lg flex items-center justify-center"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-xs ml-1.5 opacity-70">(Notion)</span>
          </Link>
        </div>
      </div>

      {/* Tech Stack Banner */}
      <div className="flex flex-col items-center pb-4 pt-2">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors shadow-md ${activeCategory === 'all'
              ? 'bg-white/30 text-white border-white/30'
              : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/15'
              }`}
          >
            All
          </button>
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border capitalize transition-colors shadow-md ${activeCategory === category
                ? 'bg-white/30 text-white border-white/30'
                : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/15'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
          {displayTechStack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 backdrop-blur-md rounded-full text-sm border shadow-lg ${getTechStyle(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {/* WhatsApp Contact */}
          <div className="contact-button">
            <div
              onClick={() => {
                navigator.clipboard.writeText('+6282257321250')
                const toast = document.createElement('div');
                toast.className = 'toast-notification whatsapp';
                toast.textContent = 'WhatsApp number copied! 📱';
                document.body.appendChild(toast);

                setTimeout(() => {
                  document.body.removeChild(toast);
                }, 3000);
              }}
              className="whatsapp-link group relative flex items-center justify-between cursor-pointer rounded-md px-4 py-3 text-sm text-slate-200 border border-slate-800/90 bg-slate-900/90 backdrop-blur-md hover:text-green-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 whatsapp-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28z" />
                </svg>
                <span>+62 822 5732 1250</span>
              </div>
              <span className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-md scale-[1.03] blur-md bg-gradient-to-r from-green-700/30 to-green-500/30 group-hover:scale-[1.05] transition-all duration-300"></span>
            </div>
            {/* WhatsApp Tooltip */}
            <div className="quest-tooltip whatsapp-quest-tooltip">
              Click to copy WhatsApp number
              <div className="quest-tooltip-arrow">▼</div>
            </div>
          </div>

          {/* Email Contact */}
          <div className="contact-button">
            <div
              onClick={() => {
                navigator.clipboard.writeText('alfanzainkp@gmail.com')
                const toast = document.createElement('div');
                toast.className = 'toast-notification';
                toast.textContent = 'Email copied to clipboard! ✉️';
                document.body.appendChild(toast);

                setTimeout(() => {
                  document.body.removeChild(toast);
                }, 3000);
              }}
              className="email-link group relative flex items-center justify-between cursor-pointer rounded-md px-4 py-3 text-sm text-slate-200 border border-slate-800/90 bg-slate-900/90 backdrop-blur-md hover:text-blue-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>alfanzainkp@gmail.com</span>
              </div>
              <span className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-md scale-[1.03] blur-md bg-gradient-to-r from-blue-700/30 to-blue-500/30 group-hover:scale-[1.05] transition-all duration-300"></span>
            </div>
            {/* Email Tooltip */}
            <div className="quest-tooltip email-quest-tooltip">
              Click to copy email address
              <div className="quest-tooltip-arrow">▼</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {/* <div className="bg-[#030712] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-2 pb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Latest
            </h2>
            <p className="text-lg text-gray-400">
              Latest posts from the blog
            </p>
          </div>
          <ul className="divide-y divide-gray-800">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl leading-8 font-bold tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-white hover:text-white/80"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-indigo-400 hover:text-indigo-300"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div> */}
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium max-w-7xl mx-auto px-4 pb-10 bg-[#030712] text-indigo-400">
          <Link
            href="/blog"
            className="hover:text-indigo-300"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4 bg-[#030712]">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
