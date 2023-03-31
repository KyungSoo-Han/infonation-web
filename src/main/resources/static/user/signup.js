function Save() {
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    if(name.value == ''){
        alert('이름을 입력해주세요.');
        name.focus();
        return;
    }
    if(email.value == ''){
        alert('이메일을 입력해주세요.');
        email.focus();
        return;
    }
    if(password.value != password2.value){
        alert('비밀번호가 다릅니다. 다시 확인해주세요.');
        return;
    }
    let settings = {
        "url": "http://localhost:81/api/user",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "email": email.value,
            "name": name.value,
            "password": password.value,
            "phoneNo": document.getElementById('phoneNo').value,
            "role": "ADMIN",
            "birthDate": document.getElementById('birthDate').value
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}