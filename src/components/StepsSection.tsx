import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, Shield, Download, ArrowRight } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Submit Application",
      description: "Complete your digital certificate application form with required documentation and identity verification.",
      details: [
        "Upload identity documents",
        "Provide organization details",
        "Specify certificate type and usage"
      ]
    },
    {
      number: "02", 
      icon: UserCheck,
      title: "Identity Verification",
      description: "Our Registration Authority verifies your identity and credentials through secure authentication processes.",
      details: [
        "Document authenticity check",
        "Identity validation process",
        "Background verification"
      ]
    },
    {
      number: "03",
      icon: Shield,
      title: "Certificate Generation",
      description: "Upon approval, your digital certificate is generated using advanced cryptographic algorithms.",
      details: [
        "RSA/ECC key pair generation",
        "Certificate signing by CA",
        "Security policy compliance"
      ]
    },
    {
      number: "04",
      icon: Download,
      title: "Download & Install",
      description: "Access your certificates through our secure portal and install them on your devices.",
      details: [
        "Secure certificate delivery",
        "Installation guidelines",
        "Backup and recovery options"
      ]
    }
  ];

  return (
    <section id="steps" className="py-20 bg-gradient-circuit relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Simple</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Certification Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your digital certificate in just four easy steps. Our streamlined process 
            ensures quick turnaround while maintaining the highest security standards.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-golden transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-glow-pulse" />
                
                <Card 
                  className="p-8 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury transition-all duration-500 hover:-translate-y-4 animate-scaleIn group lg:mt-16"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="space-y-6">
                    {/* Step Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="h-12 w-12 rounded-lg bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Details - Hidden by default, revealed on hover */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500">
                      <h4 className="text-sm font-medium text-primary">Key Features:</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <ArrowRight className="h-3 w-3 text-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <Button variant="hero" size="xl" className="group">
            Start Your Application Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;