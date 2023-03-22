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
    <title>출고현황</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
    <link rel="stylesheet" href="/outbound/outbound_modal.css?vs=<%=nowDatetime%>"/>
    <script type="text/javascript" src="/libs/realgrid-lic.js"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
    <script type="text/javascript" src="/libs/realgrid-utils.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/libs/jszip.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <script type="text/javascript" src="/outbound/outbound_list.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/outbound/outbound_modal.js?vs=<%=nowDatetime%>"></script>
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
    <p>출고 > 출고현황</p>

    <button id="searchBtn" onclick="Search()">조회</button>
    <button id="exportExcel" onclick="excelExport()">엑셀받기</button>
    <div>
        <table>
            <tr>
                <th><label>출고번호</label></th>
                <td><input type="text" id="outboundNo" ></td>

                <th><label>조회기간</label></th>
                <td><input type="date" id="fromDate"  > ~ <input type="date" id="toDate"></td>
            </tr>
            <tr>
                <th><label>화주사코드</label></th>
                <td>
                    <input type="text" id="customerId">
                    <button type="button" onclick="SearchModal('customer','')">찾기</button>
                </td>

                <th><label>화주사명</label></th>
                <td><input type="text" id="customerName" readonly ></td>

                <th><label>배송지코드</label></th>
                <td>
                    <input type="text" id="destinationId">
                    <button type="button" onclick="SearchModal('destination','')">찾기</button>
                </td>

                <th><label>배송지명</label></th>
                <td><input type="text" id="destinationName" readonly></td>
            </tr>
        </table>
    </div>
    <br>
    <div id="outbound_list"  style ="width: 100%; height:650px">
    </div>
    <div id="modalWrap" >
        <div id="modalBody" >
            <div style ="width: 100%; height:20px; padding-top:5px; padding-bottom:5px" >
                <label>코드</label><input type="text" id="codeId" >
                <label>명칭</label><input type="text" id="codeName" >
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
    let fromDate = new Date(nowDate.setMonth(nowDate.getMonth() - 1));	// 한달 전

    let outboundNo = document.getElementById('outboundNo');
    let customerId = document.getElementById('customerId');
    let customerName = document.getElementById('customerName');
    let destinationId = document.getElementById('destinationId');
    let destinationName = document.getElementById('destinationName');

    window.addEventListener('DOMContentLoaded', function () {

        createGrid("outbound_list")
        createModalGrid("selectGrid")

        document.getElementById("fromDate").value = fromDate.toISOString().slice(0,10);
        document.getElementById("toDate").value = new Date().toISOString().slice(0,10);
    });

    customerId.addEventListener("keyup", function (event) {
        customerName.value = '';
        destinationId.value = '';
        destinationName.value = '';

        if(event.key=="Enter")
            SearchModal('customer',customerId.value);
    })
    destinationId.addEventListener("keyup", function (event) {
        destinationName.value = '';

        if(event.key=="Enter")
            SearchModal('destination',destinationId.value);
    })

    let code = document.getElementById('codeId');
    code.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

    let name = document.getElementById('codeName');
    name.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            SearchModal('item','');
    })

</script>
</html>