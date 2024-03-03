function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
var Magicians3 = ["usman", "hamza", "haider"];
var Magicians2 = make_great2(Magicians3);
console.log(Magicians3);
console.log(Magicians2);
