import fs from "fs/promises";
import path from "path";
import type { Service, Project, Testimonial, Company, ContactForm, CareersForm } from "../shared/schema";

// File-based JSON storage for static content
export class JSONStorage {
  private dataDir = path.join(import.meta.dirname, "data");

  async getServices(): Promise<Service[]> {
    const data = await fs.readFile(path.join(this.dataDir, "services.json"), "utf-8");
    return JSON.parse(data);
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    const services = await this.getServices();
    return services.find(s => s.slug === slug) || null;
  }

  async getProjects(): Promise<Project[]> {
    const data = await fs.readFile(path.join(this.dataDir, "projects.json"), "utf-8");
    return JSON.parse(data);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    const projects = await this.getProjects();
    return projects.find(p => p.slug === slug) || null;
  }

  async getFeaturedProjects(): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter(p => p.featured);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const data = await fs.readFile(path.join(this.dataDir, "testimonials.json"), "utf-8");
    return JSON.parse(data);
  }

  async getCompany(): Promise<Company> {
    const data = await fs.readFile(path.join(this.dataDir, "company.json"), "utf-8");
    return JSON.parse(data);
  }
}

export const storage = new JSONStorage();
