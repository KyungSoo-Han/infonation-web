<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2023-01-27
  Time: 오후 2:26
--%>

<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>입고요청현황</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <link rel="stylesheet" href="/buy/buy_order_modal.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/realgrid-lic.js"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/libs/jszip.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <script type="text/javascript" src="/buy/buy_order_list.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/buy/buy_order_modal.js?vs=<%=nowDatetime%>"></script>
    <style>
        .left-align-column{
            text-align: left;
        }
        input:read-only{
            background-color: #f3ebdb;
        }
    </style>
</head>
<body>
    <p>입고요청 > 입고요청현황</p>

    <button id="searchBtn" onclick="Search()">조회</button>
    <button id="exportExcel" onclick="excelExport()">엑셀받기</button>
    <div>
        <table>
            <tr>
                <th><label>입고요청번호</label></th>
                <td><input type="text" id="slip_no" ></td>

                <th><label>조회기간</label></th>
                <td><input type="date" id="fdate"  > ~ <input type="date" id="tdate"></td>
            </tr>
            <tr>
                <th><label>화주사코드</label></th>
                <td>
                    <input type="text" id="cust_cd">
                    <button type="button" onclick="SearchModal('cust','')">찾기</button>
                </td>

                <th><label>화주사명</label></th>
                <td><input type="text" id="cust_nm" readonly ></td>

                <th><label>공급사코드</label></th>
                <td>
                    <input type="text" id="custProv_cd">
                    <button type="button" onclick="SearchModal('custProv','')">찾기</button>
                </td>

                <th><label>공급사명</label></th>
                <td><input type="text" id="custProv_nm" readonly></td>
            </tr>
        </table>
    </div>
    <br>
    <div id="buy_order_list"  style ="width: 100%; height:650px">
    </div>
    <div id="modalWrap" >
        <div id="modalBody" >
            <div style ="width: 100%; height:20px; padding-top:5px; padding-bottom:5px" >
                <label>코드</label><input type="text" id="code" >
                <label>명칭</label><input type="text" id="name" >
            </div>
            <div id="selectGrid"  style ="width: 100%; height:500px">
            </div>
            <div  style ="width: 100%; height:70px">
                <label id="modal_param"></label>
                <button id="searchModalBtn" onclick="SearchModal('','')">조회</button>
                <button id="selectBtn" onclick="btnSelect()">선택</button>
                <button id="closeBtn" onclick="closeModal()">닫기</button>
            </div>
        </div>
    </div>
</body>
<script>
    let nowDate = new Date();	// 현재 날짜 및 시간
    let fdate = new Date(nowDate.setMonth(nowDate.getMonth() - 1));	// 한달 전

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("buy_order_list")
        createModalGrid("selectGrid")

        document.getElementById("fdate").value = fdate.toISOString().slice(0,10);
        document.getElementById("tdate").value = new Date().toISOString().slice(0,10);
    });

    cust_cd.addEventListener("keyup", function (event) {
        cust_nm.value = '';
        custProv_cd.value = '';
        custProv_nm.value = '';

        if(event.key=="Enter")
            SearchModal('cust',cust_cd.value);
    })
    custProv_cd.addEventListener("keyup", function (event) {
        custProv_nm.value = '';

        if(event.key=="Enter")
            SearchModal('custProv',custProv_cd.value);
    })

    let code = document.getElementById('code');
    code.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

    let name = document.getElementById('name');
    name.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

</script>
</html>