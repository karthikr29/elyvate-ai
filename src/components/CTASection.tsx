'use client';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Container - Split Design */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating shapes */}
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full border-4 border-white/20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-2xl border-4 border-white/20" style={{ animation: 'spin 20s linear infinite' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-white/20" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animation: 'float 6s ease-in-out infinite' }}></div>

          <div className="grid lg:grid-cols-2 gap-12 p-12 lg:p-16 relative">
            {/* Left Column - Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                {/* Limited spots banner */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white shadow-lg animate-pulse mb-6">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping absolute"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold">ONLY 4 SPOTS LEFT THIS MONTH</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  We&apos;ll Find the Money Leaks in Your Business. You Keep the Savings.
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed mb-4">
                  Book a free consultation <span className="relative inline-block">
                    <span className="font-semibold">(usually £1,000)</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50"></span>
                  </span> and we&apos;ll analyze your workflows, support, sales, operations and data to pinpoint exactly where AI can eliminate waste. No commitment, just honest numbers.
                </p>
              </div>

              {/* Quick Stats Inline */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "95%", label: "Savings" },
                  { value: "2-4", label: "Weeks" },
                  { value: "24/7", label: "Support" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button 
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  style={{ color: '#00999c' }}
                >
                  <span className="flex items-center justify-center gap-3">
                    Claim Your Free Audit
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <p className="text-sm text-white/70 mt-4">✓ No credit card required  •  ✓ 30-min consultation  •  ✓ Instant calendar booking</p>
              </div>
            </div>

            {/* Right Column - Interactive Money Leak Detector */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Main device mockup - looks like a tablet/detector screen */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl border-4 border-gray-700">
                  {/* Device notch/camera */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl border-2 border-gray-700 border-t-0 flex items-center justify-center gap-2">
                    <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Screen content */}
                  <div className="relative bg-white rounded-3xl p-6 min-h-[500px] overflow-hidden">
                    {/* Scanning effect overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <div 
                        className="absolute w-full h-20 opacity-30"
                        style={{ 
                          background: 'linear-gradient(180deg, transparent, rgba(0, 153, 156, 0.3), transparent)',
                          animation: 'scan 3s ease-in-out infinite'
                        }}
                      ></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-20 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-bold text-gray-500">SCANNING</span>
                        </div>
                        <div className="text-xs font-mono" style={{ color: '#00999c' }}>AI-DETECTOR-v2.0</div>
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: '#0e2a54' }}>
                        💸 Money Leaks Detected
                      </h3>
                    </div>

                    {/* Leak Detection Cards */}
                    <div className="relative z-20 space-y-3 mb-6">
                      {[
                        { 
                          leak: 'Manual Support Costs', 
                          amount: '£70,000/yr', 
                          severity: 'critical',
                          fix: 'AI Chatbot',
                          saving: '£66,500'
                        },
                        { 
                          leak: 'Inefficient Phone Handling', 
                          amount: '£20,000/yr', 
                          severity: 'high',
                          fix: 'Voice Agent',
                          saving: '£19,000'
                        },
                        { 
                          leak: 'Repetitive Tasks', 
                          amount: '£10,000/yr', 
                          severity: 'medium',
                          fix: 'Automation',
                          saving: '£9,500'
                        },
                      ].map((item, i) => (
                        <div 
                          key={i}
                          className="relative group overflow-hidden rounded-2xl border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                          style={{ 
                            borderColor: item.severity === 'critical' ? '#ef4444' : item.severity === 'high' ? '#f59e0b' : '#6b7280',
                            background: 'white',
                            animationDelay: `${i * 0.2}s`
                          }}
                        >
                          {/* Severity indicator */}
                          <div className="absolute right-3 top-3">
                            <div 
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ 
                                background: item.severity === 'critical' ? '#ef4444' : item.severity === 'high' ? '#f59e0b' : '#6b7280'
                              }}
                            ></div>
                          </div>

                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0e2a5466' }}>
                                Leak Detected
                              </div>
                              <div className="font-bold text-sm mb-1" style={{ color: '#0e2a54' }}>
                                {item.leak}
                              </div>
                              <div className="text-lg font-bold" style={{ color: '#ef4444' }}>
                                -{item.amount}
                              </div>
                            </div>
                          </div>

                          {/* Fix suggestion */}
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00999c' }}></div>
                              <span className="text-xs font-semibold" style={{ color: '#0e2a54' }}>
                                Fix: {item.fix}
                              </span>
                            </div>
                            <div className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#00999c15', color: '#00999c' }}>
                              Save {item.saving}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total calculation */}
                    <div className="relative z-20 rounded-2xl p-5 mb-4" style={{ background: 'linear-gradient(135deg, #00999c, #00b8bc)' }}>
                      <div className="text-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold opacity-90">Total Recoverable</span>
                          <span className="text-xs px-2 py-1 bg-white/20 rounded-full">3 Issues Found</span>
                        </div>
                        <div className="text-4xl font-bold mb-1">£95,000</div>
                        <div className="text-xs opacity-80">Annual savings if fixed with AI</div>
                      </div>
                    </div>

                    {/* Action required */}
                    <div className="relative z-20 flex items-center justify-between p-4 rounded-2xl border-2 border-dashed" style={{ borderColor: '#00999c' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#00999c15' }}>
                          <span className="text-xl">🔍</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold" style={{ color: '#0e2a54' }}>
                            Get Your Report
                          </div>
                          <div className="text-xs" style={{ color: '#0e2a5499' }}>
                            Free detailed audit
                          </div>
                        </div>
                      </div>
                      <svg className="w-5 h-5" style={{ color: '#00999c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Device power button */}
                  <div className="absolute right-0 top-32 w-1 h-12 bg-gray-600 rounded-l-lg"></div>
                  <div className="absolute left-0 top-28 w-1 h-8 bg-gray-600 rounded-r-lg"></div>
                  <div className="absolute left-0 top-40 w-1 h-8 bg-gray-600 rounded-r-lg"></div>
                </div>

                {/* Floating warning badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-red-500 text-white shadow-xl font-bold text-sm animate-bounce">
                  <div className="flex items-center gap-1">
                    <span>⚠️</span>
                    <span>£95K/yr LEAK</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-emerald-500 text-white shadow-xl font-bold">
                  <div className="text-center">
                    <div className="text-xs opacity-90">Fixable in</div>
                    <div className="text-lg">2-4 Weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { width: 0; opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scan {
          0%, 100% { 
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% { 
            top: calc(100% - 5rem);
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
