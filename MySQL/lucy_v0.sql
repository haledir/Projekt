-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.1.21-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportiere Datenbank Struktur für lucy
CREATE DATABASE IF NOT EXISTS `lucy` /*!40100 DEFAULT CHARACTER SET latin2 */;
USE `lucy`;

-- Exportiere Struktur von Tabelle lucy.benutzer
CREATE TABLE IF NOT EXISTS `benutzer` (
  `MatNr` int(11) NOT NULL,
  `Benutzername` varchar(150) NOT NULL,
  `Passwort` varchar(150) NOT NULL,
  `Vorname` varchar(150) NOT NULL,
  `Nachname` varchar(150) NOT NULL,
  `Email` varchar(150) NOT NULL,
  PRIMARY KEY (`MatNr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- Daten Export vom Benutzer nicht ausgewählt
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
