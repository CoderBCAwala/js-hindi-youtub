const heros = ["thor", "Ironman","spiderman"]
const heros2 = ["superman", "flash", "batman"]
// heros.push(heros2)
// console.log(heros)
// console.log(heros[3][1])

// const newHeros = heros.concat(heros2)
// console.log(newHeros)

const all_new_heros = [...heros, ...heros2]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const real_array = another_array.flat(Infinity)
// console.log(real_array)


console.log(Array.isArray("charan"))

console.log(Array.from("charan"))
console.log(Array.from({name: "charan"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))