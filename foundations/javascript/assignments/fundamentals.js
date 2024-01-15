
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

let(str) = "Lorem ipsum dolor sit amet" 
typeof str

let(num) = 2001;
typeof num

let(bint) = 0o0127200101272001;
typeof bint

let(bool) = false
let(bool2) = true
typeof bool
typeof bool2

undefined(undef)
typeof undef

null(null)
typeof null //(super redundant lol)

let WRX = {}
WRX[Engine] = "2.5L EJ257 H4-T"
typeof WRX

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
