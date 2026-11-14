@echo off
setlocal enabledelayedexpansion

echo =======================================================
echo   ANUDEEP V F - AUTOMATED GITHUB PORTFOLIO DEPLOYER
echo =======================================================
echo.

cd /d "%~dp0"

set "GH_USER=%~1"

if "%GH_USER%"=="" (
    echo Please look at your Microsoft Edge browser where GitHub is open.
    echo Enter your GitHub Username (e.g. anudeep-vf or anudeep123):
    set /p "GH_USER=GitHub Username: "
)

if "%GH_USER%"=="" (
    echo [ERROR] GitHub username cannot be empty!
    pause
    exit /b 1
)

echo.
echo [*] Configuring Git remote origin for https://github.com/%GH_USER%/portfolio.git ...
git remote remove origin >nul 2>&1
git remote add origin "https://github.com/%GH_USER%/portfolio.git"
git branch -M main

echo [*] Pushing repository to GitHub...
echo (If a sign-in window appears, click 'Sign in with your browser' to authenticate with Edge)
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================
    echo   [SUCCESS] Code pushed successfully to GitHub!
    echo =======================================================
    echo.
    echo Opening GitHub Pages Settings in Microsoft Edge...
    start msedge "https://github.com/%GH_USER%/portfolio/settings/pages"
    echo.
    echo In GitHub Pages settings:
    echo 1. Under "Branch", select "main" and "/ (root)"
    echo 2. Click "Save"
    echo.
    echo Your site will be live at:
    echo https://%GH_USER%.github.io/portfolio/
    echo =======================================================
) else (
    echo.
    echo [NOTE] Push failed. Make sure you clicked 'Create repository' in GitHub first!
    echo Also ensure the repository name is 'portfolio' and is Public.
)

echo.
pause
