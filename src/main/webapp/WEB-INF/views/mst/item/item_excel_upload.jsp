<%--
  Created by IntelliJ IDEA.
  User: kyungsoohan
  Date: 2023/03/18
  Time: 1:27 AM
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
    <meta charset="utf-8">
    <title>item_excel_upload</title>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <link rel="stylesheet" href="/bsrp/css/base-style.css?vs=<%=nowDatetime%>"/>
</head>
<body>
<p>기준정보 > 품목 엑셀업로드</p>
    <table>
        <tr>
            <th><label>사업장</label></th>
             <td><select id="biz"> </select></td>
        </tr>
        <tr>
            <th><label>화주사코드</label></th>
            <td>
                <input type="text" id="customerId" >
                <button type="button" onclick="SearchModal('customer','')">찾기</button>
            </td>

            <th><label>화주사명</label></th>
            <td><input type="text" id="customerName"  readonly></td>

            <th><label>공급사코드</label></th>
            <td>
                <input type="text" id="supplierId" >
                <button type="button" onclick="SearchModal('supplier','')">찾기</button>
            </td>

            <th><label>공급사명</label></th>
            <td><input type="text" id="supplierName" readonly></td>
        </tr>
    </table>

    <form id="uploadForm" method="post" enctype="multipart/form-data">
        <input type="file" id="excelFile" name="excelFile" >
    </form>
    <button onclick="ExcelUpload()">엑셀업로드</button>

</body>
<script>

    function ExcelUpload() {

        let excelUploadRequest = {
            "bizId" : "1",
            "customerId" : "1",
            "supplierId" : "1"
        };
        let excelFile = document.getElementById('excelFile').files[0];
        let formData = new FormData(); // 폼 데이터 생성

        formData.append('excelFile', excelFile);
        formData.append('excelUploadRequest', new Blob([JSON.stringify(excelUploadRequest)],{type: "application/json"}));

        console.log(formData);
        $.ajax({
            type: 'POST',
            headers:{
                "userId": "1",
            },
            url: 'http://api.infonation.kr/api/item/rabbitmq',
            data: formData,
            contentType: false,
            processData: false,
            mimeType: "multipart/form-data",
            success: function(result) {
                console.log(result); // 성공 처리
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // 오류 처리
            }
        });

    }
</script>
</html>