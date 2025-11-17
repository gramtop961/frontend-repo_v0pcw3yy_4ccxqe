export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white text-black grid place-items-center font-bold">Ø</div>
          <span className="text-white/90">Otto The Viking</span>
        </div>
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Otto The Viking. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
