import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur"></header>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
                <span className="text-xl">🎅</span>
            </div>
            <div className="leading-tight">
                <p className="text-xs text-white/70">Postales digitales con música</p>
                <p className="font-extrabold tracking-tight">NaviDAM</p>
            </div>
            </Link>

            <nav className="flex items-center gap-2">
            <Link to="Personas.tsx" className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
                Personas
            </Link>
            <Link to="AltaPersona.tsx" className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
                Alta
            </Link>
            <Link to="Postal.tsx" className="px-3 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-extrabold text-sm">
                Enviar postal
            </Link>
            </nav>
        </div>
        </>
    );
}