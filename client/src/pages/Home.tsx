/**
 * Everset IPTV — Landing Page
 * Design: Summit Dark — Dark Luxury Tech
 * Colors: #0a0d14 bg, #1e90ff primary, #00c8ff accent
 * Fonts: Cairo (Arabic), Rajdhani (Numbers)
 */

import { useEffect, useRef, useState } from "react";
import {
  Tv,
  Film,
  Clapperboard,
  Shield,
  Zap,
  Monitor,
  Star,
  ChevronDown,
  MessageCircle,
  Check,
  Play,
  Wifi,
  Globe,
  Award,
} from "lucide-react";

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const LOGO_URL = "/manus-storage/everset-logo_d47d2d41.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/hero-bg-9QRZZJYwJMhzLXcrSt35RN.webp";
const FEATURES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/features-bg-EXGxjToQBiNURep9ZCuU5K.webp";
const CHANNELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/channels-preview-Zdg4eMfP2SybFqX3LSd3GF.webp";
const DEVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/devices-mockup-XPq4LrrPx59L37Y8KymEev.webp";
const WHATSAPP_NUMBER = "77783024725";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── Counter Hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Stats Section ────────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const channels = useCounter(10000, 2200, started);
  const series = useCounter(12000, 2400, started);
  const movies = useCounter(33000, 2600, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: channels, suffix: "+", label: "قناة بث مباشر", icon: Tv, color: "#1e90ff" },
    { value: series, suffix: "+", label: "مسلسل عربي وأجنبي", icon: Clapperboard, color: "#00c8ff" },
    { value: movies, suffix: "+", label: "فيلم بجودة عالية", icon: Film, color: "#1e90ff" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass-card p-8 text-center animate-on-scroll"
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`, border: `1px solid ${stat.color}44` }}
          >
            <stat.icon size={28} style={{ color: stat.color }} />
          </div>
          <div className="stat-number text-5xl md:text-6xl mb-2">
            {stat.value.toLocaleString("ar-EG")}{stat.suffix}
          </div>
          <div className="text-gray-400 font-medium text-lg" style={{ fontFamily: "'Cairo', sans-serif" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "المميزات", href: "#features" },
    { label: "المحتوى", href: "#content" },
    { label: "الأجهزة", href: "#devices" },
    { label: "التواصل", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Everset IPTV Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="everset-btn-whatsapp flex items-center gap-2 px-5 py-2.5 text-sm font-bold"
            >
              <MessageCircle size={18} />
              اشترك الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
            <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass-card mb-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-white border-b border-white/5 last:border-0"
                style={{ fontFamily: "'Cairo', sans-serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="everset-btn-whatsapp flex items-center justify-center gap-2 w-full mt-4 py-3 text-sm font-bold"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={18} />
              اشترك الآن عبر واتساب
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: `url(${HERO_BG}) center/cover no-repeat` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,13,20,0.7) 0%, rgba(10,13,20,0.5) 50%, rgba(10,13,20,0.9) 100%)" }} />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 2 === 0 ? "#1e90ff" : "#00c8ff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container text-center py-32">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
          style={{
            background: "rgba(30,144,255,0.15)",
            border: "1px solid rgba(30,144,255,0.4)",
            color: "#00c8ff",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          <Star size={14} fill="#00c8ff" />
          أفضل سيرفر IPTV في المنطقة
          <Star size={14} fill="#00c8ff" />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff", lineHeight: "1.2" }}
        >
          ارتقِ إلى{" "}
          <span className="everset-gradient-text">قمة تجربة</span>
          <br />
          المشاهدة مع{" "}
          <span className="everset-gradient-text">Everset IPTV</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          اشتراك ايفرست تيفي — تجربة بث لا مثيل لها بجودة{" "}
          <span style={{ color: "#1e90ff", fontWeight: 700 }}>4K</span>، ثبات عالٍ،
          وأضخم مكتبة محتوى عربي وعالمي
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="everset-btn-whatsapp flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl"
          >
            <MessageCircle size={22} />
            اشترك الآن عبر واتساب
          </a>
          <a
            href="#features"
            className="everset-btn-primary flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl"
          >
            <Play size={20} fill="white" />
            اكتشف المميزات
          </a>
        </div>

        {/* Quick Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            { val: "+10,000", label: "قناة" },
            { val: "+12,000", label: "مسلسل" },
            { val: "+33,000", label: "فيلم" },
            { val: "4K", label: "جودة" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "#1e90ff" }}
              >
                {item.val}
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-xs" style={{ fontFamily: "'Cairo', sans-serif" }}>اكتشف المزيد</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

// ─── Stats Section Wrapper ────────────────────────────────────────────────────
function StatsSectionWrapper() {
  return (
    <section id="stats" className="py-20" style={{ background: "var(--everset-bg)" }}>
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
          >
            أرقام تتحدث عن نفسها
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>
        <StatsSection />
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "ثبات عالٍ واستقرار تام",
      desc: "سيرفر Everset IPTV يعمل على بنية تحتية قوية تضمن بثاً متواصلاً دون انقطاع أو تقطع.",
      color: "#1e90ff",
    },
    {
      icon: Monitor,
      title: "جودة 4K Crystal Clear",
      desc: "دعم كامل لجميع الجودات من SD وHD وFull HD وصولاً إلى 4K Ultra HD لتجربة مشاهدة استثنائية.",
      color: "#00c8ff",
    },
    {
      icon: Zap,
      title: "سرعة تحميل فائقة",
      desc: "تقنية متقدمة تضمن تحميلاً فورياً للمحتوى وبث مباشر بدون تأخير أو buffering.",
      color: "#1e90ff",
    },
    {
      icon: Globe,
      title: "محتوى عالمي وعربي",
      desc: "آلاف القنوات العربية والعالمية، الرياضة، الأفلام، المسلسلات، الأطفال وكل ما تحتاجه.",
      color: "#00c8ff",
    },
    {
      icon: Wifi,
      title: "متوافق مع جميع الأجهزة",
      desc: "يعمل على Smart TV، Android، iPhone، iPad، Firestick، MAG، وجميع الأجهزة الذكية.",
      color: "#1e90ff",
    },
    {
      icon: Award,
      title: "دعم فني على مدار الساعة",
      desc: "فريق دعم متخصص متاح 24/7 عبر واتساب لمساعدتك في أي وقت وحل أي مشكلة فورياً.",
      color: "#00c8ff",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ background: `url(${FEATURES_BG}) center/cover no-repeat` }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(10,13,20,0.88)" }} />
      <div className="relative z-10 container">
        <div className="text-center mb-16 animate-on-scroll">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.3)", color: "#00c8ff", fontFamily: "'Cairo', sans-serif" }}
          >
            لماذا Everset IPTV؟
          </div>
          <h2
            className="text-3xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
          >
            مميزات تجعلنا{" "}
            <span className="everset-gradient-text">الخيار الأول</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto" style={{ fontFamily: "'Cairo', sans-serif" }}>
            اشتراك Everset IPTV يمنحك تجربة مشاهدة لا مثيل لها بأعلى معايير الجودة والاستقرار
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="glass-card p-7 animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `linear-gradient(135deg, ${feat.color}22, ${feat.color}44)`, border: `1px solid ${feat.color}44` }}
              >
                <feat.icon size={24} style={{ color: feat.color }} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
              >
                {feat.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Content Section ──────────────────────────────────────────────────────────
function ContentSection() {
  return (
    <section id="content" className="py-24" style={{ background: "var(--everset-bg-2)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-on-scroll">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.3)", color: "#00c8ff", fontFamily: "'Cairo', sans-serif" }}
            >
              مكتبة المحتوى
            </div>
            <h2
              className="text-3xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
            >
              محتوى ضخم
              <br />
              <span className="everset-gradient-text">لكل الأذواق</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: "'Cairo', sans-serif" }}>
              من القنوات الرياضية الحية إلى أحدث الأفلام والمسلسلات العربية والأجنبية —
              Everset IPTV يوفر لك كل ما تحتاجه في مكان واحد.
            </p>

            <div className="space-y-4">
              {[
                { label: "+10,000 قناة بث مباشر", sub: "رياضة، أخبار، ترفيه، أطفال، وأكثر" },
                { label: "+12,000 مسلسل عربي وأجنبي", sub: "أحدث المسلسلات وكلاسيكيات لا تُنسى" },
                { label: "+33,000 فيلم بجودة عالية", sub: "أفلام هوليوود، بوليوود، وعربية" },
                { label: "تحديث يومي للمحتوى", sub: "أحدث الإضافات كل يوم بدون توقف" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #1e90ff, #00c8ff)" }}
                  >
                    <Check size={14} color="white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-bold text-white" style={{ fontFamily: "'Cairo', sans-serif" }}>
                      {item.label}
                    </div>
                    <div className="text-gray-500 text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="everset-btn-whatsapp inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl mt-8"
            >
              <MessageCircle size={20} />
              احصل على اشتراكك الآن
            </a>
          </div>

          {/* Image */}
          <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(30,144,255,0.2), rgba(0,200,255,0.1))", filter: "blur(40px)", transform: "scale(0.9)" }}
              />
              <img
                src={CHANNELS_IMG}
                alt="مكتبة قنوات Everset IPTV"
                className="relative z-10 rounded-2xl w-full"
                style={{ border: "1px solid rgba(30,144,255,0.2)", boxShadow: "0 20px 60px rgba(30,144,255,0.15)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Devices Section ──────────────────────────────────────────────────────────
function DevicesSection() {
  const devices = [
    "Smart TV", "Android TV", "iPhone / iPad", "Android Phone",
    "Amazon Firestick", "MAG Box", "PC / Mac", "Enigma2",
  ];

  return (
    <section id="devices" className="py-24" style={{ background: "var(--everset-bg)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(30,144,255,0.15), rgba(0,200,255,0.08))", filter: "blur(50px)", transform: "scale(0.9)" }}
              />
              <img
                src={DEVICES_IMG}
                alt="Everset IPTV على جميع الأجهزة"
                className="relative z-10 rounded-2xl w-full"
                style={{ border: "1px solid rgba(30,144,255,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: "200ms" }}>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.3)", color: "#00c8ff", fontFamily: "'Cairo', sans-serif" }}
            >
              التوافق مع الأجهزة
            </div>
            <h2
              className="text-3xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
            >
              يعمل على
              <br />
              <span className="everset-gradient-text">جميع أجهزتك</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: "'Cairo', sans-serif" }}>
              سواء كنت تشاهد على تلفازك الذكي، هاتفك، أو جهاز الكمبيوتر —
              Everset IPTV متاح على كل الأجهزة بنفس الجودة والأداء.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {devices.map((device, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(30,144,255,0.1)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1e90ff, #00c8ff)" }}
                  />
                  <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: "'Cairo', sans-serif" }}>
                    {device}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quality Section ──────────────────────────────────────────────────────────
function QualitySection() {
  const qualities = [
    { label: "SD", desc: "480p", color: "#8892a4" },
    { label: "HD", desc: "720p", color: "#1e90ff" },
    { label: "FHD", desc: "1080p", color: "#00c8ff" },
    { label: "4K", desc: "Ultra HD", color: "#00e5ff" },
  ];

  return (
    <section className="py-20" style={{ background: "var(--everset-bg-2)" }}>
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
          >
            جودات متعددة لكل احتياج
          </h2>
          <p className="text-gray-400" style={{ fontFamily: "'Cairo', sans-serif" }}>
            من SD إلى 4K — نحن ندعم كل الجودات لتناسب سرعة الإنترنت لديك
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {qualities.map((q, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center animate-on-scroll min-w-[140px]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ fontFamily: "'Rajdhani', sans-serif", color: q.color, filter: `drop-shadow(0 0 15px ${q.color}80)` }}
              >
                {q.label}
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {q.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="py-24" style={{ background: "var(--everset-bg)" }}>
      <div className="container">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center animate-on-scroll"
          style={{
            background: "linear-gradient(135deg, rgba(30,144,255,0.12) 0%, rgba(0,200,255,0.08) 50%, rgba(30,144,255,0.12) 100%)",
            border: "1px solid rgba(30,144,255,0.25)",
          }}
        >
          {/* Glow effect */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #1e90ff, #00c8ff, #1e90ff, transparent)" }}
          />

          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.3)", color: "#00c8ff", fontFamily: "'Cairo', sans-serif" }}
          >
            ابدأ رحلتك الآن
          </div>

          <h2
            className="text-3xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#f0f4ff" }}
          >
            جاهز للاشتراك في
            <br />
            <span className="everset-gradient-text">Everset IPTV؟</span>
          </h2>

          <p
            className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            تواصل معنا الآن عبر واتساب للحصول على اشتراكك وبدء تجربة مشاهدة لا مثيل لها.
            فريقنا جاهز لمساعدتك على مدار الساعة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="everset-btn-whatsapp flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-xl"
            >
              <MessageCircle size={24} />
              تواصل عبر واتساب الآن
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="everset-btn-primary flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-xl"
            >
              اتصل بنا مباشرة
            </a>
          </div>

          <p
            className="text-gray-500 text-sm mt-8"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            اشتراك Evar TV · اشتراك ايفار اي بي تي في · اشتراك ايفيار تيفي · Everset IPTV اشتراك
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#060810", borderTop: "1px solid rgba(30,144,255,0.1)" }}>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Everset IPTV" className="h-10 w-auto" />
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>
              © 2025 Everset IPTV — جميع الحقوق محفوظة
            </p>
            <p className="text-gray-600 text-xs mt-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
              اشتراك ايفرست تيفي · اشتراك Everset IPTV · اشتراك ايفرست اي بي تيفي
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="everset-btn-whatsapp flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl"
          >
            <MessageCircle size={18} />
            واتساب
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="تواصل عبر واتساب"
      title="تواصل عبر واتساب"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ background: "var(--everset-bg)", fontFamily: "'Cairo', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <StatsSectionWrapper />
      <FeaturesSection />
      <ContentSection />
      <DevicesSection />
      <QualitySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
