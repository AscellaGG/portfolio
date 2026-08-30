export interface Project {
  title: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Theme Manager for Mint (Cinnamon)",
    description:
      "After switching to Linux and Mint, I found myself intrigued by the customizability. At first, I wanted to create my own Cinnamon theme, but I needed it to match with kitty and all my other things, and what if I wanted to change themes? This evolved to wanting to create my own theme manager!",
    url: "https://github.com/AscellaGG/theme-manager",
  },
  {
    title: "SQL Data Warehouse",
    description: "A SQL Data Warehouse project.",
    url: "https://github.com/AscellaGG/sql-data-warehouse-project",
  },
  {
    title: "Machine Learning",
    description: "A machine learning project using Californa housing data.",
    url: "https://github.com/AscellaGG/CaliforniaHousingML",
  },
];
