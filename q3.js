//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "Hamza";
//for lower case
console.log(PersonName.toLocaleLowerCase());
//for upper case
console.log(PersonName.toUpperCase());
//for tittle case
console.log(PersonName.charAt(0).toUpperCase() + PersonName.slice(1, 5));
