// alert("Hello world 12345");
// console.log("Hello world 12")
// document.write("Hello word")
// // Number Datatype
// console.log(20.6)
// console.log(typeof(20))
// document.write(20)
// document.write(typeof(20))

// var radius = 5 **2;
// var height = 3;
// var pi = 3.14;
// var volume= (pi*radius*height);
// console.log(volume);
// pi = 22/7
// r = 5
// h = 3
// v = pi * (r**2) * h
// v = pi * (r*r)*h
// console.log(v)

// //MATH LIBRARY
// console.log(Math.sqrt(16));
// console.log(Math.pow(5,2));
// console.log(20/3);
// console.log(20%3);
// console.log(Math.floor(20/3));
// console.log(Math.min(-10,5,12.5));
// console.log(Math.max(-10,5,12.5));

//  // STRINGY
// words='Tayo "The Disc Jockey" is here';
// console.log(words)
// words="it's a boy"
// console.log(words)

// It's Tyler "The Disc Jockey" that is coming
// //STRING OPERATORS
// CONCATENATION OPERATORS(+)
// words="It's " + 'Tyler "The Disc Jockey" that is coming';
// console.log(words)
// x="Maleek";
// y="Femaleek";
// console.log(x + " " + y)
// ESCAPE STRING OPERATORS(/)
// words="It's Tyler \"The Disc Jockey\" that is coming";
// console.log(words);
// words='It\'s Tyler "The Disc Jockey" that is coming';
// console.log(words);
// TEMPLATE STRING OPERATOR(`)
// words=`It's Tyler "The Disc Jockey" that is coming`;
// //STRING METHODS
// var person = "John Smith Doe";
// console.log(person);
// console.log(person.length);
// console.log(person.toLowerCase());
// console.log(person.toUpperCase());
// console.log(person.charAt(13));
// console.log(person.includes("John"));
// console.log(person.includes("Malerika"));
// console.log(person.slice(0,4));
// console.log(person.slice(5,10));

// var p = prompt("Enter Principal Value");
// var r = prompt("Enter the Rate Value");
// var t = prompt("Enter Time in Month");

// var i = (p * r * t) /100;

// alert("The interest of" + p + "at the rate of" + r + "% within" + t + "months will be" + i);
// alert(`The interest of ${p} at the rate of ${r} within ${t} months will be ${i}`)

// ASSIGNMENT
// AREA OF CLYLINDER
// FORMULAR= A=2*PI*r*h + 2*PI*r**r*
// var r = prompt("Enter the radius Value");
// var h = prompt("Enter the height Value");
// var pi = Math.PI

// var area = (2*pi*r*h) + (2*pi*(r*r));
// alert(`The area of a cylinder where radius is ${r} and height is ${h} will be ${area}`)

// VOLUME OF CYLINDER
// FORMULAR = V = pi*r*r*h
// var r = prompt("Enter the radius Value");
// var h = prompt("Enter the height Value");
// var pi = Math.PI
// var volume = (pi*r*r*h);
// alert(`The volume of cylinder where radius is ${r} and height is ${h} will be ${volume}`);

// CONVERTING KILOMETERS TO MILES
// FORMULAR = KM = M*KM
// var m = prompt("Enter the mile value");
// var k = prompt("Enter the kilometer value");
// var km =(m*k);
// alert(`The mile is ${m} and the kilometer ${k} it will be ${km}`)

// CONVERTING TEMPERATURE FROM FAHRENHEIT TO CELSIUS
// FORMULAR = T = (F-32)*5/9
// var F = prompt("Enter the Fahrenheit value -32*5/6");
// var T =(F-32)*(5/6);
// alert(`The fahrenheit of temperature is ${F} with ${T}`);

