'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import '@/css/theme-switch.css'

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6 text-white hover:text-white/80 transition-colors"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)
const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitchButOnlySwitchDark = () => {
  const [mounted, setMounted] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const { setTheme, resolvedTheme } = useTheme()

  const darkMessages = [
    "* Night falls. You are filled with DETERMINATION.",
    "* The world is SHROUDED in darkness...",
    "* Stars shine BRIGHTER in darkness.",
    "* SUNSHINE is no more. Only shadows remain.",
    "* The light has ABANDONED this world.",
    "* Despite that, you are still here.",
  ]

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // Text typing animation effect
  useEffect(() => {
    if (!showMessage) {
      setCharIndex(0);
      setDisplayText('');
      return;
    }

    const message = darkMessages[messageIndex];

    if (charIndex < message.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(prev => prev + message[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30); // Speed of typing

      return () => clearTimeout(typingTimer);
    }
  }, [showMessage, charIndex, messageIndex, darkMessages]);

  const handleClick = () => {
    setTheme('dark')
    setMessageIndex(Math.floor(Math.random() * darkMessages.length))
    setShowMessage(true)
    setCharIndex(0)
    setDisplayText('')

    // Keep message visible longer to allow for typing animation
    setTimeout(() => setShowMessage(false), 4500)
  }

  return (
    <div className="flex items-center">
      <div className="relative flex justify-center">
        <button
          onClick={handleClick}
          aria-label="Switch to dark mode"
          className="flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          {mounted ? <Moon /> : <Blank />}
        </button>

        {showMessage && (
          <div className="messageBox pixelText">
            {displayText}
          </div>
        )}
      </div>
    </div>
  )
}

export default ThemeSwitchButOnlySwitchDark
