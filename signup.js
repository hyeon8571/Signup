window.addEventListener('load', function() {
	clearMessages();

	var formElem = document.querySelector('form');
	formElem.onsubmit = submitForm;

	//월 추가
	var selectInput = document.querySelector('select[name="birth-month"]');
	for(var i = 1; i <= 12; i++) {
		var option = document.createElement('option');
		option.innerHTML = i + '월';
		option.value = i;

		selectInput.appendChild(option);
	}
});

function clearMessages() {
	var messages = document.getElementsByClassName("alert-message");
	for (var i = 0; i < messages.length; i++) {
		messages[i].style.display = 'none';
	}
}

function showMessage(inputElement, message) {
	var messageElem = inputElement.parentNode.querySelector('span'); //아이디를 양식에 맞지않게 입력했다 가정했을 때 inputElement의 parentNode는 div가 된다. 그 div의 span은 옆에 안보이게 해놨던 문자열
	messageElem.style.display = 'inline';
	messageElem.innerText = message;

	inputElement.focus(); //틀린 부분으로 돌아간다 
}

function submitForm() {
	//acount info
	var accountInput = document.querySelector('input[name="account"]');
	var passwordInput = document.querySelector('input[name="password"]');
	var passwordConfirmInput = document.querySelector('input[name="password2"]');

	//select, radio, checkbox
	var selectInput = document.querySelector('select[name="birth-month"]');
	var radioInput = document.querySelector('input[name="gender"]:checked');
	var checkInput = document.querySelector('input[name="agree"]');

	console.log(accountInput.value);
	console.log(passwordInput.value);
	console.log(passwordConfirmInput.value);

	console.log(selectInput.value);
	console.log(radioInput.value);
	console.log(checkInput.value);

	var succss = true;


	if (accountInput.value.length < 6) {
		showMessage(accountInput, "계정은 6자리 이상이어야 합니다");
		succss = false;
	}

	if (passwordInput.value.length < 10) {
		showMessage(passwordInput, "비밀번호는 10자리 이상이어야 합니다");
		succss = false;
	}

	if (passwordConfirmInput.value != passwordInput.value) {  //!== 은 값 뿐만 아니라 타입까지 비교한다.
		showMessage(passwordConfirmInput, "비밀번호가 일치하지 않습니다");
		succss = false;
	}
	return succss;
}