# Handoff: DiaDisk-Webseite (diadisk.de)

Stand: 18.11.2026 · Paket: `diadisk.de.zip` · Inhaber: Dmitry Korotkiy

## 1. Was die Seite ist
Statische Ein-Seiten-Website für die macOS-App DiaDisk 1.0.0 (Speicheranalyse, Apple Silicon, macOS 14+). Reines HTML/CSS/JS ohne Build-Schritt, gehostet auf GitHub Pages unter der Domain `diadisk.de`. Sprachen: DE, EN, IT, RU (DE ist rechtlich maßgeblich).

## 2. Dateien
| Datei | Zweck |
|---|---|
| `index.html` | Seitengerüst, Meta-Tags, Content-Security-Policy, JSON-LD. Texte stehen als Platzhalter (DE) im HTML, `data-i18n` ersetzt sie |
| `app.js` | Übersetzungen (`var T`, 4 Sprachen), Sprachwahl, Tabs, Modals, SHA-Kopieren, Payhip-Link, Kontakt-`mailto:` |
| `legal.js` | Impressum, Datenschutz, KI-Hinweis, Widerruf in 4 Sprachen (`window.LEGAL`) |
| `style.css` | Gesamtes Styling, Hell/Dunkel per `prefers-color-scheme` |
| `img/*.webp` | 7 Screenshots (6 Fenster-Bilder je 1392 × 780 px, `tree-languages` 1400 × 939 px; Stand 18.11.2026, App 1.0 Build 2611182119) |
| `video/DiaDisk-Demo-30s.mp4`, `video/DiaDisk-Demo-poster.webp` | 30-Sekunden-Demo (H.264, 1920 × 1160, ohne Ton, ca. 2,4 MB) und Vorschaubild; Abschnitt `#demo` oberhalb der Ansichten |
| `logo-light.svg`, `logo-dark.svg` | Logo (Kopfzeile, Download-Karte); per `<picture>` und `prefers-color-scheme` gewechselt. PNG-Fassungen: `logo*.png`, `logo-96*.png` |
| `favicon.svg` | Favicon (Würfel ohne Buchstaben), wechselt Hell/Dunkel per Media-Query im SVG |
| `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` | Fallbacks und Homescreen: weißer Würfel auf blauer App-Kachel |
| `favicon-light.png`, `favicon-dark.png`, `favicon-light.svg` | Originaldateien der Logo-Vorlage (nicht eingebunden) |
| `og-image.jpg` | Vorschaubild für soziale Netzwerke (1200 × 630) |
| `downloads/` | `DiaDisk.zip` (signierte DiaDisk.app, 1.0.0) und `DiaDisk.zip.sha256` |
| `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html` | Hosting und SEO |
| `DEPLOY.md` | Schritt-für-Schritt-Veröffentlichung |

## 3. Aufbau der Seite (von oben)
Kopfzeile (Logo, Navigation, Sprachwahl) → Hero (Download-Button, Kurzinfo) → Demo-Video (`#demo`) → Ansichten (7 Tabs mit Screenshots) → Funktionen (9 kompakte Karten) → Preis und Lizenz (3 Schritte) → Notarisierungs-Hinweis (kompakt) → Download (SHA-256) → Kontakt (`mailto:`) → Fußzeile (Rechtstexte als Modals).

## 4. Texte ändern
- Jeder Text hat einen Schlüssel in `app.js` (`T.de`, `T.en`, `T.it`, `T.ru`). Neuer Text: Schlüssel in allen vier Sprachen anlegen und im HTML mit `data-i18n="schlüssel"` verwenden. Für Bildbeschreibungen `data-i18n-alt`.
- Der Platzhaltertext in `index.html` sollte dem deutschen Text entsprechen (Anzeige ohne JavaScript).
- „Made in Germany." bleibt in allen Sprachen englisch (steht am Ende von `hero_sub`).
- Rechtstexte nur in `legal.js` ändern (gültiges JSON in `window.LEGAL = {...};`).
- Nutzungs- und Lizenzbedingungen (EULA, Footer „Nutzungsbedingungen“, Modal `eula`): nur Deutsch und Englisch in `legal.js`; IT und RU zeigen die englische Fassung. Quelle ist `docs/EULA.md` im App-Projekt.

