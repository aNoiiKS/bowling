function fizzBuzz(n:number):string {
    let result : string = '';
    for (let i : number = 1; i  < n+1; i++) {
        switch(true) {
            case (i%3 != 0 && i%5 != 0) :
                result += i.toString() + '\n';
                break;
            case (i%3 == 0 && i%5 == 0) :
                result += 'FizzBuzz\n';
                break;
            case (i%3 == 0 && i%5 != 0) :
                result += 'Fizz\n';
                break;
            case (i%5 == 0 && i%3 != 0) :
                result += 'Buzz\n'
                break;
        }
    }
    return result;
}

console.log(fizzBuzz(100));