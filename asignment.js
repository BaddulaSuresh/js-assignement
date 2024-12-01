//How do you write a function to calculate the factorial of a number using a for loop?
function fs(n){
    let r=1;
    for(let i=1;i<=n;i++){
        r=r*i;
    }
    console.log(r);
}
fs(5);
//prime or not
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
//even numbers
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
m(1,2,3)
//reverse a string
let str = "suresh";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
//fabanacci series
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
//pattern
for(let i=0;i<=5;i++){
    let line ='';
    for(let j=0;j<=i;j++){
        line+="*";
    }
    console.log(line)
}
//Write a function that takes an array of numbers and returns the largest number using a loop.
function f(arr){
    largest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}
console.log(f([1,34,56]))
//Implement a function to count the number of vowels in a given string.
function vowel(arr){
    let vowel="aeiouAEIOU";
    let count=0;
    for(let i=1;i<arr.length;i++){
        let ch=arr[i]
        if(vowel.indexOf(ch)!=-1){
            count++;
        }
    }
    return count;
}
console.log(vowel("suresh"))
//How can a loop be used to check if a word is a palindrome?
function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("racecar")); 
//Create a function that takes an array of integers and removes duplicates using loops.
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
  //Write a loop to find the intersection of two arrays (common elements).
  function findIntersection(arr1, arr2) {
    let intersection = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
          intersection.push(arr1[i]);
        }
      }
    }
    return intersection;
  }
  
  console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
  //How do you create an object car with properties like brand, model, and year and access them to print their values?
  let object={
    brand:"Ford",
    model:"Mustang",
    year:2023
}
console.log(object.brand);
console.log(object.model);
console.log(object.year);
//How can you add properties to an empty object person and then delete a specific property?
let object1={}
object1.property="Hello";
console.log(`Property is added in object1 : ${object1.property}`);
console.log("Now Deleting the property: ")
delete object1.property;
console.log(object1);
//What approach would you use to check if a specific property exists in an object like book?
let book={
    title:"Hello Javascript",
    author:"Me",
    year:2020
}
console.log("Checking for specfic property: Like title now");
if("title" in book){
    console.log(`${book.title} is present.`);
}
else{
    console.log("Not present");
}
//How can you iterate through all properties of an object student and print their key-value pairs?
let student={
    name:"Navendra",
    age:22,
    role:"Manual Tester"
}
for(let m in student){
    console.log(`${m} : ${student[m]}`);
}
//How do you write a function that counts the number of properties in an object?
function count(obj){
    let count=0;
    for(let n in obj){
        count+=1;
    }
    return count;
}
let obje={
    string1:"name",
    string2:"name",
    string3:"name",
}
console.log(count(obje));
//How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?
et calculator={
    
    x:10,
    y:15,
    z:10,
    add(){
        return this.x+this.y+this.z;
    },
    sub(){
        return this.y - this.z;
    }

}
console.log(`Addition : ${calculator.add()}`);
console.log(`Subtract : ${calculator.sub()}`);
//What steps are involved in cloning an object user into a new object?
function cloneO(o){
    let cloneOb={};
    for(let io in o){
        cloneOb[io]=o[io];
    }
    return cloneOb;

}
let obforclone={
    name:"String",
    name1:"String",
    name2:"String",
    number1:34
}
console.log("Clone object print: ");
let clone=cloneO(obforclone);
console.log(clone);