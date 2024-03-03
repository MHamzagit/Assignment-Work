//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array t
//o show that you have one array of the original names and one array with the Great added to each magician’s name
function sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwhich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("enjoy your sandwhich Aliza");
sandwhich('capsicum', 'tomato', 'chicken');
sandwhich('beef ', 'cheese');
sandwhich('garlic chicken', 'mayo sauce');
