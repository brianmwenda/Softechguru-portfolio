import { MapPin } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discovery & Consultation",
    description: "We begin by understanding your brand, goals, audience, and project vision.",
    details: ["Initial meeting or briefing", "Reviewing references or inspirations", "Clarifying scope, timelines, and deliverables"]
  },
  {
    number: 2,
    title: "Research & Strategy",
    description: "We explore creative directions that align with your brand identity.",
    details: ["Market and competitor analysis", "Style and trend research", "Brand positioning review"]
  },
  {
    number: 3,
    title: "Creative Concept Development",
    description: "We sketch and design multiple concepts based on your requirements.",
    details: ["Mood boards, style guides, or creative directions", "Draft layouts or logo concepts", "Visual storytelling approach"]
  },
  {
    number: 4,
    title: "Client Review & Feedback",
    description: "We share the initial concepts for your feedback.",
    details: ["Refinements", "Revisions", "Changes in style, colors, or typography"]
  },
  {
    number: 5,
    title: "Refinement & Final Design",
    description: "After incorporating your feedback, we perfect the final design.",
    details: ["Accuracy", "Visual consistency", "Brand alignment"]
  },
  {
    number: 6,
    title: "Final Approval",
    description: "You review the polished final version and confirm everything meets your expectations.",
    details: ["Design files", "Formats for print and digital", "Brand guidelines (if included)"]
  },
  {
    number: 7,
    title: "Project Hand-Over",
    description: "We deliver all final assets securely in your preferred formats.",
    details: ["High-resolution images", "Vector files (AI, EPS, SVG)", "Web-optimized versions (PNG, JPG)"]
  },
  {
    number: 8,
    title: "Support & After-Service",
    description: "We stay available for ongoing support.",
    details: ["Minor post-delivery adjustments", "File reformatting", "Long-term design support"]
  }
];

const HowWeWorkRoadmap = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work: From Idea to Final Delivery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent, collaborative journey that ensures your vision becomes reality
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Roadmap Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* The main path/road line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform -translate-y-1/2" />
          
          {/* The main path/road line - mobile/tablet (vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {/* First row - steps 1-4 */}
            {steps.slice(0, 4).map((step, index) => (
              <div key={step.number} className="relative pl-16 lg:pl-0">
                {/* Map Marker - Mobile */}
                <div className="lg:hidden absolute left-0 top-0 z-20">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-background">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary" />
                  </div>
                </div>

                {/* Card */}
                <div 
                  className="glass-card p-5 h-full relative lg:mt-24"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Map Marker - Desktop */}
                  <div className="hidden lg:block absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-background animate-pulse">
                        <MapPin className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary" />
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 lg:top-2 right-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 pr-8 lg:pr-0 lg:mt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - steps 5-8 (reversed on desktop for zigzag effect) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 mt-8 lg:mt-12">
            {steps.slice(4, 8).map((step, index) => (
              <div key={step.number} className="relative pl-16 lg:pl-0">
                {/* Map Marker - Mobile */}
                <div className="lg:hidden absolute left-0 top-0 z-20">
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 border-4 border-background">
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-accent" />
                  </div>
                </div>

                {/* Card */}
                <div 
                  className="glass-card p-5 h-full relative lg:mb-24"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  {/* Map Marker - Desktop (bottom position) */}
                  <div className="hidden lg:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-accent" />
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 border-4 border-background animate-pulse mt-2">
                        <MapPin className="h-5 w-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 lg:top-2 right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 pr-8 lg:pr-0">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting curved lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path 
                d="M0,50 Q250,20 500,50 T1000,50" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="3"
                strokeDasharray="8,4"
                className="opacity-40"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkRoadmap;
