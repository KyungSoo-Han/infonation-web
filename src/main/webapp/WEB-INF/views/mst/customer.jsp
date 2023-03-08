<%--
  Created by IntelliJ IDEA.
  User: kyungsoohan
  Date: 2023/03/05
  Time: 2:45 PM
  To change this template use File | Settings | File Templates.
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
    <meta charset="UTF-8">
    <title>Customer Table</title>

    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
    <style>

        /* 제목 스타일 */
        h1 {
            text-align: center;
            font-size: 28px;
            margin-top: 50px;
        }

        /* 폼 스타일 */
        form {
            margin-top: 10px;
        }

        /* 입력 요소 스타일 */
        label {
            width: 400px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        table{
            width: 90%;
        }
        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="tel"],
        select {
            width: 100%;
            padding: 5px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            margin-bottom: 5px;
            font-size: 15px;
        }

        /* 버튼 스타일 */
        button[type="submit"] {
            width: 100%;
            height: 40px;
            border: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 4px;
            font-size: 16px;
        }

        button[type="submit"]:hover {
            background-color: #0069d9;
        }

    </style>
</head>
<body>
<p>기준정보 > 화주사 등록</p>
<button onclick="Save()">저장</button>
<button onclick="ExcelUpload()">엑셀업로드</button>
<form id="uploadForm" method="post" enctype="multipart/form-data">
    <input type="file" name="excelFile">
    <button type="submit">Upload</button>
</form>
<div class="main-container" style="padding-top: 10px;">
    <table>
        <tr>
            <th><label>사업장</label></th>
            <td>
                <select id="biz">
                </select>
            </td>

            <th><label>화주사명</label></th>
            <td><input type="text" id="name" ></td>
        </tr>
        <tr>
            <th><label>대표자</label></th>
            <td><input type="text" id="ownerName" ></td>

            <th><label>사업자번호</label></th>
            <td><input type="text" id="bizNo" ></td>

        </tr>

        <tr>
            <th><label>종목</label></th>
            <td><input type="text" id="bizItem" ></td>

            <th><label>업태</label></th>
            <td><input type="text" id="bizType" ></td>
        </tr>
        <tr>
            <th><label>메일</label></th>
            <td><input type="email" id="email" ></td>

            <th><label>우편 번호</label></th>
            <td><input type="text" id="zipNo" ></td>
        </tr>
        <tr>
            <th><label>주소</label></th>
            <td><input type="email" id="zipAddr1" ></td>

            <th><label>상세 주소</label></th>
            <td><input type="text" id="zipAddr2" ></td>
        </tr>
        <tr>
            <th><label>전화 번호</label></th>
            <td><input type="text" id="telNo" ></td>

            <th><label>팩스 번호</label></th>
            <td><input type="text" id="faxNo" ></td>
        </tr>
        <tr>
            <th><label>홈페이지</label></th>
            <td><input type="text" id="homepage" ></td>

            <th><label>상태</label></th>
            <td>
                <select  id="status">
                    <option value="1">거래중</option>
                    <option value="0">거래중지</option>
                </select>
            </td>
        </tr>
    </table>

</div>
</body>
<script>
    $.ajax({
        method : "GET",
        url : "http://api.infonation.kr/api/biz",
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            for(let i = 0; i < data.data.length; i ++){
                console.log(data.data[i].id);
                $("#biz").append("<option value=" + data.data[i].id + ">" + data.data[i].name +"</option>");
            }
        }, error: function (data) {
            console.log(data);
        }
    });

    $(document).ready(function() {
        $('#uploadForm').submit(function(event) {
            event.preventDefault(); // 기본 동작 방지
            var form = $(this);
            var formData = new FormData(form[0]); // 폼 데이터 생성
            $.ajax({
                type: 'POST',
                url: 'http://api.infonation.kr/api/customer/upload',
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
        });
    });
    function Save() {
        if (document.getElementById('name').value == '')
        {
            alert('화주사명을 입력해야합니다.');
            return;
        }
        let jsonData = new Object() ;
        let addressData = new Object() ;
        jsonData.bizId = 1;
        jsonData.name = document.getElementById('name').value;
        jsonData.engName = document.getElementById('engName').value;
        jsonData.ownerName = document.getElementById('ownerName').value;
        jsonData.email = document.getElementById('email').value;
        jsonData.telNo = document.getElementById('telNo').value;
        jsonData.faxNo = document.getElementById('faxNo').value;
        jsonData.homepage = document.getElementById('homepage').value;

        addressData.zipNo = document.getElementById('zipNo').value;
        addressData.zipAddr1 = document.getElementById('zipNddr1').value;
        addressData.zipAddr2 = document.getElementById('zipNddr2').value;
        jsonData.address = addressData;

        jsonData.bizItem = document.getElementById('bizItem').value;
        jsonData.bizType = document.getElementById('bizType').value;

        $.ajax({
            method : "POST",
            url : "http://api.infonation.kr/api/customer",
            headers: {
                "userId": "1",
            },
            contentType: 'application/json',
            data: JSON.stringify (jsonData),
            success: function(data) {
                alert('등록되었습니다.');
                console.log(data);
            }, error: function (data) {

                alert('등록을 실패했습니다.');
                console.log(data);
            }
        });
    }

    function ExcelUpload() {
            let form = document.getElementById('uploadForm');
            let formData = new FormData(form[0]); // 폼 데이터 생성
            $.ajax({
                type: 'POST',
                url: 'http://api.infonation.kr/api/customer/upload',
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
