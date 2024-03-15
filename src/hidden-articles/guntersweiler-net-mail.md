---
title: guntersweiler.net Email-Umzug
editLink: true
outline: deep
---

# guntersweiler.net Email-Umzug

In diesem Artikel wird beschrieben, wie die Email-Umzug für @guntersweiler.net durchgeführt wird.

## Inhaltsverzeichnis

[[toc]]

## Eckdaten

Alle Mailboxen werden von [mail.gunti.cloud][gunticloud] auf Mailboxen bei [Servercow.de][servercow] umgezogen.

Im Verlauf der Migration werden neue Passwörter vergeben. Diese erhaltet ihr persönlich als Nachricht.

Alle Emails werden kopiert und während der ersten paar Tage regelmässig nachsynchronisiert, um einen Verlust zu verhindern. Die alte Mailbox bleibt vorübergehend bestehen, damit ihr auf allenfalls fehlende Emails, Kontakte oder Kalendereinträge zugreifen könnt.

::: warning ACHTUNG!
Die Umschaltung auf die neuen Mailboxen erfolgt am **Sonntag, 17. März 2024 zwischen 12:00 und 14:00**. In dieser Zeit solltet ihr vermeiden, Emails zu versenden, Kalendereinträge zu erstellen oder Kontakte zu ändern.
:::

