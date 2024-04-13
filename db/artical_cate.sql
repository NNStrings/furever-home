CREATE TABLE `furever-home`.`article_cate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `alias` VARCHAR(255) NOT NULL,
  `is_delete` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `alias_UNIQUE` (`alias` ASC) VISIBLE)
COMMENT = '文章分类数据表';
