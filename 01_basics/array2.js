const marvelHeroes = ["IronMan", "SpiderMan", "Thor", "Hulk"]
const dcHeroes = ["SuperMan", "BatMan", "Joker", "SuperWoman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

// const heroes = [...marvelHeroes, ...dcHeroes]
// console.log(heroes);

const complexArray = [1, 2, 3,[4, 5, 6,[7, 8]]]
const simplify = complexArray.flat(3) // can also use "Infinity"
// console.log(simplify);

// console.log(Array.isArray("Mudassir"))
// console.log(Array.from("Mudassir"))


let score1 = 300
let score2 = 400
let score3 = 500

const merge = Array.of( score1, score2,score3)
console.log(merge);



