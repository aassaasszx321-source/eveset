import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Copy } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function ActivationSamsung() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('53222236');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            طريقة التفعيل على أجهزة سامسونج وإل جي
          </h2>

          <Card className="gold-border bg-card p-8 mb-8">
            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold text-accent">
                ✓ يسعدنا إبلاغكم بأنه أصبح بإمكانكم الآن إضافة اشتراككم على تطبيق 0Player مجاناً!
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">الأجهزة المدعومة:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-2">Samsung</p>
                  <p className="text-sm text-muted-foreground">موديلات 2022 وما بعده</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-2">LG</p>
                  <p className="text-sm text-muted-foreground">موديلات 2016 وما بعده</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="font-semibold mb-4">خطوات التفعيل:</p>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-3">
                <li>افتح تطبيق <span className="font-bold text-accent">0Player</span> على جهازك</li>
                <li>اذهب إلى <span className="font-bold">Playlist</span></li>
                <li>اختر <span className="font-bold">Add Playlist</span> (أسفل اليمين)</li>
                <li>اختر <span className="font-bold">Portal Code</span></li>
                <li>أدخل البيانات التالية:</li>
              </ol>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="font-semibold mb-4">بيانات التسجيل:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">الاسم:</span>
                  <span className="font-semibold">أي اسم تختاره</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">رمز البوابة (Portal Code):</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-accent text-lg">53222236</span>
                    <Button
                      onClick={copyCode}
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">اسم المستخدم:</span>
                  <span className="font-semibold">من بيانات اشتراكك</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">كلمة المرور:</span>
                  <span className="font-semibold">من بيانات اشتراكك</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">✓ بعد الحفظ:</p>
              <p className="text-sm text-muted-foreground">سيتم إضافة قائمة التشغيل تلقائياً وستتمكن من مشاهدة جميع القنوات والأفلام والمسلسلات</p>
            </div>
          </Card>

          {/* Support */}
          <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
            <p className="mb-4">هل تواجه مشكلة في التفعيل؟</p>
            <a href="https://wa.me/966580928565?text=أحتاج مساعدة في تفعيل التطبيق على جهاز سامسونج أو إل جي" target="_blank" rel="noopener noreferrer">
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
