
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <script type="text/javascript" src="./lib/js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="./lib/js/dx.all.js"></script>

    <link rel="stylesheet" href="./lib/css/dx.common.css">
    <link rel="stylesheet" href="./lib/css/dx.softblue.css">
    <link rel="stylesheet" type="text/css" href="./fn/index/index.css" />
    <script src="./fn/user/createUserForm.js"></script>
    <script src="./fn/index/menu.js"></script>
    <script src="./fn/index/popup_join.js"></script>
    <script src="./fn/index/index.js"></script>
    <script>
        localStorage.clear();
    </script>
</head>
<body class="dx-viewport">
  
    <div id="popup"></div>
    <div style="padding-bottom: 5px;">
        <div id ="top_panel">
            <div id="menu_show_hide"></div>
            <div id ="top_right_div">
                <div id="btn_login"></div>
                <div id="btn_join"></div>
            </div>
        </div>
    </div>
    <div class="hbox">
        <div id="main_treeview" style="flex: 0.1; min-width: 200px"></div>
        <div id="tabPanel" style="flex: 0.9 1 100%;" ></div>
    </div>
    
        <!-- <header>
            <a href ="./user/createUser.jsp">회원가입</a><br>
            <a href ="./user/login.jsp">로그인</a><br>
            <a href ="./test/drawingTest.html">드로잉</a><br>
            <a href ="./test/devTest.html">데브 그리드</a><br>
        </header> -->

        
</body>
</html>