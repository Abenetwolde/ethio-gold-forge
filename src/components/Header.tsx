import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation - start transparent
      gsap.set(headerRef.current, { 
        opacity: 1, 
        y: 0,
        backgroundColor: "transparent",
        backdropFilter: "none"
      });

      const tl = gsap.timeline();
      
      // Logo and nav entrance
      tl.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: -180,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .from(navRef.current?.children || [], {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6")
      .from(ctaRef.current?.children || [], {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Enhanced scroll trigger for glassmorphism
      ScrollTrigger.create({
        trigger: document.body,
        start: "150px top",
        end: "bottom bottom",
        onToggle: (self) => {
          if (self.isActive) {
            // Show with glassmorphism and narrow down
            gsap.to(headerRef.current, {
              height: "60px",
              backdropFilter: "blur(20px) saturate(180%)",
              backgroundColor: "rgba(18, 18, 18, 0.85)",
              borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
              duration: 0.6,
              ease: "power3.out"
            });
            gsap.to(logoRef.current, {
              scale: 0.9,
              duration: 0.4,
              ease: "power2.out"
            });
          } else {
            // Return to transparent
            gsap.to(headerRef.current, {
              height: "80px",
              backdropFilter: "none",
              backgroundColor: "transparent",
              borderBottom: "none",
              duration: 0.6,
              ease: "power3.out"
            });
            gsap.to(logoRef.current, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          }
        }
      });

      // Enhanced logo pulse animation
      gsap.to(logoRef.current?.querySelector(".logo-icon"), {
        scale: 1.1,
        filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Button glow effects
      const buttons = ctaRef.current?.querySelectorAll("button");
      buttons?.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
            scale: 1.05,
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

    }, headerRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Certification Types", href: "#certification-types" },
    { label: "About Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 h-20"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center space-x-2">
          <Shield className="logo-icon h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Ethiopian PKI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hover-glow border-primary/30 hover:border-primary">
            Sign In
          </Button>
          <Button variant="hero" size="sm" className="hover-glow bg-gradient-golden hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-luxury border-t border-primary/20">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;