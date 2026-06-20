import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  Target,
  CheckCircle,
  Layers,
  Snowflake,
  BookOpen,
  Lightbulb,
} from 'lucide-react';
import '../styles.css';
import './styles.css';

export default function LimitacionesPage() {
  return (
    <div className="preparate-root satellite-page">
      {/* ── NAV ── */}
      <nav className="preparate-nav">
        <Link to="/preparate" className="preparate-back-link">
          <ArrowLeft size={18} />
          <span>Volver a la guía</span>
        </Link>
        <span className="preparate-nav-brand">
          <Snowflake size={16} />
          Hackathon de Invierno 2026
        </span>
      </nav>

      {/* ── HERO ── */}
      <header className="satellite-hero limits-hero">
        <div className="satellite-hero-bg" />
        <div className="satellite-hero-content">
          <span className="preparate-hero-badge">Página 5</span>
          <h1>Limitaciones: Lo que NO debes hacer</h1>
          <p className="satellite-hero-sub">
            El mayor enemigo no es el código, es la ambición desmedida.
          </p>
        </div>
      </header>

      <main className="satellite-main">
        {/* ── INTRO ── */}
        <section className="satellite-section">
          <div className="warning-banner">
            <AlertTriangle size={28} />
            <p>
              El mayor enemigo de los equipos escolares en una Hackatón no es
              el código, es la <strong>ambición desmedida</strong>. Proponer un
              proyecto de una escala imposible garantizará que termines con una
              pantalla en blanco.
            </p>
          </div>
        </section>

        {/* ── OUT OF SCOPE ── */}
        <section className="satellite-section">
          <h2>Proyectos que están fuera de escala para 6–8 horas</h2>

          <div className="no-go-list">
            <article className="no-go-card">
              <div className="no-go-icon">
                <Layers size={28} />
              </div>
              <h4>Redes Sociales Completas</h4>
              <p>
                No intentes construir un clon de Instagram o TikTok. El manejo
                de videos, bases de datos masivas y algoritmos de
                recomendación toma <strong>meses</strong>, incluso con IA.
              </p>
            </article>

            <article className="no-go-card">
              <div className="no-go-icon">
                <AlertTriangle size={28} />
              </div>
              <h4>Sistemas Financieros o Pasarelas de Pago Reales</h4>
              <p>
                Integrar tarjetas de crédito reales requiere validaciones de
                seguridad que la IA no puede resolver mágicamente sin cuentas
                bancarias comerciales.
              </p>
            </article>

            <article className="no-go-card">
              <div className="no-go-icon">
                <Target size={28} />
              </div>
              <h4>Videojuegos 3D Multijugador</h4>
              <p>
                Los motores gráficos complejos y la sincronización de red en
                tiempo real generan muchísimos errores que la IA sufre para
                depurar (porque no "ve" el juego interactivo).
              </p>
            </article>
          </div>
        </section>

        {/* ── MVP MENTALITY ── */}
        <section className="satellite-section">
          <h2>La Mentalidad MVP (Producto Mínimo Viable)</h2>

          <div className="mvp-block">
            <p className="mvp-principle">
              <strong>Tu objetivo</strong> es construir una{' '}
              <strong>prueba de concepto funcional</strong>.
            </p>

            <div className="mvp-example">
              <div className="mvp-before">
                <h4>❌ La tentación</h4>
                <p>
                  <em>"Uber para reciclaje"</em> con geolocalización en tiempo
                  real, mapas satelitales y chat en vivo.
                </p>
              </div>
              <div className="mvp-arrow">→</div>
              <div className="mvp-after">
                <h4>✅ El MVP</h4>
                <p>
                  Un botón para pedir recolección, un formulario para decir qué
                  vas a reciclar, y una pantalla que le muestre los datos al
                  recolector.
                </p>
              </div>
            </div>

            <div className="mvp-rule">
              <CheckCircle size={20} />
              <p>
                Haz que la <strong>ruta principal</strong> funcione
                perfectamente antes de añadirle un solo adorno.
              </p>
            </div>
          </div>

          <div className="pillars-grid" style={{marginTop: 32}}>
            <div className="pillar-card">
              <div className="pillar-icon">
                <Target size={28} />
              </div>
              <h4>Enfócate</h4>
              <p>Una sola funcionalidad, bien hecha, vale más que diece a medias.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <CheckCircle size={28} />
              </div>
              <h4>Prioriza</h4>
              <p>¿Qué es lo mínimo que tu app necesita para resolver el problema?</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <Lightbulb size={28} />
              </div>
              <h4>Itera</h4>
              <p>Una vez que la base funciona, puedes agregar mejoras.</p>
            </div>
          </div>
        </section>

        <nav className="satellite-pager">
          <Link to="/preparate/stack" className="pager-link">← Stack Tecnológico</Link>
          <Link to="/preparate" className="pager-link next">Volver a la guía principal →</Link>
        </nav>
      </main>

      <footer className="preparate-footer">
        <p><Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV</p>
      </footer>
    </div>
  );
}
