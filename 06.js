// Return Something to Me!

// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

let giveMeSomething = "somthing";

function giveMeSomethings(giveMeSomething)
{
    return giveMeSomething;
}

const one = giveMeSomethings();
console.log(`${giveMeSomething} is better than nothing`);
console.log(`Bob Jane ${giveMeSomething}`);
console.log(`something ${giveMeSomething}`);