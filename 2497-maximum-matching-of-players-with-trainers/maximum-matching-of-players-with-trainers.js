/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  let pL = players.length;
  let tL = trainers.length;

  players = new Int32Array(players).sort();
  trainers = new Int32Array(trainers).sort();

  let pI = 0;
  let tI = 0;
  let count = 0;

  while (pI <= pL && tI <= tL) {
    if (players[pI] <= trainers[tI]) {
      count++;
      pI++;
    }
    tI++;
  }
  return count;
};