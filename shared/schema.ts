import { z } from "zod";

// Service Schema
export const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  intro: z.string(),
  description: z.string(),
  benefits: z.array(z.string()),
  heroImage: z.string(),
  gallery: z.array(z.string()),
  icon: z.string().optional(),
});

export type Service = z.infer<typeof serviceSchema>;

// Project Schema
export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  challenge: z.string(),
  approach: z.string(),
  outcome: z.string(),
  stats: z.object({
    duration: z.string(),
    budgetRange: z.string(),
    location: z.string(),
  }),
  images: z.array(z.string()),
  serviceTags: z.array(z.string()),
  featured: z.boolean().optional(),
});

export type Project = z.infer<typeof projectSchema>;

// Testimonial Schema
export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  company: z.string(),
  role: z.string().optional(),
  quote: z.string(),
  image: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Company Info Schema
export const companySchema = z.object({
  name: z.string(),
  tagline: z.string(),
  abn: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.object({
    street: z.string(),
    suburb: z.string(),
    state: z.string(),
    postcode: z.string(),
  }),
  hours: z.string(),
  socials: z.object({
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
  }),
  mapEmbedUrl: z.string().optional(),
});

export type Company = z.infer<typeof companySchema>;

// Team Member Schema
export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string().optional(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Careers Form Schema
export const careersFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  roleInterest: z.string().min(1, "Please select a role"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  resumeUrl: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type CareersForm = z.infer<typeof careersFormSchema>;
