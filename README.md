# Lundy Building Group Website

A modern, professional, and fully accessible marketing website for Lundy Building Group - Sydney's trusted construction specialists since 1975.

## 🎯 Project Overview

This website is built with React, Vite, Express, and TypeScript, featuring:
- **Maroon brand design** (#800000 primary, #C7A86D gold accent)
- **Professional construction imagery** showcasing services and projects
- **Content managed via JSON files** for easy updates
- **Functional contact and careers forms** with email delivery
- **SEO optimized** with sitemap, robots.txt, and JSON-LD structured data
- **WCAG 2.1 AA accessibility compliant**
- **Google Analytics integration** (optional)
- **Production-ready deployment** on Replit

## 📁 Project Structure

```
├── attached_assets/          # Stock images for the website
│   └── stock_images/         # Construction and project images
├── client/                   # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── layout/      # Header, Footer
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── pages/           # All page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── SafetyCompliance.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Careers.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Privacy.tsx
│   │   │   ├── Terms.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx          # Main app with routing
│   │   └── index.css        # Global styles with brand colors
│   └── index.html           # HTML template with SEO meta tags
├── server/                  # Backend Express server
│   ├── data/               # Content JSON files (EDIT THESE!)
│   │   ├── services.json
│   │   ├── projects.json
│   │   ├── testimonials.json
│   │   └── company.json
│   ├── routes.ts           # API routes
│   ├── storage.ts          # JSON file storage
│   ├── email.ts            # Email service (Resend integration)
│   └── index.ts            # Server entry point
├── shared/
│   └── schema.ts           # TypeScript type definitions
├── design_guidelines.md    # Design system documentation
└── README.md               # This file
```

## 🎨 Brand Colors

The website uses a sophisticated maroon and gold color palette:

- **Primary (Maroon):** `#800000` - Main brand color, used for header, CTA buttons, accents
- **Accent (Gold):** `#C7A86D` - Secondary color for highlights and decorative elements
- **Background:** Light neutral grays for clean, professional appearance
- **Typography:** Playfair Display (headings) + Inter (body text)

## ✏️ How to Edit Website Content (Non-Technical Guide)

You can update all content on the website by editing simple text files in the `server/data/` folder. **No coding knowledge required!**

### 📝 Editing Services

**File:** `server/data/services.json`

Each service has:
- `slug`: URL-friendly name (don't change unless you understand URLs)
- `title`: Service name shown on website
- `intro`: Short description (1-2 sentences)
- `description`: Full description (2-3 paragraphs)
- `benefits`: List of bullet points (6 items recommended)

**Example:**
```json
{
  "slug": "educational-institutions",
  "title": "Educational Institutions",
  "intro": "Specialized construction and maintenance services...",
  "description": "For nearly five decades, Lundy Building Group...",
  "benefits": [
    "Minimal disruption to school operations",
    "Enhanced safety protocols",
    "Experience with heritage facilities"
  ]
}
```

### 🏗️ Editing Projects

**File:** `server/data/projects.json`

Each project includes:
- `slug`: URL-friendly name
- `title`: Project name
- `summary`: Brief overview (1 sentence)
- `challenge`: The challenge section
- `approach`: Our approach section
- `outcome`: The result section
- `stats`: Duration, budget range, location
- `serviceTags`: Categories (matches service names)
- `featured`: `true` or `false` (shows on homepage if true)

**Tips:**
- Set `featured: true` for your best 3 projects to show on homepage
- Use realistic budget ranges: "$2M - $5M" or "$5M - $10M"
- Duration examples: "18 months", "24 months"

### 💬 Editing Testimonials

**File:** `server/data/testimonials.json`

Each testimonial has:
- `id`: Unique number (e.g., "1", "2", "3")
- `name`: Person's name
- `company`: Organization name
- `role`: Job title (optional)
- `quote`: The testimonial text

**Keep quotes:**
- Between 50-150 words
- Focused on specific benefits
- Professional in tone

### 🏢 Editing Company Information

**File:** `server/data/company.json`

Update your:
- Business name
- ABN
- Contact details (phone, email, address)
- Business hours
- Social media links

**Important:** After changing contact details here, you may also need to update them in the Footer component (`client/src/components/layout/Footer.tsx`) to keep everything synchronized.

### 💾 Saving Your Changes

1. **Edit the JSON file** in the Replit editor
2. **Save the file** (Cmd+S or Ctrl+S)
3. **The website updates automatically** - refresh your browser to see changes

**⚠️ Important JSON Rules:**
- Always use double quotes `"` not single quotes `'`
- Don't forget commas `,` between items
- Don't add a comma after the last item in a list
- If you see an error, check for missing quotes or commas

## 📧 Setting Up Email Delivery

The contact and careers forms need email credentials to send submissions.

### Using Resend (Recommended)

1. **Sign up at Resend.com** (https://resend.com)
2. **Get your API key** from the dashboard
3. **Verify your sending domain** (or use Resend's test domain for now)
4. **Add these secrets in Replit:**
   - Go to "Tools" → "Secrets" in Replit
   - Add three secrets:
     - `RESEND_API_KEY`: Your Resend API key
     - `EMAIL_FROM`: Sender email (e.g., `info@lundybuilding.com.au`)
     - `EMAIL_TO`: Where to receive form submissions (e.g., `info@lundybuilding.com.au`)

5. **Restart the application** after adding secrets

### Testing Email Forms

Without email credentials:
- Forms will still work
- Submissions are logged to the console
- No actual emails are sent

With email credentials:
- Forms send real emails to your specified address
- Includes all form data in a formatted email
- Automatic reply-to set to the submitter's email

## 🔍 SEO Features

The website is fully optimized for search engines:

- **Sitemap:** Automatically generated at `/sitemap.xml`
- **Robots.txt:** Available at `/robots.txt`
- **JSON-LD Structured Data:** Business information for Google
- **Meta Tags:** Proper titles and descriptions on all pages
- **Semantic HTML:** Proper heading hierarchy and landmarks
- **Fast Load Times:** Optimized images and code splitting

## ♿ Accessibility

The website meets WCAG 2.1 AA standards:
- Keyboard navigation supported
- Screen reader friendly
- Proper color contrast (4.5:1 minimum)
- Alt text on all images
- ARIA labels on interactive elements
- Focus indicators on all interactive elements

## 📊 Google Analytics (Optional)

To enable Google Analytics:

1. **Get your Measurement ID** from Google Analytics (starts with `G-`)
2. **Add it as a Replit secret:**
   - Secret name: `VITE_GA_MEASUREMENT_ID`
   - Secret value: Your measurement ID (e.g., `G-XXXXXXXXXX`)
3. **Restart the application**

Google Analytics will start tracking automatically once configured.

## 🚀 Publishing Your Website

The website is ready to deploy on Replit:

1. **Click "Deploy"** in the Replit interface
2. **Choose your deployment type** (Autoscale Deployment recommended)
3. **Configure your custom domain** (optional)
4. **Set up email credentials** (see Email Delivery section above)
5. **Monitor via the Replit dashboard**

The website will be live at your Replit domain or custom domain.

## 🛠️ Technical Information (For Developers)

### Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Backend:** Express.js, Node.js
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Styling:** Tailwind CSS
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Deployment:** Replit

### Development Commands

```bash
# Install dependencies (already done)
npm install

# Start development server (automatic)
npm run dev

# Build for production
npm run build
```

### API Endpoints

**Content (GET requests):**
- `/api/services` - All services
- `/api/services/:slug` - Individual service
- `/api/projects` - All projects
- `/api/projects/featured` - Featured projects only
- `/api/projects/:slug` - Individual project
- `/api/testimonials` - All testimonials
- `/api/company` - Company information

**Forms (POST requests):**
- `/api/contact` - Contact form submission
- `/api/careers` - Careers form submission

**SEO:**
- `/sitemap.xml` - Auto-generated sitemap
- `/robots.txt` - Robots configuration

### Security Features
- Rate limiting (3 submissions per 15 minutes per IP)
- Honeypot spam protection
- Zod schema validation
- CORS protection
- Input sanitization

## 📝 Content Management Tips

### Writing Effective Project Case Studies

Good case studies follow the **Challenge → Approach → Outcome** structure:

1. **Challenge:** What problem needed solving? What made it difficult?
2. **Approach:** How did you solve it? What was unique about your process?
3. **Outcome:** What was the result? Include specific achievements.

### Service Page Best Practices

- **Intro:** One compelling sentence explaining who it's for
- **Description:** 2-3 paragraphs covering expertise, approach, and value
- **Benefits:** 4-6 specific, measurable benefits
- **Use active voice:** "We deliver" not "Projects are delivered"
- **Focus on client outcomes:** What they gain, not just what you do

### Photo Guidelines

Current stock images can be replaced with:
- High-resolution photos (1920x1080 minimum)
- Professional quality (well-lit, in-focus)
- Relevant to construction industry
- Properly compressed (WebP format recommended)

Place new images in `attached_assets/stock_images/` and update JSON files to reference them.

## 🆘 Getting Help

### Common Issues

**Q: I edited the JSON but don't see changes**
- Make sure you saved the file
- Refresh your browser (hard refresh: Cmd+Shift+R or Ctrl+Shift+R)
- Check the console for JSON syntax errors

**Q: Forms submit but I don't get emails**
- Check that email secrets are configured (see Email Delivery section)
- Verify email addresses are correct
- Check Resend dashboard for delivery status

**Q: Site looks broken after editing**
- Likely a JSON syntax error - check for missing quotes or commas
- Revert your changes and try again
- Use a JSON validator tool online to check syntax

**Q: Need to add a new service or project**
- Copy an existing entry in the JSON file
- Modify all the fields
- Ensure the `slug` is unique and URL-friendly (lowercase, hyphens only)
- Save and refresh

### Support Contact

For technical issues or questions:
- **Email:** [Your support email]
- **Developer:** [Your name/company]

## 📄 License

This website is proprietary software developed for Lundy Building Group.

---

**Built with ❤️ for Lundy Building Group - Excellence in Construction Since 1975**
