'use client';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      badge: "FREE",
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "AI Audits",
      subtitle: "Free of Cost",
      description: "Comprehensive evaluation of your current operations to identify AI opportunities, assess readiness and create a strategic roadmap for AI implementation.",
      color: "#10b981",
      accentColor: "#059669",
      glowColor: "rgba(16, 185, 129, 0.15)"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      badge: "24/7",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      title: "AI Chatbots",
      subtitle: "Always Available",
      description: "Intelligent conversational agents that handle customer inquiries round-the-clock, reducing support costs while improving response times.",
      color: "#3b82f6",
      accentColor: "#2563eb",
      glowColor: "rgba(59, 130, 246, 0.15)"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      badge: "SMART",
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Voice Agents",
      subtitle: "Natural Conversations",
      description: "AI-powered calling systems with natural language processing, perfect for sales, support and appointment scheduling.",
      color: "#a855f7",
      accentColor: "#9333ea",
      glowColor: "rgba(168, 85, 247, 0.15)"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      badge: "CUSTOM",
      badgeStyle: "bg-teal-50 text-teal-700 border-teal-200",
      title: "Custom AI Agents",
      subtitle: "Tailored Solutions",
      description: "Bespoke AI solutions designed specifically for your business needs, from document processing to complex decision-making workflows.",
      color: "#14b8a6",
      accentColor: "#0d9488",
      glowColor: "rgba(20, 184, 166, 0.15)"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      badge: "AUTO",
      badgeStyle: "bg-cyan-50 text-cyan-700 border-cyan-200",
      title: "Automation Agents",
      subtitle: "Smart Workflows",
      description: "Streamline repetitive tasks and complex workflows with intelligent automation that learns and adapts to your processes.",
      color: "#06b6d4",
      accentColor: "#0891b2",
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "INSIGHTS",
      badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: "Analytics & AI",
      subtitle: "Data-Driven Decisions",
      description: "AI-driven reporting and analytics that provide actionable insights, predict trends and help you make informed decisions.",
      color: "#6366f1",
      accentColor: "#4f46e5",
      glowColor: "rgba(99, 102, 241, 0.15)"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#0e2a54 1px, transparent 1px), linear-gradient(90deg, #0e2a54 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#0e2a54' }}>
            AI Solutions for Every <br className="hidden md:block" /><span className="gradient-text">Business Need</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            From automation to insights, we&apos;ve got you covered with cutting-edge AI technology
          </p>
        </div>

        {/* Services Grid - Modern Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg`}
                style={{ background: service.glowColor }}>
              </div>

              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl bg-white border transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-gray-300 shadow-2xl -translate-y-1 scale-[1.02]' 
                  : 'border-gray-200 shadow-sm hover:shadow-md'
              }`}>
                
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div 
                    className={`inline-flex p-4 rounded-xl transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                    style={{ 
                      background: hoveredIndex === index ? service.glowColor : '#f9fafb',
                      color: hoveredIndex === index ? service.color : '#6b7280'
                    }}>
                    {service.icon}
                  </div>
                  
                  {/* Badge */}
                  <div className={`absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-bold border transition-all duration-300 ${service.badgeStyle}`}>
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 transition-colors duration-300" 
                      style={{ 
                        color: hoveredIndex === index ? service.color : '#0e2a54'
                      }}>
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`} style={{ color: service.color }}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-b-2xl ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`} style={{ background: service.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
