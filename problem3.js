var a = 600851475143;
var b = 2;
var c = 0;

while (a>=b){
    if(a%b === 0){
        a = a / b;
        c = b;
    }else{
        b++;
    }
}

console.log(c);