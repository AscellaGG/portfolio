export interface Education {
  institution: string;
  credential?: string;
  program: string;
  period: string;
  type: "degree" | "course";
  courses?: string[];
  url?: string;
}

export const education: Education[] = [
  {
    institution: "IT-Högskolan",
    credential: "Vocational higher education diploma",
    program: ".NET Developer",
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
  {
    institution: "IT-Högskolan",
    program: "Python Programming for AI Development",
    type: "course",
    period: "2025",
  },
  {
    institution: "Linköping University",
    program: "Individual Courses",
    type: "degree",
    period: "2021-2023",
    courses: [
      "Imperative Programming",
      "Computer Environment Management",
      "Project: Building a Personal Computing Environment",
      "Elements of AI",
    ],
  },
];
