# 🚀 Deployment Guide

Bu proje için deployment rehberi. Projenizi yayınlamak için aşağıdaki adımları takip edin.

## 📦 Hızlı Deployment

### PowerShell ile (Önerilen)
```powershell
npm run deploy
```

### Batch dosyası ile
```cmd
npm run deploy:win
```

### Manuel deployment
```bash
npm install
npm run type-check
npm run build
```

## 🌐 Deployment Seçenekleri

### 1. GitHub Pages
1. GitHub repository'nizi oluşturun
2. `dist` klasörünün içeriğini `gh-pages` branch'ine push edin
3. GitHub Pages ayarlarını yapılandırın

### 2. Netlify
1. Netlify'e giriş yapın
2. "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build command: `npm run build`
5. Publish directory: `dist`

### 3. Vercel
1. Vercel'e giriş yapın
2. "Import Project" seçin
3. Repository'nizi bağlayın
4. Build command: `npm run build`
5. Output directory: `dist`

### 4. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# dist klasörünü seçin
firebase deploy
```

### 5. Cloudflare Pages
1. Cloudflare Pages'e giriş yapın
2. "Create a project" seçin
3. Repository'nizi bağlayın
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Veya CLI ile: `npm run deploy:cloudflare`

### 6. Heroku
1. `package.json`'a ekleyin:
```json
"scripts": {
  "heroku-postbuild": "npm run build"
}
```
2. Heroku'ya deploy edin

## 🔧 Build Optimizasyonları

Proje aşağıdaki optimizasyonları içerir:

- ✅ Code splitting (vendor ve main bundle ayrımı)
- ✅ Asset optimization
- ✅ Source maps (production için)
- ✅ Performance monitoring
- ✅ TypeScript type checking

## 📊 Build Analizi

Bundle analizi için:
```bash
npm run build:analyze
```

## 🧪 Local Preview

Production build'i local'de test etmek için:
```bash
npm run preview
```

## 📁 Build Çıktısı

Build tamamlandıktan sonra `dist` klasöründe şu dosyalar oluşur:

- `index.html` - Ana HTML dosyası
- `bundle.[hash].js` - JavaScript bundle
- `vendors.[hash].js` - Vendor libraries
- Asset dosyaları (resimler, fontlar)

## ⚠️ Önemli Notlar

1. **Public Path**: Production build'de relative path kullanılır (`./`)
2. **Router**: React Router için `historyApiFallback` gerekebilir
3. **Assets**: Tüm asset'ler `dist` klasörüne kopyalanır
4. **Performance**: Bundle size uyarıları için code splitting kullanın

## 🐛 Sorun Giderme

### Build hatası
```bash
npm run type-check  # TypeScript hatalarını kontrol edin
```

### Asset yüklenmiyor
- `publicPath` ayarını kontrol edin
- Server konfigürasyonunu kontrol edin

### Router çalışmıyor
- Server'da `historyApiFallback` ayarını yapın
- SPA routing için gerekli
