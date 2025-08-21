import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Form validation schema
const formSchema = z.object({
  // Contact Information
  name: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Please enter your phone number"),
  
  // Company Information
  companyName: z.string().min(1, "Please enter your company name"),
  companySize: z.string().min(1, "Please select your company size"),
  industry: z.string().min(1, "Please enter your industry"),
  
  // Hiring Needs
  roleTitle: z.string().min(1, "Please enter the role title"),
  roleDescription: z.string().min(1, "Please describe the role"),
  urgency: z.string().min(1, "Please select urgency level"),
  budget: z.string().min(1, "Please provide your budget"),
  
  // Requirements
  experience: z.string().min(1, "Please specify experience requirements"),
  skills: z.array(z.string()).min(1, "Please select at least one skill area"),
  location: z.string().min(1, "Please specify location requirements"),
  
  // Additional Information
  previousHiring: z.string().min(1, "This field is required"),
  timeline: z.string().min(1, "Please specify your timeline"),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const skillOptions = [
  'Software Development', 'Marketing', 'Sales', 'Design', 'Data Analysis',
  'Customer Success', 'Operations', 'Finance', 'HR', 'Product Management',
  'Business Development', 'Engineering', 'Content Creation', 'Project Management'
];

const HiringIntake = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      companySize: '',
      industry: '',
      roleTitle: '',
      roleDescription: '',
      urgency: '',
      budget: '',
      experience: '',
      skills: [],
      location: '',
      previousHiring: '',
      timeline: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('lead_captures')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: 'hiring_intake'
        });

      if (error) {
        throw error;
      }

      setIsCompleted(true);
      toast.success('Thank you! We\'ve received your hiring requirements and will be in touch soon.');
      
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['name', 'email', 'phone'];
      case 2:
        return ['companyName', 'companySize', 'industry'];
      case 3:
        return ['roleTitle', 'roleDescription', 'urgency', 'budget'];
      case 4:
        return ['experience', 'skills', 'location', 'previousHiring', 'timeline'];
      default:
        return [];
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Thank You!</h2>
          <p className="text-slate-600 text-lg mb-8">
            We've received your hiring requirements and our team will reach out within 24 hours to discuss how we can help you find the perfect candidate.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Our team will review your requirements</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>We'll schedule a brief consultation call</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Receive your first candidate recommendations</span>
            </div>
          </div>
          
          <Button onClick={() => navigate('/')} variant="gradient" size="lg">
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-slate-900">
              Tell us about your <span className="text-blue-600 font-medium">hiring needs</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Help us understand your requirements so we can find you the perfect candidate
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Card className="p-8">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                      <p className="text-slate-600">Let's start with your basic information</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 2: Company Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-semibold mb-2">Company Information</h2>
                      <p className="text-slate-600">Tell us about your company</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Size *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {['1-10', '11-50', '51-200', '201-1000', '1000+'].map((size) => (
                                  <div key={size} className="flex items-center space-x-2">
                                    <RadioGroupItem value={size} id={size} />
                                    <label htmlFor={size} className="cursor-pointer">{size} employees</label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Technology, Healthcare, Finance" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Role Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-semibold mb-2">Role Details</h2>
                      <p className="text-slate-600">Describe the position you're looking to fill</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="roleTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Senior Software Engineer, Marketing Manager" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="roleDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the key responsibilities and requirements for this role..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="urgency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How urgent is this hire? *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {[
                                  'ASAP (within 2 weeks)',
                                  'Soon (within 1 month)',
                                  'Standard (1-2 months)',
                                  'Flexible (2+ months)'
                                ].map((option) => (
                                  <div key={option} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <label htmlFor={option} className="cursor-pointer">{option}</label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {[
                                  '$50k - $75k',
                                  '$75k - $100k',
                                  '$100k - $150k',
                                  '$150k - $200k',
                                  '$200k+'
                                ].map((range) => (
                                  <div key={range} className="flex items-center space-x-2">
                                    <RadioGroupItem value={range} id={range} />
                                    <label htmlFor={range} className="cursor-pointer">{range}</label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Requirements & Additional Info */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-semibold mb-2">Requirements & Timeline</h2>
                      <p className="text-slate-600">Final details to help us find the right match</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level Required *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              {[
                                'Entry Level (0-2 years)',
                                'Mid Level (3-5 years)',
                                'Senior Level (6-10 years)',
                                'Executive Level (10+ years)'
                              ].map((level) => (
                                <div key={level} className="flex items-center space-x-2">
                                  <RadioGroupItem value={level} id={level} />
                                  <label htmlFor={level} className="cursor-pointer">{level}</label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Key Skill Areas *</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {skillOptions.map((skill) => (
                                <div key={skill} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={field.value?.includes(skill)}
                                    onCheckedChange={(checked) => {
                                      const updatedSkills = checked
                                        ? [...(field.value || []), skill]
                                        : field.value?.filter((s) => s !== skill) || [];
                                      field.onChange(updatedSkills);
                                    }}
                                  />
                                  <label className="text-sm cursor-pointer">{skill}</label>
                                </div>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location Requirements *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 gap-2"
                            >
                              {[
                                'Remote (anywhere)',
                                'Hybrid (specific city)',
                                'On-site (specific location)',
                                'Flexible'
                              ].map((location) => (
                                <div key={location} className="flex items-center space-x-2">
                                  <RadioGroupItem value={location} id={location} />
                                  <label htmlFor={location} className="cursor-pointer">{location}</label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="previousHiring"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Have you worked with recruiting agencies before? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your previous hiring experiences, what worked well, what didn't..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ideal Timeline *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="When would you like to start interviews? Any specific milestones or deadlines?"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Anything else you'd like us to know about this role or your company culture?"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-slate-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2"
                      variant="gradient"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      Submit
                    </Button>
                  )}
                </div>
              </Card>
            </form>
          </Form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HiringIntake;