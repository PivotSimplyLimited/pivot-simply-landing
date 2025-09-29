import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 characters"),
  experience: z.enum(["none", "beginner", "intermediate", "experienced"]),
  coachingBackground: z.string().trim().max(1000, "Coaching background must be less than 1000 characters"),
  motivation: z.string().trim().min(50, "Please provide at least 50 characters explaining your motivation").max(1000, "Motivation must be less than 1000 characters"),
  timeCommitment: z.enum(["yes", "no"]),
  financialCommitment: z.enum(["yes", "maybe", "no"]),
  hasAgreedToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions")
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const CertificationApplicationForm = () => {
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (field: keyof ApplicationFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      applicationSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as keyof ApplicationFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Application submitted successfully! We'll be in touch within 24 hours.");
      setIsOpen(false);
      setFormData({});
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendarBooking = () => {
    // Replace with actual Calendly or booking system URL
    window.open("https://calendly.com/simeon-mihinga/15min-discovery-call", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <FileText className="mr-2 h-5 w-5" />
            Apply Now
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Certification Program Application</DialogTitle>
            <DialogDescription>
              Complete this application to express your interest in our Transformation & Business Coach Certification Program.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName || ""}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName || ""}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* Experience Level */}
            <div className="space-y-3">
              <Label>Current Coaching Experience Level *</Label>
              <RadioGroup
                value={formData.experience || ""}
                onValueChange={(value) => handleInputChange("experience", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">No prior coaching experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner (0-1 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate (1-3 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="experienced" id="experienced" />
                  <Label htmlFor="experienced">Experienced (3+ years)</Label>
                </div>
              </RadioGroup>
              {errors.experience && <p className="text-sm text-red-500">{errors.experience}</p>}
            </div>

            {/* Background */}
            <div className="space-y-2">
              <Label htmlFor="coachingBackground">Previous Coaching or Related Experience</Label>
              <Textarea
                id="coachingBackground"
                placeholder="Tell us about any coaching, mentoring, training, or related experience you have..."
                value={formData.coachingBackground || ""}
                onChange={(e) => handleInputChange("coachingBackground", e.target.value)}
                className={errors.coachingBackground ? "border-red-500" : ""}
                rows={3}
              />
              {errors.coachingBackground && <p className="text-sm text-red-500">{errors.coachingBackground}</p>}
            </div>

            {/* Motivation */}
            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to become a certified coach? *</Label>
              <Textarea
                id="motivation"
                placeholder="Share your motivation for pursuing coaching certification and how you envision using these skills..."
                value={formData.motivation || ""}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                className={errors.motivation ? "border-red-500" : ""}
                rows={4}
              />
              {errors.motivation && <p className="text-sm text-red-500">{errors.motivation}</p>}
            </div>

            {/* Commitment Questions */}
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Can you commit to 18 weeks of training (8-10 hours per week)? *</Label>
                <RadioGroup
                  value={formData.timeCommitment || ""}
                  onValueChange={(value) => handleInputChange("timeCommitment", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="timeYes" />
                    <Label htmlFor="timeYes">Yes, I can commit to the full program</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="timeNo" />
                    <Label htmlFor="timeNo">I need to discuss scheduling options</Label>
                  </div>
                </RadioGroup>
                {errors.timeCommitment && <p className="text-sm text-red-500">{errors.timeCommitment}</p>}
              </div>

              <div className="space-y-3">
                <Label>Are you prepared for the financial investment? *</Label>
                <RadioGroup
                  value={formData.financialCommitment || ""}
                  onValueChange={(value) => handleInputChange("financialCommitment", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="finYes" />
                    <Label htmlFor="finYes">Yes, I'm ready to invest</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="finMaybe" />
                    <Label htmlFor="finMaybe">I'd like to discuss payment options</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="finNo" />
                    <Label htmlFor="finNo">I need more information about pricing</Label>
                  </div>
                </RadioGroup>
                {errors.financialCommitment && <p className="text-sm text-red-500">{errors.financialCommitment}</p>}
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.hasAgreedToTerms || false}
                onCheckedChange={(checked) => handleInputChange("hasAgreedToTerms", checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and understand that this application does not guarantee acceptance into the program *
              </Label>
            </div>
            {errors.hasAgreedToTerms && <p className="text-sm text-red-500">{errors.hasAgreedToTerms}</p>}

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Button 
        size="lg" 
        variant="outline"
        onClick={handleCalendarBooking}
        className="border-primary text-primary hover:bg-primary/10"
      >
        <CalendarDays className="mr-2 h-5 w-5" />
        Book 15-Min Discovery Call
      </Button>
    </div>
  );
};

export default CertificationApplicationForm;