import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const carConditions = [
  'Без проблем / Целый',
  'Без документов',
  'Кредитный / Залоговый / Лизинговый',
  'Не на ходу / С тех. проблемами',
  'Не на учете',
  'Под разбор / На запчасти',
  'После аварии / ДТП',
  'После пожара',
  'Списанный',
  'С запретами / ограничениями / под арестом',
  'С юридическими проблемами',
  'Утопленный',
  'Старый',
];

const Index = () => {
  const [step, setStep] = useState(0);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [hasPhotos, setHasPhotos] = useState<string>('');
  const [formData, setFormData] = useState({
    carModel: '',
    year: '',
    mileage: '',
  });

  const progress = ((step + 1) / 6) * 100;

  const handleConditionToggle = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setStep(6);
  };

  if (step === 0) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/3070880e-3668-4713-bcaa-9370c1259985.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            <div className="border-t-4 border-primary w-full mb-8"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
              КУПИМ<br />
              <span className="text-primary">ВАШ<br />АВТОМОБИЛЬ</span><br />
              СЕГОДНЯ!
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-medium">
              В Хабаровске, Комсомольске-на-Амуре и Хабаровском крае
            </p>
            
            <div className="border-t-4 border-primary w-full mb-8"></div>
            
            <ul className="space-y-3 mb-8 text-base md:text-lg">
              {carConditions.map((condition, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-foreground/90 underline">{condition}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t-4 border-primary w-full mb-8"></div>
            
            <p className="text-lg mb-8 text-foreground/90">
              Ответьте на <span className="text-primary font-bold">5 простых</span> вопросов<br />
              и узнайте сумму выкупа.
            </p>
            
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-6 rounded-lg transition-all hover:scale-105"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              ПОЕХАЛИ!
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-foreground/80">
              <a href="https://wa.me/" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
                <span>WhatsApp</span>
              </a>
              <a href="viber://chat" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
                <span>Viber</span>
              </a>
            </div>
            
            <p className="text-center mt-6 text-foreground/60 text-sm">
              vykupauto27kna.ru
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/3070880e-3668-4713-bcaa-9370c1259985.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <Card className="relative z-10 max-w-xl w-full p-8 bg-card/95 backdrop-blur-sm border-primary/20">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20">
              <Icon name="CheckCircle" size={48} className="text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">Спасибо!</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Мы получили вашу заявку и свяжемся с вами в ближайшее время для уточнения деталей и оценки вашего автомобиля.
            </p>
            
            <div className="border-t border-primary/20 pt-6 mb-6">
              <p className="text-foreground/80 mb-4">Свяжитесь с нами прямо сейчас:</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://wa.me/', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </Button>
                
                <Button
                  onClick={() => window.open('viber://chat', '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                >
                  <Icon name="Phone" size={20} />
                  Viber
                </Button>
              </div>
            </div>
            
            <Button
              onClick={() => setStep(0)}
              variant="outline"
              className="w-full border-primary/30 text-foreground hover:bg-primary/10"
            >
              Вернуться на главную
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/3070880e-3668-4713-bcaa-9370c1259985.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <Card className="relative z-10 max-w-2xl w-full p-6 md:p-8 bg-card/95 backdrop-blur-sm border-primary/20">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground/80">{step} / 5</span>
            <span className="text-sm font-medium text-foreground/80">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              В каком состоянии Ваш автомобиль? (можно несколько вариантов)
            </h2>
            
            <div className="space-y-3">
              {carConditions.map((condition) => (
                <div key={condition} className="flex items-center space-x-3">
                  <Checkbox
                    id={condition}
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={() => handleConditionToggle(condition)}
                    className="border-foreground/30"
                  />
                  <Label
                    htmlFor={condition}
                    className="text-base cursor-pointer text-foreground/90"
                  >
                    {condition}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Марка и модель автомобиля?
            </h2>
            
            <input
              type="text"
              placeholder="Например: Toyota Camry"
              value={formData.carModel}
              onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Есть фотографии автомобиля?
            </h2>
            
            <div className="space-y-4">
              <Button
                variant={hasPhotos === 'upload' ? 'default' : 'outline'}
                onClick={() => setHasPhotos('upload')}
                className="w-full justify-start text-left h-auto py-4 px-6"
              >
                <Icon name="Upload" className="mr-3" size={24} />
                <div>
                  <div className="font-semibold">Выберите файлы</div>
                  <div className="text-sm opacity-80">Загрузите фото вашего автомобиля</div>
                </div>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="no-photos"
                  checked={hasPhotos === 'no'}
                  onCheckedChange={() => setHasPhotos(hasPhotos === 'no' ? '' : 'no')}
                />
                <Label htmlFor="no-photos" className="cursor-pointer">
                  Фото нет
                </Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="later"
                  checked={hasPhotos === 'later'}
                  onCheckedChange={() => setHasPhotos(hasPhotos === 'later' ? '' : 'later')}
                />
                <Label htmlFor="later" className="cursor-pointer">
                  Фото могу отправить позже
                </Label>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Год выпуска?
            </h2>
            
            <input
              type="text"
              placeholder="Например: 2015"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Пробег автомобиля?
            </h2>
            
            <input
              type="text"
              placeholder="Например: 120000 км"
              value={formData.mileage}
              onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              className="flex-1 border-border text-foreground hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад
            </Button>
          )}
          
          {step < 5 ? (
            <Button
              onClick={handleNext}
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              Далее
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Отправить
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Index;
