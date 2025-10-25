'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [supportStaff, setSupportStaff] = useState(2);
  const [hourlyCost, setHourlyCost] = useState(15);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  // Calculations
  const weeksPerYear = 52;
  const workHoursPerYear = hoursPerWeek * weeksPerYear; // Calculate based on user input
  const currentAnnualCost = supportStaff * hourlyCost * workHoursPerYear;
  const automationRate = 0.70; // 70% of work can be automated
  const annualSavings = Math.round(currentAnnualCost * automationRate);
  
  // For display purposes
  const hoursAutomated = Math.round(supportStaff * workHoursPerYear * automationRate);
  const staffEquivalent = Math.round(supportStaff * automationRate * 10) / 10; // Round to 1 decimal

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #e6f7f8 0%, #f0fafb 50%, #e6f7f8 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-sm font-semibold" style={{ color: '#00999c' }}>ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e2a54' }}>
            Calculate Your <span className="gradient-text">Annual Savings</span>
          </h2>
          <p className="text-xl" style={{ color: '#0e2a5499' }}>
            See how much your business can save with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Input Controls */}
          <div className="space-y-6" style={{ animation: 'slideInLeft 0.7s ease-out' }}>
            <div className="p-10 rounded-2xl bg-white shadow-xl border border-gray-200 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-12" style={{ color: '#0e2a54' }}>Your Current Metrics</h3>
              
              <div className="space-y-12 flex-1 flex flex-col justify-between">
                {/* Support Staff */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-semibold text-lg" style={{ color: '#0e2a54' }}>Number of Support Staff</label>
                    <span className="font-bold text-2xl" style={{ color: '#00999c' }}>{supportStaff}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={supportStaff}
                    onChange={(e) => setSupportStaff(Number(e.target.value))}
                    className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: '#00999c' }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Hourly Cost */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-semibold text-lg" style={{ color: '#0e2a54' }}>Average Hourly Cost</label>
                    <span className="font-bold text-2xl" style={{ color: '#00999c' }}>£{hourlyCost}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                    className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: '#00999c' }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>£15</span>
                    <span>£200</span>
                  </div>
                </div>

                {/* Hours Per Week */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-semibold text-lg" style={{ color: '#0e2a54' }}>Average Hours per Week</label>
                    <span className="font-bold text-2xl" style={{ color: '#00999c' }}>{hoursPerWeek}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: '#00999c' }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>10 hrs</span>
                    <span>60 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6 h-full flex flex-col" style={{ animation: 'slideInRight 0.7s ease-out' }}>
            {/* Main Savings Card */}
            <div className="p-10 rounded-2xl text-white shadow-2xl flex-1 flex items-center justify-center hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}>
              <div className="text-center">
                <p className="text-xl opacity-90 mb-4">Your Estimated Annual Savings</p>
                <div className="text-6xl md:text-7xl font-bold">
                  {formatCurrency(annualSavings)}
                </div>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animation: 'slideInRight 0.6s ease-out 0.2s both' }}>
                <div className="text-sm mb-1" style={{ color: '#0e2a5499' }}>Hours Automated</div>
                <div className="text-3xl font-bold gradient-text">
                  {hoursAutomated.toLocaleString()}
                </div>
                <div className="text-xs mt-1" style={{ color: '#0e2a5466' }}>per year</div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animation: 'slideInRight 0.6s ease-out 0.3s both' }}>
                <div className="text-sm mb-1" style={{ color: '#0e2a5499' }}>Staff Equivalent</div>
                <div className="text-3xl font-bold gradient-text">
                  {staffEquivalent}
                </div>
                <div className="text-xs mt-1" style={{ color: '#0e2a5466' }}>FTE saved</div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animation: 'slideInRight 0.6s ease-out 0.4s both' }}>
                <div className="text-sm mb-1" style={{ color: '#0e2a5499' }}>Automation Rate</div>
                <div className="text-3xl font-bold gradient-text">70%</div>
                <div className="text-xs mt-1" style={{ color: '#0e2a5466' }}>of workload</div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animation: 'slideInRight 0.6s ease-out 0.5s both' }}>
                <div className="text-sm mb-1" style={{ color: '#0e2a5499' }}>Current Cost</div>
                <div className="text-3xl font-bold gradient-text">{formatCurrency(currentAnnualCost)}</div>
                <div className="text-xs mt-1" style={{ color: '#0e2a5466' }}>annually</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Now centered and aligned with main title */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl bg-white border shadow-lg" style={{ borderColor: '#00999c20' }}>
            <p className="mb-4 text-lg" style={{ color: '#0e2a5499' }}>
              Ready to unlock these savings for your business?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

