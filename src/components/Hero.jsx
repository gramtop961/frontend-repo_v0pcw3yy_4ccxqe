export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
          alt="Icelandic landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full flex-col items-center justify-center text-center text-white">
          <p className="uppercase tracking-[0.3em] text-white/80 text-xs sm:text-sm">Travel • Storytelling • Adventure</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Experience Iceland with a Local Viking Guide
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base sm:text-lg">
            Private tours, custom itineraries, and unforgettable memories. Crafted by Otto — your friendly Icelandic guide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#services" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">Explore Tours</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
