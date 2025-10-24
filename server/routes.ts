import type { Express } from "express";
import { storage } from "./storage";
import { sendContactEmail, sendCareersEmail, checkRateLimit } from "./email";
import { contactFormSchema, careersFormSchema } from "../shared/schema";
import { ZodError } from "zod";

export function registerRoutes(app: Express) {
  // Content API routes
  app.get("/api/services", async (_req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:slug", async (req, res) => {
    try {
      const service = await storage.getServiceBySlug(req.params.slug);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/featured", async (_req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      res.status(500).json({ error: "Failed to fetch featured projects" });
    }
  });

  app.get("/api/projects/:slug", async (req, res) => {
    try {
      const project = await storage.getProjectBySlug(req.params.slug);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.get("/api/company", async (_req, res) => {
    try {
      const company = await storage.getCompany();
      res.json(company);
    } catch (error) {
      console.error("Error fetching company info:", error);
      res.status(500).json({ error: "Failed to fetch company info" });
    }
  });

  // Form submission routes with validation and rate limiting
  app.post("/api/contact", async (req, res) => {
    try {
      // Rate limiting
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      if (!checkRateLimit(ip)) {
        return res.status(429).json({ 
          error: "Too many submissions. Please try again later." 
        });
      }

      // Validate request body
      const data = contactFormSchema.parse(req.body);

      // Honeypot check
      if (data.honeypot && data.honeypot.length > 0) {
        console.log("⚠️ Honeypot triggered, ignoring submission");
        return res.json({ success: true }); // Fake success to fool bots
      }

      // Send email
      const emailSent = await sendContactEmail(data);
      
      if (!emailSent) {
        return res.status(500).json({ 
          error: "Failed to send email. Please try again or call us directly." 
        });
      }

      res.json({ success: true });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          error: "Invalid form data",
          details: error.errors 
        });
      }
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  app.post("/api/careers", async (req, res) => {
    try {
      // Rate limiting
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      if (!checkRateLimit(ip)) {
        return res.status(429).json({ 
          error: "Too many submissions. Please try again later." 
        });
      }

      // Validate request body
      const data = careersFormSchema.parse(req.body);

      // Honeypot check
      if (data.honeypot && data.honeypot.length > 0) {
        console.log("⚠️ Honeypot triggered, ignoring submission");
        return res.json({ success: true }); // Fake success to fool bots
      }

      // Send email
      const emailSent = await sendCareersEmail(data);
      
      if (!emailSent) {
        return res.status(500).json({ 
          error: "Failed to send email. Please try again or call us directly." 
        });
      }

      res.json({ success: true });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          error: "Invalid form data",
          details: error.errors 
        });
      }
      console.error("Error processing careers form:", error);
      res.status(500).json({ error: "Failed to process careers form" });
    }
  });

  // Robots.txt
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Sitemap: ${process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}/sitemap.xml` : 'https://www.lundybuilding.com.au/sitemap.xml'}
`);
  });

  // Sitemap.xml
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const baseUrl = process.env.REPLIT_DEV_DOMAIN 
        ? `https://${process.env.REPLIT_DEV_DOMAIN}` 
        : 'https://www.lundybuilding.com.au';

      const services = await storage.getServices();
      const projects = await storage.getProjects();

      const staticPages = [
        { url: '', priority: '1.0', changefreq: 'weekly' },
        { url: '/about', priority: '0.8', changefreq: 'monthly' },
        { url: '/services', priority: '0.9', changefreq: 'weekly' },
        { url: '/projects', priority: '0.9', changefreq: 'weekly' },
        { url: '/safety-and-compliance', priority: '0.7', changefreq: 'monthly' },
        { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
        { url: '/careers', priority: '0.6', changefreq: 'weekly' },
        { url: '/contact', priority: '0.8', changefreq: 'monthly' },
        { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
        { url: '/terms', priority: '0.3', changefreq: 'yearly' },
      ];

      const servicePages = services.map(s => ({
        url: `/services/${s.slug}`,
        priority: '0.8',
        changefreq: 'monthly'
      }));

      const projectPages = projects.map(p => ({
        url: `/projects/${p.slug}`,
        priority: '0.7',
        changefreq: 'monthly'
      }));

      const allPages = [...staticPages, ...servicePages, ...projectPages];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      res.type("application/xml");
      res.send(sitemap);
    } catch (error) {
      console.error("Error generating sitemap:", error);
      res.status(500).send("Error generating sitemap");
    }
  });
}
