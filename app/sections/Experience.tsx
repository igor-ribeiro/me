import { Content, Heading } from "~/components/Elements";

export function Experience() {
  return (
    <Content>
      <Heading as="h2">Experience</Heading>
      {JOBS.map((job) => (
        <div key={job.company} className="mt-6">
          <Heading as="h3" className="mb-0 text-zinc-100">
            {job.role}, {job.company}
          </Heading>
          <p className="text-sm italic text-zinc-400">{job.info}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {job.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Content>
  );
}

const JOBS = [
  {
    role: "Full Stack Developer",
    company: "Galley Solutions",
    info: "Jul 2022 – Jun 2026 · Remote (San Diego, US) · B2B SaaS for food production",
    items: [
      "Led the full stack build of USDA Food Program support (NSLP, CACFP) in the Menu Planner, across React, Go, Node, GraphQL and PostgreSQL; menus now auto-calculate ingredient and recipe quantities from headcounts per age group, applying each program's requirements automatically.",
      "Built a drag-and-drop Document Builder with a GraphQL-to-JavaScript data pipeline that generates print labels, invoices and production sheets dynamically from live product data.",
      "Added an AI agent skill to the Document Builder so users and agents generate documents from natural-language prompts.",
      "Owned the core product SPA (React, TypeScript, Tailwind) for 4 years, delivering ongoing features alongside the larger projects above.",
      "Implemented frontend event tracking (page views, load times, interactions), giving product its first view of real app usage.",
      "Built an interactive onboarding tutorial with Driver.js to improve the new-user experience.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Trafilea",
    info: "Dec 2021 – Jul 2022 · Remote (Montevideo, Uruguay) · E-commerce",
    items: [
      "Restructured a Micro Frontend headless checkout (Next.js, TypeScript), using Git Submodules to share code across independently deployed pages and fixing cross-project type errors.",
      "Built a CLI that scaffolds a new Micro Frontend page instantly from a template; configured Nginx to serve all pages on one port locally.",
      "Built the design system for a new e-commerce store from scratch, from theming to components.",
      "Served as the team's React reference: owned code quality, guided React practices and took part in technical hiring.",
    ],
  },
  {
    role: "Full Stack Developer / Tech Lead",
    company: "Beyoung",
    info: "Sep 2017 – Dec 2021 · São Paulo, Brazil · Beauty and skincare e-commerce",
    items: [
      "Built a website compiler with custom Babel plugins that converted React pages to JSON and back, so one codebase produced builds per brand, domain, device and A/B test.",
      "Led a new e-commerce platform from scratch (Next.js, TypeScript) as Tech Lead, guiding the other developers through the build.",
      "Built a Survey service (Node, TypeORM, MySQL) with templates and multi-channel delivery over SMS, WhatsApp and email.",
      "Built a web app that drove in-store hardware over Bluetooth, recommending products from face analysis.",
      "Synced video playback across a large LED/mirror installation at a live event using Firebase Realtime Database.",
      "Prototyped a 3D before/after skincare visualization in Three.js.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GFG (Dafiti, Kanui, Tricae)",
    info: "Dec 2015 – Sep 2017 · São Paulo, Brazil · Fashion e-commerce",
    items: [
      "Led the migration of Dafiti's internal tools from jQuery to Vue, building every UI component without dedicated designers.",
      "Led the migration of Kanui and Tricae warehouse software from jQuery to Angular and improved its UX for warehouse staff.",
    ],
  },
  {
    role: "Web Developer",
    company: "Projecto Comunicação",
    info: "Feb 2015 – Nov 2015 · São Paulo, Brazil",
    items: [
      "Built client websites with WordPress and jQuery, moving into Laravel and Angular.",
    ],
  },
  {
    role: "Developer and Designer",
    company: "Instituto Sapiens Vita",
    info: "Jul 2012 – Jan 2015 · São Paulo, Brazil",
    items: [
      "Started as a logistics intern; taught myself to code and built an internal web app that tracked orders and automated customer emails, which became a full role building internal tools, the company website and design work.",
    ],
  },
];
