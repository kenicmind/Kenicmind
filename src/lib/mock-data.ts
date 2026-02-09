export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Logo' | 'Print' | 'Digital';
  client: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  featured: boolean;
  image: string;
  gallery: string[];
  year: number;
}

export const projects: Project[] = [
  {
    id: 'afraya-collective',
    title: 'Afraya Collective Brand Identity',
    category: 'Branding',
    client: 'Afraya Collective',
    shortDescription: 'Complete brand system for a modern African fashion collective, emphasizing cultural storytelling and contemporary design.',
    challenge: 'Afraya Collective needed a distinctive brand identity that honored African heritage while positioning them as a forward-thinking, premium fashion house appealing to both local and international markets.',
    solution: 'We developed a comprehensive brand identity that weaves traditional African patterns into a modern design system. The visual language combines geometric elements inspired by African textiles with contemporary typography, creating a cohesive brand presence across all touchpoints.',
    results: [
      'Brand recognition increased 85% within first 6 months',
      'Website traffic grew 120% post-launch',
      '40+ retail partnerships established',
      'International press coverage in 5 fashion publications',
    ],
    featured: true,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
    ],
    year: 2023,
  },
  {
    id: 'ubuntu-tech-startups',
    title: 'Ubuntu Tech Startups Branding',
    category: 'Branding',
    client: 'Ubuntu Tech Startups',
    shortDescription: 'Brand identity for a tech accelerator supporting African entrepreneurs and innovative startups.',
    challenge: 'Ubuntu needed a brand that communicated trust, innovation, and community support while appealing to both entrepreneurs and international investors.',
    solution: 'Created a vibrant, tech-forward brand with a color palette reflecting African sunsets and growth. The identity system is flexible enough for various applications while maintaining strong visual recognition.',
    results: [
      'Attracted $2M+ in funding from international VCs',
      '150+ startup applications in first year',
      'Featured in 8 major tech publications',
      '92% brand recall rate among target audience',
    ],
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    ],
    year: 2023,
  },
  {
    id: 'zenith-luxury-brand',
    title: 'Zenith Luxury Brand Logo & System',
    category: 'Logo',
    client: 'Zenith Luxury Goods',
    shortDescription: 'Luxury brand logo and comprehensive identity system for premium African goods.',
    challenge: 'Create a logo that conveys luxury, exclusivity, and African heritage for a high-end product line entering international markets.',
    solution: 'Designed a minimalist logo combining geometric African elements with luxury design principles. The mark works beautifully across scales, from digital to embossing on premium packaging.',
    results: [
      'Logo appeared in 15+ international luxury publications',
      '300% increase in e-commerce sales post-rebrand',
      'Stocked in 25 premium retail locations globally',
    ],
    featured: true,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    ],
    year: 2023,
  },
  {
    id: 'savanna-print-campaign',
    title: 'Savanna Coffee Print Campaign',
    category: 'Print',
    client: 'Savanna Coffee Roasters',
    shortDescription: 'Comprehensive print campaign including packaging, posters, and collateral for premium African coffee brand.',
    challenge: 'Design a cohesive print campaign that tells the story of African coffee while standing out on competitive retail shelves.',
    solution: 'Created a rich visual narrative with photography-driven design, hand-lettered typography, and sustainable packaging design that emphasizes the coffee\'s origin story.',
    results: [
      'Campaign won 2 international design awards',
      'Retail visibility increased 60%',
      'Social media engagement increased 200%',
    ],
    featured: false,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1513599534738-b62ac457fb1d?w=1200&h=800&fit=crop',
    ],
    year: 2022,
  },
  {
    id: 'pulse-digital-platform',
    title: 'Pulse Digital Platform Design',
    category: 'Digital',
    client: 'Pulse Health Tech',
    shortDescription: 'Complete UI/UX design and digital strategy for a health monitoring platform serving African healthcare.',
    challenge: 'Design an intuitive health app that works reliably on low-bandwidth connections while building trust in the healthcare space.',
    solution: 'Developed a mobile-first interface with offline functionality, extensive user testing with real users, and a design system ensuring accessibility and reliability.',
    results: [
      '50K+ active users in first 6 months',
      '4.8 star rating on app stores',
      'Partnerships with 8 healthcare facilities',
      '98% retention rate',
    ],
    featured: true,
    image: 'https://images.unsplash.com/photo-1534677527114-3a028e1da84b?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534677527114-3a028e1da84b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    ],
    year: 2023,
  },
  {
    id: 'horizon-magazine-redesign',
    title: 'Horizon Magazine Redesign',
    category: 'Digital',
    client: 'Horizon Magazine',
    shortDescription: 'Complete editorial redesign and web platform modernization for leading African culture magazine.',
    challenge: 'Modernize a legacy publication while maintaining editorial integrity and creating a platform that celebrates African stories.',
    solution: 'Designed a responsive, content-first digital experience with a flexible layout system supporting diverse story formats and a strong typographic hierarchy.',
    results: [
      'Monthly visits increased 250%',
      'Average session duration increased from 2 to 8 minutes',
      'Newsletter subscriptions grew by 400%',
      'Won Digital Publishing Award 2023',
    ],
    featured: false,
    image: 'https://images.unsplash.com/photo-1631785112505-e06c5dc75aa3?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1631785112505-e06c5dc75aa3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
    ],
    year: 2023,
  },
];

