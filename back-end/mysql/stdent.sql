-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: student_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adminName` varchar(150) NOT NULL,
  `adminContact` varchar(45) NOT NULL,
  `adminId` varchar(100) NOT NULL,
  `adminPassword` varchar(150) NOT NULL,
  `adminRole` varchar(45) NOT NULL,
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleteStatus` int NOT NULL DEFAULT '0',
  `blockStatus` int NOT NULL DEFAULT '0',
  `countdowndate` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Vishwakarma Education Academy','9174063157','V91I717R','791f130b94df9a4c094137096ed9aafeaa806f77','main','2023-01-10 12:21:11',0,0,0),(2,'Aman Vishwakarma','7898998654','A78M2774R','fefa769781507c9d30ce8a2ef522afe2215aaebf','local','2023-01-14 19:09:23',1,0,0),(22,'Josephine Alford','7898998654','J78O9188R','8890bae49dd5f3fa7f4474ef08acbd6ee4807c22','local','2023-01-14 20:30:53',1,0,0),(23,'Thane William','8856892354','T88H7302R','468e529ee892c871d2dffc8e9d2f8e0dcc9b2644','local','2023-01-14 20:37:22',1,0,0),(24,'Colt Warner','6645789865','C66O3193R','5a6fa660e4f03000ffd747842347f1946d951f87','local','2023-01-14 20:52:31',1,0,0),(25,'Elton Gibson','8787887878','E87L4623R','e80a9d46aadb25fa9eb758b8f82500c7266d9331','local','2023-01-15 20:15:16',1,0,0),(26,'Emma Stephens','4545454545','E45M4653R','3cf5595f7921f1786605598a111e14ea32f95a43','local','2023-01-15 20:16:16',1,0,0),(27,'khjhufh hfauhdjs','1212121212','K12H8756R','ff33e086e95f15ab2f8d861aaddcc2095b0b2043','local','2023-01-15 20:16:47',1,0,0),(28,'Aman Vishwakarma','5878424841','A58M6524R','853af5682ce5c1df7219a49f68c8a2a73bbf4e1d','local','2023-01-17 19:45:18',1,0,0),(29,'pankesh vishwakarma','8787878887','P87A8435N','183cebada77868e33e1faba8eb3339740b0cf845','local','2023-01-17 19:51:01',1,0,0),(30,'Aman Vishwakarma','5445454545','A54M9848A','42cbc9e00a12f869fc2aa285747a43b125012f69','local','2023-01-17 20:33:04',1,0,0),(31,'Aman Vishwakarma','5454545454','A54M3757A','897b24421c60faf87cacb3862a94a92053940f52','local','2023-01-17 20:33:25',1,0,0),(32,'Aman Vishwakarma','8787887878','A87M7381A','64b0a0e5472dd70594db32824e90fee604fc5018','local','2023-01-17 20:43:03',1,0,0),(33,'Aman Vishwakarma','4545454545','A45M1230A','7fcab872bb42edf3dede148f3ad88f6fe695511a','local','2023-01-17 20:43:55',1,0,0),(34,'Aman Vishwakarma','7894561230','A78M9773A','56d7222bc0f58a6d8ba3b74d060c5053f8d578e1','local','2023-01-17 20:45:42',1,0,0),(35,'Aman Vishwakarma','4785961230','A47M6299A','4f90bf57db967d10f98bfb793d0000de6d9b8558','local','2023-01-17 20:47:49',1,0,0),(36,'Josephine Alford','1234567890','J12O7855S','8b9e4fcfc7b36ab2da689764e07f373fb9f79bba','local','2023-01-18 08:52:26',1,0,0),(37,'Elton Gibson','3692581470','E36L8965T','722eafe105108a5f29bbf6bbb8433872746501f2','local','2023-01-18 08:52:46',1,0,0),(38,'Aman Vishwakarma','9876543210','A98M5A','5c47842b17ed74acaf6b278a73f76ab01c457f55','local','2023-01-20 16:26:51',0,0,0),(39,'Elton Gibson','3698521470','E36L6698T','8decbe8f08ce36d1b409dfb17786229f5b4b0b51','local','2023-01-22 18:17:52',1,0,0);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `year` varchar(45) NOT NULL,
  `startline` varchar(45) NOT NULL,
  `deadline` varchar(45) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (2,'addmissionDate2023','2023-2024','2023-02-03','2023-02-28','2023-02-02 09:09:18');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `fatherName` varchar(45) NOT NULL,
  `motherName` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `dob` varchar(100) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `destrict` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `class` varchar(45) NOT NULL,
  `previousclass` varchar(45) NOT NULL,
  `persentage` varchar(45) NOT NULL,
  `marks` int NOT NULL,
  `year` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `password` varchar(150) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `RollNumber` int DEFAULT NULL,
  `AcademicYear` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pawan','vishwakarma','R j vishwakarma','Komal vishwakarma',13,'2002-10-10','female','obc','sehore','gwala','5th','4th','undefined',56,2022,'pkv239@gmail.com','7898998654','fbb29d4be471d06cb06da7331b01b87b346e43fa','2022-12-29 15:35:35',0,'2022-23'),(2,'Cally','Clayton','Scarlet Lucas','Chadwick Keller',17,'0000-00-00','other','obc','Vitae et et inventor','Quasi odit ipsum po','12th Ag','11th Ag','undefined',55,2022,'bivat@mailinator.com','7898998654','ac748cb38ff28d1ea98458b16695739d7e90f22d','2022-12-29 16:02:08',0,'2022-23'),(3,'Pawan','Lynn','Courtney Yang','Rowan Sharp',18,'0000-00-00','female','obc','Molestiae qui assume','Aliqua Excepteur so','6th','5th','undefined',98,2022,'aman54@gmail.com','9174063157','b1d6e4da6d10db462ea2c6bd34b5cef2107caac0','2022-12-29 18:12:43',0,'2022-23'),(4,'Pawan','Vishwakarma','Rajaram Vishwakarma','Komal Bai Vishwakarma',18,'2005-04-20','male','obc','sehore','Gwala','12th maths','11th maths','73',322,2020,'pkv@gmail.com','9174063157','59e2dcf92eb2d71f5956eed4021e2f0285f66ccd','2023-01-22 19:40:36',0,'2022-23'),(5,'Chetan','Vishwakarma','Rajaram Vishwakarma','Komal Bai Vishwakarma',13,'2008-10-05','male','obc','sehore','Gwala','8th','7th','87',500,2021,'chetan123@gmail.com','7898998654','0a80b87738af8c4f17af34cea1a5a6c8eb370b4b','2023-01-27 20:44:50',0,'2022-23'),(6,'Swara','Vishwakarma','Lakhan Vishwakarma','Kanta Bai Vishwakarma',17,'2005-03-03','female','obc','sehore','Gwala','11th bio','10th','70',600,2020,'skv123@gmail.com','9589028156','e2be339affb60fb2eafcae7fd20e3f421e2ef025','2023-01-27 20:59:49',0,'2022-23'),(7,'Anil','Vishwakarma','Lakhan Vishwakarma','Kanta Bai Vishwakarma',17,'2006-01-01','male','obc','Sehore','Gwala','11th Ag','10th','70',600,2021,'anil123@gmail.com','7724958297','1c24e3e5e4e9b726decc5df38d5778cb7e5f4ad5','2023-01-28 09:18:17',0,'2022-23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-18  9:25:55
