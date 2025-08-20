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
      // Header entrance animation
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: -180,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.8")
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

      // Header shrink animation
      ScrollTrigger.create({
        trigger: document.body,
        start: "100px top",
        end: "bottom bottom",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(headerRef.current, {
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(18, 18, 18, 0.95)",
              duration: 0.4,
              ease: "power2.out"
            });
          } else {
            gsap.to(headerRef.current, {
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(18, 18, 18, 0.8)",
              duration: 0.4,
              ease: "power2.out"
            });
          }
        }
      });

      // Logo pulse animation
      gsap.to(logoRef.current?.querySelector(".logo-icon"), {
        scale: 1.1,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'h-16 backdrop-luxury shadow-luxury' 
          : 'h-20 bg-transparent'
      }`}
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
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
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