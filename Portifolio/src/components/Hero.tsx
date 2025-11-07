import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Olá, meu nome é</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Arthur C. da Silva
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
                Desenvolvedor Full Stack
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. 
              Especializado em desenvolver soluções web modernas, responsivas e escaláveis 
              que fazem a diferença no mundo real.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-primary transition-all hover:scale-105"
              >
                Ver Projetos
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold transition-all hover:scale-105"
              >
                Entre em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:seu@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-primary">
                <img 
                  src={imageError ? profilePlaceholder : profilePlaceholder}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
