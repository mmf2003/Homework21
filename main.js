import { curriedAdd } from "./curriedAdd.js";
import { curriedDomain } from "./curriedDomain.js";
import { originalFunction, modifyFunction } from "./modifyFunction.js";
import { outerFunction } from "./nestedFunctions.js";


console.log('curriedAdd function result:')
console.log(curriedAdd(1)(2)(3));

const result = curriedAdd(1)(2)(3);

console.log('curriedAdd function test result:')
if (result === 6) {
    console.log("Test passed ✅");
} else {
    console.log("Test failed ❌");
    console.log("Expected: 6");
    console.log("Received:", result);
}
console.log(`\n`);
console.log('curriedDomain function result:');
console.log(
    curriedDomain("https")("example")("com")
);
console.log('curriedDomain function test result:');
function runTest(name, actual, expected) {
    if (actual === expected) {
        console.log(`${name} ✅`);
    } else {
        console.log(`❌ ${name}`);
        console.log(`Expected: ${expected}`);
        console.log(`Received: ${actual}`);
    }
};

runTest(
    "Name of test: passed",
    curriedDomain("https")("example")("com"),
    "https://example.com"
);


console.log(`\n`);
console.log('modifyFunction function result:');
const modifiedFunc =
    modifyFunction(originalFunction, 3);

console.log(
    originalFunction(4)
);

console.log(
    modifiedFunc(4)
);
console.log('modifyFunction function test result:');
function testModifiedFunc() {
    const modifiedFunc =
    modifyFunction(originalFunction, 3);

    const result = modifiedFunc(4);

    if (result === 48) {
        console.log("Test passed ✅");
    } else {
        console.log("Test failed ❌");
        console.log("Expected: 48");
        console.log("Received:", result);
    }
}

console.log(testModifiedFunc());


console.log(`\n`);
console.log('outerFunction function result:');

const res = outerFunction(2)(3)(4);
console.log(res); // Повинно повернути 24 (2*3*4)


console.log('outerFunction function test result:');
function testNestedFunc() {
    const result = outerFunction(2)(3)(4);

    if (result === 24) {
        console.log("Test passed ✅");
    } else {
        console.log("Test failed ❌");
        console.log("Expected: 24");
        console.log("Received:", result);
    }
};

console.log(testNestedFunc());