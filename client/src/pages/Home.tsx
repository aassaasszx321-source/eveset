import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MessageCircle, Star, Zap, Smartphone, Apple, Tv, ChevronDown, Menu } from 'lucide-react';
import { useLocation } from 'wouter';
import ProductDetailDrawer from '@/components/ProductDetailDrawer';

const PACKAGES = [
  {
    id: 'everest',
    name: 'سيرفر إيفرست',
    subtitle: 'الاشتراك الأفضل',
    logo: '/assets/images/everest-logo.png',
    prices: { '3': 80, '6': 130, '12': 190 },
    originalPrice12: 250,
    features: { channels: 10000, movies: 30000, series: 13000 },
    color: '#1e90ff'
  },
  {
    id: 'strong4k',
    name: 'سترونق 4K',
    subtitle: 'جودة عالية جداً',
    logo: '/assets/images/strong4k-logo.png',
    prices: { '3': 80, '6': 130, '12': 199 },
    features: { channels: 10000, movies: 70000, series: 15000 },
    color: '#FFD700'
  },
  {
    id: 'hulk',
    name: 'هولك IPTV',
    subtitle: 'قوي وموثوق',
    logo: '/assets/images/hulk-logo.jpg',
    prices: { '3': 100, '6': 150, '12': 250 },
    features: { channels: 10000, movies: 33000, series: 7000 },
    color: '#D4AF37'
  },
  {
    id: 'falcon',
    name: 'فالكون IPTV',
    subtitle: 'الاشتراك العصري',
    logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/44d0a66f-ce07-4a1c-b5a9-65ccd196676c.png',
    prices: { '3': 130, '6': 200, '12': 300 },
    features: { channels: 7000, movies: 24000, series: 10000 },
    color: '#FFD700'
  },
  {
    id: 'vulture',
    name: 'فولتشر IPTV',
    subtitle: 'الترفيهي المتميز',
    logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/9af8dd15-5cc0-42bb-9684-2477416105ed.png',
    prices: { '3': 69, '6': 99, '12': 149 },
    features: { channels: 10000, movies: 25000, series: 15000 },
    color: '#D4AF37'
  },
  {
    id: 'smarters',
    name: 'IPTV Smarters',
    subtitle: 'تطبيق موثوق',
    logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/d94288e8-52f1-4eb5-b24f-5dfd8fee6d4d.png',
    prices: { '12': 99 },
    features: { channels: 10000, movies: 33000, series: 7000 },
    color: '#D4AF37'
  }
];

