var multi = [];
var total = 0;

for (i=1;i<=1000;i++){
    if (i%3 === 0){
        multi.push(i);
    }else if(i%5 === 0){
        multi.push(i);
    }
}

for(i=0;i<=multi.length;i++){
    total += multi[i];
}

console.log(total);

