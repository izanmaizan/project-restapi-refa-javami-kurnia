-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2023 at 02:32 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `guests`
--

CREATE TABLE `guests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `check_in` date DEFAULT NULL,
  `check_out` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(11) NOT NULL,
  `room_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `room_name`, `description`, `price`) VALUES
(1, 'Single Room', 'Kamar tunggal yang nyaman dengan pemandangan yang indah.', '50000.00'),
(2, 'Double Room', 'Kamar ganda yang luas untuk pasangan.', '80000.00'),
(3, 'Suite', 'Suite mewah dengan balkon pribadi.', '150000.00'),
(4, 'Standard Room', 'Kamar standar dengan fasilitas dasar.', '60000.00'),
(5, 'Family Suite', 'Suite ramah keluarga dengan beberapa tempat tidur.', '120000.00'),
(6, 'Executive Suite', 'Suite eksekutif untuk pelancong bisnis.', '130000.00'),
(7, 'Deluxe Room', 'Kamar deluxe dengan perabotan modern.', '90000.00'),
(8, 'Ocean View Room', 'Kamar dengan pemandangan laut yang menakjubkan.', '110000.00'),
(9, 'Budget Room', 'Kamar terjangkau dengan fasilitas dasar.', '40000.00'),
(10, 'Penthouse Suite', 'Suite penthouse eksklusif di lantai atas.', '200000.00'),
(11, 'Economy Room', 'Kamar ekonomis dengan fasilitas nyaman.', '45000.00'),
(12, 'Business Class Room', 'Kamar kelas bisnis dengan meja kerja.', '100000.00'),
(13, 'VIP Suite', 'Suite VIP dengan layanan personal.', '180000.00'),
(14, 'Garden View Room', 'Kamar dengan pemandangan taman yang indah.', '75000.00'),
(15, 'Honeymoon Suite', 'Suite romantis untuk pasangan pengantin baru.', '160000.00'),
(16, 'Mountain View Room', 'Kamar dengan pemandangan pegunungan yang indah.', '70000.00'),
(17, 'Pet-Friendly Room', 'Kamar cocok untuk tamu yang membawa hewan peliharaan.', '55000.00'),
(18, 'City View Room', 'Kamar dengan pemandangan kota yang menakjubkan.', '95000.00'),
(19, 'Accessible Room', 'Kamar dirancang untuk tamu dengan kebutuhan khusus.', '65000.00'),
(20, 'Luxe Apartment', 'Apartemen mewah dengan ruang tamu dan makan.', '220000.00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231229123712-History.cjs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guests`
--
ALTER TABLE `guests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `guests`
--
ALTER TABLE `guests`
  ADD CONSTRAINT `guests_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
