my_array = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

for (let i = 0; i < my_array.length; i++) {
    const word = my_array[i];
    if (word.length > 4 && word == word.toLowerCase()) {
        console.log('long and lowercase')
    } else if (word.length > 4) {
        console.log('long')
    } else if (word == word.toLowerCase()) {
        console.log('lowercase')
    } else {
        console.log(word)
    }
}

//Revisit with way to reduce code