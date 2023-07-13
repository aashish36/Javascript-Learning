const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [21, 22, 3, [42, 52, 26], 27, [26, 72, [42, 52]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aashish"))
console.log(Array.from("Bande"))
console.log(Array.from({name: "Bande"})) // interesting

let score1 = 1002
let score2 = 2002
let score3 = 3002

console.log(Array.of(score1, score2, score3));
