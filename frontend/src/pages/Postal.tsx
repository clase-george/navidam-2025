import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import type { Persona } from "@/types/persona";

export default function Postal() {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [selectedPersona, setSelectedPersona] = useState<string>("");

    useEffect(() => {
        fetchPersonas();
    }, []);

    const fetchPersonas = async () => {
        try {
            const res = await fetch("http://localhost:8080/personas");
            const data = await res.json();
            setPersonas(data);
        } catch (error) {
            console.error("Error al cargar personas:", error);
        }
    };

    return (
        <>
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_15%_10%,rgba(239,68,68,.22),transparent_60%),radial-gradient(900px_700px_at_85%_15%,rgba(255,255,255,.10),transparent_55%),linear-gradient(to_bottom,#020617,#0b1220)]"></div>
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.10)_0_2px,transparent_3px),radial-gradient(circle_at_60%_20%,rgba(255,255,255,.08)_0_2px,transparent_3px),radial-gradient(circle_at_80%_40%,rgba(255,255,255,.06)_0_2px,transparent_3px)] bg-[length:280px_280px]"></div>
        </div>

        <Header/>
            <main className="max-w-6xl mx-auto px-4 py-10">
            <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-6">
                    <section className="rounded-3xl border border-slate-200 bg-white p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-black tracking-tight">Enviar postal digital</h1>
                                <p className="text-slate-600 text-sm mt-1">
                                    Selecciona destinatario, plantilla y melodía. Completa los campos requeridos.
                                </p>
                            </div>

                        </div>

                        <form className="mt-6 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="text-sm text-slate-700">Destinatario</label>
                                    <select 
                                        value={selectedPersona}
                                        onChange={(e) => setSelectedPersona(e.target.value)}
                                        className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                                    >
                                        <option value="">Selecciona un destinatario...</option>
                                        {personas.map(p => (
                                            <option key={p.id} value={p.id}>{p.nombre} ({p.email})</option>
                                        ))}
                                    </select>
                                    {selectedPersona && personas.find(p => p.id === selectedPersona) && (
                                        <p className="mt-2 text-xs text-slate-500">
                                            Enviando a: <strong>{personas.find(p => p.id === selectedPersona)?.email}</strong>
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-sm text-slate-700">Plantilla</label>
                                    <select className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300">
                                        <option>[React: listado de plantillas]</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm text-slate-700">Melodía</label>
                                    <select className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300">
                                        <option>[React: listado de melodías]</option>
                                    </select>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold">Campos requeridos por la plantilla</p>
                                <p className="text-xs text-slate-500 mt-1">React generará estos inputs según la plantilla seleccionada.</p>
                            </div>

                            <div className="grid gap-4">
                                <div>
                                    <label className="text-sm text-slate-700">[Campo requerido 1]</label>
                                    <input className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300" placeholder="..."/>
                                </div>
                                <div>
                                    <label className="text-sm text-slate-700">[Campo requerido 2]</label>
                                    <textarea rows={4} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300" placeholder="..."></textarea>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <button type="button" className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                                    👀 Previsualizar
                                </button>
                                <button type="submit" className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold">
                                    ✉️ Enviar
                                </button>
                            </div>

                            <p className="text-sm text-slate-500">(React mostrará aquí mensajes de validación / envío)</p>
                        </form>
                    </section>

                    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-extrabold">Vista previa</h2>
                            <span className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">HTML</span>
                        </div>

                        <div className="mt-4 rounded-2xl bg-white overflow-hidden border border-slate-200">
                            <div className="p-6">
                                <p className="text-sm text-slate-600">
                                    React mostrará aquí el HTML devuelto por <span className="font-semibold">/api/postales/preview</span>.
                                </p>
                                <div className="mt-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                                    <p className="font-extrabold">[Saludo / título]</p>
                                    <p className="mt-2 text-slate-700">[Contenido renderizado]</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-sm font-semibold">Tip</p>
                            <p className="text-sm text-slate-600 mt-1">
                                En React, renderiza el HTML en un <span className="font-semibold">iframe</span> para aislar estilos.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
}