// CALCULATING THE QUADRATIC FORMULA FOR 3 GIVEN NUMBER(ALMIGHTY FORMULA)
// var a = prompt("Enter value of a","");
// var b = prompt("Enter value of b","");
// var c = prompt("Enter value of c","");
// var root = b**2-4*a*c;
// let root1,root2;
// if (root > 0)
//     root1 = -b+(Math.sqrt(root))/(2*a);
//     root2 = -b-(Math.sqrt(root))/(2*a);
//     if (root == 0);
//     root2 = root1 = -b/(2*a);
// alert(`The roots of the equation is :${root1} and :${root2}`)

//  THE SURFACE ARECALCULATEA OF A SPHERE
// var pi = Math.PI;
// var r = prompt("Enter radius value")
// var sphere = 4*pi*r*r;
// alert(`The area of a sphere is ${r} and will be ${sphere}`)

// CALCULATE THE VOLUME OF A SPHERE
// var r = prompt("Enter the volume of a sphere");
// var pi = Math.PI;
// var volume = 4/3*pi*r**3;
// alert(`The volume of sphere is ${r} will be ${volume}`)

// BODY MASS INDEX (BMI) CALCULATOR
// var w = prompt("Enter the weight value")
// var h = prompt("Enter the height value")
// var BMI = w*h;
// alert(`The body mass is ${w} with the height of ${h} will be ${BMI}`)

// VAT CALCULATE
// var g = prompt("Enter the goods price");
// var r = prompt("Enter the rate value");
// var vat = (g*r)/100;
// alert(`The goods is ${g} and rate is ${r} and will be ${vat}`)

// PERCENTAGE CALCULATION
// var ai = prompt("Enter the amount of items")
// var p = prompt("Enter the percentage value")
// var pc = ai*p;
// alert(`The amount of items is ${ai} and the percentage ${p} will be ${pc}`)



// //STRING INDEXES

// console.log(person[13])



// class work
// words="Micheal's Dad is a Police officer";
// console.log(words);
// words="Yetunde's Family will be meeting with \"The Samsom\" Family to discuss the engagement";
// console.log(words);
// words="We will be visiting Daniel's Father for contract";
// console.log(words);
// words='Moses said that "He will be in church this sunday"';
// console.log(words);
// words='What\'s the difference between "Mike" and "Mark"';
// console.log(words);


//// BOOLEAN
// true and false

//// Logical Operators
// and gate(&&)
// true && true
// true

// true && false
// false

// false && true
// false

// false&&false
// false
// or gatet(||)
// true||true
// true

// true||false
// true

// false||true
// true

// false||false
// false
// not gate(!)
// !true
// false

// !false
// true

// COMPARISON OPERATOR
// > Greater than
// 2>5
// false
// 5 > 2
// true
//< Less than
// 2 < 5
// true
// 5 < 2
// false
// >= Greater than or equal to
// 5 >= 2
// false 
// 5>=5
// true 
// "a" <"A"
// true
// "A"> "a"
// false
// <= Less than or equal to
// 2 >=5
// false
// 5>=5
// true
// == Equal to
// 5==5
// true
// 5=="5"
// true
//!= Not Equal to
// 5!=5
// false
// 2!=5
// true
//=== Stricky equal to
// 5===5
// true
// "A"=="a"
// true
//!== Not sticky equal to
// 5!==5
// false
// 5!=="5"
// true

// ARRAY DATASTRUCTURES

// var fruit1 = "Mango";
// var fruit2 = "Pineapple";
// var friut3 = "Apple";
// var friut4 = " Tomatoes"
// var friut5 = " Cherry";
// var friuts = new Array("Mango","Pineapple","Apple","Tomatoes","Cherry");

// new way of doing it
// var friuts = ["Mango","Pineapple",["John",342],[Apple","Tomatoes","Cherry"];

// var fruits = ["Mango","Pineapple",["John",342],"Apple","Tomatoes","Cherry"];
// console.log(fruits);

// fruits.push("Ifeanyi");
// console.log(fruits);
// fruits.push("Opeyemi");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("Michael");
// console.log(fruits);

// //OBJECT DATATYPE
// var person = {
//     firstname: "John",
//     middlename: "Doe",
//     lastname: "Joel",
//     age: 300,
//     subject: ["Math","English","ICT"],
// }


