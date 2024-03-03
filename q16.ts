//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guest :string[] =["Hamza","Aiza","Areeb"];
let canNotAttend : string = "Areeb";
let newguest : string = "Mama";
guest[guest.indexOf(canNotAttend)]=newguest;

console.log("Welcome all we found a bigger table!");
guest.unshift("MOhib");

let middlename:string = "haider";
let middlenum =guest.length/2;
guest.splice(middlenum,0,middlename);

guest.push("maaz");
guest.map((names)=> console.log (`\nHello, ${names} You are invited to Dinner`));