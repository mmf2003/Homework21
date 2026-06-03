import { curriedAdd } from "./curriedAdd.js";
import { curriedDomain } from "./curriedDomain.js";



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