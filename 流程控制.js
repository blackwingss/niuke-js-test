function fizzBuzz(num) {
    if(num%3 == 0 && num%5 == 0)
        return "fizzbuzz";
    else if(num%3 == 0)
        return "fizz";
    else if(num%5 == 0)
        return "buzz";
    else if(num == null || typeof num != "number")
        return false;
    else return num;
}
