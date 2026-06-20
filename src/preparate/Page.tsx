import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Cpu,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  Copy,
  ChevronDown,
  ChevronUp,
  Terminal,
  Lightbulb,
  Users,
  Brain,
  Network,
  FileText,
  ListChecks,
  RefreshCw,
  Bug,
  Shield,
  Layers,
  Sparkles,
  Trophy,
  Snowflake,
  Clock,
  DollarSign,
  Code,
} from 'lucide-react';
import './styles.css';

/* ── CopyButton: copies text to clipboard ── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* fallback */ }
  };
  return (
    <button className="copy-btn" onClick={handle} aria-label="Copiar plantilla">
      {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
      {copied ? '¡Copiado!' : 'Copiar'}
    </button>
  );
}

/* ── FoldingSection: collapsible panel ── */
function FoldingSection({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`fold-section ${open ? 'is-open' : ''}`}>
      <button className="fold-trigger" onClick={() => setOpen(!open)}>
        <span className="fold-trigger-left">
          {icon}
          <span>{title}</span>
        </span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className="fold-body">{children}</div>
    </div>
  );
}

/* ── PromptCard: weak vs master prompt comparison ── */
function PromptCard({
  intention,
  weak,
  master,
}: {
  intention: string;
  weak: string;
  master: string;
}) {
  return (
    <div className="prompt-card">
      <div className="prompt-intention">
        <Target size={16} />
        <span>{intention}</span>
      </div>
      <div className="prompt-examples">
        <div className="prompt-example bad">
          <span className="prompt-label">❌ Prompt Débil</span>
          <p>{weak}</p>
        </div>
        <div className="prompt-arrow">→</div>
        <div className="prompt-example good">
          <span className="prompt-label">✅ Prompt Maestro (R.C.T.E.)</span>
          <p>{master}</p>
        </div>
      </div>
      <CopyButton text={master} />
    </div>
  );
}

/* ── CodeBlock: simple inline code display ── */
function CodeBlock({ code }: { code: string }) {
  return (
    <div className="code-block">
      <pre><code>{code}</code></pre>
      <CopyButton text={code} />
    </div>
  );
}

/* ── TipBox: highlighted tip / warning ── */
function TipBox({
  type = 'tip',
  title,
  children,
}: {
  type?: 'tip' | 'warning' | 'danger' | 'info';
  title?: string;
  children: React.ReactNode;
}) {
  const icons: Record<string, React.ReactNode> = {
    tip: <Lightbulb size={20} />,
    warning: <AlertTriangle size={20} />,
    danger: <Shield size={20} />,
    info: <BookOpen size={20} />,
  };
  return (
    <div className={`tip-box ${type}`}>
      <strong className="tip-title">
        {icons[type]}
        {title || type.charAt(0).toUpperCase() + type.slice(1)}
      </strong>
      <div className="tip-body">{children}</div>
    </div>
  );
}

