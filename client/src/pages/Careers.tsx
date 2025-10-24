import { useState } from "react";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import teamImage from "@assets/IMG_20251016_134638885_1761126595833.jpg";

export default function Careers() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roleInterest: "",
    message: "",
    honeypot: "",
  });

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement within a growing company.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Team",
      description: "Work alongside experienced professionals in a supportive, collaborative environment.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Pay",
      description: "Industry-leading wages and benefits package for skilled tradespeople and professionals.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Respect for personal time with consistent schedules and supportive management.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      toast({
        title: "Error",
        description: "Invalid submission detected.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          roleInterest: "",
          message: "",
          honeypot: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={teamImage}
            alt="Join our team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            Join Our Team
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Build your career with Sydney's trusted construction specialists
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Work With Us
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join a company that values quality, safety, and its people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Current Opportunities
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground text-lg mb-8">
              We're always looking for talented tradespeople, project managers, and construction professionals to join our growing team. Submit your details below and we'll be in touch about current and future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
                Apply Now
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-muted-foreground">
                Fill out the form below and we'll be in touch about opportunities that match your skills.
              </p>
            </div>

            <Card className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roleInterest">Role of Interest *</Label>
                    <Select
                      value={formData.roleInterest}
                      onValueChange={(value) => setFormData({ ...formData, roleInterest: value })}
                      required
                    >
                      <SelectTrigger data-testid="select-role">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carpenter">Carpenter</SelectItem>
                        <SelectItem value="project-manager">Project Manager</SelectItem>
                        <SelectItem value="site-supervisor">Site Supervisor</SelectItem>
                        <SelectItem value="labourer">Labourer</SelectItem>
                        <SelectItem value="trades-assistant">Trades Assistant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    placeholder="Please include your relevant experience, qualifications, and why you'd like to join Lundy Building Group..."
                    required
                    data-testid="textarea-message"
                  />
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="text-sm text-muted-foreground">
                  * Required fields
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-application"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              By submitting this form, you agree to our Privacy Policy. We'll only use your information to contact you about employment opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
