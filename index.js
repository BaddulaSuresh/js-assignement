alert("hello a how ru you");
prompt("give ur information",10);
let m=confirm("how r u");
console.log(m);
let a=1;
while(a<=10){
console.log(a);
a++;
}
for(let i=0;i<=5;i++){
    console.log(i);
}
let l=1;
do{
    console.log("hi")
    l++;
}
while(l<=5);
let man={name:"suresh",age:21,place:"vinu"};
for(let p in man){
    console.log(p+":"+man[p]);
}
let arr=[10,20,30];
for(let value of arr){
    console.log(value);
}
function show(){
    console.log("hello");
}
show();
let b=5;
switch(b){
    case '1':
        console.log("hello")
        case '2':
        console.log("suresh")
        case '3':
        console.log("naidu")
        case '4':
        console.log("better")
        default:
        console.log("hello everyone")
}