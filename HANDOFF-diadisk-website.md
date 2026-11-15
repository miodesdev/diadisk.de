# Handoff: DiaDisk-Webseite (diadisk.de)

Stand: 10.11.2026 · Paket: `diadisk-ghpages9.zip` · Inhaber: Dmitry Korotkiy

## 1. Was die Seite ist
Statische Ein-Seiten-Website für die macOS-App DiaDisk 1.0.0 (Speicheranalyse, Apple Silicon, macOS 14+). Reines HTML/CSS/JS ohne Build-Schritt, gehostet auf GitHub Pages unter der Domain `diadisk.de`. Sprachen: DE, EN, IT, RU (DE ist rechtlich maßgeblich).

## 2. Dateien
| Datei | Zweck |
|---|---|
| `index.html` | Seitengerüst, Meta-Tags, Content-Security-Policy, JSON-LD. Texte stehen als Platzhalter (DE) im HTML, `data-i18n` ersetzt sie |
| `app.js` | Übersetzungen (`var T`, 4 Sprachen), Sprachwahl, Tabs, Modals, SHA-Kopieren, Payhip-Link, Kontakt-`mailto:`, Zähler |
| `legal.js` | Impressum, Datenschutz, KI-Hinweis, Widerruf in 4 Sprachen (`window.LEGAL`) |
| `style.css` | Gesamtes Styling, Hell/Dunkel per `prefers-color-scheme` |
| `img/*.webp` | 7 Screenshots (6 Fenster-Bilder je 1392 × 787 px, `tree-languages` 1400 × 1012 px) |
| `logo.png`, `logo-96.png` | Logo (Kopfzeile, Download-Karte) |
| `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` | Browser-Tab und Homescreen, Logo auf dunkler Kachel |
| `downloads/` | Hier liegen `DiaDisk-1.0.0.dmg` und `DiaDisk-1.0.0.dmg.sha256` (nicht im Paket) |
| `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html` | Hosting und SEO |
| `DEPLOY.md` | Schritt-für-Schritt-Veröffentlichung |

## 3. Aufbau der Seite (von oben)
Kopfzeile (Logo, Navigation, Sprachwahl) → Hero (Download-Button, Kurzinfo) → Ansichten (7 Tabs mit Screenshots) → Funktionen (9 kompakte Karten) → Preis und Lizenz (3 Schritte, Einführungspreis) → Notarisierungs-Hinweis (kompakt) → Download (SHA-256, Zähler) → Kontakt (`mailto:`) → Fußzeile (Rechtstexte als Modals).

## 4. Texte ändern
- Jeder Text hat einen Schlüssel in `app.js` (`T.de`, `T.en`, `T.it`, `T.ru`). Neuer Text: Schlüssel in allen vier Sprachen anlegen und im HTML mit `data-i18n="schlüssel"` verwenden. Für Bildbeschreibungen `data-i18n-alt`.
- Der Platzhaltertext in `index.html` sollte dem deutschen Text entsprechen (Anzeige ohne JavaScript).
- „Made in Germany." bleibt in allen Sprachen englisch (steht am Ende von `hero_sub`).
- Rechtstexte nur in `legal.js` ändern (gültiges JSON in `window.LEGAL = {...};`).

## 5. Wichtige Festlegungen
- Einzige hinterlegte E-Mail-Adresse: `info@diadisk.de` (geprüft in `index.html`, `app.js`, `legal.js`; keine weitere vorhanden).
- Preis „ab 1,99 €“ ist als **Einführungspreis** gekennzeichnet (Hero, Preiskarte, Meta-Description).
- Lizenzmodell: 7 Tage alles testen, danach Strahldiagramm und Standardfarben kostenlos, alles Weitere „Zahl, was du willst“ ab 1,99 €, bis zu 2 Macs, Verkauf über Payhip.
- Kein Backend, keine Cookies. Kontakt nur per `mailto:` (Themenauswahl setzt den Betreff).

## 6. Zähler (Besucher gesamt, Besucher heute, Download-Klicks)
- Dienst: CounterAPI, `https://api.counterapi.dev/v1/diadisk-de/<name>/up` (Namen: `visits-total`, `visits-JJJJMMTT` in UTC, `downloads`).
- Einstellungen in `app.js`: `CNT` (Adresse, Namespace), `COUNT_ONCE_PER_DAY` (Standard `true`, merkt sich das Datum im Local Storage unter `dd_visit`).
- Download-Klicks: jeder Klick auf einen Link, der auf `.dmg` endet.
- Die CSP in `index.html` erlaubt nur `connect-src https://api.counterapi.dev`. Beim Dienstwechsel dort, in `CNT` und in Abschnitt 3 und 4 der Datenschutzerklärung (`legal.js`, alle 4 Sprachen) ändern.
- Bei Ausfall zeigen die Kacheln „–“.
- Die Zähler sind öffentlich und manipulierbar.
- Die Zähler-Funktion wurde nur mit simuliertem Dienst getestet, nicht gegen den echten.

## 7. Offene Punkte vor dem Livegang
1. `PAYHIP_URL` oben in `app.js` eintragen (leer = Kaufen-Buttons bleiben ausgeblendet).
2. `downloads/DiaDisk-1.0.0.dmg` und `.sha256` ablegen, `downloads/README.txt` löschen. Bei neuer Version: Dateiname und Version in `index.html` (zweimal) sowie den SHA-256-Wert anpassen und `app.js` (`btn_dl`, `dl_*`-Texte) prüfen.
3. CounterAPI prüfen (Anbieter, Sitz, Datenschutzhinweise, Erreichbarkeit mit echter Domain) und die Datenschutzerklärung rechtlich prüfen lassen. Offene Frage: Das Speichern von `dd_visit` ist nicht „technisch erforderlich“; ggf. Einwilligung oder Zählung ohne Speicherung (jeder Aufruf zählt).
4. Alle Rechtstexte (Impressum, Datenschutz, Widerruf, KI-Hinweis) vor Veröffentlichung juristisch prüfen lassen.
5. Notarisierung: Hinweis in der Seite entfernen, sobald die App notarisiert ist (Abschnitt `#notarisierung`, Schlüssel `nt_*`; Verweise in `dl_note`).
6. GitHub Pages: öffentliches Repository, Branch `main`, Ordner `/`, DNS auf GitHub, danach „Enforce HTTPS“.

## 8. Technische Hinweise
- Sicherheits-Header auf GitHub Pages nur per `<meta>` möglich (CSP vorhanden; `frame-ancestors`, HSTS und X-Frame-Options nicht).
- Screenshots: neue Bilder auf dieselbe Größe (1392 × 787 px) zuschneiden, Fensterrand entfernen, Ecken abrunden (Radius ca. 22 px), als WebP speichern.
- Favicons: Logo auf dunkler, abgerundeter Kachel, damit es in hellen und dunklen Tabs sichtbar ist.
- Getestet: Chromium (Desktop und 390 px breit), keine Konsolenfehler.
