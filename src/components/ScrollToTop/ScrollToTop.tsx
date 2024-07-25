'use client'

import { MoveUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'

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
      className={cn('p-4 fixed bottom-5 right-5', visible ? 'block' : 'hidden')}
      style={{ zIndex: 99 }}
    >
      <MoveUp />
    </button>
  )
}
