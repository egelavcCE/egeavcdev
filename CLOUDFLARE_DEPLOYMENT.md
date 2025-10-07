# 🌐 Cloudflare Pages Deployment Guide

Bu rehber, projenizi Cloudflare Pages'e deploy etmek için gerekli adımları içerir.

## 🚀 Hızlı Deployment

### Yöntem 1: Cloudflare Dashboard (Önerilen)
1. [Cloudflare Pages](https://pages.cloudflare.com/)'e giriş yapın
2. "Create a project" butonuna tıklayın
3. GitHub repository'nizi bağlayın
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (boş bırakın)
5. "Save and Deploy" butonuna tıklayın

### Yöntem 2: Wrangler CLI
```bash
# Wrangler CLI'yi yükleyin (eğer yoksa)
npm install -g wrangler

# Cloudflare'e giriş yapın
wrangler login

# Projeyi deploy edin
npm run deploy:cloudflare
```

## ⚙️ Konfigürasyon

### wrangler.toml
Proje root'unda `wrangler.toml` dosyası oluşturuldu:
```toml
name = "egedev-portfolio"
compatibility_date = "2024-01-01"

[pages]
output_dir = "dist"

[build]
command = "npm run build"
cwd = "."
```

### package.json Scripts
Yeni deployment script'i eklendi:
```json
{
  "scripts": {
    "deploy:cloudflare": "npm run build && npx wrangler pages deploy dist"
  }
}
```

## 🔧 Build Ayarları

### Cloudflare Pages Build Settings
- **Framework preset**: None (Custom)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (boş)
- **Environment variables**: (gerekirse ekleyin)

### Build Process
1. `npm install` - Dependencies yüklenir
2. `npm run build` - Production build oluşturulur
3. `dist` klasörü Cloudflare Pages'e deploy edilir

## 📁 Build Çıktısı

Build tamamlandıktan sonra `dist` klasöründe:
- `index.html` - Ana HTML dosyası
- `bundle.[hash].js` - JavaScript bundle
- `vendors.[hash].js` - Vendor libraries
- Asset dosyaları (resimler, fontlar)

## 🌍 Custom Domain

1. Cloudflare Pages dashboard'da projenizi seçin
2. "Custom domains" sekmesine gidin
3. Domain'inizi ekleyin
4. DNS ayarlarını yapın

## 🔄 Otomatik Deployment

GitHub repository'nizi bağladıktan sonra:
- Her push'ta otomatik build ve deploy
- Preview deployments (pull request'ler için)
- Branch-based deployments

## 🐛 Sorun Giderme

### Build Hatası
```bash
# Local'de test edin
npm run build
npm run preview
```

### Asset Yüklenmiyor
- `publicPath` ayarını kontrol edin (webpack.config.js)
- Relative path kullanıldığından emin olun

### Router Çalışmıyor
- SPA routing için `_redirects` dosyası gerekebilir
- Cloudflare Pages otomatik olarak handle eder

## 📊 Performance

Cloudflare Pages avantajları:
- ✅ Global CDN
- ✅ Otomatik HTTPS
- ✅ Edge caching
- ✅ DDoS protection
- ✅ Analytics

## 🔗 Faydalı Linkler

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Build Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
