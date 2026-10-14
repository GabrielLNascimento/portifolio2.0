export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    siteUrl?: string;
    githubUrl?: string;
    previewUrl?: string;
}
