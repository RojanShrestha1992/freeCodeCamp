const assert = require("node:assert/strict")
const checker = require("./index");
assert.strictEqual(
    checker.isPrime(8), false
)
assert.strictEqual(
    checker.isPrime(7), true
)
