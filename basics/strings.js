/*const realName = "anisha"
const nickName = "Tannu"
const repocount = 520*/

//console.log(name + repocount + "value");

//string interpulation (``) backtiks

//console.log(`hello Myself ${realName} and my  nick name is  ${nickName} and repocount is ${repocount}`);

const gameName = new String('kauss')
/*console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);*/

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('u'));

//console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.toLowerCase);

//const newString = gameName.substring(0, 4);

//console.log(newString);

const anotherString = gameName.slice(0, 3);//3rd char ko hatayega
console.log(anotherString);

const spaceString = new String('     tannu,     ');
console.log(spaceString);
console.log(spaceString.trim()); //space delete  karta hai

const url = "ridzz--520.netlify.app"
console.log(url.replace('--', '-'));
