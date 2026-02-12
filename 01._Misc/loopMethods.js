// .forEach .map .filter .sort .filter .reduce .sort .find .indexOf

// rule: use loop methods wherever possible  -  Mindre fejl og kode da du bruger det indbyggede
// rule 2: use map over forEach if you need the data afterwards  
// rule 3: only use for loops in JavaScript for finger counting- Når du skal tælle til et tal

const numbers = [1, 2, 3, 4, 5]

// double the numbers
// Vi bruger her et map så vi ikke får sideeffects - fordi vi tildeler den en ny const
const doubledNumbers = numbers.map((number) => {
    return number * 2
})


console.log(doubledNumbers);


const balloonAnimals = [
    { type: "Koala", difficulty: 5.0 },
    { type: "Dog", difficulty: 2.5 },
    { type: "Giraffe", difficulty: 1.5, istall: true }
];


//Make all the difficulty levels for the baloon animal 3.0 expect for Koala
    //Navngiv med navne der kan læses og forstås
    // AdjustedDifficultyBalloonAnimals
const upgradedBalloonAnimals = balloonAnimals.map((animal) => {
    
    if (animal.type !== "Koala") animal.difficulty = 3.0;
    return animal;

});


//Spread operator ...baloonAnimal tager alle attriutter og maser ind i et nyt objekt
const difficultyAdjustedBalloonAnimalsOneLine = balloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimal.type !== 'Koala' ? 3.0 : balloonAnimal.difficulty,
    ...balloonAnimal
}))

console.log()

numbers.map((element, index, originalArray) => console.log(element, index, originalArray))

// 