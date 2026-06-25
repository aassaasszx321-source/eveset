import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home } from 'lucide-react';
import { useLocation } from 'wouter';

export default function SubscriptionSmarters() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/20">
        <div className="container flex items-center justify-center py-4">
          <img src="/assets/images/9kpro-logo.jpg" alt="9K Pro TV" className="h-12 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container max-w-3xl">
          {/* Title */}
          <div className="text-center mb-12">
            <img src="/assets/images/smarters-logo.png" alt="IPTV Smarters" className="h-20 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              صفحة مميزات اشتراكات سمارترز
            </h1>
          </div>

          {/* Description Content */}
          <Card className="gold-border bg-card p-8 mb-12 space-y-6" dir="rtl">
            <div>
              <h2 className="text-3xl font-bold text-accent mb-4">
                🚀 اشتراك سمارترز (IPTV Smarters) – دليلك الشامل للمباريات والترفيه اللامحدود! 🚀
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                إذا كنت تبحث عن افضل اشتراك iptv يجمع بين الشهرة العالمية، السعر الاقتصادي، والثبات بدون تقطيع، فإن اشتراك سمارترز هو خيارك الأسهل للتوفير والمتعة!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">💡 لماذا تختار اشتراك (iptv smarters)؟</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🏁</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">افضل اشتراك مباريات</h4>
                    <p className="text-muted-foreground">شاهد جميع المباريات والبطولات بث مباشر وحصري بوضوح تام وثبات ممتاز يناسب جميع السرعات.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🎬</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">أكبر اشتراك مسلسلات وأفلام (توفير ذكي)</h4>
                    <p className="text-muted-foreground">يغنيك عن الاشتراكات المتعددة؛ حيث يضم مكتبة فيديو ضخمة ومتجددة (<span dir="ltr">VOD</span>).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🔒</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">الخيار الأسهل والأكثر توافقاً</h4>
                    <p className="text-muted-foreground">يتميز بواجهة تشغيل هي الأسهل في العالم، ويعمل بسلاسة على جميع الأجهزة.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Back Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={() => setLocation('/')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
            >
              <Home className="w-5 h-5 ml-2" />
              العودة للصفحة الرئيسية
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-accent/20 py-12">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 9kpro TV. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/966580928565"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-pulse transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.688 1.694-2.637 3.957-2.637 6.38 0 1.059.135 2.143.395 3.199L1.9 23.48l3.8-1.188c.94.558 2.064.853 3.285.853 1.285 0 2.541-.195 3.74-.57 1.752-.532 3.321-1.423 4.61-2.614 1.288-1.191 2.247-2.922 2.773-4.736.526-1.813.754-3.79.754-5.868 0-2.423-.949-4.686-2.637-6.38-1.688-1.694-3.957-2.637-6.38-2.637z"/>
        </svg>
      </a>
    </div>
  );
}
