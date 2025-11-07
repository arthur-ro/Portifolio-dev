import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto em Breve 1",
      description: "Descrição do primeiro projeto será adicionada em breve. Este será um projeto incrível que demonstra habilidades técnicas avançadas.",
      tags: ["React", "TypeScript", "Tailwind"],
      status: "Em Breve",
    },
    {
      id: 2,
      title: "Projeto em Breve 2",
      description: "Descrição do segundo projeto será adicionada em breve. Um projeto inovador com foco em performance e experiência do usuário.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      status: "Em Breve",
    },
    {
      id: 3,
      title: "Projeto em Breve 3",
      description: "Descrição do terceiro projeto será adicionada em breve. Solução completa demonstrando arquitetura moderna e escalável.",
      tags: ["React Native", "Express", "MongoDB"],
      status: "Em Breve",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container max-w-6xl">
        <div className="space-y-4 mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Alguns dos trabalhos que tenho orgulho de compartilhar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
