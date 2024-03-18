CREATE TABLE `furever-home`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `userpic` TEXT NULL DEFAULT NULL,
  `status` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
COMMENT = '用户信息表';

ALTER TABLE `furever-home`.`users` 
CHANGE COLUMN `id` `id` INT NOT NULL DEFAULT 0 ;

ALTER TABLE `furever-home`.`users` 
CHANGE COLUMN `username` `username` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `password` `password` VARCHAR(255) NOT NULL ;

ALTER TABLE `furever-home`.`users` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;