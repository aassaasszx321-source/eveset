import { useState } from 'react';
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
    logo: '/assets/images/falcon-logo.png',
    prices: { '3': 130, '6': 200, '12': 300 },
    features: { channels: 7000, movies: 24000, series: 10000 },
    color: '#FFD700'
  },
  {
    id: 'vulture',
    name: 'فولتشر IPTV',
    subtitle: 'الترفيهي المتميز',
    logo: '/assets/images/vulture-logo.png',
    prices: { '3': 69, '6': 99, '12': 149 },
    features: { channels: 10000, movies: 25000, series: 15000 },
    color: '#D4AF37'
  },
  {
    id: 'smarters',
    name: 'IPTV Smarters',
    subtitle: 'تطبيق موثوق',
    logo: '/assets/images/smarters-logo.png',
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
            <img src="/assets/images/9kpro-logo-main.png" alt="9K Pro TV" className="h-12 w-auto" />
          </div>

          {/* Right Spacer */}
          <div className="w-32"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"></div>
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
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="space-y-6">
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
                      className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center"
                      onClick={() => handlePackageClick(pkg, '12')}
                    >
                      <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground mb-2">سنة واحدة</p>
                      <p className="text-2xl font-bold text-accent mb-2">
                        {pkg.prices['12']}
                      </p>
                      <p className="text-xs text-muted-foreground">ر.س</p>
                      {pkg.originalPrice12 && (
                        <p className="text-xs line-through text-muted-foreground/50 mt-1">
                          {pkg.originalPrice12}
                        </p>
                      )}
                    </Card>

                    {/* 6 Months */}
                    <Card
                      className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center"
                      onClick={() => handlePackageClick(pkg, '6')}
                    >
                      <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground mb-2">6 أشهر</p>
                      <p className="text-2xl font-bold text-accent mb-2">
                        {pkg.prices['6']}
                      </p>
                      <p className="text-xs text-muted-foreground">ر.س</p>
                    </Card>
                  </div>

                  {/* Row 2: 3 Months (Centered) */}
                  <Card
                    className="gold-border bg-card hover:gold-glow transition-all cursor-pointer p-4 text-center"
                    onClick={() => handlePackageClick(pkg, '3')}
                  >
                    <img src={pkg.logo} alt={pkg.name} className="h-12 w-auto mx-auto mb-3" />
                    <p className="text-xs text-muted-foreground mb-2">3 أشهر</p>
                    <p className="text-2xl font-bold text-accent mb-2">
                      {pkg.prices['3']}
                    </p>
                    <p className="text-xs text-muted-foreground">ر.س</p>
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
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl animate-pulse transition-all duration-300 hover:scale-110 flex items-center justify-center w-16 h-16"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.688 1.694-2.637 3.957-2.637 6.38 0 1.059.135 2.143.395 3.199L1.9 23.48l3.8-1.188c.94.558 2.064.853 3.285.853 1.285 0 2.541-.195 3.74-.57 1.752-.532 3.321-1.423 4.61-2.614 1.288-1.191 2.247-2.922 2.773-4.736.526-1.813.754-3.79.754-5.868 0-2.423-.949-4.686-2.637-6.38-1.688-1.694-3.957-2.637-6.38-2.637z"/>
        </svg>
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
