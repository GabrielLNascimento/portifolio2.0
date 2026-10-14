
import type { Project } from "../../types/project";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
    project: Project;
}

const Card = ({ project }: ProjectCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-[#134647] bg-[#001311] transition-all duration-300 hover:-translate-y-1 hover:border-[#0c7e7e] hover:shadow-[0_0_25px_#0c7e7e18]">
            {/* Preview do projeto */}
            <a
                href={project.siteUrl || project.previewUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o projeto ${project.title}`}
                className="block"
            >
                <div className="relative overflow-hidden bg-[#00201f] p-2">
                    {/* Moldura do navegador */}
                    <div className="overflow-hidden rounded-lg border border-[#134647] bg-[#000706]">
                        {/* Barra superior */}
                        <div className="flex h-8 items-center gap-1.5 border-b border-[#134647] bg-[#00201f] px-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#e57373]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#cbbb9f]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#40a6a5]" />

                            <div className="ml-3 flex h-5 flex-1 items-center truncate rounded-md bg-[#001311] px-2 text-[10px] text-[#829491]">
                                {project.siteUrl
                                    ? new URL(project.siteUrl).hostname
                                    : "Preview do projeto"}
                            </div>
                        </div>

                        {/* Conteúdo do preview */}
                        <div className="relative aspect-video overflow-hidden bg-white">
                            {project.previewUrl ? (
                                <iframe
                                    src={project.previewUrl}
                                    title={`Preview de ${project.title}`}
                                    loading="lazy"
                                    tabIndex={-1}
                                    className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={`Preview de ${project.title}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            )}

                            {/* Indicação de que é clicável */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#000706]/0 transition-colors duration-300 group-hover:bg-[#000706]/40">
                                <span className="flex translate-y-2 items-center gap-2 rounded-lg border border-white/20 bg-[#001311]/90 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <FiExternalLink size={16} />
                                    Visitar projeto
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            {/* Informações */}
            <div className="space-y-4 p-5">
                <h3 className="text-xl font-bold text-[#f5f7f6]">
                    {project.title}
                </h3>

                <p className="text-sm leading-6 text-[#b7c5c2]">
                    {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-[#134647] bg-[#00201f] px-2 py-1 text-xs text-[#91cece]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 border-t border-[#134647] pt-4">
                    {project.siteUrl && (
                        <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#0c7e7e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#096b6b]"
                        >
                            <FiExternalLink size={16} />
                            Ver projeto
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#134647] px-4 py-2 text-sm font-semibold text-[#f5f7f6] transition hover:bg-[#00201f]"
                        >
                            <FiGithub size={16} />
                            Código
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Card;
