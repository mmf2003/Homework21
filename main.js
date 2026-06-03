import { curriedAdd } from "./curriedAdd.js";

console.log(curriedAdd(1)(2)(3));

const result = curriedAdd(1)(2)(3);

if (result === 6) {
    console.log("Test passed ✅");
} else {
    console.log("Test failed ❌");
    console.log("Expected: 6");
    console.log("Received:", result);
}