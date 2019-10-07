CREATE TABLE `organizations` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `logo` text DEFAULT null,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `ecas` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `longitude` decimal NOT NULL,
  `latitude` decimal NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `ports` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `latitude` decimal NOT NULL,
  `longitude` decimal NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `user_roles` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `organization_id` int NOT NULL,
  `passowrd` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now()),
  `session_token` text DEFAULT null,
  `refreshing_token` text DEFAULT null
);

CREATE TABLE `favorite_vessels` (
  `user_id` int PRIMARY KEY NOT NULL,
  `vessel_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `suggested_routes` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `eta` datetime DEFAULT null,
  `max_wave_height` float NOT NULL,
  `hfo` float NOT NULL,
  `lsfo` float NOT NULL,
  `total_cost` float NOT NULL,
  `distance_over_ground` float NOT NULL,
  `distance_through_water` float NOT NULL,
  `avgspeed` float NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now()),
  `vessel_report_id` int NOT NULL
);

CREATE TABLE `vessels` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `organization_id` int NOT NULL,
  `mmsi` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `vessel_reports` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `voyage_id` int NOT NULL,
  `position_waypoint` int DEFAULT null,
  `current_speed` float NOT NULL,
  `hfo_consumption` float NOT NULL,
  `lsfo_consumption` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `selected_route_id` int DEFAULT null
);

CREATE TABLE `voyages` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `vessel_id` int NOT NULL,
  `etd` datetime DEFAULT null,
  `eta` datetime DEFAULT null,
  `forwarddraft` float NOT NULL,
  `aftdraft` float NOT NULL,
  `optimisation_type` ENUM ('a','b') NOT NULL,
  `depart_from_port` int DEFAULT null,
  `arrive_at_port` int DEFAULT null,
  `sailtime` float NOT NULL DEFAULT 0,
  `hfocost` float NOT NULL DEFAULT 0,
  `lsfocost` float NOT NULL DEFAULT 0,
  `hirerate` float NOT NULL,
  `status` ENUM ('a','b',"created") NOT NULL DEFAULT "created",
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `waypoints` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `suggested_route_id` int,
  `longitude` decimal NOT NULL,
  `latitude` decimal NOT NULL,
  `rpm` decimal,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now()),
  `sequence_id` int DEFAULT null
);

ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`vessel_id`) REFERENCES `vessels` (`id`);

ALTER TABLE `suggested_routes` ADD FOREIGN KEY (`vessel_report_id`) REFERENCES `vessel_reports` (`id`);

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`selected_route_id`) REFERENCES `suggested_routes` (`id`);

ALTER TABLE `waypoints` ADD FOREIGN KEY (`suggested_route_id`) REFERENCES `suggested_routes` (`id`);

ALTER TABLE `vessels` ADD FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`);

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`voyage_id`) REFERENCES `voyages` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`depart_from_port`) REFERENCES `ports` (`id`);

ALTER TABLE `voyages` ADD FOREIGN KEY (`arrive_at_port`) REFERENCES `ports` (`id`);

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`position_waypoint`) REFERENCES `waypoints` (`id`);

ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`vessel_id`) REFERENCES `vessels` (`id`);
