import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const mockExecutors = [
  {
    id: 1,
    name: 'Алексей Иванов',
    rating: 4.9,
    reviews: 127,
    specialty: 'Веб-разработка',
    price: '5000-15000',
    experience: '5 лет',
    avatar: '',
    verified: true,
    projects: 89
  },
  {
    id: 2,
    name: 'Мария Петрова',
    rating: 4.8,
    reviews: 94,
    specialty: '3D-моделирование',
    price: '8000-20000',
    experience: '4 года',
    avatar: '',
    verified: true,
    projects: 72
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    rating: 4.7,
    reviews: 156,
    specialty: 'UI/UX дизайн',
    price: '4000-12000',
    experience: '6 лет',
    avatar: '',
    verified: true,
    projects: 134
  },
  {
    id: 4,
    name: 'Елена Новикова',
    rating: 5.0,
    reviews: 68,
    specialty: 'Юридическое сопровождение',
    price: '3000-10000',
    experience: '8 лет',
    avatar: '',
    verified: true,
    projects: 215
  }
];

const mockOrders = [
  { id: 1, title: 'Разработка интернет-магазина', status: 'В работе', executor: 'Алексей Иванов', deadline: '15 дней' },
  { id: 2, title: '3D модель здания', status: 'На проверке', executor: 'Мария Петрова', deadline: '3 дня' },
  { id: 3, title: 'Редизайн мобильного приложения', status: 'Завершён', executor: 'Дмитрий Соколов', deadline: 'Выполнен' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExecutor, setSelectedExecutor] = useState<number | null>(null);

  const filteredExecutors = mockExecutors.filter(executor =>
    executor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    executor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-secondary">WorkHub</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'orders' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Заказы
            </button>
            <button
              onClick={() => setActiveTab('models')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'models' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              3D Модели
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'legal' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Юридическая
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'support' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Поддержка
            </button>
          </div>
          <Button>Войти</Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-12">
            <section className="text-center py-16 space-y-6">
              <h2 className="text-5xl font-bold text-secondary">
                Найдите идеального исполнителя для вашего проекта
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Единая база проверенных специалистов с рейтингами, портфолио и юридическим сопровождением
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveTab('catalog')}>
                  Найти исполнителя
                </Button>
                <Button size="lg" variant="outline">
                  Разместить заказ
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <Icon name="Users" className="text-primary" size={40} />
                <h3 className="text-xl font-semibold">Единая база</h3>
                <p className="text-muted-foreground">
                  Все исполнители в одном месте с прозрачными ценами и реальными отзывами
                </p>
              </Card>
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <Icon name="Box" className="text-primary" size={40} />
                <h3 className="text-xl font-semibold">3D модели</h3>
                <p className="text-muted-foreground">
                  Просматривайте результаты работы в интерактивном 3D формате
                </p>
              </Card>
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <Icon name="Scale" className="text-primary" size={40} />
                <h3 className="text-xl font-semibold">Юридическая защита</h3>
                <p className="text-muted-foreground">
                  Автоматические договоры и защита интересов обеих сторон
                </p>
              </Card>
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl font-bold text-center">Топ исполнителей</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockExecutors.map((executor) => (
                  <Card
                    key={executor.id}
                    className="p-6 space-y-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                    onClick={() => {
                      setSelectedExecutor(executor.id);
                      setActiveTab('catalog');
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={executor.avatar} />
                        <AvatarFallback>{executor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{executor.name}</h4>
                          {executor.verified && <Icon name="BadgeCheck" className="text-primary" size={16} />}
                        </div>
                        <p className="text-sm text-muted-foreground">{executor.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="font-semibold">{executor.rating}</span>
                      <span className="text-sm text-muted-foreground">({executor.reviews})</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Проектов:</span>
                      <span className="font-medium">{executor.projects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Опыт:</span>
                      <span className="font-medium">{executor.experience}</span>
                    </div>
                    <div className="pt-2">
                      <Badge variant="secondary" className="w-full justify-center">
                        {executor.price} ₽
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск по имени или специальности..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Специальность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Веб-разработка</SelectItem>
                  <SelectItem value="3d">3D-моделирование</SelectItem>
                  <SelectItem value="design">UI/UX дизайн</SelectItem>
                  <SelectItem value="legal">Юридическое</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="price-asc">Цена: возрастание</SelectItem>
                  <SelectItem value="price-desc">Цена: убывание</SelectItem>
                  <SelectItem value="reviews">По отзывам</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredExecutors.map((executor) => (
                <Card
                  key={executor.id}
                  className={`p-6 space-y-4 cursor-pointer transition-all hover:shadow-xl ${
                    selectedExecutor === executor.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedExecutor(executor.id)}
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={executor.avatar} />
                      <AvatarFallback className="text-lg">
                        {executor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{executor.name}</h3>
                        {executor.verified && <Icon name="BadgeCheck" className="text-primary" size={20} />}
                      </div>
                      <p className="text-muted-foreground">{executor.specialty}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                          <span className="font-semibold">{executor.rating}</span>
                          <span className="text-muted-foreground">({executor.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Briefcase" size={16} />
                          <span>{executor.projects} проектов</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Стоимость проекта</p>
                      <p className="text-lg font-semibold text-primary">{executor.price} ₽</p>
                    </div>
                    <Button>Связаться</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Мои заказы</h2>
              <Button>
                <Icon name="Plus" size={20} className="mr-2" />
                Новый заказ
              </Button>
            </div>

            <Tabs defaultValue="active" className="w-full">
              <TabsList>
                <TabsTrigger value="active">Активные</TabsTrigger>
                <TabsTrigger value="completed">Завершённые</TabsTrigger>
                <TabsTrigger value="archived">Архив</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-4">
                {mockOrders.map((order) => (
                  <Card key={order.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{order.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="User" size={16} />
                            <span>{order.executor}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            <span>{order.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={order.status === 'В работе' ? 'default' : order.status === 'Завершён' ? 'secondary' : 'outline'}
                        >
                          {order.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Чат
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'models' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold">3D Модели проектов</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Box" size={64} className="text-primary opacity-50" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold">Проект #{item}</h3>
                    <p className="text-sm text-muted-foreground">3D модель архитектурного объекта</p>
                    <Button variant="outline" className="w-full" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'legal' && (
          <div className="animate-fade-in space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">Юридическое сопровождение</h2>
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Icon name="Scale" className="text-primary flex-shrink-0" size={32} />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Автоматические договоры</h3>
                  <p className="text-muted-foreground">
                    При создании заказа автоматически генерируется договор, защищающий права обеих сторон
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                <Icon name="FileText" className="text-primary" size={32} />
                <h3 className="text-lg font-semibold">Договор на разработку</h3>
                <p className="text-sm text-muted-foreground">Стандартный шаблон для IT-проектов</p>
                <Button variant="outline" className="w-full">Скачать шаблон</Button>
              </Card>
              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                <Icon name="FileCheck" className="text-primary" size={32} />
                <h3 className="text-lg font-semibold">Акт приёмки работ</h3>
                <p className="text-sm text-muted-foreground">Документ для подтверждения выполнения</p>
                <Button variant="outline" className="w-full">Скачать шаблон</Button>
              </Card>
              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                <Icon name="Shield" className="text-primary" size={32} />
                <h3 className="text-lg font-semibold">NDA соглашение</h3>
                <p className="text-sm text-muted-foreground">Защита конфиденциальной информации</p>
                <Button variant="outline" className="w-full">Скачать шаблон</Button>
              </Card>
              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                <Icon name="AlertCircle" className="text-primary" size={32} />
                <h3 className="text-lg font-semibold">Претензионная работа</h3>
                <p className="text-sm text-muted-foreground">Помощь в разрешении споров</p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="animate-fade-in space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Поддержка</h2>
            <Card className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тема обращения</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Техническая проблема</SelectItem>
                      <SelectItem value="payment">Вопрос по оплате</SelectItem>
                      <SelectItem value="dispute">Спор по заказу</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea
                    className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Опишите вашу проблему..."
                  />
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <Card className="p-6 space-y-2">
                <Icon name="Mail" className="mx-auto text-primary" size={32} />
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">support@workhub.ru</p>
              </Card>
              <Card className="p-6 space-y-2">
                <Icon name="Phone" className="mx-auto text-primary" size={32} />
                <p className="font-medium">Телефон</p>
                <p className="text-sm text-muted-foreground">8 (800) 555-35-35</p>
              </Card>
              <Card className="p-6 space-y-2">
                <Icon name="Clock" className="mx-auto text-primary" size={32} />
                <p className="font-medium">Часы работы</p>
                <p className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</p>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
