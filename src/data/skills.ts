export interface Skill {
  category: string;
  skills: string[];
}

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    skills: ["C#", "Python", "JavaScript"],
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Svelte"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "Data Vault", "Data Warehouse"],
  },
  {
    category: "Methodologies",
    skills: ["Software Testing", "Agile Development"],
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "MacOS", "Linux"],
  },
];
