import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Carddds() {
  const cardsRef = useRef([]);
  const glowCircleRef = useRef(null);
  const timelineContainerRef = useRef(null);

  const timelineData = [
    { title: "Phase One", description: "Initial concept and planning, laying the foundation for our project's journey." },
    { title: "Development", description: "Bringing the vision to life, building the core components with precision and care." },
    { title: "Launch", description: "The moment of truth: releasing our creation to the world with a celebratory bang." }
  ];

  useEffect(() => {
    if (!gsap || !glowCircleRef.current || cardsRef.current.length === 0 || !timelineContainerRef.current) {
      console.error('GSAP or required DOM elements are not available');
      return;
    }

    const cards = cardsRef.current;
    const glowCircle = glowCircleRef.current;
    const timelineContainer = timelineContainerRef.current;

    const getCardCenter = (card) => {
      const rect = card.getBoundingClientRect();
      const containerRect = timelineContainer.getBoundingClientRect();
      return rect.left + rect.width / 2 - containerRect.left;
    };

    const cardCenters = cards.map(card => getCardCenter(card));

    const tl = gsap.timeline({ repeat: -1 });

    cards.forEach((card, index) => {
      const centerPosition = cardCenters[index];

      tl.to(glowCircle, {
        x: centerPosition,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: function () {
          const progress = this.progress();
          // When close enough to target, glow the card
          if (progress > 0.95) {
            gsap.to(card, {
              scale: 1.1,
              boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.4)',
              duration: 0.4,
              ease: "power2.out"
            });
          }
        },
        onStart: () => {
          // Reset ALL cards before moving
          cards.forEach((c) => {
            gsap.to(c, {
              scale: 1,
              boxShadow: 'none',
              duration: 0.3,
              ease: "power1.in"
            });
          });
        }
      });

      // Hold on the card briefly before moving to the next
      tl.to({}, { duration: 0.5 });
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="bg-gray-950 text-gray-200 antialiased overflow-x-hidden p-8 flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-6xl">
        <div ref={timelineContainerRef} id="timeline-container" className="relative flex items-center justify-between py-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-1/2 w-full h-[3px] -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent z-0"></div>

          {/* Glow circle */}
          <div ref={glowCircleRef} id="glow-circle" className="absolute w-8 h-8 rounded-full z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-sky-400 opacity-70"></div>
            <div className="absolute inset-0 rounded-full bg-sky-400 opacity-20 blur-sm"></div>
          </div>

          {/* Cards */}
          <div id="cards-container" className="relative z-20 flex justify-between w-full space-x-8">
            {timelineData.map((card, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="timeline-card p-6 bg-gray-800 rounded-xl transition-all duration-300 transform-gpu cursor-pointer w-full md:w-1/4"
                style={{ boxShadow: 'none' }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-sky-400">{card.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
