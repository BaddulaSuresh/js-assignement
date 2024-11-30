function fs(n){
    let r=1;
    for(let i=1;i<=n;i++){
        r=r*i;
    }
    console.log(r);
}
fs(5);
function s(n){
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==2)
    console.log("prime")
else
confirm.log("not prime")
}
s(3);
for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}
function m(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
   sum=sum+arr[i];
}
console.log(sum)
}
m([1,23,3,4])
let s=["suresh"];
let rev='';
for(let i=s.length-1;i>=0;i--){
    rev=rev+s[i];
}
console.log(rev)
function fab(na){
let a=0,b=1;
for(let i=1;i<=na;i++){
    console.log(a)
    let next=a+b;
    a=b;
    b=next;
}

}
fab(10)
for(let i=0;i<=5;i++){
    let line ='';
    for(let j=0;j<=i;j++){
        line+="*";
    }
    console.log(line)
}