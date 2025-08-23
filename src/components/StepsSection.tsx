import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle, FileText, Trophy } from 'lucide-react';
import AnimatedBorderTrail from './animata/container/animated-border-trail';
import TiltedCover from './cardsample';

// Type definition for the steps data
type Step = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
};

// Simple Card component with TypeScript types
const Card = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(({ children, className }, ref) => (
  <div
    ref={ref}
    className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
  >
    {children}
  </div>
));

// Simple Button component with TypeScript types
const Button = React.forwardRef<HTMLButtonElement, { children: React.ReactNode; className?: string; variant: string; size: string }>(({ children, className, variant, size, ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const sizeClasses = size === 'xl' ? 'h-12 px-6 text-lg' : 'h-9 px-4 py-2';
  const variantClasses = variant === 'hero'
    ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
    : 'bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground';

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default function CardTimeline() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const glowCircleRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      number: '01',
      title: 'Application',
      description: 'Submit your application with all required documents and details.',
      details: ['Online form submission', 'Document verification', 'Instant acknowledgment'],
      icon: FileText
    },
    {
      number: '02',
      title: 'Review',
      description: 'Our team reviews your application for compliance and accuracy.',
      details: ['Expert evaluation', 'Quick feedback', 'Secure processing'],
      icon: CheckCircle
    },
    {
      number: '03',
      title: 'Certification',
      description: 'Receive your digital certificate upon successful review.',
      details: ['Digital delivery', 'Blockchain-verified', 'Instant access'],
      icon: Trophy
    }
  ];

  // State to track if the GSAP script has loaded
  const [isGSAPLoaded, setIsGSAPLoaded] = useState(false);

  useEffect(() => {
    if (window.gsap) {
      setIsGSAPLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.async = true;

    let scriptLoaded = false;

    const handleScriptLoad = () => {
      if (!scriptLoaded) {
        setIsGSAPLoaded(true);
        scriptLoaded = true;
      }
    };

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', () => console.error('GSAP script failed to load.'));
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!isGSAPLoaded || !glowCircleRef.current || cardsRef.current.length === 0 || !timelineContainerRef.current) {
      return;
    }

    const gsap = window.gsap;
    const cards = cardsRef.current;
    const glowCircle = glowCircleRef.current;
    const timelineContainer = timelineContainerRef.current;

    const getCardCenter = (card: HTMLDivElement): number => {
      const rect = card.getBoundingClientRect();
      const containerRect = timelineContainer.getBoundingClientRect();
      return rect.left + rect.width / 2 - containerRect.left;
    };

    const cardCenters = cards.map(card => getCardCenter(card));

    const tl = gsap.timeline({ repeat: -1 });

    tl.set(cards, { scale: 1, boxShadow: 'none' });

    cards.forEach((card, index) => {
      tl.to(glowCircle, {
        x: cardCenters[index],
        duration: 3,
        ease: 'power2.inOut',
      });

      tl.to(card, {
        scale: 1.05,
        boxShadow: '0 0 6px rgba(255, 215, 0, 0.4), 0 0 15px 4px rgba(255, 215, 0, 0.25)',
        duration: 3,
        ease: 'power2.out',
      }, '<');

      if (index > 0) {
        tl.to(cards[index - 1], {
          scale: 1,
          boxShadow: 'none',
          duration: 3,
          ease: 'power1.in',
        }, '<');
      }
    });

    tl.to(glowCircle, {
      x: cardCenters[0],
      duration: 3,
      ease: 'power2.inOut',
      onStart: () => {
        cards.forEach((c) => {
          gsap.to(c, {
            scale: 1,
            boxShadow: 'none',
            duration: 3,
            ease: 'power1.in',
            delay: 0.5
          });
        });
      }
    });

    return () => tl.kill();
  }, [isGSAPLoaded, steps.length]);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#020D1D' }}>
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Simple</span>{' '}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Certification Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your digital certificate in just three easy steps. Our streamlined process
            ensures quick turnaround while maintaining the highest security standards.
          </p>
        </div>

        <div ref={timelineContainerRef} className="relative mb-8">
          <div
            className="absolute top-1/2 h-1 bg-gradient-to-r from-muted via-primary/30 to-muted transform -translate-y-1/2 z-0 rounded-full"
            style={{
              left: '16.67%', // Align with center of first card (1/6 of container width)
              right: '16.67%', // Align with center of last card (1/6 of container width)
            }}
          />
          <div
            ref={glowCircleRef}
            id="glow-circle"
            className="absolute w-5 h-5 rounded-full z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 pointer-events-none"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-golden opacity-70"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-golden opacity-20 blur-sm"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 relative z-60">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card
                  ref={(el: HTMLDivElement) => (cardsRef.current[index] = el)}
                  className="step-card p-4 bg-gradient-to-br from-black to-gray-700 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden max-w-xs mx-auto"
                  style={{
                    position: 'relative',
                    backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
                    boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="step-number text-3xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="step-icon h-8 w-8 rounded-lg bg-gradient-golden flex items-center justify-center">
                        <step.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                      <p className="step-description text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[0.65rem] font-medium text-primary">Key Features:</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="step-detail text-[0.65rem] text-muted-foreground flex items-center space-x-2"
                          >
                            <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
  <AnimatedBorderTrail>
    <Button
      variant="hero"
      size="xl"
      className="group text-base px-10 py-3 hover-glow relative overflow-hidden bg-gradient-golden"
    >
      <span className="absolute text-xl inset-0 border-2 border-transparent rounded-lg animate-border-trail"></span>
      Get Started
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  </AnimatedBorderTrail>
</div>

      </div>
    </section>
  );
}