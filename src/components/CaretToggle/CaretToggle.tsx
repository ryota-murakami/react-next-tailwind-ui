import React from 'react'

interface CaretToggleProps {}

export const CaretToggle: React.FC<CaretToggleProps> = (props) => {
  return (
    <div className="flex h-[72px] w-8 items-center justify-center">
      <div className="flex h-6 w-6 flex-col items-center">
        <div className="h-3 w-1 rounded-full bg-[var(--text-quaternary)] translate-y-[0.15rem] rotate-[15deg]"></div>
        <div className="h-3 w-1 rounded-full bg-[var(--text-quaternary)] translate-y-[-0.15rem] rotate-[-15deg]"></div>
      </div>
    </div>
  )
}
