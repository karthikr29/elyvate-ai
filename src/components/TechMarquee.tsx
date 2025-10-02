'use client';
import Image from 'next/image';

export default function TechMarquee() {
  const technologies = [
    { name: 'OpenAI', logo: '/logo/ChatGPT Icon.png', isExternal: false },
    { name: 'Gemini', logo: '/logo/Google Gemini Icon.png', isExternal: false },
    { name: 'Claude', logo: '/logo/Claude.png', isExternal: false },
    { name: 'Grok', logo: '/logo/Grok Logo Icon.png', isExternal: false },
    { name: 'Perplexity', logo: '/logo/Perplexity AI Icon.png', isExternal: false },
    { name: 'Vapi', logo: '/logo/Vapi AI Icon.png', isExternal: false },
    { name: 'Cursor', logo: '/logo/Cursor.png', isExternal: false },
    { name: 'n8n', logo: '/logo/n8n.png', isExternal: false },
    { name: 'make', logo: '/logo/make.png', isExternal: false },
    { name: 'zapier', logo: '/logo/Zapier.png', isExternal: false },
    { name: 'Apify', logo: '/logo/Apify.png', isExternal: false },
    { name: 'Lovable', logo: '/logo/Lovable.png', isExternal: false },
    { name: 'Bolt', logo: '/logo/Bolt.png', isExternal: false },
    { name: 'Airtable', logo: '/logo/Airtable.png', isExternal: false },
    { name: 'Supabase', logo: '/logo/Supabase.png', isExternal: false },
    { name: 'ClickUp', logo: '/logo/ClickUp.png', isExternal: false },
    { name: 'Monday', logo: '/logo/monday.png', isExternal: false },
    { name: 'OpenRouter', logo: '/logo/OpenRouter (1).png', isExternal: false },
    { name: 'Retell', logo: '/logo/retell.png', isExternal: false },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#0e2a5499' }}>
          Powered By Industry-Leading Technologies
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-8 px-6 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300"
                style={{ minWidth: 'fit-content' }}
              >
                <div className="relative w-8 h-8 mr-3">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-lg" style={{ color: '#0e2a54' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

