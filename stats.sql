CREATE DATABASE  IF NOT EXISTS `yum` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `yum`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: yum
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daily_menu`
--

DROP TABLE IF EXISTS `daily_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `final` bit(1) NOT NULL DEFAULT b'0',
  `last_edit` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_menu`
--

LOCK TABLES `daily_menu` WRITE;
/*!40000 ALTER TABLE `daily_menu` DISABLE KEYS */;
INSERT INTO `daily_menu` VALUES (1,'2017-05-08','\0','2017-05-24 17:24:47',0),(2,'2017-05-09','\0','2017-05-24 17:24:47',0),(3,'2017-05-10','\0','2017-05-24 17:24:47',0),(4,'2017-05-15','\0','2017-05-24 17:30:20',0),(5,'2017-06-17','\0','2017-05-24 17:24:47',0),(6,'2017-06-18','\0','2017-05-24 17:24:47',0),(7,'2017-06-23','\0','2017-05-24 17:22:39',0),(8,'2017-05-16','\0','2017-05-24 17:32:12',0),(9,'2017-05-22','\0','2017-05-24 17:34:26',0),(10,'2017-05-23','\0','2017-05-24 17:34:26',0),(11,'2017-05-24','\0','2017-05-24 17:34:26',0);
/*!40000 ALTER TABLE `daily_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_menu_food`
--

DROP TABLE IF EXISTS `daily_menu_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_menu_food` (
  `daily_menu_id` bigint(20) NOT NULL,
  `food_id` bigint(20) NOT NULL,
  PRIMARY KEY (`food_id`,`daily_menu_id`),
  KEY `daily_menu_id_idx` (`daily_menu_id`),
  CONSTRAINT `daily_menu_id` FOREIGN KEY (`daily_menu_id`) REFERENCES `daily_menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `food_id` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_menu_food`
--

LOCK TABLES `daily_menu_food` WRITE;
/*!40000 ALTER TABLE `daily_menu_food` DISABLE KEYS */;
INSERT INTO `daily_menu_food` VALUES (1,2),(1,6),(1,7),(1,8),(2,3),(2,5),(2,6),(2,7),(3,3),(3,6),(3,7),(3,8),(4,2),(4,5),(4,6),(4,7),(4,8),(5,2),(5,5),(5,6),(6,3),(6,7),(6,8),(7,3),(7,5),(7,6),(8,2),(8,5),(8,7),(9,2),(9,3),(9,6),(9,7),(10,3),(10,6),(10,8),(11,2),(11,6),(11,7),(11,8);
/*!40000 ALTER TABLE `daily_menu_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_order`
--

DROP TABLE IF EXISTS `daily_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `final` bit(1) NOT NULL DEFAULT b'0',
  `user_id` bigint(20) DEFAULT NULL,
  `dailymenu_id` bigint(20) DEFAULT NULL,
  `last_edit` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `dailymenu_id` (`dailymenu_id`),
  CONSTRAINT `daily_order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `daily_order_ibfk_2` FOREIGN KEY (`dailymenu_id`) REFERENCES `daily_menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_order`
--

LOCK TABLES `daily_order` WRITE;
/*!40000 ALTER TABLE `daily_order` DISABLE KEYS */;
INSERT INTO `daily_order` VALUES (1,'',1,1,'2017-05-24 17:20:18',2),(2,'',1,2,'2017-05-24 17:20:36',2),(3,'',1,3,'2017-05-24 17:20:41',2),(4,'',1,4,'2017-05-24 17:20:52',2),(5,'\0',1,7,'2017-05-24 17:21:05',1),(6,'\0',1,6,'2017-05-24 17:21:13',1),(7,'\0',1,8,'2017-05-24 17:31:59',1),(8,'\0',1,9,'2017-05-24 17:33:37',1),(9,'\0',1,10,'2017-05-24 17:33:42',1),(10,'\0',1,11,'2017-05-24 17:33:49',1);
/*!40000 ALTER TABLE `daily_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `food_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(100) DEFAULT NULL,
  `food_type` enum('Main','Salad','Drink','Dessert') DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `archived` tinyint(1) DEFAULT NULL,
  `last_edit` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (2,'Mousaka','Main','is an eggplant- (aubergine) or potato-based dish, often including ground meat, in the Levant, Middle East, and Balkans, with many local and regional variations',5.5,0,'2017-05-24 17:00:08',0),(3,'Meatballs','Main','A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. \nMeatballs are cooked by frying, baking, steaming, or braising in sauce.',6,0,'2017-05-24 17:01:22',0),(5,'Chef salad','Salad','Chef salad is an American salad consisting of hard-boiled eggs, one or more varieties of meat, such as ham, turkey, chicken, or roast beef, tomatoes, cucumbers, and cheese.',5.5,0,'2017-05-24 17:13:41',0),(6,'Coca cola','Drink','Coca-Cola  is a carbonated soft drink produced by The Coca-Cola Company.',2.5,0,'2017-05-24 17:14:53',0),(7,'Water','Drink','Samaria Greek bottled water 500ml Greece',0.5,0,'2017-05-24 17:16:46',0),(8,'Tomato Salad','Salad','Salad with fresh tomatoes',3,0,'2017-05-24 17:17:46',0);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item` (
  `food_id` bigint(20) DEFAULT NULL,
  `daily_order_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  KEY `food_id` (`food_id`),
  KEY `daily_order_id` (`daily_order_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`daily_order_id`) REFERENCES `daily_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (2,1,1),(6,1,1),(8,1,1),(3,2,1),(5,2,1),(6,2,1),(7,2,1),(3,3,1),(6,3,1),(8,3,1),(2,4,1),(6,4,2),(8,4,1),(3,5,3),(5,5,3),(6,5,2),(3,6,2),(7,6,1),(8,6,3),(2,7,5),(5,7,4),(7,7,6),(2,8,1),(3,8,1),(6,8,1),(7,8,1),(3,9,1),(6,9,2),(8,9,1),(2,10,2),(6,10,1),(7,10,1),(8,10,2);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `email` varchar(25) NOT NULL,
  `role` enum('hungry','chef','admin') DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `approved` bit(1) DEFAULT NULL,
  `last_edit` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `version` int(11) NOT NULL DEFAULT '0',
  `secret` varchar(60) DEFAULT NULL,
  `secret_creation` datetime DEFAULT NULL,
  `picture` mediumblob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin','admin@yum.com','admin','$2a$10$94RawXgiAdX76VORM7MkRevNSYa8NzlVcQVPZJqaNNBdmrq62y3aa','2017-03-28','','2017-05-22 12:22:09',0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yum_settings`
