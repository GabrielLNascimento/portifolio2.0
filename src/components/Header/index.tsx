import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { LuFileScan } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-50 w-full bg-gradient-to-b from-[#000706] via-[#001311] to-[var(--color-background-800)]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <a
                    href="/"
                    className="text-xl font-bold tracking-widest sm:text-2xl"
                >
                    <span className="text-[#f5f7f6]">GABRIEL </span>
                    <span className="text-[#0c7e7e] drop-shadow-[0_0_8px_#0c7e7e]">
                        LIZ
                    </span>
                </a>

                {/* Menu desktop */}
                <nav className="hidden items-center sm:flex">
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#b7c5c2] transition-colors hover:bg-[#00272d] hover:text-[#0c7e7e]"
                    >
                        <HiHome size={20} />
                        <span>Home</span>
                    </Link>

                    <Link
                        to="/projects"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#b7c5c2] transition-colors hover:bg-[#00272d] hover:text-[#0c7e7e]"
                    >
                        <LuFileScan size={20} />
                        <span>Projetos</span>
                    </Link>
                </nav>

                {/* Botão mobile */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    className="rounded-lg p-2 text-[#0c7e7e] transition-colors hover:bg-[#00272d] sm:hidden"
                >
                    {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                </button>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <nav className="border-t border-[#134647] bg-[#00272d] px-6 py-3 sm:hidden">
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#f5f7f6] transition-colors hover:bg-[#134647] hover:text-[#bfac8b]"
                    >
                        <HiHome size={20} />

                        <span>Home</span>
                    </Link>

                    <Link
                        to="/projects"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#f5f7f6] transition-colors hover:bg-[#134647] hover:text-[#bfac8b]"
                    >
                        <LuFileScan size={20} />

                        <span>Projetos</span>
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
