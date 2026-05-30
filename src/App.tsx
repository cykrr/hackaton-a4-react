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

          <h2 className="tagline" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>CREA SOLUCIONES CON IA PARA DESAFÍOS REALES DE TU COMUNIDAD</span>
            <span style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <OdsWheel /> INSPIRADOS EN LOS OBJETIVOS DE DESARROLLO SOSTENIBLE
            </span>
          </h2>

          <p className="intro-copy" style={{ fontSize: '15px', lineHeight: '1.4' }}>
            Para estudiantes de 1° y 2° medio.<br />
            <strong style={{ color: 'var(--blue)' }}>LUNES 1 DE JULIO DE 2026</strong>
          </p>
        </section>

        <section className="hero-placeholder" aria-label="Imagen de estudiantes">
          <img className="hero-image" src={heroImage} alt="Estudiantes participando en hackatón" />
        </section>

        <section className="info-panel" style={{ top: '440px', left: '30px', height: '180px' }}>
          <article className="info-col col-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IconBubble>
              <Target size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', marginTop: '15px', textAlign: 'center' }}>APRENDE</h3>
            <p style={{ textAlign: 'center', fontSize: '15px', lineHeight: '1.4' }}>
              IA, creatividad y trabajo en equipo.
            </p>
          </article>

          <div className="panel-divider d1" style={{ height: '140px', top: '20px' }} />

          <article className="info-col col-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IconBubble>
              <Cpu size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', marginTop: '15px', textAlign: 'center' }}>CREA</h3>
            <p style={{ textAlign: 'center', fontSize: '15px', lineHeight: '1.4' }}>
              Un prototipo con tu equipo para un desafío real.
            </p>
          </article>

          <div className="panel-divider d2" style={{ height: '140px', top: '20px' }} />

          <article className="info-col col-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IconBubble>
              <Trophy size={34} strokeWidth={2.6} />
            </IconBubble>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', marginTop: '15px', textAlign: 'center' }}>DESTACA</h3>
            <p style={{ textAlign: 'center', fontSize: '15px', lineHeight: '1.4' }}>
              Presenta tu idea frente al jurado y gana reconocimiento.
            </p>
          </article>
        </section>

        <div style={{ position: 'absolute', top: '645px', left: '0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', paddingRight: '100px' }}>
            <section className="date-box" style={{ position: 'relative', top: 'auto', left: 'auto', width: '280px', height: '110px', transform: 'none', margin: 0, borderRadius: '18px', boxShadow: '0 15px 35px rgba(244, 180, 49, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <Calendar size={48} strokeWidth={2.8} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '21px', margin: 0 }}>POSTULACIONES</strong>
                <strong style={{ fontSize: '21px', margin: 0 }}>HASTA EL</strong>
                <b style={{ fontSize: '34px', margin: 0 }}>10 DE JUNIO</b>
              </div>
            </section>

            <div className="contact-qr" style={{ position: 'relative', top: 'auto', left: 'auto', height: '110px', width: '110px', background: 'white', borderRadius: '18px', border: '2px solid #e0e6ed', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img className="qr-image" src={qrImage} alt="Código QR de postulación" style={{ width: '90px', height: '90px' }} />
              <div className="hand-note" style={{ position: 'absolute', left: '125px', width: 'max-content', display: 'flex', flexDirection: 'column', gap: '0', transform: 'rotate(-2deg)' }}>
                <span style={{ fontSize: '22px', fontWeight: 900, color: 'var(--blue)', fontFamily: 'Caveat, cursive', lineHeight: '1' }}>Escanea</span>
                <span style={{ fontSize: '22px', fontWeight: 900, color: 'var(--blue)', fontFamily: 'Caveat, cursive', lineHeight: '1' }}>y postula</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', fontWeight: 800, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'rgba(7, 95, 174, 0.08)', padding: '8px 20px', borderRadius: '99px' }}>
            <Users size={20} strokeWidth={2.5} />
            <span>Actividad con perspectiva de género</span>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '840px', left: '0', width: '100%', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', fontWeight: '900', color: 'var(--blue)', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            ¡ARMA TU EQUIPO Y PARTICIPA!
          </p>
          <div className="contact-email" style={{ position: 'static', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#10213c', width: 'auto' }}>
            <Mail size={18} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ color: 'var(--navy)', fontSize: '14px', display: 'inline', margin: 0 }}>Dudas:</span>
              <strong style={{ color: 'var(--blue)', fontSize: '16px', display: 'inline', margin: 0 }}>rosa.franco.v@mail.pucv.cl</strong>
            </div>
          </div>
        </div>

        <section className="resources-panel" style={{ top: '930px', left: '30px', width: '734px', background: 'transparent', boxShadow: 'none', borderTop: '2px dashed rgba(6, 26, 55, 0.15)', borderRadius: 0, padding: '20px 0', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--navy)' }}>
            Incluye mentores, materiales, alimentación y premios.
          </p>
        </section>

        <section className="support-strip-new" style={{ position: 'absolute', top: '980px', left: '0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', zIndex: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
            <span style={{ color: 'var(--blue)', fontSize: '15px', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              CON EL APOYO DE:
            </span>
            <img src={daeLogo} alt="Logo DAE" style={{ height: '70px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <span style={{ textAlign: 'center', color: 'var(--navy)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em', marginTop: '-4px' }}>
            Proyecto financiado por <strong>FONDO CONFÍA</strong> del Programa Con Tus Ideas Universidad Viva
          </span>
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
