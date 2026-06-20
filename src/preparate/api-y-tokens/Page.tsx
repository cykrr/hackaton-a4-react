import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  DollarSign,
  Zap,
  AlertTriangle,
  BookOpen,
  Snowflake,
  Network,
  FileText,
  Shield,
} from 'lucide-react';
import '../styles.css';
import './styles.css';

export default function ApiTokensPage() {
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
      <header className="satellite-hero tokens-hero">
        <div className="satellite-hero-bg" />
        <div className="satellite-hero-content">
          <span className="preparate-hero-badge">Página 3</span>
          <h1>La Economía del Token</h1>
          <p className="satellite-hero-sub">
            APIs, proveedores y cómo no gastar todo el presupuesto en un solo
            prompt.
          </p>
        </div>
      </header>

      <main className="satellite-main">
        {/* ── WHAT IS AN API ── */}
        <section className="satellite-section">
          <h2>¿Qué es una API y quién la provee?</h2>
          <p>
            Una <strong>API</strong> (Interfaz de Programación de Aplicaciones)
            es el servicio de mensajería. Tu agente de IA local empaqueta tu
            pregunta, se la manda por la API a los servidores gigantes de
            proveedores como <strong>Google (Gemini)</strong>,{' '}
            <strong>Anthropic (Claude)</strong>,{' '}
            <strong>OpenAI (GPT)</strong> o <strong>DeepSeek</strong>, y te
            devuelve la respuesta.
          </p>

          <div className="api-flow">
            <div className="api-node">💻 Tu código</div>
            <div className="api-arrow">⬇️⬆️</div>
            <div className="api-node">🌐 API</div>
            <div className="api-arrow">⬇️⬆️</div>
            <div className="api-node">☁️ Servidores del proveedor</div>
          </div>
        </section>

        {/* ── INPUT vs OUTPUT ── */}
        <section className="satellite-section">
          <h2>La Regla de Oro de los Costos: Input vs. Output</h2>
          <p>
            Usar APIs cuesta dinero real (fracciones de centavo), y se cobra
            por <strong>Token</strong> (fragmentos de palabras o símbolos de
            código).
          </p>

          <div className="cost-comparison">
            <div className="cost-card input">
              <h4>
                <FileText size={18} />
                Tokens de Input
              </h4>
              <p className="cost-price">💰 Baratos</p>
              <p>Es el contexto, tu prompt y tus archivos. Lo que tú envías.</p>
              <div className="cost-meter">
                <div className="cost-fill green" style={{width: '30%'}}>30% del costo</div>
              </div>
            </div>
            <div className="cost-card output">
              <h4>
                <Zap size={18} />
                Tokens de Output
              </h4>
              <p className="cost-price">💸 Caros (hasta 4× más)</p>
              <p>Lo que la IA escribe. Generar código nuevo requiere un esfuerzo computacional inmenso.</p>
              <div className="cost-meter">
                <div className="cost-fill red" style={{width: '70%'}}>70% del costo</div>
              </div>
            </div>
          </div>

          <div className="satellite-section inset">
            <h3>La Analogía del Millón de Tokens</h3>
            <div className="big-number">
              <span className="big-number-value">1M</span>
              <span className="big-number-label">Tokens</span>
            </div>
            <p>
              equivale aproximadamente a <strong>750.000 palabras</strong> — Toda
              la saga de <em>Harry Potter</em> o <em>El Señor de los Anillos</em>.
            </p>

            <div className="danger-card">
              <AlertTriangle size={20} />
              <div>
                <strong>⚠️ El peligro</strong>
                <p>
                  Si en tu agente de IA escribes "revisa mi código" y
                  accidentalmente incluyes la carpeta{' '}
                  <code>node_modules</code> (que contiene el código de miles de
                  librerías externas), le estarás enviando millones de tokens de
                  Input inútiles a la IA. Te gastarás el presupuesto del equipo
                  de la Hackatón en un solo mensaje de error.
                </p>
                <p className="lesson">
                  <strong>Lección:</strong> Envía solo el archivo que necesitas
                  arreglar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROVIDERS TABLE ── */}
        <section className="satellite-section">
          <h2>Comparativa de Proveedores</h2>
          <div className="providers-grid">
            <div className="provider-card">
              <h4>Google (Gemini)</h4>
              <p>Contexto gigante, precios competitivos. Bueno para proyectos grandes.</p>
              <span className="provider-tier">⚖️ Balance</span>
            </div>
            <div className="provider-card">
              <h4>Anthropic (Claude)</h4>
              <p>Razonamiento profundo. Ideal para código complejo. Output más caro.</p>
              <span className="provider-tier premium">👑 Premium</span>
            </div>
            <div className="provider-card">
              <h4>OpenAI (GPT)</h4>
              <p>El estándar. Muchas herramientas lo soportan de forma nativa.</p>
              <span className="provider-tier">⚙️ Versátil</span>
            </div>
            <div className="provider-card">
              <h4>DeepSeek</h4>
              <p>Open source. Mucho más barato. Buena opción para experimentar.</p>
              <span className="provider-tier eco">🌱 Eco</span>
            </div>
          </div>
        </section>

        <nav className="satellite-pager">
          <Link to="/preparate/llm" className="pager-link">← El Cerebro (LLMs)</Link>
          <Link to="/preparate/stack" className="pager-link next">Siguiente: Stack Tecnológico →</Link>
        </nav>
      </main>

      <footer className="preparate-footer">
        <p><Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV</p>
      </footer>
    </div>
  );
}
