const firstSide = document.querySelector(".first-side");
const secondSide = document.querySelector(".second-side");
const thirdSide = document.querySelector(".third-side");
const calculate = document.querySelector("#calculate-area");
const msg = document.querySelector("#msg");
console.log("hi");
function calculateArea() {
  
  
  // e.preventDefault();

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(4);
    msg.innerText = `Area of a triangle using heron's formula is ${result} units`;
  } else {
    msg.innerText = "Enter valid side lengths";
  }
}

calculate.addEventListener("click", calculateArea);
