import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      primary: "+251 11 XXX XXXX",
      secondary: "24/7 Technical Support",
      description: "Get immediate assistance from our PKI experts"
    },
    {
      icon: Mail,
      title: "Email Support", 
      primary: "support@ethiopianpki.gov.et",
      secondary: "Response within 2 hours",
      description: "Send us your questions and technical inquiries"
    },
    {
      icon: MapPin,
      title: "Head Office",
      primary: "Addis Ababa, Ethiopia",
      secondary: "Ministry of Innovation Building",
      description: "Visit our main certification authority office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 8:00 AM - 6:00 PM",
      secondary: "Sat: 9:00 AM - 1:00 PM", 
      description: "Ethiopian Standard Time (EAT)"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-circuit relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Get in</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Touch Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your digital future? Contact our expert team to get started 
            with your PKI certificate or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <Card className="p-8 backdrop-luxury border-primary/20 shadow-luxury animate-scaleIn">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-primary">
                  Start Your Application
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will contact you within 24 hours 
                  to begin your certification process.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+251 9xx xxx xxx"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input 
                      id="organization" 
                      placeholder="Your organization"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certType">Certificate Type Needed</Label>
                  <select 
                    id="certType"
                    className="w-full h-10 px-3 rounded-md border border-primary/20 bg-background/50 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select certificate type</option>
                    <option value="individual">Individual Certificate</option>
                    <option value="organization">Organization Certificate</option>
                    <option value="domain">Domain Validation</option>
                    <option value="government">Government Certificate</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your specific requirements or questions..."
                    className="bg-background/50 border-primary/20 focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  Send Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </Card>

          {/* Right Column - Contact Information */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-primary">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Multiple ways to reach our expert team for support, 
                consultation, or emergency assistance.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 backdrop-luxury border-primary/20 shadow-neumorphic hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 animate-scaleIn group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-semibold text-primary">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium">
                        {info.primary}
                      </p>
                      <p className="text-sm text-secondary">
                        {info.secondary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 backdrop-luxury border-red-500/20 shadow-neumorphic">
              <div className="space-y-3">
                <h4 className="font-semibold text-red-400 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Support
                </h4>
                <p className="text-foreground font-mono text-lg">
                  +251 11 XXX XXXX (24/7)
                </p>
                <p className="text-sm text-muted-foreground">
                  For critical certificate issues, security breaches, or urgent technical support
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;