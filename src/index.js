module.exports = function toReadable (number) {
  
let myNum = String(number);
myNum = myNum.split("");

let num, zero, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, first = -1, second = -1, third = -1, str;

n0 = "";
n1 = "one";
n2 = "two";
n3 = "three";
n4 = "four";
n5 = "five";
n6 = "six";
n7 = "seven";
n8 = "eight";
n9 = "nine";

if(number == 0) return "zero";    
if(number == 10) return "ten";
if(number == 11) return "eleven";
if(number == 12) return "twelve";
if(number == 13) return "thirteen";
if(number == 14) return "fourteen";
if(number == 15) return "fifteen";
if(number == 16) return "sixteen";
if(number == 17) return "seventeen";
if(number == 18) return "eighteen";
if(number == 19) return "nineteen";

for (let i = 0; i < myNum.length; i++)
{
  switch(myNum[i])
  {
  case "0": num = n0;
  break;
  case "1": num = n1;
  break;
  case "2": num = n2;
  break;
  case "3": num = n3;
  break;
  case "4": num = n4;
  break;
  case "5": num = n5;
  break;
  case "6": num = n6;
  break;
  case "7": num = n7;
  break;
  case "8": num = n8;
  break;
  case "9": num = n9;
  break;
  }
  if (i == 0) first = num;
  if (i == 1) second = num;
  if (i == 2) third = num;
}



if(third != -1 && second === "two") second = "twen";
if(third != -1 && second === "three") second = "thir";
if(third != -1 && second === "five") second = "fif";
if(third != -1 && second === "eight") second = "eigh";

if(third == -1 && first === "two") first = "twen";
if(third == -1 && first === "three") first = "thir";
if(third == -1 && first === "five") first = "fif";
if(third == -1 && first === "eight") first = "eigh";

if(third != -1) str = `${first} hundred ${second}ty ${third}`;
if(third == 0 && second == 0) str = `${first} hundred ${second} ${third}`;


if(third == -1) str = `${first}ty ${second}`;

if(third == -1 && second == -1) str = `${first}`;
return str;

}
