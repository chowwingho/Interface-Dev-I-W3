// create 5 HTML elements, each named with a unique "id" attribute that corresponds to each of the 5 exercises. Output the result of each exercise to the appropriate element so an end user can see the result in the viewable document.

/*
const formatAnswer = (appt) => {
    // Returns a string of HTML ready to insert
    return `<li class="appt cat-${appt.category} ${appt.priority}" style="height: ${appt.time.duration}px;">
              <div class="start-time">${convertMinutesToTime(appt.time.start)}</div>
              <div>${appt.name}</div>
            </li>`;
  } */



//EXERCISE: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, partner's name, number of children. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."



let jobTitle = `designer`;
let geoLoc = `Toronto`;
let partName = `Rachael`;
let childrenNum = `2`;



const formatAnswer1 = (obj) => {
// returns a string of HTML 
    return `<div class="${obj.questionName}"
    You will be a ${obj.jobTitle} in ${obj.geoLoc}, and married to ${obj.partName} with ${obj.childrenNum} kids.</div>
    `



}

//console.log(`You will be a ${jobTitle} in ${geoLoc}, and married to ${partName} with ${childrenNum} kids."`)

//EXERCISE: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.



 let birthYear = 1990;
 let currentYear = 2019;




const formatAnswer2 = (obj) => {
// returns a string of HTML 
    return `<div class="${obj.questionName}" 
    They are ${obj.currentYear - obj.birthYear} years old.</div>
    `


}



// console.log(`They are ${currentYear - birthYear} years old.`);

//EXERCISE: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".




let maxAge = 100;
let perDay = 50;



const formatAnswer3 = (obj) => {
  // returns a string of HTML 
      return `<div class="${obj.questionName}" 
      You will need ${obj.maxAge * obj.perDay} to last you until the ripe old age of ${maxAge}</div>`

    }
//console.log(`You will need ${maxAge * perDay} to last you until the ripe old age of ${maxAge}`)


//EXERCISE: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let circleRad = 10;

console.log( `The circumference is ${circleRad * 2 * 3.14}`)
console.log(`The area is ${3.14 * circleRad ** 2}`)

//EXERCISE: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let tempC = 38;
let tempF = (tempC * 9/5) + 32;
let tempF2 = 220;
let tempC2 = (tempF2 - 32) * 5/9


console.log(`${tempC}°C is ${tempF}°F`)
console.log(`${tempF2}°F is ${tempC2}°C`) 


// Question 1
const labAns1 = document.getElementById(`ex1`);

labAns1.innerHTML += `You will be a ${jobTitle} in ${geoLoc}, and married to ${partName} with ${childrenNum} kids.`

// Question 2
const labAns2 = document.getElementById(`ex2`);

labAns2.innerHTML += `They are ${currentYear - birthYear} years old.`


// Question 3
const labAns3 = document.getElementById(`ex3`);

labAns3.innerHTML += `You will need ${maxAge * perDay} to last you until the ripe old age of ${maxAge}`


// Question 4
const labAns4 = document.getElementById(`ex4`);

labAns4.innerHTML += `The circumference is ${circleRad * 2 * 3.14}. The area is ${3.14 * circleRad ** 2}`


// Question 5
const labAns5 = document.getElementById(`ex5`);

labAns5.innerHTML += `${tempC}°C is ${tempF}°F. ${tempF2}°F is ${tempC2}°C`