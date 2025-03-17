
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  email: string;
  phone?: string;
  link?: string;
  avatarUrl?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Kahindi Anthony",
    role: "Mentor",
    company: "Strathmore University",
    content: "Anthony Kahindi has been an invaluable personal mentor during my continuing academic tenure at Strathmore University. Mr. Anthony has consistently provided guidance and support that transcends the conventional mentor-mentee relationship. His approach combines a profound understanding of academic rigor with a personal touch that inspires confidence and fosters personal growth. Through his mentorship, I have developed critical thinking skills, honed my academic pursuits, and learned the importance of ethical leadership. Mr. Anthony's influence has been pivotal in shaping my career path and personal development.",
    email: "akahindi@strathmore.edu",
    phone: "(+254) 254721546031",
    link: "https://srcc.strathmore.edu/personnel/anthony-kahindi/",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTYzNzQ3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  },
  {
    id: 2,
    name: "Dr. Barasa Davis",
    role: "Lecturer",
    company: "Technical University of Kenya & Strathmore University",
    content: "Dr. Barasa Davis has profoundly impacted my understanding of economic theories and their real-world applications. His dynamic teaching style and comprehensive lectures have not only solidified my academic foundations but also ignited a passion for the field of Economics. His willingness to engage in thought-provoking discussions both inside and outside the classroom has greatly enriched my learning experience. His mentorship has been pivotal in guiding my academic research and fostering a critical analytical mindset, providing insightful advice that enhanced my decision-making skills. His dedication to student success is evident in his hands-on approach to mentorship and his commitment to providing resources and opportunities that align with career aspirations.",
    email: "dbarasa@strathmore.edu",
    phone: "(+254) 254728887637",
    link: "https://staff.tukenya.ac.ke/?r=portal/profile/public&id=994",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNTI5MzI5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="subtitle">What People Say</p>
          <h2 className="section-heading">Recommendations</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -bottom-10 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 absolute top-0 left-0 w-full",
                  activeIndex === index ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-full z-10"
                )}
                style={{ 
                  transform: activeIndex === index 
                    ? "translateX(0)" 
                    : (activeIndex > index ? "translateX(-100%)" : "translateX(100%)")
                }}
              >
                <Card className="glassmorphism border-none shadow-lg overflow-hidden">
                  <CardContent className="pt-6 pb-8 px-6 md:px-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="w-24 h-24 border-4 border-primary/20">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                          <AvatarFallback className="text-xl font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center mt-4 space-y-1">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="relative">
                          <div className="absolute -top-6 -left-4 text-6xl text-primary/20 font-serif">"</div>
                          <p className="text-muted-foreground relative z-10 italic">
                            {testimonial.content}
                          </p>
                          <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif">"</div>
                        </div>
                        
                        <div className="pt-4 border-t border-border space-y-2 text-sm">
                          {testimonial.email && (
                            <p className="flex items-center">
                              <span className="font-medium mr-2">Email:</span>
                              <a href={`mailto:${testimonial.email}`} className="text-primary hover:underline">
                                {testimonial.email}
                              </a>
                            </p>
                          )}
                          {testimonial.phone && (
                            <p className="flex items-center">
                              <span className="font-medium mr-2">Phone:</span>
                              <a href={`tel:${testimonial.phone}`} className="text-primary hover:underline">
                                {testimonial.phone}
                              </a>
                            </p>
                          )}
                          {testimonial.link && (
                            <p className="flex items-center">
                              <span className="font-medium mr-2">Profile:</span>
                              <a 
                                href={testimonial.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline flex items-center"
                              >
                                View Profile
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
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 z-30">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-primary w-10" : "bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 px-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
