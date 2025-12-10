import { useState, useRef } from "react";
import { MapPin, ChevronRight, ChevronLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Discovery & Consultation",
    description: "We begin by understanding your brand, goals, audience, and project vision.",
    details: ["Initial meeting or briefing", "Reviewing references or inspirations", "Clarifying scope, timelines, and deliverables"],
    icon: "🎯"
  },
  {
    number: 2,
    title: "Research & Strategy",
    description: "We explore creative directions that align with your brand identity.",
    details: ["Market and competitor analysis", "Style and trend research", "Brand positioning review"],
    icon: "🔍"
  },
  {
    number: 3,
    title: "Creative Concept Development",
    description: "We sketch and design multiple concepts based on your requirements.",
    details: ["Mood boards, style guides, or creative directions", "Draft layouts or logo concepts", "Visual storytelling approach"],
    icon: "✨"
  },
  {
    number: 4,
    title: "Client Review & Feedback",
    description: "We share the initial concepts for your feedback.",
    details: ["Refinements", "Revisions", "Changes in style, colors, or typography"],
    icon: "💬"
  },
  {
    number: 5,
    title: "Refinement & Final Design",
    description: "After incorporating your feedback, we perfect the final design.",
    details: ["Accuracy", "Visual consistency", "Brand alignment"],
    icon: "🎨"
  },
  {
    number: 6,
    title: "Final Approval",
    description: "You review the polished final version and confirm everything meets your expectations.",
    details: ["Design files", "Formats for print and digital", "Brand guidelines (if included)"],
    icon: "✅"
  },
  {
    number: 7,
    title: "Project Hand-Over",
    description: "We deliver all final assets securely in your preferred formats.",
    details: ["High-resolution images", "Vector files (AI, EPS, SVG)", "Web-optimized versions (PNG, JPG)"],
    icon: "📦"
  },
  {
    number: 8,
    title: "Support & After-Service",
    description: "We stay available for ongoing support.",
    details: ["Minor post-delivery adjustments", "File reformatting", "Long-term design support"],
    icon: "🤝"
  }
];

const HowWeWorkRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (index: number) => {
    if (index !== currentStep) {
      setCurrentStep(index);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Interactive Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Swipe or click through our creative process journey
          </p>
        </div>

        {/* Progress Road - Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto mb-8">
          <div className="relative">
            {/* Road/Path Background */}
            <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            
            {/* Step Markers on Road */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0">
              {steps.map((s, index) => (
                <button
                  key={s.number}
                  onClick={() => handleStepClick(index)}
                  className={`
                    relative group transition-all duration-300 focus:outline-none
                    ${index <= currentStep ? 'scale-100' : 'scale-90 opacity-60'}
                  `}
                >
                  {/* Map Pin */}
                  <div className={`
                    relative transition-all duration-300
                    ${index === currentStep ? 'scale-125 -translate-y-2' : 'hover:scale-110 hover:-translate-y-1'}
                  `}>
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center 
                      shadow-lg transition-all duration-300 border-2
                      ${index < currentStep 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : index === currentStep 
                          ? 'bg-accent border-accent text-accent-foreground animate-bounce' 
                          : 'bg-muted border-border text-muted-foreground'}
                    `}>
                      {index < currentStep ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                    </div>
                    
                    {/* Pin pointer */}
                    <div className={`
                      absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px]
                      transition-colors duration-300
                      ${index < currentStep 
                        ? 'border-t-primary' 
                        : index === currentStep 
                          ? 'border-t-accent' 
                          : 'border-t-muted'}
                    `} />
                    
                    {/* Step number tooltip */}
                    <div className={`
                      absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 
                      bg-foreground text-background text-xs font-bold rounded
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      whitespace-nowrap
                    `}>
                      Step {s.number}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Road - Mobile (simplified) */}
        <div className="md:hidden max-w-sm mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div 
          className="max-w-3xl mx-auto px-2 sm:px-0"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative bg-gradient-to-br from-card via-card to-muted/50 
            rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl border border-border/50
            backdrop-blur-xl transition-all duration-300">
            
            {/* Step indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg shadow-primary/30 animate-pulse flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden md:block">Step {step.number} of {steps.length}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {step.description}
            </p>

            {/* Details with animated reveal */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 sm:w-8 h-px bg-primary" />
                What's Included
              </h4>
              <div className="grid gap-2 sm:gap-3">
                {step.details.map((detail, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border/50 
                      hover:bg-muted hover:border-primary/30 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="text-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/50 relative z-10">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                size="icon"
                className="sm:hidden h-10 w-10 disabled:opacity-30 relative z-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="hidden sm:inline-flex gap-2 px-6 disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`
                      w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300
                      ${i === currentStep 
                        ? 'bg-primary w-6 sm:w-8' 
                        : i < currentStep 
                          ? 'bg-primary/50' 
                          : 'bg-muted-foreground/30'}
                    `}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                size="icon"
                className="sm:hidden h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-30 relative z-20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="hidden sm:inline-flex gap-2 px-6 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-30 relative z-20"
              >
                Next Step
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Completion message */}
          {currentStep === steps.length - 1 && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-primary/10 text-primary font-medium text-sm sm:text-base">
                <CheckCircle2 className="h-5 w-5" />
                <span className="hidden sm:inline">You've completed the journey! Ready to start your project?</span>
                <span className="sm:hidden">Journey complete! Ready to start?</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkRoadmap;
