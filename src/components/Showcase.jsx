const items = [
  { title: 'Gljúfrabúi Canyon', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2069&auto=format&fit=crop' },
  { title: 'Reynisfjara', img: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Jökulsárlón', img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf3a?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Þingvellir', img: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="work" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Moments from the road</h2>
            <p className="mt-3 text-gray-600">A few scenes from recent trips.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-gray-900 text-white px-4 py-2 text-sm">Plan your trip</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="group overflow-hidden rounded-2xl">
              <img src={it.img} alt={it.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-3 text-sm text-gray-700">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
