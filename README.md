# React TypeScript Projesi

Bu proje, modern React geliştirme için klasik bir kurulum içerir. TypeScript desteği ile birlikte organize edilmiş klasör yapısı ve geliştirme araçları ile birlikte gelir.

## 🚀 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm start
```

3. **Tarayıcınızda açın:**
Proje otomatik olarak `http://localhost:3000` adresinde açılacaktır.

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir React bileşenleri
│   ├── Button/
│   ├── Header/
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   └── index.ts
├── services/           # API servisleri ve dış bağlantılar
│   └── api.ts
├── styles/             # CSS dosyaları
│   ├── index.css
│   └── App.css
├── types/              # TypeScript tip tanımları
│   └── index.ts
├── utils/              # Yardımcı fonksiyonlar ve sabitler
│   ├── constants.ts
│   ├── helpers.ts
│   └── index.ts
├── App.tsx             # Ana uygulama bileşeni
└── index.tsx           # Uygulama giriş noktası
```

## 🛠️ Mevcut Komutlar

- `npm start` - Geliştirme sunucusunu başlatır
- `npm run build` - Production build oluşturur
- `npm run dev` - Geliştirme modunda başlatır
- `npm run type-check` - TypeScript tip kontrolü yapar

## 🎯 Özellikler

- ✅ TypeScript desteği
- ✅ Modern React (18.x) ile hooks
- ✅ Webpack 5 ile geliştirme ortamı
- ✅ Hot reload
- ✅ CSS modül desteği
- ✅ Organize klasör yapısı
- ✅ Custom hooks örnekleri
- ✅ API servis katmanı
- ✅ Utility fonksiyonları
- ✅ TypeScript tip tanımları

## 📝 Geliştirme

### Yeni Bileşen Ekleme
1. `src/components/` klasörüne yeni bileşen klasörü oluşturun
2. `.tsx` ve `.css` dosyalarını ekleyin
3. `src/components/index.ts` dosyasından export edin

### Custom Hook Ekleme
1. `src/hooks/` klasörüne yeni hook dosyası ekleyin
2. `src/hooks/index.ts` dosyasından export edin

### API Servisi Kullanımı
```typescript
import { apiService } from '@/services/api';

// GET isteği
const data = await apiService.get<User[]>('/users');

// POST isteği
const result = await apiService.post<User>('/users', userData);
```

## 🔧 Konfigürasyon

- **TypeScript**: `tsconfig.json`
- **Webpack**: `webpack.config.js`
- **Babel**: `.babelrc`

## 📦 Bağımlılıklar

### Ana Bağımlılıklar
- React 18.x
- React-DOM 18.x
- TypeScript 5.x

### Geliştirme Bağımlılıkları
- Webpack 5
- Babel
- CSS Loader
- TypeScript Loader

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
