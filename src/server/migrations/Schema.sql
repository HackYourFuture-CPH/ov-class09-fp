CREATE TABLE `organizations` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100) UNIQUE NOT NULL,
  `logo` text DEFAULT null,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `ecas` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `longitude` decimal(11, 8) NOT NULL,
  `latitude` decimal(10, 8) NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `ports` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `latitude` decimal(10, 8) NOT NULL,
  `longitude` decimal(11, 8) NOT NULL,
  `depth` decimal NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `user_roles` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role` varchar(30) NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `organization_id` int NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` tinyint,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `session_token` text DEFAULT null,
  `refreshing_token` text DEFAULT null
);

CREATE TABLE `favorite_vessels` (
  `user_id` int NOT NULL,
  `vessel_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`, `vessel_id`)
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
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `vessel_report_id` int NOT NULL
);

CREATE TABLE `vessels` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `organization_id` int NOT NULL,
  `mmsi` varchar(9) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `vessel_reports` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `voyage_id` int NOT NULL,
  `latitude` decimal(10, 8) NOT NULL,
  `longitude` decimal(11, 8) NOT NULL,
  `eta` timestamp, 
  `current_speed` float NOT NULL,
  `hfo_consumption` float NOT NULL,
  `lsfo_consumption` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `selected_route_id` int DEFAULT null
);

CREATE TABLE `voyages` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `vessel_id` int NOT NULL,
  `departure_time` datetime DEFAULT null,
  `target_arrival_time` datetime DEFAULT null,
  `forwarddraft` float NOT NULL,
  `aftdraft` float NOT NULL,
  `optimisation_type` ENUM ("earliest_arrival", "fixed_eta", "least_cost_arrival") DEFAULT "earliest_arrival",
  `depart_from_port` int DEFAULT null,
  `arrive_at_port` int DEFAULT null,
  `hfocost` float DEFAULT 0,
  `lsfocost` float DEFAULT 0,
  `hirerate` float DEFAULT 0,
  `status` ENUM ("created", "ongoing", "completed") NOT NULL DEFAULT "created",
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `waypoints` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `suggested_route_id` int,
  `longitude` decimal(11, 8) NOT NULL,
  `latitude` decimal(10, 8) NOT NULL,
  `speed` decimal NOT NULL,
  `rpm` decimal NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sequence_id` int DEFAULT null
);

ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `favorite_vessels` ADD FOREIGN KEY (`vessel_id`) REFERENCES `vessels` (`id`) ON DELETE CASCADE;

ALTER TABLE `suggested_routes` ADD FOREIGN KEY (`vessel_report_id`) REFERENCES `vessel_reports` (`id`) ON DELETE CASCADE;

ALTER TABLE `users` ADD FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE RESTRICT ;
ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`) ON DELETE CASCADE;

ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`selected_route_id`) REFERENCES `suggested_routes` (`id`) ON DELETE SET NULL;
ALTER TABLE `vessel_reports` ADD FOREIGN KEY (`voyage_id`) REFERENCES `voyages` (`id`) ON DELETE CASCADE;

ALTER TABLE `vessels` ADD FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE CASCADE;

ALTER TABLE `voyages` ADD FOREIGN KEY (`arrive_at_port`) REFERENCES `ports` (`id`) ON DELETE CASCADE;
ALTER TABLE `voyages` ADD FOREIGN KEY (`depart_from_port`) REFERENCES `ports` (`id`) ON DELETE CASCADE;
ALTER TABLE `voyages` ADD FOREIGN KEY (`vessel_id`) REFERENCES `vessels` (`id`) ON DELETE CASCADE;

ALTER TABLE `waypoints` ADD FOREIGN KEY (`suggested_route_id`) REFERENCES `suggested_routes` (`id`) ON DELETE CASCADE;
