# Deployment Script for React TypeScript Project
# This script builds and prepares the project for deployment

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Clean previous build
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✅ Previous build cleaned" -ForegroundColor Green
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green

# Type check
Write-Host "🔍 Running type check..." -ForegroundColor Yellow
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Type check failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Type check passed" -ForegroundColor Green

# Build for production
Write-Host "🏗️ Building for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Show build info
Write-Host "📊 Build Information:" -ForegroundColor Cyan
$buildSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum
$buildSizeMB = [math]::Round($buildSize / 1MB, 2)
Write-Host "   Total size: $buildSizeMB MB" -ForegroundColor White

$fileCount = (Get-ChildItem -Path "dist" -Recurse -File).Count
Write-Host "   Files generated: $fileCount" -ForegroundColor White

# List generated files
Write-Host "📁 Generated files:" -ForegroundColor Cyan
Get-ChildItem -Path "dist" -Recurse | ForEach-Object {
    $size = if ($_.PSIsContainer) { "DIR" } else { [math]::Round($_.Length / 1KB, 1).ToString() + " KB" }
    Write-Host "   $($_.Name) ($size)" -ForegroundColor White
}

Write-Host "🎉 Deployment build completed successfully!" -ForegroundColor Green
Write-Host "📁 Your production files are ready in the 'dist' folder" -ForegroundColor Cyan
Write-Host "🌐 You can now deploy the contents of the 'dist' folder to any web server" -ForegroundColor Cyan
