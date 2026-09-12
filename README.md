# Aurora Clinic — Aesthetics Website

Aurora Clinic is a premium, responsive aesthetics website concept created for a personal portfolio. The project explores how a fictional clinic could communicate personalized care, natural-looking outcomes, and a calm editorial visual identity through a focused digital experience.

> **Portfolio concept:** Aurora Clinic is a fictional brand. This website does not represent a real clinic, medical practice, healthcare provider, professional, patient, treatment, result, address, or contact service.

## About the project

The interface represents a digital presence for an aesthetics clinic whose visitors are looking for trustworthy information, a refined experience, and a clear first step toward an evaluation. Its audience is conceptual: people interested in facial aesthetics, skin care, personalized protocols, and natural-looking approaches.

The experience prioritizes:

- Clear navigation between institutional, service, team, results, FAQ, and contact content.
- A calm, premium visual language rather than a clinical or overly promotional presentation.
- Editorial storytelling supported by generous spacing, serif typography, restrained color, and photography.
- Conversion-oriented calls to action that remain explicitly demonstrative within the portfolio scope.
- Responsive behavior for desktop and mobile layouts.

## Preview

[Open the live demonstration](https://v0-clinicaaurora.vercel.app)

No repository screenshots are included in this documentation because the project currently has no dedicated screenshot assets.

## Main characteristics

- Responsive layout with mobile navigation.
- Multi-page navigation using the Next.js App Router.
- Hero, manifesto, values, procedures, institutional, team, results, testimonial, FAQ, CTA, and footer sections.
- Procedure presentation with indications, benefit tags, and links to the contact route.
- Fictional professional profiles and conceptual team descriptions.
- Results and inspiration gallery using remote Unsplash image URLs.
- Interactive FAQ accordion with accessible expanded state and answer relationships.
- Demonstrative WhatsApp CTAs with a pre-filled message.
- Semantic elements including `main`, `section`, `article`, `header`, `nav`, and `footer`.
- Visible keyboard focus states through `:focus-visible`.
- Subtle hover and transition effects for links, buttons, images, and the floating CTA.
- Metadata, Open Graph metadata, responsive viewport configuration, and production-only Vercel Analytics rendering.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage presenting the complete Aurora Clinic concept and its primary conversion paths. |
| `/procedimentos` | Detailed presentation of the four conceptual care possibilities. |
| `/sobre` | Institutional story and the fictional clinic philosophy. |
| `/profissionais` | Presentation of the fictional professionals created for the interface. |
| `/resultados` | Demonstrative results and inspiration gallery. |
| `/faq` | Full interactive FAQ experience. |
| `/contato` | Demonstrative contact and evaluation-start page. |

## Technologies

### Framework and language

- Next.js `16.3.3` with the App Router
- React `19`
- TypeScript `5.7.3`

### UI and styling

- Tailwind CSS `4.3.3` through the project’s PostCSS setup
- `@base-ui/react`
- `shadcn` project configuration
- `tw-animate-css`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

### Icons and analytics

- `lucide-react` for interface icons
- `@vercel/analytics` for production analytics rendering

### Deployment

- The application is configured as a Next.js project and is deployed through Vercel for the live demonstration.

## Architecture

The project keeps the page composition in a shared client component. `AuroraSite` reads the current pathname and renders the homepage or the corresponding conceptual inner-page content. Shared elements such as the header, mobile menu, footer, CTA, FAQ accordion, procedure cards, and section headings are defined in `components/aurora-site.tsx`.

Global design tokens, layout rules, responsive breakpoints, typography, focus states, and component styling are defined in `app/globals.css`. Page-level metadata is defined in the route files and the root layout.

### Relevant structure

```text
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── procedimentos/page.tsx
│   ├── sobre/page.tsx
│   ├── profissionais/page.tsx
│   ├── resultados/page.tsx
│   ├── faq/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── aurora-site.tsx
│   └── ui/button.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── icon.svg
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   └── apple-icon.png
├── next.config.mjs
├── postcss.config.mjs
├── components.json
├── package.json
└── tsconfig.json
```

## Design and visual identity

The visual direction combines an editorial aesthetic with a warm, approachable wellness tone. The interface uses a deep wine primary color, soft blush and muted cream surfaces, dark ink text, and muted secondary text. The exact CSS tokens currently defined are:

- Background / cream: `#f7f3ef`
- Foreground / ink: `#2f2527`
- Primary / wine: `#642f3f`
- Muted: `#eae1dc`
- Muted foreground: `#74666a`
- Border: `#ded2cc`
- Rose: `#d8b9b3`
- Blush: `#ead7d2`

Typography uses `Inter` for interface and body copy and `Cormorant Garamond` for expressive serif headings and editorial details. Remote photography is intentionally treated with reduced saturation to support the restrained palette. The layout uses large type, clear hierarchy, asymmetric compositions, generous spacing, and responsive grid-to-stack transitions.

## Responsiveness and accessibility

The stylesheet includes responsive breakpoints at `800px` and `390px`. On smaller screens, desktop navigation is replaced by an interactive mobile menu, multi-column content becomes stacked or simplified, typography scales down, and imagery receives mobile-specific dimensions.

Implemented accessibility-related practices include:

- `lang="pt-BR"` on the root HTML element.
- Descriptive `alt` text for content images.
- Accessible labels for the mobile menu and floating WhatsApp action.
- `aria-expanded` and `aria-controls` on FAQ controls.
- FAQ answer regions linked to their corresponding questions with `aria-labelledby`.
- Semantic HTML structure for major page regions and content groups.
- Visible `:focus-visible` outlines using the wine theme color.
- Interactive controls that can be reached through normal keyboard navigation.

The visual design is intended to maintain readable contrast, although the project is a visual portfolio concept and does not include a formal automated accessibility audit.

## SEO

The root layout defines:

- Portuguese document language (`pt-BR`).
- Site title and description.
- Open Graph title, description, and `website` type.
- Theme color and color scheme viewport configuration.
- Light, dark, SVG, and Apple icon references from `public/`.

Each inner route also defines its own title and description metadata. There is no structured data or sitemap implementation in the current project.

## Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The repository includes a `pnpm` package manager declaration, but the commands above intentionally use `npm` as the project documentation standard.

## Scripts

The following scripts are defined in `package.json`:

```bash
npm run dev      # Start the Next.js development server
npm run build    # Create a production build
npm run start    # Start the production server
```

## Build and deployment

Create a production build with:

```bash
npm run build
```

The project is a Next.js application configured for Vercel deployment. The live conceptual demonstration is available at [v0-clinicaaurora.vercel.app](https://v0-clinicaaurora.vercel.app).

The current `next.config.mjs` enables unoptimized images and ignores TypeScript build errors. This configuration is part of the current project state and should be reviewed before using the project as a production healthcare website.

## Environment variables

No application-specific environment variables are required by the current source code. The only environment check in the code is `NODE_ENV`, used to render Vercel Analytics only in production. There is no database, CMS, authentication provider, API, or server-side form integration in the current implementation.

## Project status

**Status: Completed — Conceptual project**

Aurora Clinic is complete as a portfolio-oriented design and frontend development demonstration. It is intentionally scoped as a static, fictional experience rather than a real clinic platform.

## Limitations

- The clinic, professionals, content, testimonials, results, and institutional details are fictional or conceptual.
- Procedure and team data are defined statically in `components/aurora-site.tsx`.
- Images are loaded from remote Unsplash URLs rather than managed through a CMS or local content pipeline.
- WhatsApp links open a demonstrative pre-filled action and do not connect to a real clinic number.
- The contact route is demonstrative and has no form processing or appointment scheduling backend.
- There is no database, CMS, authentication, payments, or real patient-data handling.
- The project does not provide medical advice or aesthetic services.

## Possible next steps

These are future possibilities only and are not implemented in the current project:

- Connect the contact flow to a secure backend or appointment scheduling service.
- Replace static content with a CMS-managed procedure, team, and editorial model.
- Configure a real WhatsApp Business destination and operational contact details.
- Add analytics events for CTA engagement and navigation behavior.
- Add automated accessibility, link, and visual regression testing.
- Review image licensing, performance, and responsive image delivery for production use.

## Credits

Designed and developed by **Cauã Francisco Costa**.

- Portfolio: [cauacosta.vercel.app](https://cauacosta.vercel.app)
- Demonstration: [v0-clinicaaurora.vercel.app](https://v0-clinicaaurora.vercel.app)

## Important notice

Aurora Clinic is a fictional brand created exclusively for design, frontend development, and portfolio demonstration. No professional, testimonial, address, phone number, procedure, result, or other institutional information shown in this project should be treated as real. This website does not represent a real clinic and does not provide medical or aesthetic services.
