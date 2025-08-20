import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, FileCheck, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
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
      
      // Headline staggered reveal
      .from(headlineRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      }, "-=0.5")
      
      // Subtitle slide up
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8")
      
      // Buttons appear with magnetic effect
      .from(buttonsRef.current?.children || [], {
        scale: 0.8,
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.4")
      
      // Stats counter animation
      .from(statsRef.current?.children || [], {
        scale: 0.5,
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.3");

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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 ref={headlineRef} className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-golden bg-clip-text text-transparent">
                  Secure Your
                </span>
                <span className="block text-foreground">Digital Future</span>
                <span className="block bg-gradient-golden bg-clip-text text-transparent text-4xl lg:text-5xl mt-4">
                  In Ethiopia
                </span>
              </h1>
              <p ref={subtitleRef} className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ethiopia's premier PKI certificate services platform. Request and manage 
                digital certificates from authorized Registration Authorities with 
                unparalleled security and reliability.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" className="group text-lg px-8 py-4">
                Get Certificate Now
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button variant="outline" size="xl" className="group text-lg px-8 py-4">
                <Eye className="mr-2 h-6 w-6" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-golden bg-clip-text text-transparent">10K+</div>
              <div className="text-lg text-muted-foreground">Certificates Issued</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-golden bg-clip-text text-transparent">99.9%</div>
              <div className="text-lg text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-golden bg-clip-text text-transparent">24/7</div>
              <div className="text-lg text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;