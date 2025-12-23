const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "AWS",
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
              A passionate creator
              <br />
              <span className="text-muted-foreground">with purpose</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a creative developer with over 5 years of experience
                crafting digital experiences. My journey began with a curiosity
                for how things work, which evolved into a passion for building
                things that matter.
              </p>
              <p>
                I believe great design is invisible—it should feel intuitive,
                natural, and delightful. Whether it's a complex web application
                or a simple landing page, I approach every project with the same
                dedication to quality and attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or enjoying the San Francisco
                coffee scene.
              </p>
            </div>
          </div>

          <div>
            <div className="card-gradient border border-border rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Skills & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="font-display text-3xl font-semibold text-primary mb-1">
                      5+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-primary mb-1">
                      50+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-primary mb-1">
                      30+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
