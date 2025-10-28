'use client';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: '/logo/1.png', alt: 'Voice Agents' },
    { src: '/logo/2.png', alt: 'AI Chatbots' },
    { src: '/logo/3.png', alt: 'AI Automation Workflows' },
  ];

  // Network nodes - pre-defined positions for hydration consistency
  const nodes = [
    { x: 15, y: 20, size: 12, depth: 0 },
    { x: 35, y: 15, size: 8, depth: 50 },
    { x: 55, y: 25, size: 10, depth: 100 },
    { x: 75, y: 18, size: 14, depth: 30 },
    { x: 85, y: 35, size: 9, depth: 80 },
    { x: 25, y: 45, size: 11, depth: 60 },
    { x: 45, y: 50, size: 13, depth: 20 },
    { x: 65, y: 48, size: 10, depth: 90 },
    { x: 80, y: 55, size: 8, depth: 40 },
    { x: 20, y: 70, size: 12, depth: 70 },
    { x: 40, y: 75, size: 9, depth: 10 },
    { x: 60, y: 68, size: 11, depth: 50 },
    { x: 75, y: 80, size: 10, depth: 30 },
    { x: 50, y: 85, size: 14, depth: 60 },
    { x: 90, y: 70, size: 8, depth: 85 },
  ];

  // Calculate connections (nodes within certain distance)
  const connections: Array<{from: number, to: number, distance: number}> = [];
  nodes.forEach((node1, i) => {
    nodes.forEach((node2, j) => {
      if (i < j) {
        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );
        if (distance < 35) { // Connect nodes within 35% distance
          connections.push({ from: i, to: j, distance });
        }
      }
    });
  });

  // Sync image changes with typing animation (2 seconds typing + 2 seconds pause = 4 seconds per item)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2f1 50%, #f8fafc 100%)' }}>
      {/* OPTION 6 ENHANCED: Particle Network Web with Multiple Variations */}
      <div className="absolute inset-0 z-0" style={{ perspective: '1200px' }}>
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
          <defs>
            {/* Gradient for lines */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 153, 156, 0.3)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 184, 188, 0.15)', stopOpacity: 1 }} />
            </linearGradient>
            
            {/* Subtle glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines with varying styles */}
          {connections.map((conn, i) => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            const opacity = 0.4 - (conn.distance / 100);
            const strokeWidth = 1.5 - (conn.distance / 80);
            
            return (
              <g key={i}>
                {/* Main connection line */}
                <line
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth={strokeWidth}
                  strokeOpacity={opacity}
                  filter="url(#glow)"
                  style={{
                    animation: `pulseConnection ${3 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
                
                {/* Data packet traveling along the line */}
                <circle
                  r="1.5"
                  fill="rgba(0, 184, 188, 0.5)"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur={`${4 + (i % 4)}s`}
                    repeatCount="indefinite"
                    path={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                    begin={`${i * 0.3}s`}
                  />
                  <animate
                    attributeName="r"
                    values="1;2;1"
                    dur={`${2 + (i % 2)}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Network Nodes with multiple variations */}
        {nodes.map((node, i) => {
          const scale = 1 + (node.depth / 200);
          const blur = node.depth / 60;
          const isLargeNode = node.size > 10;
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.size * 1.2}px`,
                height: `${node.size * 1.2}px`,
                transform: `translate(-50%, -50%) translateZ(${node.depth}px) scale(${scale})`,
                transformStyle: 'preserve-3d',
                animation: `floatNode ${6 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                willChange: 'transform',
                opacity: 0.7
              }}
            >
              {/* Outer ring pulse */}
              <div
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: `rgba(0, 153, 156, ${0.15 - blur * 0.02})`,
                  animation: `expandRing ${3 + (i % 2)}s ease-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
              
              {/* Main node body */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: isLargeNode
                    ? `radial-gradient(circle at 30% 30%, rgba(0, 184, 188, 0.6), rgba(0, 153, 156, 0.4), rgba(0, 122, 125, 0.3))`
                    : `radial-gradient(circle at 30% 30%, rgba(0, 184, 188, 0.5), rgba(0, 153, 156, 0.3))`,
                  boxShadow: `
                    0 0 ${node.size}px rgba(0, 153, 156, 0.4),
                    0 0 ${node.size * 2}px rgba(0, 184, 188, 0.2),
                    inset -${node.size / 4}px -${node.size / 4}px ${node.size / 2}px rgba(0, 153, 156, 0.2),
                    inset ${node.size / 6}px ${node.size / 6}px ${node.size / 3}px rgba(255, 255, 255, 0.2)
                  `,
                  filter: `blur(${blur}px)`,
                  border: '1px solid rgba(0, 184, 188, 0.3)'
                }}
              >
                {/* Inner core glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)',
                    animation: `pulse ${2 + (i % 2)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`
                  }}
                />
                
                {/* Rotating energy ring for large nodes */}
                {isLargeNode && (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '1px solid rgba(0, 184, 188, 0.3)',
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      animation: `spinNode ${4 + i}s linear infinite`
                    }}
                  />
                )}
              </div>

              {/* Particle orbit for large nodes - removed for subtlety */}

              {/* Data flow indicator - more subtle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    transparent 0deg,
                    rgba(0, 184, 188, 0.15) 45deg,
                    transparent 90deg
                  )`,
                  animation: `spinData ${2 + (i % 3)}s linear infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes floatNode {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) translateX(0px) scale(1); 
          }
          25% {
            transform: translate(-50%, -50%) translateY(-20px) translateX(10px) scale(1.05);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-30px) translateX(15px) scale(1.1); 
          }
          75% {
            transform: translate(-50%, -50%) translateY(-20px) translateX(10px) scale(1.05);
          }
        }
        
        @keyframes pulseConnection {
          0%, 100% {
            opacity: 0.2;
            stroke-width: 1;
          }
          50% {
            opacity: 0.5;
            stroke-width: 2;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes expandRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes spinNode {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitParticle {
          from { transform: rotate(0deg) translateX(calc(100% * 0.6)) translateY(-50%); }
          to { transform: rotate(360deg) translateX(calc(100% * 0.6)) translateY(-50%); }
        }

        @keyframes spinData {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-up text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#0e2a54' }}>
              Transform Your Business<br />
              with<br />
              <TypeAnimation
                sequence={[
                  'Voice Agents',
                  2000,
                  'AI Chatbots',
                  2000,
                  'AI Automation Workflows',
                  2000,
                  'AI Audit(Free of Cost)',
                  2000,
                ]}
                wrapper="span"
                speed={60}
                className="gradient-text"
                repeat={Infinity}
                cursor={true}
                preRenderFirstString={true}
              />
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8" style={{ color: '#0e2a5499' }}>
              Enterprise AI solutions that drive real results. Automate workflows, reduce costs by 95%, 
              and scale your operations with intelligent agents.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#calculator"
                className="px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}
              >
                Calculate Your Savings
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border-2 font-semibold text-lg hover:scale-105 transition-all duration-300"
                style={{ borderColor: '#00999c', color: '#00999c', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00999c10'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Schedule a Demo
              </a>
            </div>

            {/* Stats Ticker */}
            <div className="flex flex-wrap gap-8">
              <div className="animate-pulse-glow">
                <div className="text-3xl md:text-4xl font-bold gradient-text">500K+</div>
                <div className="text-sm mt-1" style={{ color: '#0e2a5499' }}>Hours Saved</div>
              </div>
              <div className="animate-pulse-glow" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">95%</div>
                <div className="text-sm mt-1" style={{ color: '#0e2a5499' }}>Cost Reduction</div>
              </div>
              <div className="animate-pulse-glow" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm mt-1" style={{ color: '#0e2a5499' }}>Automation</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in-up">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 700px"
                    className="object-contain p-8"
                    priority={index === 0}
                    quality={85}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'low'}
                  />
                </div>
              ))}
            </div>
            
            {/* Image Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8' 
                      : 'bg-gray-300'
                  }`}
                  style={index === currentImageIndex ? { background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' } : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

