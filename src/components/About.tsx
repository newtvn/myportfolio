
import { Button } from "@/components/ui/button";
import { Award, Briefcase, Code, Globe, User } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "PHP", level: 70 },
    { name: "Java", level: 65 },
    { name: "Python", level: 60 },
    { name: "C++", level: 60 },
    { name: "Bootstrap", level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">Get to know me</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="glassmorphism rounded-2xl p-8 space-y-6">
              <p className="text-lg">
                I'm a computer science student and co-founder with a passion for full-stack development. 
                My journey in technology started at a young age, and I've since developed a deep interest 
                in creating innovative solutions that make a difference.
              </p>
              <p className="text-lg">
                Currently serving as the Chief Executive Officer at Word and Learn, I lead all strategy 
                initiatives and oversee UI/UX design decisions. My experience extends to training AI models 
                and fine-tuning systems using techniques like ALoRA.
              </p>
              <p className="text-lg">
                Besides my technical skills, I value leadership and community service. I've held various 
                leadership positions in university committees and clubs, and I actively participate in 
                community outreach programs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="glassmorphism rounded-xl p-4 text-center card-hover">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Personal</h3>
                <p className="text-sm text-muted-foreground">Kenyan</p>
              </div>
              <div className="glassmorphism rounded-xl p-4 text-center card-hover">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-muted-foreground">3+ Years</p>
              </div>
              <div className="glassmorphism rounded-xl p-4 text-center card-hover">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Projects</h3>
                <p className="text-sm text-muted-foreground">10+ Completed</p>
              </div>
              <div className="glassmorphism rounded-xl p-4 text-center card-hover">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Awards</h3>
                <p className="text-sm text-muted-foreground">6+ Received</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild>
                <a href="#experience">My Experience</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-8 mt-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>English</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-full bg-primary ml-1"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kiswahili</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className={`w-4 h-4 rounded-full ml-1 ${i <= 5 ? 'bg-primary' : 'bg-muted'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Luhya</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className={`w-4 h-4 rounded-full ml-1 ${i <= 2 ? 'bg-primary' : 'bg-muted'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>French</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className={`w-4 h-4 rounded-full ml-1 ${i <= 1 ? 'bg-primary' : 'bg-muted'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default About;
