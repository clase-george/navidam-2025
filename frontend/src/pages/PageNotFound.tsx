import {Link} from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-[radial-gradient(1000px_700px_at_15%_10%,rgba(239,68,68,.25),transparent_60%),radial-gradient(900px_700px_at_85%_15%,rgba(255,255,255,.12),transparent_55%),linear-gradient(to_bottom,#020617,#0b1220)]">
            <div className="max-w-2xl mx-auto">
                <img src="/notFound.png" alt="Not found" className="mx-auto w-134 h-64 object-contain " />
                
                <h2 className="text-2xl mt-4 text-white">Página no encontrada</h2>
                <p className="text-white mt-2">
                    Lo sentimos, la página que buscas no existe o fue movida.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
