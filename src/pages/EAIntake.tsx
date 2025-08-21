import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
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

// Form validation schema
const formSchema = z.object({
  // Contact Information
  name: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Please enter your phone number"),
  
  // Company Information
  company_name: z.string().min(1, "Please enter your company name"),
  location_country: z.string().min(1, "Please select your country"),
  looking_for_ea: z.string().min(1, "Please select an option"),
  
  // Section 1: Goals & Needs
  outcomes: z.string().min(1, "This field is required"),
  timeWasters: z.string().min(1, "This field is required"),
  hoursAndTimezone: z.string().min(1, "This field is required"),
  
  // Section 2: Role & Fit
  remoteEA: z.enum(['yes', 'no']).refine((val) => val !== undefined, {
    message: "Please select an option"
  }),
  budget: z.string().min(1, "Please provide your budget"),
  focus: z.enum(['business', 'personal', 'both']).refine((val) => val !== undefined, {
    message: "Please select an option"
  }),
  tools: z.array(z.string()).min(1, "Please select at least one tool"),
  
  // Section 3: Working Style
  previousExperience: z.string().min(1, "This field is required"),
  communication: z.array(z.string()).min(1, "Please select at least one communication method"),
  leadershipStyle: z.string().min(1, "This field is required"),
});

type FormData = z.infer<typeof formSchema>;

const toolOptions = [
  'Slack', 'Microsoft Teams', 'Google Calendar', 'Outlook', 'Notion', 
  'Asana', 'Monday.com', 'Trello', 'Salesforce', 'HubSpot', 
  'TripIt', 'Expensify', 'QuickBooks', 'Zoom', 'DocuSign', 
  'Dropbox', 'Google Drive', 'Other'
];

const communicationOptions = [
  'Daily huddles', 'Weekly check-ins', 'Async Looms', 'Slack messages',
  'Email updates', 'Shared documents', 'Video calls', 'Project management tools'
];

