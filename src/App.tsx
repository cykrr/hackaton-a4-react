import {
  Calendar,
  CheckCircle2,
  Cpu,
  Mail,
  Pencil,
  Snowflake,
  Target,
  Trophy,
  Users,
  Utensils,
  UserCheck,
  School,
} from 'lucide-react';
import heroImage from '../img/hero-students.png';
import pucvLogo from '../img/pucv-logo-150.webp';
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

function TinyDivider() {
  return <div className="tiny-divider" />;
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="screen-toolbar">
        <strong>Hackaton A4 poster</strong>
        <span>Use Ctrl/Cmd + P → A4 → margins none → background graphics on.</span>
      </div>

      <main className="a4-poster" aria-label="Afiche Hackaton de Invierno A4">
        <Snowflake className="decor-snow snow-1" />
        <Snowflake className="decor-snow snow-2" />
        <Snowflake className="decor-snow snow-3" />
        <Snowflake className="decor-snow snow-4" />
        <div className="paper-texture" />

        <section className="header-left">
          <MountainMark />

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

          <h2 className="tagline">INNOVAR HOY, TRANSFORMAR EL MAÑANA</h2>

          <p className="intro-copy">
            Una experiencia formativa intensiva para estudiantes de 1ero y 2do medio que combina
            programación e Inteligencia Artificial para diseñar soluciones a desafíos reales de nuestras
            comunidades y del planeta.
          </p>
        </section>

        <section className="hero-placeholder" aria-label="Imagen de estudiantes">
          <img className="hero-image" src={heroImage} alt="Estudiantes participando en hackatón" />
        </section>

        <section className="purpose-brush">
          <OdsWheel />
          <div>
            <h3>TECNOLOGÍA CON PROPÓSITO</h3>
            <p>
              Trabajamos en soluciones para los Objetivos de Desarrollo Sostenible (ODS) de la Agenda
              2030 de la ONU.
            </p>
          </div>
        </section>

        <section className="main-cta">
          <div className="cta-icon">
            <School size={42} strokeWidth={2.2} />
          </div>
          <div>
            <strong>¡SÉ PARTE Y POSTULA</strong>
            <strong>A TU ESTABLECIMIENTO!</strong>
          </div>
        </section>

        <p className="date-copy">
          Forma parte de esta jornada única durante las vacaciones de invierno 2026.
        </p>

        <section className="date-box">
          <Calendar size={38} strokeWidth={2.8} />
          <div>
            <strong>POSTULACIONES</strong>
            <strong>HASTA EL</strong>
            <b>30 DE MAYO</b>
          </div>
        </section>

        <section className="info-panel">
          <article className="info-col col-1">
            <IconBubble>
              <Target size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3>1. OBJETIVOS</h3>
            <p>
              Fomentar la curiosidad científica y desarrollar competencias tecnológicas avanzadas
              utilizando IA y <strong>“vibe coding”</strong> para resolver problemas reales alineados con los ODS.
            </p>
          </article>

          <div className="panel-divider d1" />

          <article className="info-col col-2">
            <IconBubble>
              <Users size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3>2. METODOLOGÍA</h3>
            <ul>
              <li>Jornada única de 6 a 8 horas.</li>
              <li>Equipos de 3 estudiantes — 6 a 8 equipos.</li>
              <li>Acompañamiento de estudiantes universitarios como monitores.</li>
              <li>Desarrollo de prototipos con apoyo de herramientas de IA.</li>
              <li>Presentación ante jurado, diplomas y premios para los ganadores.</li>
            </ul>
          </article>

          <div className="panel-divider d2" />

          <article className="info-col col-3">
            <IconBubble>
              <Trophy size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3>3. ¿QUÉ OBTIENEN LOS ESTUDIANTES?</h3>
            <ul className="check-list">
              <li><CheckCircle2 size={17} />Nuevas habilidades para el futuro</li>
              <li><CheckCircle2 size={17} />Trabajo colaborativo y liderazgo</li>
              <li><CheckCircle2 size={17} />Impacto positivo en su comunidad y el planeta</li>
              <li><CheckCircle2 size={17} />Reconocimiento y premios</li>
            </ul>
          </article>
        </section>

        <section className="resources-panel">
          <h3>4. RECURSOS Y LOGÍSTICA</h3>
          <div className="resources-grid">
            <div className="resource-item">
              <IconBubble><Utensils size={24} /></IconBubble>
              <p>Alimentación para estudiantes y apoderados.</p>
            </div>
            <TinyDivider />
            <div className="resource-item">
              <IconBubble><Pencil size={24} /></IconBubble>
              <p>Materiales de papelería para el desarrollo de ideas.</p>
            </div>
            <TinyDivider />
            <div className="resource-item">
              <IconBubble><Cpu size={24} /></IconBubble>
              <p>Licencias de herramientas de IA y programación para los prototipos.</p>
            </div>
            <TinyDivider />
            <div className="resource-item">
              <IconBubble><UserCheck size={24} /></IconBubble>
              <p>Acompañamiento de monitores universitarios durante toda la jornada.</p>
            </div>
          </div>
        </section>

        <section className="contact-panel">
          <div className="contact-left">
            <div className="mail-ring"><Mail size={34} /></div>
            <div>
              <strong>INSCRIBE A TU COLEGIO</strong>
              <b>Y SÉ PARTE DEL CAMBIO</b>
            </div>
          </div>

          <div className="contact-email">
            <Mail size={21} />
            <div>
              <span>Más información e inscripciones:</span>
              <strong>rosa.franco.v@mail.pucv.cl</strong>
            </div>
          </div>

          <div className="contact-qr">
            <img className="qr-image" src={qrImage} alt="Código QR de postulación" />
            <div className="hand-note">
              <span>Escanea</span>
              <span>y postula</span>
            </div>
          </div>
        </section>

        <section className="support-strip">
          <span>CON EL APOYO DE:</span>
          <img className="support-logo" src={pucvLogo} alt="Logo PUCV" />
        </section>

        <footer className="bottom-bar">
          <div className="circuit-lines left" />
          <p><Snowflake size={17} /> JÓVENES QUE CODEAN HOY, LÍDERES QUE TRANSFORMAN MAÑANA.</p>
          <span>Conectemos a nuestras comunidades educativas con el futuro.</span>
          <div className="circuit-lines right" />
        </footer>
      </main>
    </div>
  );
}
