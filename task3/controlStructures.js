let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2) {
  console.log(`The larger number of ${num1} or ${num2} is num1 = ` + num1);
} else if (num2 > num1) {
  console.log(`The larger number of ${num1} or ${num2} is num2 = ` + num2);
} else {
  console.log("They are equal");
}

if (num1 % 2 == 0) {
  console.log(`${num1} is even`);
} else {
  console.log(`${num1} is odd`);
}

if (num1 > num2 && num1 > num3 && num2 > num3) {
  console.log(`Largest to smallest ${num1} ${num2} ${num3}`);
} else if (num1 > num2 && num1 > num3 && num3 > num2) {
    console.log(`Largest to smallest ${num1} ${num3} ${num2}`);
} else if (num2 > num1 && num2 > num3 &&num3>num1) {
    console.log(`Largest to smallest ${num2} ${num3} ${num1}`);
} else if (num2 > num1 && num2 > num3 &&num1>num3) {
    console.log(`Largest to smallest ${num2} ${num3} ${num1}`);
} else if (num3 > num1 && num3 > num2 &&num2>num1) {
    console.log(`Largest to smallest ${num3} ${num2} ${num1}`);
} else {
    console.log(`Largest to smallest ${num3} ${num1} ${num2}`);
}

let amount=8;
if(amount>0 && typeof(amount)==="number"){
    console.log("The amount is 8");
}else if(amount<=0){
    console.log("Please enter a positive number");
}else {
    console.log("Please enter a number");
}

let userName = "sulaiman";
let password = "****";
if(userName.length>6 && password>=8){
    console.log("login successful");
}else {
    console.log("login failed");
}

let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

for (let index = 20; index >= 0; index--) {
    console.log(index);
  }

for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}


let startRange = 6;
let endRange = 18;
for (startRange; startRange <= endRange; startRange++) {
    console.log(startRange);
}

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}


//GCD for 62 and 72
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log(gcd_two_numbers(62, 72));