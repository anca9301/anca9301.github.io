phoneNum = 1000001234567891;

function updateNum() {
  numStr = phoneNum.toString();
  numLen = numStr.length;

  displayNum = numStr.substring(numLen-10);
  displayNum2 = displayNum.substring(0,3)+ "-" + displayNum.substring(3,6)+ "-" + displayNum.substring(6);
  console.log(displayNum2);
}