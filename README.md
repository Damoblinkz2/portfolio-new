# Portfolio Template

A modern, responsive portfolio website template built with cutting-edge web technologies. This template provides a sleek and professional way to showcase your projects, experience, and skills.

## Tech Stack

This project leverages the following technologies and tools:

- **Framework:** Next.js 14.1.4 - A React framework for production-grade web applications
- **Language:** TypeScript 5 - For type-safe JavaScript development
- **Styling:** Tailwind CSS 3.3.0 - A utility-first CSS framework for rapid UI development
- **Animations:** Framer Motion 11.0.25 - A production-ready motion library for React
- **Deployment:** Vercel 34.0.0 - A platform for frontend frameworks and static sites
- **Linting:** ESLint 8 - A tool for identifying and reporting on patterns in JavaScript/TypeScript
- **Build Tools:**
  - PostCSS 8 - A tool for transforming CSS with JavaScript
  - Autoprefixer 10.0.1 - A PostCSS plugin to parse CSS and add vendor prefixes
- **Utilities:**
  - clsx 2.1.0 - A tiny utility for constructing className strings conditionally
  - tailwind-merge 2.2.2 - Utility for merging Tailwind CSS classes
  - tailwindcss-animate 1.0.7 - Tailwind CSS plugin for animations
  - mini-svg-data-uri 1.4.4 - A function to generate mini SVG data URIs

## Features

- Responsive design optimized for all devices
- Smooth animations and transitions
- Modular component architecture
- TypeScript for enhanced developer experience
- SEO-friendly with Next.js
- Easy deployment to Vercel

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-template.git
   cd portfolio-template
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting
- `npm run deploy` - Deploys the app to Vercel

## Project Structure

```
portfolio-template/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── data/                 # Static data files
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## Customization

1. Update the content in `data/index.ts` to personalize your portfolio
2. Modify components in the `components/` directory to match your design preferences
3. Adjust styles using Tailwind CSS classes or by editing `app/globals.css`
4. Configure deployment settings in `next.config.js` and `vercel.json` (if applicable)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)
