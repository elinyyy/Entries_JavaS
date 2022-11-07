// let myDate = new Date();
// let myDay = myDate.getDay();

// // Array of days.
// let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// document.write("Today is " + weekday[myDay]);
// document.write("<br/>")

// // get hour value.
// let hours = myDate.getHours();
// let ampm = hours >= 12 ? 'PM' : 'AM';
// hours = hours % 12;
// hours = hours ? hours : 12;
// let minutes = myDate.getMinutes();
// minutes = minutes < 10 ? '0' + minutes : minutes;
// let myTime = hours + " " + ampm + " : " + minutes + 
//     " : " + myDate.getMilliseconds();
// document.write("\tCurrent time is " + myTime);

// let quotes = $(".quotes");
// for(let i = 0; i < quotes.length; i++){
// let quote1 = Math.floor(Math.random() * quotes.length -1) + 1;
// let quote2 = Math.floor(Math.random() * quotes.length -1) +1;
// let quote3 = Math.floor(Math.random() * quotes.length -1) +1;
// let quote4 = Math.floor(Math.random() * quotes.length -1) +1;
// cards.eq(quote1).before(cards.eq(quote4));
// }

// var time = document.querySelector('time');

var button = document.querySelector('button')

// button.onclick = function randomizetext() {
//     var randomNumber = Math.random()
//   console.log(randomNumber)
//   if (randomNumber < 1) {
//     console.log('I dunno I guess I babysitted, applied for a job, and now Im walking with you');
//   } else if (randomNumber < 2) {
//     console.log('At this point Imma try not eat');
//   } else if (randomNumber < 3) {
//     console.log('Why yall staring Mind your fucking business')
//   } else if (randomNumber < 4) {
//     console.log('September, Septembers the best. But then theres always November too')
//   } else if (randomNumber < 5) {
//     console.log('I dunno I guess I babysitted, applied for a job, and now Im walking with you')
//   } else {
//     console.log('Where does this tofu go?')
//   }
//   return
// }

button.onclick = function randomizetext() {
    var sentences = 
    ['Hey, do not touch me. Dont ever fucking talk to me. Yo, yo, yo dont call. Back up, back up. Youll kill me? You wont kill me. Hands up, hands up.', 
    'Kinda…expensive though…Maybe well do sushi party some other time', 
    'At this point Imma try not eat.',
    'September, Septembers the best. But then theres always November too.',
    'I dunno I guess I babysitted, applied for a job, and now Im walking with you.',
    'Do you have orange juice? No those are packaged ones, I mean fresh orange juice. I need my daily squeeze.',
    '10ドルあるよ (translation: I got a 10 dollar bill)','Thats not even your pen!']
    
    var index1 = Math.random() * 8;
    index1 = Math.floor(index1)
    
    var quote = document.getElementById('quote')
    console.log(quote)
    quote.innerText = sentences[index1];
}