// var students = [
//     {
//         firstname: "Maleek",
//         lastname: "Akeem",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "Math",
//         height: 5.2,
//     },
//     {
//         firstname: "Hope",
//         lastname: "Akpan",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "English",
//         height: 5.2,
//     },
//     {
//         firstname: "Ifeanyi",
//         lastname: "Okoro",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "Math",
//         height: 5.2,
//     },
//     {
//         firstname: "Ray",
//         lastname: "Friday",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "ICT",
//         height: 5.2
//     },
//     {
//         firstname: "Emeka",
//         lastname: "Ode",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "Math",
//         height: 5.2
//     },
//     {
//         firstname: "IK",
//         lastname: "Okey",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "English",
//         height: 5.2
//     },
//     {
//         firstname: "Gredy",
//         lastname: "Sunday",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "ICT",
//         height: 5.2
//     },
//     {
//         firstname: "Innocent",
//         lastname: "Offor",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "ICT",
//         height: 5.2
//     },
//     {
//         firstname: "Mary",
//         lastname: "Opeyemi",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "ICT",
//         height: 5.2
//     },
//     {
//         firstname: "Musa",
//         lastname: "Saleem",
//         subject: ["Math","Englis","ICT"],
//         FavSubject: "English",
//         height: 5.2
//     }
// ]


// // CONTROL FLOW
// 1) conditional statement
// a) if
// var pname = prompt("Enter your name");
//  if (pname == "Maleek") {
//     alert("Welcome" + name)
// }
// b) if else
// var pname = prompt("Enter your name");
// if (pname.toLowerCase() == "maleek" || pname.toLocaleLowerCase() == "Ifeanyi"){
//     alert("Welcome" + pname);
// } else {
//     alert(pname + "  is not allowed");
// }

// var username = prompt("Enter your username");
// var password = prompt("Enter your password");
// if (username == "John" && password == "Doe123"){
//     alert("Welcome your log in detail is correct " + username  + password);
// }
//  else {
//     alert(username + "is incorrect try again")
// }

// var password = prompt("Enter your password");
// if (password.toLowerCase() == "Doe123"){
//     alert("Welcome your password is correct" + password);
// } else {
//     alert(
//         password + "is incorrect try again"
//     )
// }

// c) if else if else
// var pm = prompt("How much do you have in your wallet");
// if (pm >= 1000){
//     alert("Go to Okokomaiko");
// } else if (pm >= 400){
//     alert("Go to Mile2");
// } else if (pm >= 300){
//     alert("Go to Orile");
// } else {
//     alert("Oga stay at home");
// }

// var grade = prompt("Enter your waec score")
// if (grade==101){
//     alert("Not recognise");
// }else if (grade >= 80 & grade <= 100){
//     alert("Your grade is A1");
// } else if(grade >=70 & grade <=79 ){
//     alert("Your grade is B2");
// } else if(grade >=65 & grade <=69){
//     alert("Your grade is B3");
// } else if(grade >=60 & grade <= 64){
//     alert("Your grade is C4");
// } else if(grade >=55 & grade <=59){
//     alert("Your grade is C5");
// } else if(grade >=50 & grade <=54){
//     alert("Your grade is C6");
// } else if(grade >=45 & grade <= 49){
//     alert("Your grade is D7");
// } else if(grade >=40 & grade <=44){
//     alert("Your grade is E8")
// } else if(grade >=0 & grade <=39){
//     alert("Your grade is F9");
// } else{
//     alert("invalid")
// }

// d) tenary Operators(?:)
// (condition)? expression1 : expression2
    //  var person = "Jack";
    //  (person == "Jack") ? alert("welcome"): alert("unknown");

// e) switch operator
// var entry = prompt("Enter action:");
// switch(entry) {
//     case "x":
//         alert("pass");
//         break;
//     case "a":
//         alert("shot");
//         break;
//     case "s":
//         alert("cross");
//         break;
//     case "w":
//         alert("Through Pass");
//         break;
//     default:
//         alert("Unknown")

// }

