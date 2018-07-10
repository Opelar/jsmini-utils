let years = 12;
let money = 2;
let sum = 0;
let start = 0;

while (--years > start) {
  sum += parseInt(Math.pow(money * 1.06, years));

  console.log("money:  ", money);

  if (money < 20) {
    money += 2;
  }
}

console.log(sum);
