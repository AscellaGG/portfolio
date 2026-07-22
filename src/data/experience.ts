export interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Prinsparents Stiftelse",
    url: "https://www.prinsparetsstiftelse.se/",
    role: "Consultant",
    period: "2026",
    description:
      "Supporting the organization with requirements for website development.",
  },
  {
    company: "VoteIT",
    url: "https://voteit.se",
    role: "Freelance Software Tester",
    period: "2025-2026",
    description: "Acceptance-testing of platform.",
  },
  {
    company: "auticon (fd. Unicus)",
    url: "https://auticon.com/se/",
    role: "Intern",
    period: "October 2025 - January 2026",
    description:
      "Earned certifications in ISTQB Foundation Level and Microsoft Azure Fundamentals. Strengthened my knowledge of software testing and testing methodologies. Built a Data Warehouse as part of the training program.",
    technologies: ["Software Testing, Azure, Data Warehouse"],
  },
  {
    company: "Bulbul",
    url: "https://www.bulbul.se/",
    role: "Project Consultant",
    period: "Summer 2025",
    description:
      "Continued development of the BMT project from the previous internship. Delivered an MVP that exceeded the company's expectations.",
    technologies: [],
  },
  {
    company: "Bulbul",
    url: "https://www.bulbul.se/",
    role: "Intern",
    period: "Spring 2025",
    description:
      "Independently developed a .NET API that integrated with Bulbul's internal BAT tools. Worked with data modeling and SQL Server.",
    technologies: [],
  },
];
