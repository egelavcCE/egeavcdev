@echo off
REM Deployment Script for React TypeScript Project
REM This script builds and prepares the project for deployment

echo 🚀 Starting deployment process...

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist "dist" (
    rmdir /s /q "dist"
    echo ✅ Previous build cleaned
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)
echo ✅ Dependencies installed

REM Type check
echo 🔍 Running type check...
call npm run type-check
if %errorlevel% neq 0 (
    echo ❌ Type check failed
    exit /b 1
)
echo ✅ Type check passed

REM Build for production
echo 🏗️ Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    exit /b 1
)
echo ✅ Build completed successfully

echo 🎉 Deployment build completed successfully!
echo 📁 Your production files are ready in the 'dist' folder
echo 🌐 You can now deploy the contents of the 'dist' folder to any web server

pause
