// Write a program that accepts one or more numbers as command-line arugments and prints the sum of those \
// numbers to the console.
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}
console.log(sum);