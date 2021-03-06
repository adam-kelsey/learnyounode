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





// Challenge 4 Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  var lines = data.split('\n').length - 1
  console.log(lines)
});




// Challenge 5 Create a program that prints a list of files in a given directory, filtered by the extension of the files.
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, data) {
  if (err) return console.error(err)
  data.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})



