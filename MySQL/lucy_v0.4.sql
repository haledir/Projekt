-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.1.9-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportiere Datenbank Struktur für lucy
CREATE DATABASE IF NOT EXISTS `lucy` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `lucy`;

-- Exportiere Struktur von Tabelle lucy.aufgaben
CREATE TABLE IF NOT EXISTS `aufgaben` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Inhalt` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Musterloesung` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.aufgaben: ~5 rows (ungefähr)
/*!40000 ALTER TABLE `aufgaben` DISABLE KEYS */;
INSERT INTO `aufgaben` (`ID`, `Name`, `Inhalt`, `Musterloesung`) VALUES
	(1, 'Aufgabe 1', 'Schreiben Sie ein Programm, das für einen beliebigen Kreis Fläche und Umfang berechnet. Der Radius des Kreises soll im Programm vorgegeben werden. Berechnungsvorschriften: Fläche = PI * radius2 Umfang = 2 * PI * radius. Hinweise: Belegen Sie PI selbst mit einem Wert (z. B. 3.141).', 'public class main { public static void main(String[] args) { float flaeche; float umfang; float pi = 3.141f; float radius = 4.2f; flaeche = pi * (radius*radius); umfang = 2 * pi * radius; System.out.println("Die Fläche beträgt: " + flaeche); System.out.println("Der Umfang beträgt: " + umfang);}}'),
	(2, 'Aufgabe 2', 'Schreiben Sie ein weiteres Programm, das bei vorgegebenem Kapital (z. B. 10000 €), Zinssatz in Prozent (z. B. 5 %) und Anzahl der Tage (z. B. 360 Tage – entspricht einem Jahr nach „Banken“-Rechenweise!) den einfachen Zins (ohne Zinseszins) berechnet.', 'public class main { public static void main(String[] args) { float flaeche; float umfang; float pi = 3.141f; float radius = 4.2f; flaeche = pi * (radius*radius); umfang = 2 * pi * radius; System.out.println("Die Fläche beträgt: " + flaeche); System.out.println("Der Umfang beträgt: " + umfang);}}'),
	(3, 'Aufgabe 3', 'Konzipieren und realisieren Sie ein Programm, das bei 3 eingegebenen ganzen Zahlen die „mittlere“ berechnet (im Fachbegriff spricht man hier vom „Median“).', 'import java.util.*;public class main{public static void main(String[]args){int zahl1=0;int zahl2=0;int zahl3=0;Scanner sc=new Scanner(System.in);System.out.print("Bitte geben Sie ihre erste ganze Zahl ein: ");zahl1=sc.nextInt();System.out.print("Bitte geben Sie ihre zweite ganze Zahl ein: ");zahl2=sc.nextInt();System.out.print("Bitte geben Sie ihre dritte ganze Zahl ein: ");zahl3=sc.nextInt();if(zahl1<zahl2&&zahl2<zahl3||zahl3<zahl2&&zahl2<zahl1)\r\n{System.out.println("Die mittlere Zahl ist: "+zahl2);}else if(zahl2<zahl1&&zahl1<zahl3||zahl3<zahl1&&zahl1<zahl2)\r\n{System.out.println("Die mittlere Zahl ist: "+zahl1);}else if(zahl1<zahl3&&zahl3<zahl2||zahl2<zahl3&&zahl3<zahl1)\r\n{System.out.println("Die mittlere Zahl ist: "+zahl3);}}}'),
	(4, 'Aufgabe 4', 'In einem weiteren Programm soll eine stark vereinfachte Version des beliebten Würfelspiels „Mäxchen“ realisiert werden. Hierbei wird mit 2 Würfeln gewürfelt. Als Ergebnis werden die beiden Zahlen ausgegeben – die größere steht immer vorne (z. B. 3 und 5 ergibt 53 Punkte). Es gibt einige Besonderheiten, die im Programm berücksichtigt werden sollen: Wird eine 1 und eine 2 gewürfelt, so nennt man diese Kombination „Mäxchen“. Sie wird mit 1000 Punkten gewertet. Werden 2 gleiche Zahlen gewürfelt, so spricht man ein einem „Pasch“. In diesem Fall wird der gewürfelte Wert mit 100 multipliziert. Das Programm soll das Ergebnis eines einzigen Wurfs mit 2 Würfeln ausgeben.', 'import java.util.*;public class main{public static void main(String[]args){int zahl1=(int)((Math.random())*6+1);int zahl2=(int)((Math.random())*6+1);int ergebnis=0;if(zahl1==2&&zahl2==1||zahl1==1&&zahl2==2)\r\n{ergebnis=1000;System.out.println("Herzlichen gl�ckwunsch Sie haben M�xle gew�rfelt! Ihre Punkte betragen: "+ergebnis);}else if(zahl1==zahl2)\r\n{ergebnis=(zahl1+zahl2)*100;System.out.println("Sie haben einen "+zahl1+" Pasch gew�rfelt. Ihre Punkte betragen: "+ergebnis);}else if(zahl1<zahl2)\r\n{System.out.println("Ihre Punkte betragen: "+zahl2+zahl1);}else\r\n{System.out.println("Ihre Punkte betragen: "+zahl1+zahl2);}}}'),
	(5, 'Aufgabe 5', 'Schreiben Sie ein Programmm, das die Anzahl von Sekunden im Monat Januar berechnet.', 'import java.util.*;public class main{public static void main(String[]args){int ergebnis=0;int tage=0;Scanner sc=new Scanner(System.in);System.out.print("Bitte geben Sie die Anzahl der Tage im Januar ein: ");tage=sc.nextInt();ergebnis=tage*24*60*60;System.out.println("Der Januar hat: "+ergebnis+" Sekunden!");}}');
