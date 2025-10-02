'use client';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: "🎁",
      badge: "FREE",
      title: "AI Audits",
      subtitle: "Free of Cost",
      description: "Comprehensive evaluation of your current operations to identify AI opportunities, assess readiness and create a strategic roadmap for AI implementation.",
      color: "#00999c",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: "💬",
      badge: "24/7",
      title: "AI Chatbots",
      subtitle: "Always Available",
      description: "Intelligent conversational agents that handle customer inquiries round-the-clock, reducing support costs while improving response times.",
      color: "#00b8bc",
      gradient: "from-cyan-500 to-teal-400"
    },
    {
      icon: "📞",
      badge: "SMART",
      title: "Voice Agents",
      subtitle: "Natural Conversations",
      description: "AI-powered calling systems with natural language processing, perfect for sales, support and appointment scheduling.",
      color: "#007a7d",
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: "⚙️",
      badge: "CUSTOM",
      title: "Custom AI Agents",
      subtitle: "Tailored Solutions",
      description: "Bespoke AI solutions designed specifically for your business needs, from document processing to complex decision-making workflows.",
      color: "#00999c",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: "🔄",
      badge: "AUTO",
      title: "Automation Agents",
      subtitle: "Smart Workflows",
      description: "Streamline repetitive tasks and complex workflows with intelligent automation that learns and adapts to your processes.",
      color: "#00b8bc",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: "📊",
      badge: "INSIGHTS",
      title: "Analytics & AI",
      subtitle: "Data-Driven Decisions",
      description: "AI-driven reporting and analytics that provide actionable insights, predict trends and help you make informed decisions.",
      color: "#007a7d",
      gradient: "from-teal-600 to-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-sm font-semibold" style={{ color: '#00999c' }}>WHAT WE OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e2a54' }}>
            AI Solutions for Every <span className="gradient-text">Business Need</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0e2a5499' }}>
            From automation to insights, we've got you covered with cutting-edge AI technology
          </p>
        </div>

        {/* Services Grid - Bento Box Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 rounded-3xl transition-opacity duration-500 blur-xl ${
                  hoveredIndex === index ? 'opacity-60' : 'opacity-0'
                }`}
                style={{ background: service.color }}>
              </div>

              {/* Card */}
              <div className={`relative h-full p-8 rounded-3xl bg-white border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-transparent shadow-2xl -translate-y-2' 
                  : 'border-gray-100 shadow-lg'
              }`}>
                
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon with animated background */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                    style={{ 
                      background: hoveredIndex === index 
                        ? `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`
                        : '#f9fafb'
                    }}>
                    {service.icon}
                  </div>

                  {/* Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                    style={{
                      background: hoveredIndex === index
                        ? `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
                        : `${service.color}15`,
                      color: hoveredIndex === index ? 'white' : service.color
                    }}>
                    {service.badge}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 transition-colors duration-300" 
                    style={{ 
                      color: hoveredIndex === index ? service.color : '#0e2a54'
                    }}>
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold opacity-60" style={{ color: '#0e2a54' }}>
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-base" style={{ color: '#0e2a5499' }}>
                  {service.description}
                </p>

                {/* Decorative corner gradient */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-10' : 'opacity-0'
                }`}
                  style={{ background: `radial-gradient(circle at bottom right, ${service.color} 0%, transparent 70%)` }}>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-3xl bg-white border-2 shadow-xl relative overflow-hidden"
            style={{ borderColor: '#00999c20' }}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{ 
                backgroundImage: `radial-gradient(circle, #00999c 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}>
            </div>
            
            <div className="relative">
              <p className="text-xl font-semibold mb-4" style={{ color: '#0e2a54' }}>
                Not sure which service fits your needs?
              </p>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}>
                Get a Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
