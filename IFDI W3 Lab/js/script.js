let jobTitle = `designer`;
let geoLoc = `Toronto`;
let partName = `Rachael`;
let childrenNum = `2`;
let birthYear = 1990;
let currentYear = 2019;
let maxAge = 100;
let perDay = 50;
let circleRad = 10;
let tempC = 38;
let tempF = (tempC * 9/5) + 32;
let tempF2 = 220;
let tempC2 = (tempF2 - 32) * 5/9;

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
