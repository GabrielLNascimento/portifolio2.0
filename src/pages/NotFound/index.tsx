import { Link } from "react-router-dom";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--color-background-800)] px-6">
            <div className="text-center">
                <HiOutlineExclamationTriangle
                    size={48}
                    className="mx-auto mb-6 text-[#0c7e7e] drop-shadow-[0_0_12px_#0c7e7e]"
                />

                <h1 className="text-8xl font-bold text-[#0c7e7e]">404</h1>

                <h2 className="mt-4 text-2xl font-semibold text-[#f5f7f6]">
                    Página não encontrada
                </h2>

                <p className="mt-3 text-[#b7c5c2]">
                    A página que você está procurando não existe.
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-lg bg-[#0c7e7e] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#134647]"
                >
                    Voltar para Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
