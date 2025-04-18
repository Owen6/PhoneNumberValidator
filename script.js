const input = document.getElementById("user-input");
const submitBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

let testNum = 1

window.onload = () => {
  input.oninput = update;
  submitBtn.addEventListener('click', isValid);
  clearBtn.addEventListener('click', clear);
}
const update = event => {
  const element = event.target;
  const value = element.value.replace(/[\s-\(\)]/g, "");
  //drawNumber(value);
}

const drawNumber = input => {
}

const clear = () => {
  results.textContent = "";
}

const isValid = () => {
  //leading1 ,space/dash, 3 digits either wrapped in para or not, space/dash, 3 digits, space/dash, 4 digits
  const validRegex = /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  if(input.value.length <= 0) {
    alert("Please provide a phone number");
  }
  if (validRegex.test(input.value)){
    //console.log("valid");
    results.textContent = `Valid US number: ${input.value}`;
    return true;
  }else{
    //console.log("invalid");
    results.textContent = `Invalid US number: ${input.value}`;
    return false;
  }
}
