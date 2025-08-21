import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowLeft, Calendar } from 'lucide-react';
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
  companyName: z.string().min(1, "What is your company name?"),
  companySize: z.string().min(1, "Please select your company size"),
  currentRevenue: z.string().min(1, "What is your current revenue?"),
  lookingForEA: z.string().min(1, "Are you currently looking for an EA?"),
  location: z.string().min(1, "Where are you located?"),
});

type FormData = z.infer<typeof formSchema>;

const HiringIntake = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showNurtureScreen, setShowNurtureScreen] = useState(false);
  const navigate = useNavigate();
  
  const totalSteps = 2;
  const progress = (currentStep / totalSteps) * 100;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      companySize: '',
      currentRevenue: '',
      lookingForEA: '',
      location: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Determine lead status and market
      const isQualified = (data.lookingForEA === "Yes, immediately" || data.lookingForEA === "Yes, within 3 months") &&
                         (data.location === "United States" || data.location === "USA" || data.location === "US" || data.location === "Canada");
      
      const leadStatus = isQualified ? "qualified_to_book" : "nurture_no_link";
      const market = (data.location === "United States" || data.location === "USA" || data.location === "US" || data.location === "Canada") ? "US_CA" : "INTL";

      const { error } = await supabase
        .from('lead_captures')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company_name: data.companyName,
          location_country: data.location,
          looking_for_ea: data.lookingForEA,
          lead_status: leadStatus,
          market: market,
          source: 'hiring_intake'
        });

      if (error) {
        throw error;
      }

      toast.success('Thank you! We\'ve received your hiring requirements and will be in touch soon.');
      
      // Determine next action based on routing logic
      if (isQualified) {
        // Redirect to Google Calendar booking
        const bookingUrl = `https://calendly.com/your-calendar?name=${encodeURIComponent(data.name)}&company=${encodeURIComponent(data.companyName)}&email=${encodeURIComponent(data.email)}`;
        window.location.href = bookingUrl;
      } else {
        // Show nurture screen
        setShowNurtureScreen(true);
      }
      
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
        return ['companyName', 'companySize', 'currentRevenue', 'lookingForEA', 'location'];
      default:
        return [];
    }
  };

  if (showNurtureScreen) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-2xl w-full p-8 text-center bg-white shadow-lg">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Thanks—You're on our radar.</h2>
            <p className="text-slate-600 text-lg mb-8">
              We'll reach out with next steps. If timing changes, reply to our email and we'll fast-track your call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('/assets/ea-hiring-playbook.pdf', '_blank')}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg"
              >
                Get our EA Hiring Playbook (PDF)
              </Button>
              
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                className="px-6 py-3 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Return to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-2xl w-full p-8 text-center bg-white shadow-lg">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/jackie-atlas', '_blank')}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Discovery Call
              </Button>
              
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                className="px-6 py-3 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Return to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Tell us about your <span className="text-emerald-600 font-bold">hiring needs</span>
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
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
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
                          <FormLabel>What is your company name? *</FormLabel>
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
                        name="currentRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What is your current revenue? *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {[
                                  'Under $1M',
                                  '$1M - $5M',
                                  '$5M - $10M',
                                  '$10M - $50M',
                                  'Over $50M'
                                ].map((revenue) => (
                                  <div key={revenue} className="flex items-center space-x-2">
                                    <RadioGroupItem value={revenue} id={revenue} />
                                    <label htmlFor={revenue} className="cursor-pointer">{revenue}</label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="lookingForEA"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you currently looking for an EA? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              {[
                                'Yes, immediately',
                                'Yes, within 3 months',
                                'Maybe in the future',
                                'No, just exploring'
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
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Where are you located? *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., New York, San Francisco, Remote" {...field} />
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
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
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