--

DROP TABLE IF EXISTS `yum_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yum_settings` (
  `deadline` time NOT NULL,
  `currency` varchar(30) NOT NULL,
  `notes` longtext,
  `tos` longtext,
  `policy` longtext,
  `last_edit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL DEFAULT '0',
  `foods_version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yum_settings`
--

LOCK TABLES `yum_settings` WRITE;
/*!40000 ALTER TABLE `yum_settings` DISABLE KEYS */;
INSERT INTO `yum_settings` VALUES ('13:00:00','&euro;','<p>All meals include slices of bread.</p>&#10;<p>Meals are delivered in a micorwave compatible plastic box. Disposable utensils are also included.</p>&#10;<p>Delivery time is 13:30.</p>&#10;<p>Payments will be collected by the reception desk. Mind to have the exact amount.</p>','<p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the <em>1500s</em>, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>&#10;<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>&#10;<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>','<p><strong>Contrary to popular belief</strong>,</p>&#10;<p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>&#10;<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &#34;de Finibus Bonorum et Malorum&#34; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &#34;Lorem ipsum dolor sit amet..&#34;, comes from a line in section 1.10.32.</p>&#10;<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &#34;de Finibus Bonorum et Malorum&#34; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>','2017-05-24 17:17:46',1,16,10);
/*!40000 ALTER TABLE `yum_settings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-24 20:40:22
