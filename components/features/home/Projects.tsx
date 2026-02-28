import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { PROJECTS } from "@/constants/project";

export function Projects() {
  return (
    <Section className="space-y-12">
      {/* Section Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.</p>
      </div>

      {/* Top 3 Featured Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* CTA Button */}
      <div>

      </div>
    </Section>
  )
}