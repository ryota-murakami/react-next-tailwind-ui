'use client'

import React, { useState, useEffect } from 'react'

// @TODO Visible when the user scrolls down the page
export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`rounded-full p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fixed bottom-5 right-5 ${visible ? 'block' : 'hidden'}`}
      style={{ zIndex: 99 }}
    >
      ↑
    </button>
  )
}