Nachdem der Umzug abgeschlossen ist, solltet ihr eure Geräte überprüfen und die bestehenden Email-Accounts entfernen, bevor ihr sie neu anlegt. Für Email-Clients wie Mozilla Thunderbird ist eventuell nur eine Änderung einiger Einstellungen erforderlich (_siehe unten_). Ebenfalls solltet ihr eure Adressbücher und Kalender über das [alte Webmail][gunticloud-webmail] exportieren und über das [neue Webmail][servercow-webmail] importieren. Mehr dazu [weiter unten](#adressbuch-kalender-umziehen).

## Links

Die folgenden Links solltest ihr euch als Lesezeichen abspeichern.

- [Webmail][servercow-webmail]: Zugriff auf eure Emails aus dem Webbrowser
- [Mailcow Portal][servercow-portal]: Kontoverwaltung (z.B. Passwort ändern) (_melde dich als "Mailbox-Benutzer" an_)

## Allgemeine Zugangsdaten

::: warning Neues Passwort!
Du erhältst ein neues Passwort. Ändere dies bitte [hier über das Mailcow Portal][servercow-portal], bevor zu dich mit deinen Geräten anmeldest.
:::

Mit den folgenden Zugangsdaten kannst du die gängisten Mail-Clients einrichten.

|               | alt                      | new                      |
| ------------- | :----------------------  | ------------------------ |
| IMAP Server   | ~~mail.gunti.cloud~~     | hosted.mailcow.de        |
| IMAP Port     | 993                      | 993                      |
| SMTP Server   | ~~mail.gunti.cloud~~     | hosted.mailcow.de        |
| SMTP Port     | 465                      | 465                      |
| Benutzername  | _name_@guntersweiler.net | _name_@guntersweiler.net |

## Einrichten Endgeräte

### iPhone

::: info Folgt demnächst
:::

### Mozilla Thunderbird

Du kannst entweder das bestehene Email-Konto aus Thunderbird löschen und neu anlegen, oder die Einstellungen des bestehenden Kontos anpassen. Bedenke jedoch, dass du beim Löschen des Mailkontos eventuell andere Einstellungen ebenfalls verlierst. Emails gehen dadurch jedoch nicht verloren.

#### Konto neu anlegen (empfohlen)

1. Entferne als erstes dein bestehendes Email-Konto aus Thunderbird. Klicke dazu auf das Menü > "Konten-Einstellungen"<br>!["Konten-Einstellungen" im Thunderbird-Menü](/public/gnm-assets/thunderbird/edit-1.png)
2. Wähle dein Email-Konto in der Liste links aus. Klicke anschliessend auf "Konten-Aktionen" > "Konto entfernen".<br>![](/public/gnm-assets/thunderbird/delete-1.png)
3. Bestätige im nachfolgenden Dialog mit "Entfernen".
4. Klicke anschliessend erneut auf "Konten-Aktionen" und wähle "E-Mail-Konto hinzufügen...".<br>![](/public/gnm-assets/thunderbird/add-1.png)
5. Gib deinen Namen, deine Email-Adresse und dein neues Passwort ein. Stelle sicher, dass "Passwort speichern" aktiviert ist. Klicke anschliessend auf "Weiter".
6. Wenn Thunderbird die Einstellungen automatisch erkennt, prüfe ob der Posteingangs- und Postausgangs-Server als `hosted.mailcow.de` erkannt wurden. Wenn nicht, muss die Konfiguration manuell durchgeführt werden. Klicke dazu unten auf "Manuell einrichten". Sollten die Einstellungen korrekt erkannt worden sein, klicke auf "Fertig". Du kannst die folgenden Schritte überspringen.<br>![](/public/gnm-assets/thunderbird/add-2.png)
7. Solltest du die Einstellungen manuell erfassen müssen, benutze die oben unter "Allgemeine Zugangsdaten" genannten Infos.<br>![](/public/gnm-assets/thunderbird/add-3.png)
8. Klicke anschliessend auf "Erneut testen". Sollte Thunderbird die Einstellungen akzeptieren, klicke auf "Fertig".

#### Bestehendes Konto ändern

1. Klicke in Thunderbird auf das Menü > "Konten-Einstellungen"<br>!["Konten-Einstellungen" im Thunderbird-Menü](/public/gnm-assets/thunderbird/edit-1.png)
2. Wähle unter deinem Email-Konto den Punkt "Server-Einstellungen"<br>!["Server-Einstellungen"](/public/gnm-assets/thunderbird/edit-2.png)
3. Ändere im Feld "Server" die Adresse auf `hosted.mailcow.de`. Drücke anschliessend `ENTER`.
4. Du wirst gebeten, Thunderbird neu zu starten. Klicke auf "Neu starten".<br>![](/public/gnm-assets/thunderbird/edit-3.png)
5. Nach dem Neustart wirst du gebeten, das Passwort für deine neue Mailbox einzugeben. Gib hier das neue Passwort ein und stelle sicher, dass du den Punkt "Die Passwortverwaltung benutzen, um dieses Passwort zu speichern" aktiviert hast.<br>!["Passwort eingeben" in Thunderbird](/public/gnm-assets/thunderbird/edit-4.png)
6. Gehe anschliessend zurück in die "Konten-Einstellungen" und wähle dein Konto aus. Der Eintrag enthält üblicherweise deine Email-Adresse. Klicke anschliessend unter "Postausgangs-Server (SMTP)" auf "Postausgangs-Server (SMTP) bearbeiten ..."<br>![](/public/gnm-assets/thunderbird/edit-5.png)
7. Im darauf folgenden Dialog, ändere den Eintrag unter "Server" auf `hosted.mailcow.de`. Bestätige anschliessend mit "OK".
8. Das neue Passwort muss auch für den Mailversand eingesetzt werden. Erstelle dafür eine neue Email-Nachricht. Du kannst sie an dich selbst senden, wichtig ist nur, dass du auf "Senden" klickst. Dabei solltest du wieder nach deinem Passwort gefragt werden. Vergewissere dich auch hier, dass du dein Passwort speicherst, da du ansonsten bei jedem Email-Versand gefragt wirst.
9. Prüfe anschliessend deinen Posteingang nach einer Email von dir selbst. Wenn du sie erhalten hast, hat der Versand erfolgreich geklappt.

## Adressbuch & Kalender umziehen

Leider können Adressbücher nicht automatisch umgezogen werden. Daher hier eine Anleitung wie ihr Beides händisch umziehen könnt. Am Besten macht ihr dies an einem PC oder Laptop.

### Adressbuch

::: info Folgt demnächst
:::

### Kalender

::: info Folgt demnächst
:::

[gunticloud]: https://mail.gunti.cloud
[gunticloud-webmail]: https://mail.gunti.cloud/SOGo/
[servercow]: https://servercow.de
[servercow-webmail]: https://hosted.mailcow.de/SOGo/
[servercow-portal]: https://hosted.mailcow.de/