import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-2 tracking-wide">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a line
            and let's create something amazing together.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-medium text-lg rounded-full hover:scale-105 transition-transform duration-300 glow mb-12"
          >
            <Mail className="w-5 h-5" />
            hello@example.com
          </a>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-4 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
