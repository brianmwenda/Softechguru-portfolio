import { Rocket, Users, Target, Calendar, Linkedin } from "lucide-react";

const AboutUsStory = () => {
  return (
    <section id="about-us" className="py-16 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Dreams Since 2023
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Founder Profile + Story Cards - Equal spacing, closer together */}
          <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-10">
            {/* Left - Founder Profile */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card p-6 rounded-2xl text-center h-full flex flex-col justify-center">
                {/* Profile Image */}
                <div className="relative mx-auto mb-5 w-24 h-24 md:w-28 md:h-28">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/50 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img 
                        src="/assets/images/founder-profile.png" 
                        alt="Brian Mwenda - Founder" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Founder Info */}
                <h3 className="text-xl md:text-2xl font-bold mb-1">Brian Mwenda</h3>
                <p className="text-primary font-medium mb-1">Web Developer / Graphic Designer / Digital Marketer</p>
                <p className="text-muted-foreground text-xs mb-2">BSc. Computer Science</p>
                <a 
                  href="https://www.linkedin.com/in/brian-mwenda-325524360" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center text-primary hover:text-primary/80 transition-colors mb-3"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about creating digital experiences that transform businesses and delight users.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Projects</p>
                    <p className="text-xl font-bold text-foreground">150+</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Clients</p>
                    <p className="text-xl font-bold text-foreground">80+</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Years</p>
                    <p className="text-xl font-bold text-primary">3+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Story Text */}
            <div className="flex flex-col gap-6 h-full">
              <div className="glass-card p-6 border-l-4 border-primary flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">How It All Began</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In 2023, Softech Guru started as a small creative studio with a big dream. 
                  What began as a one-person passion project has grown into a dedicated business 
                  committed to transforming ideas into stunning digital experiences.
                </p>
              </div>
              
              <div className="glass-card p-6 border-l-4 border-accent flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">The Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From our first logo design to complex architectural visualizations, every project 
                  has taught us something new. We've had the privilege of working with amazing clients 
                  who trusted us with their visions, and that trust fuels our commitment to excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision - Centered below */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                We're not just building a business – we're building a movement. Our vision is to become 
                a leading creative agency with <span className="text-primary font-semibold">multiple collaborations</span> across 
                industries, empowering businesses of all sizes with world-class design solutions.
              </p>
              
              <div className="flex flex-col gap-4 max-w-sm mx-auto text-left">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Expand to international markets</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Build strategic partnerships</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Launch innovative design solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
