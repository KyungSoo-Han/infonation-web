<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2023-01-16
  Time: 오후 2:00
--%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>입고요청등록</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>


    <link rel="stylesheet" href="../../css/realgrid-sky-blue.css"/>
    <script type="text/javascript" src="../../../libs/realgrid-lic.js"></script>
    <script type="text/javascript" src="../../../libs/realgrid.2.6.0.min.js"></script>
    <script type="text/javascript" src="../../../libs/jquery-3.4.0.min.js" ></script>
    <%--<script type="text/javascript" src="../../dist/js/adminlte.min.js"></script>
    <link rel="stylesheet" href="../../dist/css/adminlte.min.css"/>--%>
   <style>
     html{ height:800px;  }
     body { height:670px;  }

     .left-align-column{
         text-align: left;
     }
     .readonly-column{
         background: #f3ebdb;
     }
   </style>

</head>
<body>
    <section>
        <div>
            <h4>입고 요청 등록</h4>
        </div>
    </section>
    <div id="btnWrap">
        <button typ="button" onclick="showModal()" >추가</button>
    </div>

    <popup-new-save width="1200px" height="720px" />
    <test>

    </test>
</body>

<script type="text/javascript" src="buy_order.js?vs=<%=nowDatetime%>"/>

<script>

    window.addEventListener('DOMContentLoaded', function () {

    });

</script>
</html>