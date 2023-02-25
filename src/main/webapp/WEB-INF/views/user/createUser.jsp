
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ko">
<%
    Date now = new Date();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
    String nowDatetime = formatter.format(now);
%>
    <head>
        <meta charset="UTF-8"></meta>
        <script>
            function createUser() {

                fetch("http://infonation.kr/api/user", {

                    method: "POST",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'x-auth-token':
                        // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYzNTE3OTI3MiwiZXhwIjoxNjM1MTgyODcyfQ.9PZ6Co9IAlZIpmZx_yGumBqyy5LsS9WdICLNMzICJDc'
                    },
                    body: JSON.stringify({
                        login_id: document
                            .getElementById('login_id')
                            .value,
                        password: document
                            .getElementById('password')
                            .value,
                        username: document
                            .getElementById('name')
                            .value,
                        age: document
                            .getElementById('age')
                            .value,
                        birthDate: document
                            .getElementById('birthday')
                            .value,
                        email: document
                            .getElementById('email')
                            .value,
                        phoneNo: document
                            .getElementById('number')
                            .value + '-' + document
                            .getElementById('tel1')
                            .value + '-' + document
                            .getElementById('tel2')
                            .value,
                        address: {
                            zipCode: document
                                .getElementById('zipCode')
                                .value,
                            zipAddr1: document
                                .getElementById('zipAddr1')
                                .value,
                            zipAddr2: document
                                .getElementById('zipAddr2')
                                .value
                        },
                        role: 'USER'

                    })
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));

            }
        </script>
        <script type="text/javascript" src="/lib/js/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="/lib/js/dx.all.js"></script>

        <link rel="stylesheet" href="/lib/css/dx.softblue.css">
        <link rel="stylesheet" href="/lib/css/dx.light.css">
        <script src="/fn/user/createUserForm.js"></script>
        <script src="/fn/user/action_panel.js"></script>

    </head>
    <body class="dx-viewport" style="margin:auto;  width :1000px">
        <div>
            <h1>사용자 등록</h1>
        </div>
        <div class="demo-container">
            <div id="form-container" >
                <div id="createUserForm"></div>

                <div id="button"></div>
                <div id="back"></div>
            </div>
        </div>
        <!-- <legend><h2>개인 정보 입력</h2></legend> <p> 아 이 디 : <input type="text"
        name="login_id" id="login_id"> </p> <p> 비밀번호 : <input type="text"
        name="password" id="password"> </p> <p> 이 름 : <input type="text" name="name"
        id="name"> </p> <p> 나 이 : <input type="text" name="age" id="age"> </p> <p> 생년월일
        : <input type="text" name="birthday" id="birthday" > </p> <p> E-mail : <input
        type="email" name="email" id="email"> </p> <p> 핸드폰 : <select name="number"
        id="number"> <option value="1" selected>010</option> <option value="2"
        selected>011</option> </select>-<input type="text" name="tel1" id="tel1">-<input
        type="text" name="tel2" id="tel2" > </p> <p> 우편번호 : <input type="text"
        name="zipCode" id="zipCode"> 주소 : <input type="text" name="zipAddr1"
        id="zipAddr1"> 상세주소 : <input type="text" name="zipAddr2" id="zipAddr2"> </p>
        <button onclick="createUser()">등록</button> -->
    </body>
</html>