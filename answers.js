// Challenge 1 print to console HELLO WORLD
console.log('HELLO WORLD')

// Challenge 2 Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
var total = 0
for (var i = 2; i < process.argv.length; i++)
  total += Number(process.argv[i])
console.log(total)

// Challenge 3 Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lines = str.split('\n');
console.log(lines.length - 1);