# DiaDisk auf GitHub Pages veröffentlichen

## Vor dem Hochladen ergänzen
1. Logo und Favicons sind enthalten (`logo*.png`, `favicon*`, `apple-touch-icon.png`).
2. `downloads/DiaDisk-1.0.0.dmg` und `downloads/DiaDisk-1.0.0.dmg.sha256` hineinkopieren, danach `downloads/README.txt` löschen.
3. In `app.js` oben `PAYHIP_URL` eintragen. Solange der Wert leer ist, bleiben die Kaufen-Buttons ausgeblendet.
4. Bei einer neuen Version die Dateinamen und die Version in `index.html` (zweimal `DiaDisk-1.0.0`) und den SHA-256-Wert anpassen.

## Aktivieren
1. Neues **öffentliches** Repository anlegen und den Inhalt dieses Ordners in den Wurzelordner pushen.
2. Settings → Pages → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)`.
3. Eigene Domain: Die Datei `CNAME` (`diadisk.de`) ist enthalten. Beim Domain-Anbieter einen ALIAS/ANAME auf `<benutzer>.github.io` setzen, oder vier A-Records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) plus CNAME `www` → `<benutzer>.github.io`.
4. Nach der DNS-Übernahme in den Pages-Einstellungen **Enforce HTTPS** aktivieren.

## Was sich gegenüber der PHP-Version geändert hat
- Entfernt: `stats.php`, `download.php`, `contact.php`, `purge.php`, `*-lib.php`, `*-config.php`, `danke.*`, `.htaccess`.
- Notarisierungs-Fortschrittsbalken ist weg (braucht ein Backend).
- Zähler (Besucher gesamt, Besucher heute, Download-Klicks): laufen über den externen Dienst CounterAPI (`api.counterapi.dev`), Einstellungen oben in `initCounters` in `app.js` (`CNT`, `COUNT_ONCE_PER_DAY`). Die CSP in `index.html` erlaubt nur diese eine Adresse. Wechsel des Dienstes: `CNT` und `connect-src` anpassen sowie Abschnitt 3/4 der Datenschutzerklärung in `legal.js`.
- Kontakt: Themenauswahl + `mailto:`-Link statt Formular.
- Download: direkter Link auf die Datei im Repo; Klicks auf die Download-Buttons werden über den Zähler gezählt.
- Sicherheits-Header: nur per `<meta>`-CSP möglich. `frame-ancestors`, HSTS und X-Frame-Options lassen sich auf GitHub Pages nicht setzen.
- `legal.js`: Hosting-Abschnitt (GitHub), Zähler- und Formularabschnitt in allen 4 Sprachen angepasst (Abschnitt 3 und 4 beschreiben jetzt CounterAPI und den Local-Storage-Eintrag `dd_visit`). Bitte vor Veröffentlichung selbst prüfen oder juristisch prüfen lassen.
