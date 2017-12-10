// Code your solution in this file!

function distanceFromHqInBlocks(dist) {
  return Math.abs(dist-42);
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264;
}

function distanceTravelledInFeet(dist1, dist2) {
  return Math.abs(dist1 -dist2) * 264;
}

function calculatesFarePrice(dist1, dist2) {
  feet = distanceTravelledInFeet(dist1, dist2)
  switch (true) {
    case feet <400:
      return 0;
    case (feet >= 400 && feet <= 2000):
      return (feet * 2)/100;
    case (feet > 2000 && feet <= 2500):
      return 25;
    default:
      return 'cannot travel that far';
  }
}
