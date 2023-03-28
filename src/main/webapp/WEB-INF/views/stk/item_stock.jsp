<%--
  Created by IntelliJ IDEA.
  User: kyungsoohan
  Date: 2023/03/28
  Time: 11:01 PM
--%>

<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
	<%
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
		String nowDatetime = formatter.format(now);
	%>
	<link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
	<script type="text/javascript" src="/libs/realgrid-lic.js"></script>
	<script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
	<script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>
	<script type="text/javascript" src="/libs/jszip.min.js"></script>
	<script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
	<script type="text/javascript" src="/stk/item_stock.js?vs=<%=nowDatetime%>"></script>
    <title>item_stock</title>
</head>
<body>
<p>재고현황</p>

<button id="searchBtn" onclick="Search()">조회</button>

<div id="item_stock_list"  style ="width: 100%; height:650px">
</div>
</body>
<script>

	window.addEventListener('DOMContentLoaded', function () {

		createGrid("item_stock_list")

	});

</script>
</html>