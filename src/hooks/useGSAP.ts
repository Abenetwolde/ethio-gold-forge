import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, scopeRef);
    return () => ctx.revert();
  }, []);

  return { scopeRef, gsap, ScrollTrigger };
};

export const useScrollAnimation = (trigger: string, animation: gsap.TweenVars) => {
  useEffect(() => {
    const elements = document.querySelectorAll(trigger);
    
    elements.forEach((element) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50,
          ...animation.from 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          ...animation.to
        }
      );
    });
  }, [trigger, animation]);
};

export const useStaggerAnimation = (
  trigger: string, 
  staggerDelay: number = 0.2
) => {
  useEffect(() => {
    const containers = document.querySelectorAll(trigger);
    
    containers.forEach((container) => {
      const children = container.children;
      
      gsap.fromTo(children,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, [trigger, staggerDelay]);
};