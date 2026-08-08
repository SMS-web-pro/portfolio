export function SectionPattern({ variant = 'grid' }: { variant?: 'grid' | 'orbit' | 'dots' }) {
  if (variant === 'orbit') {
    return <div aria-hidden="true" className="section-pattern"><span className="pattern-orbit" /><span className="pattern-orbit pattern-orbit-secondary" /></div>
  }
  return <div aria-hidden="true" className={`section-pattern pattern-${variant}`} />
}
