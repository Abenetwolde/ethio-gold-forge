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

      // Features cards animation
      gsap.from(featuresRef.current?.children || [], {
        opacity: 0,
        y: 60,
        rotation: -5,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Icon hover animations
      const icons = featuresRef.current?.querySelectorAll(".feature-icon");
      icons?.forEach(icon => {
        gsap.set(icon, { transformOrigin: "center" });
        
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

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

            <Button variant="hero" size="lg" className="group">
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column - Feature Cards */}
          <div ref={featuresRef} className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-scaleIn group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="feature-icon h-12 w-12 rounded-lg bg-gradient-golden flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;