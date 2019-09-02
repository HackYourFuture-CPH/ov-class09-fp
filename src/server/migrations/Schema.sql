CREATE TABLE `companies`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `logo` text COMMENT 'Logo url',
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `ecas`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lon` float NOT NULL,
  `lat` float NOT NULL,
  `name` varchar(255) NOT NULL COMMENT 'Following zones exist: "hawaiian islands", "northeurope", "northamericanatlantic", "northamericanpacific", "usacaribbean"'
);

CREATE TABLE `ports`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `roles`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `selected_routes`
(
  `fk_voyage_id` int COMMENT 'TODO: Create composite key',
  `fk_route_id` int COMMENT 'TODO: Create composite key',
  `created_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Create composite key'
);

CREATE TABLE `users`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `confirmed` boolean COMMENT 'Has user confirmed email address?',
  `email` varchar(255) UNIQUE NOT NULL,
  `role` ENUM ('operator', 'admin', 'super_user') NOT NULL DEFAULT 'operator',
  `fk_company_id` int,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `favorite_vessels`
(
  `user_id` integer COMMENT 'TODO: Make composite key',
  `vessel_id` integer COMMENT 'TODO: Make composite key',
  `created_on` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `routes`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fk_id_voyage` int,
  `eta` datetime NOT NULL,
  `sailtime` float NOT NULL,
  `max_wave_height` float NOT NULL,
  `hfo` float NOT NULL,
  `lsfo` float NOT NULL,
  `total_cost` float NOT NULL,
  `distance_over_ground` float NOT NULL,
  `distance_through_water` float NOT NULL,
  `avgspeed` float NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `vessels`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fk_id_company` int,
  `mmsi` numeric UNIQUE NOT NULL,
  `name` varchar(255) UNIQUE NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `vessel_reports`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fk_vessel_id` int,
  `position` int,
  `current_speed` float NOT NULL,
  `hfo_consumption` float NOT NULL,
  `lsfo_consumption` float NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `voyages`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fk_id_vessel` int,
  `etd` datetime NOT NULL COMMENT 'Estimate time of departure',
  `eta` datetime NOT NULL COMMENT 'Estimate time of arrival',
  `forwarddraft` float NOT NULL COMMENT 'Forward draft in meters. Measured perpendicular of the bow.',
  `aftdraft` float NOT NULL COMMENT 'Aft draft in meters. Measured perpendicular to the stern.',
  `optimisation_type` ENUM ('fixed_eta', 'least_cost_arrival', 'earliest_arrival') NOT NULL DEFAULT 'least_cost_arrival',
  `depart_from` int NOT NULL COMMENT 'Departure waypoint',
  `arrive_at` int NOT NULL COMMENT 'Arrival waypoint',
  `sailtime` float NOT NULL DEFAULT 0 COMMENT 'Sailtime in hours',
  `hfocost` float NOT NULL DEFAULT 0 COMMENT 'Heavy Fuel Oil (HFO) cost in US dollars.',
  `lsfocost` float NOT NULL DEFAULT 0 COMMENT 'Low Sulfor Fuel Oil (LSFO) cost in US dollars.',
  `hirerate` float COMMENT 'Hire rate per day. Optional, must only be filled out if the vessel is chartered.',
  `status` ENUM ('created', 'ongoing', 'completed') NOT NULL DEFAULT 'created',
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

CREATE TABLE `waypoints`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fk_route_id` int,
  `fk_port_id` int,
  `lon` float NOT NULL,
  `lat` float NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT (now()),
  `updated_on` timestamp NOT NULL DEFAULT (now()) COMMENT 'TODO: Add ON UPDATE ON UPDATE CURRENT_TIMESTAMP'
);

ALTER TABLE `users` ADD FOREIGN KEY (`fk_company_id`) REFERENCES `companies` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`fk_id_vessel`) REFERENCES `vessels` (`id`);

ALTER TABLE `routes` ADD FOREIGN KEY (`fk_id_voyage`) REFERENCES `voyages` (`id`);

ALTER TABLE `waypoints` ADD FOREIGN KEY (`fk_route_id`) REFERENCES `routes` (`id`);

ALTER TABLE `waypoints` ADD FOREIGN KEY (`fk_port_id`) REFERENCES `ports` (`id`);

ALTER TABLE `vessels` ADD FOREIGN KEY (`fk_id_company`) REFERENCES `companies` (`id`);

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`fk_vessel_id`) REFERENCES `vessels` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`depart_from`) REFERENCES `waypoints` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`arrive_at`) REFERENCES `waypoints` (`id`);

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`position`) REFERENCES `waypoints` (`id`);

ALTER TABLE `selected_routes` ADD FOREIGN KEY (`fk_route_id`) REFERENCES `routes` (`id`);

ALTER TABLE `selected_routes` ADD FOREIGN KEY (`fk_voyage_id`) REFERENCES `voyages` (`id`);

ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`vessel_id`) REFERENCES `vessels` (`id`);

