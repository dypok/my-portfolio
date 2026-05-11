"use client";

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Diccionario de Idiomas Optimizado ──
const translations = {
  es: {
    nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', hire: 'Contratar' },
    hero: {
      available: 'Disponible para trabajar',
      desc1: 'Desarrollador Full-Stack construyendo',
      desc2: 'De Barranquilla · Curador Digital',
      btnProject: 'Ver Proyectos', btnContact: 'Contactar →',
      stats: { y: 'Años Codeando', env: 'Entorno', edu: 'Formación' },
      words: ['aplicaciones escalables.', 'bases de datos relacionales.', 'interfaces minimalistas.', 'soluciones robustas.']
    },
    about: {
      tag: 'Quién Soy', title1: 'De la lógica', title2: 'A la realidad',
      p1: 'Soy un Desarrollador Full-Stack enfocado en construir productos digitales robustos y sistemas de gestión eficientes. Mi perfil técnico combina el diseño de interfaces limpias con arquitecturas sólidas de bases de datos.',
      p2: 'Actualmente estudio en la Universidad de la Costa (CUC) y potencio mis habilidades de programación, inglés y blandas entrenando en Riwi.',
      p3: 'Mi entorno ideal es una terminal de Linux, buscando siempre optimizar el rendimiento y mantener un código limpio en todo lo que construyo.',
      facts: ['Estudiante universitario - Universidad de la Costa (CUC)', 'Desarrollador en formación continua - Riwi', 'Entusiasta de Linux y hardware modding', 'Curador de estéticas digitales minimalistas']
    },
    skills: { tag: 'Qué Domino', title1: 'Experiencia', title2: 'Técnica' },
    projects: {
      tag: 'Lo Que He Construido', title1: 'Proyectos', title2: 'Destacados',
      wallyDesc: 'Aplicación de gestión integral para talleres mecánicos. Incluye sistema de autenticación de roles, control de inventario y está optimizada para su despliegue multiplataforma como APK en Android mediante Capacitor.',
      testarazoDesc: 'Un juego 2D de fútbol basado en físicas de colisiones, gravedad y movimiento realista del balón, construido íntegramente desde cero con lógica matemática aplicada.',
      gymDesc: 'Diseño e implementación de un modelo relacional y base de datos SQL enfocada en la administración completa de usuarios, membresías e instalaciones de un gimnasio.',
      source: 'Código Fuente', diagrams: 'Ver Diagramas'
    },
    experience: {
      tag: 'Dónde He Estado', title1: 'Trayectoria', title2: 'Profesional',
      present: 'Presente', devRole: 'Desarrollador en Formación', devCompany: 'Riwi — Formación Tech Intensiva',
      devDesc: 'Desarrollo de proyectos Full-Stack, perfeccionamiento de habilidades de programación, inglés técnico y habilidades blandas.',
      devAchieve: ['Construcción de aplicaciones escalables en React/Next y bases de datos relacionales', 'Colaboración activa en flujos de trabajo ágiles'],
      engRole: 'Estudiante de Ingeniería', engCompany: 'Universidad de la Costa (CUC) — Barranquilla',
      engDesc: 'Estudios enfocados en la ingeniería de software y el desarrollo de bases lógicas computacionales.',
      engAchieve: ['Desarrollo de propuestas de liderazgo como el proyecto "Corazón D1"', 'Creación y gestión de modelos de bases de datos universitarias']
    },
    contact: {
      tag: 'Ponte en Contacto', title1: 'Construyamos algo', title2: 'Juntos',
      intro: 'Estoy abierto a nuevas oportunidades de desarrollo, colaborar en proyectos interesantes o abordar cualquier reto técnico que requiera un alto nivel de detalle.',
      formName: 'Nombre Completo', formEmail: 'Correo Electrónico', formMsg: 'Mensaje', formPlaceholder: 'Cuéntame sobre tu proyecto...',
      sending: 'Enviando...', sendBtn: 'Enviar Mensaje →', success: 'Mensaje enviado exitosamente.'
    },
    footer: { built: 'Hecho con', in: 'en Barranquilla.', back: '↑ Volver Arriba' }
  },
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', hire: 'Hire Me' },
    hero: {
      available: 'Available for work',
      desc1: 'Full-Stack Developer building',
      desc2: 'From Barranquilla · Digital Curator',
      btnProject: 'View Projects', btnContact: 'Get in Touch →',
      stats: { y: 'Years Coding', env: 'Environment', edu: 'Education' },
      words: ['scalable apps.', 'relational databases.', 'minimalist interfaces.', 'robust solutions.']
    },
    about: {
      tag: 'Who I Am', title1: 'From logic', title2: 'To reality',
      p1: 'I am a Full-Stack Developer focused on building robust digital products and efficient management systems. My technical profile bridges the gap between clean UI design and solid database architectures.',
      p2: 'I am currently studying at Universidad de la Costa (CUC) while sharpening my programming, English, and soft skills at Riwi.',
      p3: 'My ideal workspace is a Linux terminal. I am always looking to optimize performance and write clean code in everything I do.',
      facts: ['University Student - Universidad de la Costa (CUC)', 'Continuous Developer Training - Riwi', 'Linux & Hardware Modding Enthusiast', 'Curator of minimalist digital aesthetics']
    },
    skills: { tag: 'What I Master', title1: 'Technical', title2: 'Expertise' },
    projects: {
      tag: "What I've Built", title1: 'Selected', title2: 'Projects',
      wallyDesc: 'A comprehensive management application for mechanical workshops. Features role-based authentication, inventory control, and is optimized for cross-platform deployment as an Android APK using Capacitor.',
      testarazoDesc: 'A 2D soccer game based on collision physics, gravity, and realistic ball movement, built entirely from scratch using applied mathematical logic.',
      gymDesc: 'Design and implementation of a relational model and SQL database tailored for the full administration of gym users, memberships, and facilities.',
      source: 'Source Code', diagrams: 'View Diagrams'
    },
    experience: {
      tag: "Where I've Been", title1: 'Professional', title2: 'Journey',
      present: 'Present', devRole: 'Developer in Training', devCompany: 'Riwi — Intensive Tech Training',
      devDesc: 'Full-Stack project development, refinement of programming skills, technical English, and soft skills.',
      devAchieve: ['Building scalable React/Next applications and relational databases', 'Active collaboration in agile workflows'],
      engRole: 'Engineering Student', engCompany: 'Universidad de la Costa (CUC) — Barranquilla',
      engDesc: 'Studies focused on software engineering and the foundational principles of computational logic.',
      engAchieve: ['Developed leadership proposals like the "Corazón D1" project', 'Created and managed university database models']
    },
    contact: {
      tag: 'Get In Touch', title1: "Let's Build Something", title2: 'Together',
      intro: 'I am currently open to new development opportunities, collaborating on exciting projects, or tackling any technical challenge that demands high attention to detail.',
      formName: 'Full Name', formEmail: 'Email Address', formMsg: 'Message', formPlaceholder: 'Tell me about your project...',
      sending: 'Sending...', sendBtn: 'Send Message →', success: 'Message sent successfully.'
    },
    footer: { built: 'Built with', in: 'in Barranquilla.', back: '↑ Back to Top' }
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') setLang('en');
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let wi = 0, ci = 0, deleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const word = t.hero.words[wi];
      if (!word) return;

      if (!deleting) {
        setTypedText(word.slice(0, ++ci));
        if (ci === word.length) { deleting = true; timeout = setTimeout(type, 1800); return; }
      } else {
        setTypedText(word.slice(0, --ci));
        if (ci === 0) { deleting = false; wi = (wi + 1) % t.hero.words.length; }
      }
      timeout = setTimeout(type, deleting ? 55 : 95);
    };
    timeout = setTimeout(type, 1600);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const y = window.scrollY;
      const grid = document.querySelector('.grid-bg') as HTMLElement;
      if (grid) grid.style.transform = `translateY(${y * 0.05}px)`;
    };
    window.addEventListener('scroll', handleScroll);

    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to('.hero-name .line', { y: '0%', duration: 0.9, stagger: 0.15, ease: 'power4.out' }, '-=0.3')
      .to('.hero-descriptor', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-stats', { opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5');

    gsap.utils.toArray('.reveal').forEach((el: any) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }
      );
    });

    document.querySelectorAll('.skill-bar-fill').forEach((bar: any) => {
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 90%',
        onEnter: () => { bar.style.width = bar.dataset.pct + '%'; }
      });
    });

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card: any) => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          gsap.to(card, { rotateX: -y * 0.015, rotateY: x * 0.015, duration: 0.5, ease: 'power2.out', transformPerspective: 800 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.75)' });
        });
      });
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trig => trig.kill());
    };
  }, [lang]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(targetId) as HTMLElement;
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gamerodylan00@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: formData.get("name"),
          Correo: formData.get("email"),
          Mensaje: formData.get("message"),
          _subject: "Nuevo contacto desde tu Portafolio Web"
        })
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      setFormStatus('idle');
    }
  };

  const toggleLanguage = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <div className="bg-bg-void text-text-primary font-body font-light overflow-x-hidden relative min-h-screen">
      <div className="grid-bg"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'border-b border-border bg-bg-void/85 backdrop-blur-md py-3 md:py-4' : 'py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="font-mono text-sm font-medium text-accent tracking-widest"><span className="text-text-secondary"></span>dypok
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {Object.entries(t.nav).filter(([key]) => key !== 'hire').map(([key, label]) => (
              <li key={key}>
                <a href={`#${key}`} onClick={(e) => handleNavClick(e, `#${key}`)} className="font-mono text-xs text-text-secondary tracking-widest uppercase hover:text-text-primary transition-colors relative group">
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleLanguage} className="font-mono text-xs font-bold text-text-secondary hover:text-accent transition-colors flex items-center gap-2">
              <i className="fas fa-globe"></i> {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="font-mono text-xs font-medium text-bg-void bg-accent px-6 py-2 uppercase tracking-widest hover:opacity-85 transition-opacity">
              {t.nav.hire}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="font-mono text-xs font-bold text-text-secondary hover:text-accent transition-colors">
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button className="flex flex-col gap-[5px] p-1 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className={`w-6 h-[1px] bg-text-primary transition-all ${isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
              <span className={`w-6 h-[1px] bg-text-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[1px] bg-text-primary transition-all ${isMobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bg-void/95 z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {Object.entries(t.nav).filter(([key]) => key !== 'hire').map(([key, label]) => (
          <a key={key} href={`#${key}`} onClick={(e) => handleNavClick(e, `#${key}`)} className="font-display text-4xl capitalize hover:text-accent transition-colors">
            {label}
          </a>
        ))}
      </div>

      {/* ── HERO ── */}
      <section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative">

          {/* Main Hero Content */}
          <div>
            <div className="hero-eyebrow font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-6 flex items-center gap-4 opacity-0">
              <span className="w-8 md:w-10 h-[1px] bg-accent"></span> {t.hero.available}
            </div>
            <h1 className="hero-name font-display text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.95] mb-6 overflow-hidden">
              <span className="line block translate-y-full">Dylan <span className="text-accent italic">Gamero</span></span>
              <span className="line block translate-y-full">Developer.</span>
            </h1>
            <p className="hero-descriptor font-mono text-[0.8rem] md:text-base text-text-secondary mb-10 max-w-xl leading-relaxed opacity-0">
              {t.hero.desc1} <span className="text-text-primary">{typedText}</span><span className="inline-block w-[2px] h-[1em] bg-accent align-text-bottom animate-pulse"></span>
              <br className="hidden sm:block" /> {t.hero.desc2}
            </p>
            <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 opacity-0">
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-center font-mono text-xs font-medium text-bg-void bg-accent px-8 py-4 uppercase tracking-widest hover:-translate-y-1 hover:opacity-85 transition-all">
                {t.hero.btnProject}
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-center font-mono text-xs text-text-secondary border border-border px-8 py-4 uppercase tracking-widest hover:-translate-y-1 hover:text-text-primary hover:border-border-accent transition-all">
                {t.hero.btnContact}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats mt-16 xl:mt-0 xl:absolute xl:right-8 xl:top-1/2 xl:-translate-y-1/2 flex flex-wrap xl:flex-col justify-start gap-8 sm:gap-12 xl:gap-8 opacity-0 border-t border-border/30 xl:border-none pt-8 xl:pt-0">
            {[
              { num: '3', symbol: '+', label: t.hero.stats.y },
              { symbol: 'Linux', label: t.hero.stats.env },
              { num: 'Riwi/', symbol: 'CUC', label: t.hero.stats.edu }
            ].map((stat, i) => (
              <div key={i} className="text-left xl:text-right">
                <div className="font-display text-3xl sm:text-4xl font-bold leading-none">{stat.num}<span className="text-accent">{stat.symbol}</span></div>
                <div className="font-mono text-[0.65rem] text-text-dim tracking-[0.15em] uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-12 md:mb-20">
            <div className="font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-accent"></span> {t.about.tag}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">{t.about.title1}<br /><em className="text-accent italic not-italic">{t.about.title2}</em></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-6 text-base md:text-lg text-text-secondary leading-relaxed">
              <p className="reveal">{t.about.p1}</p>
              <p className="reveal">{t.about.p2}</p>
              <p className="reveal">{t.about.p3}</p>

              <ul className="reveal mt-8 space-y-3 font-mono text-[0.8rem] md:text-sm">
                {t.about.facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-accent text-base leading-none mt-1">→</span> <span>{fact}</span></li>
                ))}
              </ul>
            </div>

            <div className="reveal hidden lg:block relative mt-8 lg:mt-0">
              <div className="absolute -top-6 -left-6 font-display text-[8rem] font-black text-bg-panel leading-none z-0 select-none">DG</div>

              <div className="w-full aspect-[4/3] sm:aspect-[3/4] bg-bg-panel border border-border relative overflow-hidden flex flex-col bg-gradient-to-br from-bg-panel to-bg-dark z-10 shadow-2xl p-4 md:p-6 font-mono text-xs md:text-sm">
                <div className="flex gap-2 mb-4 md:mb-6 border-b border-border/50 pb-4">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <div className="text-text-secondary leading-loose overflow-x-auto whitespace-nowrap pb-4 md:pb-0">
                  <div className="text-text-dim mb-2">{'// Wally App - Auth & Core'}</div>
                  <div><span className="text-accent">import</span> {'{'} Capacitor {'}'} <span className="text-accent">from</span> <span className="text-teal">'@capacitor/core'</span>;</div>
                  <div className="mb-4"><span className="text-accent">import</span> {'{'} useAuth {'}'} <span className="text-accent">from</span> <span className="text-teal">'@/hooks/useAuth'</span>;</div>
                  <div><span className="text-accent">export const</span> <span className="text-teal">WallyApp</span> = () =&gt; {'{'}</div>
                  <div className="pl-4"><span className="text-accent">const</span> {'{'} role, login {'}'} = <span className="text-teal">useAuth</span>();</div>
                  <br />
                  <div className="pl-4"><span className="text-accent">if</span> (role === <span className="text-teal">'admin'</span>) {'{'}</div>
                  <div className="pl-8"><span className="text-accent">return</span> &lt;<span className="text-teal">DashboardPanel</span> /&gt;;</div>
                  <div className="pl-4">{'}'}</div>
                  <br />
                  <div className="pl-4"><span className="text-accent">return</span> &lt;<span className="text-teal">AuthLogin</span> onSubmit={'{'}login{'}'} /&gt;;</div>
                  <div>{'}'};</div>
                  <div className="mt-2 inline-block w-2 h-[1em] bg-accent animate-pulse align-middle"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-bg-panel/80 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-1/2 aspect-square border border-border-accent z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 md:py-32 bg-bg-dark relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-12 md:mb-20">
            <div className="font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-accent"></span> {t.skills.tag}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">{t.skills.title1} <em className="text-accent italic not-italic">{t.skills.title2}</em></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Frontend', icon: 'fa-layer-group', skills: [{ n: 'React / Next.js', p: '90' }, { n: 'TypeScript', p: '85' }, { n: 'CSS / Tailwind', p: '92' }] },
              { title: 'Backend & Data', icon: 'fa-server', skills: [{ n: 'Python', p: '88' }, { n: 'SQL / Relational DBs', p: '92' }, { n: 'Node.js', p: '80' }] },
              { title: 'DevOps & OS', icon: 'fa-terminal', skills: [{ n: 'Linux / Bash', p: '95' }, { n: 'Docker', p: '80' }] }
            ].map((cat, i) => (
              <div key={i} className="reveal bg-bg-panel border border-border p-6 md:p-8 hover:border-border-accent transition-colors">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-accent-glow text-accent flex items-center justify-center shrink-0"><i className={`fas ${cat.icon}`}></i></div>
                  <h3 className="font-mono text-sm tracking-widest uppercase font-medium">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((s, j) => (
                    <div key={j}>
                      <div className="flex justify-between font-mono text-[0.7rem] md:text-xs mb-2">
                        <span className="text-text-secondary">{s.n}</span>
                        <span className="text-accent">{s.p}%</span>
                      </div>
                      <div className="h-[2px] bg-border overflow-hidden">
                        <div className="skill-bar-fill h-full w-0 bg-gradient-to-r from-accent to-teal transition-all duration-1000 ease-out" data-pct={s.p}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-12 md:mb-20">
            <div className="font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-accent"></span> {t.projects.tag}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">{t.projects.title1} <em className="text-accent italic not-italic">{t.projects.title2}</em></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="project-card reveal lg:col-span-2 bg-bg-panel border border-border p-6 md:p-12 hover:border-border-accent transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-mono text-xs text-text-dim tracking-[0.2em] mb-6">01 — FEATURED</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">El Taller de Wally</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{t.projects.wallyDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['JavaScript', 'React', 'Capacitor'].map((tag) => (
                      <span key={tag} className="font-mono text-[0.65rem] text-teal border border-teal/25 px-3 py-1 tracking-widest uppercase">{tag}</span>
                    ))}
                  </div>
                  <a href="https://github.com/dypok/el_taller_de_wally" className="font-mono text-[0.7rem] md:text-xs text-text-secondary hover:text-accent flex items-center gap-2 tracking-wide transition-colors"><i className="fab fa-github"></i> {t.projects.source}</a>
                </div>

                <div className="bg-bg-dark border border-border aspect-video md:aspect-auto md:h-full min-h-[200px] relative overflow-hidden group/wally mt-4 md:mt-0">
                  <div className="absolute inset-0 bg-bg-void/40 z-10 group-hover/wally:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                  <img
                    src="/wally-app.png"
                    alt="Dashboard de El Taller de Wally"
                    className="w-full h-full object-cover object-left-top grayscale opacity-70 group-hover/wally:grayscale-0 group-hover/wally:opacity-100 group-hover/wally:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            <div className="project-card reveal bg-bg-panel border border-border p-6 md:p-8 hover:border-border-accent transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-mono text-xs text-text-dim tracking-[0.2em] mb-6 relative z-10">02</div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 relative z-10">Testarazo</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 relative z-10">{t.projects.testarazoDesc}</p>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {['Kaboom.js', 'TypeScript', 'Game Dev'].map((tag) => (
                  <span key={tag} className="font-mono text-[0.65rem] text-teal border border-teal/25 px-3 py-1 tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <a href="#" className="font-mono text-[0.7rem] md:text-xs text-text-secondary hover:text-accent flex items-center gap-2 tracking-wide transition-colors relative z-10"><i className="fab fa-github"></i> {t.projects.source}</a>
            </div>

            <div className="project-card reveal bg-bg-panel border border-border p-6 md:p-8 hover:border-border-accent transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-mono text-xs text-text-dim tracking-[0.2em] mb-6 relative z-10">03</div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 relative z-10">Gym Management System</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 relative z-10">{t.projects.gymDesc}</p>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {['SQL', 'Data Modeling', 'MySQL'].map((tag) => (
                  <span key={tag} className="font-mono text-[0.65rem] text-teal border border-teal/25 px-3 py-1 tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <a href="#" className="font-mono text-[0.7rem] md:text-xs text-text-secondary hover:text-accent flex items-center gap-2 tracking-wide transition-colors relative z-10"><i className="fas fa-database"></i> {t.projects.diagrams}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 md:py-32 bg-bg-dark relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-12 md:mb-20">
            <div className="font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-accent"></span> {t.experience.tag}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">{t.experience.title1} <em className="text-accent italic not-italic">{t.experience.title2}</em></h2>
          </div>
          <div className="relative pl-6 md:pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            {[
              { period: t.experience.present, role: t.experience.devRole, company: t.experience.devCompany, desc: t.experience.devDesc, achievements: t.experience.devAchieve },
              { period: t.experience.present, role: t.experience.engRole, company: t.experience.engCompany, desc: t.experience.engDesc, achievements: t.experience.engAchieve }
            ].map((exp, i) => (
              <div key={i} className="reveal relative pb-12 md:pb-14 pl-6 md:pl-8 last:pb-0">
                <div className="absolute -left-6 md:-left-8 top-1.5 w-2.5 h-2.5 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_0_4px_var(--color-accent-glow)] animate-pulse"></div>
                <div className="font-mono text-[0.65rem] md:text-[0.7rem] text-accent tracking-[0.15em] uppercase mb-2">{exp.period}</div>
                <div className="font-display text-xl md:text-2xl font-bold mb-1">{exp.role}</div>
                <div className="text-sm text-text-secondary mb-4">{exp.company}</div>
                <p className="text-sm text-text-dim leading-relaxed max-w-2xl mb-4">{exp.desc}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="font-mono text-[0.7rem] md:text-xs text-text-secondary flex items-start gap-3">
                      <span className="text-teal mt-[2px]">▸</span> <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-12 md:mb-20">
            <div className="font-mono text-[0.65rem] md:text-xs text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-accent"></span> {t.contact.tag}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">{t.contact.title1} <br className="hidden sm:block" /><em className="text-accent italic not-italic">{t.contact.title2}</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="reveal text-base md:text-lg text-text-secondary leading-relaxed mb-8">{t.contact.intro}</p>
              <div className="reveal flex flex-col gap-3">
                {[
                  { icon: 'fa-github', text: 'github.com/dypok' },
                  { icon: 'fa-linkedin', text: 'linkedin.com/in/dylangamero' }
                ].map((social, i) => (
                  <a key={i} href="#" className="font-mono text-[0.8rem] md:text-sm text-text-secondary flex items-center gap-4 py-3 border-b border-border hover:text-accent hover:border-border-accent transition-colors">
                    <i className={`fab ${social.icon} text-accent w-5`}></i> {social.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="reveal">
              <form className="flex flex-col gap-5" onSubmit={handleFormSubmit} noValidate>
                <div>
                  <label className="font-mono text-[0.65rem] text-text-dim tracking-[0.15em] uppercase block mb-2" htmlFor="name">{t.contact.formName}</label>
                  <input type="text" id="name" name="name" className="w-full bg-bg-panel border border-border text-sm p-3 outline-none focus:border-border-accent transition-colors" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="font-mono text-[0.65rem] text-text-dim tracking-[0.15em] uppercase block mb-2" htmlFor="email">{t.contact.formEmail}</label>
                  <input type="email" id="email" name="email" className="w-full bg-bg-panel border border-border text-sm p-3 outline-none focus:border-border-accent transition-colors" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="font-mono text-[0.65rem] text-text-dim tracking-[0.15em] uppercase block mb-2" htmlFor="message">{t.contact.formMsg}</label>
                  <textarea id="message" name="message" rows={5} className="w-full bg-bg-panel border border-border text-sm p-3 outline-none focus:border-border-accent transition-colors resize-none" placeholder={t.contact.formPlaceholder} required></textarea>
                </div>
                {formStatus === 'success' ? (
                  <div className="bg-teal-dim border border-teal text-teal font-mono text-[0.7rem] md:text-xs p-4 flex items-center gap-3">
                    <i className="fas fa-check-circle text-lg shrink-0"></i> {t.contact.success}
                  </div>
                ) : (
                  <button type="submit" disabled={formStatus === 'sending'} className="self-stretch sm:self-start text-center font-mono text-xs font-medium text-bg-void bg-accent px-8 py-4 uppercase tracking-widest hover:opacity-85 transition-opacity disabled:opacity-50">
                    {formStatus === 'sending' ? t.contact.sending : t.contact.sendBtn}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-6 md:py-8 relative z-10 bg-bg-void">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-mono text-[0.65rem] md:text-[0.7rem] text-text-dim tracking-wider">
            © {new Date().getFullYear()} Dylan Gamero. {t.footer.built} <span className="text-accent">♥</span> & ☕ {t.footer.in}
          </p>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="font-mono text-[0.65rem] md:text-[0.7rem] text-text-secondary tracking-wider flex items-center gap-2 hover:text-accent transition-colors">
            {t.footer.back}
          </a>
        </div>
      </footer>
    </div>
  );
}