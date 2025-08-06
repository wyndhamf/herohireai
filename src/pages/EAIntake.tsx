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
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      outcomes: "",
      timeWasters: "",
      hoursAndTimezone: "",
      remoteEA: undefined,
      budget: "",
      focus: undefined,
      tools: [],
      previousExperience: "",
      communication: [],
      leadershipStyle: "",
    },
  });

  const watchedFields = form.watch();
  
  const getTotalProgress = () => {
    const totalFields = 10;
    let completedFields = 0;
    
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
      1: ['outcomes', 'timeWasters', 'hoursAndTimezone'],
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
      const { error } = await supabase
        .from('ea_intake_submissions')
        .insert({
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
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  // Redirect to home page after 5 seconds when form is submitted
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thanks for sharing</h2>
          <p className="text-gray-600 mb-4">We'll email you within 72 hours with the next steps.</p>
          <p className="text-sm text-gray-500">Redirecting to home page in a few seconds...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Section {currentSection} of 3</span>
            <span className="text-sm font-medium text-gray-700">{getTotalProgress()}% complete</span>
          </div>
          <Progress value={getTotalProgress()} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">EA Intake Form</h1>
            <p className="text-gray-600">Help us understand your needs to find the perfect Executive Assistant</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Section 1: Goals & Needs */}
              {currentSection === 1 && (
                <Card className="p-6 animate-fade-in">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Goals & Needs</h2>
                    <p className="text-gray-600">Tell us about your objectives and current challenges</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="outcomes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                <Card className="p-6 animate-fade-in">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Role & Fit</h2>
                    <p className="text-gray-600">Help us understand the role requirements and budget</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="remoteEA"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                           <FormLabel className="text-sm font-medium text-gray-700">
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
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                          <FormLabel className="text-sm font-medium text-gray-700">
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
                <Card className="p-6 animate-fade-in">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Working Style</h2>
                    <p className="text-gray-600">Tell us about your preferences and communication style</p>
                  </div>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="previousExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            What was your experience with previous EAs (good or bad)? What worked or didn't?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your past experiences with Executive Assistants..."
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            How do you prefer to communicate and review work—daily huddles, async Looms, Slack, etc.?
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            What's your leadership style, and how do you want your EA to interface with the rest of your team?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your leadership approach and team dynamics..."
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-2xl mx-auto flex justify-between">
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

          {currentSection < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit My EA Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EAIntake;