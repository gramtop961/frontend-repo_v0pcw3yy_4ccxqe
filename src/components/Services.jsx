const services = [
  {
    title: 'Golden Circle Private Tour',
    desc: 'See Þingvellir, Geysir, and Gullfoss with a local guide and hidden gems along the way.',
    icon: '🧭'
  },
  {
    title: 'South Coast Adventure',
    desc: 'Waterfalls, black sand beaches, and glacial views — a day packed with iconic sights.',
    icon: '🏔️'
  },
  {
    title: 'Northern Lights Hunt',
    desc: 'Chase the aurora with real-time forecasts and the flexibility of a private guide.',
    icon: '✨'
  },
  {
    title: 'Custom Multi‑Day Itinerary',
    desc: 'Tell us your vibe, we craft the route. From family trips to photography expeditions.',
    icon: '🗺️'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Popular Experiences</h2>
          <p className="mt-3 text-gray-600">Simple, flexible and made around you. Pick a classic or co-create your own.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              <a href="#contact" className="mt-6 inline-flex text-sm font-medium text-blue-600 group-hover:underline">Book now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
