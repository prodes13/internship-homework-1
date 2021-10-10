let calculateBtn = document.getElementById("calculateBtn");
let resultText = document.getElementById("result");

calculateBtn.addEventListener("click", function() {    
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
	
	// Checking if a string is inserted
	if (Number.isNaN(firstNumber)) {
		firstNumber = 0;
	}
	if (Number.isNaN(secondNumber)) {
		secondNumber = 0;
	}
    
	let cmmdcResult = cmmdc(firstNumber, secondNumber);
    resultText.innerText = "Cel mai mic divizor comun este: " + cmmdcResult;
});

function cmmdc(x, y) {
	if (x === 0 || y === 0) {
		return 0;
	}
	while (x != y) {
		if (x > y) {
			x -= y;
		} else {
			y -= x;
		}
	}	
	return x;
}