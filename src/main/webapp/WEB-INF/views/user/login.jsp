
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/lib/css/dx.softblue.css?vs=<%=nowDatetime%>">
    <link rel="stylesheet" href="/lib/css/dx.light.css?vs=<%=nowDatetime%>">
    <script src="/lib/js/jquery-3.5.1.min.js"></script>
    <script src="/lib/js/dx.all.js?vs=<%=nowDatetime%>"></script>
    <script src="/fn/user/login/loginForm.js?vs=<%=nowDatetime%>"></script>
    <script src="/fn/user/login/loginAction.js?vs=<%=nowDatetime%>"></script>
    <title>Document</title>
</head>
<body class="dx-viewport">
  <div class="demo-container">

      <div id="form-container">
          <div id="form"></div>

          <div id="button"></div>
      </div>
  </div>
</html>