import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-[15px] text-white/90 hover:text-white transition-colors px-3 py-2"
  >
    {label}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <div className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/90 text-black grid place-items-center font-bold">Ø</div>
            <span className="text-white font-semibold tracking-wide">Otto The Viking</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <NavLink href="#services" label="Services" />
            <NavLink href="#work" label="Work" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
            <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">Book Now</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 pb-4">
            <div className="flex flex-col py-2">
              <NavLink href="#services" label="Services" onClick={close} />
              <NavLink href="#work" label="Work" onClick={close} />
              <NavLink href="#about" label="About" onClick={close} />
              <NavLink href="#contact" label="Contact" onClick={close} />
              <a href="#contact" onClick={close} className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium">Book Now</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
