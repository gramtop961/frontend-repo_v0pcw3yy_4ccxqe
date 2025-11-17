export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Plan your Iceland adventure</h2>
          <p className="mt-3 text-white/80">Tell me what you have in mind — dates, vibe, must‑sees — and I’ll reply personally.</p>
        </div>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="Name" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input placeholder="Email" type="email" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input placeholder="Dates (approx)" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input placeholder="Group size" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <textarea placeholder="What would make this trip perfect?" rows={4} className="sm:col-span-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">Send</button>
            <span className="text-white/60 text-sm">Or email: hello@ottotheviking.is</span>
          </div>
        </form>
      </div>
    </section>
  )
}
