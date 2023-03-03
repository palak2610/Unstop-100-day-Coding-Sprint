function processData(str) {
  let lowercaseStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    switch(true) {
      case (charCode >= 65 && charCode <= 90):
        lowercaseStr += String.fromCharCode(charCode + 32);
        break;
      default:
        lowercaseStr += str.charAt(i);
        break;
    }
  }
  return lowercaseStr;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  let result = processData(input);
  console.log(result);
});