// var entry = prompt("Enter days of the week");
// switch (entry) {
//     case "1":
//         alert("Monday");
//         break;
//     case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Saturday");
//         break;
//     case "7":
//         alert("Sunday");
//         break;
//     default:
//         alert("incorrect entry")
// }
// f) break
// g) continue
// 2) loop
// (1) for
// for (let i = 1 ; i <=5; i ++){
//     console.log("Hello world "+ i);
// }

// var students = ["Maleek","Ifeanyi","Hope","Abiola","Obi"];
// for (s=0; s<=5;s++){
//     console.log(students[s]);
// }

// var students = ["Maleek","Ifeanyi","Hope","Abiola","Obi"];
// for (s=0; s < students.length; s++){
//     console.log(students[s]);
// }
// (2) for in

// var students = ["Maleek","Ifeanyi","Hope","Abiola","Obi"];
// for (s in students){
//     console.log(students[s]);
// }

// var person = {
//     firstname:"Maleek",
//     lastname: "Akeem",
//     subject: ["Math","English","ICT"],
//     FavSubject: "Math",
//     height: 5.2
// }
// for (p in person){
//     console.log(person [p])
// }
// (3) for Of
// var students = ["Maleek","Ifeanyi","Hope","Abiola","Obi"];
// for (s of students){
//     console.log(s)
// LOTTORY
// var randNumbers = [];
// for (var i = 0; i < 6; i++){
//     var rand = Math.floor(Math.random() * 10) + 1;
//     console.log(rand);
//     if (randNumbers.includes(rand)) {
//         continue;
//     } else {
//         randNumbers.push(rand);
//         console.log(randNumbers);
//     }
// }
// }
// (4)while
// init
// while (condition) {
//     code block
//     inc/dec
// }
// var x = 1;
// while (x < 5) {
//     console.log("while Loop",x);
//     x++;
// }

// (5)do while

// init
// do {
//     code block;
//     inc/dec;
// } while (condition);
// y=1;
// do {
//     console.log("Do while loop",y);
//     y++;
// }while (y < 5); 
// LOTTORY
// var randNumbers = [];
// while (true) {
//     if (randNumbers.length == 6){
//         break;
//     }
//     var rand = Math.floor(Math.random() * 10) + 1;
//     console.log(rand);
//     if (randNumbers.includes(rand)) {
//         continue;
//     } else {
//         randNumbers.push(rand);
//         console.log(randNumbers);
//     }
// }
// REFACTORLING METHOD
// var randNumbers = [];
// while(randNumbers.length < 6) {
//     var rand = Math.floor(Math.random() * 10) + 1;
//     if (!randNumbers.includes(rand)){
//         randNumbers.push(rand);
//     }
// }
//  console.log(randNumbers);
// var randNumbers = [];
// while(randNumbers.length < 6) {
//     var rand = Math.floor(Math.random() * 90) + 1;
//     if (!randNumbers.includes(rand)){
//         randNumbers.push(rand);
//     }
// }
// console.log(randNumbers)
//         var userguesses = [];
//         while (userguesses.length < 6) {
//             let guess = prompt(
//                 `Your Entries are: ${userguesses}\n` +
//             "Guess a Number");
//             if (guess > 90 || guess <=0){
//                 alert (`${guess} is not between 1 and 90`);
//                 continue
//             }
            
//             if (userguesses.length >= 2 && guess.toLocaleUpperCase() == "Q"){
//                 alert(`Your Entries are: ${userguesses}`)
//                 break;
//             }
//                 if (isNaN((guess))) {
//                     alert(`${guess} is not a number`);
//                     continue;
//                 }
//                 if (userguesses.includes(guess)) {
//                     alert(`${guess} already exists`);
//                     continue;
//                 } else {
//                     userguesses.push(guess);
//                 }
//         }
//         let win = [];
//          for (g of userguesses) {
//             if (randNumbers.includes(Number(g))){
//                 win.push(g);
//             }
//          }
//          if (win.length == 1){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got one correctly`)
//          } else if (win.length == 2){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got two correctly`)
//          }else if (win.length == 3){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got three correctly`)
//          }else if (win.length == 4){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got four correctly`)
//          }else if (win.length == 5){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got five correctly`)
//          }else if (win.length == 6){
//             alert(`Lucky Numbers: ${randNumbers} \n User Entries: ${userguesses} \n Winnings: ${win} \n You only got six correctly`)
//          }else{
//             alert("You win nothing")
//          }
    
    
    
    
    
 
// // 3) function