const SUBSCRIPTION_PAGES = [
  { id: 'everest', label: 'إيفرست', path: '/subscription/everest' },
  { id: 'hulk', label: 'هولك', path: '/subscription/hulk' },
  { id: 'strong4k', label: 'سترونق', path: '/subscription/strong4k' },
  { id: 'falcon', label: 'فالكون', path: '/subscription/falcon' },
  { id: 'vulture', label: 'فولتشر', path: '/subscription/vulture' },
  { id: 'smarters', label: 'سمارترز', path: '/subscription/smarters' }
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handlePackageClick = (pkg: any, duration: '3' | '6' | '12') => {
    const price = pkg.prices[duration];
    if (price) {
      setSelectedProduct({
        ...pkg,
        price,
        duration,
        originalPrice: duration === '12' ? pkg.originalPrice12 : undefined
      });
      setIsDrawerOpen(true);
    }
  };

  const handleGeneralWhatsApp = () => {
    const message = 'ماهي العروض المتوفرة؟';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966580928565?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/20">
        <div className="container flex items-center justify-between py-4">
          {/* Left Dropdown with Hamburger Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-accent hover:bg-accent/10 p-2">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {SUBSCRIPTION_PAGES.map((page) => (
                <DropdownMenuItem key={page.id} onClick={() => setLocation(page.path)}>
                  {page.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <img src="/assets/images/9kpro-logo.png" alt="9K Pro TV" className="h-16 w-auto" />
          </div>

          {/* Right Spacer */}
          <div className="w-32"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/XJhcC84B/1782424634865.png)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            ارتق إلى قمة تجربة المشاهدة
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            مع اشتراك 9kpro TV - أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K
          </p>
          <Button onClick={handleGeneralWhatsApp} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            تواصل معنا الآن
          </Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient-gold">
            باقاتنا المتميزة
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            اختر الباقة المناسبة لك بأسعار تنافسية
          </p>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="space-y-6" 
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                {/* Package Header */}
                <div className="text-center">
                  <img src={pkg.logo} alt={pkg.name} className="h-16 w-auto mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-accent text-sm">{pkg.subtitle}</p>
                </div>

                {/* Premium Grid Layout */}
                <div className="space-y-4">
                  {/* Row 1: 12 Months & 6 Months */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* 12 Months */}
                    <Card
                      className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center fade-in-up"
                      onClick={() => handlePackageClick(pkg, '12')}
                    >
                      <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground mb-2">سنة واحدة</p>
                      <p className="text-2xl font-bold text-accent mb-2">
                        {pkg.prices['12']}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">ر.س</p>
                      {pkg.originalPrice12 && (
                        <p className="text-xs line-through text-muted-foreground/50 mb-3">
                          {pkg.originalPrice12}
                        </p>
                      )}
                      <button className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors" onClick={(e) => { e.stopPropagation(); handlePackageClick(pkg, '12'); }}>
                        اطلب الآن
                      </button>
                    </Card>

                    {/* 6 Months */}
                    <Card
                      className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center fade-in-up-delay-1"
                      onClick={() => handlePackageClick(pkg, '6')}
                    >
                      <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground mb-2">6 أشهر</p>
                      <p className="text-2xl font-bold text-accent mb-2">
                        {pkg.prices['6']}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">ر.س</p>
                      <button className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors" onClick={(e) => { e.stopPropagation(); handlePackageClick(pkg, '6'); }}>
                        اطلب الآن
                      </button>
                    </Card>
                  </div>

                  {/* Row 2: 3 Months (Centered) */}
                  <Card
                    className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center fade-in-up-delay-2"
                    onClick={() => handlePackageClick(pkg, '3')}
                  >
                    <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                    <p className="text-xs text-muted-foreground mb-2">3 أشهر</p>
                    <p className="text-2xl font-bold text-accent mb-2">
                      {pkg.prices['3']}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">ر.س</p>
                    <button className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors" onClick={(e) => { e.stopPropagation(); handlePackageClick(pkg, '3'); }}>
                      اطلب الآن
                    </button>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-gold">
            روابط تهمك
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => setLocation('/activation/android')}>
              <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">أندرويد والشاومي</h3>
              <p className="text-center text-muted-foreground text-sm">طريقة التفعيل على Google TV والأندرويد</p>
            </Card>

            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => setLocation('/activation/ios')}>
              <Apple className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">آيفون وآبل تي في</h3>
              <p className="text-center text-muted-foreground text-sm">طريقة التفعيل على أجهزة Apple</p>
            </Card>

            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => setLocation('/activation/samsung')}>
              <Tv className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">سامسونج وإل جي</h3>
              <p className="text-center text-muted-foreground text-sm">طريقة التفعيل على أجهزة التلفاز الذكية</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-gold">
            لماذا تختار 9kpro TV؟
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'سرعة عالية', desc: 'بث بدون تقطيع وتأخير' },
              { icon: Star, title: 'جودة 4K', desc: 'أفضل جودة صورة متاحة' },
              { icon: MessageCircle, title: 'دعم 24/7', desc: 'فريق دعم متاح دائماً' }
            ].map((feature, idx) => (
              <Card key={idx} className="gold-border bg-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-accent/20 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent mb-4">للتواصل والاستفسار</h3>
            <Button onClick={handleGeneralWhatsApp} className="bg-accent text-accent-foreground hover:bg-accent/90">
              تواصل معنا عبر الواتساب
            </Button>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t border-accent/20">
            <p>© 2026 9kpro TV. جميع الحقوق محفوظة.</p>
            <p className="mt-2">متجر 9kpro TV | أفضل اشتراكات IPTV في السعودية والخليج</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/966580928565"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          zIndex: 9999,
          width: '70px', 
          height: '70px',
          backgroundColor: '#25D366'
        }}
        aria-label="Contact via WhatsApp"
      >
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/whatsapp-icon-small-BC2CLZC6QQZNYsGuAYueBc.webp" alt="WhatsApp" className="rounded-full" style={{ width: '100%', height: '100%' }} />
      </a>

      {/* Product Detail Drawer */}
      <ProductDetailDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        package={selectedProduct}
      />
    </div>
  );
}
