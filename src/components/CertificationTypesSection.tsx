import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, User, Globe, Briefcase, ArrowRight, Check } from "lucide-react";

const CertificationTypesSection = () => {
  const certificationTypes = [
    {
      icon: User,
      title: "Individual Certificates",
      subtitle: "Personal Digital Identity",
      description: "Personal digital certificates for individual users, enabling secure email, document signing, and online authentication.",
      price: "Starting at $25",
      features: [
        "Email encryption & signing",
        "Document authentication", 
        "Secure web browsing",
        "Personal identity verification",
        "2-year validity period"
      ],
      popular: false,
      badge: "Most Common"
    },
    {
      icon: Building,
      title: "Organization Certificates",
      subtitle: "Enterprise-Grade Security",
      description: "Comprehensive PKI solutions for businesses, government agencies, and organizations requiring secure communications.",
      price: "Starting at $150",
      features: [
        "SSL/TLS certificates",
        "Code signing certificates",
        "Server authentication",
        "Enterprise key management",
        "Bulk certificate deployment"
      ],
      popular: true,
      badge: "Enterprise Choice"
    },
    {
      icon: Globe,
      title: "Domain Validation",
      subtitle: "Website Security",
      description: "SSL/TLS certificates for website security, ensuring encrypted connections and trusted online presence.",
      price: "Starting at $50",
      features: [
        "Domain ownership validation",
        "256-bit encryption",
        "Browser trust indicators",
        "Multi-domain support",
        "Automated certificate renewal"
      ],
      popular: false,
      badge: "Web Security"
    },
    {
      icon: Briefcase,
      title: "Government Certificates",
      subtitle: "Official Authority",
      description: "Specialized certificates for government entities, ensuring compliance with national digital identity standards.",
      price: "Contact for Pricing",
      features: [
        "Government compliance",
        "National ID integration",
        "Official document signing",
        "Inter-agency communications",
        "Regulatory compliance"
      ],
      popular: false,
      badge: "Official Use"
    }
  ];

  return (
    <section id="certification-types" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Choose Your</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Certificate Type
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select from our comprehensive range of digital certificates designed to meet 
            your specific security and authentication requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certificationTypes.map((cert, index) => (
            <Card
              key={index}
              className={`p-8 backdrop-luxury border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury animate-scaleIn group relative ${
                cert.popular ? 'ring-2 ring-primary shadow-glow' : 'shadow-neumorphic'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cert.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-golden text-primary-foreground font-semibold px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-primary">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {cert.subtitle}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {cert.badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {cert.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {cert.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant={cert.popular ? "hero" : "luxury"} 
                    className="w-full group"
                    size="lg"
                  >
                    Select This Certificate
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground">
              We offer tailored PKI solutions for unique business requirements. 
              Contact our experts to discuss your specific needs and get a personalized quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="group">
              Compare All Options
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero" size="lg" className="group">
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationTypesSection;