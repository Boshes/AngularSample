function fizzbuzz(){
    var i = 1;
    var result = "";
    for (i; i <=100; i++){
        if (i %3 == 0 && i%5 !=0){
            console.log("Fizz");
            result+="Fizz ";
        }
        else if (i%5==0 && i%3!=0){
            console.log("Buzz");
            result+="Buzz ";
        }
        else if (i%5==0 && i%3==0){
            console.log("FizzBuzz");
            result+="FizzBuzz ";
        }
        else{
            console.log(i);
            result+=i+" ";
        }
    }
    console.log("This is the result:" + result);
}

fizzbuzz();
