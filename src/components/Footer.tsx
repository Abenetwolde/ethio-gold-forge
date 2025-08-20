import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: "Individual Certificates", href: "#" },
      { label: "Organization Certificates", href: "#" },
      { label: "Domain Validation", href: "#" },
      { label: "Government Certificates", href: "#" },
      { label: "Custom Solutions", href: "#" }
    ],
    support: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Status Page", href: "#" },
      { label: "Security Reports", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Partners", href: "#partners" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Certificate Policy", href: "#" },
      { label: "Compliance", href: "#" },
      { label: "Security Practices", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-card/50 border-t border-primary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-circuit opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary animate-glow-pulse" />
              <span className="text-2xl font-bold bg-gradient-golden bg-clip-text text-transparent">
                Ethiopian PKI
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Ethiopia's premier Public Key Infrastructure services provider, 
              securing digital transactions and communications with cutting-edge 
              certificate authority solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@ethiopianpki.gov.et</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+251 11 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:text-primary/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Ethiopian PKI Services. All rights reserved.</span>
            <div className="flex space-x-4">
              {footerLinks.legal.slice(0, 3).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group animate-glow-pulse"
          >
            <ArrowUp className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;