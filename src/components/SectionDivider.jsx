import React from 'react'
import { Hand } from 'lucide-react'

const SectionDivider = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
        <div className="mx-6 p-3">
          <Hand className="w-6 h-6 text-sky-400" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
      </div>
    </div>
  )
}

export default SectionDivider
