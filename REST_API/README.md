# Lucy's RESTful API

Um die API nutzen zu können, muss man folgendes beachten:
- Content-Type muss im http header auf application/json gestellt sein
- Basic Auth ist aktiv mit Nutzername und Passwort
- Http Header muss auch Authorization auf "Basic cm9vdDp0MDBy" gestellt haben
- Bei einem Update müssen nur die zu aktualisierenden Werte eingetragen werden
- Alle Methoden sind der REST_API.xslx zu entnehmen

Die API kann man am besten mit dem Chrome-AddOn Postman testen. Um sie ans Laufen zu bringen muss man folgendes tun:
- xampp installieren
- Apache & MySQL starten
- HeidiSQL installieren
- db_aufbau_skript.sql einlesen
- copy.cmd ausführen oder die .htaccess, index.php und den src-Ordner manuell in den htdocs von xampp kopieren