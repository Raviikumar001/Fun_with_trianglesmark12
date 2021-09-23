const side1 = document.querySelector(".side-input1");
const side2 = document.querySelector(".side-input2");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const msg = document.querySelector("#msg");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  console.log("hi");
   first=Number(side1.value);
   second=Number(side2.value);
   console.log(first);
  if((first<=0) || (second<=0))
  {
    msg.innerText="Pls enter positive values.";
    return
  }
  else{
  
  const sumOfSquares = calculateSumOfSquare(
    Number(side1.value),
    Number(side2.value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  msg.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
