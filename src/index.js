/*const functions = require("./function")*/
import *as fun from "./function.js"
console.log("Hello world")
//import{add_number} from "./function"
//single line comment
/*
multiline comment
*/
//ES6

var myVariable = "hi"
const PI = 3.14
let random = 9950
console.log(random)

{
    //new block 
    
}
{
    var myVariable = "bye"

}
console.log(myVariable)
{
    let random = "im a string now"
    console.log(random)
}
console.log(random)

//Numbers 
const n = 100
const x =28.3
console. log(typeof (x))//can use 3amaliat

//String using"""''
const myString = "random"
const myString1 = 'random'
const special = `the value is ${x}`//template string
console.log(typeof myString1)
console.log(special)
//boolean types:
const b1 = true
const b2 = false

// undefind & null
const v1 =null
const v2 = undefined

const age = 20
console.log(age)//task 1
let game = 9
console.log (game)//task2

const v=` j'ai ${age} ans et mon score et ${game} `
console.log(v)//task3
const js = true
console.log(js)//task4
console.log(typeof(age))
console.log(typeof(game))
console.log(typeof(js))


//operation:

//addition:+

let n1 =10 
let n2 =10
console.log(n1 + n2)

//substract
console.log(n1-n2)

//multiplication 
console.log(n1*n2)

//division:/
console.log(n1/n2)
//modular division :%
console.log(n1%n2)
//power
console.log(n1 ** n2)

//comparision operator:
//rgreat then
console.log(n1>=n2)
//less then:<
console.log(n1<= n2)
//equal
console.log(n1==n2)
//not equal
console.log(n1!= n2)

//logial operition 
//logical and :&&
console.log(true && true)

//logical or  ||
console.log(true || false)
//logical not
console.log(!false)

//conditionals:
if (true ){
    console.log("this is true ")
}if (false) {
    console.log("tis a false value")
    
} else {
    console.log("undefind maybe?")
    
}

console.log(10=="10")// urdha l type ta3 wahd fihm

console.log(10==="10")//maybdelch type

//switch case
let day  ="sunday"
switch(day.toLowerCase()){
    case "sunday":
        console.log("sunday")
        break
    case "thersday":
        console.log("thersday")
        break
    case "monday":
        console.log("monday")
        break
    default:
        console.log("no idea")
}

//loops

for(let i =0 ; i<5 ; i++){
    console.log(i)
}
let i=0
while(i!=5){
    console.log(i)
    i++
}
let e=0
do{
    console.log(e)
    e++
}while(e!=5)
i=0
do{
    console.log(i)
    i++
}while(i!=5)
   
let c=1
 while (true)   {
    if (c==7){
        c++
        continue
        
    }
    if(c % 7===0){
        console.log(c)
        break
    }
    c++

 }

 const tab=["ronaldo" ,7]
 console.log(tab)
 console.log(tab[1])
 tab.push("messi")
 console.log(tab)
 console.log(tab.pop())
 console.log(tab)
tab[5]="no"
console.log(tab)

const o = {"name": "rihab", "hobbies":["read","sport"]}
console.log(o)
//exercice
function calculerTarifCinema(age, jourSemaine) {
    let tarif = 10; // Tarif standard

    // Votre code ici
    // Utilisez des conditionnels (if, else if, else) pour appliquer les réductions appropriées
    if(age<12|| age >=65){
        const discount= tarif *0.5
        tarif=tarif-discount;
       
    }if(jourSemaine==="Mercredi"){
        const discount= tarif *0.2
        tarif=tarif-discount;
    }


    return tarif;
}

// Testez votre fonction avec différents scénarios
console.log(calculerTarifCinema(25, "Lundi"));    // Devrait afficher 10
console.log(calculerTarifCinema(10, "Mercredi")); // Devrait afficher 4 (5€ après réduction enfant, puis 4€ après réduction mercredi)
console.log(calculerTarifCinema(70, "Jeudi"));    // Devrait afficher 5

function reverseList(list){
    let tempVal = [];

    // use for loop to reverse the list.
    /*for(var i=list.length-1 ;i<=0;i--){
        tempVal.push(list[i])
        console.log("he")
        
    }*
    



    return tempVal
}
console.log(reverseList([5,4,3,2,1]))*/
for(let i=0; i<list.length/2; i++)
{
  tempVal=list[i]
  list[i]= list[list.length-i-1]
  list[list.length-i-1]=tempVal
}
return list
}
console.log(reverseList([5,4,3,2,1]))

const empty ={}
empty["format"]="json"
empty["key-2"]="some value"
delete empty["key-2"]
empty.functionName=()=> console.log("say hi") 
console.log(empty)
console.log(empty["format"])
console.log(empty.format)
empty.functionName()

let list=["a","b","c","d","e"]
console.log(list[2])
list.push("f")
console.log(list)
/*const book={}
book["title"]="c++ book "
book["author"]="name"
book["publication"]="200"
book["chapiter"]=[5]
console.log(book)*/
const book ={
    "title":"c++",
    "author":"ken thom",
    "pub-year":2000,
    "chapiter":["intro","summery"]
}
book.summery = ()=> console.log(`title:${book.title} author:${book.author}`)
book.summery()

//function one perma, no return
/*function hello(){
    console.log("hello world")
}
function helloname(name){
console.log(`hello world ${name}~~~~~`)
}
helloname(pppp)
function helloNameReturn(name){
    return`hello world,${name}~~~`
}*/
//ES6 Arrow fun
const afun=(name)=>{
    console.log(`hello world,${name}~~~~`)
}
afun("aaaa")
//modules=library
//console.log(functions.add(10,3))
console.log(fun.add_number(3,2))
//filter map reduce //callback
const number =[1,2,3,4,5,6,7,8]

const even = number.filter((x)=> x%2 ===0)
console.log(even)
const mappedList = number.map((x)=>x*2)
console.log(mappedList)
//exercise
