//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



function make_great2(magicians: string[]): string[]{
    const greatMagicians:string[]=[];
    for(let i=0; i<magicians.length; i++){
        greatMagicians.push(magicians[i]+'the Great');
    }
    return greatMagicians;
}

const Magicians3:string[]=["usman","hamza","haider"];
const Magicians2:string[]=make_great2(Magicians3);
console.log(Magicians3);
console.log(Magicians2)