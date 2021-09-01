CREATE DATABASE  IF NOT EXISTS `gamezone` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gamezone`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: gamezone
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `emailid` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES ('satishkumar998475@gmail.com','satish','sk','satish.jpg');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categoryid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryname` text,
  `description` text,
  `icon` text,
  `ad` text,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Android','Tuch mobile','45953-jxoouj.jpg','Available-now-Realme-8-5G-CLP-Banner-28-04-2021.jpg'),(6,'Tablets ','Android tablet','Config-KV-TabS6-CloudBlue-082119-1200x1200.jpg','Tablet-Banners-1365-x-260.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generateorderno`
--

DROP TABLE IF EXISTS `generateorderno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generateorderno` (
  `orderno` int(11) NOT NULL AUTO_INCREMENT,
  `orderdate` date DEFAULT NULL,
  `ordertime` time DEFAULT NULL,
  `totalamount` decimal(10,0) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `mobileno` varchar(13) DEFAULT NULL,
  `paymentmode` varchar(45) DEFAULT NULL,
  `transactionid` text,
  PRIMARY KEY (`orderno`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generateorderno`
--

LOCK TABLES `generateorderno` WRITE;
/*!40000 ALTER TABLE `generateorderno` DISABLE KEYS */;
INSERT INTO `generateorderno` VALUES (14,'2021-06-05','13:14:00',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(15,'2021-06-05','13:21:09',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(16,'2021-06-05','13:22:29',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(17,'2021-06-05','13:39:26',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(18,'2021-06-05','13:44:58',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(19,'2021-06-05','13:57:27',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(20,'2021-06-05','13:59:50',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(21,'2021-06-05','14:24:18',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(22,'2021-06-05','14:29:42',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(23,'2021-06-05','14:38:49',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(24,'2021-06-05','14:44:34',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(25,'2021-06-05','15:07:00',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(26,'2021-06-05','15:14:37',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(27,'2021-06-05','15:15:55',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(28,'2021-06-07','20:08:09',9000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(29,'2021-06-12','13:06:35',24999,'satishgupta9792070@gmail.com','7355069702','Cash On Delivery','none'),(30,'2021-06-12','13:06:45',24999,'satishgupta9792070@gmail.com','7355069702','Cash On Delivery','none'),(31,'2021-06-24','12:55:07',43998,'sahuanil01@gmail.com','8319156602','Cash On Delivery','none'),(32,'2021-07-24','23:49:17',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(33,'2021-08-05','18:23:33',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none');
/*!40000 ALTER TABLE `generateorderno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobile`
--

DROP TABLE IF EXISTS `mobile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile` (
  `categoryid` int(11) DEFAULT NULL,
  `subcategoryid` int(11) DEFAULT NULL,
  `mobileid` int(11) NOT NULL AUTO_INCREMENT,
  `mobilename` varchar(70) DEFAULT NULL,
  `description` text,
  `price` int(11) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `icon` text,
  `stock` int(11) DEFAULT NULL,
  `offer` int(11) DEFAULT NULL,
  PRIMARY KEY (`mobileid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile`
--

LOCK TABLES `mobile` WRITE;
/*!40000 ALTER TABLE `mobile` DISABLE KEYS */;
INSERT INTO `mobile` VALUES (6,7,4,'huawei','huawei',19000,'black','Huawei.jpg',1,1000),(5,5,5,'readmi 8','4gb ram 32mg camera',10000,'blue','download (2).jpg',10,1000),(6,13,8,'Apple iPad Air ','Apple iPad Air 2019 26.67 cm (10.5 inch) Wi-Fi Tablet, 256 GB',58900,'cream','Apple-MUUT2HN-A-Tablet-491551016-i-3-1200Wx1200H.jpg',5,2000),(6,12,9,'Samsung Galaxy Tab S3','Samsung Galaxy Tab S3 24.58 cm (9.7 inch) Tablet 4 GB RAM, 32 GB, Black SM-T825NZKAINS',51500,'black','Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-1-1200Wx1200H.jpg',2,12500),(6,14,10,'MOTOROLA XOOM Android Tablet ','MOTOROLA XOOM Android Tablet (10.1-Inch, 32GB, Wi-Fi)',20000,'black','812QrKtqajL._AC_SL1500_.jpg',2,2000),(5,9,11,'Samsung Galaxy M51 Celestial',' 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) fnt camera Android v10.0 os with 2',27999,'blue','samsung jpg.jpg',10,3000),(5,6,12,' OPPO A31 ','Fantasy White, 4GB RAM, 64GB Storage',12999,'Blue','Oppo A31.jpg',10,2500),(5,16,13,'realme 8 (Cyber Black, 128 GB)  (8 GB RAM','realme 8 (Cyber Black, 128 GB)  (8 GB RAM',20000,'black','8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg',10,4000);
/*!40000 ALTER TABLE `mobile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobilepicture`
--

DROP TABLE IF EXISTS `mobilepicture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobilepicture` (
  `imageid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) DEFAULT NULL,
  `subcategoryid` int(11) DEFAULT NULL,
  `mobileid` int(11) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`imageid`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobilepicture`
--

LOCK TABLES `mobilepicture` WRITE;
/*!40000 ALTER TABLE `mobilepicture` DISABLE KEYS */;
INSERT INTO `mobilepicture` VALUES (3,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-5-1200Wx1200H.jpg'),(4,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-3-1200Wx1200H.jpg'),(5,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-2-1200Wx1200H.jpg'),(6,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-1-1200Wx1200H.jpg'),(7,5,6,12,'61KC1HMXkyL._SL1500_.jpg'),(8,5,6,12,'61sFZ75PkhL._SL1500_.jpg'),(9,5,6,12,'61XmHsIKYbL._SL1500_.jpg'),(10,5,6,12,'61zz4gX6fiL._SL1500_.jpg'),(11,5,6,12,'71HIcIenorL._SL1500_.jpg'),(12,5,6,12,'Oppo A31.jpg'),(13,5,4,2,'Mi 10.jpg'),(14,5,4,2,'mi10.jpg'),(15,5,4,2,'Mi-10i-Smart-Phones-491946818-i-1-1200Wx1200H.jpg'),(16,5,4,2,'Mi-10i-Smart-Phones-491946818-i-4-1200Wx1200H.jpg'),(17,5,4,2,'Mi-10i-Smart-Phones-491946818-i-8-1200Wx1200H.jpg'),(18,5,4,2,'Mi-10i-Smart-Phones-491946818-i-10-1200Wx1200H.jpg'),(19,5,4,2,'Mi-10i-Smart-Phones-491946818-i-14-1200Wx1200H-96Wx96H.jpg'),(20,5,4,1,'51JdnUMTBDL._SL1500_.jpg'),(21,5,4,1,'51yWv7OkJyL._SL1500_.jpg'),(22,5,4,1,'61nugRFIYgL._SL1500_.jpg'),(23,5,4,1,'71dULqyVpwL._SL1071_.jpg'),(24,5,4,1,'71jaCF04eAL._SL1500_.jpg'),(25,5,4,1,'81E-F3rKnWL._SL1500_.jpg'),(26,5,4,1,'91k6WOeSlJL._SL1500_.jpg'),(27,6,14,10,'71A+QCdbKnL._AC_SL1500_.jpg'),(28,6,14,10,'812QrKtqajL._AC_SL1500_.jpg'),(29,6,7,4,'Huawei add.jpg'),(30,6,7,4,'Huawei.jpg'),(31,5,9,11,'samsung-galaxy-m51-sm-m515fzbd-original-imafvvgfkgsmzsq9.jpeg'),(32,5,9,11,'samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg'),(33,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8dz6yzgp2.jpeg'),(34,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8fhjh4sra.jpeg'),(35,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8qgphcqw2.jpeg'),(36,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-2-1200Wx1200H.jpg'),(37,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-3-1200Wx1200H.jpg'),(38,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-4-1200Wx1200H-96Wx96H.jpg'),(39,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-5-1200Wx1200H-96Wx96H.jpg'),(40,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-6-1200Wx1200H.jpg'),(41,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-7-1200Wx1200H.jpg'),(42,5,16,13,'8-rmx3085-realme-original-imagfgpfcaazjaxh.jpeg'),(43,5,16,13,'8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg'),(44,5,16,13,'8-rmx3085-realme-original-imagfgpffygyejug.jpeg'),(45,5,16,13,'8-rmx3085-realme-original-imagfgpfupg3ycq7.jpeg'),(46,5,16,13,'8-rmx3085-realme-original-imagfgpfuphtgjz9.jpeg'),(47,5,16,13,'8-rmx3085-realme-original-imagfgpfvknkefnx.jpeg');
/*!40000 ALTER TABLE `mobilepicture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderid` int(11) NOT NULL,
  `orderdate` date DEFAULT NULL,
  `ordertime` time DEFAULT NULL,
  `mobileno` varchar(13) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `state` varchar(70) DEFAULT NULL,
  `city` varchar(70) DEFAULT NULL,
  `mobileid` int(11) DEFAULT NULL,
  `mobilename` varchar(60) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `offer` decimal(10,0) DEFAULT NULL,
  `paymentmode` varchar(70) DEFAULT NULL,
  `qtydemand` decimal(10,0) DEFAULT NULL,
  `totalamount` decimal(10,0) DEFAULT NULL,
  `deliverystatus` varchar(45) DEFAULT NULL,
  `paymenttransactionid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`paymenttransactionid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (24,'2021-06-05','14:44:34','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,27000,'pending',1),(24,'2021-06-05','14:44:34','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',4,'huawei',19000,1000,'Cash On Delivery',1,27000,'pending',2),(25,'2021-06-05','15:07:00','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,27000,'pending',3),(25,'2021-06-05','15:07:00','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',4,'huawei',19000,1000,'Cash On Delivery',1,27000,'pending',4),(26,'2021-06-05','15:14:37','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',5),(27,'2021-06-05','15:15:55','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',6),(28,'2021-06-07','20:08:09','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,9000,'pending',7),(29,'2021-06-12','13:06:35','7355069702','satishgupta9792070@gmail.com','anil sahu','air port road','','mp','gwalior',11,'Samsung Galaxy M51 Celestial',27999,3000,'Cash On Delivery',1,24999,'pending',8),(30,'2021-06-12','13:06:45','7355069702','satishgupta9792070@gmail.com','anil sahu','air port road','','mp','gwalior',11,'Samsung Galaxy M51 Celestial',27999,3000,'Cash On Delivery',1,24999,'pending',9),(31,'2021-06-24','12:55:07','8319156602','sahuanil01@gmail.com','anil sahu','tilak marg','rajgadh','mp','rajgadh',3,'Mi 10i 5g',24999,3000,'Cash On Delivery',2,43998,'pending',10),(32,'2021-07-24','23:49:17','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',11),(33,'2021-08-05','18:23:33','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',12);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `categoryid` int(11) DEFAULT NULL,
  `subcategoryid` int(11) NOT NULL AUTO_INCREMENT,
  `subcategoryname` varchar(45) DEFAULT NULL,
  `description` text,
  `icon` text,
  `ad` text,
  PRIMARY KEY (`subcategoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (5,4,'Mi','mi 10i','readmi.jpg','mi10.jpg'),(5,5,'Readmi','Readmi node','XIRMSOMS-1620471393414.png','61zz4gX6fiL._SL1500_.jpg'),(5,6,'Oppo','Oppo A31','Oppo.jpg','oppo ad.jpg'),(6,7,'Huawei','Huawei meadiapad','Huawei-logo-500x281.jpg','Huawei add.jpg'),(5,9,'samsung','samsung android','ALVTDOPY-1610717642942.png','samsung m12.jpg'),(6,12,'samsung','samsung tablets','Samsung-Logo-final.jpg','slider.jpg'),(6,13,'Apple','Apple tablets','Apple-Logo-final.jpg','tab.jpg'),(6,14,'matrola','matrola tablets','Motorola-Logo-final.jpg','71A+QCdbKnL._AC_SL1500_.jpg'),(5,15,'OnePlus','OnePlus tuch','YGQUTHBM-1617602903776.png','Smartphone-Shop-By-Brands-OnePlus.jpg'),(5,16,'Realme','Realme 5g','realmi.png','Tablet-Banners-1365-x-260.jpg'),(6,19,'Lenova','made in china','xolo-logo-png-7.png','tab.jpg'),(5,20,'apple','made in china','Apple-Logo-final.jpg','Apple-MUUT2HN-A-Tablet-491551016-i-3-1200Wx1200H.jpg');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdetails`
--

DROP TABLE IF EXISTS `userdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdetails` (
  `mobileno` varchar(15) NOT NULL,
  `emailid` varchar(100) NOT NULL,
  `firstname` varchar(60) DEFAULT NULL,
  `lastname` varchar(60) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `state` varchar(70) DEFAULT NULL,
  `city` varchar(70) DEFAULT NULL,
  `addressstatus` tinyint(4) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `zipcode` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`mobileno`,`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetails`
--

LOCK TABLES `userdetails` WRITE;
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
INSERT INTO `userdetails` VALUES ('1515165465','panday1997muskan@gmail.com','muskan','pandey','bhagyshree colony','it park','rnt hostel near it park','INDORE',1,'123','452020'),('7354069702','anilsahu@gmail.com','anil','sahu',NULL,NULL,NULL,NULL,0,'123',NULL),('7355069702','satishgupta9792070@gmail.com','anil','sahu','air port road','','mp','gwalior',1,'123','210431'),('7895751565','satishgupta9792070@gmail.com','satish','kumar','Econ express','Rabaul maudaha hamirpur','Uttar Pradesh','Hamirpur-UP',1,'123456','210507'),('7982165765','satishgupta9792070@gmail.com','satish','gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',1,'123','452020'),('8319156602','sahuanil01@gmail.com','anil','sahu','tilak marg','rajgadh','mp','rajgadh',1,'123','465661'),('9044001418','satishkumar998475@gmail.com','satish','kumar',NULL,NULL,NULL,NULL,0,'123',NULL),('9044004118','satishkumar998475@gmail.com','satish','kumar',NULL,NULL,NULL,NULL,0,'123',NULL),('9795755616','anil@gmail.com','Anil','sahu','Econ express','Rabaul maudaha hamirpur','Uttar Pradesh','Hamirpur-UP',1,'anil','210507'),('9984751898','ms@123.com','manish','gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',1,'123','452020');
/*!40000 ALTER TABLE `userdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gamezone'
--

--
-- Dumping routines for database 'gamezone'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-01 14:28:34
