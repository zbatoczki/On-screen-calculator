function add(op1, op2){
	return op1+op2;
}

function subtract(op1,op2){
	return op1-op2;
}

function multiply(op1,op2){
	return op1*op2;
}

function divide(op1,op2){
	var result = null;
	if(op2 != 0){
		result = op1 / op2;
	}
	return result;
}

var operand1, operand2, operator;

$(document).ready(function(){
	$(".num").click(function(){
		var number = $(this).text();		
		$("#screen").text(number);
		if(operand1 == null){
			operand1 = parseInt(number);
			console.log("OPERAND1 = " + operand1);
		}
		else if (operator != null) {
			operand2 = parseInt(number);
			console.log("OPERAND2 = " + operand2);
		}
	});

	$(".operator").click(function(){
		operator = $(this).text();
		console.log(operator);
	});

	$("#equal").click(function(){
		var result = 0;

		switch(operator){
			case '+': console.log("ADDING");result = add(operand1,operand2);break;
			case '-': result = subtract(operand1,operand2);break;
			case '*': result = multiply(operand1, operand2);break;
			case '/': result = divide(operand1,operand2); break;
		}
		console.log(result);
		$("#screen").text(result);
		//clear variables
		operand1 = null;
		operand2 = null;
		operator = null;
	});

	$("#clear").click(function(){
		operand1 = null;
		operand2 = null;
		operator = null;
	});


});