## 5. Wichtige Festlegungen
- Einzige hinterlegte E-Mail-Adresse: `info@diadisk.de` (geprüft in `index.html`, `app.js`, `legal.js`; keine weitere vorhanden).
- Preis „ab 2,99 € inkl. MwSt.“ (Bruttopreis; Hero, Preiskarte, Meta-Description, `og:description`, JSON-LD mit `price: 2.99` und `valueAddedTaxIncluded: true`; EN „incl. VAT“, IT „IVA inclusa“, RU „с НДС“).
- Lizenzmodell: 7 Tage alles testen, danach Eiszapfen-Ansicht und Standardfarben kostenlos, alles Weitere „Zahl, was du willst“ ab 2,99 € inkl. MwSt., bis zu 2 Macs, Verkauf über Payhip.
- Kein Backend, keine Cookies. Kontakt nur per `mailto:` (Themenauswahl setzt den Betreff).

## 6. Offene Punkte vor dem Livegang
1. Erledigt: `PAYHIP_URL` in `app.js` zeigt auf `https://payhip.com/b/aEo54` (öffentlicher Produktlink, kein Geheimnis).
2. Erledigt: `downloads/DiaDisk.zip` und `.sha256` liegen bei. Bei neuer Version: ZIP ersetzen, `.sha256` neu erzeugen (`shasum -a 256 DiaDisk.zip`), SHA-256-Wert (nur `index.html`, Element `#sha-value`) und Größe (`dl_meta`) in `index.html`/`app.js`, Versionsnummer (`btn_dl`, `index.html`, JSON-LD) anpassen.
3. Alle Rechtstexte (Impressum, Datenschutz, Widerrufshinweis, Nutzungsbedingungen, KI-Hinweis) vor Veröffentlichung juristisch prüfen lassen.
4. Notarisierung: Hinweis in der Seite entfernen, sobald die App notarisiert ist (Abschnitt `#notarisierung`, Schlüssel `nt_*`; Verweise in `dl_note`).
5. GitHub Pages: öffentliches Repository, Branch `main`, Ordner `/`, DNS auf GitHub, danach „Enforce HTTPS“.

## 7. Technische Hinweise
- Sicherheits-Header auf GitHub Pages nur per `<meta>` möglich (CSP vorhanden; `frame-ancestors`, HSTS und X-Frame-Options nicht).
- Screenshots: Fenster-Screenshots mit Schatten (RGBA-PNG) am Fensterrand zuschneiden (Alpha ≥ 250), auf 1392 px Breite verkleinern (Höhe ca. 780 px), als WebP mit Transparenz speichern (Qualität 88); `width`/`height` in `index.html` anpassen. `tree-languages` (Fenster mit Sprachmenü) auf 1400 px Breite.
- Video: `<video id="demo-video">` mit `muted loop playsinline controls`; startet nur im sichtbaren Bereich und nicht bei „Bewegung reduzieren“ (siehe `app.js`, Abschnitt „Demo-Video“). Der Rahmen ist schwarz, weil die Aufnahme zu Beginn ein schmaleres Fenster zeigt. Die Figur hat bewusst nicht die Klasse `shot` (sonst blenden die Tabs sie aus).
- Favicons: `favicon.svg` passt sich dem Browser-Schema an; ICO/PNG/Apple-Touch zeigen den Würfel weiß auf blauer Kachel und sind auf hellen und dunklen Tabs sichtbar.
- Getestet: Chromium (Desktop und 390 px breit), keine Konsolenfehler.
