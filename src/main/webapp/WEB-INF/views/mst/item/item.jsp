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
    <link rel="stylesheet" href="/bsrp/css/base-style.css?vs=<%=nowDatetime%>"/>
</head>
<body>
<p>기준정보 > 품목 등록</p>
<div>조회</div>
사업장 <select id="biz"> </select>
<div>
    <button onclick="Search()">조회</button>
    <button onclick="New()">초기화</button>
    <button onclick="Save()">저장</button>
</div>

<div class="main-container" style="padding-top: 10px;">
    <table>
        <tr>
            <th><label>품목 ID</label></th>
            <td><input type="text" id="id" ></td>

            <th><label>품목명</label></th>
            <td><input type="text" id="name" ></td>

        </tr>
        <tr>
            <th><label>화주사</label></th>
            <td>
                <select id="customer">
                </select>
            </td>
            <th><label>공급사</label></th>
            <td>
                <select id="supplier">
                </select>
            </td>
        </tr>

        <tr>
            <th><label>약식 명칭</label></th>
            <td><input type="text" id="sname" ></td>

            <th><label>안전재고량</label></th>
            <td><input type="number" id="safe_stock_qty" ></td>

            <th><label>상태</label></th>
            <td><input type="checkbox" id="status" value="true" ></td>
        </tr>
        <tr>
            <th><label>제조일자 사용</label></th>
            <td><input type="checkbox" id="is_make_day" ></td>

            <th><label>제조일로부터 ##일</label></th>
            <td><input type="number" id="from_make_day" ></td>

            <th><label>세트 여부</label></th>
            <td><input type="checkbox" id="is_set" ></td>
        </tr>
        <tr>
            <th><label>대표 로케이션</label></th>
            <td><input type="text" id="location" ></td>

            <th><label>유통기한 임박 기준일</label></th>
            <td><input type="number" id="near_exp_day" ></td>

            <th><label>출고 불가 기준일</label></th>
            <td><input type="number" id="non_deliver_day" ></td>
        </tr>

        <tr>
            <th><label>품목 설명</label></th>
            <td colspan="3"><textarea type="text" id="description" ></textarea></td>

        </tr>
        <tr><td><label>EA 정보</label></td></tr>
        <tr>
            <th><label>바코드</label></th>
            <td><input type="text" id="item_barcode" ></td>
            <th><label>중량</label></th>
            <td><input type="text" id="item_weight" ></td>
        </tr>
        <tr>
            <th><label>넓이</label></th>
            <td><input type="text" id="item_width" ></td>
            <th><label>깊이</label></th>
            <td><input type="text" id="item_depth" ></td>
            <th><label>높이</label></th>
            <td><input type="text" id="item_height" ></td>
        </tr>
        <tr><td><label>CASE 정보</label></td></tr>
        <tr>
            <th><label>CASE 낱개수량</label></th>
            <td><input type="text" id="case_ea_qty" ></td>
            <th><label>CASE 바코드</label></th>
            <td><input type="text" id="case_barcode" ></td>
            <th><label>CASE 중량</label></th>
            <td><input type="text" id="case_weight" ></td>
        </tr>
        <tr>
            <th><label>CASE 넓이</label></th>
            <td><input type="text" id="case_width" ></td>
            <th><label>CASE 깊이</label></th>
            <td><input type="text" id="case_depth" ></td>
            <th><label>CASE 높이</label></th>
            <td><input type="text" id="case_height" ></td>
        </tr>
        <tr><td><label>BOX 정보</label></td></tr>
        <tr>
            <th><label>BOX 낱개수량</label></th>
            <td><input type="text" id="box_ea_qty" ></td>
            <th><label>BOX 바코드</label></th>
            <td><input type="text" id="box_barcode" ></td>

            <th><label>BOX 중량</label></th>
            <td><input type="text" id="box_weight" ></td>
        </tr>
        <tr>
            <th><label>BOX 넓이</label></th>
            <td><input type="text" id="box_width" ></td>
            <th><label>BOX 깊이</label></th>
            <td><input type="text" id="box_depth" ></td>
            <th><label>BOX 높이</label></th>
            <td><input type="text" id="box_height" ></td>
        </tr>

        <tr><td><label>PALLET 정보</label></td></tr>
        <tr>
            <th><label>PALLET 낱개수량</label></th>
            <td><input type="text" id="pallet_ea_qty" ></td>
            <th><label>PALLET 바코드</label></th>
            <td><input type="text" id="pallet_barcode" ></td>

            <th><label>PALLET 중량</label></th>
            <td><input type="text" id="pallet_weight" ></td>
        </tr>
        <tr>
            <th><label>PALLET 넓이</label></th>
            <td><input type="text" id="pallet_width" ></td>
            <th><label>PALLET 깊이</label></th>
            <td><input type="text" id="pallet_depth" ></td>
            <th><label>PALLET 높이</label></th>
            <td><input type="text" id="pallet_height" ></td>
        </tr>
    </table>

</div>
</body>
<script type="text/javascript" src="/mst/item/item.js?vs="<%=nowDatetime%> ></script>
</html>