const EAIntake = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNurtureScreen, setShowNurtureScreen] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company_name: "",
      location_country: "",
      looking_for_ea: "",
      outcomes: "",
      timeWasters: "",
      hoursAndTimezone: "",
      remoteEA: "" as any,
      budget: "",
      focus: "" as any,
      tools: [],
      previousExperience: "",
      communication: [],
      leadershipStyle: "",
    },
  });

  const watchedFields = form.watch();
  
  const getTotalProgress = () => {
    const totalFields = 15;
    let completedFields = 0;
    
    if (watchedFields.name) completedFields++;
    if (watchedFields.email) completedFields++;
    if (watchedFields.phone) completedFields++;
    if (watchedFields.company_name) completedFields++;
    if (watchedFields.location_country) completedFields++;
    if (watchedFields.looking_for_ea) completedFields++;
    if (watchedFields.outcomes) completedFields++;
    if (watchedFields.timeWasters) completedFields++;
    if (watchedFields.hoursAndTimezone) completedFields++;
    if (watchedFields.remoteEA) completedFields++;
    if (watchedFields.budget) completedFields++;
    if (watchedFields.focus) completedFields++;
    if (watchedFields.tools?.length > 0) completedFields++;
    if (watchedFields.previousExperience) completedFields++;
    if (watchedFields.communication?.length > 0) completedFields++;
    if (watchedFields.leadershipStyle) completedFields++;
    
    return Math.round((completedFields / totalFields) * 100);
  };

  const validateCurrentSection = async () => {
    const fields = {
      1: ['name', 'email', 'phone', 'company_name', 'location_country', 'looking_for_ea', 'outcomes', 'timeWasters', 'hoursAndTimezone'],
      2: ['remoteEA', 'budget', 'focus', 'tools'],
      3: ['previousExperience', 'communication', 'leadershipStyle']
    };

    const result = await form.trigger(fields[currentSection as keyof typeof fields] as any);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentSection();
    if (isValid && currentSection < 3) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Determine lead status and market
      const isQualified = (data.looking_for_ea === "Yes, immediately" || data.looking_for_ea === "Yes, within 3 months") &&
                         (data.location_country === "United States" || data.location_country === "USA" || data.location_country === "US" || data.location_country === "Canada");
      
      const leadStatus = isQualified ? "qualified_to_book" : "nurture_no_link";
      const market = (data.location_country === "United States" || data.location_country === "USA" || data.location_country === "US" || data.location_country === "Canada") ? "US_CA" : "INTL";

      const { error } = await supabase
        .from('ea_intake_submissions')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company_name: data.company_name,
          location_country: data.location_country,
          looking_for_ea: data.looking_for_ea,
          lead_status: leadStatus,
          market: market,
          outcomes: data.outcomes,
          time_wasters: data.timeWasters,
          hours_and_timezone: data.hoursAndTimezone,
          remote_ea: data.remoteEA,
          budget: data.budget,
          focus: data.focus,
          tools: data.tools,
          previous_experience: data.previousExperience,
          communication_preferences: data.communication,
          leadership_style: data.leadershipStyle,
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast.error('Failed to submit form. Please try again.');
        return;
      }

      console.log('Form submitted successfully');
      toast.success('Form submitted successfully!');
      
      // Determine next action based on routing logic
      if (isQualified) {
        // Redirect to Google Calendar booking
        const bookingUrl = `https://calendar.app.google/UTDXuBzYPAhD2sHRA?name=${encodeURIComponent(data.name)}&company=${encodeURIComponent(data.company_name)}&email=${encodeURIComponent(data.email)}`;
        window.location.href = bookingUrl;
      } else {
        // Show nurture screen
        setShowNurtureScreen(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  // Redirect to home page after 8 seconds when nurture screen is shown
  useEffect(() => {
    if (showNurtureScreen) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [showNurtureScreen, navigate]);

  if (showNurtureScreen) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Thanks—You're on our radar.</h2>
          <p className="text-muted-foreground mb-6">We'll reach out with next steps. If timing changes, reply to our email and we'll fast-track your call.</p>
          <Button 
            onClick={() => window.open('/assets/ea-hiring-playbook.pdf', '_blank')}
            className="w-full"
          >
            You'll hear from us soon
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Redirecting to home page in a few seconds...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border/50 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-foreground">Section {currentSection} of 3</span>
            <span className="text-sm font-semibold text-foreground">{getTotalProgress()}% complete</span>
          </div>
          <Progress value={getTotalProgress()} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">EA Intake Form</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Help us understand your needs to find the perfect Executive Assistant</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Section 1: Contact & Goals */}
              {currentSection === 1 && (
                <Card className="p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">Contact & Goals</h2>
                    <p className="text-muted-foreground text-lg">Your contact information and objectives</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                     <FormField
                       control={form.control}
                       name="phone"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Phone Number</FormLabel>
                           <FormControl>
                             <Input placeholder="Enter your phone number" type="tel" {...field} />
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />

                     <FormField
                       control={form.control}
                       name="company_name"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Company Name</FormLabel>
                           <FormControl>
                             <Input placeholder="Your company name" {...field} />
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />

                     <FormField
                       control={form.control}
                       name="location_country"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Country</FormLabel>
                           <FormControl>
                             <select 
                               {...field} 
                               className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                             >
                               <option value="">Select your country</option>
                               <option value="United States">United States</option>
                               <option value="Canada">Canada</option>
                               <option value="United Kingdom">United Kingdom</option>
                               <option value="Australia">Australia</option>
                               <option value="Germany">Germany</option>
                               <option value="France">France</option>
                               <option value="Other">Other</option>
                             </select>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />

                     <FormField
                       control={form.control}
                       name="looking_for_ea"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Are you currently looking for an EA?</FormLabel>
                           <FormControl>
                             <RadioGroup
                               onValueChange={field.onChange}
                               value={field.value}
                               className="flex flex-col gap-3 mt-2"
                             >
                               <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="Yes, immediately" id="immediately" />
                                 <label htmlFor="immediately" className="text-sm font-medium">Yes, immediately</label>
                               </div>
                               <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="Yes, within 3 months" id="within3months" />
                                 <label htmlFor="within3months" className="text-sm font-medium">Yes, within 3 months</label>
                               </div>
                               <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="Maybe in the future" id="maybefuture" />
                                 <label htmlFor="maybefuture" className="text-sm font-medium">Maybe in the future</label>
                               </div>
                               <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="No, just exploring" id="exploring" />
                                 <label htmlFor="exploring" className="text-sm font-medium">No, just exploring</label>
                               </div>
                             </RadioGroup>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
                    <FormField
                      control={form.control}
                      name="outcomes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            What are the top 3 outcomes you want your EA to drive in the next 90 days?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the key results you want to achieve..."
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
                      name="timeWasters"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            What's currently stealing the most time and energy from your week?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the tasks or activities that drain your time..."
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
                      name="hoursAndTimezone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            How many hours per week do you expect your EA to work—and during what time zone/hours?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g., 30 hours/week, EST business hours (9am-5pm)"
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              )}

              {/* Section 2: Role & Fit */}
              {currentSection === 2 && (
                <Card className="p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">Role & Fit</h2>
                    <p className="text-muted-foreground text-lg">Help us understand the role requirements and budget</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="remoteEA"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Are you open to working with a remote Executive Assistant based in North America?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex gap-6 mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="yes" />
                                <label htmlFor="yes" className="text-sm font-medium">Yes</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="no" />
                                <label htmlFor="no" className="text-sm font-medium">No</label>
                              </div>
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
                           <FormLabel>
                             What's your yearly salary budget for this role (in USD)?
                           </FormLabel>
                          <FormControl>
                             <Input 
                               placeholder="e.g., $60,000 yearly salary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="focus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Do you want this EA focused only on business tasks, or also on personal/family life?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex flex-col gap-3 mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="business" id="business" />
                                <label htmlFor="business" className="text-sm font-medium">Business only</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="personal" id="personal" />
                                <label htmlFor="personal" className="text-sm font-medium">Personal only</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="both" id="both" />
                                <label htmlFor="both" className="text-sm font-medium">Both</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tools"
                      render={() => (
                        <FormItem>
                          <FormLabel>
                            What tools and systems do you already use that the EA needs to plug into?
                          </FormLabel>
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            {toolOptions.map((tool) => (
                              <FormField
                                key={tool}
                                control={form.control}
                                name="tools"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={tool}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(tool)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, tool])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== tool
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {tool}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              )}

              {/* Section 3: Working Style */}
              {currentSection === 3 && (
                <Card className="p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">Working Style</h2>
                    <p className="text-muted-foreground text-lg">Tell us about your work preferences and experience</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="previousExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Have you worked with an EA before? If so, what worked well and what didn't?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your previous experience with Executive Assistants..."
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
                      name="communication"
                      render={() => (
                        <FormItem>
                          <FormLabel>
                            How do you prefer to stay in sync with your EA?
                          </FormLabel>
                          <div className="grid grid-cols-1 gap-3 mt-2">
                            {communicationOptions.map((option) => (
                              <FormField
                                key={option}
                                control={form.control}
                                name="communication"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={option}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(option)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, option])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== option
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {option}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leadershipStyle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            How would you describe your leadership and communication style?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe how you like to work with your team members..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              )}
            </form>
          </Form>
        </div>
      </div>

      {/* Fixed Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentSection === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <div className="flex gap-2">
            {[1, 2, 3].map((section) => (
              <div
                key={section}
                className={cn(
                  "w-2 h-2 rounded-full",
                  section === currentSection ? "bg-primary" : section < currentSection ? "bg-primary/50" : "bg-muted"
                )}
              />
            ))}
          </div>

          {currentSection < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              className="bg-primary hover:bg-primary/90"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EAIntake;