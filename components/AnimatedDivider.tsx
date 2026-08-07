'use client'

export function AnimatedDivider() {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30"></div>
      
      <div className="mx-4 flex gap-1">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-accent animate-bounce stagger-2"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce stagger-4"></div>
      </div>
      
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30"></div>
    </div>
  )
}
