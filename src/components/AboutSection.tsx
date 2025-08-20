import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Globe, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and security protocols protect your digital certificates."
    },
    {
      icon: Award,
      title: "Government Certified",
      description: "Officially authorized by Ethiopian government authorities and regulatory bodies."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support from PKI specialists and technical experts."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliant with international PKI standards and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Pioneering</span>{" "}
                <span className="bg-gradient-golden bg-clip-text text-transparent">
                  Digital Trust
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As Ethiopia's leading Public Key Infrastructure (PKI) services provider, 
                we bridge the gap between traditional business practices and the digital future. 
                Our platform enables secure digital transactions, electronic signatures, and 
                authenticated communications for individuals, businesses, and government entities.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Why Choose Ethiopian PKI Services?
              </h3>
              <ul className="space-y-3">
                {[
                  "ISO 27001 certified security infrastructure",
                  "Integration with Ethiopian Revenue Ministry systems",
                  "Real-time certificate status verification",
                  "Mobile-responsive dashboard for certificate management",
                  "Automated renewal and expiration notifications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-scaleIn group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;