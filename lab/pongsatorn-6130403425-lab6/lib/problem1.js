let numberArr = [];
Outer: while (true) {
    let number = prompt('Enter a positive integer', '');
    let numCheck = parseFloat(number);
    let numCheck2 = parseInt(number);
    if (number > 1 && numCheck - numCheck2 == 0) {
        nextPrime:
        for (let i = 2; i <= number; i++) {

            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            numberArr.push(i);
        }
        alert(`For n = ${number} prime numbers are ${numberArr}`)
        break Outer;
    }
    else {
        continue;
    }
}