/*!40000 ALTER TABLE `aufgaben` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.benutzer
CREATE TABLE IF NOT EXISTS `benutzer` (
  `MatNr` int(11) NOT NULL,
  `Benutzername` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Passwort` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Vorname` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Nachname` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Email` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`MatNr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.benutzer: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `benutzer` DISABLE KEYS */;
/*!40000 ALTER TABLE `benutzer` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.benutzer_aufgaben
CREATE TABLE IF NOT EXISTS `benutzer_aufgaben` (
  `MatNr` int(11) NOT NULL,
  `A_ID` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `Fortschritt` int(11) NOT NULL,
  `Schwierigkeit` int(11) NOT NULL,
  PRIMARY KEY (`MatNr`,`A_ID`,`Schwierigkeit`),
  KEY `Benutzer_Aufgaben_fk1` (`A_ID`),
  KEY `Benutzer_Aufgaben_fk2` (`Status`),
  KEY `Benutzer_Aufgaben_fk3` (`Fortschritt`),
  KEY `Benutzer_Aufgaben_fk4` (`Schwierigkeit`),
  CONSTRAINT `Benutzer_Aufgaben_fk0` FOREIGN KEY (`MatNr`) REFERENCES `benutzer` (`MatNr`),
  CONSTRAINT `Benutzer_Aufgaben_fk1` FOREIGN KEY (`A_ID`) REFERENCES `aufgaben` (`ID`),
  CONSTRAINT `Benutzer_Aufgaben_fk2` FOREIGN KEY (`Status`) REFERENCES `status` (`ID`),
  CONSTRAINT `Benutzer_Aufgaben_fk3` FOREIGN KEY (`Fortschritt`) REFERENCES `fortschritt` (`ID`),
  CONSTRAINT `Benutzer_Aufgaben_fk4` FOREIGN KEY (`Schwierigkeit`) REFERENCES `schwierigkeit` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.benutzer_aufgaben: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `benutzer_aufgaben` DISABLE KEYS */;
