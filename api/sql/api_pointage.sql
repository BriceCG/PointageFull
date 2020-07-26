
-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Sam 25 Juillet 2020 à 16:26
-- Version du serveur :  5.7.30-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `api_pointage_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `pt_demandes`
--

CREATE TABLE `pt_demandes` (
  `id` int(11) NOT NULL,
  `demande_date` datetime NOT NULL,
  `demande_etat` varchar(45) NOT NULL,
  `demande_intervalle` varchar(45) DEFAULT NULL,
  `demande_motif` varchar(45) NOT NULL,
  `demande_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_postes`
--

CREATE TABLE `pt_postes` (
  `id` int(11) NOT NULL,
  `poste_libelle` varchar(45) NOT NULL,
  `poste_obsolete` varchar(45) DEFAULT NULL,
  `pt_societes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_presences`
--

CREATE TABLE `pt_presences` (
  `id` int(11) NOT NULL,
  `presence_date` date NOT NULL,
  `presence_type` varchar(45) NOT NULL,
  `presence_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pt_presences`
--

INSERT INTO `pt_presences` (`id`, `presence_date`, `presence_type`, `presence_user`) VALUES
(14, '2020-07-25', 'present', 8),
(15, '2020-07-25', 'present', 9);

-- --------------------------------------------------------

--
-- Structure de la table `pt_profiles`
--

CREATE TABLE `pt_profiles` (
  `id` int(11) NOT NULL,
  `profile_libelle` varchar(45) DEFAULT NULL,
  `profile_obsolete` varchar(45) DEFAULT NULL,
  `profile_societe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_recuperations`
--

CREATE TABLE `pt_recuperations` (
  `id` int(11) NOT NULL,
  `recup_token` varchar(255) DEFAULT NULL,
  `recup_etat` varchar(45) DEFAULT NULL,
  `recup_user` int(11) DEFAULT NULL,
  `recup_societe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_responsabilites`
--

CREATE TABLE `pt_responsabilites` (
  `id` int(11) NOT NULL,
  `responsabilite_libelle` varchar(45) NOT NULL,
  `responsabilite_obsolete` varchar(45) DEFAULT NULL,
  `responsabilite_societe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_services`
--

CREATE TABLE `pt_services` (
  `id` int(11) NOT NULL,
  `service_libelle` varchar(255) NOT NULL,
  `service_societe` int(11) NOT NULL,
  `service_obsolete` tinyint(1) DEFAULT NULL
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
  `societe_iban` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pt_users`
--

