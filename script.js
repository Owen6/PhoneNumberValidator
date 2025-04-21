const input = document.getElementById("user-input");
const submitBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const container = document.getElementById("container");

let testNum = 1

window.onload = () => {
  input.oninput = update;
  submitBtn.addEventListener('click', isValid);
  submitBtn.addEventListener('click', () => {
    const val = isValid();
    const numbers = document.querySelectorAll(".num");
    if(val){
      numbers.forEach(el => {
        el.style.backgroundColor = "green";
      })
    }else{
      numbers.forEach(el => {
        el.style.backgroundColor = "red";
      })
    }
  });
  clearBtn.addEventListener('click', clear);
  document.addEventListener('click', () => {
    input.focus();
  });
}

const update = event => {
  const element = event.target;
  const value = element.value.replace(/[\s-\(\)]/g, "");
  drawNumber(value);
  
}

const drawNumber = input => {
  const length = input.length;
  //console.log("test")
  container.innerHTML = '';
  let added = false;
  for(let i=0; i<length; i++){
    switch(true){
      case length >= 4 && length <= 7 && i === 3:
        const dash = document.createElement("div");
        dash.className = "num";
        dash.textContent = "-";
        container.appendChild(dash);
        break;
      case length > 7 && length < 12:
        //(123)567-9012
        if(length === 11 && added === false){
          const number = document.createElement("div");
          number.className = "num";
          number.classList.add("int");
          number.textContent = input[i];
          container.appendChild(number);
          input = input.slice(1);
          added = true;
          console.log('test');
        }
        if(i === 0){
          const openPara = document.createElement("div");
          openPara.className = "num";
          openPara.textContent = "(";
          container.appendChild(openPara);
        }else if(i === 3){
          const closedPara = document.createElement("div");
          closedPara.className = "num";
          closedPara.textContent = ")";
          container.appendChild(closedPara);
        }else if(i === 6){
          const dash = document.createElement("div");
          dash.className = "num";
          dash.textContent = "-";
          container.appendChild(dash);
        }
        break;
      default:
        break;
    }  
    const number = document.createElement("div");
    number.className = "num";
    number.classList.add("int");
    number.textContent = input[i];
    container.appendChild(number);
  }
  if(added){
    container.removeChild(container.lastChild);
  }
}

const clear = () => {
  results.textContent = "";
  input.value = "";
  update({target: input});
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
