//inserting something to the console
console.log("Web Programming");



//to print on an alert
//alert('Nushrath'); 



//to write in the doc
document.writeln('Nushrath 1');
document.write('<br>');//adding new line 
document.write('Kandy');
document.write('<h1>Hi peeps!</h1>');//adding heading style
document.write('<button>Click me</button>');//adding button



//global variable
var name1 = 'Nush';

//local variable
{
    var town="Kandy";
}


//data types
//Numbers =1,2.4,3456

//string = "Nush"

//boolean= true / false

//object
const obj={
    name: "Nush",
    age:"28",
    run: function name()
    {

    }
}
//array
const array = ["Aahil","Asjad"];


//task 1
document.write('<h1>Task 1</h1>')
document.write('<h3>Name :Fathima');
document.write('\n\n');
document.write('Nushrath');
document.write('\n\n');
document.write('Nazeer');
document.write('<br>');
document.write('<h3>Age:28</h3>');
document.write('<h3>Town:Kandy</h3>');



//task2
document.write('<h1>Task 2</h1>');
document.write('<h3>Name: Fathima Nushrath Nazeer<br>Age: 28<br>Town:Kandy</h3>');




//1. var -------------
var a="run";
var a="run-2"; //can be redeclared

{
    var b=10;
}
console.log(b); //block scope variable

a =50;
console.log(a);//reassign

//2. let -------------
let v=6;
//let v=5;//cannot redeclare

{
    let c=90;
}
//console.log(c);//cannot use out of scope

v=10;//can reassign
console.log(v);

//3. const ------------
const x=90;
//const x=99;//cannot re declare 

{
    const y=90;
}
//console.log(y);//can not use outside the block

const r=34;
//r=23;//cannot reassign




//ARITHMETIC OPERATORS 

const q=12;
const s=34;
const add=q+s;
console.log("A = ",q);
console.log("B = ",s);

console.log("A + B =",add);//1.addition(+)

const sub=s-q;
console.log("B - A =",sub);//2.subtraction(-)

const mul=q*s;
console.log("A X B =",mul); //3.multiplication(*)

const div=s/q;
console.log("B / A =",div);//4.division(/)

const mod=s%q;
console.log("B % A =",mod);//5.modulus(%)

let h=100;
h++;
console.log(h) //6.increment

let i=100;
i--;
i--;
console.log(i); //7.decrement


//COMPARISION OPERATORS 

const se=14;
const re=13;
console.log("se = ",se);
console.log("re = ",re);

console.log("Equal =", se==re);//1.equal(==)

console.log("Not Equal =", se!=re);//2. not equal(!=)

console.log("Greater than =", se>re);//3.Greater than (>)

console.log("Less than =", se<re);//4.Less than(<)

console.log("Greater than or equal =", se>=re);//5.Greater than or equal(>=)

console.log("Less than or equal =", se<=re);//6.Less than or equal(<=)


//LOGICAL OPERATOR

const u=true;
const o=false;
console.log("u=",u);
console.log("o=",o);

console.log("AND ? ", u && o); //1.AND(&&)

console.log("OR ? ", u || o ); //2.OR(||)

console.log("NOT u? ", !u);//3.NOT(!)
console.log("NOT o? ", !o);//3.NOT(!)


//FUNCTION 

function MyFunction () //function definition
{
 console.log("My name is : Nushrath");
}

MyFunction(); //Function call

//arrow  function

const myCity = () =>{
 console.log("I'm from Kandy, Sri Lanka");
}

myCity(); //arrow function call 




