import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Brain,
  Eye,
  Code,
  BookOpen,
  Snowflake,
  Lightbulb,
} from 'lucide-react';
import '../styles.css';
import './styles.css';

export default function LlmPage() {
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
      <header className="satellite-hero llm-hero">
        <div className="satellite-hero-bg" />
        <div className="satellite-hero-content">
          <span className="preparate-hero-badge">Página 2</span>
          <h1>El Cerebro: Modelos Transformers y LLMs</h1>
          <p className="satellite-hero-sub">
            El motor matemático que le da "vida" a la IA — y por qué es tan
            bueno programando.
          </p>
        </div>
      </header>

      <main className="satellite-main">
        {/* ── INTRO ── */}
        <section className="satellite-section">
          <h2>¿Qué es un LLM?</h2>
          <p>
            Un <strong>Gran Modelo de Lenguaje (LLM)</strong> es el motor
            matemático que le da "vida" a la IA. Imagina el teclado predictivo
            de tu celular, pero entrenado con casi todo el código fuente,
            libros y artículos de internet.
          </p>
          <p>
            No tiene conciencia, pero es increíblemente bueno{' '}
            <strong>adivinando qué bloque de código</strong> debería escribirse
            a continuación para resolver tu problema.
          </p>

          <div className="analogy-card">
            <Lightbulb size={24} />
            <div>
              <strong>Una analogía</strong>
              <p>
                Es como un músico que ha escuchado millones de canciones. No
                "compone" desde la inspiración, sino que sabe
                estadísticamente qué nota suele venir después de otra. Tú
                eres el compositor que le dice qué género y estilo quiere.
              </p>
            </div>
          </div>
        </section>

        {/* ── TRANSFORMER ── */}
        <section className="satellite-section">
          <h2>El secreto de la magia: La Arquitectura Transformer</h2>
          <p>
            Antes, las IAs leían el texto palabra por palabra de izquierda a
            derecha. Si el texto era muy largo, <strong>olvidaban el
            principio</strong>. En 2017 se inventó el modelo Transformer, que
            introdujo un mecanismo llamado <strong>"Atención"</strong>.
          </p>

          <div className="transformer-visual">
            <div className="transformer-old">
              <h4>❌ Modelos Antiguos (RNN / LSTM)</h4>
              <div className="transformer-flow">
                <span className="tf-word">Hola</span>
                <span className="tf-arrow">→</span>
                <span className="tf-word">mundo</span>
                <span className="tf-arrow">→</span>
                <span className="tf-word dimmed">(olvidó el inicio)</span>
              </div>
              <p className="tf-caption">Leían en orden. Textos largos = pérdida de contexto.</p>
            </div>

            <div className="transformer-divider">vs</div>

            <div className="transformer-new">
              <h4>✅ Transformer (2017 — actualidad)</h4>
              <div className="transformer-flow attention">
                <span className="tf-word attention-word">Hola</span>
                <span className="tf-word">mundo</span>
                <span className="tf-word dimmed">...</span>
                <span className="tf-word attention-word">variable</span>
                <span className="tf-word dimmed">...</span>
                <span className="tf-word dimmed">...</span>
                <span className="tf-word attention-word">función</span>
              </div>
              <div className="attention-lines" aria-hidden="true">
                <span className="al-line" style={{top: '10px', left: '12%', width: '50%'}} />
                <span className="al-line" style={{top: '10px', left: '55%', width: '35%'}} />
              </div>
              <p className="tf-caption">Lee en paralelo y "presta atención" a las partes clave.</p>
            </div>
          </div>

          <div className="satellite-section inset">
            <h3>¿Cómo funciona la Atención?</h3>
            <p>
              Cuando la IA lee tu código, no lo lee en orden. Le asigna "peso"
              o "importancia" a diferentes partes. Si usas una variable en la
              línea 200, la IA puede "prestarle atención" instantáneamente a la
              línea 1 donde definiste esa variable, ignorando los comentarios
              inútiles que haya en medio.
            </p>
            <p>
              Por eso los LLMs modernos parecen tan{' '}
              <strong>inteligentes programando</strong>: no se pierden en el
              camino.
            </p>

            <div className="feature-comparison">
              <div className="feature-item">
                <span className="feature-label">Antes (sin Atención)</span>
                <div className="feature-bar before" style={{width: '35%'}}>Rendimiento bajo en código largo</div>
              </div>
              <div className="feature-item">
                <span className="feature-label">Con Transformer</span>
                <div className="feature-bar after" style={{width: '92%'}}>Contexto casi ilimitado</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MODELS TABLE ── */}
        <section className="satellite-section">
          <h2>Modelos Populares hoy</h2>
          <div className="models-grid">
            <div className="model-card">
              <h4>GPT-4 / GPT-4o</h4>
              <p className="model-maker">OpenAI</p>
              <p>El estándar de la industria. Gran equilibrio entre velocidad y calidad.</p>
            </div>
            <div className="model-card">
              <h4>Claude 3.5 / 4</h4>
              <p className="model-maker">Anthropic</p>
              <p>Razonamiento profundo y excelente para código complejo.</p>
            </div>
            <div className="model-card">
              <h4>Gemini 2.5</h4>
              <p className="model-maker">Google</p>
              <p>Ventana de contexto gigante. Ideal para proyectos grandes.</p>
            </div>
            <div className="model-card">
              <h4>DeepSeek</h4>
              <p className="model-maker">DeepSeek</p>
              <p>Open source y muy económico. Alternativa competitiva.</p>
            </div>
          </div>
        </section>

        <nav className="satellite-pager">
          <Link to="/preparate/agentes" className="pager-link">← Agentes de IA</Link>
          <Link to="/preparate/api-y-tokens" className="pager-link next">Siguiente: API y Tokens →</Link>
        </nav>
      </main>

      <footer className="preparate-footer">
        <p><Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV</p>
      </footer>
    </div>
  );
}
