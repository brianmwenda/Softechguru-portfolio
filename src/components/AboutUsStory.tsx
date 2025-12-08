import { Rocket, Users, Target, Calendar, MapPin } from "lucide-react";

const AboutUsStory = () => {
  const milestones = [
    { year: "2023", title: "Founded", description: "Started with a vision to deliver exceptional design services", isActive: true },
    { year: "2024", title: "Growing", description: "Expanded services and built lasting client relationships", isActive: true },
    { year: "2025+", title: "The Future", description: "Multiple collaborations and becoming a big business", isActive: false },
  ];

  return (
    <section id="about-us" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Dreams Since 2023
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Left - Story Text */}
            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-foreground mb-3">How It All Began</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In 2023, Softech Guru started as a small creative studio with a big dream. 
                  What began as a one-person passion project has grown into a dedicated business 
                  committed to transforming ideas into stunning digital experiences.
                </p>
              </div>
              
              <div className="glass-card p-6 border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-foreground mb-3">The Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From our first logo design to complex architectural visualizations, every project 
                  has taught us something new. We've had the privilege of working with amazing clients 
                  who trusted us with their visions, and that trust fuels our commitment to excellence.
                </p>
              </div>
            </div>

            {/* Right - Vision */}
            <div className="glass-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're not just building a business – we're building a movement. Our vision is to become 
                a leading creative agency with <span className="text-primary font-semibold">multiple collaborations</span> across 
                industries, empowering businesses of all sizes with world-class design solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Expand to international markets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Build strategic partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Launch innovative design solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-border hidden md:block">
              <div className="h-full bg-primary" style={{ width: '66%' }} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex flex-col items-center">
                  {/* Destination Pin */}
                  <div className={`relative z-10 mb-4 p-3 rounded-full ${milestone.isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} shadow-lg transition-transform hover:scale-110`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  
                  {/* Mobile connecting line */}
                  {index < milestones.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-8 -translate-x-1/2 bg-border">
                      {milestone.isActive && <div className="w-full h-full bg-primary" />}
                    </div>
                  )}
                  
                  {/* Content Card */}
                  <div className="glass-card p-6 text-center w-full group hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className={`text-3xl font-bold mb-2 ${milestone.isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {milestone.year}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
