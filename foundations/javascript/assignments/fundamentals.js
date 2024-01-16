//The Odin Project, JS Fundamentals
//External Javascript exercises + random tasks to learn syntax

//add 2 numbers together
console.log(23+97)


//add a sequence of 6 different numbers together
console.log(2+5+12+56+44+1)

//Print the solution to the following equation: (4 + 6 +9)/ 77
//Answer should be approx 0.24675
console.log((4+6+9)/77)

//manipulation of variables
//Type this statement at the top of the script tag: let a = 10
//In the console console.log(a) should print 10
//Try the following in the console: 9 * a
//and this: let b = 7 * a (returns undefined *) and then console.log(b)
let a = 10
console.log(a)
console.log(9*a)

let b = 7 * a
console.log(b)

//try this sequence:
//Declare a constant variable MAX with the value 57
//Set another variable actual to MAX - 13
//Set another variable percentage to actual / MAX
//If you type percentage in the console and press Enter you should see a value like 0.7719

const MAX = 57
let actual = MAX - 13
let percentage = actual / MAX


//getting used to all 8 Javascript data types and typeof operator


//Strings
let str = "Lorem ipsum dolor sit amet" 
console.log(typeof str)
//Numbers
let num = 2001;
console.log(typeof num)
//Bigint
let bint = BigInt("0o0127200101272001");
console.log(typeof bint)
//Boolean
let bool = false
let bool2 = true
console.log(typeof bool)
console.log(typeof bool2)
//Undefined
console.log(typeof undef)
//Null but returns Object
let nll = null
console.log(typeof nll) //(super redundant lol)

//Engine returns Symbol, WRX returns Object
let Engine = Symbol("Engine")
let WRX ={ [Engine]: "2.5L EJ257 H4-T" }
console.log(typeof WRX)
console.log(typeof Engine)

//Object
let Human = {
    head:{
        eyes: "Brown", mouth: "Smile" , nose: "Big"
    }
,
    torso:{
        abs : true , chest : "defined"
    }
,
    arms:{
        left: false, right: true
    }
,
    legs:{
        left: true, right: true
    }
}
console.log(Human)