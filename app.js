(function () {
  'use strict';

  // Payhip-Link für die Lizenz hier eintragen. Leer = Kaufen-Buttons bleiben ausgeblendet.
  var PAYHIP_URL = 'https://payhip.com/b/aEo54';

  var T = {
 "de": {
  "alt0": "DiaDisk Startseite mit Laufwerken und Einstellungen",
  "alt1": "DiaDisk mit Strahl-Ansicht der Library, Seitenleiste mit Farbschemen",
  "alt2": "DiaDisk mit Kachel-Ansicht im Farbschema Ozean",
  "alt3": "DiaDisk mit Eiszapfen-Ansicht in Schwarz-Weiß",
  "alt4": "DiaDisk mit Kreis-Verschachtelung im Ampelgradient",
  "alt5": "DiaDisk mit Voronoi-Treemap in Blautönen",
  "alt6": "DiaDisk mit Verzeichnisbaum und geöffneter Sprachauswahl",
  "btn_buy": "Lizenz kaufen (Zahl, was du willst)",
  "btn_dl": "DiaDisk herunterladen",
  "btn_dmg": "ZIP herunterladen",
  "c0": "Die Startseite: Laufwerke, dein Home-Verzeichnis und eigene Ordner, daneben die Einstellungen für Ansichten und Farben.",
  "c1": "Strahl-Ansicht: Ordnerebenen als Ringe, hier im Standard-Farbschema. Dauerhaft kostenlos.",
  "c2": "Kachel-Ansicht: Flächen entsprechen Größen, hier im Schema „Ozean“.",
  "c3": "Eiszapfen-Ansicht: die Hierarchie in Spalten, hier in Schwarz-Weiß.",
  "c4": "Kreis-Verschachtelung: Ordner als ineinanderliegende Kreise, hier als Ampelgradient.",
  "c5": "Voronoi-Treemap: organisch geformte Zellen, hier in Blautönen.",
  "c6": "Verzeichnisbaum mit Größenbalken und Prozentwerten. Im Bild: die Auswahl unter 25 Sprachen.",
  "ct_note": "Deine Angaben verwende ich nur zur Bearbeitung deiner Anfrage und lösche die E-Mails spätestens nach 30 Tagen (siehe <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">Datenschutzerklärung</button>).",
  "ct_send": "E-Mail schreiben",
  "ct_sub": "Idee, Problem oder Feedback zu DiaDisk? Schreib mir an info@diadisk.de oder wähle ein Thema, dann öffnet sich dein Mailprogramm mit passendem Betreff.",
  "ct_t_bug": "Problem / Bug / Technischer Support",
  "ct_t_feedback": "Lob / Kritik",
  "ct_t_idea": "Idee / Neue Anforderung / Verbesserungsvorschlag",
  "ct_t_other": "Sonstiges",
  "ct_title": "Kontakt",
  "ct_topic": "Thema",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 oder neuer) · ZIP, 1,3 MB",
  "dl_note": "Bitte den Hinweis zur fehlenden Notarisierung beachten.",
  "dl_title": "Download",
  "f1d": "Strahl-, Kachel- und Eiszapfen-Ansicht, Kreis-Verschachtelung, Voronoi-Treemap und Verzeichnisbaum mit Größenbalken.",
  "f1t": "Sechs Ansichten",
  "f2d": "Mit einem Klick die 20 größten Einzeldateien: auf der Macintosh HD, in deinem Anwender-Ordner oder in einem gewählten Ordner.",
  "f2t": "Größte Dateien",
  "f3d": "Die Startseite listet deine Laufwerke, dein Home-Verzeichnis und Ordner, die du selbst hinzufügst, auch Netzlaufwerke.",
  "f3t": "Laufwerke und eigene Ordner",
  "f4d": "Auch Ordner einbeziehen, die nur Administratoren lesen dürfen. DiaDisk liest dabei nur und verändert nichts.",
  "f4t": "Als Administrator scannen",
  "f5d": "Sind Ordner gesperrt oder von macOS geschützt, weist DiaDisk darauf hin, dass die Größen unvollständig sind. „Details …“ zeigt die Liste. Belegter, aber nicht scanbarer Speicher erscheint als „Verborgener Speicher“.",
  "f5t": "Ehrlich bei Lücken",
  "f6d": "Im Finder anzeigen, Informationen, Pfad kopieren, In Terminal öffnen oder In den Papierkorb legen, direkt aus der Ansicht.",
  "f6t": "Aktionen im Ergebnis",
  "f7d": "Größe wie im Finder oder tatsächlich belegt: Du siehst beide Werte und erkennst, wo sie sich unterscheiden.",
  "f7t": "Logisch vs. belegt",
  "f8d": "Beim ersten Start wählt DiaDisk deine Systemsprache. Farben: Standard, Pastell, Ozean, Sonnenuntergang, Kontrastreich, Blautöne, Ampelgradient, Schwarz-Weiß.",
  "f8t": "25 Sprachen, 8 Farbschemen",
  "f9d": "Kein Tracking, keine Werbung, keine Drittanbieter-Software. Dateinamen, Pfade und Scan-Ergebnisse verlassen deinen Mac nie. Handbuch, Datenschutzerklärung und Impressum liegen offline im Hilfe-Menü.",
  "f9t": "100 % lokal",
  "f_ai": "KI-Hinweis",
  "f_data": "Datenschutz",
  "f_imp": "Impressum",
  "f_rev": "Widerruf",
  "f_rights": "Alle Rechte vorbehalten.",
  "ft_sub": "Alles, was du brauchst, um schnell zu verstehen, wohin dein Speicherplatz verschwindet.",
  "ft_title": "Funktionen",
  "hero_b1": "<b>Volle Transparenz in 6 Ansichten:</b> Erkunde deinen Festplatten-Speicher aus verschiedenen Blickwinkeln und finde Speicherfresser in Sekundenschnelle.",
  "hero_b2": "<b>Ultraschnell &amp; Nativ:</b> Für Apple Silicon entwickelt – maximale Performance bei minimalem Ressourcenverbrauch.",
  "hero_b3": "<b>100 % Privat &amp; Sicher:</b> Kein Konto, keine Cloud, keine Telemetrie. Deine Daten bleiben garantiert da, wo sie hingehören: auf deinem Mac.",
  "hero_b4": "<b>Made in Germany:</b> Sorgfältige Entwicklung, Datenschutz nach höchsten Standards und kompromisslose Qualität.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 oder neuer) · 7 Tage alles testen. Danach bleiben eine Ansicht und Standardfarben kostenlos, alles Weitere ab 1,99 € (Einführungspreis).",
  "hero_sub": "DiaDisk – der smarte Speicher-Analyzer für deinen Mac – verwandelt unübersichtliche Datenberge in sechs verschiedene, klare, interaktive Ansichten.",
  "hero_tag": "Speicheranalyse für den Mac",
  "hero_title": "Sieh, was deinen Mac füllt.",
  "nav_contact": "Kontakt",
  "nav_download": "Download",
  "nav_features": "Funktionen",
  "nav_pricing": "Preis",
  "nav_security": "Sicherheit",
  "nav_views": "Ansichten",
  "nt_badge": "Wichtiger Hinweis",
  "nt_hint": "Jede neu heruntergeladene Version muss einzeln freigegeben werden. Unter macOS 14 geht auch Rechtsklick → „Öffnen“.",
  "nt_lead": "macOS blockiert den ersten Start, weil Apples automatische Malware-Prüfung (Notarisierung) noch aussteht. Das heißt nicht, dass die App schädlich ist: Prüfe die SHA-256-Prüfsumme der ZIP-Datei und lade nur von diadisk.de. Nach der Notarisierung entfällt die Warnung.",
  "nt_s1": "Prüfsumme der ZIP-Datei prüfen (siehe Download).",
  "nt_s2": "ZIP entpacken, DiaDisk in „Programme“ ziehen, einmal starten und die Warnung mit „Fertig“ schließen.",
  "nt_s3": "Systemeinstellungen → Datenschutz & Sicherheit → bei DiaDisk „Dennoch öffnen“, mit Passwort oder Touch ID bestätigen.",
  "nt_steps_t": "So öffnest du die App trotzdem:",
  "nt_title": "DiaDisk ist noch nicht notarisiert",
  "pr_intro": "Einführungspreis",
  "pr_p1d": "Alle Funktionen, ohne Konto und ohne Einschränkung.",
  "pr_p1t": "7 Tage testen",
  "pr_p2d": "Eine Ansicht und das Standard-Farbschema bleiben dauerhaft kostenlos nutzbar.",
  "pr_p2t": "Kostenlos nutzen (reduzierter Umfang)",
  "pr_p3d": "„Zahl, was du willst“ ab 1,99 € (Einführungspreis) für dauerhafte Freischaltung aller Funktionen auf bis zu 2 Macs – und du unterstützt mich direkt dabei, neue Apps und Updates für macOS zu entwickeln. Vielen Dank!",
  "pr_p3p": "ab 1,99 €",
  "pr_p3t": "Ein Kaffee spenden und alles freischalten",
  "pr_sub": "Erst ausprobieren, dann entscheiden. Kein Abo.",
  "pr_title": "Preis und Lizenz",
  "sha_copied": "Kopiert ✓",
  "sha_copy": "Kopieren",
  "sha_hint": "Prüfen im Terminal:",
  "st_dl": "Download-Klicks",
  "st_note": "Anonyme Zähler, Details in der <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">Datenschutzerklärung</button>.",
  "st_today": "Besucher heute",
  "st_total": "Besucher gesamt",
  "v0": "Start",
  "v1": "Strahl",
  "v2": "Kacheln",
  "v3": "Eiszapfen",
  "v4": "Kreise",
  "v5": "Voronoi",
  "v6": "Baum",
  "views_sub": "Derselbe Scan, sechs Blickwinkel. Wähle die Ansicht, die für dich am besten lesbar ist.",
  "views_title": "Sechs Ansichten, ein Ergebnis"
 },
 "en": {
  "alt0": "DiaDisk home screen with drives and the settings panel",
  "alt1": "DiaDisk showing the sunburst view of Library, with the color scheme sidebar",
  "alt2": "DiaDisk showing a treemap in the Ocean color scheme",
  "alt3": "DiaDisk showing the icicle view in black and white",
  "alt4": "DiaDisk showing circle packing in a traffic-light gradient",
  "alt5": "DiaDisk showing a Voronoi treemap in shades of blue",
  "alt6": "DiaDisk showing the directory tree with the language menu open",
  "btn_buy": "Buy a license (pay what you want)",
  "btn_dl": "Download DiaDisk",
  "btn_dmg": "Download ZIP",
  "c0": "The home screen: your drives, home folder and custom folders, with the settings for views and colors alongside.",
  "c1": "Sunburst view: folder levels as rings, shown in the default color scheme. Free for good.",
  "c2": "Treemap: areas match sizes, shown in the “Ocean” scheme.",
  "c3": "Icicle view: the hierarchy in columns, shown in black & white.",
  "c4": "Circle packing: folders as nested circles, shown as a traffic-light gradient.",
  "c5": "Voronoi treemap: organically shaped cells, shown in shades of blue.",
  "c6": "Directory tree with size bars and percentages. Pictured: choosing from 25 languages.",
  "ct_note": "I use your details only to handle your request and delete emails after 30 days at the latest (see the <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">privacy policy</button>).",
  "ct_send": "Write an email",
  "ct_sub": "Idea, problem or feedback about DiaDisk? Write to info@diadisk.de, or pick a topic and your mail app opens with a matching subject line.",
  "ct_t_bug": "Problem / Bug / Technical support",
  "ct_t_feedback": "Praise / Criticism",
  "ct_t_idea": "Idea / New requirement / Suggestion for improvement",
  "ct_t_other": "Other",
  "ct_title": "Contact",
  "ct_topic": "Topic",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 or newer) · ZIP, 1.3 MB",
  "dl_note": "Please read the note about missing notarization.",
  "dl_title": "Download",
  "f1d": "Sunburst, treemap and icicle views, circle packing, Voronoi treemap and a directory tree with size bars.",
  "f1t": "Six views",
  "f2d": "The 20 biggest individual files in one click: on Macintosh HD, in your user folder or in any folder you choose.",
  "f2t": "Largest files",
  "f3d": "The start page lists your drives, your home folder and folders you add yourself, including network drives.",
  "f3t": "Drives and your own folders",
  "f4d": "Include folders only administrators may read. DiaDisk only reads and never changes anything.",
  "f4t": "Scan as administrator",
  "f5d": "If folders are locked or protected by macOS, DiaDisk tells you the sizes are incomplete. “Details …” shows the list. Space that is used but cannot be scanned appears as “Hidden storage”.",
  "f5t": "Honest about gaps",
  "f6d": "Show in Finder, Get Info, Copy Path, Open in Terminal or Move to Trash, straight from the view.",
  "f6t": "Actions in the result",
  "f7d": "Size as in Finder or actually used on disk: you see both values and where they differ.",
  "f7t": "Logical vs. on disk",
  "f8d": "DiaDisk picks your system language on first launch. Colors: Default, Pastel, Ocean, Sunset, High contrast, Shades of blue, Traffic light gradient, Black & white.",
  "f8t": "25 languages, 8 color schemes",
  "f9d": "No tracking, no ads, no third-party code. File names, paths and scan results never leave your Mac. The manual, privacy policy and legal notice are built into the Help menu, offline.",
  "f9t": "100% local",
  "f_ai": "AI notice",
  "f_data": "Privacy Policy",
  "f_imp": "Imprint",
  "f_rev": "Withdrawal",
  "f_rights": "All rights reserved.",
  "ft_sub": "Everything you need to quickly understand where your storage went.",
  "ft_title": "Features",
  "hero_b1": "<b>Full transparency in 6 views:</b> Explore your disk storage from different angles and find space hogs in seconds.",
  "hero_b2": "<b>Ultra-fast &amp; native:</b> Built for Apple Silicon – maximum performance with minimal resource usage.",
  "hero_b3": "<b>100% private &amp; secure:</b> No account, no cloud, no telemetry. Your data stays exactly where it belongs: on your Mac.",
  "hero_b4": "<b>Made in Germany:</b> Careful development, data protection to the highest standards and uncompromising quality.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 or newer) · Try everything for 7 days. After that, one view and default colors stay free, everything else from €1.99 (introductory price).",
  "hero_sub": "DiaDisk – the smart storage analyzer for your Mac – turns unwieldy mountains of data into six different, clear, interactive views.",
  "hero_tag": "Disk space analyzer for Mac",
  "hero_title": "See what’s filling your Mac.",
  "nav_contact": "Contact",
  "nav_download": "Download",
  "nav_features": "Features",
  "nav_pricing": "Pricing",
  "nav_security": "Security",
  "nav_views": "Views",
  "nt_badge": "Important notice",
  "nt_hint": "Every newly downloaded version must be allowed separately. On macOS 14, right-click → “Open” also works.",
  "nt_lead": "macOS blocks the first launch because Apple’s automated malware check (notarization) is still pending. That does not mean the app is harmful: verify the ZIP file’s SHA-256 checksum and only download from diadisk.de. The warning disappears once the app is notarized.",
  "nt_s1": "Verify the ZIP file’s checksum (see Download).",
  "nt_s2": "Unzip the file, drag DiaDisk to “Applications”, launch it once and dismiss the warning with “Done”.",
  "nt_s3": "System Settings → Privacy & Security → click “Open Anyway” next to DiaDisk, confirm with your password or Touch ID.",
  "nt_steps_t": "How to open the app anyway:",
  "nt_title": "DiaDisk is not notarized yet",
  "pr_intro": "Introductory price",
  "pr_p1d": "Every feature, no account, no limits.",
  "pr_p1t": "7-day trial",
  "pr_p2d": "One view and the default color scheme stay free for good.",
  "pr_p2t": "Use for free (reduced scope)",
  "pr_p3d": "“Pay what you want” from €1.99 (introductory price) for permanent unlocking of all features on up to 2 Macs – and you directly support me in developing new apps and updates for macOS. Thank you!",
  "pr_p3p": "from €1.99",
  "pr_p3t": "Buy me a coffee and unlock everything",
  "pr_sub": "Try first, decide later. No subscription.",
  "pr_title": "Price and license",
  "sha_copied": "Copied ✓",
  "sha_copy": "Copy",
  "sha_hint": "Verify in Terminal:",
  "st_dl": "Download clicks",
  "st_note": "Anonymous counters, details in the <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">privacy policy</button>.",
  "st_today": "Visitors today",
  "st_total": "Total visitors",
  "v0": "Start",
  "v1": "Sunburst",
  "v2": "Treemap",
  "v3": "Icicle",
  "v4": "Circles",
  "v5": "Voronoi",
  "v6": "Tree",
  "views_sub": "The same scan from six angles. Pick the view that reads best for you.",
  "views_title": "Six views, one result"
 },
 "it": {
  "alt0": "Schermata iniziale di DiaDisk con i volumi e il pannello delle impostazioni",
  "alt1": "DiaDisk con la vista a raggiera della cartella Library e barra laterale degli schemi colore",
  "alt2": "DiaDisk con treemap a riquadri nello schema Oceano",
  "alt3": "DiaDisk con la vista icicle in bianco e nero",
  "alt4": "DiaDisk con circle packing in gradiente semaforo",
  "alt5": "DiaDisk con treemap di Voronoi nei toni del blu",
  "alt6": "DiaDisk con albero delle cartelle e menu delle lingue aperto",
  "btn_buy": "Acquista la licenza (paga quanto vuoi)",
  "btn_dl": "Scarica DiaDisk",
  "btn_dmg": "Scarica lo ZIP",
  "c0": "La schermata iniziale: volumi, cartella home e cartelle personali, con accanto le impostazioni di viste e colori.",
  "c1": "Vista a raggiera: i livelli di cartelle come anelli, qui con i colori predefiniti. Gratuita per sempre.",
  "c2": "Treemap a riquadri: le aree corrispondono alle dimensioni, qui con lo schema «Oceano».",
  "c3": "Vista icicle: la gerarchia in colonne, qui in bianco e nero.",
  "c4": "Circle packing: le cartelle come cerchi annidati, qui con il gradiente semaforo.",
  "c5": "Treemap di Voronoi: celle dalle forme organiche, qui nei toni del blu.",
  "c6": "Albero delle cartelle con barre delle dimensioni e percentuali. Nell’immagine: la scelta tra 25 lingue.",
  "ct_note": "Uso i tuoi dati solo per gestire la richiesta ed elimino le email entro 30 giorni al massimo (vedi l’<button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">informativa sulla privacy</button>).",
  "ct_send": "Scrivi un’email",
  "ct_sub": "Un’idea, un problema o un feedback su DiaDisk? Scrivi a info@diadisk.de oppure scegli un argomento: si aprirà il tuo programma di posta con l’oggetto adatto.",
  "ct_t_bug": "Problema / Bug / Supporto tecnico",
  "ct_t_feedback": "Elogi / Critiche",
  "ct_t_idea": "Idea / Nuovo requisito / Suggerimento di miglioramento",
  "ct_t_other": "Altro",
  "ct_title": "Contatti",
  "ct_topic": "Argomento",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 o successivi) · ZIP, 1,3 MB",
  "dl_note": "Leggi l’avviso sulla mancata notarizzazione.",
  "dl_title": "Download",
  "f1d": "Viste a raggiera, a riquadri e icicle, circle packing, treemap di Voronoi e albero delle cartelle con barre delle dimensioni.",
  "f1t": "Sei viste",
  "f2d": "Con un clic i 20 file singoli più grandi: su Macintosh HD, nella cartella utente o in una cartella a scelta.",
  "f2t": "File più grandi",
  "f3d": "La pagina iniziale elenca i dischi, la cartella home e le cartelle che aggiungi tu, anche unità di rete.",
  "f3t": "Dischi e cartelle personali",
  "f4d": "Includi anche le cartelle leggibili solo dagli amministratori. DiaDisk legge soltanto e non modifica nulla.",
  "f4t": "Scansione come amministratore",
  "f5d": "Se alcune cartelle sono bloccate o protette da macOS, DiaDisk avvisa che le dimensioni sono incomplete. «Dettagli …» mostra l’elenco. Lo spazio occupato ma non scansionabile compare come «Spazio nascosto».",
  "f5t": "Onesto sulle lacune",
  "f6d": "Mostra nel Finder, Ottieni informazioni, Copia percorso, Apri nel Terminale o Sposta nel Cestino, direttamente dalla vista.",
  "f6t": "Azioni sul risultato",
  "f7d": "Dimensione come nel Finder o effettivamente occupata: vedi entrambi i valori e dove differiscono.",
  "f7t": "Logica vs. occupata",
  "f8d": "Al primo avvio DiaDisk sceglie la lingua del sistema. Colori: Predefinito, Pastello, Oceano, Tramonto, Alto contrasto, Toni del blu, Gradiente semaforo, Bianco e nero.",
  "f8t": "25 lingue, 8 schemi colore",
  "f9d": "Nessun tracciamento, nessuna pubblicità, nessun codice di terze parti. Nomi dei file, percorsi e risultati non lasciano mai il tuo Mac. Manuale, informativa sulla privacy e note legali sono nel menu Aiuto, offline.",
  "f9t": "100% locale",
  "f_ai": "Avviso IA",
  "f_data": "Privacy",
  "f_imp": "Note legali",
  "f_rev": "Recesso",
  "f_rights": "Tutti i diritti riservati.",
  "ft_sub": "Tutto ciò che serve per capire rapidamente dove è finito il tuo spazio.",
  "ft_title": "Funzioni",
  "hero_b1": "<b>Piena trasparenza in 6 viste:</b> esplora lo spazio del disco da diverse prospettive e trova i divoratori di spazio in pochi secondi.",
  "hero_b2": "<b>Ultraveloce e nativa:</b> sviluppata per Apple Silicon – massime prestazioni con un consumo minimo di risorse.",
  "hero_b3": "<b>100% privata e sicura:</b> nessun account, nessun cloud, nessuna telemetria. I tuoi dati restano dove devono stare: sul tuo Mac.",
  "hero_b4": "<b>Made in Germany:</b> sviluppo accurato, protezione dei dati secondo i più alti standard e qualità senza compromessi.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 o successivi) · Prova tutto per 7 giorni. Poi una vista e i colori predefiniti restano gratuiti, il resto da 1,99 € (prezzo di lancio).",
  "hero_sub": "DiaDisk – lo smart analizzatore di spazio per il tuo Mac – trasforma montagne di dati confuse in sei viste diverse, chiare e interattive.",
  "hero_tag": "Analisi dello spazio su disco per Mac",
  "hero_title": "Scopri cosa riempie il tuo Mac.",
  "nav_contact": "Contatti",
  "nav_download": "Download",
  "nav_features": "Funzioni",
  "nav_pricing": "Prezzo",
  "nav_security": "Sicurezza",
  "nav_views": "Viste",
  "nt_badge": "Avviso importante",
  "nt_hint": "Ogni nuova versione scaricata va autorizzata separatamente. Su macOS 14 funziona anche clic destro → «Apri».",
  "nt_lead": "macOS blocca il primo avvio perché il controllo antimalware automatico di Apple (notarizzazione) non è ancora stato eseguito. Ciò non significa che l’app sia dannosa: verifica la checksum SHA-256 del file ZIP e scarica solo da diadisk.de. Dopo la notarizzazione l’avviso scompare.",
  "nt_s1": "Verifica la checksum del file ZIP (vedi Download).",
  "nt_s2": "Decomprimi il file, trascina DiaDisk in «Applicazioni», avviala una volta e chiudi l’avviso con «Fine».",
  "nt_s3": "Impostazioni di Sistema → Privacy e sicurezza → «Apri comunque» accanto a DiaDisk, conferma con password o Touch ID.",
  "nt_steps_t": "Come aprire comunque l’app:",
  "nt_title": "DiaDisk non è ancora notarizzata",
  "pr_intro": "Prezzo di lancio",
  "pr_p1d": "Tutte le funzioni, senza account e senza limiti.",
  "pr_p1t": "7 giorni di prova",
  "pr_p2d": "Una vista e lo schema colore predefinito restano gratuiti per sempre.",
  "pr_p2t": "Uso gratuito (funzioni ridotte)",
  "pr_p3d": "«Paga quanto vuoi» da 1,99 € (prezzo di lancio) per sbloccare in modo permanente tutte le funzioni su un massimo di 2 Mac – e mi sostieni direttamente nello sviluppo di nuove app e aggiornamenti per macOS. Grazie mille!",
  "pr_p3p": "da 1,99 €",
  "pr_p3t": "Offrimi un caffè e sblocca tutto",
  "pr_sub": "Prima provi, poi decidi. Nessun abbonamento.",
  "pr_title": "Prezzo e licenza",
  "sha_copied": "Copiato ✓",
  "sha_copy": "Copia",
  "sha_hint": "Verifica nel Terminale:",
  "st_dl": "Clic sul download",
  "st_note": "Contatori anonimi, dettagli nell’<button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">informativa sulla privacy</button>.",
  "st_today": "Visitatori oggi",
  "st_total": "Visitatori totali",
  "v0": "Home",
  "v1": "Raggiera",
  "v2": "Riquadri",
  "v3": "Icicle",
  "v4": "Cerchi",
  "v5": "Voronoi",
  "v6": "Albero",
  "views_sub": "La stessa scansione da sei punti di vista. Scegli la vista che ti risulta più leggibile.",
  "views_title": "Sei viste, un solo risultato"
 },
 "ru": {
  "alt0": "Стартовый экран DiaDisk со списком дисков и панелью настроек",
  "alt1": "DiaDisk с лучевым видом папки Library и боковой панелью цветовых схем",
  "alt2": "DiaDisk с плиточным видом в схеме «Океан»",
  "alt3": "DiaDisk с видом «сосульки» в чёрно-белом",
  "alt4": "DiaDisk с вложенными кругами в «светофорном» градиенте",
  "alt5": "DiaDisk с видом Вороного в оттенках синего",
  "alt6": "DiaDisk с деревом папок и открытым списком языков",
  "btn_buy": "Купить лицензию (плати сколько хочешь)",
  "btn_dl": "Скачать DiaDisk",
  "btn_dmg": "Скачать ZIP",
  "c0": "Стартовый экран: диски, домашняя папка и свои папки, рядом настройки видов и цветов.",
  "c1": "Лучевой вид: уровни папок в виде колец, здесь в стандартной цветовой схеме. Бесплатно навсегда.",
  "c2": "Плиточный вид: площади соответствуют размерам, здесь в схеме «Океан».",
  "c3": "Вид «сосульки»: иерархия в колонках, здесь чёрно-белый.",
  "c4": "Вложенные круги: папки как круги внутри кругов, здесь в «светофорном» градиенте.",
  "c5": "Вид Вороного: ячейки органичной формы, здесь в оттенках синего.",
  "c6": "Дерево папок с полосами размеров и процентами. На снимке: выбор из 25 языков.",
  "ct_note": "Ваши данные я использую только для обработки запроса и удаляю письма не позднее чем через 30 дней (см. <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">политику конфиденциальности</button>).",
  "ct_send": "Написать письмо",
  "ct_sub": "Идея, проблема или отзыв о DiaDisk? Пишите на info@diadisk.de или выберите тему, и откроется почтовая программа с подходящей темой письма.",
  "ct_t_bug": "Проблема / Баг / Техподдержка",
  "ct_t_feedback": "Похвала / Критика",
  "ct_t_idea": "Идея / Новое требование / Предложение по улучшению",
  "ct_t_other": "Другое",
  "ct_title": "Контакты",
  "ct_topic": "Тема",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 и новее) · ZIP, 1,3 МБ",
  "dl_note": "Учтите примечание об отсутствии нотаризации.",
  "dl_title": "Скачать",
  "f1d": "Лучевой, плиточный вид и «сосульки», вложенные круги, вид Вороного и дерево папок с полосами размеров.",
  "f1t": "Шесть видов",
  "f2d": "Один клик: 20 самых больших файлов на Macintosh HD, в вашей папке пользователя или в любой выбранной папке.",
  "f2t": "Самые большие файлы",
  "f3d": "На стартовой странице диски, домашняя папка и папки, которые вы добавили сами, в том числе сетевые диски.",
  "f3t": "Диски и свои папки",
  "f4d": "Включайте и папки, доступные только администраторам. DiaDisk только читает и ничего не меняет.",
  "f4t": "Сканирование от администратора",
  "f5d": "Если папки заблокированы или защищены macOS, DiaDisk предупредит, что размеры неполные. «Подробнее …» покажет список. Занятое, но недоступное для сканирования место отображается как «Скрытое хранилище».",
  "f5t": "Честно о пробелах",
  "f6d": "Показать в Finder, Свойства, Скопировать путь, Открыть в Терминале или Переместить в Корзину, прямо из этого вида.",
  "f6t": "Действия прямо в результате",
  "f7d": "Размер как в Finder или реально занятый на диске: вы видите оба значения и где они расходятся.",
  "f7t": "Логический и занятый размер",
  "f8d": "При первом запуске DiaDisk выбирает язык системы. Цвета: стандартная, пастель, океан, закат, высокий контраст, оттенки синего, светофор, чёрно-белая.",
  "f8t": "25 языков, 8 цветовых схем",
  "f9d": "Без слежки, без рекламы, без стороннего кода. Имена файлов, пути и результаты сканирования никогда не покидают ваш Mac. Руководство, политика конфиденциальности и выходные данные доступны офлайн в меню «Справка».",
  "f9t": "100 % локально",
  "f_ai": "Уведомление об ИИ",
  "f_data": "Конфиденциальность",
  "f_imp": "Выходные данные",
  "f_rev": "Отказ от договора",
  "f_rights": "Все права защищены.",
  "ft_sub": "Всё, что нужно, чтобы быстро понять, куда уходит место на диске.",
  "ft_title": "Возможности",
  "hero_b1": "<b>Полная прозрачность в 6 видах:</b> изучайте место на диске с разных сторон и находите «пожирателей места» за считаные секунды.",
  "hero_b2": "<b>Сверхбыстро и нативно:</b> разработано для Apple Silicon – максимальная производительность при минимальном расходе ресурсов.",
  "hero_b3": "<b>100 % приватно и безопасно:</b> без аккаунта, без облака, без телеметрии. Ваши данные остаются там, где им место: на вашем Mac.",
  "hero_b4": "<b>Made in Germany:</b> тщательная разработка, защита данных по высочайшим стандартам и бескомпромиссное качество.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 и новее) · 7 дней все функции. Потом один вид и стандартные цвета остаются бесплатными, остальное от 1,99 € (вводная цена).",
  "hero_sub": "DiaDisk – умный анализатор дискового пространства для вашего Mac – превращает запутанные горы данных в шесть разных, понятных, интерактивных видов.",
  "hero_tag": "Анализ дискового пространства для Mac",
  "hero_title": "Узнайте, что занимает место на вашем Mac.",
  "nav_contact": "Контакты",
  "nav_download": "Скачать",
  "nav_features": "Возможности",
  "nav_pricing": "Цена",
  "nav_security": "Безопасность",
  "nav_views": "Виды",
  "nt_badge": "Важное уведомление",
  "nt_hint": "Каждую заново скачанную версию нужно разрешать отдельно. В macOS 14 также работает правый клик → «Открыть».",
  "nt_lead": "macOS блокирует первый запуск, потому что автоматическая проверка Apple на вредоносное ПО (нотаризация) ещё не пройдена. Это не значит, что приложение вредоносно: сверьте контрольную сумму SHA-256 ZIP-файла и скачивайте только с diadisk.de. После нотаризации предупреждение исчезнет.",
  "nt_s1": "Сверьте контрольную сумму ZIP-файла (см. «Скачать»).",
  "nt_s2": "Распакуйте архив, перетащите DiaDisk в «Программы», запустите один раз и закройте предупреждение кнопкой «Готово».",
  "nt_s3": "Системные настройки → Конфиденциальность и безопасность → «Всё равно открыть» рядом с DiaDisk, подтвердите паролем или Touch ID.",
  "nt_steps_t": "Как всё равно открыть приложение:",
  "nt_title": "DiaDisk ещё не нотаризована",
  "pr_intro": "Вводная цена",
  "pr_p1d": "Все функции, без аккаунта и без ограничений.",
  "pr_p1t": "7 дней пробного периода",
  "pr_p2d": "Один вид и стандартная цветовая схема остаются бесплатными навсегда.",
  "pr_p2t": "Бесплатное использование (урезанные функции)",
  "pr_p3d": "«Плати сколько хочешь» от 1,99 € (вводная цена) – постоянная разблокировка всех функций на 2 Mac, и вы напрямую поддерживаете меня в разработке новых приложений и обновлений для macOS. Большое спасибо!",
  "pr_p3p": "от 1,99 €",
  "pr_p3t": "Угостите кофе и откройте всё",
  "pr_sub": "Сначала попробуйте, потом решайте. Без подписки.",
  "pr_title": "Цена и лицензия",
  "sha_copied": "Скопировано ✓",
  "sha_copy": "Копировать",
  "sha_hint": "Проверка в Терминале:",
  "st_dl": "Нажатий «Скачать»",
  "st_note": "Анонимные счётчики, подробности в <button type=\"button\" class=\"linkbtn\" data-modal=\"datenschutz\">политике конфиденциальности</button>.",
  "st_today": "Посетителей сегодня",
  "st_total": "Всего посетителей",
  "v0": "Старт",
  "v1": "Лучевая",
  "v2": "Плитки",
  "v3": "Сосульки",
  "v4": "Круги",
  "v5": "Вороной",
  "v6": "Дерево",
  "views_sub": "Одно сканирование, шесть точек зрения. Выберите вид, который вам удобнее читать.",
  "views_title": "Шесть видов, один результат"
 }
};

  var LANGS = ['de', 'en', 'it', 'ru'];
  var lang = 'de';
  try {
    var saved = localStorage.getItem('selectedLang');
    if (LANGS.indexOf(saved) >= 0) lang = saved;
    else {
      var nav = (navigator.language || 'de').slice(0, 2).toLowerCase();
      if (LANGS.indexOf(nav) >= 0) lang = nav;
    }
  } catch (e) {}

  var MAIL = 'info@diadisk.de';
  var $ = function (id) { return document.getElementById(id); };

  function updateMail() {
    var topic = $('ct-topic').value;
    var label = T[lang]['ct_t_' + topic] || '';
    $('mail-btn').setAttribute('href', 'mailto:' + MAIL + '?subject=' + encodeURIComponent('DiaDisk: ' + label));
  }

  function setLanguage(l, persist) {
    lang = l;
    if (persist) { try { localStorage.setItem('selectedLang', l); } catch (e) {} }
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n-alt')];
      if (v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === l);
    });
    updateMail();
    if (typeof renderStats === 'function') renderStats();
    var ov = $('overlay');
    if (!ov.classList.contains('hidden')) openModal(ov.getAttribute('data-modal'));
  }

  // --- Ansichten-Tabs ---
  function showTab(n) {
    document.querySelectorAll('.tabs [role=tab]').forEach(function (b) {
      var on = b.getAttribute('data-tab') === String(n);
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    document.querySelectorAll('.shot').forEach(function (f) {
      f.classList.toggle('hidden', f.id !== 'shot-' + n);
    });
  }
  document.querySelector('.tabs').addEventListener('keydown', function (e) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
    var i = tabs.indexOf(document.querySelector('.tabs .on')); if (i < 0) return;
    if (e.key === 'ArrowRight') i = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') i = (i + tabs.length - 1) % tabs.length;
    else return;
    e.preventDefault(); showTab(tabs[i].getAttribute('data-tab')); tabs[i].focus();
  });

  // --- Modals (Rechtstexte) ---
  function openModal(type) {
    var texts = (window.LEGAL || {})[lang] || (window.LEGAL || {}).de || {};
    if (!texts[type]) return;
    $('modal-body').innerHTML = texts[type];
    var ov = $('overlay');
    ov.setAttribute('data-modal', type);
    ov.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    $('overlay').classList.add('hidden');
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var tb = e.target.closest('.tabs [role=tab]');
    if (tb) { showTab(tb.getAttribute('data-tab')); return; }
    var m = e.target.closest('[data-modal]');
    if (m && m.id !== 'overlay') { e.preventDefault(); openModal(m.getAttribute('data-modal')); return; }
    var lb = e.target.closest('.lang button');
    if (lb) { setLanguage(lb.getAttribute('data-lang'), true); return; }
    if (e.target === $('overlay') || e.target.id === 'modal-close') closeModal();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  // --- SHA kopieren ---
  $('sha-copy').addEventListener('click', function () {
    var btn = this, txt = $('sha-value').textContent.trim();
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(txt).then(function () {
      btn.textContent = T[lang].sha_copied;
      setTimeout(function () { btn.textContent = T[lang].sha_copy; }, 2000);
    }).catch(function () {});
  });

  // --- Lizenz-Button (Payhip) ---
  if (PAYHIP_URL) {
    document.querySelectorAll('.buy-link').forEach(function (a) {
      a.setAttribute('href', PAYHIP_URL);
      a.classList.remove('hidden');
    });
  }

  // --- Kontakt per mailto ---
  $('ct-topic').addEventListener('change', updateMail);


  // --- Zähler (statisch gehostet, Zählung über externen Dienst) ---
  // Anbieter: CounterAPI (https://counterapi.dev). Wechsel des Dienstes: nur CNT anpassen (und CSP in index.html).
  var CNT = { base: 'https://api.counterapi.dev/v1/', ns: 'diadisk-de' };
  var COUNT_ONCE_PER_DAY = true;   // true: Besucher pro Browser und Tag nur einmal zählen
  var stats = { total: null, today: null, dl: null };

  function cnt(name, action) {
    var url = CNT.base + CNT.ns + '/' + name + (action ? '/' + action : '');
    return fetch(url, { cache: 'no-store', keepalive: true, credentials: 'omit', referrerPolicy: 'no-referrer' })
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
      .then(function (j) {
        var n = (j && (j.count !== undefined ? j.count : j.value));
        if (typeof n !== 'number') throw new Error('shape');
        return n;
      });
  }
  function renderStats() {
    var nf; try { nf = new Intl.NumberFormat(lang); } catch (e) { nf = { format: String } }
    [['total', 'st-total'], ['today', 'st-today'], ['dl', 'st-dl']].forEach(function (p) {
      var el = $(p[1]); if (el) el.textContent = stats[p[0]] === null ? '–' : nf.format(stats[p[0]]);
    });
  }
  function setStat(key, promise) {
    promise.then(function (n) { stats[key] = n; renderStats(); }).catch(function () {});
  }
  function initCounters() {
    var d = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var dayName = 'visits-' + d, last = null;
    try { last = localStorage.getItem('dd_visit'); } catch (e) {}
    var count = !COUNT_ONCE_PER_DAY || last !== d;
    if (count) { try { localStorage.setItem('dd_visit', d); } catch (e) {} }
    setStat('total', cnt('visits-total', count ? 'up' : ''));
    setStat('today', cnt(dayName, count ? 'up' : ''));
    setStat('dl', cnt('downloads', ''));
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href$=".zip"]');
      if (!a) return;
      setStat('dl', cnt('downloads', 'up'));
    });
  }

  showTab(1);
  setLanguage(lang, false);
  renderStats();
  initCounters();
})();
