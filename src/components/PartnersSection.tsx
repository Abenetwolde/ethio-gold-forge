import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Award, CheckCircle } from "lucide-react";
import TiltedCover from "./cardsample";
import Marquee from "./cardsample";
 // Assuming Marquee is in a file named Marquee.tsx

const PartnersSection = () => {
  const partners = [
    {
      name: "Ethiopian Revenue Ministry",
      role: "Primary Registration Authority",
      description: "Official government authority for tax-related digital certificates and business authentication.",
      status: "Active",
      certTypes: ["Business Registration", "Tax Certificates", "VAT Authentication"],
      established: "2019",
      icon: Building2,
      image: {
        alt: "Ethiopian Revenue Ministry",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHZzMMh6GAjYKl-LVedByTqpYSbsZ-LG_zQ&s",
      },
    },
    {
      name: "Ethiopian Banking Association",
      role: "Financial Services CA",
      description: "Specialized certificate authority for banking and financial institutions across Ethiopia.",
      status: "Active",
      certTypes: ["Banking SSL", "Transaction Signing", "Financial Authentication"],
      established: "2020",
      icon: Shield,
      image: {
        alt: "Ethiopian Banking Association",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHZzMMh6GAjYKl-LVedByTqpYSbsZ-LG_zQ&s",
      },
    },
    {
      name: "Ministry of Innovation & Technology",
      role: "Technology Standards Authority",
      description: "Setting national standards for digital identity and PKI infrastructure development.",
      status: "Active",
      certTypes: ["Government Services", "Digital ID", "E-Government"],
      established: "2018",
      icon: Award,
      image: {
        alt: "Ministry of Innovation & Technology",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHZzMMh6GAjYKl-LVedByTqpYSbsZ-LG_zQ&s",
      },
    },
  
 
  
  ];

  return (
    <section id="partners" className="py-20  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-circuit opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Trusted by</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with Ethiopia's most prestigious institutions as Registration Authorities, 
            ensuring the highest standards of digital certificate issuance and management.
          </p>
        </div>

        {/* Marquee with Partner Cards */}
        <Marquee pauseOnHover className="py-4">
          {partners.map((partner, index) => (
            <div key={index} className="w-[500px] mx-12"> {/* Fixed width for consistent card size */}
           
                <Card className="p-6 flex border-0 flex-col h-full bg-card">
                  {/* Partner Image */}
                  <img
                    src={partner.image.src}
                    alt={partner.image.alt}
                    className="w-full h-32 object-contain rounded-md mb-4"
                  />
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <partner.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                  </div>
                  {/* Role and Status */}
             
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {partner.description}
                  </p>
                  {/* Certificate Types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.certTypes.map((cert, idx) => (
                      <Badge key={idx} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                  {/* Established */}
                  <p className="text-xs text-muted-foreground underline">
  visit the site
</p>
                </Card>
           
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default PartnersSection;