'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Elyvate AI reduced our customer support costs by 87% in just three months. The implementation was seamless and the results exceeded all expectations.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp Global",
      logo: "TC",
      color: "from-purple-600 to-blue-600"
    },
    {
      quote: "The voice agents handle thousands of calls daily with better accuracy than our human team. Our customer satisfaction scores have never been higher.",
      author: "Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "Global Finance Ltd",
      logo: "GF",
      color: "from-blue-600 to-cyan-500"
    },
    {
      quote: "We automated 90% of our appointment scheduling and follow-ups. Elyvate AI paid for itself in the first month. Absolutely game-changing for our clinic.",
      author: "Dr. Emily Watson",
      role: "Director of Patient Services",
      company: "HealthCare Plus",
      logo: "HC",
      color: "from-cyan-500 to-purple-600"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e2a54' }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0e2a5499' }}>
            Real results from real businesses that transformed with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00999c'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              {/* Quote Icon */}
              <div className="mb-4 opacity-50" style={{ color: '#00999c' }}>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="mb-6 leading-relaxed text-lg" style={{ color: '#0e2a54' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Logo/Avatar */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {testimonial.logo}
                </div>
                
                {/* Details */}
                <div>
                  <div className="font-bold" style={{ color: '#0e2a54' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm" style={{ color: '#0e2a5499' }}>
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: '#00999c' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

