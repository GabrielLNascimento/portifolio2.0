const Home = () => {
    return (
        <main className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-16">
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
                {/* Conteúdo à esquerda */}
                <section className="space-y-6">
                    <p className="font-medium tracking-[0.3em] text-[#0c7e7e] uppercase">
                        Olá, eu sou
                    </p>

                    <h1 className="text-4xl leading-tight font-bold text-[#f5f7f6] sm:text-5xl lg:text-6xl">
                        Desenvolvedor
                        <span className="block text-[#0c7e7e] drop-shadow-[0_0_12px_#0c7e7e]">
                            Frontend
                        </span>
                    </h1>

                    <p className="max-w-lg text-base leading-7 text-[#b7c5c2] sm:text-lg">
                        Desenvolvo interfaces modernas, responsivas e
                        intuitivas, transformando ideias em experiências
                        digitais. Trabalho com React, TypeScript e Tailwind CSS
                        para criar aplicações funcionais e bem estruturadas.
                    </p>

                    <a
                        href="#contato"
                        className="inline-flex items-center rounded-lg border border-[#0c7e7e] bg-[#0c7e7e] px-6 py-3 font-semibold text-white transition-all hover:bg-[#134647] hover:shadow-[0_0_20px_#0c7e7e55]"
                    >
                        Entre em contato
                    </a>
                </section>

                {/* Foto à direita */}
                <section className="flex min-w-0 justify-center">
                    <div className="relative w-full max-w-[500px]">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#0c7e7e] to-[#bfac8b] opacity-70 blur-lg" />

                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#134647] bg-[#00272d]">
                            <img
                                src="/minha-foto.jpeg"
                                alt="Foto de Gabriel Liz"
                                className="h-full w-full object-cover object-[center_25%] sm:object-[center_30%] lg:object-[center_35%]"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
