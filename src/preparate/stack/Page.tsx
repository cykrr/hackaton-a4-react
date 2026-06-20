import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code,
  Database,
  Globe,
  Zap,
  Snowflake,
  BookOpen,
} from 'lucide-react';
import '../styles.css';
import './styles.css';

export default function StackPage() {
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
      <header className="satellite-hero stack-hero">
        <div className="satellite-hero-bg" />
        <div className="satellite-hero-content">
          <span className="preparate-hero-badge">Página 4</span>
          <h1>Stack Tecnológico Recomendado</h1>
          <p className="satellite-hero-sub">
            Las herramientas ganadoras para construir rápido en la Hackatón.
          </p>
        </div>
      </header>

      <main className="satellite-main">
        <p className="lead-text">
          Para una Hackatón, el tiempo es tu recurso más crítico. No trates de
          reinventar la rueda ni uses tecnologías lentas de configurar. Este es
          el <strong>stack ganador</strong> para Vibe Coding:
        </p>

        {/* ── FRONTEND ── */}
        <section className="satellite-section">
          <div className="stack-card featured">
            <div className="stack-icon-wrap" style={{background: '#61dafb20', color: '#61dafb'}}>
              <Code size={32} />
            </div>
            <h2>Frontend: La Interfaz</h2>
            <div className="stack-techs">
              <span className="tech-badge">React</span>
              <span className="tech-badge">+</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">+</span>
              <span className="tech-badge">Tailwind CSS</span>
            </div>
            <div className="stack-whys">
              <div className="stack-why">
                <strong>⚡ Vite</strong>
                <p>Levanta el proyecto en milisegundos. Olvídate de esperar.</p>
              </div>
              <div className="stack-why">
                <strong>⚛️ React</strong>
                <p>Es el estándar de la industria. La IA tiene trillones de ejemplos de React en su memoria y casi nunca se equivoca.</p>
              </div>
              <div className="stack-why">
                <strong>🎨 Tailwind CSS</strong>
                <p>Permite diseñar interfaces modernas escribiendo clases directamente en el HTML, ideal para que la IA diseñe rápido.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BACKEND ── */}
        <section className="satellite-section">
          <div className="stack-card">
            <div className="stack-icon-wrap" style={{background: '#3ecf8e20', color: '#3ecf8e'}}>
              <Database size={32} />
            </div>
            <h2>Backend / Base de Datos</h2>
            <div className="stack-techs">
              <span className="tech-badge">Supabase</span>
              <span className="tech-badge">o</span>
              <span className="tech-badge">Firebase</span>
            </div>
            <div className="stack-whys">
              <div className="stack-why">
                <strong>🎯 ¿Por qué?</strong>
                <p>
                  Son <strong>"Backends as a Service"</strong>. Te dan bases de
                  datos, autenticación de usuarios (login con Google) y
                  almacenamiento de imágenes listos para usar sin tener que
                  programar un servidor desde cero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPLOY ── */}
        <section className="satellite-section">
          <div className="stack-card">
            <div className="stack-icon-wrap" style={{background: '#00000020', color: '#000'}}>
              <Globe size={32} />
            </div>
            <h2>Despliegue</h2>
            <div className="stack-techs">
              <span className="tech-badge">Vercel</span>
              <span className="tech-badge">o</span>
              <span className="tech-badge">Netlify</span>
            </div>
            <div className="stack-whys">
              <div className="stack-why">
                <strong>🚀 ¿Por qué?</strong>
                <p>
                  Conectas tu repositorio de GitHub, presionas un botón y tu
                  página web estará viva en internet con un link público en
                  <strong> menos de 2 minutos</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUMMARY TABLE ── */}
        <section className="satellite-section">
          <h2>Resumen del Stack</h2>
          <div className="stack-summary">
            <div className="summary-row header">
              <span>Capa</span>
              <span>Tecnología</span>
              <span>Por qué</span>
            </div>
            <div className="summary-row">
              <span>🎨 Frontend</span>
              <span>React + Vite + Tailwind</span>
              <span>Rápido, estándar, IA lo conoce bien</span>
            </div>
            <div className="summary-row">
              <span>🗄️ Backend</span>
              <span>Supabase / Firebase</span>
              <span>Sin servidor, listo en minutos</span>
            </div>
            <div className="summary-row">
              <span>🌍 Despliegue</span>
              <span>Vercel / Netlify</span>
              <span>Un click, público al instante</span>
            </div>
          </div>
        </section>

        <nav className="satellite-pager">
          <Link to="/preparate/api-y-tokens" className="pager-link">← API y Tokens</Link>
          <Link to="/preparate/limitaciones" className="pager-link next">Siguiente: Limitaciones →</Link>
        </nav>
      </main>

      <footer className="preparate-footer">
        <p><Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV</p>
      </footer>
    </div>
  );
}
