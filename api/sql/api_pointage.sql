-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 23 Juillet 2020 à 16:07
-- Version du serveur :  5.7.30-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pointage`
--

-- --------------------------------------------------------

--
-- Structure de la table `pt_demandes`
--
USE pointage;
CREATE TABLE `pt_demandes` (
  `id` int(11) NOT NULL,
  `demande_date` datetime NOT NULL,
  `pt_user_user_id` int(11) DEFAULT NULL,
  `pt_departement_departement_id` int(11) DEFAULT NULL,
  `demande_etat` varchar(45) NOT NULL,
  `demande_intervalle` varchar(45) DEFAULT NULL,
  `demande_motif` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_departements`
--

CREATE TABLE `pt_departements` (
  `id` int(11) NOT NULL,
  `departement_nom` varchar(255) NOT NULL,
  `departement_chef_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_presences`
--

CREATE TABLE `pt_presences` (
  `id` int(11) NOT NULL,
  `presence_date` datetime NOT NULL,
  `pt_user_user_id_presence` int(11) DEFAULT NULL,
  `pt_departement_departement_id_presence` int(11) DEFAULT NULL,
  `presence_type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_recuperations`
--

CREATE TABLE `pt_recuperations` (
  `id` int(11) NOT NULL,
  `recup_token` varchar(255) DEFAULT NULL,
  `recup_user` int(11) NOT NULL,
  `recup_etat` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_societes`
--

CREATE TABLE `pt_societes` (
  `id` int(11) NOT NULL,
  `societe_raison_social` varchar(45) NOT NULL,
  `societe_siret` varchar(45) DEFAULT NULL,
  `societe_siren` varchar(45) DEFAULT NULL,
  `societe_adresse_numerique` varchar(45) DEFAULT NULL,
  `societe_adresse_voie` varchar(45) DEFAULT NULL,
  `societe_adresse_complement` varchar(45) DEFAULT NULL,
  `societe_code_postal` varchar(45) DEFAULT NULL,
  `societe_nom_contact` varchar(45) DEFAULT NULL,
  `societe_responsabilite_contact` varchar(45) DEFAULT NULL,
  `societe_telephone_fixe` varchar(45) DEFAULT NULL,
  `societe_telephone_mobile` varchar(45) DEFAULT NULL,
  `societe_adresse_email` varchar(45) DEFAULT NULL,
  `societe_effectif` varchar(45) DEFAULT NULL,
  `societe_activite` varchar(45) DEFAULT NULL,
  `societe_zone_geographique` varchar(45) DEFAULT NULL,
  `societe_departement` varchar(45) DEFAULT NULL,
  `socite_actif` varchar(45) DEFAULT NULL,
  `societe_ville` varchar(45) DEFAULT NULL,
  `societe_date_creation` datetime DEFAULT NULL,
  `societe_date_contrat` datetime DEFAULT NULL,
  `societe_date_rupture` datetime DEFAULT NULL,
  `societe_commentaire` varchar(45) DEFAULT NULL,
  `societe_document` varchar(45) DEFAULT NULL,
  `societe_logo` varchar(45) DEFAULT NULL,
  `societe_slogan` varchar(45) DEFAULT NULL,
  `societe_iban` varchar(45) DEFAULT NULL,
  `societe_user_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pt_societes`
--

INSERT INTO `pt_societes` (`id`, `societe_raison_social`, `societe_siret`, `societe_siren`, `societe_adresse_numerique`, `societe_adresse_voie`, `societe_adresse_complement`, `societe_code_postal`, `societe_nom_contact`, `societe_responsabilite_contact`, `societe_telephone_fixe`, `societe_telephone_mobile`, `societe_adresse_email`, `societe_effectif`, `societe_activite`, `societe_zone_geographique`, `societe_departement`, `socite_actif`, `societe_ville`, `societe_date_creation`, `societe_date_contrat`, `societe_date_rupture`, `societe_commentaire`, `societe_document`, `societe_logo`, `societe_slogan`, `societe_iban`, `societe_user_admin`) VALUES
(1, 'Informatique', 'test', 'test', 'Anosizato', 'test', 'test', '101', 'test', 'test', '0222222', '465464', 'ehtmwrnvjgdimcrivn@awdrt.net', '45', 'test', 'france', 'test', 'oui', 'Paris', '2020-07-23 13:58:02', NULL, NULL, 'test', 'test', 'test', 'test', 'test', 8);

-- --------------------------------------------------------

--
-- Structure de la table `pt_users`
--

CREATE TABLE `pt_users` (
  `id` int(11) NOT NULL,
  `user_username` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `user_departement_id` int(11) DEFAULT NULL,
  `user_etat` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `user_societe` int(11) DEFAULT NULL,
  `user_nom` varchar(45) NOT NULL,
  `user_prenom` varchar(45) NOT NULL,
  `user_date_naissance` date DEFAULT NULL,
  `user_date_creation` datetime DEFAULT NULL,
  `user_date_embauche` varchar(45) DEFAULT NULL,
  `user_addresse_num` varchar(45) DEFAULT NULL,
  `user_addresse_voie` varchar(45) DEFAULT NULL,
  `user_addresse_complement` varchar(45) DEFAULT NULL,
  `user_ville` varchar(45) DEFAULT NULL,
  `user_poste` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pt_users`
--

INSERT INTO `pt_users` (`id`, `user_username`, `user_password`, `user_role`, `user_departement_id`, `user_etat`, `user_email`, `user_societe`, `user_nom`, `user_prenom`, `user_date_naissance`, `user_date_creation`, `user_date_embauche`, `user_addresse_num`, `user_addresse_voie`, `user_addresse_complement`, `user_ville`, `user_poste`) VALUES
(8, 'Brice', '$2b$10$2KLQgceKOlslSagQ/XpKg.b8clmYIXkwyVVfFEaRvlmuS/H0nE1be', 'admin', NULL, NULL, 'briceainarivonyraharijaona@gmail.com', NULL, 'Raharijaona', 'Brice', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `pt_demandes`
--
ALTER TABLE `pt_demandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_demande_pt_user1_idx` (`pt_user_user_id`),
  ADD KEY `fk_pt_demande_pt_departement1_idx` (`pt_departement_departement_id`);

--
-- Index pour la table `pt_departements`
--
ALTER TABLE `pt_departements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_departement_pt_user1_idx` (`departement_chef_id`);

--
-- Index pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_presence_pt_user1_idx` (`pt_user_user_id_presence`),
  ADD KEY `fk_pt_presence_pt_departement1_idx` (`pt_departement_departement_id_presence`);

--
-- Index pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_recuperation_pt_users1_idx` (`recup_user`);

--
-- Index pour la table `pt_societes`
--
ALTER TABLE `pt_societes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_societes_pt_users1_idx` (`societe_user_admin`);

--
-- Index pour la table `pt_users`
--
ALTER TABLE `pt_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_user_pt_departement1_idx` (`user_departement_id`),
  ADD KEY `fk_pt_users_pt_societes1_idx` (`user_societe`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `pt_departements`
--
ALTER TABLE `pt_departements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_societes`
--
ALTER TABLE `pt_societes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `pt_users`
--
ALTER TABLE `pt_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `pt_demandes`
--
ALTER TABLE `pt_demandes`
  ADD CONSTRAINT `fk_pt_demande_pt_departement1` FOREIGN KEY (`pt_departement_departement_id`) REFERENCES `pt_departements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_demande_pt_user1` FOREIGN KEY (`pt_user_user_id`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_departements`
--
ALTER TABLE `pt_departements`
  ADD CONSTRAINT `fk_pt_departement_pt_user1` FOREIGN KEY (`departement_chef_id`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  ADD CONSTRAINT `fk_pt_presence_pt_departement1` FOREIGN KEY (`pt_departement_departement_id_presence`) REFERENCES `pt_departements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_presence_pt_user1` FOREIGN KEY (`pt_user_user_id_presence`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  ADD CONSTRAINT `fk_pt_recuperation_pt_users1` FOREIGN KEY (`recup_user`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_societes`
--
ALTER TABLE `pt_societes`
  ADD CONSTRAINT `fk_pt_societes_pt_users1` FOREIGN KEY (`societe_user_admin`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_users`
--
ALTER TABLE `pt_users`
  ADD CONSTRAINT `fk_pt_user_pt_departement1` FOREIGN KEY (`user_departement_id`) REFERENCES `pt_departements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_users_pt_societes1` FOREIGN KEY (`user_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
