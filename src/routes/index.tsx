import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  Bath,
  Sofa,
  ChefHat,
  WashingMachine,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Car,
  Trees,
  Send,
  Tag,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import fachada from "@/assets/fachada.jpg";
import exteriorLateral from "@/assets/exterior-lateral.jpg";
import entrada from "@/assets/entrada.jpg";
import sala from "@/assets/sala.jpg";
import habitacion from "@/assets/habitacion.jpg";
import bano from "@/assets/bano.jpg";
import cocina from "@/assets/cocina.jpg";
import patio from "@/assets/patio.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+50587607418";
const WA_MSG = encodeURIComponent(
  "Hola Ligia, me interesa la propiedad en Valle Sandino ($45,000 USD). ¿Podemos agendar una visita?"
);
const WA_LINK = `https://wa.me/50587607418?text=${WA_MSG}`;
const TEL_LINK = `tel:${PHONE}`;

const gallery = [
  { src: fachada, label: "Fachada", tag: "Exterior", span: "md:col-span-2 md:row-span-2" },
  { src: sala, label: "Sala", tag: "Interior" },
  { src: cocina, label: "Cocina", tag: "Interior" },
  { src: habitacion, label: "Habitación", tag: "Interior", span: "md:col-span-2" },
  { src: bano, label: "Baño", tag: "Interior" },
  { src: entrada, label: "Entrada", tag: "Exterior" },
  { src: patio, label: "Patio", tag: "Exterior", span: "md:col-span-2" },
  { src: exteriorLateral, label: "Lateral", tag: "Exterior" },
];

function Index() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--ink-soft)]">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={fachada}
          alt="Fachada Casa Moderna en Valle Sandino"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-0 grain" />
        {/* gold aura */}
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--brand)] opacity-25 blur-[120px]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-[var(--accent-wine)] opacity-30 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-between px-6 py-8">
          <header className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2 text-sm font-medium tracking-[0.2em]">
              <span className="h-1.5 w-6 rounded-full bg-gradient-gold" />
              KW · NICARAGUA
            </div>
            <a
              href={TEL_LINK}
              className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/15 sm:flex"
            >
              <Phone className="h-4 w-4" /> +505 8760-7418
            </a>
          </header>

          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-sm font-semibold text-[var(--ink)] shadow-gold">
                <Tag className="h-3.5 w-3.5" /> $45,000 USD
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
                Tu Casa Propia en <span className="text-gradient-gold italic">Valle Sandino</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
                Ideal para vivir o invertir en una zona de alta demanda sobre Carretera Nueva a León.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-[var(--ink)] shadow-gold transition hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
                  <MessageCircle className="relative h-5 w-5" />
                  <span className="relative">Agendar Visita por WhatsApp</span>
                </a>
                <a
                  href="#galeria"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Ver Galería
                </a>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4" />
                Valle Sandino, Carretera Nueva a León, Managua
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative border-b hairline bg-gradient-warm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-10 md:grid-cols-4 md:gap-6">
          {[
            { Icon: BedDouble, label: "Habitaciones", value: "2" },
            { Icon: Bath, label: "Baño", value: "1" },
            { Icon: Sofa, label: "Sala & Cocina", value: "Amplia" },
            { Icon: WashingMachine, label: "Área de Servicio", value: "Sí" },
          ].map(({ Icon, label, value }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="flex items-center gap-4 rounded-2xl border hairline bg-white/70 p-4 backdrop-blur-sm transition hover:border-[var(--brand)]/40 hover:bg-white hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-[var(--ink)] shadow-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]/70">{label}</div>
                  <div className="text-lg font-semibold text-[var(--ink)]">{value}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            La Propiedad
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-5xl">
            Comodidad, accesibilidad y plusvalía en una sola casa.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Descubre esta excelente oportunidad de inversión sobre Carretera Nueva a León.
            Una propiedad diseñada para ofrecerte comodidad y accesibilidad, perfecta para
            tu primera casa o como una inversión inteligente con excelente proyección de
            plusvalía. Ubicada en uno de los corredores residenciales y comerciales de
            mayor crecimiento en Managua.
          </p>
        </Reveal>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              ¿Por qué Valle Sandino?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Una zona consolidada con servicios completos y excelente proyección.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: TrendingUp, title: "Alta plusvalía", text: "Zona en crecimiento sostenido sobre Carretera Nueva a León." },
              { Icon: ShieldCheck, title: "Residencial seguro", text: "Vecindario tranquilo, ideal para familias y profesionales." },
              { Icon: Car, title: "Acceso inmediato", text: "Conexión directa a Managua y salida hacia León." },
              { Icon: Trees, title: "Patio amplio", text: "Espacio exterior con potencial para jardín o expansión." },
              { Icon: ChefHat, title: "Lista para habitar", text: "Cocina, sala y dormitorios en óptimas condiciones." },
              { Icon: Tag, title: "Precio competitivo", text: "$45,000 USD — excelente entrada al mercado inmobiliario." },
            ].map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                Galería
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-5xl">
                Recorre la propiedad
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.label + i}
              delay={i * 50}
              className={`group relative overflow-hidden rounded-2xl ${g.span ?? ""}`}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90" />
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-800">
                  {g.tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 text-sm font-medium text-white">
                {g.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Ubicación
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Carretera Nueva a León, Managua
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Punto estratégico con conexión directa a Managua, comercios cercanos y rápida
              salida hacia León. Una de las zonas con mayor crecimiento del país.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                title="Ubicación Casa Valle Sandino"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.3746663%2C12.1647189%2C-86.3546663%2C12.1847189&layer=mapnik&marker=12.1747189%2C-86.3646663"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=12.1747189,-86.3646663"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              <MapPin className="h-4 w-4" /> Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-5xl">
            Hablemos de tu próxima casa
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Ligia te acompaña en cada paso del proceso, desde la visita hasta la firma.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Agente */}
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-2xl font-bold text-white">
                  LD
                </div>
                <div>
                  <div className="text-xl font-semibold text-slate-900">Ligia Donaire</div>
                  <div className="text-sm text-slate-500">Keller Williams Nicaragua</div>
                  <div className="mt-1 text-sm font-medium text-[var(--brand)]">+505 8760-7418</div>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <a
                  href={TEL_LINK}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Phone className="h-4 w-4" /> Llamar Ahora
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                >
                  <MessageCircle className="h-4 w-4" /> Escribir al WhatsApp
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                "Atención personalizada y asesoría profesional con respaldo internacional KW."
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const msg = `Hola Ligia, soy ${data.get("name")} (Tel: ${data.get("phone")}). ${data.get("message")}`;
                window.open(`https://wa.me/50587607418?text=${encodeURIComponent(msg)}`, "_blank");
              }}
              className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">Envíanos un mensaje</h3>
              <p className="mt-1 text-sm text-slate-500">Respondemos en menos de 24 horas.</p>

              <div className="mt-6 space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Nombre completo"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
                />
                <textarea
                  name="message"
                  rows={4}
                  defaultValue="Me interesa la propiedad en Valle Sandino"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Send className="h-4 w-4" /> Enviar mensaje
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-xs text-slate-500 md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} Ligia Donaire · Keller Williams Nicaragua</div>
          <div>
            Desarrollado por <span className="font-semibold text-slate-700">Sacuanjoche.dev</span> · Marketing Inmobiliario de Alto Nivel
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-[var(--brand)]/40 transition hover:bg-[var(--brand-dark)] md:hidden"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </main>
  );
}
