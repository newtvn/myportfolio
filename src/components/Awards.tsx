
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  link?: string;
}

const awardsData: AwardItem[] = [
  {
    id: 1,
    title: "Oracle Certificate of Excellence",
    issuer: "Oracle",
    description: "Participated in the Oracle hackathon in Kenya and East & Central African countries, emerging as runners-up.",
    link: "https://www.oracle.com/ke/"
  },
  {
    id: 2,
    title: "Certificate of Excellence",
    issuer: "Rotary Club Alliance High School",
    description: "Achieved certificate through effectively helping with the Rotary Club.",
    link: "https://rotarynairobi.org/"
  },
  {
    id: 3,
    title: "A2SV Hackathon Semi-Finalist",
    issuer: "Africa to Silicon Valley (A2SV)",
    description: "Awarded for making it to the semifinals of the Africa to Silicon Valley hackathon."
  },
  {
    id: 4,
    title: "Certificate of Excellence",
    issuer: "Cisco",
    description: "Earned certification through Cisco's DevNet program, demonstrating proficiency in developing applications built on Cisco platforms.",
    link: "https://www.cisco.com/"
  },
  {
    id: 5,
    title: "Certificate of Completion",
    issuer: "St John Ambulance",
    description: "Certified after successfully completing a comprehensive first aid training program."
  },
  {
    id: 6,
    title: "Certificate of Participation",
    issuer: "Oracle",
    description: "Received for exceptional performance and mastery over Oracle technologies, demonstrating advanced proficiency in Oracle solutions.",
    link: "https://www.oracle.com/ke/"
  },
  {
    id: 7,
    title: "Certificate of Participation",
    issuer: "Youth Africa Energy Summit",
    description: "Acknowledged for active participation in the Africa Energy Summit held at the Kenya International Convention Centre, contributing to discussions on sustainable energy solutions in Africa.",
    link: "https://www.youth-energy-summit.com/"
  },
  {
    id: 8,
    title: "National Research Fund Finalist",
    issuer: "National Research Fund",
    date: "07/11/2024",
    description: "Finalist in a hackathon aimed at fostering innovation among kids, organized and hosted by the National Research Fund under the Kenyan government.",
    link: "https://www.youtube.com/watch?v=bDDXFelRJak"
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">Recognition</p>
          <h2 className="section-heading">Honors & Awards</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((award, index) => (
            <div 
              key={award.id} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className={cn(
                "glassmorphism border-none overflow-hidden card-hover h-full",
                index % 3 === 0 ? "bg-primary/5" : "",
                index % 3 === 1 ? "bg-white/70" : "",
                index % 3 === 2 ? "bg-secondary/50" : ""
              )}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{award.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-medium mt-2">{award.issuer}</p>
                  {award.date && (
                    <p className="text-xs text-muted-foreground">{award.date}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{award.description}</p>
                  {award.link && (
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline inline-flex items-center mt-4"
                    >
                      Learn more
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
                  )}
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

export default Awards;
