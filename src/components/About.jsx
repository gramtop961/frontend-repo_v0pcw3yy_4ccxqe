export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Meet Otto</h2>
          <p className="mt-4 text-gray-600">Iceland is home — and sharing it is my favorite thing. I blend history, humor and local knowledge to create easy, relaxed trips with zero stress. Whether you want the hits or the hidden, I’ll get you there safely and in style.</p>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li>• Licensed private guide and driver</li>
            <li>• Photography friendly — I know the angles and the timing</li>
            <li>• Flexible, family‑friendly pacing</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1711239231181-ce82f551b451?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdHRvJTIwZ3VpZGluZyUyMGElMjB0b3VyfGVufDB8MHx8fDE3NjMzOTE4NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Otto guiding a tour" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  )
}
