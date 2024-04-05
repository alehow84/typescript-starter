//TS spiking
console.log("Hello World!");

//Simple Types

//explicit type assignment
let catsName: string = "Suki";
console.log(typeof catsName, "typeof catsName", catsName, "catsName 1");
catsName = "Ziggy";
console.log(catsName, "catsName 2");
//implicit type assignment
let dogName = "Matilda";
console.log(typeof dogName, "typeof dogName");

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json, "this log will show type as number");
/* This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json. That is a JSON config file for customizing how some of TypeScript behaves. */
