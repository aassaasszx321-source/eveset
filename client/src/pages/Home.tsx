import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Star, Zap, Smartphone, Apple, Tv, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';
import ProductDetailDrawer from '@/components/ProductDetailDrawer';

// Carousel slides
const CAROUSEL_SLIDES = [
  {
    id: 'movies',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/carousel-movies-CnHTj9bofLFVMMSL8cZHCL.webp',
    title: 'أحدث الأفلام والمسلسلات',
    description: 'احصل على أفضل الأفلام والمسلسلات الحصرية'
  },
  {
    id: 'sports',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785462390/UYCFDTDq8euze4tP5KjcSD/carousel-sports-cFdtwAbiP57sEbWqwLXnMW.webp',
    title: 'جميع البطولات الكبرى',
    description: 'شاهد كل مباريات البطولات العالمية'
  }
];

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

export default function Home() {
  const [, navigate] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

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
          <div className="flex items-center gap-2">
            <img src="/assets/images/9kpro-logo.jpg" alt="9K Pro TV" className="h-12 w-auto" />
          </div>
          <Button onClick={handleGeneralWhatsApp} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </header>

      {/* Carousel Section */}
      <div className="relative w-full h-96 overflow-hidden bg-black mt-20">
        {/* Slides */}
        <div className="relative w-full h-full">
          {CAROUSEL_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gold/20 hover:bg-gold/40 text-white p-3 rounded-full transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gold/20 hover:bg-gold/40 text-white p-3 rounded-full transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {CAROUSEL_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            ارتق إلى قمة تجربة المشاهدة
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            مع 9kpro TV - أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K
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
            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => navigate('/activation/android')}>
              <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">أندرويد والشاومي</h3>
              <p className="text-center text-muted-foreground text-sm">طريقة التفعيل على Google TV والأندرويد</p>
            </Card>

            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => navigate('/activation/ios')}>
              <Apple className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">آيفون وآبل تي في</h3>
              <p className="text-center text-muted-foreground text-sm">طريقة التفعيل على أجهزة Apple</p>
            </Card>

            <Card className="gold-border bg-card p-6 cursor-pointer hover:gold-glow transition-all" onClick={() => navigate('/activation/samsung')}>
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

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleGeneralWhatsApp}
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

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
      <button
        onClick={handleGeneralWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-pulse transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Product Detail Drawer */}
      {selectedProduct && (
        <ProductDetailDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          package={selectedProduct}
        />
      )}
    </div>
  );
}