CREATE TABLE `pt_users` (
  `id` int(11) NOT NULL,
  `user_username` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `user_etat` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `user_nom` varchar(45) NOT NULL,
  `user_prenom` varchar(45) NOT NULL,
  `user_date_naissance` date DEFAULT NULL,
  `user_date_creation` datetime DEFAULT NULL,
  `user_date_embauche` datetime DEFAULT NULL,
  `user_addresse_num` varchar(45) DEFAULT NULL,
  `user_addresse_voie` varchar(45) DEFAULT NULL,
  `user_addresse_complement` varchar(45) DEFAULT NULL,
  `user_ville` varchar(45) DEFAULT NULL,
  `user_societe` int(11) DEFAULT NULL,
  `user_service` int(11) DEFAULT NULL,
  `user_responsabilite` int(11) DEFAULT NULL,
  `user_poste` int(11) DEFAULT NULL,
  `user_profile` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pt_users`
--

INSERT INTO `pt_users` (`id`, `user_username`, `user_password`, `user_role`, `user_etat`, `user_email`, `user_nom`, `user_prenom`, `user_date_naissance`, `user_date_creation`, `user_date_embauche`, `user_addresse_num`, `user_addresse_voie`, `user_addresse_complement`, `user_ville`, `user_societe`, `user_service`, `user_responsabilite`, `user_poste`, `user_profile`) VALUES
(8, 'Brice1', '$2b$10$ymcqDE6l.BcjDLNi1nTSlOzO6EI5Rp1gkqPmFi0Pud0UIl4hBDFqC', 'admin', NULL, 'briceainarivonyraharijaona1@gmail.com', 'Raharijaona', 'Brice', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Brice', '$2b$10$zHusItSlpMWRgUkxR4XAXeRLe/pxezdeLabQ9sLpPm.fisESHwbqi', 'admin', NULL, 'briceainarivonyraharijaona@gmail.com', 'Raharijaona', 'Brice', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `pt_demandes`
--
ALTER TABLE `pt_demandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_demandes_pt_users1_idx` (`demande_user`);

--
-- Index pour la table `pt_postes`
--
ALTER TABLE `pt_postes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_postes_pt_societes1_idx` (`pt_societes_id`);

--
-- Index pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_presences_pt_users1_idx` (`presence_user`);

--
-- Index pour la table `pt_profiles`
--
ALTER TABLE `pt_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_profiles_pt_societes1_idx` (`profile_societe`);

--
-- Index pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_recuperations_pt_users1_idx` (`recup_user`),
  ADD KEY `fk_pt_recuperations_pt_societes1_idx` (`recup_societe`);

--
-- Index pour la table `pt_responsabilites`
--
ALTER TABLE `pt_responsabilites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_responsabilites_pt_societes1_idx` (`responsabilite_societe`);

--
-- Index pour la table `pt_services`
--
ALTER TABLE `pt_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_services_pt_societes1_idx` (`service_societe`);

--
-- Index pour la table `pt_societes`
--
ALTER TABLE `pt_societes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pt_users`
--
ALTER TABLE `pt_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pt_users_pt_societes_idx` (`user_societe`),
  ADD KEY `fk_pt_users_pt_services1_idx` (`user_service`),
  ADD KEY `fk_pt_users_pt_responsabilites1_idx` (`user_responsabilite`),
  ADD KEY `fk_pt_users_pt_postes1_idx` (`user_poste`),
  ADD KEY `fk_pt_users_pt_profiles1_idx` (`user_profile`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `pt_postes`
--
ALTER TABLE `pt_postes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `pt_profiles`
--
ALTER TABLE `pt_profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_responsabilites`
--
ALTER TABLE `pt_responsabilites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_services`
--
ALTER TABLE `pt_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `pt_societes`
--
ALTER TABLE `pt_societes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pt_users`
--
ALTER TABLE `pt_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `pt_demandes`
--
ALTER TABLE `pt_demandes`
  ADD CONSTRAINT `fk_pt_demandes_pt_users1` FOREIGN KEY (`demande_user`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_postes`
--
ALTER TABLE `pt_postes`
  ADD CONSTRAINT `fk_pt_postes_pt_societes1` FOREIGN KEY (`pt_societes_id`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_presences`
--
ALTER TABLE `pt_presences`
  ADD CONSTRAINT `fk_pt_presences_pt_users1` FOREIGN KEY (`presence_user`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_profiles`
--
ALTER TABLE `pt_profiles`
  ADD CONSTRAINT `fk_pt_profiles_pt_societes1` FOREIGN KEY (`profile_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_recuperations`
--
ALTER TABLE `pt_recuperations`
  ADD CONSTRAINT `fk_pt_recuperations_pt_societes1` FOREIGN KEY (`recup_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_recuperations_pt_users1` FOREIGN KEY (`recup_user`) REFERENCES `pt_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_responsabilites`
--
ALTER TABLE `pt_responsabilites`
  ADD CONSTRAINT `fk_pt_responsabilites_pt_societes1` FOREIGN KEY (`responsabilite_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_services`
--
ALTER TABLE `pt_services`
  ADD CONSTRAINT `fk_pt_services_pt_societes1` FOREIGN KEY (`service_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `pt_users`
--
ALTER TABLE `pt_users`
  ADD CONSTRAINT `fk_pt_users_pt_postes1` FOREIGN KEY (`user_poste`) REFERENCES `pt_postes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_users_pt_profiles1` FOREIGN KEY (`user_profile`) REFERENCES `pt_profiles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_users_pt_responsabilites1` FOREIGN KEY (`user_responsabilite`) REFERENCES `pt_responsabilites` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_users_pt_services1` FOREIGN KEY (`user_service`) REFERENCES `pt_services` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pt_users_pt_societes` FOREIGN KEY (`user_societe`) REFERENCES `pt_societes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
