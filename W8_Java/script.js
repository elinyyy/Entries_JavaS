console.log('hi');
console.log(true);


//declaring a variable x=3
//variables must be one word no space
//must console log each time a new varialbe is shown?
//this variable is a number
var x = 2;
//a piece of text is called a string. 
//strings are written in 'quotes'
//quoteつけないとvariableとして認識される。エリンというvariableの定義を示してくださいってなっちゃう。
var myName = 'Elin';
console.log(x);
console.log(myName);

//a Boolean is a true or false value
var isHungry = true
console.log(x)
console.log(isHungry)

//re-assign variable
//"variable" = "expression"
x = x + x;
x = x + myName;
console.log(x);
//二つのxの式は代入されて答えがログされる

function FunctionName(myAge){ //this is making functions. functionなのでコンソルはしない
    var output = myAge + 1
    return output
}
var z = FunctionName(x)
console.log(z)

var myAgeNextYear = FunctionName(21)
console.log(myAgeNextYear)

function combineTwoStrings(firstWord,secondWord){
    return firstWord + ' ' + secondWord
}

var CombinedStrings = combineTwoStrings('Elin','Nakayama')
console.log(CombinedStrings)


//empty imput because the 
//using random() method in the math object
//method is another name for function
function flipCoin() { 
console.log('Flipping a coin now...')
var randomNumber = Math.random()
console.log(randomNumber)

// var y = randomNumber //reassign bc we dont always know the input
// console.log(y)

//coin flip
if (randomNumber < 0.5) {
console.log('head');
} else {
    console.log('tails');
}
return
}

flipCoin()//function call

function rollDice () {
    var randomNumber = Math.random() * 6
    console.log(randomNumber)

if (randomNumber < 1){
    console.log('1');
} else if (randomNumber < 2) {
    console.log('2');
} else if (randomNumber < 3) {
    console.log('3');
} else if (randomNumber < 4) {
    console.log('4');
} else if (randomNumber < 5) {
    console.log('5');
} else if (randomNumber < 6) {
   console.log('6');
}
return
}
rollDice()

var myNumber = 1.2
console.log( Math.floor(myNumber))

//an array
var lotteryNumbers = [23,52,643,7,68,568]
lotteryNumbers[0] = Math.random() * 100
lotteryNumbers[0] = Math.ceil( lotteryNumbers[0] )
lotteryNumbers[1] = 99
lotteryNumbers[2] = 98
console.log(lotteryNumbers)

var words = ['no','these','woods','greens','flash','clouds','mountain']
var index1 = Math.random() * 7
index1 = Math.floor(index1)

var index2 = Math.random() * 7
index2 = Math.floor(index2)
console.log( words[index1] + ' ' + words[index2] )

var place = document.getElementById('place')
console.log(place)
place.innerText = words[index1]