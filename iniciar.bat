@echo off
title Servidor de Desarrollo - Consultorio
cd /d "%~dp0"
echo ==========================================
echo Iniciando el servidor local de desarrollo...
echo ==========================================
npm run dev
pause
