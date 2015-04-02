meteor-leaderboard
======

fixture data 
players = [
  { name: "David Lindhagen", score: 0 }, 
  { name: "Tara Reid", score: 0 },
  { name: "George Clooney", score: 0 },
  { name: "Batman", score: 1 },
  { name: "Thor", score: 0 }
];

players.forEach(function(p){
  PlayersList.insert(p);
});