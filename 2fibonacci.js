function isFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let a = 0;
    let b = 1;
    let c = a + b;

    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

const number = 21; 
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}