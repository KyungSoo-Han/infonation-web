
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <%
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
            String nowDatetime = formatter.format(now);
        %>
        <title>DevExtreme Demo</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

        <link rel="stylesheet" href="/lib/css/dx.common.css?vs=<%=nowDatetime%>">
        <link rel="stylesheet" href="/lib/css/dx.light.css?vs=<%=nowDatetime%>">

        <script src="/lib/js/jquery-3.5.1.min.js"></script>
        <script src="/lib/js/dx.all.js?vs=<%=nowDatetime%>"></script>
        <script src="/fn/board/boardFunction.js?vs=<%=nowDatetime%>"></script>
        <script src="/fn/board/boardForm.js?vs=<%=nowDatetime%>"></script>
        <script src="/fn/board/action_panel.js?vs=<%=nowDatetime%>"></script>
      
    </head>
    <body class="dx-viewport">
        <div class="demo-container">     
            <div id="action_panel" style="height: 40px;" >
                <div id="btn_search"></div>
            </div>            
            <div id="gridContainer"></div>
        </div>
    </body>
</html>