/*!40000 ALTER TABLE `benutzer_aufgaben` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.fortschritt
CREATE TABLE IF NOT EXISTS `fortschritt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Speicher` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Schritt` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.fortschritt: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `fortschritt` DISABLE KEYS */;
/*!40000 ALTER TABLE `fortschritt` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.schritte
CREATE TABLE IF NOT EXISTS `schritte` (
  `A_ID` int(11) NOT NULL,
  `S_ID` int(11) NOT NULL,
  `Inhalt` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`A_ID`,`S_ID`),
  KEY `Schritte_fk1` (`S_ID`),
  CONSTRAINT `Schritte_fk0` FOREIGN KEY (`A_ID`) REFERENCES `aufgaben` (`ID`),
  CONSTRAINT `Schritte_fk1` FOREIGN KEY (`S_ID`) REFERENCES `schwierigkeit` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.schritte: ~10 rows (ungefähr)
/*!40000 ALTER TABLE `schritte` DISABLE KEYS */;
INSERT INTO `schritte` (`A_ID`, `S_ID`, `Inhalt`) VALUES
	(1, 1, '{"schritt1":"Erstelle eine Variable flaeche vom Typ float.","schritt2":"Erstelle eine Variable umfang vom Typ float.","schritt3":"Erstelle eine Variable pi vom Typ float.","schritt4":"Setze den Wert der Variablen pi auf 3.141. Beachte das java Dezimalzahlen von Kommazahlen mithilfe des Buchstabens f hinter der Zahl unterscheidet. (Beispiel: pi = 3.141f)","schritt6":"Erstelle eine Variable radius mit beliebigen Inhalt, achte auch hier bei der Nutzung von Kommazahlen auf die korrekte Schreibweise!","schritt7":"Berechne den Flächeninhalt wie folgt flaeche=pi*(radius*radius);","schritt8":"Berechne den Umfang wie folgt umfang=2*pi*radius;","schritt9":"Erstelle eine Ausgabe der berechneten Fläche. Hierfür wird die Funktion System.out.println() verwendet. Beachte hierbei, dass Wörter in Anführungszeichen geschrieben werden und Variablen mit Hilfe des + Operators hinzugefügt werden.","schritt11":"Erstelle eine Ausgabe des berechneten Umfangs."}'),
	(1, 2, '{"schritt1":"Erstelle die Variablen flaeche, umfang, pi und radius vom Typ float. Wobei pi den Wert 3.141 und radius einen beliebigen Wert zugewiesen bekommt.","schritt2":"Berechne den Wert der Variable flaeche mithilfe der Formel: pi*(radius*radius).","schritt3":"Berechne den Wert der Variable umfang mithilfe der Formel: 2*pi*radius.","schritt4":"Gebe die beiden errechneten Werte mit Hilfe der Funktion System.out.println() aus."}'),
	(1, 3, 'Keine Schritte in dieser Schwierigkeit verfügbar.'),
	(2, 1, '{"schritt1":"Erstellen Sie die Variable ergebnis vom Typ float. (float ergebnis;)","schritt2":"Erstellen Sie die Variable kapital vom Typ float und weisen dieser den Wert 10000 zu. (float kapital = 10000;)","schritt3":"Erstellen Sie die Variable zins vom Typ float und weisen dieser den Wert 5 zu.","schritt4":"Erstellen Sie die Variable tage vom Typ float und weisen dieser den Wert 360 zu.","schritt5":"Erstellen Sie die Variable jahr vom Typ float und belegen Sie diese wie folgt: float jahr = tage/360;","schritt6":"Berechnen Sie den Wert für die Variable ergebnis wie folgt: ergebnis = kapital + (jahr * (zins/100) * kapital).","schritt7":"Geben Sie das Ergebnis mithilfe der Funktion System.out.println() aus."}'),
	(2, 2, '{"schritt1":"Erstellen Sie die Variablen ergebnis, kapital mit dem Wert 10000, zins mit dem Wert 5, tage mit dem Wert 360 und jahr mit dem Wert tage/360 vom Typ float.","schritt2":"Berechnen Sie das Ergebnis mit der einfachen Zins Rechnung (ohne zinses zins).","schritt3":"Geben Sie das berechnete Ergebnis mithilfe der System.out.println(); Funktion aus."}'),
	(2, 3, 'Keine Schritte in dieser Schwierigkeit verfügbar.'),
	(3, 1, '{"schritt1":"Importiere die Bibliothek java.util.*, hierfür muss in die erste Zeile des Editors folgende Zeile geschrieben werden: import java.util.*;","schritt2":"Erstelle die Variablen zahl1, zahl2 und zahl3 vom Typ integer und weise ihnen den Wert 0 zu. Dies geschieht über die folgende Eingabe: int zahl1=0;","schritt3":"Erstelle eine Scanner Variable sc, damit im späteren die Zahlen von der Tastatur eingelesen werden können. Diese Variable wird wie folgt erstellt: Scanner sc = new Scanner(System.in); ","schritt4":"Schreibe mit Hilfe der System.out.println() Funktion eine Aufforderung eine ganze Zahl einzugeben.","schritt5":"Weise der Variablen zahl1 die eingegeben Zahl zu. Dies geschieht wie folgt: zahl1 = sc.nextInt();","schritt6":"Wiederhole die Schritte 4 und 5 für die Variablen zahl2 und zahl3.","schritt7":"Schreibe nun die erste if-Anweisung. Hierbei soll geprüft werden, ob die zahl2 die mittlere zahl ist. Wenn ja soll diese ausgegeben werden. Die if-anweisung sieht wie folgt aus: if(zahl1<zahl2 && zahl2<zahl3 || zahl3<zahl2 && zahl2<zahl1). Beachte das das Ausgeben mit der Funktion System.out.println() mit {} Klammern umschlossen wird.","schritt8":"Wenn die Variable zahl2 nicht die Mittlere Zahl ist, muss weiter geprüft werden. Demnach wird nun eine else if-Anweisung benötigt. Die Anweisung hier sieht wie folgt aus: else if(zahl2<zahl1 && zahl1<zahl3 || zahl3<zahl1 && zahl1<zahl2). Hierbei wird geprüft ob zahl1 die mittlere Zahl ist.","schritt9":"Wenn auch diese Zahl nicht die Mittlere ist, muss die Variable zahl3 geprüft werden. Auch dies geschieht über eine else if-Anweisung. Der Code hierfür lautet: else if(zahl1<zahl3 && zahl3<zahl2 || zahl2<zahl3 && zahl3<zahl1) ","schritt10":"Nachdem alle zahlen geprüft wurden und jeweils eine System.out.println() Funktion in die {} Klammern der if / else if-Anweisungen geschrieben wurde, kann das Programm ausgeführt werden."}'),
	(3, 2, '{"schritt1":"Importiere die Java-Bibliothek java.util.*","schritt2":"Erstelle die Integer Variablen zahl1, zahl2 und zahl3. Weise diesen Variablen direkt den Wert 0 zu.","schritt3":"Erstelle eine Scanner Variable sc. Lese mithilfe dieser 3 Integer Werte von der Tastatur ein und weise sie den Variablen zahl1, zahl2 und zahl3 zu.","schritt4":"Schreibe nun entsprechende if /else if-Anweisungen, um die Mittlere Zahl auszugeben."}'),
	(3, 3, 'Keine Schritte in dieser Schwierigkeit verfügbar.'),
	(4, 1, '{"schritt1":"Importiere die Java-Bibliothek java.util.* . Hierzu muss in der ersten Zeile des Editors folgender Code hinzugefügt werden: import java.util.*;","schritt2":"Erstelle die Integer Variable zahl1 und weise ihr einen Zufälligen Wert von 1-6 zu. Dies geschieht wie folgt: int zahl1 = (int)((Math.random()) * 6 + 1);","schritt3":"Wiederhole den schritt2 für die Variable zahl2.","schritt4":"Erstelle die Integer Variable ergebnis und weise ihr den Wert 0 zu. (int ergebnis=0;)","schritt5":"Prüfe ob die Zahlen 2 und 1 gewürfelt wurden und weise in diesem Fall dem ergebnis den Wert 1000 zu. Dies geschieht über folgende if-Anweisung: if(zahl1 ==2 && zahl2 ==1 || zahl1==1 && zahl2==2) in den {} der if-Anweisung muss dem Ergebnis der Wert 1000 zugewiesen werden. Hierfür wird folgender Code verwendet: ergebnis=1000; Anschließend wird der Wert der Variablen ergebnis über die System.out.println() Funktion ausgegeben.","schritt6":"Wenn die Zahlen nicht 2 und 1 sind, muss überprüft werden ob es sich um einen Pasch handelt. Hierfür wird eine else if-Anweisung verwendet: else if(zahl1 == zahl2) Wenn das der Fall ist sollen die beiden zahlen addiert werden und das ergebnis mit 100 multipliziert werden. Die zuweisung der Variablen ergebnis sieht wie folgt aus: ergebnis=(zahl1+zahl2)*100; Anschließend wird die Variable ergebnis wieder mithilfe der Funktion System.out.println() ausgegeben.","schritt7":"Wenn auch kein Pasch gewürfelt wurde, muss geschaut werden, welche von den beiden Zahlen die größere ist, um auch hier das korrekte Ergebnis auszugeben. Auch dies geschieht über eine else if-Anweisung. Hierdurch wird die erste Prüfung realisiert: else if(zahl1<zahl2) In diesem Fall handelt es sich bei zahl 2 um die größere und somit muss diese zuerst ausgegeben werden. (System.out.println(zahl2 + zahl1);)","schritt8":"Zuletzt muss noch die letzte Variante abgefangen werden. Hierbei handelt es sich um eine letzte else-Anweisung. Damit wird der Fall abgefangen, das die zahl1 die größere ist. In diesem Fall sieht die Funktion für die Ausgabe wie folgt aus: System.out.println(zahl1 + zahl2)"}'),
	(4, 2, '{"schritt1":"Importiere die Java-Bibliothek java.util.*","schritt2":"Erstelle die Integer Variablen zahl1 und zahl2 und weise ihnen einen Zufälligen Wert von 1-6 zu. Erstelle außerdem die Integer Variable Ergebnis mit dem Wert 0.","schritt3":"Prüfe ob die Zahlen 2 und 1 gewürfelt wurden und weise in diesem Fall dem ergebnis den Wert 1000 zu. Gebe Anschließend die Variable ergebnis aus.","schritt4":"Überprüfe anschließend ob ein Pasch gewürfelt wurde. Hierbei wird die Summe der beiden würfel addiert und mit 100 multipliziert. Gebe auch hier anschließend das ergebnis aus.","schritt5":"Überprüfe zuletzt den Fall das weder 2 und 1 noch ein Pasch gewürfelt wurde. Gebe hier die beiden Zahlen der größe nach aus."}'),
	(4, 3, 'Keine Schritte in dieser Schwierigkeit verfügbar.'),
	(5, 1, '{"schritt1":"Importiere die Java-Bibliothek java.util.*. Hierfür muss in die erste Zeile des Editors folgender Code geschrieben werden: import java.util.*;","schritt2":"Erstelle die Integer Variable ergebnis mit dem Wert 0. (int ergebnis=0;)","schritt3":"Erstelle die Integer Variable tage mit dem Wert 0. (int tage= 0;)","Schritt4":"Erstelle die Scanner Variable sc um die Tage im Januar von der Tastatur einzulesen. (Scanner sc = new Scanner(System.in);)","Schritt5":"Schreibe eine Eingabaufforderung der Tage im Januar mithilfe der System.out.println() Funktion.","schritt6":"Weise der Variablen tage die eingegebene Zahl zu. (tage = sc.nextInt();)","schritt7":"Berechne das Ergebnis mit folgendem Code: ergebnis = tage*24*60*60;","schritt8":"Gebe das Ergebnis mithilfe der System.out.println() Funktion aus."}'),
	(5, 2, '{"schritt1":"Importiere die Java-Bibliothek java.util.*","schritt2":"Erstelle die Integer Variablen ergebnis und tage mit dem Wert 0.","Schritt3":"Erstelle die Scanner Variable sc um die Tage im Januar von der Tastatur einzulesen.","Schritt4":"Schreibe eine Eingabaufforderung der Tage im Januar und weise diese der Variablen tage zu.","schritt5":"Berechne die Sekunden im Januar.","schritt6":"Gebe das Ergebnis aus."}'),
	(5, 3, 'Keine Schritte in dieser Schwierigkeit verfügbar.');
/*!40000 ALTER TABLE `schritte` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.schwierigkeit
CREATE TABLE IF NOT EXISTS `schwierigkeit` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.schwierigkeit: ~3 rows (ungefähr)
/*!40000 ALTER TABLE `schwierigkeit` DISABLE KEYS */;
INSERT INTO `schwierigkeit` (`ID`, `Bezeichnung`) VALUES
	(1, 'Anfänger'),
	(2, 'Fortgeschritten'),
	(3, 'Experte');
/*!40000 ALTER TABLE `schwierigkeit` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle lucy.status
CREATE TABLE IF NOT EXISTS `status` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin2;

-- Exportiere Daten aus Tabelle lucy.status: ~3 rows (ungefähr)
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` (`ID`, `Bezeichnung`) VALUES
	(1, 'offen'),
	(2, 'in Bearbeitung'),
	(3, 'fertig');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
