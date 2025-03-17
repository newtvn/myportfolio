
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/70"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-0 h-screen flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-8 animate-fade-up z-10">
          <div>
            <p className="subtitle animate-fade-up animate-delay-100">Chief Executive Officer & Full Stack Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight animate-fade-up animate-delay-200">
              Newton Brian <br /> 
              <span className="text-primary">Nyongesa</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up animate-delay-300">
              Co-founder and computer science student with expertise in full stack development. 
              Passionate about creating innovative solutions and leading teams to success.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
            <Button size="lg" className="rounded-full" asChild>
              <a href="/Newton_Brian_Resume.pdf" download>Download Resume</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 h-full relative hidden md:block">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDE1OTE0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
            alt="Newton Brian Nyongesa" 
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-0"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm font-medium text-foreground"
          aria-label="Scroll down"
        >
          <span className="mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
