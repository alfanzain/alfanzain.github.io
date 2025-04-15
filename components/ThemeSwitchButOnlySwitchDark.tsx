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
  const [shownMessages, setShownMessages] = useState<number[]>([])
  const { setTheme, resolvedTheme } = useTheme()

  const darkMessages = [
    "* Night falls. You are filled with DETERMINATION.",
    "* The world is SHROUDED in darkness...",
    "* Stars shine BRIGHTER in darkness.",
    "* SUNSHINE is no more. Only shadows remain.",
    "* The light has ABANDONED this world.",
  ]

  const finalMessage = "* Despite that, you are still here."

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // Text typing animation effect
  useEffect(() => {
    if (!showMessage) {
      setCharIndex(0);
      setDisplayText('');
      return;
    }

    const message = shownMessages.length === darkMessages.length ? finalMessage : darkMessages[messageIndex];

    if (charIndex < message.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(prev => prev + message[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30); // Speed of typing

      return () => clearTimeout(typingTimer);
    }
  }, [showMessage, charIndex, messageIndex, darkMessages, finalMessage, shownMessages]);

  const handleClick = () => {
    setTheme('dark')

    if (shownMessages.length === darkMessages.length) {
      // All messages have been shown, display final message
      setMessageIndex(-1) // Use -1 to indicate final message
      setShowMessage(true)
      setCharIndex(0)
      setDisplayText('')
      return
    }

    // Find messages that haven't been shown yet
    const availableIndices = darkMessages
      .map((_, index) => index)
      .filter(index => !shownMessages.includes(index))

    // If we have messages left to show
    if (availableIndices.length > 0) {
      // Get random index from available messages
      const randomIndex = Math.floor(Math.random() * availableIndices.length)
      const newMessageIndex = availableIndices[randomIndex]

      setMessageIndex(newMessageIndex)
      setShowMessage(true)
      setCharIndex(0)
      setDisplayText('')

      // Mark this message as shown
      setShownMessages(prev => [...prev, newMessageIndex])
    }
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
