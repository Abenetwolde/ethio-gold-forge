import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Shield, Lock, FileCheck, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="h-8 w-8 text-primary opacity-50" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Lock className="h-6 w-6 text-secondary opacity-60" />
      </div>
      <div className="absolute top-1/3 right-8 animate-float" style={{ animationDelay: '4s' }}>
        <FileCheck className="h-10 w-10 text-primary opacity-40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-golden bg-clip-text text-transparent">
                  Secure Your
                </span>
                <br />
                <span className="text-foreground">Digital Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Ethiopia's premier PKI certificate services platform. Request and manage 
                digital certificates from authorized Registration Authorities with 
                unparalleled security and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Certificate Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Eye className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Certificates Issued</div>
              </div>
              <div className="text-center animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.8s' }}>
            <Card className="p-8 backdrop-luxury border-primary/20 shadow-luxury">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-semibold text-primary">
                    Quick Registration
                  </h3>
                  <p className="text-muted-foreground">
                    Start your certification process today
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
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

                  <Button variant="hero" className="w-full" size="lg">
                    Start Application
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign in here
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;