
import { Calendar, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  current: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Chief Executive Officer",
    company: "Word and Learn",
    date: "Jan 2024 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Co-founder and head of all things strategy",
      "Head of UI/UX designs",
      "Help train and fine-tune the model using ALoRA"
    ],
    current: true
  },
  {
    title: "Market Research Analyst Extern",
    company: "Beats by Dre",
    date: "Feb 2024 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Perform analysis of market trends and draw statistics",
      "Participate in frequent company meetings and create reports",
      "Create presentations and pitch analysis and trends",
      "Conduct data and information research and collection"
    ],
    current: true
  },
  {
    title: "Fullstack Development Intern",
    company: "Sky World Limited",
    date: "Feb 2024 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Engage in full-stack web development projects",
      "Utilize modern frameworks and languages",
      "Create responsive and user-centric solutions"
    ],
    current: true
  },
  {
    title: "School Academic Senate",
    company: "Strathmore University",
    date: "Sep 2023 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Serve as the Senate vice chairperson",
      "Lead the student Elimisha program for scholarships",
      "Maintain the university class student-based leadership structure",
      "Ensure smooth running of class programs and schedules",
      "Organize partnership company events and forums"
    ],
    current: true
  },
  {
    title: "Project Manager",
    company: "Strathmore Computing and Engineering Students Association",
    date: "Dec 2023 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Coordinate and oversee all events within the SCESA structure",
      "Plan and coordinate all communities under SCESA including MLSA, UI PATH, Intel Strathmore community, and IET chapter"
    ],
    current: true
  },
  {
    title: "Secretary",
    company: "St John Ambulance - Strathmore University",
    date: "May 2022 - Present", 
    location: "Nairobi, Kenya",
    description: [
      "Perform administrative role as secretary",
      "Account for activities and maintain records"
    ],
    current: true
  },
  {
    title: "Tech and Media Department Head",
    company: "Strathmore Christian Union",
    date: "Jun 2022 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Lead the tech and media department",
      "Previously served as head of bible study and evangelism"
    ],
    current: true
  },
  {
    title: "School Vice Presidential Senate",
    company: "Strathmore University",
    date: "Sep 2022 - Sep 2023",
    location: "Nairobi, Kenya",
    description: [
      "Served as the senate secretary 2",
      "Maintained the university club system",
      "Ensured the smooth running of clubs",
      "Organized events and forums"
    ],
    current: false
  },
  {
    title: "Medical Prefect",
    company: "Alliance High School",
    date: "Jan 2017 - Jan 2020",
    location: "Nairobi, Kenya",
    description: [
      "Dispensed medication to peers",
      "Administered first aid"
    ],
    current: false
  },
  {
    title: "House Administrator",
    company: "Alliance High School",
    date: "Jan 2018 - Jan 2020",
    location: "Nairobi, Kenya",
    description: [
      "Supported supervisors in managing school relationships with student agencies",
      "Provided information necessary to complete forms and reports for official review",
      "Procured supplies needed for house sessions",
      "Conducted weekly inventory of hostel consumables"
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">Work History</p>
          <h2 className="section-heading">My Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary transform -translate-x-1/2 z-10"></div>
                
                {/* Date for mobile */}
                <div className="md:hidden mb-4 pl-10">
                  <div className="inline-flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.date}
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10 animate-fade-up">
                  <div className={cn(
                    "glassmorphism rounded-xl p-6 md:p-8 card-hover",
                    exp.current ? "border-l-4 border-l-primary" : ""
                  )}>
                    <h3 className="text-xl font-semibold flex items-center">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center mt-2 mb-4">
                      <div className="flex items-center text-primary font-medium">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {exp.company}
                      </div>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <div className="text-muted-foreground text-sm">
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Date for desktop */}
                <div className="hidden md:block md:w-1/2 self-center">
                  <div className={cn(
                    "inline-flex items-center justify-center mx-auto px-4 py-2 rounded-full bg-primary/10 text-sm",
                    index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                  )}>
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.date}
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
