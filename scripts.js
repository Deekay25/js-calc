// simple js calculator
const fnum = parseFloat(prompt("Enter the the first number"));
const snum = parseFloat(prompt("Enter the second number"));

const choice = prompt(
  "Kindly choose the type of operation to perform (-,+,/,*)"
);

let result;

if (choice == "-") {
  result = fnum - snum;
} else if (choice == "+") {
  result = fnum + snum;
} else if (choice == "/") {
  result = fnum / snum;
} else {
  result = fnum * snum;
}

alert(`${fnum} ${choice} ${snum} = ${result}`);
