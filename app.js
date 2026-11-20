(function () {
  'use strict';

  // Payhip-Link für die Lizenz hier eintragen. Leer = Kaufen-Buttons bleiben ausgeblendet.
  var PAYHIP_URL = 'https://payhip.com/b/aEo54';

  var T = {
 "de": {
  "alt0": "DiaDisk Startseite mit Laufwerken und Einstellungen",
  "alt1": "DiaDisk mit Strahl-Ansicht der Library in den Farben „Sonnenuntergang“, Seitenleiste mit Farben",
  "alt2": "DiaDisk mit Kachel-Ansicht in den Farben „Kontrastreich“",
  "alt3": "DiaDisk mit Eiszapfen-Ansicht in den Farben „Ozean“",
  "alt4": "DiaDisk mit Kreis-Verschachtelung in den Farben „Ozean“",
  "alt5": "DiaDisk mit Voronoi-Treemap in den Farben „Pastell“",
  "alt6": "DiaDisk mit Verzeichnisbaum und geöffneter Sprachauswahl",
  "btn_buy": "Lizenz kaufen (Zahl, was du willst)",
  "btn_dl": "DiaDisk herunterladen",
  "btn_dmg": "ZIP herunterladen",
  "c0": "Die Startseite: Laufwerke, dein Home-Verzeichnis und eigene Ordner, daneben die Einstellungen für Ansichten und Farben.",
  "c1": "Strahl-Ansicht: Ordnerebenen als Ringe, hier in den Farben „Sonnenuntergang“.",
  "c2": "Kachel-Ansicht: Flächen entsprechen Größen, hier in den Farben „Kontrastreich“.",
  "c3": "Eiszapfen-Ansicht: die Hierarchie in Spalten, hier in den Farben „Ozean“. Dauerhaft kostenlos.",
  "c4": "Kreis-Verschachtelung: Ordner als ineinanderliegende Kreise, hier in den Farben „Ozean“.",
  "c5": "Voronoi-Treemap: organisch geformte Zellen, hier in den Farben „Pastell“.",
  "c6": "Verzeichnisbaum mit Größenbalken und Prozentwerten. Im Bild: die Auswahl unter 25 Sprachen.",
  "ct_note": "Deine Angaben verwende ich nur zur Bearbeitung deiner Anfrage und lösche die E-Mails spätestens nach 30 Tagen (siehe <a href=\"datenschutz.html\" data-modal=\"datenschutz\">Datenschutzerklärung</a>).",
  "ct_send": "E-Mail schreiben",
  "ct_sub": "Idee, Problem oder Feedback zu DiaDisk? Schreib mir an info@diadisk.de oder wähle ein Thema, dann öffnet sich dein Mailprogramm mit passendem Betreff.",
  "ct_t_bug": "Problem / Bug / Technischer Support",
  "ct_t_feedback": "Lob / Kritik",
  "ct_t_idea": "Idee / Neue Anforderung / Verbesserungsvorschlag",
  "ct_t_other": "Sonstiges",
  "ct_title": "Kontakt",
  "ct_topic": "Thema",
  "demo_label": "Demo-Video: Ansichten und Farben von DiaDisk im Überblick (30 Sekunden, ohne Ton)",
  "demo_sub": "Scan starten, Ansichten wechseln, Farben wählen – ein kurzer Rundgang.",
  "demo_title": "DiaDisk in 30 Sekunden",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 oder neuer) · ZIP, 1,3 MB",
  "dl_note": "Bitte den Hinweis zur fehlenden Notarisierung beachten.",
  "dl_title": "Download",
  "f1d": "Strahl-, Kachel- und Eiszapfen-Ansicht, Kreis-Verschachtelung, Voronoi-Treemap und Verzeichnisbaum mit Größenbalken.",
  "f1t": "Sechs Ansichten",
  "f2d": "Mit einem Klick die 20 größten Einzeldateien auf der Macintosh HD.",
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
  "f8t": "25 Sprachen, 8 Farbvarianten",
  "f9d": "Kein Tracking, keine Werbung, keine Drittanbieter-Software. Dateinamen, Pfade und Scan-Ergebnisse werden von DiaDisk nicht übertragen. Handbuch, Datenschutzerklärung und Impressum liegen offline im Hilfe-Menü.",
  "f9t": "Analyse lokal auf deinem Mac",
  "f_ai": "KI-Hinweis",
  "f_data": "Datenschutz",
  "f_imp": "Impressum",
  "f_rev": "Widerruf",
  "f_eula": "Nutzungsbedingungen",
  "f_rights": "Alle Rechte vorbehalten.",
  "ft_sub": "Alles, was du brauchst, um schnell zu verstehen, wohin dein Speicherplatz verschwindet.",
  "ft_title": "Funktionen",
  "hero_b1": "<b>Klare Übersicht in 6 Ansichten:</b> Erkunde deinen Festplatten-Speicher aus verschiedenen Blickwinkeln und finde große Dateien und Ordner schneller.",
  "hero_b2": "<b>Nativ für Apple Silicon:</b> Als native Mac-App entwickelt, mit sparsamem Ressourcenverbrauch.",
  "hero_b3": "<b>Lokal &amp; ohne Konto:</b> Kein Konto, keine Cloud, keine Telemetrie. Dateinamen, Pfade und Scan-Ergebnisse werden von DiaDisk nicht übertragen und bleiben auf deinem Mac.",
  "hero_b4": "<b>Made in Germany:</b> Sorgfältig entwickelt, mit Fokus auf Datenschutz und Qualität.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 oder neuer) · 7 Tage alles testen. Danach bleiben die Eiszapfen-Ansicht und die Standardfarben kostenlos, alles Weitere ab 2,99 € inkl. MwSt.",
  "hero_sub": "DiaDisk – der smarte Speicher-Analyzer für deinen Mac – verwandelt unübersichtliche Datenberge in sechs verschiedene, klare, interaktive Ansichten.",
  "hero_tag": "Speicheranalyse für den Mac",
  "hero_title": "Sieh, was deinen Mac füllt.",
  "nav_contact": "Kontakt",
  "nav_menu": "Menü",
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
  "pr_sub": "Fair, transparent und ohne versteckte Kosten.",
  "pr_title": "So funktioniert’s",
  "pr_s1t": "Ausprobieren",
  "pr_s1d": "Teste die App <strong>7 Tage lang</strong> mit vollem Funktionsumfang.",
  "pr_s2t": "Entscheiden",
  "pr_s2a": "Gratis bleiben",
  "pr_s2ad": "Nutze die Eiszapfen-Ansicht und Standardfarben <strong>dauerhaft kostenlos</strong>.",
  "pr_s2b": "Vollversion sichern",
  "pr_s2bd": "Schalte mit <strong>einmaligem</strong> Preis ab <strong>2,99 € inkl. MwSt.</strong> alle Funktionen für bis zu 2 Macs frei – <strong>kein Abo</strong>.",
  "pr_s3t": "Unterstützen",
  "pr_s3d": "Mit deinem Preis „Zahl, was du willst“ hilfst du mir, die App stetig weiterzuentwickeln. Vielen Dank!",
  "sha_copied": "Kopiert ✓",
  "sha_copy": "Kopieren",
  "sha_hint": "Prüfen im Terminal:",
  "v0": "Start",
  "v1": "Strahl",
  "v2": "Kacheln",
  "v3": "Eiszapfen",
  "v4": "Kreise",
  "v5": "Voronoi",
  "v6": "Baum",
  "views_sub": "Derselbe Scan, sechs Blickwinkel. Wähle die Ansicht, die für dich am besten lesbar ist.",
  "views_title": "Sechs Ansichten, ein Ergebnis",
  "a_prev": "Vorheriges Bild",
  "a_close": "Schließen",
  "a_skip": "Zum Inhalt springen",
  "a_pause": "Automatischen Bildwechsel pausieren",
  "a_play": "Automatischen Bildwechsel fortsetzen",
  "a_next": "Nächstes Bild",
  "f_glass": "Glas-Hintergrund"
 },
 "en": {
  "alt0": "DiaDisk home screen with drives and the settings panel",
  "alt1": "DiaDisk showing the sunburst view of Library in the Sunset colors, with the colors sidebar",
  "alt2": "DiaDisk showing a treemap in the High contrast colors",
  "alt3": "DiaDisk showing the icicle view in the Ocean colors",
  "alt4": "DiaDisk showing circle packing in the Ocean colors",
  "alt5": "DiaDisk showing a Voronoi treemap in the Pastel colors",
  "alt6": "DiaDisk showing the directory tree with the language menu open",
  "btn_buy": "Buy a license (pay what you want)",
  "btn_dl": "Download DiaDisk",
  "btn_dmg": "Download ZIP",
  "c0": "The home screen: your drives, home folder and custom folders, with the settings for views and colors alongside.",
  "c1": "Sunburst view: folder levels as rings, shown in the “Sunset” colors.",
  "c2": "Treemap: areas match sizes, shown in the “High contrast” colors.",
  "c3": "Icicle view: the hierarchy in columns, shown in the “Ocean” colors. Free for good.",
  "c4": "Circle packing: folders as nested circles, shown in the “Ocean” colors.",
  "c5": "Voronoi treemap: organically shaped cells, shown in the “Pastel” colors.",
  "c6": "Directory tree with size bars and percentages. Pictured: choosing from 25 languages.",
  "ct_note": "I use your details only to handle your request and delete emails after 30 days at the latest (see the <a href=\"datenschutz.html\" data-modal=\"datenschutz\">privacy policy</a>).",
  "ct_send": "Write an email",
  "ct_sub": "Idea, problem or feedback about DiaDisk? Write to info@diadisk.de, or pick a topic and your mail app opens with a matching subject line.",
  "ct_t_bug": "Problem / Bug / Technical support",
  "ct_t_feedback": "Praise / Criticism",
  "ct_t_idea": "Idea / New requirement / Suggestion for improvement",
  "ct_t_other": "Other",
  "ct_title": "Contact",
  "ct_topic": "Topic",
  "demo_label": "Demo video: a quick tour of the DiaDisk views and colors (30 seconds, no sound)",
  "demo_sub": "Switch views, pick colors – a quick tour.",
  "demo_title": "DiaDisk in 30 seconds",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 or newer) · ZIP, 1.3 MB",
  "dl_note": "Please read the note about missing notarization.",
  "dl_title": "Download",
  "f1d": "Sunburst, treemap and icicle views, circle packing, Voronoi treemap and a directory tree with size bars.",
  "f1t": "Six views",
  "f2d": "The 20 biggest individual files in one click on Macintosh HD.",
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
  "f8t": "25 languages, 8 color options",
  "f9d": "No tracking, no ads, no third-party code. File names, paths and scan results are not transmitted by DiaDisk. The manual, privacy policy and legal notice are built into the Help menu, offline.",
  "f9t": "Analysis runs locally on your Mac",
  "f_ai": "AI notice",
  "f_data": "Privacy Policy",
  "f_imp": "Imprint",
  "f_rev": "Withdrawal",
  "f_eula": "Terms of Use",
  "f_rights": "All rights reserved.",
  "ft_sub": "Everything you need to quickly understand where your storage went.",
  "ft_title": "Features",
  "hero_b1": "<b>A clear overview in 6 views:</b> Explore your disk storage from different angles and find large files and folders faster.",
  "hero_b2": "<b>Native for Apple Silicon:</b> Built as a native Mac app with modest resource usage.",
  "hero_b3": "<b>Local &amp; no account:</b> No account, no cloud, no telemetry. File names, paths and scan results are not transmitted by DiaDisk and stay on your Mac.",
  "hero_b4": "<b>Made in Germany:</b> Carefully developed, with a focus on privacy and quality.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 or newer) · Try everything for 7 days. After that, the icicle view and default colors stay free, everything else from €2.99 incl. VAT.",
  "hero_sub": "DiaDisk – the smart storage analyzer for your Mac – turns unwieldy mountains of data into six different, clear, interactive views.",
  "hero_tag": "Disk space analyzer for Mac",
  "hero_title": "See what’s filling your Mac.",
  "nav_contact": "Contact",
  "nav_menu": "Menu",
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
  "pr_sub": "Fair, transparent and no hidden costs.",
  "pr_title": "How it works",
  "pr_s1t": "Try it",
  "pr_s1d": "Test the app for <strong>7 days</strong> with every feature.",
  "pr_s2t": "Decide",
  "pr_s2a": "Stay free",
  "pr_s2ad": "Use the icicle view and the default colors <strong>free for good</strong>.",
  "pr_s2b": "Get the full version",
  "pr_s2bd": "Unlock all features on up to 2 Macs for a <strong>one-time</strong> price from <strong>€2.99 incl. VAT</strong> – <strong>no subscription</strong>.",
  "pr_s3t": "Support",
  "pr_s3d": "With your “pay what you want” price you help me keep developing the app. Thank you!",
  "sha_copied": "Copied ✓",
  "sha_copy": "Copy",
  "sha_hint": "Verify in Terminal:",
  "v0": "Start",
  "v1": "Sunburst",
  "v2": "Treemap",
  "v3": "Icicle",
  "v4": "Circles",
  "v5": "Voronoi",
  "v6": "Tree",
  "views_sub": "The same scan from six angles. Pick the view that reads best for you.",
  "views_title": "Six views, one result",
  "a_prev": "Previous image",
  "a_close": "Close",
  "a_skip": "Skip to content",
  "a_pause": "Pause automatic image rotation",
  "a_play": "Resume automatic image rotation",
  "a_next": "Next image",
  "f_glass": "Glass background"
 },
 "it": {
  "alt0": "Schermata iniziale di DiaDisk con i volumi e il pannello delle impostazioni",
  "alt1": "DiaDisk con la vista a raggiera della cartella Library nei colori Tramonto e barra laterale dei colori",
  "alt2": "DiaDisk con treemap a riquadri nei colori Alto contrasto",
  "alt3": "DiaDisk con la vista icicle nei colori Oceano",
  "alt4": "DiaDisk con circle packing nei colori Oceano",
  "alt5": "DiaDisk con treemap di Voronoi nei colori Pastello",
  "alt6": "DiaDisk con albero delle cartelle e menu delle lingue aperto",
  "btn_buy": "Acquista la licenza (paga quanto vuoi)",
  "btn_dl": "Scarica DiaDisk",
  "btn_dmg": "Scarica lo ZIP",
  "c0": "La schermata iniziale: volumi, cartella home e cartelle personali, con accanto le impostazioni di viste e colori.",
  "c1": "Vista a raggiera: i livelli di cartelle come anelli, qui nei colori «Tramonto».",
  "c2": "Treemap a riquadri: le aree corrispondono alle dimensioni, qui nei colori «Alto contrasto».",
  "c3": "Vista icicle: la gerarchia in colonne, qui nei colori «Oceano». Gratuita per sempre.",
  "c4": "Circle packing: le cartelle come cerchi annidati, qui nei colori «Oceano».",
  "c5": "Treemap di Voronoi: celle dalle forme organiche, qui nei colori «Pastello».",
  "c6": "Albero delle cartelle con barre delle dimensioni e percentuali. Nell’immagine: la scelta tra 25 lingue.",
  "ct_note": "Uso i tuoi dati solo per gestire la richiesta ed elimino le email entro 30 giorni al massimo (vedi l’<a href=\"datenschutz.html\" data-modal=\"datenschutz\">informativa sulla privacy</a>).",
  "ct_send": "Scrivi un’email",
  "ct_sub": "Un’idea, un problema o un feedback su DiaDisk? Scrivi a info@diadisk.de oppure scegli un argomento: si aprirà il tuo programma di posta con l’oggetto adatto.",
  "ct_t_bug": "Problema / Bug / Supporto tecnico",
  "ct_t_feedback": "Elogi / Critiche",
  "ct_t_idea": "Idea / Nuovo requisito / Suggerimento di miglioramento",
  "ct_t_other": "Altro",
  "ct_title": "Contatti",
  "ct_topic": "Argomento",
  "demo_label": "Video dimostrativo: breve panoramica di viste e colori di DiaDisk (30 secondi, senza audio)",
  "demo_sub": "Cambia vista, scegli i colori: un breve giro.",
  "demo_title": "DiaDisk in 30 secondi",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 o successivi) · ZIP, 1,3 MB",
  "dl_note": "Leggi l’avviso sulla mancata notarizzazione.",
  "dl_title": "Download",
  "f1d": "Viste a raggiera, a riquadri e icicle, circle packing, treemap di Voronoi e albero delle cartelle con barre delle dimensioni.",
  "f1t": "Sei viste",
  "f2d": "Con un clic i 20 file singoli più grandi su Macintosh HD.",
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
  "f8t": "25 lingue, 8 varianti di colore",
  "f9d": "Nessun tracciamento, nessuna pubblicità, nessun codice di terze parti. Nomi dei file, percorsi e risultati non vengono trasmessi da DiaDisk. Manuale, informativa sulla privacy e note legali sono nel menu Aiuto, offline.",
  "f9t": "Analisi in locale sul tuo Mac",
  "f_ai": "Avviso IA",
  "f_data": "Privacy",
  "f_imp": "Note legali",
  "f_rev": "Recesso",
  "f_eula": "Condizioni d’uso",
  "f_rights": "Tutti i diritti riservati.",
  "ft_sub": "Tutto ciò che serve per capire rapidamente dove è finito il tuo spazio.",
  "ft_title": "Funzioni",
  "hero_b1": "<b>Panoramica chiara in 6 viste:</b> esplora lo spazio del disco da diverse prospettive e trova più velocemente file e cartelle voluminosi.",
  "hero_b2": "<b>Nativa per Apple Silicon:</b> sviluppata come app Mac nativa, con un consumo contenuto di risorse.",
  "hero_b3": "<b>Locale e senza account:</b> nessun account, nessun cloud, nessuna telemetria. Nomi dei file, percorsi e risultati non vengono trasmessi da DiaDisk e restano sul tuo Mac.",
  "hero_b4": "<b>Made in Germany:</b> sviluppata con cura, con attenzione alla privacy e alla qualità.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 o successivi) · Prova tutto per 7 giorni. Poi la vista icicle e i colori predefiniti restano gratuiti, il resto da 2,99 € IVA inclusa.",
  "hero_sub": "DiaDisk – lo smart analizzatore di spazio per il tuo Mac – trasforma montagne di dati confuse in sei viste diverse, chiare e interattive.",
  "hero_tag": "Analisi dello spazio su disco per Mac",
  "hero_title": "Scopri cosa riempie il tuo Mac.",
  "nav_contact": "Contatti",
  "nav_menu": "Menu",
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
  "pr_sub": "Equo, trasparente e senza costi nascosti.",
  "pr_title": "Come funziona",
  "pr_s1t": "Prova",
  "pr_s1d": "Prova l’app per <strong>7 giorni</strong> con tutte le funzioni.",
  "pr_s2t": "Decidi",
  "pr_s2a": "Resta gratis",
  "pr_s2ad": "Usa la vista icicle e i colori predefiniti <strong>gratis per sempre</strong>.",
  "pr_s2b": "Ottieni la versione completa",
  "pr_s2bd": "Sblocca tutte le funzioni su un massimo di 2 Mac con un prezzo <strong>una tantum</strong> da <strong>2,99 € IVA inclusa</strong> – <strong>nessun abbonamento</strong>.",
  "pr_s3t": "Sostieni",
  "pr_s3d": "Con il tuo prezzo «Paga quanto vuoi» mi aiuti a sviluppare l’app in modo continuo. Grazie mille!",
  "sha_copied": "Copiato ✓",
  "sha_copy": "Copia",
  "sha_hint": "Verifica nel Terminale:",
  "v0": "Home",
  "v1": "Raggiera",
  "v2": "Riquadri",
  "v3": "Icicle",
  "v4": "Cerchi",
  "v5": "Voronoi",
  "v6": "Albero",
  "views_sub": "La stessa scansione da sei punti di vista. Scegli la vista che ti risulta più leggibile.",
  "views_title": "Sei viste, un solo risultato",
  "a_prev": "Immagine precedente",
  "a_close": "Chiudi",
  "a_skip": "Vai al contenuto",
  "a_pause": "Metti in pausa la rotazione automatica",
  "a_play": "Riprendi la rotazione automatica",
  "a_next": "Immagine successiva",
  "f_glass": "Sfondo vetro"
 },
 "ru": {
  "alt0": "Стартовый экран DiaDisk со списком дисков и панелью настроек",
  "alt1": "DiaDisk с лучевым видом папки Library в цветах «Закат» и боковой панелью цветов",
  "alt2": "DiaDisk с плиточным видом в цветах «Высокий контраст»",
  "alt3": "DiaDisk с видом «сосульки» в цветах «Океан»",
  "alt4": "DiaDisk с вложенными кругами в цветах «Океан»",
  "alt5": "DiaDisk с видом Вороного в цветах «Пастель»",
  "alt6": "DiaDisk с деревом папок и открытым списком языков",
  "btn_buy": "Купить лицензию (плати сколько хочешь)",
  "btn_dl": "Скачать DiaDisk",
  "btn_dmg": "Скачать ZIP",
  "c0": "Стартовый экран: диски, домашняя папка и свои папки, рядом настройки видов и цветов.",
  "c1": "Лучевой вид: уровни папок в виде колец, здесь в цветах «Закат».",
  "c2": "Плиточный вид: площади соответствуют размерам, здесь в цветах «Высокий контраст».",
  "c3": "Вид «сосульки»: иерархия в колонках, здесь в цветах «Океан». Бесплатно навсегда.",
  "c4": "Вложенные круги: папки как круги внутри кругов, здесь в цветах «Океан».",
  "c5": "Вид Вороного: ячейки органичной формы, здесь в цветах «Пастель».",
  "c6": "Дерево папок с полосами размеров и процентами. На снимке: выбор из 25 языков.",
  "ct_note": "Ваши данные я использую только для обработки запроса и удаляю письма не позднее чем через 30 дней (см. <a href=\"datenschutz.html\" data-modal=\"datenschutz\">политику конфиденциальности</a>).",
  "ct_send": "Написать письмо",
  "ct_sub": "Идея, проблема или отзыв о DiaDisk? Пишите на info@diadisk.de или выберите тему, и откроется почтовая программа с подходящей темой письма.",
  "ct_t_bug": "Проблема / Баг / Техподдержка",
  "ct_t_feedback": "Похвала / Критика",
  "ct_t_idea": "Идея / Новое требование / Предложение по улучшению",
  "ct_t_other": "Другое",
  "ct_title": "Контакты",
  "ct_topic": "Тема",
  "demo_label": "Демонстрационное видео: обзор видов и цветов DiaDisk (30 секунд, без звука)",
  "demo_sub": "Переключайте виды и выбирайте цвета – быстрый обзор.",
  "demo_title": "DiaDisk за 30 секунд",
  "dl_meta": "macOS 14+ · Apple Silicon (M1 и новее) · ZIP, 1,3 МБ",
  "dl_note": "Учтите примечание об отсутствии нотаризации.",
  "dl_title": "Скачать",
  "f1d": "Лучевой, плиточный вид и «сосульки», вложенные круги, вид Вороного и дерево папок с полосами размеров.",
  "f1t": "Шесть видов",
  "f2d": "Один клик: 20 самых больших файлов на Macintosh HD.",
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
  "f8t": "25 языков, 8 вариантов цвета",
  "f9d": "Без слежки, без рекламы, без стороннего кода. Имена файлов, пути и результаты сканирования не передаются DiaDisk. Руководство, политика конфиденциальности и выходные данные доступны офлайн в меню «Справка».",
  "f9t": "Анализ выполняется локально на вашем Mac",
  "f_ai": "Уведомление об ИИ",
  "f_data": "Конфиденциальность",
  "f_imp": "Выходные данные",
  "f_rev": "Отказ от договора",
  "f_eula": "Условия использования",
  "f_rights": "Все права защищены.",
  "ft_sub": "Всё, что нужно, чтобы быстро понять, куда уходит место на диске.",
  "ft_title": "Возможности",
  "hero_b1": "<b>Наглядный обзор в 6 видах:</b> изучайте место на диске с разных сторон и быстрее находите крупные файлы и папки.",
  "hero_b2": "<b>Нативно для Apple Silicon:</b> разработано как нативное приложение для Mac с умеренным расходом ресурсов.",
  "hero_b3": "<b>Локально и без аккаунта:</b> без аккаунта, без облака, без телеметрии. Имена файлов, пути и результаты сканирования не передаются DiaDisk и остаются на вашем Mac.",
  "hero_b4": "<b>Made in Germany:</b> тщательно разработано, с вниманием к конфиденциальности и качеству.",
  "hero_meta": "macOS 14+ · Apple Silicon (M1 и новее) · 7 дней все функции. Потом вид «сосульки» и стандартные цвета остаются бесплатными, остальное от 2,99 € с НДС.",
  "hero_sub": "DiaDisk – умный анализатор дискового пространства для вашего Mac – превращает запутанные горы данных в шесть разных, понятных, интерактивных видов.",
  "hero_tag": "Анализ дискового пространства для Mac",
  "hero_title": "Узнайте, что занимает место на вашем Mac.",
  "nav_contact": "Контакты",
  "nav_menu": "Меню",
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
  "pr_sub": "Честно, прозрачно и без скрытых платежей.",
  "pr_title": "Как это работает",
  "pr_s1t": "Попробуйте",
  "pr_s1d": "Тестируйте приложение <strong>7 дней</strong> со всеми функциями.",
  "pr_s2t": "Решите",
  "pr_s2a": "Остаться бесплатно",
  "pr_s2ad": "Вид «сосульки» и стандартные цвета доступны <strong>бесплатно навсегда</strong>.",
  "pr_s2b": "Получить полную версию",
  "pr_s2bd": "Разблокируйте все функции на 2 Mac за <strong>единоразовую</strong> цену от <strong>2,99 € с НДС</strong> – <strong>без подписки</strong>.",
  "pr_s3t": "Поддержите",
  "pr_s3d": "Цена по принципу «Плати сколько хочешь» помогает мне постоянно развивать приложение. Спасибо!",
  "sha_copied": "Скопировано ✓",
  "sha_copy": "Копировать",
  "sha_hint": "Проверка в Терминале:",
  "v0": "Старт",
  "v1": "Лучевая",
  "v2": "Плитки",
  "v3": "Сосульки",
  "v4": "Круги",
  "v5": "Вороной",
  "v6": "Дерево",
  "views_sub": "Одно сканирование, шесть точек зрения. Выберите вид, который вам удобнее читать.",
  "views_title": "Шесть видов, один результат",
  "a_prev": "Предыдущее изображение",
  "a_close": "Закрыть",
  "a_skip": "Перейти к содержимому",
  "a_pause": "Автосмену изображений остановить",
  "a_play": "Автосмену изображений включить",
  "a_next": "Следующее изображение",
  "f_glass": "Стеклянный фон"
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
    if (window.syncCarouselPause) setTimeout(window.syncCarouselPause, 0);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n-alt')];
      if (v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === l);
    });
    updateMail();
    var ov = $('overlay');
    if (!ov.classList.contains('hidden')) openModal(ov.getAttribute('data-modal'));
  }

  // --- Ansichten-Tabs ---
  var shotsEl = document.getElementById('shots');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function syncArrows() {
    var im = document.querySelector('.shot.on img');
    if (shotsEl && im && im.offsetHeight) shotsEl.style.setProperty('--img-h', im.offsetHeight + 'px');
  }
  window.addEventListener('resize', syncArrows);
  document.querySelectorAll('.shot img').forEach(function (im) { im.addEventListener('load', syncArrows); });
  // Übergang: neues Bild gleitet mit Weichzeichner + Einblenden herein, das alte gleitet in Gegenrichtung hinaus
  function showTab(n, dir) {
    n = parseInt(n, 10);
    document.querySelectorAll('.tabs [role=tab]').forEach(function (b) {
      var on = b.getAttribute('data-tab') === String(n);
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    var cur = document.querySelector('.shot.on');
    var nxt = document.getElementById('shot-' + n);
    if (!nxt || nxt === cur) return;
    var curN = cur ? parseInt(cur.id.slice(5), 10) : 0;
    dir = dir || (n > curN ? 1 : -1);
    var d = reduceMotion ? 0 : 56, sc = reduceMotion ? 1 : .98, bl = reduceMotion ? 'none' : 'blur(6px)';
    nxt.style.transition = 'none';
    nxt.style.opacity = '0';
    nxt.style.filter = bl;
    nxt.style.transform = 'translateX(' + (dir * d) + 'px) scale(' + sc + ')';
    nxt.classList.add('on');
    nxt.setAttribute('aria-hidden', 'false');
    void nxt.offsetWidth;
    nxt.style.transition = ''; nxt.style.opacity = ''; nxt.style.filter = ''; nxt.style.transform = '';
    if (cur) {
      cur.classList.remove('on');
      cur.style.transform = 'translateX(' + (-dir * d) + 'px) scale(' + sc + ')';
      cur.setAttribute('aria-hidden', 'true');
    }
    syncArrows();
  }
  syncArrows();
  document.querySelector('.tabs').addEventListener('keydown', function (e) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
    var i = tabs.indexOf(document.querySelector('.tabs .on')); if (i < 0) return;
    if (e.key === 'ArrowRight') i = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') i = (i + tabs.length - 1) % tabs.length;
    else return;
    e.preventDefault(); showTab(tabs[i].getAttribute('data-tab')); tabs[i].focus();
  });

  // --- Ansichten-Karussell: Auto-Wechsel nach 4 s, nach Klick/Wischen 8 s Pause ---
  (function () {
    var AUTO_MS = 4000, HOLD_MS = 8000;
    var section = document.getElementById('ansichten');
    var tabs = document.querySelectorAll('.tabs [role=tab]');
    if (!section || !tabs.length) return;
    var timer = null, visible = false, paused = reduceMotion;
    var pbtn = document.getElementById('carousel-pause');
    function syncPause() {
      if (!pbtn) return;
      pbtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      pbtn.textContent = T[lang][paused ? 'a_play' : 'a_pause'];
    }
    if (pbtn) pbtn.addEventListener('click', function () {
      paused = !paused; syncPause();
      if (paused) clearTimeout(timer); else schedule(AUTO_MS);
    });
    window.syncCarouselPause = syncPause;
    function current() {
      var on = document.querySelector('.tabs .on');
      return on ? parseInt(on.getAttribute('data-tab'), 10) : 0;
    }
    function schedule(ms) {
      clearTimeout(timer);
      if (paused || !visible || document.hidden) return;
      timer = setTimeout(function () {
        showTab((current() + 1) % tabs.length, 1);
        schedule(AUTO_MS);
      }, ms);
    }
    // Eingabe durch den Nutzer: Bild bleibt 8 s stehen, danach läuft es weiter
    function userShow(n, dir) {
      showTab((n + tabs.length) % tabs.length, dir);
      schedule(HOLD_MS);
    }
    section.addEventListener('click', function (e) {
      var tb = e.target.closest('.tabs [role=tab]');
      if (tb) { userShow(parseInt(tb.getAttribute('data-tab'), 10)); return; }
      var ar = e.target.closest('.nav-arrow');
      if (ar) { var dr = parseInt(ar.getAttribute('data-dir'), 10); userShow(current() + dr, dr); return; }
      if (e.target.closest('.shot img')) schedule(HOLD_MS);
    });
    section.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') schedule(HOLD_MS);
    });
    // Wischen: nach links = nächstes Bild, nach rechts = vorheriges Bild
    var sx = 0, sy = 0, tracking = false;
    function swipeTarget(e) { return e.target.closest && e.target.closest('.shot'); }
    section.addEventListener('pointerdown', function (e) {
      if (!swipeTarget(e)) return;
      tracking = true; sx = e.clientX; sy = e.clientY;
    });
    section.addEventListener('pointerup', function (e) {
      if (!tracking) return;
      tracking = false;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) userShow(current() + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    });
    section.addEventListener('pointercancel', function () { tracking = false; });
    syncPause();
    // Nur laufen lassen, solange der Bereich sichtbar und der Tab aktiv ist
    document.addEventListener('visibilitychange', function () { schedule(AUTO_MS); });
    window.addEventListener('pageshow', function () { schedule(AUTO_MS); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        visible = en[en.length - 1].isIntersecting;
        if (visible) schedule(AUTO_MS); else clearTimeout(timer);
      }, { threshold: 0.01 }).observe(section);
    } else { visible = true; schedule(AUTO_MS); }
  })();

  // --- Glas-Hintergrund an/aus (Fußzeile) ---
  (function () {
    var root = document.documentElement, btn = document.getElementById('glass-toggle');
    if (!btn) return;
    function apply(on) { root.classList.toggle('glass', on); btn.setAttribute('aria-checked', on ? 'true' : 'false'); }
    apply(root.classList.contains('glass'));
    btn.addEventListener('click', function () {
      var on = !root.classList.contains('glass');
      apply(on);
      try { localStorage.setItem('glass', on ? '1' : '0'); } catch (e) {}
    });
  })();

  // --- Modals (Rechtstexte) ---
  var lastFocus = null;
  function setBackgroundInert(on) {
    ['header.top', 'main', 'footer'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      if (on) el.setAttribute('inert', ''); else el.removeAttribute('inert');
    });
  }
  function openModal(type) {
    var L = window.LEGAL || {};
    var texts = L[lang] || L.de || {};
    // Nutzungsbedingungen gibt es nur auf Deutsch und Englisch; andere Sprachen zeigen die englische Fassung
    var html = texts[type] || (type === 'eula' && L.en && L.en.eula) || (L.de || {})[type];
    if (!html) return;
    var ov = $('overlay');
    var wasOpen = !ov.classList.contains('hidden');
    if (!wasOpen) lastFocus = document.activeElement;
    $('modal-body').innerHTML = html;
    var h = $('modal-body').querySelector('h2');
    if (h) { h.id = 'modal-title'; ov.setAttribute('aria-labelledby', 'modal-title'); }
    ov.setAttribute('data-modal', type);
    ov.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setBackgroundInert(true);
    $('modal-body').scrollTop = 0;
    $('modal-close').focus();
  }
  function closeModal() {
    var ov = $('overlay');
    if (ov.classList.contains('hidden')) return;
    ov.classList.add('hidden');
    document.body.style.overflow = '';
    setBackgroundInert(false);
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
    lastFocus = null;
  }
  // Fokusfalle im Dialog
  document.addEventListener('keydown', function (e) {
    var ov = $('overlay');
    if (e.key !== 'Tab' || ov.classList.contains('hidden')) return;
    var f = ov.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener('click', function (e) {
    var tb = e.target.closest('.tabs [role=tab]');
    if (tb) return;
    var m = e.target.closest('[data-modal]');
    if (m && m.id !== 'overlay') {
      if (m.tagName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) return; // neuer Tab: echte Seite
      e.preventDefault(); openModal(m.getAttribute('data-modal')); return;
    }
    var lb = e.target.closest('.lang button');
    if (lb) { setLanguage(lb.getAttribute('data-lang'), true); return; }
    if (e.target === $('overlay') || e.target.id === 'modal-close') closeModal();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  // --- Demo-Video: nur abspielen, wenn sichtbar; bei „Bewegung reduzieren“ nicht automatisch ---
  var demo = $('demo-video');
  if (demo) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      demo.removeAttribute('autoplay'); demo.pause();
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          if (x.isIntersecting) { var p = demo.play(); if (p && p.catch) p.catch(function () {}); } else { demo.pause(); }
        });
      }, { threshold: 0.35 }).observe(demo);
    }
  }

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


  // --- Mobile-Menü (Burger) ---
  document.documentElement.classList.add('js');
  var hdr = document.querySelector('header.top'), burger = document.querySelector('.burger');
  function setMenu(o) {
    hdr.classList.toggle('open', o);
    burger.setAttribute('aria-expanded', o ? 'true' : 'false');
  }
  burger.addEventListener('click', function () { setMenu(!hdr.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.querySelectorAll('nav.main a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  showTab(1);
  setLanguage(lang, false);
})();