/* ── StepFlow: numbered step ── */
function StepFlow({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="step-flow">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ──────────────────────────────────────────────── */
export default function PreparatePage() {
  return (
    <div className="preparate-root">
      {/* ── TOP NAV ── */}
      <nav className="preparate-nav">
        <Link to="/" className="preparate-back-link">
          <ArrowLeft size={18} />
          <span>Volver al inicio</span>
        </Link>
        <span className="preparate-nav-brand">
          <Snowflake size={16} />
          Hackathon de Invierno 2026
        </span>
      </nav>

      {/* ── HERO ── */}
      <header className="preparate-hero">
        <div className="preparate-hero-bg" />
        <div className="preparate-hero-content">
          <span className="preparate-hero-badge">Guía Oficial</span>
          <h1>Prepárate para la Hackathon</h1>
          <p className="preparate-hero-sub">
            Tu guía de supervivencia y <strong>Vibe Coding</strong> para llegar
            listo el <strong>1 de julio de 2026</strong>.
          </p>
          <div className="preparate-hero-stats">
            <span><BookOpen size={14} /> 6 bloques de contenido</span>
            <span><Target size={14} /> Framework R.C.T.E.</span>
            <span><Zap size={14} /> Para estudiantes de 1° y 2° medio</span>
          </div>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="preparate-toc" aria-label="Tabla de contenidos">
        <strong>En esta guía:</strong>
        <a href="#intro">1. Introducción y Mentalidad</a>
        <a href="#glosario">2. Glosario Técnico Esencial</a>
        <a href="#prompting">3. Guía Maestra de Prompt Engineering</a>
        <a href="#iteracion">4. Ciclo de Iteración Rápida</a>
        <a href="#emergencia">5. Manual de Emergencia</a>
        <a href="#checklist">6. Checklist «Minutos Antes»</a>
      </nav>

      {/* ════════════════════════════════════════════
         BLOQUE 1: INTRODUCCIÓN Y MENTALIDAD
         ════════════════════════════════════════════ */}
      <section id="intro" className="preparate-block">
        <div className="block-header">
          <Brain size={28} />
          <div>
            <span className="block-number">Bloque 1</span>
            <h2>Introducción y Mentalidad</h2>
            <p className="block-sub">El Rol del Arquitecto</p>
          </div>
        </div>

        <div className="block-body">
          <h3>1.1 ¿Qué es el Vibe Coding en el mundo real?</h3>
          <p>
            Has escuchado bien: <strong>Vibe Coding</strong> no se trata de
            memorizar cientos de líneas de sintaxis. Se trata de pasar de
            «escribir líneas de código» a <strong>orquestar sistemas</strong>.
            El programador de hoy define el <em>qué</em> y el
            <em>por qué</em>; la IA se encarga del <em>cómo</em>.
          </p>

          <TipBox type="info" title="La analogía del Director de Cine">
            <p>
              Tú eres el<strong> director técnico</strong>. No necesitas saber
              operar la cámara perfectamente o editar el color fotograma por
              fotograma (eso lo hace la IA), pero sí debes saber
              <strong> exactamente qué escena quieres filmar</strong>, detectar
              si los actores se desviaron del guion y mantener la coherencia de
              la historia.
            </p>
          </TipBox>

          <h3>1.2 Los tres pilares del éxito en una Hackatón con IA</h3>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <Layers size={28} />
              </div>
              <h4>Descomposición</h4>
              <p>
                Rompe un problema gigante (ej. «frenar el desperdicio de agua»)
                en micro-tareas (ej. «diseñar un botón que guarde los litros
                consumidos»).
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <CheckCircle size={28} />
              </div>
              <h4>Validación Crítica</h4>
              <p>
                No confíes ciegamente en la IA. Prueba cada pequeña función
                antes de avanzar a la siguiente. Pregúntate siempre:
                <em> «¿Esto realmente funciona?»</em>
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <Zap size={28} />
              </div>
              <h4>Gestión de la Energía</h4>
              <p>
                Mantén prompts limpios y cortos para no agotar la
                <strong> ventana de contexto</strong> ni el presupuesto de
                tokens del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         BLOQUE 2: GLOSARIO TÉCNICO ESENCIAL
         ════════════════════════════════════════════ */}
      <section id="glosario" className="preparate-block alt">
        <div className="block-header">
          <BookOpen size={28} />
          <div>
            <span className="block-number">Bloque 2</span>
            <h2>Glosario Técnico Esencial</h2>
            <p className="block-sub">El Motor bajo el Capó</p>
          </div>
        </div>

        <div className="block-body">
          <div className="glossary-grid">
            <FoldingSection
              title="LLM — El Cerebro Central"
              icon={<Brain size={20} />}
            >
              <p>
                Un <strong>Modelo de Lenguaje Grande (LLM)</strong> es un
                programa entrenado con una cantidad inmensa de texto y código.
                No piensa ni tiene conciencia; «predice» la siguiente palabra o
                línea de código basándose en patrones estadísticos.
              </p>
              <TipBox type="tip">
                Piensa en un LLM como un<strong> asistiente
                superdotado</strong> que ha leído millones de libros y
                programas, pero que <em>no tiene sentido común</em>. Tú
                eres quien pone la lógica.
              </TipBox>
            </FoldingSection>

            <FoldingSection
              title="APIs de IA — El Cable Conector"
              icon={<Network size={20} />}
            >
              <p>
                <strong>API</strong> significa «Interfaz de Programación de
                Aplicaciones». Es el canal por el que tu editor de código le
                habla a los servidores en la nube que ejecutan la IA.
              </p>
              <p>El flujo es así:</p>
              <div className="flow-diagram">
                <span>Tu código local 🖥️</span>
                <span className="flow-arrow">→</span>
                <span>API 🌐</span>
                <span className="flow-arrow">→</span>
                <span>Servidores en la Nube ☁️</span>
              </div>
              <p>
                La velocidad de respuesta puede variar si hay mucha gente
                usando el servicio al mismo tiempo.
              </p>
            </FoldingSection>

            <FoldingSection
              title="La Anatomía Dinámica del Token"
              icon={<FileText size={20} />}
              defaultOpen
            >
              <p>
                Los <strong>tokens</strong> son las unidades mínimas que la IA
                lee. No son palabras completas; pueden ser fragmentos de
                palabras o caracteres.
              </p>
              <TipBox type="warning" title="El Contador Invisible">
                <p>
                  El código fuente consume <strong>muchos más tokens</strong>{' '}
                  que el texto plano debido a la sintaxis{' '}
                  <code>{'{'}</code>, <code>{'}'}</code>,{' '}
                  <code>{'['}</code>, <code>{']'}</code>, sangrías, etc.
                </p>
              </TipBox>
              <TipBox type="danger" title="La regla del impacto">
                <p>
                  Un prompt de 10 palabras que incluye por error una base de
                  datos de 5.000 líneas gasta el equivalente a leer
                  <strong> un libro entero en un segundo</strong>. ¡Sé
                  quirúrgico con lo que le pasas a la IA!
                </p>
              </TipBox>
            </FoldingSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         BLOQUE 3: GUÍA MAESTRA DE PROMPT ENGINEERING
         ════════════════════════════════════════════ */}
      <section id="prompting" className="preparate-block">
        <div className="block-header">
          <Zap size={28} />
          <div>
            <span className="block-number">Bloque 3</span>
            <h2>Guía Maestra de Prompt Engineering</h2>
            <p className="block-sub">El Framework R.C.T.E.</p>
          </div>
        </div>

        <div className="block-body">
          <p className="lead-text">
            Para obtener código perfecto de un agente o LLM, usa siempre la
            estructura <strong>R.C.T.E.</strong> Es como una receta de cocina:
            si falta un ingrediente, el plato no sale bien.
          </p>

          <div className="rcte-grid">
            <div className="rcte-card">
              <span className="rcte-letter">R</span>
              <h4>Rol</h4>
              <p>Quién es la IA.</p>
              <CodeBlock code={'Actúa como un desarrollador experto en CSS y Tailwind.'} />
            </div>
            <div className="rcte-card">
              <span className="rcte-letter">C</span>
              <h4>Contexto</h4>
              <p>Qué estamos construyendo y con qué tecnologías.</p>
              <CodeBlock code={'Estoy programando una interfaz web en React para una aplicación de reciclaje vecinal.'} />
            </div>
            <div className="rcte-card">
              <span className="rcte-letter">T</span>
              <h4>Tarea</h4>
              <p>Qué acción exacta debe realizar.</p>
              <CodeBlock code={'Crea un componente de tarjeta para mostrar el progreso de reciclaje de un usuario.'} />
            </div>
            <div className="rcte-card">
              <span className="rcte-letter">E</span>
              <h4>Especificaciones</h4>
              <p>Los límites del diseño o lógica.</p>
              <CodeBlock code={'Debe tener fondo gris claro, borde redondeado, mostrar un porcentaje y usar tipografía legible. No agregues librerías externas.'} />
            </div>
          </div>

          <h3>Tabla de Patrones: Del Prompt Débil al Prompt Maestro</h3>

          <div className="prompt-table">
            <PromptCard
              intention="Crear un diseño"
              weak="Hazme una página bonita para mi proyecto de los ODS."
              master="Actúa como diseñador UI/UX. Genera la estructura HTML de un Hero Section usando Tailwind CSS. Debe incluir un título llamativo sobre acción climática, un párrafo descriptivo corto y un botón verde brillante que diga 'Comenzar'. Asegura que sea responsivo para celulares."
            />
            <PromptCard
              intention="Resolver un bug"
              weak="No funciona mi botón, arréglalo."
              master="Estoy usando React. Al hacer clic en el botón de guardar, la consola muestra 'TypeError: Cannot read properties of undefined (reading 'id')'. Aquí está el código del componente [pegar solo las 20 líneas del componente]. ¿Cómo soluciono este error de referencia?"
            />
            <PromptCard
              intention="Agregar funciones"
              weak="Ponle un sistema de puntos a la app."
              master="Actúa como desarrollador Frontend. Necesito una función en JavaScript que reciba un número de botellas recicladas (entero) y devuelva los puntos acumulados (multiplicando las botellas por 10). Incluye validación para que si el número es negativo, devuelva 0."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         BLOQUE 4: CICLO DE ITERACIÓN RÁPIDA
         ════════════════════════════════════════════ */}
      <section id="iteracion" className="preparate-block alt">
        <div className="block-header">
          <RefreshCw size={28} />
          <div>
            <span className="block-number">Bloque 4</span>
            <h2>El Ciclo de Iteración Rápida</h2>
            <p className="block-sub">Cómo no quedar Atascado</p>
          </div>
        </div>

        <div className="block-body">
          <p className="lead-text">
            Este es el núcleo metodológico para evitar que los equipos se
            desmoronen a mitad de la jornada. Cuando trabajas con agentes de IA,
            el flujo de trabajo debe seguir estrictamente estos pasos:
          </p>

          <div className="iteration-flow">
            <StepFlow number="1" title="Escribir un Prompt R.C.T.E.">
              <p>Usa la estructura del Bloque 3. Sé específico.</p>
            </StepFlow>
            <div className="flow-down-arrow">⬇️</div>
            <StepFlow number="2" title="Generar Código">
              <p>Ejecuta el prompt y deja que la IA genere el código.</p>
            </StepFlow>
            <div className="flow-down-arrow">⬇️</div>
            <StepFlow number="3" title="Probar inmediatamente en el navegador">
              <p>Refresca la página y mira si funciona.</p>
            </StepFlow>
            <div className="flow-decision">
              <span>🤔 ¿Funcionó?</span>
              <div className="flow-branches">
                <span className="flow-yes">✅ Sí → Guardar / Commit</span>
                <span className="flow-no">
                  ❌ No → Aplicar Regla de los 3 Intentos
                </span>
              </div>
            </div>
            <div className="flow-loop">
              <RefreshCw size={16} />
              <span>Volver al paso 1 con el error aprendido</span>
            </div>
          </div>

          <h3>La Regla de los 3 Intentos (The 3-Strike Rule)</h3>

          <div className="strikes">
            <div className="strike-card">
              <span className="strike-num">1</span>
              <h4>Intento 1</h4>
              <p>
                Le pides a la IA que cree la función. Si tira error, le pegas
                el error exacto de la consola.
              </p>
            </div>
            <div className="strike-arrow">→</div>
            <div className="strike-card">
              <span className="strike-num">2</span>
              <h4>Intento 2</h4>
              <p>
                Si la IA vuelve a fallar, pídele que{' '}
                <strong>cambie de estrategia</strong>. «El enfoque anterior no
                funcionó. Intenta resolverlo usando otra función o
                simplificando la lógica».
              </p>
            </div>
            <div className="strike-arrow">→</div>
            <div className="strike-card danger">
              <span className="strike-num">3</span>
              <h4>Intento 3</h4>
              <p>
                <strong>¡Detente!</strong> No sigas presionando «Enter». El
                contexto está contaminado. Borra el hilo del chat, abre uno
                nuevo, lee el código tú mismo o{' '}
                <strong>levanta la mano</strong> para pedir ayuda a un mentor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         BLOQUE 5: MANUAL DE EMERGENCIA
         ════════════════════════════════════════════ */}
      <section id="emergencia" className="preparate-block">
        <div className="block-header">
          <Bug size={28} />
          <div>
            <span className="block-number">Bloque 5</span>
            <h2>Manual de Emergencia</h2>
            <p className="block-sub">Contra «Alucinaciones» y Errores</p>
          </div>
        </div>

        <div className="block-body">
          <h3>¿Qué es una Alucinación de código?</h3>
          <p>
            Cuando la IA <strong>inventa</strong> una librería que no existe o
            asume que tienes configurado un archivo que jamás creaste. Es como
            si un chef te pidiera una «sartén cuántica» — suena técnico, pero no
            existe.
          </p>

          <TipBox type="warning" title="Cómo detectar que la IA está alucinando">
            <ul>
              <li>
                Te pide instalar paquetes extraños que no estaban en la
                inducción.
              </li>
              <li>
                El código de repente se vuelve ridículamente largo (más de 200
                líneas para un solo botón).
              </li>
              <li>
                Cambia variables que ya tenías definidas y que funcionaban bien.
              </li>
            </ul>
          </TipBox>

          <h3>Técnicas de Desbloqueo Autónomo</h3>

          <div className="techniques-grid">
            <div className="technique-card">
              <div className="technique-icon">
                <Shield size={24} />
              </div>
              <h4>Aislamiento</h4>
              <p>
                Si una sección de la página falla, cópiala en un archivo en
                blanco separado y pídele a la IA que la analice sola, lejos del
                resto del proyecto.
              </p>
            </div>
            <div className="technique-card">
              <div className="technique-icon">
                <Terminal size={24} />
              </div>
              <h4>Inyección de Logs</h4>
              <p>
                Pídele a la IA: <em>«Agrega console.log() estratégicos en este
                código para saber exactamente en qué línea se detiene la
                ejecución»</em>. Esto te enseña a leer el flujo de datos.
              </p>
            </div>
            <div className="technique-card">
              <div className="technique-icon">
                <RefreshCw size={24} />
              </div>
              <h4>El botón de reinicio</h4>
              <p>
                Si el agente de IA se confunde por completo, limpia la consola,
                haz un rollback del archivo al último estado que funcionaba y
                replantea la idea desde un ángulo más sencillo.
              </p>
            </div>
          </div>

          <div className="emergency-quickref">
            <h4>🆘 Referencia rápida de errores comunes</h4>
            <table className="error-table">
              <thead>
                <tr>
                  <th>Error en consola</th>
                  <th>Qué significa</th>
                  <th>Qué hacer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>TypeError: Cannot read properties of undefined</code>
                  </td>
                  <td>Estás usando una variable que no existe o no está definida aún.</td>
                  <td>Revisa que la variable esté bien escrita y creada antes de usarla.</td>
                </tr>
                <tr>
                  <td>
                    <code>Module not found</code>
                  </td>
                  <td>Intentaste importar un archivo o librería que no está disponible.</td>
                  <td>Verifica que el archivo existe y la ruta es correcta.</td>
                </tr>
                <tr>
                  <td>
                    <code>Unexpected token</code>
                  </td>
                  <td>Falta un símbolo como <code>{')'}</code>, <code>{']'}</code> o <code>{'}'}</code>.</td>
                  <td>Busca paréntesis, corchetes o llaves sin cerrar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         BLOQUE 6: CHECKLIST
         ════════════════════════════════════════════ */}
      <section id="checklist" className="preparate-block alt">
        <div className="block-header">
          <ListChecks size={28} />
          <div>
            <span className="block-number">Bloque 6</span>
            <h2>Checklist «Minutos Antes del Inicio»</h2>
            <p className="block-sub">
              Revisa esto en tu teléfono antes de que empiece la cuenta
              regresiva
            </p>
          </div>
        </div>

        <div className="block-body">
          <div className="checklist-grid">
            <div className="checklist-item">
              <div className="checklist-box">
                <input type="checkbox" id="chk-ods" />
                <label htmlFor="chk-ods">
                  <strong>Tengo mi ODS definido:</strong> Sé exactamente qué
                  problema del mundo real voy a resolver.
                </label>
              </div>
            </div>
            <div className="checklist-item">
              <div className="checklist-box">
                <input type="checkbox" id="chk-console" />
                <label htmlFor="chk-console">
                  <strong>La consola del navegador está abierta:</strong> Sé
                  presionar <kbd>F12</kbd> (o Click Derecho → Inspeccionar →
                  Consola) para ver los errores en tiempo real.
                </label>
              </div>
            </div>
            <div className="checklist-item">
              <div className="checklist-box">
                <input type="checkbox" id="chk-base" />
                <label htmlFor="chk-base">
                  <strong>Tengo la plantilla base corriendo:</strong> Mi entorno
                  local (o entorno web asignado) compila correctamente antes de
                  meterle IA.
                </label>
              </div>
            </div>
            <div className="checklist-item">
              <div className="checklist-box">
                <input type="checkbox" id="chk-prompts" />
                <label htmlFor="chk-prompts">
                  <strong>Mis prompts van a ser quirúrgicos:</strong> No le voy
                  a pasar archivos gigantes a la IA si el error es de una sola
                  línea.
                </label>
              </div>
            </div>
            <div className="checklist-item">
              <div className="checklist-box">
                <input type="checkbox" id="chk-mvp" />
                <label htmlFor="chk-mvp">
                  <strong>Mentalidad de MVP (Producto Mínimo Viable):</strong>{' '}
                  Es mejor tener una aplicación con 3 pantallas que funcionen
                  perfecto a tener 15 pantallas rotas que consumieron todos los
                  tokens del equipo.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE SATELLITE PAGES ── */}
      <section className="explore-section">
        <h2>📚 Explora más</h2>
        <p className="explore-sub">
          Profundiza en cada tema con estas guías especializadas.
        </p>

        <div className="explore-grid">
          <Link to="/preparate/agentes" className="explore-card">
            <div className="explore-card-icon" style={{background: '#4285F420', color: '#4285F4'}}>
              <Zap size={22} />
            </div>
            <h3>Los Agentes de IA</h3>
            <p>
              Claude Code, Antigravity CLI, OpenCode y más. Tu equipo de
              desarrollo autónomo.
            </p>
            <span className="explore-card-tag">Lee más →</span>
          </Link>

          <Link to="/preparate/llm" className="explore-card">
            <div className="explore-card-icon" style={{background: '#f4b43120', color: '#f4b431'}}>
              <Brain size={22} />
            </div>
            <h3>El Cerebro: LLMs</h3>
            <p>
              Transformers, Atención, modelos populares. El motor matemático
              detrás de la IA.
            </p>
            <span className="explore-card-tag">Lee más →</span>
          </Link>

          <Link to="/preparate/api-y-tokens" className="explore-card">
            <div className="explore-card-icon" style={{background: '#10b98120', color: '#10b981'}}>
              <DollarSign size={22} />
            </div>
            <h3>API y Tokens</h3>
            <p>
              La economía del token, input vs output, y cómo no gastar todo
              el presupuesto.
            </p>
            <span className="explore-card-tag">Lee más →</span>
          </Link>

          <Link to="/preparate/stack" className="explore-card">
            <div className="explore-card-icon" style={{background: '#61dafb20', color: '#61dafb'}}>
              <Code size={22} />
            </div>
            <h3>Stack Tecnológico</h3>
            <p>
              React + Vite + Tailwind, Supabase, Vercel. El stack ganador
              para la Hackatón.
            </p>
            <span className="explore-card-tag">Lee más →</span>
          </Link>

          <Link to="/preparate/limitaciones" className="explore-card">
            <div className="explore-card-icon" style={{background: '#ef444420', color: '#ef4444'}}>
              <AlertTriangle size={22} />
            </div>
            <h3>Limitaciones</h3>
            <p>
              Lo que NO debes intentar en la Hackatón y la mentalidad MVP
              para ganar.
            </p>
            <span className="explore-card-tag">Lee más →</span>
          </Link>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="preparate-cta">
        <Trophy size={36} />
        <h2>¡Llegaste hasta aquí!</h2>
        <p>
          Ahora que tienes todas las herramientas, solo falta una cosa:{' '}
          <strong>inscribir a tu equipo</strong>.
        </p>
        <div className="preparate-cta-actions">
          <a
            href="https://forms.gle/u8vDWM8q8NYq7jYj7"
            target="_blank"
            rel="noopener noreferrer"
            className="preparate-cta-btn"
          >
            ¡Inscribir a mi equipo ahora!
          </a>
          <Link to="/" className="preparate-cta-secondary">
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="preparate-footer">
        <p>
          <Snowflake size={16} /> Hackathon de Invierno 2026 · PUCV
        </p>
        <p>
          Guía creada para estudiantes de 1° y 2° medio · Vibe Coding con IA
        </p>
      </footer>
    </div>
  );
}
