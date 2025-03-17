
import { Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  description: string[];
  activities: string[];
  website: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Strathmore University",
    degree: "Bachelor's Degree in Computer Science",
    date: "June 2021 - Current",
    description: [
      "Focusing on informatics and computer science",
      "Developing a strong foundation in programming, algorithms, data structures, and software development"
    ],
    activities: [
      "Debate club member",
      "St John Club",
      "Table tennis",
      "Red cross",
      "Microsoft student club",
      "SCESA club"
    ],
    website: "https://strathmore.edu/"
  },
  {
    institution: "Alliance High School",
    degree: "High School Diploma",
    date: "January 2016 - April 2021",
    description: [
      "Focused on natural sciences, mathematics, statistics, and humanities",
      "Built a strong academic foundation for higher education"
    ],
    activities: [
      "Medical committee (Administrator and prefect)",
      "Rotary club",
      "Debate club",
      "Drama club",
      "Science and Robotic club"
    ],
    website: "https://en.wikipedia.org/wiki/Alliance_High_School_(Kenya)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">Academic Background</p>
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="glassmorphism border-none overflow-hidden card-hover h-full">
                <CardHeader className="bg-primary/10 pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                      <p className="text-primary font-medium">{item.degree}</p>
                    </div>
                    <div className="px-3 py-1 bg-primary/20 text-primary rounded-full flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Overview</h4>
                      <ul className="space-y-1">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-muted-foreground">• {desc}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Activities & Involvement
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.activities.map((activity, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-secondary rounded-full text-xs"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline inline-flex items-center"
                      >
                        Visit Website
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Education;
