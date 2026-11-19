# DiaDisk auf GitHub Pages veröffentlichen

## Vor dem Hochladen ergänzen
1. Logo und Favicons sind enthalten (`logo-light/dark.svg`, `favicon.svg`, `favicon*`, `apple-touch-icon.png`, `og-image.jpg`).
2. `downloads/DiaDisk.zip` und `DiaDisk.zip.sha256` liegen bei; das Demo-Video liegt in `video/`.
3. `PAYHIP_URL` in `app.js` ist gesetzt (leer = Kaufen-Buttons ausgeblendet).
4. Bei einer neuen Version ZIP ersetzen, `.sha256` neu erzeugen und den SHA-256-Wert in `index.html` anpassen (`shasum -a 256 downloads/DiaDisk.zip`).

## Aktivieren
1. Neues **öffentliches** Repository anlegen und den Inhalt dieses Ordners in den Wurzelordner pushen.
2. Settings → Pages → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)`.
3. Eigene Domain: Die Datei `CNAME` (`diadisk.de`) ist enthalten. Beim Domain-Anbieter einen ALIAS/ANAME auf `<benutzer>.github.io` setzen, oder vier A-Records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) plus CNAME `www` → `<benutzer>.github.io`.
4. Nach der DNS-Übernahme in den Pages-Einstellungen **Enforce HTTPS** aktivieren.

## Was sich gegenüber der PHP-Version geändert hat
- Entfernt: `stats.php`, `download.php`, `contact.php`, `purge.php`, `*-lib.php`, `*-config.php`, `danke.*`, `.htaccess`.
- Notarisierungs-Fortschrittsbalken ist weg (braucht ein Backend).
- Zähler (Besucher/Download-Klicks) und der externe Dienst CounterAPI wurden entfernt; die Seite lädt nichts von Drittservern.
- Kontakt: Themenauswahl + `mailto:`-Link statt Formular.
- Download: direkter Link auf die Datei im Repo (keine Zählung).
- Sicherheits-Header: nur per `<meta>`-CSP möglich. `frame-ancestors`, HSTS und X-Frame-Options lassen sich auf GitHub Pages nicht setzen.
- `legal.js`: Hosting-Abschnitt (GitHub) und Abschnitt „Externe Ressourcen, lokale Speicherung“ (nur `selectedLang` und `glass`) in allen 4 Sprachen. Bitte vor Veröffentlichung selbst prüfen oder juristisch prüfen lassen.
