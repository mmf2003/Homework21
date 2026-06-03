import { curriedAdd } from "./curriedAdd.js";
import { curriedDomain } from "./curriedDomain.js";
import { originalFunction, modifyFunction } from "./modifyFunction.js";



console.log(curriedAdd(1)(2)(3));

const result = curriedAdd(1)(2)(3);

if (result === 6) {
    console.log("Test passed ✅");
} else {
    console.log("Test failed ❌");
    console.log("Expected: 6");
    console.log("Received:", result);
}

console.log(
    curriedDomain("https")("example")("com")
);

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

const modifiedFunc =
    modifyFunction(originalFunction, 3);

console.log(
    originalFunction(4)
);

console.log(
    modifiedFunc(4)
);

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