//(1) Declaration function
// function functionName() {
//     XPathExpression;
// }
// function greet(){
// var person = prompt("Enter your name");
// alert(`Welcome, ${person}`);
// }
// greet();

// function addition(x,y){
// console.log(x+y);
// }
// addition(10,20);
// addition(200,100);
// addition(400,600);

// function addition(x=0,y=0){
//     console.log(x+y);
// } 
// addition(y=10);
// or
// addition(x=60);

// function addition(x=0,y=0){
//     console.log(x+y);
// }


// addition(80);

// function substraction(x=0,y=0){
//      console.log(x-y);
// }
// substraction(400,20);
// substraction(55,2);

// function multiplication(x=0,y=0){
//     console.log(x*y);
// }
// multiplication(30,80);
// multiplication(100,50);

// function division(x=1,y=1){
//     console.log(x/y);
// }
// division(x=20);

//  function addition (x=0,y=0){
//     ans = (x+y);
//     return(x+y);
//  }
//  console.log(addition(50,70))
// function addition(x=0,y=0){
//     return(x+y);
// }
// console.log(addition(2000,800))

// (2) Annonymous function
//  let variableName(){
//     expression;
//     return;
//  }
//  variableName(argument);
// var add= function(x,y){
//     ans = x+y;
//     return ans;
// }
// console.log(add(300,600))

// (3) Arrow function
// let variableName()=> expression

// var add1 = (x,y)=> x+y;
// console.log(add1(30,80));

// let add2 = (x,y)=>{
//     return x+y;
// }
// console.log(add2(80,20))
  
// Anonymous Argument
// function add(){
//     let x = 0;
//     for (a of arguments){
//     x += a;
//     }
//     return x;
// }
// console.log(add(300,4000,8000,5000))

// Recursive function
//   function ussd(){
//     let uss = prompt("Enter USSD Code");
//     if (uss == "123"){
//         alert("Welcome");
//     } else {
//         let retry = prompt(
//             "Do you want to try again \n" +
//             "1. yes\n"+
//             "2. no\n"
//         );
//         if (retry == "1") {
//             return ussd()
//         }
//     }
//   }
//   ussd();
// const ussd = prompt("Enter USSD Code")
// if(ussd == "301"){
//     mainmenu();
// } else {
//     alert("Invalid ussd code");
// }
// function mainmenu(){
//     let trans = prompt(
//         "1. Data\n"+
//         "2. Airtime\n"+
//         "3. Transfer\n"+
//         "0. mainmenu"
//     );
//     if (trans == "1"){
//         alert ("Data");
//     }else if(trans == "2"){
//         airtime();
//     }else if(trans =="3"){
//         alert("transfer");
//     }else if(trans == "0") {
//         mainmenu(); 
//     }else{
//         alert("Invalid input");
//         mainmenu();
//     }
// }
//  function airtime(){
//     var tel = prompt ("Enter phone number");
//     if (tel.length == "11" && isNaN(tel) && (tel.startsWith("070") || tel.startsWith("080") || tel.startsWith("081") || tel.startsWith("090"))){
//         amoount(tel);
//     }else{
//         alert(tel + "is invalid");
//         airtime();
//     }
//  }

//  function amount(tel){
//     let amt = prompt(`Enter Amount to be credited on ${tel}`)
//     if (!isNaN(amt) && amt >= 50 && amt <= 1000){
//         alert(`${tel} has been credited with #${amt}`);
//     } else{
//         alert("Invalid Amount entered");
//         amount(tel)
//     }
//  }


