import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Download, Copy } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function ActivationAndroid() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('7526997');
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
            طريقة التفعيل على أجهزة أندرويد والشاومي
          </h2>

          {/* Method 1 */}
          <Card className="gold-border bg-card p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">الطريقة الأولى: متجر Google Play</h3>
            <div className="space-y-4">
              <p className="text-lg">ابحث عن تطبيق <span className="font-bold text-accent">9kpro TV</span> في متجر Google Play</p>
              <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-4">
                <Download className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">خطوات التحميل:</p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>افتح متجر Google Play</li>
                    <li>ابحث عن "9kpro TV"</li>
                    <li>اضغط تحميل وتثبيت</li>
                    <li>افتح التطبيق وسجل دخولك</li>
                  </ol>
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2 */}
          <Card className="gold-border bg-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">الطريقة الثانية: تطبيق Downloader</h3>
            <div className="space-y-4">
              <p className="text-lg">استخدم تطبيق Downloader وأدخل الكود التالي:</p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">7526997</span>
                  <Button
                    onClick={copyCode}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Copy className="w-4 h-4 ml-2" />
                    {copied ? 'تم النسخ!' : 'انسخ الكود'}
                  </Button>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">خطوات التفعيل:</p>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>حمّل تطبيق Downloader من Google Play</li>
                  <li>افتح التطبيق وأدخل الكود: <span className="font-bold text-accent">7526997</span></li>
                  <li>اتبع التعليمات لتحميل وتثبيت التطبيق</li>
                  <li>سجل دخولك باستخدام بيانات اشتراكك</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Support */}
          <div className="mt-12 p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
            <p className="mb-4">هل تواجه مشكلة في التفعيل؟</p>
            <a href="https://wa.me/966580928565?text=أحتاج مساعدة في تفعيل التطبيق" target="_blank" rel="noopener noreferrer">
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
