export interface Education {
  institution: string;
  program: string;
  period: string;
  type: "degree" | "course";
  courses?: string[];
  url?: string;
}

export const education: Education[] = [
  {
    institution: "IT-Högskolan",
    program: ".NET Developer (YH)",
    period: "2023 - 2025",
    type: "degree",
    courses: [
      "C# Programming",
      "Database Development and Administration",
      "Web Development with C#",
      "Agile Development",
      "Clean Code and Testable Code",
      "Internships (LIA)",
      "Customer Understanding, Consulting Skills, and Reporting",
    ],
    url: "https://www.iths.se/",
  },
];
