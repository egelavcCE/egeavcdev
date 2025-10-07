# Development server başlatma script'i
# Edge kapatıldığında server'ı da sonlandırır

Write-Host "🚀 React TypeScript projesi başlatılıyor..." -ForegroundColor Green

# Önce mevcut node process'lerini temizle
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Development server'ı başlat
$job = Start-Job -ScriptBlock {
    Set-Location "C:\Users\egela\Desktop\egedev"
    npm run dev:no-open
}

Write-Host "⏳ Server başlatılıyor, lütfen bekleyin..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Edge'i aç
Write-Host "🌐 Edge tarayıcısı açılıyor..." -ForegroundColor Blue
Start-Process "msedge" -ArgumentList "http://localhost:3000"

Write-Host "✅ Proje çalışıyor! http://localhost:3000" -ForegroundColor Green
Write-Host "❌ Edge'i kapattığınızda server da sonlanacak" -ForegroundColor Red
Write-Host "🔄 Edge'i yeniden açmak için F5'e basın" -ForegroundColor Cyan

# Edge process'ini izle
do {
    $edgeProcess = Get-Process -Name "msedge" -ErrorAction SilentlyContinue
    if (-not $edgeProcess) {
        Write-Host "`n🔴 Edge kapatıldı, server sonlandırılıyor..." -ForegroundColor Red
        Stop-Job $job -ErrorAction SilentlyContinue
        Remove-Job $job -ErrorAction SilentlyContinue
        Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
        Write-Host "✅ Server sonlandırıldı" -ForegroundColor Green
        break
    }
    Start-Sleep -Seconds 1
} while ($true)

Write-Host "`n👋 Görüşürüz!" -ForegroundColor Magenta
