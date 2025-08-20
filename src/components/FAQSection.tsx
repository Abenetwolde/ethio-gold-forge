import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a PKI digital certificate?",
      answer: "A PKI (Public Key Infrastructure) digital certificate is an electronic document that uses digital signatures to bind a public key with identity information. It enables secure digital communications, document signing, authentication, and encryption. Our certificates comply with international standards and are recognized by all major browsers and applications."
    },
    {
      question: "How long does the certificate approval process take?",
      answer: "The approval timeline depends on the certificate type: Individual certificates typically take 2-3 business days, Organization certificates take 5-7 business days for document verification, Domain validation certificates are issued within 24 hours, and Government certificates may take 7-14 business days due to additional compliance checks."
    },
    {
      question: "Which Registration Authorities (RAs) are supported?",
      answer: "We work with Ethiopia's leading institutions including the Ethiopian Revenue Ministry, Ethiopian Banking Association, Ministry of Innovation & Technology, Commercial Bank of Ethiopia, Ethiopian Electric Utility, and Ethiopian Airlines. Each RA specializes in certificates for their respective sectors."
    },
    {
      question: "What documents are required for certificate application?",
      answer: "Requirements vary by certificate type: Individual certificates require valid government ID, proof of address, and passport-sized photo. Organization certificates need business registration, tax ID, authorized signatory documents, and organizational chart. Additional documentation may be required based on your specific use case."
    },
    {
      question: "How do I install and use my digital certificate?",
      answer: "Once approved, you'll receive detailed installation instructions via email. We provide step-by-step guides for Windows, macOS, Linux, and mobile devices. Our support team offers free installation assistance, and we include backup procedures and renewal reminders for seamless certificate management."
    },
    {
      question: "What happens if my certificate expires or is compromised?",
      answer: "We send renewal reminders 30, 14, and 7 days before expiration. Renewal is streamlined with pre-filled information. If compromised, immediately contact our 24/7 emergency support for instant revocation. We maintain a real-time Certificate Revocation List (CRL) and provide emergency replacement certificates within 2 hours for critical cases."
    },
    {
      question: "Are your certificates internationally recognized?",
      answer: "Yes, our certificates are issued following international standards (RFC 5280, X.509 v3) and are trusted by major browsers, email clients, and applications worldwide. We maintain cross-certificates with leading global Certificate Authorities to ensure maximum compatibility and trust."
    },
    {
      question: "What security measures protect my private key?",
      answer: "We employ HSMs (Hardware Security Modules) for key generation and storage, use FIPS 140-2 Level 3 certified infrastructure, implement multi-factor authentication, maintain 24/7 security monitoring, and provide optional hardware tokens for high-security applications. Your private key never leaves your control."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Frequently Asked</span>{" "}
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our PKI certificate services, 
            application processes, and technical requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-luxury border-primary/20 shadow-luxury animate-scaleIn">
            <div className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left hover:text-primary py-6 text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground">
              Our expert support team is available 24/7 to help you with any questions 
              about PKI certificates, technical requirements, or application processes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="group">
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat Support
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero" size="lg" className="group">
              Contact Expert Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;