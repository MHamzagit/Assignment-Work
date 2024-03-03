function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I Love typescript'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt('small', 'I need a big shirt to wear');
