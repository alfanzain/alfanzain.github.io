'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

// Tech stack items
const techStack = [
  'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'GraphQL', 'MongoDB', 'PostgreSQL'
]

export default function Home({ posts }) {
  return (
    <>
      {/* Tech Stack Banner */}
      <div className="flex justify-center pb-4 pt-2">
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/10 shadow-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-4 sm:px-6 text-center">
        <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl drop-shadow-lg">
          {siteMetadata.author}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-white drop-shadow-md">
          Software Developer & Web Enthusiast
        </p>

        <div className="mt-8 max-w-2xl mx-auto text-white/90">
          <p className="text-lg drop-shadow-sm">
            I'm a passionate developer focused on creating elegant, efficient solutions.
            With expertise in modern web technologies, I build responsive applications
            that deliver exceptional user experiences.
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

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/blog"
            className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-colors border border-white/10 shadow-lg"
          >
            Read Blog
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-colors border border-white/10 shadow-lg"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#030712] py-16">
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
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium max-w-7xl mx-auto px-4 pb-10 bg-[#030712] text-indigo-400">
          <Link
            href="/blog"
            className="hover:text-indigo-300"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4 bg-[#030712]">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
