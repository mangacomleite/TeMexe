


CREATE TABLE `teMexe`.`problems` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(1000) NULL,
  `image` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`));


  CREATE TABLE `teMexe`.`suggestions` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `description` VARCHAR(400) NULL,
    `image` VARCHAR(1000) NULL,
    PRIMARY KEY (`id`));
