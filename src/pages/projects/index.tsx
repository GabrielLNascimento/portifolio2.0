import Card from "../../components/Card";
import { projects } from "../../data/projects";

const Projects = () => {
    return (
        <main className="mx-auto min-h-[80vh] max-w-7xl px-6 py-16">
            <section className="space-y-8">
                <div>
                    <p className="font-medium tracking-[0.3em] text-[#0c7e7e] uppercase">
                        Portfólio
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-[#f5f7f6] sm:text-4xl">
                        Meus projetos
                    </h1>

                    <p className="mt-3 max-w-2xl leading-7 text-[#b7c5c2]">
                        Conheça os projetos que desenvolvi, as tecnologias
                        utilizadas e os resultados de cada aplicação.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
