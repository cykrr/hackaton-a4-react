import React from 'react';
import {
  Calendar,
  Cpu,
  Mail,
  Snowflake,
  Target,
  Trophy,
  Users,
  MapPin,
  Clock,
  Sparkles,
  Laptop,
  HelpCircle,
  Award,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import heroImage from '../img/hero-students.png';
import daeLogo from '../img/logo-dae.jpeg';
import qrImage from '../img/qr-150.png';

function MountainMark() {
  return (
    <svg className="mountain-mark" viewBox="0 0 360 92" aria-hidden="true">
      <path d="M7 86 L70 34 L105 72 L157 8 L225 86 Z" fill="#061a37" />
      <path d="M62 42 L84 24 L104 72 Z" fill="#eef6fb" opacity="0.95" />
      <path d="M157 8 L187 49 L176 42 L162 82 L139 46 Z" fill="#eef6fb" opacity="0.9" />
      <path d="M205 86 L250 36 L286 86 Z" fill="#061a37" />
      <path d="M249 36 L265 58 L254 54 L244 78 L234 54 Z" fill="#eef6fb" opacity="0.9" />
      <path d="M0 87 C28 78 46 77 79 81 C113 85 139 88 170 82 C214 73 250 77 304 86 L360 86" fill="#061a37" />
    </svg>
  );
}

function OdsWheel() {
  return (
    <div className="ods-wheel" aria-label="Rueda ODS">
      <div className="ods-wheel-hole" />
    </div>
  );
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return <div className="icon-bubble">{children}</div>;
}

export default function App() {
  return (
    <div className="page-root">

      {/* ── NAV ── */}
      <nav className="site-nav">
        <a href="#" className="nav-logo-link" aria-label="Volver al inicio">
          <MountainMark />
        </a>
        <div className="nav-links">
          <a href="#acerca" className="nav-link-item">¿Qué es?</a>
          <a href="#tecnologia" className="nav-link-item">Tecnología</a>
          <a href="#cronograma" className="nav-link-item">Cronograma</a>
          <a href="#premios" className="nav-link-item">Premios</a>
          <a href="#faq" className="nav-link-item">FAQ</a>
          <a href="https://forms.gle/u8vDWM8q8NYq7jYj7" target="_blank" rel="noopener noreferrer" className="nav-cta">
            ¡Inscribirse!
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hackaton de Invierno">
        <Snowflake className="decor-snow snow-1" />
        <Snowflake className="decor-snow snow-2" />
        <Snowflake className="decor-snow snow-3" />

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>INVIERNO 2026 • PUCV</span>
          </div>

          <h1 className="poster-title title-main">HACKATON</h1>
          <div className="de-row">
            <span />
            <strong>DE</strong>
            <span />
          </div>
          <div className="winter-row">
            <h1 className="poster-title title-winter">INVIERNO</h1>
            <div className="snow-disc">
              <Snowflake size={38} strokeWidth={2.8} />
            </div>
          </div>

          <h2 className="tagline">
            <span>¡Crea el futuro con Vibe Coding!</span>
            <span className="tagline-sub">
              Diseña soluciones para los Objetivos de Desarrollo Sostenible (ODS) de la ONU usando Inteligencia Artificial.
            </span>
            <span className="tagline-ods">
              <OdsWheel /> EN ALIANZA CON PUCV SOSTENIBLE
            </span>
          </h2>

          {/* Quick coordinates cards */}
          <div className="hero-coords">
            <div className="coord-card">
              <Calendar className="coord-icon" size={20} />
              <div>
                <span className="coord-label">Fecha</span>
                <strong className="coord-val">Primera semana de julio, 2026</strong>
              </div>
            </div>
            <div className="coord-card">
              <MapPin className="coord-icon" size={20} />
              <div>
                <span className="coord-label">Lugar</span>
                <strong className="coord-val">Edificios FIN e IBC, PUCV</strong>
              </div>
            </div>
            <div className="coord-card">
              <Clock className="coord-icon" size={20} />
              <div>
                <span className="coord-label">Duración</span>
                <strong className="coord-val">Jornada Intensiva (6-8 hrs)</strong>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="https://forms.gle/u8vDWM8q8NYq7jYj7" target="_blank" rel="noopener noreferrer" className="hero-cta-btn">
              ¡Inscribe a tu equipo aquí!
            </a>
            <span className="cta-deadline-hint">Cupos limitados • Cierre 30 de Mayo</span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img className="hero-image" src={heroImage} alt="Estudiantes participando en hackatón" />
          <div className="floating-badge">
            <strong>100%</strong>
            <span>Gratuito</span>
          </div>
        </div>
      </section>

      {/* ── CARDS (Aprende, Crea, Destaca) ── */}
      <section className="cards-section">
        <article className="card">
          <IconBubble><Target size={34} strokeWidth={2.6} /></IconBubble>
          <h3>APRENDE</h3>
          <p>IA de frontera, buenas prácticas de desarrollo y trabajo colaborativo.</p>
        </article>
        <div className="card-divider" />
        <article className="card">
          <IconBubble><Cpu size={34} strokeWidth={2.6} /></IconBubble>
          <h3>CREA</h3>
          <p>Usa vibe coding para dar vida a un prototipo real que impacte tu comunidad.</p>
        </article>
        <div className="card-divider" />
        <article className="card">
          <IconBubble><Trophy size={34} strokeWidth={2.6} /></IconBubble>
          <h3>DESTACA</h3>
          <p>Presenta tu solución ante un jurado experto y gana increíbles reconocimientos.</p>
        </article>
      </section>

      {/* ── SECCIÓN 2: ACERCA DEL EVENTO ── */}
      <section id="acerca" className="about-details-section">
        <div className="section-header">
          <span className="section-subtitle">Sobre la Hackathon</span>
          <h2 className="section-title">¿Qué es la Hackathon de Invierno?</h2>
          <div className="section-decor-line" />
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon-wrap">
              <Users size={28} />
            </div>
            <h4>¿Para quién es?</h4>
            <p>
              Una convocatoria exclusiva diseñada para estudiantes de <strong>1° y 2° año de enseñanza media</strong> que quieren liderar la transformación digital desde el colegio.
            </p>
          </div>

          <div className="about-card highlighted">
            <div className="about-icon-wrap">
              <BookOpen size={28} />
            </div>
            <h4>La Misión</h4>
            <p>
              Una experiencia formativa intensiva tipo <strong>bootcamp</strong> que busca acercar la programación de frontera directamente a las aulas, combatiendo la brecha de contenidos tecnológicos en el currículum escolar tradicional.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-wrap">
              <Sparkles size={28} />
            </div>
            <h4>La Metodología</h4>
            <p>
              Trabajaremos con <strong>Vibe Coding</strong> (programación asistida por Inteligencia Artificial de última generación) para resolver problemáticas locales reales basadas directamente en los <strong>ODS de la Agenda 2030 de la ONU</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: EL DESAFÍO Y LA TECNOLOGÍA ── */}
      <section id="tecnologia" className="tech-section">
        <div className="tech-bg-glow" />
        <div className="tech-container">
          <div className="tech-text-block">
            <span className="section-subtitle light">Experiencia de Vanguardia</span>
            <h2 className="section-title text-white">El Desafío & La Tecnología</h2>
            <div className="section-decor-line yellow" />
            <p className="tech-intro">
              Prepárate para experimentar una maratón de desarrollo ágil con las mejores herramientas del mercado. Diseñarás y programarás como un profesional del futuro.
            </p>

            <div className="tech-features">
              <div className="tech-feat-item">
                <div className="tech-feat-icon"><Cpu size={20} /></div>
                <div>
                  <strong>Inteligencia Artificial de Copiloto</strong>
                  <p>No estarás solo. Desarrollarás asistido en tiempo real por motores de IA de clase mundial como <strong>DeepSeek-V4-Flash</strong> y <strong>Gemma 4 31B</strong>.</p>
                </div>
              </div>
              <div className="tech-feat-item">
                <div className="tech-feat-icon"><Laptop size={20} /></div>
                <div>
                  <strong>Stack Tecnológico Estandarizado</strong>
                  <p>Todos los equipos construirán y desplegarán aplicaciones web modernas utilizando <strong>React, Vite y Tailwind CSS</strong>.</p>
                </div>
              </div>
              <div className="tech-feat-item">
                <div className="tech-feat-icon"><Users size={20} /></div>
                <div>
                  <strong>Dinámica y Mentores Expertos</strong>
                  <p>Competirán entre <strong>6 y 8 equipos</strong> de 3 estudiantes. Cada equipo estará permanentemente guiado por monitores universitarios de carreras STEM de la PUCV.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-visual-block">
            <div className="tech-card-3d">
              <div className="tech-card-header">
                <div className="tech-dot red" />
                <div className="tech-dot yellow" />
                <div className="tech-dot green" />
                <span className="tech-tab-title">vibe-coding-workspace.tsx</span>
              </div>
              <pre className="tech-code-preview">{`// Motores de IA Activos:
// [✓] DeepSeek-V4-Flash
// [✓] Gemma 4 31B

const HackathonProject = () => {
  const stack = ['React', 'Vite', 'TailwindCSS'];
  const odsTarget = 'Desafíos Sostenibles ONU';
  const teamSize = 3;
  
  return (
    <div className="future-built-by-you">
      <VibeCoding status="active" assistance="100%" />
      <Innovation level="max" />
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: CRONOGRAMA DE LA JORNADA ── */}
      <section id="cronograma" className="timeline-section">
        <div className="section-header">
          <span className="section-subtitle">Día Cero</span>
          <h2 className="section-title">Cronograma de la Jornada</h2>
          <div className="section-decor-line" />
          <p className="section-desc">
            Así se estructuran las 6 a 8 horas de pura innovación, aprendizaje y trabajo en equipo.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          <div className="timeline-item">
            <div className="timeline-badge">01</div>
            <div className="timeline-panel">
              <span className="time-tag">Mañana</span>
              <h4>Charlas e Inspiración</h4>
              <p>
                Iniciamos con charlas dinámicas de bienvenida sobre Inteligencia Artificial, Buenas Prácticas de Código y los ODS con el apoyo directo de <strong>PUCV Sostenible</strong>.
              </p>
            </div>
          </div>

          <div className="timeline-item invert">
            <div className="timeline-badge">02</div>
            <div className="timeline-panel">
              <span className="time-tag">Mediodía</span>
              <h4>Recarga de Energías</h4>
              <p>
                ¡El combustible no faltará! Tendremos almuerzo y colaciones deliciosas completamente cubiertas por la organización del evento.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-badge">03</div>
            <div className="timeline-panel">
              <span className="time-tag">Tarde</span>
              <h4>¡A Programar! (Vibe Coding)</h4>
              <p>
                Comienza la sesión intensiva de vibe coding. Construye y diseña tu prototipo junto a tu equipo y la guía de tu monitor asignado.
              </p>
            </div>
          </div>

          <div className="timeline-item invert">
            <div className="timeline-badge">04</div>
            <div className="timeline-panel">
              <span className="time-tag">Cierre</span>
              <h4>Pitch Final & Premiación</h4>
              <p>
                Presenta el prototipo ante un jurado experto compuesto por líderes académicos y tecnológicos. ¡Finalizamos con una gran ceremonia de premiación!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: PREMIOS Y RECONOCIMIENTOS ── */}
      <section id="premios" className="prizes-section">
        <div className="prizes-bg-pattern" />
        <div className="prizes-container">
          <div className="prizes-header">
            <Award className="gold-trophy-icon animate-bounce" size={48} />
            <h2 className="section-title text-white">Premios & Reconocimientos</h2>
            <div className="section-decor-line yellow" />
          </div>

          <div className="prizes-grid">
            <div className="prize-card premium">
              <div className="prize-icon-wrap">
                <Trophy size={40} />
              </div>
              <span className="prize-rank">Para los Ganadores</span>
              <h3>Suscripciones Premium a Herramientas de IA y Desarrollo</h3>
              <p>
                Asegura la continuidad de tu aprendizaje tecnológico. Recibirás suscripciones completas a herramientas avanzadas de programación e IA de última generación.
              </p>
            </div>

            <div className="prize-card">
              <div className="prize-icon-wrap">
                <Award size={40} />
              </div>
              <span className="prize-rank">Para Todos</span>
              <h3>Certificación Oficial de Participación</h3>
              <p>
                Todos los competidores recibirán un diploma oficial emitido por la Pontificia Universidad Católica de Valparaíso (PUCV), respaldando tu valiosa experiencia y destrezas en vibe coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) ── */}
      <section id="faq" className="faq-section">
        <div className="section-header">
          <HelpCircle size={36} className="faq-header-icon" />
          <span className="section-subtitle">Preguntas Frecuentes</span>
          <h2 className="section-title">Resuelve tus dudas</h2>
          <div className="section-decor-line" />
        </div>

        <div className="faq-container">
          <details className="faq-item" open>
            <summary className="faq-question">
              <span>¿Necesito saber programar previamente?</span>
              <ChevronDown className="faq-chevron" size={18} />
            </summary>
            <div className="faq-answer">
              <p>
                <strong>¡Para nada!</strong> No requieres ningún conocimiento técnico previo en código. Nuestros monitores expertos PUCV y los asistentes de Inteligencia Artificial te guiarán paso a paso en el revolucionario proceso de <em>vibe coding</em>. ¡Cualquiera puede participar!
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Tiene algún costo participar?</span>
              <ChevronDown className="faq-chevron" size={18} />
            </summary>
            <div className="faq-answer">
              <p>
                La Hackathon es <strong>100% gratuita</strong> para todos los participantes seleccionados. Esto es posible gracias al financiamiento oficial del prestigioso fondo <strong>CONFÍA</strong> del Programa Con Tus Ideas Universidad Viva de la PUCV.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Tengo que llevar mi propio computador?</span>
              <ChevronDown className="faq-chevron" size={18} />
            </summary>
            <div className="faq-answer">
              <p>
                <strong>No es necesario.</strong> La Pontificia Universidad Católica de Valparaíso proveerá computadores y todo el equipamiento de última generación necesario en sus laboratorios de computación y en el Maker Space para garantizar que todos los equipos programen en igualdad de condiciones.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Cuándo cierran las inscripciones?</span>
              <ChevronDown className="faq-chevron" size={18} />
            </summary>
            <div className="faq-answer">
              <p>
                El plazo máximo de inscripción y postulación de equipos es el día <strong>30 de mayo</strong>. ¡Asegura el cupo de tu colegio a tiempo!
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ── POSTULACIONES POST FAQ (DEADLINE + QR) ── */}
      <section className="deadline-section">
        <div className="date-box">
          <Calendar size={48} strokeWidth={2.8} />
          <div>
            <strong>POSTULACIONES</strong>
            <strong>HASTA EL</strong>
            <b>30 DE MAYO</b>
          </div>
        </div>

        <div className="qr-wrap">
          <img className="qr-image" src={qrImage} alt="Código QR de postulación" />
          <div className="hand-note">
            <span>Escanea</span>
            <span>y postula</span>
          </div>
        </div>
      </section>

      {/* ── GENDER TAG ── */}
      <div className="gender-tag">
        <Users size={20} strokeWidth={2.5} />
        <span>Actividad con perspectiva de género</span>
      </div>

      {/* ── CTA DE CONTACTO Y CIERRE ── */}
      <section className="cta-section">
        <p className="cta-headline">¡ARMA TU EQUIPO Y PARTICIPA EN ESTA EXPERIENCIA ÚNICA!</p>
        <div className="cta-buttons-wrap">
          <a href="https://forms.gle/u8vDWM8q8NYq7jYj7" target="_blank" rel="noopener noreferrer" className="hero-cta-btn yellow-pulse">
            ¡Inscribir a mi equipo ahora!
          </a>
        </div>
        <div className="cta-email">
          <Mail size={18} />
          <span className="cta-label">Contacto y dudas de apoderados o colegios:</span>
          <a href="mailto:rosa.franco.v@mail.pucv.cl" className="cta-address">rosa.franco.v@mail.pucv.cl</a>
        </div>
      </section>

      {/* ── SECCIÓN PATROCINADORES / SOPORTE ── */}
      <section className="support-section">
        <span className="support-label">APOYADO POR:</span>
        <div className="sponsors-grid">
          <div className="sponsor-logo-box">
            <img src={daeLogo} alt="Logo DAE" className="support-logo" />
          </div>
          <div className="sponsor-name-box">
            <strong>DAE PUCV</strong>
            <span>Dirección de Asuntos Estudiantiles</span>
          </div>
          <div className="sponsor-name-box">
            <strong>Fondo CONFÍA</strong>
            <span>Universidad Viva PUCV</span>
          </div>
          <div className="sponsor-name-box">
            <strong>PUCV Sostenible</strong>
            <span>Agenda ODS 2030</span>
          </div>
        </div>
        <p className="support-fine">
          Iniciativa ejecutada bajo el financiamiento del <strong>Fondo CONFÍA</strong> de la Dirección de Asuntos Estudiantiles PUCV.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bottom-bar">
        <div className="circuit-lines left" />
        <p><Snowflake size={17} /> JÓVENES QUE CODEAN HOY, LÍDERES QUE TRANSFORMAN MAÑANA.</p>
        <div className="footer-credits">
          <span>Diego, Benjamín, Álvaro, Tano, César y Rosa • Equipo Hackaton 2026</span>
        </div>
        <div className="circuit-lines right" />
      </footer>

    </div>
  );
}
