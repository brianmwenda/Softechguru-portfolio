import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lumina App",
    category: "Web Design",
    description: "A meditation and wellness platform with immersive experiences",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    title: "Nova Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for modern SaaS companies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    title: "Vertex Studio",
    category: "Branding",
    description: "Complete brand identity for a creative agency",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    title: "Echo Mobile",
    category: "App Design",
    description: "Music streaming app with social features",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    year: "2023",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground hidden md:block max-w-sm text-right">
            A curated selection of projects that showcase my skills and passion
            for design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative card-gradient border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
