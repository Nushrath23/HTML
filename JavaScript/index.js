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
var name = 'Nush';

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
let a=6;
let a=5;//cannot redeclare

{
    let c=90;
}
console.log(c);//cannot use out of scope

a=10;//can reassign
console.log(a);

//3. const ------------
const x=90;
const x=99;//cannot re declare 

{
    const y=90;
}
console.log(y);//can not use outside the block

const r=34;
r=23;//cannot reassign
