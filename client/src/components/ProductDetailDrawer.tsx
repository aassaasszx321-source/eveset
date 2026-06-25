import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, MessageCircle, Star, Zap, Check } from 'lucide-react';

interface ProductDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  package: {
    id: string;
    name: string;
    subtitle: string;
    logo: string;
    price: number;
    duration: string;
    originalPrice?: number;
    features: { channels: number; movies: number; series: number };
    color: string;
  };
}

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  return <span>{count.toLocaleString('ar-SA')}</span>;
};

export default function ProductDetailDrawer({ isOpen, onClose, package: pkg }: ProductDetailDrawerProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = `مرحباً 9kpro TV، أود الاشتراك في الباقة التالية:\n🔹 السيرفر: ${pkg.name}\n⏱️ المدة: ${pkg.duration} أشهر\n💰 السعر: ${pkg.price} ريال سعودي\nيرجى تزويدي بطرق الدفع المتاحة لتفعيل الاشتراك.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966580928565?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-card z-50 shadow-2xl overflow-y-auto transition-transform" dir="rtl">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-accent/20 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gradient-gold">تفاصيل الباقة</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Package Header */}
          <div className="text-center">
            <img src={pkg.logo} alt={pkg.name} className="h-20 w-auto mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-accent text-lg mb-6">{pkg.subtitle}</p>

            {/* Price */}
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <div className="text-5xl font-bold text-accent mb-2">
                {pkg.price}
                <span className="text-2xl text-muted-foreground"> ر.س</span>
              </div>
              <p className="text-muted-foreground">
                مقابل {pkg.duration} أشهر من الاشتراك المتميز
              </p>
              {pkg.originalPrice && (
                <p className="text-sm text-muted-foreground line-through mt-2">
                  السعر الأصلي: {pkg.originalPrice} ر.س
                </p>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gradient-gold">المحتوى المتاح</h4>
            <div className="grid grid-cols-3 gap-4">
              <Card className="gold-border bg-muted/30 p-4 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent mb-1">
                  <Counter target={pkg.features.channels} />
                </p>
                <p className="text-sm text-muted-foreground">قنوات</p>
              </Card>
              <Card className="gold-border bg-muted/30 p-4 text-center">
                <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent mb-1">
                  <Counter target={pkg.features.movies} />
                </p>
                <p className="text-sm text-muted-foreground">أفلام</p>
              </Card>
              <Card className="gold-border bg-muted/30 p-4 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent mb-1">
                  <Counter target={pkg.features.series} />
                </p>
                <p className="text-sm text-muted-foreground">مسلسلات</p>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gradient-gold">المميزات المتضمنة</h4>
            <div className="space-y-3">
              {[
                'بث مباشر بدون تقطيع',
                'جودة 4K عالية',
                'دعم 24/7',
                'تحديثات يومية للمحتوى',
                'متوافق مع جميع الأجهزة',
                'لا توجد إعلانات'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsApp}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            اطلب الآن عبر الواتساب
          </Button>

          {/* Additional Info */}
          <div className="bg-muted/50 p-4 rounded-lg text-center text-sm text-muted-foreground">
            <p>✓ سيتم تفعيل الاشتراك فوراً بعد التأكيد من الدفع</p>
            <p className="mt-2">✓ ضمان استرجاع الأموال خلال 48 ساعة</p>
          </div>
        </div>
      </div>
    </>
  );
}
