import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, CheckCircle, Upload, Building, User, FileText, Briefcase } from 'lucide-react';
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
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company_name: z.string().min(1, "Company name is required"),
  job_title: z.string().min(1, "Job title is required"),
  
  // Company Details
  company_size: z.string().min(1, "Please select company size"),
  industry: z.string().min(1, "Please select industry"),
  annual_revenue: z.string().min(1, "Please select annual revenue"),
  website_url: z.string().optional(),
  
  // Project Information
  project_type: z.string().min(1, "Please select project type"),
  project_budget: z.string().min(1, "Please select project budget"),
  project_timeline: z.string().min(1, "Please select project timeline"),
  project_description: z.string().min(10, "Please provide a detailed project description (min 10 characters)"),
  
  // Requirements
  required_skills: z.array(z.string()).min(1, "Please select at least one required skill"),
  team_size_needed: z.string().min(1, "Please specify team size needed"),
  work_arrangement: z.string().min(1, "Please select work arrangement"),
  start_date: z.string().min(1, "Please select start date"),
  
  // Additional Information
  previous_experience: z.string().optional(),
  specific_requirements: z.string().optional(),
  how_did_you_hear: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const skillOptions = [
  'JavaScript/TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C#', '.NET',
  'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'Flutter', 'React Native',
  'Vue.js', 'Angular', 'Next.js', 'Express.js', 'Django', 'Flask', 'Spring',
  'Laravel', 'Ruby on Rails', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD',
  'Machine Learning', 'AI', 'Data Science', 'Blockchain', 'Cybersecurity',
  'UI/UX Design', 'Product Management', 'Project Management', 'QA Testing',
  'Technical Writing', 'Sales', 'Marketing', 'Customer Support'
];

const NewIntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  
  const totalSteps = 4;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      company_name: '',
      job_title: '',
      company_size: '',
      industry: '',
      annual_revenue: '',
      website_url: '',
      project_type: '',
      project_budget: '',
      project_timeline: '',
      project_description: '',
      required_skills: [],
      team_size_needed: '',
      work_arrangement: '',
      start_date: '',
      previous_experience: '',
      specific_requirements: '',
      how_did_you_hear: '',
    },
  });

  const watchedFields = form.watch();
  
  const getProgress = () => {
    const totalFields = 18; // Count of required fields
    let completedFields = 0;
    
    // Contact Information (5 fields)
    if (watchedFields.full_name?.trim()) completedFields++;
    if (watchedFields.email?.trim()) completedFields++;
    if (watchedFields.phone?.trim()) completedFields++;
    if (watchedFields.company_name?.trim()) completedFields++;
    if (watchedFields.job_title?.trim()) completedFields++;
    
    // Company Details (3 fields)
    if (watchedFields.company_size?.trim()) completedFields++;
    if (watchedFields.industry?.trim()) completedFields++;
    if (watchedFields.annual_revenue?.trim()) completedFields++;
    
    // Project Information (4 fields)
    if (watchedFields.project_type?.trim()) completedFields++;
    if (watchedFields.project_budget?.trim()) completedFields++;
    if (watchedFields.project_timeline?.trim()) completedFields++;
    if (watchedFields.project_description?.trim()) completedFields++;
    
    // Requirements (4 fields)
    if (watchedFields.required_skills?.length > 0) completedFields++;
    if (watchedFields.team_size_needed?.trim()) completedFields++;
    if (watchedFields.work_arrangement?.trim()) completedFields++;
    if (watchedFields.start_date?.trim()) completedFields++;
    
    const progress = Math.round((completedFields / totalFields) * 100);
    return Math.min(progress, 100);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('new_intake_submissions')
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          company_name: data.company_name,
          job_title: data.job_title,
          company_size: data.company_size,
          industry: data.industry,
          annual_revenue: data.annual_revenue,
          website_url: data.website_url || null,
          project_type: data.project_type,
          project_budget: data.project_budget,
          project_timeline: data.project_timeline,
          project_description: data.project_description,
          required_skills: data.required_skills,
          team_size_needed: data.team_size_needed,
          work_arrangement: data.work_arrangement,
          start_date: data.start_date,
          previous_experience: data.previous_experience || null,
          specific_requirements: data.specific_requirements || null,
          how_did_you_hear: data.how_did_you_hear || null,
          lead_status: 'new',
          priority_level: 'medium'
        });

      if (error) {
        throw error;
      }

      toast.success('Form submitted successfully! We\'ll be in touch soon.');
      setIsCompleted(true);
      
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
        return ['full_name', 'email', 'phone', 'company_name', 'job_title'];
      case 2:
        return ['company_size', 'industry', 'annual_revenue'];
      case 3:
        return ['project_type', 'project_budget', 'project_timeline', 'project_description'];
      case 4:
        return ['required_skills', 'team_size_needed', 'work_arrangement', 'start_date'];
      default:
        return [];
    }
  };

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
              Your intake form has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Form submission received and logged</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Team will review your requirements</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>You'll receive a response within 24 hours</span>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/')} 
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
            >
              Return to Home
            </Button>
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
              New <span className="text-emerald-600 font-bold">Intake Form</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Tell us about your project requirements and we'll help you find the perfect solution
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{getProgress()}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${getProgress()}%` }}
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
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                      <p className="text-slate-600">Let's start with your contact details</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="full_name"
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

                      <FormField
                        control={form.control}
                        name="job_title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company_name"
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
                  </div>
                )}

                {/* Step 2: Company Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Company Details</h2>
                      <p className="text-slate-600">Tell us about your company</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="company_size"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 md:grid-cols-3 gap-4"
                            >
                              {['1-10', '11-50', '51-200', '201-1000', '1000+', 'Startup'].map((size) => (
                                <div key={size} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                                  <RadioGroupItem value={size} id={size} />
                                  <label htmlFor={size} className="cursor-pointer text-sm">{size === 'Startup' ? 'Startup' : `${size} employees`}</label>
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
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            >
                              {[
                                'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
                                'Manufacturing', 'Real Estate', 'Consulting', 'Media & Entertainment',
                                'Non-profit', 'Government', 'Other'
                              ].map((industry) => (
                                <div key={industry} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                                  <RadioGroupItem value={industry} id={industry} />
                                  <label htmlFor={industry} className="cursor-pointer text-sm">{industry}</label>
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
                      name="annual_revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Annual Revenue *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            >
                              {[
                                'Under $1M', '$1M - $5M', '$5M - $10M', '$10M - $50M', 
                                'Over $50M', 'Pre-revenue'
                              ].map((revenue) => (
                                <div key={revenue} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                                  <RadioGroupItem value={revenue} id={revenue} />
                                  <label htmlFor={revenue} className="cursor-pointer text-sm">{revenue}</label>
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
                      name="website_url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourcompany.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 3: Project Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Project Information</h2>
                      <p className="text-slate-600">Tell us about your project needs</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="project_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            >
                              {[
                                'Web Development', 'Mobile App', 'Software Development', 'Data Science',
                                'AI/ML Project', 'DevOps/Infrastructure', 'Design & UX', 'Consulting',
                                'Staff Augmentation', 'Other'
                              ].map((type) => (
                                <div key={type} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                                  <RadioGroupItem value={type} id={type} />
                                  <label htmlFor={type} className="cursor-pointer text-sm">{type}</label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="project_budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Budget *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {[
                                  'Under $10K', '$10K - $25K', '$25K - $50K', '$50K - $100K',
                                  '$100K - $250K', 'Over $250K'
                                ].map((budget) => (
                                  <div key={budget} className="flex items-center space-x-2">
                                    <RadioGroupItem value={budget} id={budget} />
                                    <label htmlFor={budget} className="cursor-pointer text-sm">{budget}</label>
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
                        name="project_timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Timeline *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {[
                                  'Less than 1 month', '1-3 months', '3-6 months', 
                                  '6-12 months', 'More than 12 months', 'Ongoing'
                                ].map((timeline) => (
                                  <div key={timeline} className="flex items-center space-x-2">
                                    <RadioGroupItem value={timeline} id={timeline} />
                                    <label htmlFor={timeline} className="cursor-pointer text-sm">{timeline}</label>
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
                      name="project_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your project in detail. What are you looking to build? What problems are you trying to solve?"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 4: Requirements */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
                      <p className="text-slate-600">Specify your team and technical requirements</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="required_skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Required Skills & Technologies *</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto border rounded-lg p-4">
                              {skillOptions.map((skill) => (
                                <div key={skill} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={skill}
                                    checked={field.value?.includes(skill) || false}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([...field.value, skill]);
                                      } else {
                                        field.onChange(field.value.filter((s) => s !== skill));
                                      }
                                    }}
                                  />
                                  <label htmlFor={skill} className="text-sm cursor-pointer">{skill}</label>
                                </div>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="team_size_needed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Team Size Needed *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {['1 person', '2-3 people', '4-5 people', '6-10 people', 'More than 10'].map((size) => (
                                  <div key={size} className="flex items-center space-x-2">
                                    <RadioGroupItem value={size} id={size} />
                                    <label htmlFor={size} className="cursor-pointer text-sm">{size}</label>
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
                        name="work_arrangement"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Arrangement *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-2"
                              >
                                {['Fully Remote', 'Hybrid', 'On-site', 'Flexible'].map((arrangement) => (
                                  <div key={arrangement} className="flex items-center space-x-2">
                                    <RadioGroupItem value={arrangement} id={arrangement} />
                                    <label htmlFor={arrangement} className="cursor-pointer text-sm">{arrangement}</label>
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
                      name="start_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Start Date *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 md:grid-cols-3 gap-3"
                            >
                              {[
                                'Immediately', 'Within 1 week', 'Within 2 weeks', 
                                'Within 1 month', 'Within 3 months', 'Flexible'
                              ].map((date) => (
                                <div key={date} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                                  <RadioGroupItem value={date} id={date} />
                                  <label htmlFor={date} className="cursor-pointer text-sm">{date}</label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="previous_experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Experience with Similar Projects (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about any previous experience with similar projects or teams"
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
                        name="specific_requirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specific Requirements or Preferences (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific requirements, preferences, or additional information"
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
                        name="how_did_you_hear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you hear about us? (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Google, referral, social media, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t">
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
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Form
                          <Upload className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </Card>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewIntakeForm;