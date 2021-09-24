const inputs1 = document.querySelector(".angle-input1");
const inputs2 = document.querySelector(".angle-input2");
const inputs3 = document.querySelector(".angle-input3");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#msg");

console.log("hi");


function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  console.log(angle3);
  return sum;
}

function isTriangle() {
 
  // const sum = sumOfAngles(
  //   inputs1.value,
  //   inputs2.value,
  //   inputs3.value
  // );
  
  if((inputs1.value>0) && (inputs2.value>0) && (inputs3.value>0)){
    const sum = sumOfAngles(Number(inputs1.value),
      Number(inputs2.value),
      Number(inputs3.value)
    );
    console.log(sum);
    if (sum === 180){
      console.log(sum);
      output.innerText = "Yay, the angles form a triangle!😃😃";
    }
    else {
      console.log("Oh Oh! The angle doesn't form a triangle");
      output.innerText = "Oh Oh! The angle doesn't form a triangle😅";
    }
  }
  else if(Number(inputs1.value)<0 || Number(inputs2.value)<0 || Number(inputs3.value))
  {
    output.innerText = "Pls, enter positive values.";
  }
  else{
    output.innerText = "Enter all values.";
  }
  
}

isTriangleBtn.addEventListener("click", isTriangle);
