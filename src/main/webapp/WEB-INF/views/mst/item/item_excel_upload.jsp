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

    <button onclick="ExcelUpload()">엑셀업로드</button>
    <form id="uploadForm" method="post" enctype="multipart/form-data">
        <input type="file" name="excelFile">
        <button type="submit">Upload</button>
    </form>

</body>
<script>

    function ExcelUpload() {
        let form = document.getElementById('uploadForm');
        console.log(form);
        let formData = new FormData(form); // 폼 데이터 생성
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:81/api/item/excelUpload',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
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