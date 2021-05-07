# Automatische Suche nach Impfstofftermin in Sachsen

# Deutsch:
## Firefox
1. Installieren die Erweiterung "Firefox Tab Reloader" https://addons.mozilla.org/en-US/firefox/addon/tab-reloader/
## Chrome
1. Installieren die Erweiterung Chrome Tab Reloader https://chrome.google.com/webstore/detail/tab-reloader-page-auto-re/dejobinhdiimklegodgbmbifijpppopn

## Dann:
2. Suchen nach Icon des Tab Reloaders im Firefox/Chrome im oberen rechten Panel und klicken "Permit Code Execution" (Deutsch: Code Ausführung erlauben)
3. Klicken "Ja"
4. Öffnen das Script impfung_browser.js (siehen oben) und kopieren den Text.
Hinweis: Um Text kopieren zu können klicken Sie auf "Raw" Knopf.
5. Öffnen die Seite https://www.countee.ch/app/de/counter/impfee/_iz_sachsen
6. Klicken auf das Icon von Tab Reloader
7. Fügen Sie den Text aus impfung_browser.js Datei in grauer Box ein.
8. Ersetzen den Text "Annaberg" durch den Name der Stadt, wo das gewünschte Impfungszentrum sich befindet - "Leipzig", "Dresden" usw., entfernen die Anführungszeichen nicht. 
```var searchForText = 'Leipzig';```
9. Sie können die Dauer des Tons von 3000 Millisekunden (3 Sekunden) zu ihre gewünschte Länge ändern. 1000-10000 (1-10 Sekunden) soll genug sein.
```var beepMilliseconds = 5000; // beep for 5 seconds ```
10. In Tab Reloader wählen die Option "Use caching when reloading" aus.
11. Lassen Sie die "Reloading Time" (Aktualisierungsintervall) bei 5 Minuten oder länger um Überlastung der Website zu verhindern


# English:

## Firefox:
1. Install extension Firefox Tab Reloader https://addons.mozilla.org/en-US/firefox/addon/tab-reloader/
## Chrome:
1. Install extension Chrome Tab Reloader https://chrome.google.com/webstore/detail/tab-reloader-page-auto-re/dejobinhdiimklegodgbmbifijpppopn

## Next steps:
2. Search for the Tab Reloader icon in the top right menu and click "Permit Code Execution".
3. Click "Yes, allow".
4. Open script impfung_browser.js (see above) and copy text (you can copy it by clicking on "raw" button and selecting the text).
5. Open page https://www.countee.ch/app/de/counter/impfee/_iz_sachsen
6. Click on the icon for the Tab Reloader extension.
7. Paste the text from impfung_browser.js to the gray box.
8. Change the city from "Annaberg" to the city where the desired vaccination center is located - "Leipzig", "Dresden" etc., do not remove the quotes.
```var searchForText = 'Leipzig';```
9. Replace the duration of "beep" sound from 3000 milliseconds (3 seconds) to your desired length. 1000-10000 (1-10 seconds) should be enough.
```var beepMilliseconds = 5000; // beep for 5 seconds ```
10. In Tab Reloader select option "Use caching when reloading".
11. Leave the reloading time at 5 minutes or more to prevent the website from going down.

# Credits:
Developer: Anton Sokolchenko https://ua.linkedin.com/in/sevendays
