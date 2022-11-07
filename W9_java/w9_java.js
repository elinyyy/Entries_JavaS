// console.log('hello');

// var messageElement = document.getElementById('message')
// console.log(messageElement)
// messageElement.innerText = 'Hi'
// messageElement.style['color'] = 'green'
// document.body.style['background']= 'orange'
// messageElement.classList.add('big')

/* 
Note to self:this is multi-line comment
*/

// var skyIsBlue = true
// console.log(skyIsBlue)


var leapYear = false
var year = 2020
var month = 'November'
var day = 'Tuesday'

var now = new Date ()
year = now.getFullYear
console.log(year)


// year = 2 * (2021 + 1) * 36 / 72
// year = year + 1
// console.log(year,month,day,leapYear)

// var date Sentence = 'It is ' + day + ' in ' + year
// console.log(dateSentence)

var firstName = 'Elin'
var lastName = 'Nakayama'
var middleName = 'Noel'
var myName = 'My name is ' + firstName + ' ' +middleName + ' ' + lastName
var myNameElement = document.getElementById('Name')
myNameElement.innerText = myName
console.log(myName)

// var time = {
//     leapYear:false,
//     year:2020,
//     month:'November',
//     day:'Tuesday'
// }

// console.log(time.leapYear)

var myDate = new Date();
    var myDay = myDate.getDay();

    // Array of days.
    var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    document.write("Today is " + weekday[myDay]);
    document.write("<br/>")

    // get hour value.
    var hours = myDate.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = myDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var myTime = hours + " " + ampm + " : " + minutes + 
        " : " + myDate.getMilliseconds();
    document.write("\tCurrent time is " + myTime);
    // var time = document.getElementById('time')

// function dayOfTheWeek() {
//     console.log('What day is it today?')
//     var days = [Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday]
//     var randomNumber = Math.random()

//     console.log(days)

//}

//array
var colors = ['navy','darkkhaki','mistyrose','#rosybrown']
colors[0] = 'lightcyan' //reassigned color
colors.push('cyan')//adds another, 
console.log(colors.length)//tells the length of the array
console.log(colors)//see the whole array

var myColor = colors[3]
console.log(myColor)

document.body.style['background']=myColor
document.body.style['background']=colors[4]//both ok
//cmd + d lets you select the next matching word, directly type and change the words simultaneously

function changeColor() {
    //random = 0 - 0.99999....
    var rand = Math.random()
    rand = rand * 4 //１以下のものをかけてるので４以上には到達しない
    rand = Math.floor(rand)
    console.log(rand) 
    var randomColor = colors[rand]
    console.log(randomColor)
    document.body.style['background']=randomColor

    var now = new Date ()//keep name now bc its in function.var scope
    var seconds = now.getSeconds()
    var barElement = document.getElementById('bar')
    barElement.style['width'] = seconds * 3 + 'px'
    console.log(seconds)
}

// console.log(rand)
//this is coalled a scope
//varialbes that you make inside a function
//will only be known inside that function
//the variable's scope is in the function
//but any outside variable is available in a function. 外から中へはおk。中から外へは無理。

//run a function every 0.5 seconds
//use window object. For interactive stuff. Not really about HTML
//this function takes two input. 1 = another function. 2 = time

window.setInterval(changeColor, 5000)//milisecond
