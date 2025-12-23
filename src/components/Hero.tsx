import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          <p className="animate-fade-up stagger-1 text-primary font-medium mb-4 tracking-wide">
            Creative Developer
          </p>

          <h1 className="animate-fade-up stagger-2 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8">
            I craft digital
            <br />
            <span className="text-gradient-accent">experiences</span> that
            <br />
            inspire.
          </h1>

          <p className="animate-fade-up stagger-3 text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Passionate about building beautiful, functional, and user-centered
            digital products. Based in San Francisco.
          </p>

          <div className="animate-fade-up stagger-4 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:scale-105 transition-transform duration-300 glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
        <a
          href="#work"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
