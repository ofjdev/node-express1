CREATE TABLE IF NOT EXISTS `ConcertsDB`.`Concert` (
  `idConcert` INT NULL AUTO_INCREMENT,
  `ConcertName` VARCHAR(45) NOT NULL,
  `InterpretName` VARCHAR(45) NOT NULL,
  `Place` VARCHAR(45) NOT NULL,
  `Time` DATETIME NOT NULL,
  PRIMARY KEY (`idConcert`))
ENGINE = InnoDB;
