
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Secure Me",
    description: "A web-based platform aimed at easing the process of analysis and relationship detection in the current criminal system by leveraging the power of Graph Databases.",
    tags: ["Web Development", "Graph Databases", "Security"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NDYzNDgzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/secureme"
  },
  {
    id: 2,
    title: "LittleVisions",
    description: "A web-based platform designed to unleash the creativity of children by allowing them to create their own interactive stories by harnessing the power of Generative AI.",
    tags: ["Web Development", "Generative AI", "Children's Platform"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzE2MTg1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/littlevisions"
  },
  {
    id: 3,
    title: "Safetyaro",
    description: "A food safety company that deals with the safety of food substances, providing reliable information and services.",
    tags: ["Web Development", "Food Safety", "Information"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzE2MTEwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/Safetyaro",
    liveUrl: "https://newtvn.github.io/Safetyaro/"
  },
  {
    id: 4,
    title: "Simple Survey Application",
    description: "A web-based Survey application that allows users to respond to survey questions and view all responses. It is divided into three main components.",
    tags: ["Web Development", "Surveys", "Frontend", "Backend"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDA1Mjg5MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/simple_survey_client"
  },
  {
    id: 5,
    title: "Amazon Dataset Analysis",
    description: "This project puts a key emphasis on the efficient management of a massive dataset from Amazon while addressing potential challenges related to memory and time complexity.",
    tags: ["Data Analysis", "Amazon", "Big Data"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzE2MTEwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/CG_cat"
  },
  {
    id: 6,
    title: "Heartcall",
    description: "A mobile-based application that deals with linking fast response services to health-needy people.",
    tags: ["Mobile Development", "Healthcare", "Emergency Services"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NDYzNDgzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/HeartCall"
  },
  {
    id: 7,
    title: "File Verification Application",
    description: "An application designed to validate and process CSV files containing user data, ensuring each entry has valid ID numbers, mobile numbers, and email addresses as per specified formats.",
    tags: ["File Processing", "Validation", "Data Verification"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzE2MTg1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/file_verification_app"
  },
  {
    id: 8,
    title: "Urban Rush/Monkey Rush",
    description: "A 3D simulation of a monkey driving a car through a simulated city zoo scape. Developed in C#, designed in Blender, and deployed using Unity.",
    tags: ["Game Development", "Unity", "3D Simulation", "C#"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDA1Mjg5MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    githubUrl: "https://github.com/newtvn/UrbanRush"
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const showMoreProjects = () => {
    setVisibleProjects(projectsData.length);
  };
  
  const showLessProjects = () => {
    setVisibleProjects(4);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">My Work</p>
          <h2 className="section-heading">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${(project.id % 4) * 0.1}s` }}>
              <Card className="overflow-hidden card-hover h-full border-none shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex gap-2 flex-wrap mb-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        <Link className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleProjects < projectsData.length ? (
            <Button onClick={showMoreProjects} className="px-8">Show More Projects</Button>
          ) : (
            <Button onClick={showLessProjects} variant="outline" className="px-8">Show Less</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
