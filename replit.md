# Lundy Building Group Website

## Overview

This is a modern marketing website for Lundy Building Group, a Sydney-based construction company established in 1975. The application is built as a full-stack web application using React for the frontend and Express for the backend, with content managed through JSON files for easy updates. The site showcases the company's services, projects, testimonials, and provides functional contact and careers forms with email delivery capabilities.

The website emphasizes the company's maroon brand identity (#800000 primary, #C7A86D gold accent) and features professional construction imagery, SEO optimization, WCAG 2.1 AA accessibility compliance, and optional Google Analytics integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter (lightweight React router alternative). The routing structure includes:
- Public pages: Home, About, Services, Projects, Safety & Compliance, Testimonials, Careers, Contact
- Dynamic routes: Service detail pages (`/services/:slug`) and Project detail pages (`/projects/:slug`)
- Legal pages: Privacy Policy, Terms of Service
- 404 Not Found page

**UI Component Library**: shadcn/ui components built on top of Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling. The component system uses the "new-york" style variant with CSS variables for theming.

**State Management**: React Query (TanStack Query) for server state management, data fetching, and caching. Local component state managed with React hooks.

**Styling**: Tailwind CSS with custom configuration extending the base theme for brand colors, typography (Playfair Display for headings, Inter for body text), and spacing. Custom CSS variables define light/dark mode color schemes with hover/active elevation states.

**Form Handling**: React Hook Form with Zod for schema validation, providing type-safe form validation and error handling.

**Design System**: Custom design based on construction industry aesthetics with emphasis on trust, heritage, and craftsmanship. Uses maroon as primary color with gold accents, following WCAG AA contrast requirements.

### Backend Architecture

**Framework**: Express.js server with TypeScript, serving both API endpoints and static frontend assets.

**Content Storage**: JSON-based file storage system for static content (services, projects, testimonials, company information). Files located in `server/data/` directory provide a simple CMS-like capability without database complexity.

**API Design**: RESTful API endpoints serving:
- Services: `/api/services`, `/api/services/:slug`
- Projects: `/api/projects`, `/api/projects/featured`, `/api/projects/:slug`
- Testimonials: `/api/testimonials`
- Company info: `/api/company`
- Form submissions: `/api/contact`, `/api/careers`

**Form Processing**: Contact and careers form submissions with:
- Server-side validation using Zod schemas
- Honeypot spam protection
- Rate limiting (in-memory store: 3 submissions per 15-minute window per IP)
- Email delivery integration ready for Resend API (falls back to console logging in development)

**Development/Production Modes**: 
- Development: Vite dev server with HMR, runtime error overlays, Replit-specific plugins
- Production: Pre-built static assets served from `dist/public`, bundled server code

**Middleware**: Request logging, JSON body parsing, URL encoding, error handling with appropriate status codes.

### Data Storage Solutions

**Primary Storage**: File-based JSON storage via `JSONStorage` class in `server/storage.ts`. This approach was chosen for:
- Simple content management without database overhead
- Easy content updates by editing JSON files
- Version control friendly (JSON files tracked in git)
- Suitable for static/semi-static content that doesn't change frequently

**Database Configuration**: The project includes Drizzle ORM configuration (`drizzle.config.ts`) and database schema (`shared/schema.ts`) for potential future PostgreSQL integration via Neon serverless. Currently configured but not actively used - the application relies on JSON file storage instead.

**Form Submissions**: Currently processed via email delivery (no database persistence). Rate limiting uses in-memory Map storage, which resets on server restart (acceptable for development, could be upgraded to Redis for production).

### Authentication and Authorization

**Current Implementation**: No authentication system implemented. The website is a public marketing site with no user accounts or protected content.

**Form Security**: 
- Honeypot fields for bot detection
- Rate limiting by IP address
- Server-side validation with Zod schemas
- CORS protection through Express defaults

### External Dependencies

**Email Service**: Resend API integration for transactional emails (contact form, careers applications). Configuration via environment variables (`RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`). Gracefully degrades to console logging when not configured.

**Font Loading**: Google Fonts CDN for:
- Playfair Display (serif, headings)
- Inter (sans-serif, body text)

**Image Assets**: Stock construction images stored in `attached_assets/stock_images/` directory, referenced throughout the application for hero images, service cards, and project showcases.

**UI Components**: Heavy reliance on Radix UI primitives (@radix-ui/*) for accessible component foundations including dialogs, dropdowns, navigation, tooltips, and form controls.

**Build Tools**: 
- Vite for frontend bundling and dev server
- esbuild for server-side bundling
- TypeScript compilation
- Tailwind CSS with PostCSS

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal
- @replit/vite-plugin-cartographer
- @replit/vite-plugin-dev-banner

**Analytics**: Google Analytics integration referenced in HTML template (optional, controlled by client).

**SEO**: JSON-LD structured data for business information, meta tags for social sharing, sitemap.xml and robots.txt (referenced but implementation details not shown in provided files).