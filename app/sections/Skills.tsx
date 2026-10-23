import { Content, Heading } from "~/components/Elements";

export function Skills() {
  return (
    <Content>
      <Heading as="h2">Skills</Heading>
      <ul className="mt-4 space-y-2">
        {SKILLS.map(([group, list]) => (
          <li key={group}>
            <span className="font-bold">{group}:</span> {list}
          </li>
        ))}
      </ul>
    </Content>
  );
}

const SKILLS = [
  [
    "Frontend",
    "React, TypeScript, JavaScript, Next.js, Tailwind CSS, Styled Components, Emotion, SCSS, Storybook, Micro Frontends, Design Systems, Three.js",
  ],
  ["Backend", "Node.js, Go, GraphQL, REST APIs, PHP, Laravel, TypeORM, Prisma"],
  ["Data", "PostgreSQL, MySQL, Redis, Firebase"],
  ["Testing & DevOps", "Jest, Cypress, Docker, Nginx, Git, CI/CD"],
  ["AI", "Claude, AI-assisted development, agentic workflows, agent skills"],
  ["Languages", "Portuguese (native), English (fluent)"],
];
