'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Understanding Your Vision",
      description: "We dive deep into your business processes, understand your challenges and identify opportunities for AI automation.",
      metric: "1-2 Days",
      color: "#00999c"
    },
    {
      number: "02",
      title: "Build",
      subtitle: "Bringing Ideas to Life",
      description: "Our expert team deploys custom AI solutions tailored to your needs, with seamless integration into your existing systems.",
      metric: "1-3 Weeks",
      color: "#00b8bc"
    },
    {
      number: "03",
      title: "Optimize",
      subtitle: "Continuous Excellence",
      description: "We continuously monitor performance, gather feedback and refine your AI systems to maximize ROI and efficiency.",
      metric: "Ongoing",
      color: "#007a7d"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-sm font-semibold" style={{ color: '#00999c' }}>OUR PROCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e2a54' }}>
            From Idea to <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0e2a5499' }}>
            A streamlined journey designed to transform your vision into powerful AI solutions
          </p>
        </div>

        {/* Vertical Timeline for Desktop, Stacked for Mobile */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2" 
            style={{ background: 'linear-gradient(180deg, #00999c 0%, #00b8bc 50%, #007a7d 100%)', opacity: 0.2 }}>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="group relative">
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{ background: `linear-gradient(135deg, ${step.color}40 0%, ${step.color}20 100%)` }}>
                      </div>
                      <div className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className="px-4 py-1 rounded-full text-sm font-bold text-white"
                            style={{ background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)` }}>
                            {step.metric}
                          </div>
                          <span className="text-sm font-semibold tracking-wider" style={{ color: step.color }}>
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-2" style={{ color: '#0e2a54' }}>
                          {step.title}
                        </h3>
                        <p className="text-lg font-medium mb-4 opacity-60" style={{ color: '#0e2a54' }}>
                          {step.subtitle}
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: '#0e2a5499' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle Indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full items-center justify-center z-10"
                    style={{ background: 'white', border: `4px solid ${step.color}` }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                      style={{ background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)` }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Visual Element - Animated Icon/Illustration */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                        style={{ background: `radial-gradient(circle, ${step.color} 0%, transparent 70%)` }}>
                      </div>
                      <div className="absolute inset-4 rounded-full flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)` }}>
                        <div className="text-6xl font-bold opacity-10" style={{ color: step.color }}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ borderColor: '#00999c20' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold" style={{ color: '#0e2a5499' }}>Ready to get started?</p>
                <p className="text-2xl font-bold" style={{ color: '#0e2a54' }}>Let&apos;s build something amazing</p>
              </div>
            </div>
            <a href="#contact"
              className="px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}>
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
