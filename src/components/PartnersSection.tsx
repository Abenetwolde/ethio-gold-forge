import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Award, CheckCircle } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Ethiopian Revenue Ministry",
      role: "Primary Registration Authority",
      description: "Official government authority for tax-related digital certificates and business authentication.",
      status: "Active",
      certTypes: ["Business Registration", "Tax Certificates", "VAT Authentication"],
      established: "2019"
    },
    {
      name: "Ethiopian Banking Association",
      role: "Financial Services CA",
      description: "Specialized certificate authority for banking and financial institutions across Ethiopia.",
      status: "Active", 
      certTypes: ["Banking SSL", "Transaction Signing", "Financial Authentication"],
      established: "2020"
    },
    {
      name: "Ministry of Innovation & Technology",
      role: "Technology Standards Authority",
      description: "Setting national standards for digital identity and PKI infrastructure development.",
      status: "Active",
      certTypes: ["Government Services", "Digital ID", "E-Government"],
      established: "2018"
    },
    {
      name: "Ethiopian Electric Utility",
      role: "Infrastructure Partner",
      description: "Providing secure communications and authentication for critical infrastructure services.",
      status: "Active",
      certTypes: ["Infrastructure Security", "SCADA Systems", "Grid Authentication"],
      established: "2021"
    },
    {
      name: "Commercial Bank of Ethiopia",
      role: "Financial Authority",
      description: "Leading financial institution providing certificate services for digital banking.",
      status: "Active",
      certTypes: ["Online Banking", "Mobile Payments", "Digital Wallets"],
      established: "2020"
    },
    {
      name: "Ethiopian Airlines",
      role: "Aviation Authority",
      description: "Secure digital certificates for aviation industry and international travel documents.",
      status: "Active",
      certTypes: ["Aviation Security", "Travel Documents", "Cargo Authentication"],
      established: "2022"
    }
  ];

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
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

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "15+", label: "Partner Organizations", icon: Building2 },
            { number: "50K+", label: "Certificates Issued", icon: Shield },
            { number: "99.9%", label: "System Uptime", icon: CheckCircle },
            { number: "24/7", label: "Technical Support", icon: Award }
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 animate-scaleIn group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {partner.role}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {partner.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>

                {/* Certificate Types */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Certificate Types:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.certTypes.map((type, typeIndex) => (
                      <Badge
                        key={typeIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-primary/20">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Partnership established</span>
                    <span className="font-semibold text-primary">
                      {partner.established}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Become a Registration Authority Partner
            </h3>
            <p className="text-muted-foreground">
              Join our network of trusted partners and extend digital certificate services 
              to your customers with our comprehensive PKI platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;