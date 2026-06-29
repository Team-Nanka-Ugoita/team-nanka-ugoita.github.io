import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'top', label: 'TOP' },
  { id: 'about', label: 'ABOUT' },
  { id: 'members', label: 'MEMBERS' },
  { id: 'message', label: 'MESSAGE' },
] as const

type SectionId = (typeof navItems)[number]['id']
type DotPosition = { left: number; top: number }

function Header() {
  const [activeId, setActiveId] = useState<SectionId>('top')
  const [dotPosition, setDotPosition] = useState<DotPosition | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Record<SectionId, HTMLAnchorElement | null>>({
    top: null,
    about: null,
    members: null,
    message: null,
  })

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0
      const contentAnchor = headerHeight + (window.innerHeight - headerHeight) * 0.28
      const nextActive = navItems.reduce<SectionId>((closestId, item) => {
        const closestElement = document.getElementById(closestId)
        const currentElement = document.getElementById(item.id)

        if (!closestElement || !currentElement) return closestId

        const closestRect = closestElement.getBoundingClientRect()
        const currentRect = currentElement.getBoundingClientRect()
        const closestDistance = Math.abs(closestRect.top - contentAnchor)
        const currentDistance = Math.abs(currentRect.top - contentAnchor)

        return currentDistance < closestDistance ? item.id : closestId
      }, 'top')

      setActiveId(nextActive)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const updateDotPosition = () => {
      const navElement = navRef.current
      const activeLink = linkRefs.current[activeId]

      if (!navElement || !activeLink) return

      const navRect = navElement.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      setDotPosition({
        left: linkRect.left - navRect.left + linkRect.width / 2,
        top: linkRect.top - navRect.top - 8,
      })
    }

    updateDotPosition()
    window.addEventListener('resize', updateDotPosition)

    return () => window.removeEventListener('resize', updateDotPosition)
  }, [activeId])

  const scrollToSection = (id: SectionId) => {
    const targetElement = document.getElementById(id)

    if (!targetElement) return

    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0
    const contentAnchor = headerHeight + (window.innerHeight - headerHeight) * 0.28

    window.scrollTo({
      top: Math.max(0, targetElement.getBoundingClientRect().top + window.scrollY - contentAnchor),
      behavior: 'smooth',
    })
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-3 mt-3 flex flex-col items-center justify-between gap-3 rounded-2xl border-2 border-amber-500 bg-white px-4 py-3 text-center sm:mx-6 sm:mt-6 sm:px-6 sm:py-4 md:flex-row md:rounded-full md:text-left lg:mx-8 lg:mt-8 lg:px-8 lg:py-6">
        <span className="font-tegaki text-base font-bold sm:text-xl">チーム「なんかうごいた」</span>
        <div ref={navRef} className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pt-2 sm:gap-x-6">
          {dotPosition && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 ease-out"
              style={{
                left: dotPosition.left,
                top: dotPosition.top,
              }}
            />
          )}
          {navItems.map((item) => (
            <a
              key={item.id}
              ref={(element) => {
                linkRefs.current[item.id] = element
              }}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              className="text-sm font-medium transition-colors hover:text-amber-600 aria-[current=page]:text-amber-600 sm:text-base lg:text-lg"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header


