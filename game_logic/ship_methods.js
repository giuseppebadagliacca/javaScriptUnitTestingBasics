function checkForShip(player, coordinates) {
  let shipPresent, ship;
  for(let i=0;i <player.ships.length; i++){
    ship = player.ship[i]

    shipPresent = ship.locations.filter(actualCoordinate =>{
      return (actualCoordinate[0]=== coordinate[0] && actualCoordinate[1]=== coordinate[1])
    })[0]

    if(!shipPresent) {
      return false;
    }
  }
}

module.exports.checkForShip = checkForShip;