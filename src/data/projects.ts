export type ProjectCategory = "frontend" | "backend" | "fullstack";
export type ProjectType = "web" | "mobile";

export interface Project {
  id: string;
  type: ProjectType;
  category: ProjectCategory;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  // Web Projects
  {
    id: "portfolio",
    type: "web",
    category: "fullstack",
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    image: "/images/projects/portfolio.png",
    technologies: ["React", "Next.js", "GSAP", "Three.js", "Tailwind CSS"],
    liveUrl: "https://alaborde.github.io",
    githubUrl: "https://github.com/alaborde29/alaborde.github.io",
    featured: true,
    year: 2024,
  },
  {
    id: "nolosay",
    type: "web",
    category: "fullstack",
    titleKey: "projects.items.nolosay.title",
    descriptionKey: "projects.items.nolosay.description",
    image: "/images/projects/nolosay.png",
    technologies: ["React", "RedwoodJS", "MUI", "TypeScript"],
    liveUrl: "https://nolosay.com",
    featured: true,
    year: 2024,
  },
  {
    id: "github-projects",
    type: "web",
    category: "fullstack",
    titleKey: "projects.items.github.title",
    descriptionKey: "projects.items.github.description",
    image: "/images/projects/github-profile.png",
    technologies: ["React Native", "React", "Swift", "C++", "Python"],
    liveUrl: "https://github.com/alaborde29",
    githubUrl: "https://github.com/alaborde29",
    featured: false,
    year: 2024,
  },
  // Mobile Projects
  {
    id: "todolist",
    type: "mobile",
    category: "fullstack",
    titleKey: "projects.items.todolist.title",
    descriptionKey: "projects.items.todolist.description",
    image: "/images/projects/swift-todolist.png",
    technologies: ["Swift", "SwiftUI", "Firebase", "iOS"],
    githubUrl: "https://github.com/alaborde29/Swift-todolist",
    featured: true,
    year: 2023,
  },
  {
    id: "flashcard",
    type: "mobile",
    category: "fullstack",
    titleKey: "projects.items.flashcard.title",
    descriptionKey: "projects.items.flashcard.description",
    image: "/images/projects/swift-flashcard.png",
    technologies: ["Swift", "Firebase", "iOS"],
    githubUrl: "https://github.com/alaborde29/swift-flashcard",
    featured: true,
    year: 2023,
  },
  {
    id: "mybikerental",
    type: "mobile",
    category: "fullstack",
    titleKey: "projects.items.mybikerental.title",
    descriptionKey: "projects.items.mybikerental.description",
    image: "/images/projects/native-mybikerental.png",
    technologies: ["React Native", "Firebase", "iOS", "Android"],
    githubUrl: "https://github.com/alaborde29/MyBikeRentalApp",
    featured: true,
    year: 2023,
  },
];

export const getProjectsByType = (type: ProjectType) =>
  projects.filter((project) => project.type === type);

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
