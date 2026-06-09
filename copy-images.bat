@echo off
echo ========================================
echo Copying Pavilion Images to Project
echo ========================================
echo.

REM Set source and destination paths
set "SOURCE=C:\Users\Himamala Bommaku\Downloads\new the pavillion pic"
set "DEST=C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion"

echo Creating destination folders...
mkdir "%DEST%\exteriors" 2>nul
mkdir "%DEST%\interiors" 2>nul
mkdir "%DEST%\recreation-zone" 2>nul
mkdir "%DEST%\entrance" 2>nul
echo.

echo Copying EXTERIOR images...
REM East Facing Exteriors (selecting best 4)
copy "%SOURCE%\east facing facade\WhatsApp Image 2026-06-06 at 2.00.55 PM.jpeg" "%DEST%\exteriors\villa-street-view-01.jpg"
copy "%SOURCE%\east facing facade\WhatsApp Image 2026-06-06 at 2.00.56 PM.jpeg" "%DEST%\exteriors\villa-front-elevation-01.jpg"
copy "%SOURCE%\east facing facade\WhatsApp Image 2026-06-07 at 12.18.45 PM (16).jpeg" "%DEST%\exteriors\villa-elevation-sunset.jpg"
copy "%SOURCE%\east facing facade\WhatsApp Image 2026-06-07 at 12.18.45 PM (28).jpeg" "%DEST%\exteriors\corner-villa-view.jpg"

REM West Facing Exteriors (selecting best 4)
copy "%SOURCE%\west facing facada\WhatsApp Image 2026-06-07 at 12.18.45 PM (14).jpeg" "%DEST%\exteriors\villa-street-view-02.jpg"
copy "%SOURCE%\west facing facada\WhatsApp Image 2026-06-07 at 12.18.45 PM (15).jpeg" "%DEST%\exteriors\villa-front-elevation-02.jpg"
copy "%SOURCE%\west facing facada\WhatsApp Image 2026-06-07 at 12.18.45 PM (21).jpeg" "%DEST%\exteriors\villa-street-view-03.jpg"
copy "%SOURCE%\west facing facada\WhatsApp Image 2026-06-07 at 12.18.45 PM (26).jpeg" "%DEST%\exteriors\villa-cluster-aerial.jpg"

echo.
echo Copying INTERIOR images...
REM Living Rooms (2 images)
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 1.34.15 PM (1).jpeg" "%DEST%\interiors\living-room-01.jpg"
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 1.34.15 PM (2).jpeg" "%DEST%\interiors\living-room-02.jpg"

REM Kitchens (3 images)
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 11.45.08 AM.jpeg" "%DEST%\interiors\kitchen-01.jpg"
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 11.45.08 AM (1).jpeg" "%DEST%\interiors\kitchen-02.jpg"
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 1.34.15 PM.jpeg" "%DEST%\interiors\dining-kitchen.jpg"

REM Bedrooms (3 images)
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-06 at 11.47.03 AM.jpeg" "%DEST%\interiors\master-bedroom-01.jpg"
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-07 at 12.16.58 PM.jpeg" "%DEST%\interiors\master-bedroom-02.jpg"
copy "%SOURCE%\interor bedroom and kitchen and lounge\WhatsApp Image 2026-06-07 at 12.16.59 PM.jpeg" "%DEST%\interiors\bedroom-03.jpg"

echo.
echo Copying RECREATION ZONE images...
copy "%SOURCE%\recreation zone\WhatsApp Image 2026-06-07 at 12.18.45 PM (2).jpeg" "%DEST%\recreation-zone\aerial-view-01.jpg"
copy "%SOURCE%\recreation zone\WhatsApp Image 2026-06-07 at 12.18.45 PM (3).jpeg" "%DEST%\recreation-zone\aerial-view-02.jpg"
copy "%SOURCE%\recreation zone\WhatsApp Image 2026-06-07 at 12.18.45 PM (4).jpeg" "%DEST%\recreation-zone\aerial-layout.jpg"
copy "%SOURCE%\recreation zone\WhatsApp Image 2026-06-07 at 12.18.45 PM (5).jpeg" "%DEST%\recreation-zone\sports-courts-aerial.jpg"

echo.
echo Copying ENTRANCE images...
copy "%SOURCE%\main gate\WhatsApp Image 2026-06-07 at 12.18.45 PM (10).jpeg" "%DEST%\entrance\main-gate-01.jpg"
copy "%SOURCE%\main gate\WhatsApp Image 2026-06-07 at 12.18.45 PM (11).jpeg" "%DEST%\entrance\entry-gate-evening.jpg"

echo.
echo ========================================
echo Image copying complete!
echo ========================================
echo.
echo Total files copied: 22 images
echo.
echo Next step: Run these commands to deploy:
echo   cd "C:\Users\Himamala Bommaku\the-pavilion"
echo   git add public/images/pavilion/
echo   git commit -m "Add premium villa images"
echo   git push origin main
echo.
pause
