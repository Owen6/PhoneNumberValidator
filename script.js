const input = document.getElementById("user-input");
const submitBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

window.onload = () => {
  input.oninput = update;
  //input.addEventListener("input", update);
  submitBtn.addEventListener('click', isValid)
}

const update = event => {
  const element = event.target;
  const value = element.value.replace(/[\s-]/g, "");
  console.log(value);
  //console.log("check");
}

const isValid = () => {
  if(input.value.length <= 0) {
    alert("Please provide a phone number");
  }
  const cleaned = input.value.replace(/[^\d]/g, "");
  //if(cleaned.length < 7){}
  switch(cleaned.length) {
    case 10: 
      console.log("valid");
      break;
    case 11:
      if(cleaned[0] === "1"){
        console.log("valid");
      }else{
        console.log("invalid");
      }
      break;
    default:
      console.log("invalid");
      break;
  }
  console.log(cleaned.length);
}
