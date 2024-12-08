for (let i = 1; i <= 100; i++) {

    let num = i;

    if (num % 3 == 0) {

        console.log(`This number:${num} is Fizz`);

    }
    else if (num % 5 == 0) {
        console.log(`This number:${num} is Buzz`);

    }
    else if (num % 3 == 0 & num % 5 == 0) {
        console.log(`this number:${num} is Fizz Buzz`);

    }
    else
        console.log(`This number:${num} is not divisible by either 3 or 5`);


}
