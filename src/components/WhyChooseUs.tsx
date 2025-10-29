'use client';
import { useState } from 'react';

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Speed & Efficiency",
      color: "#00999c",
      features: [
        {
          metric: "2-4 Weeks",
          label: "Implementation Time",
          description: "Get your AI solutions up and running with minimal disruption to your operations"
        },
        {
          metric: "70%",
          label: "Automation Rate",
          description: "Achieve industry-leading automation with our battle-tested AI models"
        },
        {
          metric: "10x Faster",
          label: "Response Times",
          description: "Dramatically reduce customer wait times with intelligent automation"
        }
      ]
    },
    {
      id: 1,
      name: "Reliability & Support",
      color: "#00b8bc",
      features: [
        {
          metric: "99.9%",
          label: "Uptime Guarantee",
          description: "Enterprise-grade infrastructure ensures your systems are always running"
        },
        {
          metric: "24/7",
          label: "Expert Support",
          description: "Round-the-clock technical support and monitoring from our dedicated team"
        },
        {
          metric: "<5 Min",
          label: "Response Time",
          description: "Critical issues addressed immediately by our support specialists"
        }
      ]
    },
    {
      id: 2,
      name: "Security & Scale",
      color: "#007a7d",
      features: [
        {
          metric: "Bank-Level",
          label: "Encryption",
          description: "GDPR, HIPAA and SOC 2 compliant with enterprise security standards"
        },
        {
          metric: "Unlimited",
          label: "Scalability",
          description: "Our AI systems grow with your business without additional infrastructure costs"
        },
        {
          metric: "50M+",
          label: "Interactions",
          description: "Proven at scale handling millions of conversations across industries"
        }
      ]
    }
  ];

  const activeCategory = categories[activeTab];

  return (
    <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-sm font-semibold" style={{ color: '#00999c' }}>WHY ELYVATE AI</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e2a54' }}>
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0e2a5499' }}>
            Experience the difference of AI solutions designed for enterprise excellence
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                background: activeTab === category.id 
                  ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)` 
                  : 'white',
                color: activeTab === category.id ? 'white' : '#0e2a54',
                border: activeTab === category.id ? 'none' : '2px solid #e5e7eb',
                boxShadow: activeTab === category.id ? '0 10px 30px -10px rgba(0, 153, 156, 0.5)' : 'none'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Feature Cards with Animation */}
        <div className="grid md:grid-cols-3 gap-8">
          {activeCategory.features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: `${activeCategory.color}30` }}>
              </div>
              
              {/* Card content */}
              <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {/* Metric Badge */}
                <div className="inline-block px-6 py-3 rounded-2xl text-white font-bold text-2xl mb-6"
                  style={{ background: `linear-gradient(135deg, ${activeCategory.color} 0%, ${activeCategory.color}dd 100%)` }}>
                  {feature.metric}
                </div>
                
                {/* Label */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0e2a54' }}>
                  {feature.label}
                </h3>
                
                {/* Description */}
                <p className="text-lg leading-relaxed" style={{ color: '#0e2a5499' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 p-8 rounded-3xl border-2 shadow-xl relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(0, 153, 156, 0.05) 0%, rgba(0, 184, 188, 0.05) 100%)',
            borderColor: '#00999c20'
          }}>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
              <p className="text-sm font-semibold" style={{ color: '#0e2a5499' }}>Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100K+</div>
              <p className="text-sm font-semibold" style={{ color: '#0e2a5499' }}>AI Interactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">99.9%</div>
              <p className="text-sm font-semibold" style={{ color: '#0e2a5499' }}>Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-sm font-semibold" style={{ color: '#0e2a5499' }}>Expert Support</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
