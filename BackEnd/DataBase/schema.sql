-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema jail
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jail
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jail` DEFAULT CHARACTER SET utf8 ;
USE `jail` ;

-- -----------------------------------------------------
-- Table `jail`.`cells`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jail`.`cells` (
  `idCell` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idCell`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jail`.`prisoners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jail`.`prisoners` (
  `idPrisoner` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `duration` DATE NOT NULL,
  `degree` VARCHAR(25) NOT NULL,
  `cells_idCell` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idPrisoner`, `cells_idCell`),
  INDEX `fk_prisoners_cells_idx` (`cells_idCell` ASC) VISIBLE,
  CONSTRAINT `fk_prisoners_cells`
    FOREIGN KEY (`cells_idCell`)
    REFERENCES `jail`.`cells` (`idCell`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
