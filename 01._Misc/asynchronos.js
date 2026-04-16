// Javascript is single-thread, everything runs in the main thread

// examples of blocking operations
// network, database, file handling, hardware, user inputs


//solution 1: callback functoins

//calback hell, pyramid of doom

// solution 2: promises

//pending, fulfilled
//resolved, rejeced

// problems: nested promises

// Solution 3 - async and await (just uses promises under the hood)



console.log()
new Promise((resolve, reject) => {
    setTimeout(() => {

        try {
            throw "oh no"
            resolve("Everything went well");
        } catch (error) {
            reject(error);
        }

    }, 200)
})
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage))




/* Assignment 
 
Create a promisified function called myPromis 
that is a function that returns a promise


*/


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Something bad")
                resolve("It went through!!");
            } catch (error) {
                reject(error);
            }
        }, 3000)
    });
};


console.log(myPromise)

const success = await myPromise();

console.log(success)