export const testimonials = [
  {
    id: 1,
    author: 'Ama Mensah',
    role: 'Founder & CEO',
    company: 'Afraya Collective',
    content: 'Working with Kenicmind Concept transformed how the world sees our brand. They didn\'t just design visuals—they built a complete system that tells our story. Their strategic thinking goes far beyond aesthetics.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    author: 'Kofi Boateng',
    role: 'Managing Director',
    company: 'Ubuntu Tech Startups',
    content: 'The brand identity Kenicmind created helped us attract investors and entrepreneurs. It perfectly captures our mission of supporting African innovation. Exceptional work.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    author: 'Zainab Hassan',
    role: 'Creative Director',
    company: 'Zenith Luxury Goods',
    content: 'Kenicmind\'s approach to brand design is refreshingly strategic. They understood our luxury positioning while honoring our African roots. The resulting logo is timeless.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export const teamMembers = [
  {
    id: 1,
    name: 'Kofi Mensah',
    role: 'Founder & Creative Director',
    bio: 'Kofi brings 12+ years of branding and design experience. His strategic approach to visual storytelling has shaped brands across Africa and beyond.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    specialties: ['Brand Strategy', 'Visual Identity', 'Design Direction'],
  },
  {
    id: 2,
    name: 'Adeyemi Okonkwo',
    role: 'Head of Design',
    bio: 'Adeye leads our design team with a passion for detail and cultural authenticity. She specializes in creating cohesive design systems that feel both modern and intentional.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    specialties: ['Design Systems', 'Illustration', 'UX Design'],
  },
  {
    id: 3,
    name: 'Zara Osman',
    role: 'Strategy & Research Lead',
    bio: 'Zara brings deep insights into African markets and consumer behavior. Her research shapes our strategic recommendations and ensures every design decision is purposeful.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    specialties: ['Market Research', 'Brand Strategy', 'User Research'],
  },
];

export const blogPosts = [
  {
    id: 'intentional-design-matters',
    title: 'Why Intentional Design Matters for African Brands',
    excerpt: 'Explore how strategic design thinking creates lasting value and builds genuine connections with audiences.',
    author: 'Kofi Mensah',
    date: '2024-02-01',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    content: `# Why Intentional Design Matters for African Brands

In a world of infinite digital content and fleeting attention spans, intentional design has become more important than ever. But what does it really mean, and why should African brands care?

## The Problem with Reactive Design

Too many brands approach design reactively. They see what competitors are doing, follow trends, or simply need something "nice" to put on their website. This approach might look good in the moment, but it rarely creates lasting value or builds genuine connections with audiences.

Intentional design, on the other hand, starts with a clear purpose. Every color choice, every typeface, every layout decision is made for a reason. It's design that understands the brand's story, values, and market position—and communicates all of these things clearly to the audience.

## Building Authentic Narratives

African brands have powerful stories to tell. Stories rooted in culture, heritage, innovation, and resilience. But these stories only resonate when they're communicated authentically.

Intentional design means taking time to understand these narratives deeply, then finding visual languages that honor them while remaining contemporary and competitive on global stages.

## The Long-term Value

When design is intentional, it becomes more than decoration. It becomes a strategic asset. A well-designed brand identity can:

- Build trust and credibility in competitive markets
- Attract the right customers and partners
- Communicate value propositions clearly
- Support business growth over years, not just months

This is the approach we take with every project at Kenicmind Concept. Design is strategy made visible.`,
    readTime: '5 min read',
  },
  {
    id: 'african-design-trends-2024',
    title: 'African Design Trends Shaping 2024',
    excerpt: 'A deep dive into the visual trends defining African creative work this year—and why they matter.',
    author: 'Adeyemi Okonkwo',
    date: '2024-01-15',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    content: `# African Design Trends Shaping 2024

The creative landscape across Africa is evolving rapidly. New voices are emerging, traditional elements are being reimagined, and African designers are increasingly setting trends rather than following them.

## 1. Authentic Storytelling

The trend towards authentic, locally-rooted narratives continues to grow. Brands are moving away from generic global aesthetics and towards designs that genuinely reflect African contexts, values, and perspectives.

## 2. Bold Typography

Hand-drawn letterforms, custom typefaces, and expressive typography are everywhere. African designers are creating unique typographic systems that blend modern sensibilities with cultural references.

## 3. Sustainable Design Thinking

As environmental consciousness grows, we're seeing more brands emphasize sustainable practices in their visual and physical design. This extends beyond packaging to entire brand systems.

## 4. Collaborative Creativity

Cross-border collaborations between African creatives are becoming more common and more celebrated. These partnerships create richer, more diverse creative outputs.

## What This Means for Your Brand

If you're building or evolving a brand in 2024, the message is clear: authenticity and intentionality matter. Audiences can tell the difference between design that's made for them and design that's made from genuine understanding and respect.`,
    readTime: '7 min read',
  },
];

export const processSteps = [
  {
    number: 1,
    title: 'Discover & Strategy',
    description: 'We begin by understanding your brand story, market context, and business objectives. Through workshops and research, we uncover insights that shape everything that follows.',
    icon: '🔍',
  },
  {
    number: 2,
    title: 'Concept & Direction',
    description: 'Based on our findings, we develop strategic design directions that address your challenges while honoring your unique value proposition and cultural context.',
    icon: '💡',
  },
  {
    number: 3,
    title: 'Design & Refinement',
    description: 'We bring concepts to life through meticulous design work. Every element is crafted with intention, refined through iteration, and tested for effectiveness.',
    icon: '🎨',
  },
  {
    number: 4,
    title: 'System & Documentation',
    description: 'We deliver more than just designs. A comprehensive brand system and guidelines ensure consistency and empower your team to grow the brand confidently.',
    icon: '📋',
  },
  {
    number: 5,
    title: 'Launch & Support',
    description: 'We support your launch and remain available for guidance as your brand enters the world. This is where strategy meets execution.',
    icon: '🚀',
  },
];
