var sum = 0;
for (var number = 0; number < 1000; number++) {
    if (number % 3 == 0 || number % 5 == 0) {
        sum += number
    } 
}
console.log(sum);