import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function Home() {
    return (
       <>
       <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_15%_10%,rgba(239,68,68,.25),transparent_60%),radial-gradient(900px_700px_at_85%_15%,rgba(255,255,255,.12),transparent_55%),linear-gradient(to_bottom,#020617,#0b1220)]"></div>
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.10)_0_2px,transparent_3px),radial-gradient(circle_at_60%_20%,rgba(255,255,255,.08)_0_2px,transparent_3px),radial-gradient(circle_at_80%_40%,rgba(255,255,255,.06)_0_2px,transparent_3px)] bg-[length:280px_280px]"></div>
        </div>
        <Header/>
        <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                    <span>✨</span>
                    <span>NaviDAM 2025</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                    Postales navideñas <span className="text-red-600">personalizadas</span> y con <span className="text-slate-900">música 🎶</span>
                </h1>

                <p className="text-slate-600 text-lg leading-relaxed">
                    Registra personas, elige una plantilla y una melodía, completa los campos requeridos y genera una postal lista para enviar o publicar.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                    <Link to="personas.html" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 font-semibold">
                    👥 Gestionar personas
                    </Link>
                    <Link to="postal.html" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold">
                    🚀 Crear postal
                    </Link>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 pt-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">Plantillas</p>
                    <p className="text-2xl font-bold">🎨</p>
                    <p className="text-xs text-slate-500">HTML/Thymeleaf</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">Melodías</p>
                    <p className="text-2xl font-bold">🎶</p>
                    <p className="text-xs text-slate-500">MIDI</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">Orquestación</p>
                    <p className="text-2xl font-bold">⚡</p>
                    <p className="text-xs text-slate-500">n8n</p>
                    </div>
                </div>
                </div>

                <div className="relative">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">Vista previa</p>
                    <span className="text-xs rounded-full bg-white border border-slate-200 px-3 py-1 text-slate-600">demo</span>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white p-6 border border-slate-200">
                    <p className="text-xs text-slate-500">Para: <strong>[Destinatario]</strong></p>
                    <h2 className="text-2xl font-extrabold mt-2">¡Felices fiestas! 🎄</h2>
                    <p className="mt-3 text-slate-700 leading-relaxed">[Mensaje renderizado por plantilla]</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-slate-100 rounded-full px-3 py-1">Plantilla: [Nombre]</span>
                        <span className="text-xs bg-slate-100 rounded-full px-3 py-1">Melodía: [Título]</span>
                    </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white p-4 border border-slate-200">
                    <p className="text-sm text-slate-900 font-semibold">Checklist</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc list-inside">
                        <li>Personas registradas</li>
                        <li>Plantilla + melodía elegidas</li>
                        <li>Campos requeridos completados</li>
                        <li>Previsualización OK</li>
                    </ul>
                    </div>
                </div>

                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-red-500/15 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-12 h-44 w-44 rounded-full bg-black/10 blur-2xl"></div>
                </div>
            </div>
            </div>
        </div>
        </main>
        <Footer/>
    </>
    );
}