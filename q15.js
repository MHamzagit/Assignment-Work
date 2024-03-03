var guest = ["Hamza", "Aiza", "Areeb"];
var canNotAttend = "Areeb";
console.log("".concat(canNotAttend, " can not make it, for dinner"));
var newGuest = "Mama";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.map(function (names) { return console.log("Hello, ".concat(names, " You are invited to Dinner")); });
