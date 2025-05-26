import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OCSC International Education Expo 2024",
    description:
      "The official website for OCSC International Expo 2024, an event promoting universities for studying abroad.",
    image: "/projects/projectOCSC.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "#",
    // demoUrl:
    //   "https://ocsc-2024-gqwgk7dk7-tanthidayu0000s-projects.vercel.app/profile",
    githubUrl: "https://github.com/realpantagon/OCSC",
  },
  {
    id: 2,
    title: "ACDelco Lucky Draw",
    description:
      "Web application for managing and tracking ticket entries for a promotional prize draw event.",
    image: "/projects/projectACDelco.png",
    tags: ["JavaScript", "React", "Material UI"],
    demoUrl: "https://acdelco-pi.vercel.app/",
    githubUrl: "https://github.com/tanhawestM/Acdel",
  },
  {
    id: 3,
    title: "CPE Siren",
    description:
      "Web app for network monitoring and alerting, featuring a real-time dashboard and graphical data visualization.",
    image: "/projects/projectCPESIREN.png",
    tags: ["React", "Material UI", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/CPEsiren",
  },
  {
    id: 4,
    title: "International Agricultural Forum 2024",
    description: "User Attendance Tracking System.",
    image: "/projects/projectIAF.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/tanhawestM/IAF2024",
  },
  {
    id: 5,
    title: "pixelParade",
    description:
      "Web app for displaying posters on TV screens to promote general events or broadcast emergency alerts in real time.",
    image: "/projects/projectpixel.png",
    tags: ["Vue.js", "TailwindCSS", "Typescript"],
    demoUrl: "#",
    githubUrl: "https://github.com/CMU-Digital-Signage/frontend-cmu-ds",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a look at some of my latest creations. Each one built with
          precision, passion, and a sharp eye for performance and user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Make content area grow to push icons to bottom */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Spacer to push icons down */}
                <div className="flex-grow" />

                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tanhawestM"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
