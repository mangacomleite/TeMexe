CREATE TABLE `teMexe`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(1000) NULL,
  `image` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `teMexe`.`new_table`
  RENAME TO  `teMexe`.`complaint` ;
