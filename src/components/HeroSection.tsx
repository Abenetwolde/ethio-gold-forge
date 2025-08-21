import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, FileCheck, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import dashboardPreview from "@/assets/dashboard-preview.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero entrance
      const tl = gsap.timeline();
      
      // Background fade in
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      
      // Enhanced headline reveal with light effects
      .from(headlineRef.current?.children || [], {
        y: 100,
        opacity: 0,
        rotationX: 90,
        transformOrigin: "50% 50%",
        duration: 1.5,
        stagger: 0.4,
        ease: "power3.out",
        onComplete: () => {
          // Add light animation to text
          gsap.to(headlineRef.current?.children || [], {
            textShadow: "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)",
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.5
          });
        }
      }, "-=0.5")
      
      // Subtitle with glow effect
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8")
      
      // Buttons with enhanced effects
      .from(buttonsRef.current?.children || [], {
        scale: 0.6,
        y: 40,
        opacity: 0,
        rotationY: 180,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)"
      }, "-=0.4")
      
      // Desktop mockup animation
      .from(mockupRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8,
        rotationY: -20,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1")
      
      // Mockup floating animation
      .to(mockupRef.current, {
        y: -15,
        rotation: 2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      }, "-=0.5");

      // Floating elements animation
      gsap.set(floatingRef.current?.children || [], {
        opacity: 0,
        scale: 0
      });
      
      gsap.to(floatingRef.current?.children || [], {
        opacity: 0.6,
        scale: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        delay: 2
      });

      // Continuous floating animation
      gsap.to(".floating-icon", {
        y: -10,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Parallax background
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-icon absolute top-20 left-10">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <div className="floating-icon absolute bottom-32 right-16">
          <Lock className="h-6 w-6 text-secondary" />
        </div>
        <div className="floating-icon absolute top-1/3 right-8">
          <FileCheck className="h-10 w-10 text-primary" />
        </div>
        <div className="floating-icon absolute top-1/2 left-16">
          <Eye className="h-6 w-6 text-accent" />
        </div>
      </div>

      {/* Radial Glow Effect */}
      <div ref={glowRef} className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 ref={headlineRef} className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-golden bg-clip-text text-transparent">
                  Secure Your
                </span>
                <span className="block text-foreground">Digital Future</span>
                <span className="block bg-gradient-golden bg-clip-text text-transparent text-3xl lg:text-4xl mt-4">
                  In Ethiopia
                </span>
              </h1>
              <p ref={subtitleRef} className="text-xl text-muted-foreground leading-relaxed">
                Ethiopia's premier PKI certificate services platform. Request and manage 
                digital certificates from authorized Registration Authorities with 
                unparalleled security and reliability.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group text-lg px-8 py-4 hover-glow">
                Download Your Certificate
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button variant="outline" size="xl" className="group text-lg px-8 py-4 hover-glow border-primary/30">
                Register Now
                <Shield className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right Column - Desktop Mockup */}
          <div ref={mockupRef} className="relative">
            <div className="relative">
              {/* Desktop Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-2xl">
                {/* Monitor Stand */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-700 rounded-b-lg"></div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-600 rounded-lg"></div>
                
                {/* Screen */}
                <div className="bg-black rounded-lg p-2">
                  <div 
                    className="w-full h-[300px] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${dashboardPreview})` }}
                  >
                    {/* Screen Overlay */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Shield className="h-16 w-16 text-primary mx-auto" />
                        <h3 className="text-2xl font-bold bg-gradient-golden bg-clip-text text-transparent">
                          PKI Dashboard
                        </h3>
                        <p className="text-sm text-muted-foreground">Secure Certificate Management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-golden opacity-20 rounded-lg blur-xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;