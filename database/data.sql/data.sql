-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mer. 18 mai 2022 à 14:30
-- Version du serveur : 10.7.3-MariaDB-1:10.7.3+maria~focal
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `data`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `userId`, `movieId`, `content`) VALUES
(1, 3, 3, 'J\'ai adoré, j\'adorerais aussi une place au gouvernement, n\'importe ou, s\'il vous plait.');

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `releaseDate` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `title`, `description`, `releaseDate`, `thumbnail`) VALUES
(1, 'P\'tit Quinquin', 'Une enquête policière extravagante, improbable et burlesque autour d’étranges crimes aux abords d’un village côtier du Boulonnais en proie au mal, et d’une bande de jeunes crapules menée par P’tit Quinquin et Eve, son amoureuse.', '2014', 'https://fr.web.img6.acsta.net/pictures/14/10/02/16/04/029257.jpg'),
(2, 'DETECTIVE CONAN : La fiancée de shibuya', 'Tokyo. Le quartier de Shibuya bat son plein pour Halloween. La détective Sato est en robe de mariée devant un parterre d’invités, dont Conan bien sûr ! Soudain, un agresseur fait irruption dans la salle et le détective Takagi est blessé en tentant de protéger Sato. Il survit à son agression mais cette attaque ravive chez Sato le souvenir du détective Matsuda, dont elle était amoureuse, tué au cours d\'attentats à la bombe il y a trois ans. Au même moment, l\'auteur de ces attentats s\'évade de prison. Coïncidence ? Pour venger son camarade de classe, le détective Furuya alias Toru Amuro part à la recherche du fugitif qui lui tend un piège. Conan retrouve Amuro avec une bombe autour du cou dans un abri souterrain. Amuro lui raconte que 3 ans plus tôt, ses camarades de l\'académie de police ont rencontré à Shibuya \"Plamya\", un poseur de bombe. Une ombre inquiétante plane sur Conan et ses amis. Le carrefour des destins s’embrase, Halloween se transforme en parade enragée !', '2022', 'https://fr.web.img3.acsta.net/c_310_420/pictures/22/04/06/17/04/0198593.jpg'),
(3, 'Grave', 'Dans la famille de Justine tout le monde est vétérinaire et végétarien. À 16 ans, elle est une adolescente surdouée sur le point d’intégrer l’école véto où sa sœur ainée est également élève. Mais, à peine installés, le bizutage commence pour les premières années. On force Justine à manger de la viande crue. C’est la première fois de sa vie. Les conséquences ne se font pas attendre. Justine découvre sa vraie nature.', '2017', 'https://fr.web.img6.acsta.net/c_310_420/pictures/16/12/07/16/37/538324.jpg'),
(4, 'Full of It', 'Pour devenir populaire dans son nouveau lycée, un adolescent invente des histoires à dormir debout. Mais lorsque tous ses mensonges deviennent réalité, les ennuis commencent...', '2007', 'https://m.media-amazon.com/images/M/MV5BMTYzMDU5MjIzMV5BMl5BanBnXkFtZTcwMjE5OTE0MQ@@._V1_FMjpg_UX1000_.jpg'),
(5, 'STAR WARS IX : L\'ascension de Skywalker', 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.', '2019', 'https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png'),
(6, 'La Folle Journée de Ferris Bueller', 'Un cancre invétéré, Ferris Bueller, convainc sa petite amie et son meilleur ami hypocondriaque (dont le père a une Ferrari) de sécher les cours pour aller passer la journée à Chicago. Pendant qu\'ils font les 400 coups dans la grande ville, le proviseur et la soeur de Ferris tente, chacun de leurs côtés, de prouver aux parents que leur fils est un cancre et qu\'il a séché.', '1986', 'https://m.media-amazon.com/images/I/91fOtWKp+CL._AC_SY445_.jpg'),
(7, 'Soinc : Le film', 'L\'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison. Soinc et son nouveau meilleur ami Tom font équipe pour sauver la planète du diabolique Dr. Robotnik, bien déterminé à régner sur le monde entier.', '2021', 'https://pbs.twimg.com/media/EX93SdgXsAIenb_.jpg'),
(8, 'La Chambre des suicidés', 'L’argent ne fait pas le bonheur, paraît-il. C’est aussi l’avis de Dominik, un fils de riches que la vie facile déprime. Rien à voir avec l’excitation que lui procure le monde virtuel ! Surtout la chambre du suicide, une plateforme de contacts pour ceux qui veulent mettre fin à leurs jours.', '2011', 'https://m.media-amazon.com/images/M/MV5BMTk3OTk0ODcyOV5BMl5BanBnXkFtZTcwMDA2MzY5Ng@@._V1_.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'JeanRobert', 'JeanRobert12345'),
(2, 'JeanPierrePolnareff', 'SILVERCHARIOT'),
(3, 'ManuelValls', 'ManouelValls'),
(5, 'dorian.canonne@novanexx.com', '$2y$10$Vx2H6wq.ybklO5f1fJNTTuW6q4iKlSgORW0sCvu6iZRbxS0bal5GW'),
(6, 'GigaChad', '$2y$10$JCYBfEUWohf9G7alkt19iu/lWeMT1BdpNa7k0JmAE2I3q58O851xG'),
(7, 'test', '$2y$10$/LoAxg7N0PqoNz3l19/YAugAonkEYUjBHKzRyvtm/Un8AhmljTw1C'),
(8, 'dorian', '$2y$10$B95wD7l0.//4khC7o5ojceQL2sC9ezP.B/q.D7pj13ppMrRrGsE5K'),
(9, 'qzdqzd', '$2y$10$.DMkUmfpSceOaWxfYfnXiur8dYHLlOefNJl8uaJWMkikPP4Vnl.06');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
