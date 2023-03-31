
function Search() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let requestBody = new Object();
    requestBody.email = email;
    requestBody.password = password;

    $.ajax({
        method : "POST",
        url : "http://localhost:81/api/user/login", //?" +"gbn=DETAIL&biz_cd=10001&center_cd="+ srh_center_nm +"",
        contentType: 'application/json',
        data:JSON.stringify(requestBody),
        success: function(data) {
            console.log(data);
            sessionStorage.setItem("token", data.data.token);
            sessionStorage.setItem("userName",data.data.userInfo.name );
            window.location.replace("/");


        }, error: function (data) {
            console.log(data);
        }
    });
}