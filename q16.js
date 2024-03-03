//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guest = ["Hamza", "Aiza", "Areeb"];
var canNotAttend = "Areeb";
var newguest = "Mama";
guest[guest.indexOf(canNotAttend)] = newguest;
console.log("Welcome all we found a bigger table!");
guest.unshift("MOhib");
var middlename = "haider";
var middlenum = guest.length / 2;
guest.splice(middlenum, 0, middlename);
guest.push("maaz");
guest.map(function (names) { return console.log("Hello, ".concat(names, " You are invited to Dinner")); });
