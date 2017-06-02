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
  `Musterlösung` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Daten Export vom Benutzer nicht ausgewählt
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

-- Daten Export vom Benutzer nicht ausgewählt
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

-- Daten Export vom Benutzer nicht ausgewählt
-- Exportiere Struktur von Tabelle lucy.fortschritt
CREATE TABLE IF NOT EXISTS `fortschritt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Speicher` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Schritt` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Daten Export vom Benutzer nicht ausgewählt
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

-- Daten Export vom Benutzer nicht ausgewählt
-- Exportiere Struktur von Tabelle lucy.schwierigkeit
CREATE TABLE IF NOT EXISTS `schwierigkeit` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Daten Export vom Benutzer nicht ausgewählt
-- Exportiere Struktur von Tabelle lucy.status
CREATE TABLE IF NOT EXISTS `status` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Daten Export vom Benutzer nicht ausgewählt
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