// // 4) error handing
// You can also use if statement
// var x = Number(prompt("Enter the value of x"))
// var y = Number(prompt("Enter the value of y"))
// if (isNaN(x) || isNaN(y)){
//     console.log("The values you enter are not numbers");
// } else {
//     if (y== 0){
//         console.log("zero division error");
//     }else{
//         div = x / y;
//         add = x + y;
//         sub = x - y;
//         mul = x * y;
//         console.log(add)
//         console.log(sub)
//         console.log(div)
//         console.log(mul)
//     }
// }
 

// try{
//     alertt("Welcome to our page");
// } catch(e){
//     alert(e);
// }


// try{
//     var x = Number(prompt("Enter the value of x"));
//     var y = Number(prompt("Enter the value of y"));
//     if (y == 0) throw("you cannot divide by 0");
//     console.log(x/y);
// } catch(err){
//     alert(err);
// }

            //  OOP OBJECT ORIENTED PROGRAMMING 

// class Animal{
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }

//     greet(){
//         return `My name is ${this.name} and I make ${this.sound} sound`;
//     }
// }
// const animal1 = new Animal("Bingo,Bark");

// class Formula{
//     constructor(){ 
//         this.pi = 22/7;
//     }

//     areaofcylinder(r, h){
//         this.ans = (2 * this.pi * r * h) + (2 * this.pi * (r*h));
//         return this.ans;
//     }

//     simpleinterest(p , r, t){
//         this.i =(p, t , t)/100
//         return this.i;
//     }
// }
// const formula = new Formula();
 
// class player {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }

//     Intro(){
//         return`Hey this is ${this.name},my fighting strenghth is on ${this.power}`;
//     }
// }

// class Actor extends player {
//     kick(){
//         return`${this.power} activated`;
//     }
// }

// const Player = new player("Jackie Chan","Funny Kick");
// const actor = new Actor("Jet-Li","Flying Kick");


// BOM  BROWSER OBJECT MODEL
// DOM DOCUMENT OBJECT MODEL
// (1) sELECTORS
// getElementsByTagName()
// var h1 = document.getElementsByTagName("h1")
// [0]
// var para1 = document.getElementsByTagName("p")
// [0];

// // getElementsByClassName()
// var dog1 = document.getElementsByClassName("dog")
// [0]
// var dog 2= document.getElementsByClassName("dog")
// [1] 

// getElementById()
// var cat = document.getElementById("cat")

// querySelector()
// var dog = document.querySelector(".dog")

// querySelectorAll()
// var dog = document.querySelectorAll(".dog")
// [1]

// Manipulator using javascript to Manipulate html & css
// var h1 = document.querySelector("h1")
// h1.style.color = "red";
// h1.style.backgroundColor = "green";
// h1.setAttribute("title","Where is hope");
// var p = document.querySelector("p");
// p.textContent = "   John"+
// "is here"

// Events
// let h1 = document.querySelector("h1");
// h1.addEventListener("click",(e)=>{
//     e.target.innerText = "John is here";
// });
// let h1 = document.querySelector("h1");
// h1.addEventListener("mouseleave",(e)=>{
//     e.target.innerText = "John is here";
// });
// let h1 = document.querySelector("h1");
// h1.addEventListener("dlbclick",(e)=>{
//     e.target.innerText = "John is here";
// });

// Nav Bar Toggle
var nav = document.querySelector("nav");
var ham = document.querySelector("#ham");

ham.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.classList.toggle("show");
    if (!nav.classList.contains("show")){
        e.target.innerText = "\u2630";
    }else {
        e.target.innerText = "\u00D7";
    }
}
);

// Todo List
// var input = document.querySelector("input");
// var btn = document.querySelector("button");
// var ol = document.querySelector("ol");

// btn.addEventListener("click",(e)=>{
//     let task = input.value;
//     if (task !=""){
 //      let li = document.createElement("li");
//      li.append(task);
//      ol.append(li);
//      input.value = "";
//     } else {
//         alert("Please enter a task")
//     }
// }); 

