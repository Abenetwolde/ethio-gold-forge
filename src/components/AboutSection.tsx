import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Globe, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Content animation
      tl.from(contentRef.current?.querySelector("h2"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
      .from(contentRef.current?.querySelector("p"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(contentRef.current?.querySelectorAll("li") || [], {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .from(contentRef.current?.querySelector("button"), {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Enhanced clipped images animation
      const images = imagesRef.current?.children;
      if (images) {
        Array.from(images).forEach((img, index) => {
          gsap.from(img, {
            opacity: 0,
            scale: 0.7,
            rotation: index % 2 === 0 ? -15 : 15,
            clipPath: index % 3 === 0 ? "polygon(0 0, 0 0, 0 100%, 0% 100%)" : 
                     index % 3 === 1 ? "circle(0% at 50% 50%)" : 
                     "polygon(50% 0%, 0% 100%, 100% 100%)",
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            onComplete: () => {
              gsap.to(img, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.8,
                ease: "power2.out"
              });
            }
          });
        });
      }

      // Auto-rotating indicators
      const indicators = indicatorsRef.current?.children;
      if (indicators) {
        let currentActive = 0;
        const total = indicators.length;
        
        // Initial state
        Array.from(indicators).forEach((indicator, index) => {
          gsap.set(indicator, {
            scaleX: index === 0 ? 1 : 0.3,
            backgroundColor: index === 0 ? "#FFD700" : "rgba(255, 215, 0, 0.3)"
          });
        });

        // Auto rotation
        const rotateIndicators = () => {
          // Reset previous
          gsap.to(indicators[currentActive], {
            scaleX: 0.3,
            backgroundColor: "rgba(255, 215, 0, 0.3)",
            duration: 0.3
          });
          
          // Move to next
          currentActive = (currentActive + 1) % total;
          
          // Activate new
          gsap.to(indicators[currentActive], {
            scaleX: 1,
            backgroundColor: "#FFD700",
            duration: 0.5,
            ease: "power2.out"
          });
          
          // Change content based on active indicator
          const contents = [
            {
              title: "Advanced Security Infrastructure",
              text: "Military-grade encryption and multi-layer security protocols ensure your certificates are protected at all times."
            },
            {
              title: "Government Integration",
              text: "Seamlessly integrated with Ethiopian government systems and regulatory frameworks for compliance."
            },
            {
              title: "24/7 Expert Support",
              text: "Round-the-clock technical support from certified PKI specialists and security experts."
            }
          ];
          
          gsap.to(contentRef.current?.querySelector("h2"), {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
              if (contentRef.current?.querySelector("h2")) {
                contentRef.current.querySelector("h2").innerHTML = 
                  `<span class="text-foreground">Pioneering</span> <span class="bg-gradient-golden bg-clip-text text-transparent">${contents[currentActive].title.split(' ').slice(-2).join(' ')}</span>`;
              }
              gsap.to(contentRef.current?.querySelector("h2"), {
                opacity: 1,
                y: 0,
                duration: 0.5
              });
            }
          });
        };

        // Start auto rotation
        const interval = setInterval(rotateIndicators, 3000);
        
        // Cleanup
        return () => clearInterval(interval);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and security protocols protect your digital certificates."
    },
    {
      icon: Award,
      title: "Government Certified",
      description: "Officially authorized by Ethiopian government authorities and regulatory bodies."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support from PKI specialists and technical experts."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliant with international PKI standards and best practices."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Pioneering</span>{" "}
                <span className="bg-gradient-golden bg-clip-text text-transparent">
                  Digital Trust
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As Ethiopia's leading Public Key Infrastructure (PKI) services provider, 
                we bridge the gap between traditional business practices and the digital future. 
                Our platform enables secure digital transactions, electronic signatures, and 
                authenticated communications for individuals, businesses, and government entities.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Why Choose Ethiopian PKI Services?
              </h3>
              <ul className="space-y-3">
                {[
                  "ISO 27001 certified security infrastructure",
                  "Integration with Ethiopian Revenue Ministry systems",
                  "Real-time certificate status verification",
                  "Mobile-responsive dashboard for certificate management",
                  "Automated renewal and expiration notifications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="hero" size="lg" className="group hover-glow">
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Auto-rotating Indicators */}
            <div ref={indicatorsRef} className="flex space-x-2 pt-8">
              {[0, 1, 2].map((_, index) => (
                <div 
                  key={index}
                  className="h-1 bg-primary/30 rounded-full transition-all duration-500 origin-left"
                  style={{ width: index === 0 ? '60px' : '20px' }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Clipped Images */}
          <div ref={imagesRef} className="relative space-y-6">
            {/* Different shaped image containers */}
            <div className="relative">
              <div 
                className="w-48 h-32 bg-gradient-golden rounded-lg opacity-80"
                style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)" }}
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <div className="relative ml-auto">
              <div 
                className="w-40 h-40 bg-gradient-radial opacity-70"
                style={{ clipPath: "circle(50% at 50% 50%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="w-52 h-28 bg-gradient-golden opacity-60"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;