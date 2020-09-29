readInput = () => {
    let list = [];

    while (true) {
        let input = Number(prompt("Enter an integer (a negative integer to quit):"));

        if (!isNaN(input) && input >= 0 && Number.isInteger(input)) {
            list.push(input);
        }

        if (input < 0) {
            return list;
        }

    }
}

calAvg = list => {
    let total = 0;
    for (let number of list) {
        total += Number(number);

    }

    return Number((total / list.length).toFixed(2));
}

findMin = list => {
    let min = list.sort(function (x, y) {
        return x - y
    })[0]
    return min;
}

findMax = () => {
    let max = list.sort((x, y) => x - y)[list.length - 1]
    return max;
}

let list = readInput();
let min = findMin(list);
let max = findMax(list);
let avg = calAvg(list);

alert(`For the list ${list} the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
console.log(list, min, max, avg);