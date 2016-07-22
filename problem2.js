var fibo = [1,2];
var temp1 = 1;
var temp2 = 2;
var temptot = 0;

for (i=1;i<=4000000;i++){
    
}

while (i < 4000000){
    temptot = temp1 + temp2;
    fibo.push(temptot);
    temp1 = temp2;
    temp2 = temptot;
    i = temptot;
}

temptot = 0;

for (i=1;i <= fibo.length;i++){
    if(fibo[i] % 2 === 0){
        temptot += fibo[i];
    }
}

console.log(temptot);