import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, FileCheck, Eye, Youtube } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import dashboardPreview from "@/assets/hero.gif";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBorderTrail from "./animata/container/animated-border-trail";
import AnimatedGradientText from "./animata/text/animated-gradient-text";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure buttons are visible initially
      gsap.set(buttonsRef.current?.children || [], { opacity: 1, y: 0 });

      // Timeline for hero entrance
      const tl = gsap.timeline();

      // Background fade in
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      
      // Simplified headline animation for storytelling
      .from(headlineRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(headlineRef.current?.children || [], {
            textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.3
          });
        }
      }, "-=0.5")
      
      // Subtitle animation
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      
      // Buttons animation
      .from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.4")
      
      // Desktop mockup animation
      .from(mockupRef.current, {
        x: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      
      // Mockup floating animation
      .to(mockupRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.out",
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
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        delay: 1
      });

      // Continuous floating animation
      gsap.to(".floating-icon", {
        y: -8,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Parallax background
      gsap.to(".hero-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Hover glow effect for mockup
      mockupRef.current?.addEventListener('mouseenter', () => {
        gsap.to(glowRef.current, {
          opacity: 0.25,
          scale: 1.02,
          duration: 0.9,
          ease: "power2.out"
        });
      });

      mockupRef.current?.addEventListener('mouseleave', () => {
        gsap.to(glowRef.current, {
          opacity: 0.1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out"
        });
      });


      // Hover glow effect for buttons
      const buttons = buttonsRef.current?.querySelectorAll("button") || [];
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            boxShadow: "0 0 12px rgba(255, 215, 0, 0.4)",
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            boxShadow: "none",
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Background Image with Overlay */}
      <div 
        className=" absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 h-screen"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Cursor-Following Glow */}
      <div 
        ref={cursorGlowRef} 
        className="absolute w-32 h-32 bg-gradient-radial from-primary/25 to-transparent rounded-full blur-lg opacity-0 pointer-events-none"
      />

      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-icon absolute bottom-20 left-10">
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

      {/* Static Glow Effect */}
      <div ref={glowRef} className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-lg opacity-10" />

      <div className="container mx-auto px-10 py-16 relative z-10 flex-grow">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="space-y-6">
          <div className="space-y-4">
  <h1 ref={headlineRef} className="text-4xl lg:text-6xl font-bold leading-tight">
    <span className="block">
      <div className="bg-[linear-gradient(90deg,#FFD700,#000)] bg-clip-text text-transparent animate-gradient-ripple space-y-2">
        <span className="block">Secure Your</span>
        <span className="block">Digital Future</span>
        <span className="block text-2xl lg:text-3xl mt-2">In Ethiopia</span>
      </div>
    </span>
  </h1>

  <p ref={subtitleRef} className="text-lg text-muted-foreground leading-relaxed">
    Discover Ethiopia's leading PKI platform. Seamlessly request and manage digital certificates with top-tier security and ease.
  </p>
</div>


            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <AnimatedBorderTrail>       
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-base px-6 py-3 hover-glow relative overflow-hidden bg-gradient-golden"
              >
                <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-border-trail"></span>
                Download Your Certificate
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              </AnimatedBorderTrail>
              
        
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-base px-6 py-3 hover-glow border-primary/40"
              >
                Learn More
                <Youtube className="ml-2 h-5 w-5" />
              </Button>
            </div>
          
          </div>

          {/* Right Column - Desktop Mockup */}
          <div ref={mockupRef} className="relative">
          <div className="relative">
    {/* Desktop Frame */}
    <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-2 shadow-md">
      {/* Monitor Stand */}
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gray-700 rounded-b-md"></div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-600 rounded-md"></div>
      
      {/* Screen */}
      <div className="bg-black rounded-md p-2">
        <div className="w-full h-[280px] rounded relative overflow-hidden">
          {/* GIF Background */}
          <img 
            src={dashboardPreview} // <-- replace with your GIF file
            alt="Dashboard Preview"
            className="w-full h-full object-cover z-100"
          />

          {/* Screen Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded flex items-center justify-center">
            <div className="text-center space-y-3">
              <Shield className="h-14 w-14 text-primary mx-auto" />
              <h3 className="text-xl font-bold bg-gradient-golden bg-clip-text text-transparent">
                PKI Dashboard
              </h3>
              <p className="text-xs text-muted-foreground">Secure Certificate Management</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
              
              {/* Refined Glow Effect */}
              {/* <div ref={glowRef} className="absolute inset-0 bg-gradient-golden opacity-10 rounded-lg blur-md scale-103 -z-10 transition-all duration-300" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;