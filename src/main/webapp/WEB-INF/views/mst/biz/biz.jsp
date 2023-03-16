<%--
  Created by IntelliJ IDEA.
  User: kyungsoohan
  Date: 2023/03/10
  Time: 11:40 PM
--%>

<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>

    <link rel="stylesheet" href="/bsrp/css/base-style.css?vs=<%=nowDatetime%>"/>
    <meta charset="utf-8">
    <title>biz</title>
</head>
<body>
<p>기준정보 > 사업장 등록</p>
<button onclick="Save()">저장</button>

<div class="main-container" style="padding-top: 10px;">

    <table>
        <tr>
            <th><label>사업장 ID</label></th>
            <td><input type="text" id="id" ></td>
            <th><label>사업장 명칭</label></th>
            <td><input type="text" id="name" ></td>
        </tr>
        <tr>
            <th><label>영문 명칭</label></th>
            <td><input type="text" id="engName" ></td>
            <th><label>사업자 번호</label></th>
            <td><input type="text" id="bizNo" ></td>
        </tr>
        <tr>
            <th><label>업태</label></th>
            <td><input type="text" id="bizType" ></td>
            <th><label>종목</label></th>
            <td><input type="text" id="bizItem" ></td>
        </tr>
        <tr>
            <th><label>우편번호</label></th>
            <td><input type="text" id="zipNo" ></td>
            <th><button type="button" id="findZipNo" >찾기</button></th>
            <td></td>
        </tr>
        <tr>
            <th><label>주소</label></th>
            <td><input type="text" id="zipAddr1" ></td>
            <th><label>상세 주소</label></th>
            <td><input type="text" id="zipAddr2" ></td>
        </tr>
    </table>

</div>
</body>
</html>