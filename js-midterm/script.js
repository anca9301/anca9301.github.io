const numDisplay = document.querySelector("#displayedNumber");
const numSub = document.querySelector("#subtract");
const numAdd = document.querySelector("#add");
const numSubmit = document.querySelector("#submit");
const numChange = document.querySelector("#changeNumberDiv");

const ad1 = document.querySelector("#ad1"); const exit1 = document.querySelector("#x1");
const ad2 = document.querySelector("#ad2"); const exit2 = document.querySelector("#x2");
const ad3 = document.querySelector("#ad3"); const exit3 = document.querySelector("#x3");
const ad4 = document.querySelector("#ad4"); const exit4 = document.querySelector("#x4");
const ad5 = document.querySelector("#ad5"); const exit5 = document.querySelector("#x5");
const ad6 = document.querySelector("#ad6"); const exit6 = document.querySelector("#x6");
const ad7 = document.querySelector("#ad7"); const exit7 = document.querySelector("#x7");
const ad8 = document.querySelector("#ad8"); const exit8 = document.querySelector("#x8");
const ad9 = document.querySelector("#ad9"); const exit9 = document.querySelector("#x9");
const ad10 = document.querySelector("#ad10"); const exit10 = document.querySelector("#x10");
const ad0 = document.querySelector("#ad0"); const exit0 = document.querySelector("#x0");

// phoneNum = 1000001234567891;
let phoneNum = 1000000000000000;
let transparent = 1;
let decrease = true;
updateNum();

function updateNum() {
  numStr = phoneNum.toString(); numLen = numStr.length;

  displayNum = numStr.substring(numLen-10);
  displayNum2 = displayNum.substring(0,3)+ "-" + displayNum.substring(3,6)+ "-" + displayNum.substring(6);
  console.log(displayNum2);
  numDisplay.textContent = displayNum2;
}

function random(number) {
  return Math.floor(Math.random()*number);
}

function changeTransparent() {
    // let transparent = random(100)/100;
    if(decrease == true) { transparent = transparent - .01; }
    else { transparent = transparent + .01; }

    if(transparent <= 0) { decrease = false; }
    else if(transparent >= 1) { decrease = true; }

    let color = "rgb(0,0,0," + transparent + ")";
    numDisplay.style.color = color;
}

function subtract() {
  let x = random(1000);
  phoneNum = phoneNum - x;
  updateNum(); changeTransparent(); randAd(); // changeDivLocation();
}
function add() {
  let x = random(1000);
  phoneNum = phoneNum + x;
  updateNum();  changeTransparent(); randAd(); // changeDivLocation();
}

function changeSubmitLocation() {
  let w = random(80).toString() + '%';
  let h = random(25).toString() + '%';
  numSubmit.style.marginLeft = w;
  numSubmit.style.marginTop = h;
}

function changeDivLocation() {
  let w = random(80).toString() + '%';
  let h = random(25).toString() + '%';
  numChange.style.marginLeft = w;
  numChange.style.marginTop = h;
}

function randAd() {
  let c = random(5);
  if (c == 4) {
    let r = random(11);
    let a = 'ad' + r.toString();
    let x = document.getElementById(a);
    x.style.display = "block";
  }
}

numSub.addEventListener('click', subtract);
numAdd.addEventListener('click', add);
numSubmit.addEventListener('mouseover', changeSubmitLocation);
numSubmit.addEventListener('click', (e) => {alert("Thank You for Submitting Your Phone Number!");})
exit1.addEventListener('click', (e) => { ad1.style.display = "none"; changeTransparent();})
exit2.addEventListener('click', (e) => { ad2.style.display = "none"; changeTransparent();})
exit3.addEventListener('click', (e) => { ad3.style.display = "none"; changeTransparent();})
exit4.addEventListener('click', (e) => { ad4.style.display = "none"; changeTransparent();})
exit5.addEventListener('click', (e) => { ad5.style.display = "none"; changeTransparent();})
exit6.addEventListener('click', (e) => { ad6.style.display = "none"; changeTransparent();})
exit7.addEventListener('click', (e) => { ad7.style.display = "none"; changeTransparent();})
exit8.addEventListener('click', (e) => { ad8.style.display = "none"; changeTransparent();})
exit9.addEventListener('click', (e) => { ad9.style.display = "none"; changeTransparent();})
exit10.addEventListener('click', (e) => { ad10.style.display = "none"; changeTransparent();})
exit0.addEventListener('click', (e) => { ad0.style.display = "none"; changeTransparent();})