import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import image from "@/assets/image.png"
// Assuming GSAP is loaded globally via a CDN script tag in the HTML file.
// For example: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
// Or for ScrollTrigger: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

// Placeholder for a button component to ensure the code is self-contained.
const Button = ({ variant, size, className, children }) => (
  <button className={`p-4 rounded-lg font-semibold ${className}`}>
    {children}
  </button>
);

const About = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const contentRef = useRef(null); // Ref for the content section
  const imageRef = useRef(null); // Ref for the image section

  const contentItems = [
    {
      title: "Pioneering Digital Trust",
      description: "We bridge traditional business and the digital future, enabling secure transactions and authenticated communications.",
      list: [
        "ISO 27001 certified security infrastructure",
        "Integration with Ethiopian Revenue Ministry",
        "Real-time certificate status verification"
      ],
      image:image
    },
    {
      title: "Advanced Security Infrastructure",
      description: "Our military-grade encryption and multi-layer protocols ensure digital certificates are always protected.",
      list: [
        "End-to-end encryption for all transactions",
        "Regular security audits and compliance checks",
        "Secure key management and storage"
      ],
      image: image
    },
    {
      title: "Government Integration",
      description: "Seamlessly integrated with government systems for full compliance and ease of use.",
      list: [
        "Direct integration with Ethiopian Revenue Ministry",
        "Compliant with Ethiopian e-Government standards",
        "Support for official digital signatures"
      ],
      image:image
    }
  ];

  // Function to handle content change and timer reset
  const handleContentChange = (index) => {
    setActiveContent(index);
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    setIntervalId(newIntervalId);
  };
  
  // Auto-rotation and timer reset
  useEffect(() => {
    // Initial start of the auto-rotation timer
    const id = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    setIntervalId(id);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []); // Run only once on mount

  // Animation effect for content changes
  useEffect(() => {
    if (window.gsap) {
      // Use GSAP timeline for a coordinated animation
      const tl = window.gsap.timeline();
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        0
      );
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        0
      );
    }
  }, [activeContent]);

  return (
    <>
      <style>
        {`
          @keyframes progress-fill {
            from {
              height: 0%;
            }
            to {
              height: 100%;
            }
          }
          .animate-progress {
            animation: progress-fill 5s linear forwards;
          }
          .bg-gradient-golden {
            background-image: linear-gradient(to top, #FFD700, #DAA520, #B8860B);
          }
        `}
      </style>
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            {/* Left Column - Image with Indicators */}
            <div className="relative flex items-center">
              {/* Vertically Stacked Indicators */}
              <div className="flex flex-col space-y-2 mr-4">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    className={`relative h-12 w-2 rounded-full bg-primary/30 transition-colors duration-300 overflow-hidden ${
                      activeContent === index ? 'active-indicator' : ''
                    }`}
                    onClick={() => handleContentChange(index)}
                  >
                    {activeContent === index && (
                      <span className="absolute inset-x-0 top-0 bg-gradient-golden animate-progress" />
                    )}
                  </button>
                ))}
              </div>
              {/* Image */}
              <div className="relative w-full h-100 pl-10" ref={imageRef}>
                {/* <div 
                  className="w-full max-w-md h-96 bg-cover bg-center round-sm"
                  style={{ 
                    backgroundImage: `url(${contentItems[activeContent].image})`
                  }}
                /> */}
                <img src={contentItems[activeContent].image}id='clipped' data-clip="5% 5%, 100% 0%, 100% 75%"  className="h-50 w-full"/>
              </div>
            </div>

            {/* Right Column - Content */}
            <div ref={contentRef} className="space-y-8 flex-1">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">
                    {contentItems[activeContent].title.split(' ').slice(0, -2).join(' ')}
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                    {contentItems[activeContent].title.split(' ').slice(-2).join(' ')}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {contentItems[activeContent].description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Why Choose Ethiopian PKI Services?
                </h3>
                <ul className="space-y-3">
                  {contentItems[activeContent].list.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

         
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
