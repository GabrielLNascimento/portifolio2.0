import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "WebCarros",
        description:
            "Aplicação web para anunciar e gerenciar veículos, com autenticação, banco de dados e interface responsiva.",
        image: "/projetos/webcarros.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        siteUrl: "https://web-carros-virid.vercel.app/",
        githubUrl: "https://github.com/gabrielliz25/web-carros",
        previewUrl: "https://web-carros-virid.vercel.app/",
    },
    {
        id: 2,
        title: "Impostor Game",
        description:
            "Jogo multiplayer de dedução social em que os jogadores precisam descobrir o impostor enquanto ele tenta manter sua identidade em segredo.",
        image: "/projetos/impostorGame.png",
        technologies: ["React", "Javascript"],
        siteUrl: "https://impostor-game-plum.vercel.app/",
        githubUrl:
            "https://github.com/GabrielLNascimento/impostor-game/tree/main",
        previewUrl: "https://impostor-game-plum.vercel.app/",
    },

    {
        id: 3,
        title: "Mimix",
        description:
            "Jogo multiplayer de dedução social em que os jogadores precisam descobrir o impostor enquanto ele tenta manter sua identidade em segredo.",
        image: "/projetos/mimix.png",
        technologies: ["React", "Javascript", "Context API"],
        siteUrl: "https://mimix-hazel.vercel.app/",
        githubUrl:
            "https://github.com/GabrielLNascimento/mimix",
        previewUrl: "https://mimix-hazel.vercel.app/",
    },
];
