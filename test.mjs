import HashMap from "./hash-maps.mjs"
const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.entries());
console.log(test.get("banana"))
test.remove('carrot');
console.log(test.entries());
console.log(test.length());
console.log(test.keys());
console.log(test.values());
