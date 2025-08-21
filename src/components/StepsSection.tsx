import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, Shield, Download, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StepsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Timeline line animation
      gsap.fromTo(timelineRef.current?.querySelector(".timeline-line"), {
        scaleX: 0
      }, {
        scaleX: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Enhanced GitHub-style shiny cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        let currentActive = 0;
        
        Array.from(cards).forEach((card, index) => {
          // Initial setup - first card is active
          gsap.set(card, {
            scale: index === 0 ? 1.05 : 1,
            boxShadow: index === 0 ? "0 0 30px rgba(255, 215, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)" : "0 4px 20px rgba(0, 0, 0, 0.3)"
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          // GitHub-style card entrance with shiny effect
          tl.from(card, {
            opacity: 0,
            y: 100,
            rotationY: -15,
            duration: 1,
            ease: "power3.out"
          })
          
          // Add shiny animation
          .to(card, {
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "-200% 0",
            duration: 0.1
          }, "-=0.5")
          
          .to(card, {
            backgroundPosition: "200% 0",
            duration: 1.5,
            ease: "power2.inOut"
          })
          
          // Step number with glow
          .from(card.querySelector(".step-number"), {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          }, "-=2")
          
          // Icon with rotation
          .from(card.querySelector(".step-icon"), {
            scale: 0,
            rotation: -180,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, "-=1.5")
          
          // Text reveal
          .from([
            card.querySelector("h3"),
            card.querySelector(".step-description")
          ], {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
          }, "-=1")
          
          // Details reveal
          .from(card.querySelectorAll(".step-detail") || [], {
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.5");

          // Enhanced timeline dot with progress
          const dot = document.querySelector(`.timeline-dot-${index}`);
          if (dot) {
            gsap.from(dot, {
              scale: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });

        // Auto-progression system like Web Hooks timeline
        const autoProgress = () => {
          if (cards.length > 0) {
            // Reset previous active
            gsap.to(cards[currentActive], {
              scale: 1,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              duration: 0.5
            });
            
            // Move to next
            currentActive = (currentActive + 1) % cards.length;
            
            // Activate new card with GitHub glow
            gsap.to(cards[currentActive], {
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(255, 215, 0, 0.3)",
              duration: 0.6,
              ease: "power2.out"
            });

            // Progress line animation
            const progressLine = progressRef.current;
            if (progressLine) {
              gsap.to(progressLine, {
                width: `${((currentActive + 1) / cards.length) * 100}%`,
                duration: 0.8,
                ease: "power2.out"
              });
            }
          }
        };

        // Start auto progression
        const interval = setInterval(autoProgress, 4000);
        
        // Cleanup
        return () => clearInterval(interval);
      }

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Continuous progress animation
      gsap.to(".progress-indicator", {
        scaleX: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Submit Application",
      description: "Complete your digital certificate application form with required documentation and identity verification.",
      details: [
        "Upload identity documents",
        "Provide organization details",
        "Specify certificate type and usage"
      ]
    },
    {
      number: "02", 
      icon: UserCheck,
      title: "Identity Verification",
      description: "Our Registration Authority verifies your identity and credentials through secure authentication processes.",
      details: [
        "Document authenticity check",
        "Identity validation process",
        "Background verification"
      ]
    },
    {
      number: "03",
      icon: Shield,
      title: "Certificate Generation",
      description: "Upon approval, your digital certificate is generated using advanced cryptographic algorithms.",
      details: [
        "RSA/ECC key pair generation",
        "Certificate signing by CA",
        "Security policy compliance"
      ]
    },
    {
      number: "04",
      icon: Download,
      title: "Download & Install",
      description: "Access your certificates through our secure portal and install them on your devices.",
      details: [
        "Secure certificate delivery",
        "Installation guidelines",
        "Backup and recovery options"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="steps" className="py-20 bg-gradient-circuit relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Simple</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Certification Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your digital certificate in just four easy steps. Our streamlined process 
            ensures quick turnaround while maintaining the highest security standards.
          </p>
        </div>

        {/* Enhanced Timeline Container */}
        <div ref={timelineRef} className="relative mb-8">
          {/* Timeline Base Line */}
          <div className="timeline-line hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-muted via-primary/30 to-muted transform -translate-y-1/2 z-0 rounded-full" />
          {/* Active Progress Line */}
          <div 
            ref={progressRef}
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-golden transform -translate-y-1/2 z-10 rounded-full transition-all duration-800"
            style={{ width: '25%' }}
          />
        </div>
          
        <div ref={cardsRef} className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className={`timeline-dot-${index} hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-20 shadow-glow`} />
              
              <Card className="step-card p-8 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/10 github-card">
                <div className="space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="step-number text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="step-icon h-12 w-12 rounded-lg bg-gradient-golden flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="step-description text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="step-detail text-sm text-muted-foreground flex items-center space-x-2">
                          <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:bg-primary/10 transition-colors duration-300">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            Start Your Application Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;