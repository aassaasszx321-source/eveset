import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { useLocation } from 'wouter';

export default function ActivationIOS() {
  const [, setLocation] = useLocation();

  const apps = [
    {
      name: 'Next+',
      link: 'https://apps.apple.com/us/app/next/id6443335504',
      portalCode: '700',
      description: 'تطبيق متقدم للبث المباشر'
    },
    {
      name: 'Castora',
      link: 'https://apps.apple.com/us/app/castora/id6760588570',
      portalCode: '700',
      description: 'تطبيق احترافي للمشاهدة'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => setLocation('/')} className="flex items-center gap-2 text-accent hover:text-accent/80">
            <ChevronLeft className="w-5 h-5" />
            العودة
          </button>
          <h1 className="text-xl font-bold text-gradient-gold">طريقة التفعيل</h1>
          <div></div>
        </div>
      </header>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gradient-gold">
            طريقة التفعيل على أجهزة الآيفون والآبل تي في
          </h2>

          <div className="space-y-8">
            {apps.map((app, idx) => (
              <Card key={idx} className="gold-border bg-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-accent">{app.name}</h3>
                  <a href={app.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      حمّل من App Store
                    </Button>
                  </a>
                </div>

                <p className="text-muted-foreground mb-6">{app.description}</p>

                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <p className="font-semibold mb-4">بيانات التسجيل:</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">الاسم:</span>
                      <span className="font-semibold">أي اسم تختاره</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">اسم المستخدم:</span>
                      <span className="font-semibold">من بيانات اشتراكك</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">كلمة المرور:</span>
                      <span className="font-semibold">من بيانات اشتراكك</span>
                    </div>
                    <div className="flex justify-between border-t border-accent/20 pt-3">
                      <span className="text-muted-foreground">رمز البوابة (Portal Code):</span>
                      <span className="font-bold text-accent">{app.portalCode}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">خطوات التفعيل:</p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>حمّل التطبيق من App Store</li>
                    <li>افتح التطبيق واختر "تسجيل دخول جديد"</li>
                    <li>أدخل بيانات اشتراكك</li>
                    <li>أدخل رمز البوابة: <span className="font-bold text-accent">{app.portalCode}</span></li>
                    <li>اضغط "تسجيل" واستمتع بالمشاهدة</li>
                  </ol>
                </div>
              </Card>
            ))}
          </div>

          {/* Support */}
          <div className="mt-12 p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
            <p className="mb-4">هل تواجه مشكلة في التفعيل؟</p>
            <a href="https://wa.me/966580928565?text=أحتاج مساعدة في تفعيل التطبيق على الآيفون" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                تواصل معنا عبر الواتساب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
