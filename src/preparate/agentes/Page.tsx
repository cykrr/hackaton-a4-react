import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Terminal,
  Cpu,
  Key,
  Download,
  Bot,
  Zap,
  Shield,
  Globe,
  Snowflake,
  BookOpen,
} from 'lucide-react';
import '../styles.css';
import './styles.css';

export default function AgentesPage() {
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
      <header className="satellite-hero">
        <div className="satellite-hero-bg" />
        <div className="satellite-hero-content">
          <span className="preparate-hero-badge">Página 1</span>
          <h1>Los Agentes de IA</h1>
          <p className="satellite-hero-sub">
            Tu equipo de desarrollo autónomo — las herramientas que vivirán en
            tu terminal y programarán contigo.
          </p>
        </div>
      </header>

      <main className="satellite-main">
        {/* ── INTRO ── */}
        <section className="satellite-section">
          <h2>¿Qué son y qué tienen en común?</h2>
          <p>
            Todos los <strong>agentes de IA</strong> son programas que actúan
            como un puente inteligente entre tu proyecto y un LLM (el cerebro).
            En lugar de que tú copies y pegues código desde ChatGPT, estos
            agentes viven en tu terminal o editor, leen tus archivos
            automáticamente, escriben código nuevo y, con tu permiso, ejecutan
            comandos (como instalar librerías o correr tests).
          </p>
          <p>
            Son como tener un <strong>programador compañero</strong> que ya
            conoce todo tu proyecto y puede ver exactamente qué necesita cambiar.
          </p>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="satellite-section">
          <h2>Los Protagonistas y sus Diferencias</h2>

          <div className="agent-cards">
            <article className="agent-card">
              <div className="agent-header">
                <div className="agent-icon" style={{background: '#4285F4'}}>
                  <Zap size={24} />
                </div>
                <h3>Antigravity CLI</h3>
              </div>
              <p className="agent-meta">Google · 2026 · Go</p>
              <p>
                Es la herramienta de terminal de Google (lanzada en 2026 como
                evolución de Gemini CLI). Al estar construida en Go, es{' '}
                <strong>extremadamente rápida</strong>. Su superpoder son los
                "subagentes asíncronos": puedes pedirle que refactorice un
                archivo gigante en segundo plano mientras tú sigues programando
                en otra cosa sin que se congele tu pantalla.
              </p>
              <div className="agent-tags">
                <span>⚡ Rápido</span>
                <span>🔄 Asíncrono</span>
                <span>🤖 Gemini</span>
              </div>
            </article>

            <article className="agent-card">
              <div className="agent-header">
                <div className="agent-icon" style={{background: '#d97706'}}>
                  <Bot size={24} />
                </div>
                <h3>Claude Code</h3>
              </div>
              <p className="agent-meta">Anthropic · Terminal</p>
              <p>
                El agente oficial de Anthropic para la terminal. Destaca
                enormemente por su capacidad de{' '}
                <strong>razonamiento profundo</strong> y su habilidad para
                entender bases de código complejas sin perder el contexto.
                Ideal para cuando necesitas que la IA realmente "piense" antes
                de escribir código.
              </p>
              <div className="agent-tags">
                <span>🧠 Razonamiento</span>
                <span>📚 Contexto largo</span>
                <span>🔬 Preciso</span>
              </div>
            </article>

            <article className="agent-card">
              <div className="agent-header">
                <div className="agent-icon" style={{background: '#059669'}}>
                  <Globe size={24} />
                </div>
                <h3>OpenCode / Agentes Open Source</h3>
              </div>
              <p className="agent-meta">Comunidad · Código Abierto</p>
              <p>
                Plataformas de código abierto que buscan{' '}
                <strong>democratizar</strong> el vibe coding. Su ventaja es la
                transparencia y flexibilidad; puedes conectarlos a modelos más
                económicos o locales, pero a veces requieren más configuración
                técnica inicial.
              </p>
              <div className="agent-tags">
                <span>🔓 Gratuito</span>
                <span>⚙️ Flexible</span>
                <span>🏠 Local</span>
              </div>
            </article>

            <article className="agent-card">
              <div className="agent-header">
                <div className="agent-icon" style={{background: '#7c3aed'}}>
                  <Shield size={24} />
                </div>
                <h3>Pi (y agentes locales)</h3>
              </div>
              <p className="agent-meta">Local · Privacidad</p>
              <p>
                Son excelentes si buscas{' '}
                <strong>máxima privacidad</strong>. Todo se ejecuta o se
                controla bajo tus propios parámetros, aunque a veces consumen
                bastantes recursos de tu memoria RAM si ejecutan modelos en tu
                propia máquina.
              </p>
              <div className="agent-tags">
                <span>🔒 Privado</span>
                <span>🖥️ Local</span>
                <span>⚖️ Pesado</span>
              </div>
            </article>
          </div>
        </section>

        {/* ── SETUP ── */}
        <section className="satellite-section">
          <h2>¿Qué necesitas para funcionar y cómo se instalan?</h2>

          <div className="setup-steps">
            <div className="setup-step">
              <div className="setup-step-icon"><Cpu size={20} /></div>
              <h4>Requisitos base</h4>
              <p>
                Necesitarás tener instalada la{' '}
                <strong>consola de comandos</strong> (terminal),{' '}
                <strong>Node.js</strong> (y su gestor de paquetes NPM) o
                herramientas como <code>curl</code>, dependiendo del agente.
              </p>
            </div>

            <div className="setup-step">
              <div className="setup-step-icon"><Key size={20} /></div>
              <h4>La Llave Maestra (API Key)</h4>
              <p>
                Los agentes necesitan permiso para usar el "cerebro" en la
                nube. Deberás crear una cuenta en{' '}
                <strong>Google Cloud, Anthropic u OpenAI</strong> para obtener
                una clave secreta que conectarás a tu agente.
              </p>
            </div>

            <div className="setup-step">
              <div className="setup-step-icon"><Download size={20} /></div>
              <h4>Instalación típica</h4>
              <p>
                En tu terminal, suele bastar con un comando simple. Por
                ejemplo, para Claude Code usarías{' '}
                <code>npm install -g @anthropic-ai/claude-code</code>, o para
                Antigravity CLI descargarías su script oficial con{' '}
                <code>curl</code>.
              </p>
            </div>
          </div>
        </section>

        {/* ── NAV LINKS ── */}
        <nav className="satellite-pager">
          <Link to="/preparate" className="pager-link">← Volver a la guía</Link>
          <Link to="/preparate/llm" className="pager-link next">Siguiente: El Cerebro (LLMs) →</Link>
        </nav>
      </main>

      <footer className="preparate-footer">
        <p><Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV</p>
      </footer>
    </div>
  );
}
