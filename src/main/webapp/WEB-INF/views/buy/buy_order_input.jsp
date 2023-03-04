<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2023-01-25
  Time: 오전 9:43
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
	<link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
	<link rel="stylesheet" href="/buy/buy_order_modal.css?vs=<%=nowDatetime%>"/>
	<script type="text/javascript" src="/libs/realgrid-lic.js?vs=<%=nowDatetime%>"></script>
	<script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
	<script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
	<script type="text/javascript" src="/buy/buy_order_input.js?vs=<%=nowDatetime%>"></script>
	<script type="text/javascript" src="/buy/buy_order_modal.js?vs=<%=nowDatetime%>"></script>
	<style>
		.left-align-column{
			text-align: left;
		}
		.readonly-column{
			background: #f3ebdb;
		}
		input:read-only{
			background-color: #f3ebdb;
		}
	</style>
</head>
<body>
	<p>입고요청 > 입고요청등록</p>
	<button id="searchBtn" onclick="Search()">조회</button>
	<button id="newBtn" onclick="New()">신규</button>
	<button id="saveBtn" onclick="Save()">저장</button>
	<button id="deleteBtn" onclick="Delete()">삭제</button>

	<div id="" style=" width: 100%;  padding-top: 10px">
		<div class="formTable">
			<form autocomplete="off">
				<table>
					<tr>
						<th><label>입고요청번호</label></th>
						<td><input type="text" id="slip_no" ></td>

						<th><label>입고요청일자</label></th>
						<td><input type="date" id="slip_dt"  ></td>

						<th><label>입고예정일자</label></th>
						<td><input type="date" id="delivReq_dt"></td>
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
					<%--<tr>
						<th><label>ERP발주번호</label></th><td><input type="text" id="erp_slip_no" readonly></td>
						<th><label>ERP발주일자</label></th><td><input type="text" id="erp_slip_seq" readonly></td>
					</tr>--%>
					<tr>
						<th><label>비고</label></th><td colspan="7"><textarea id="remark" style="width: 95%"></textarea></td>
					</tr>
				</table>
			</form>
		</div>
		<br>
	</div>
	<button id="addRow" onclick="addRow()">행추가</button>
	<button id="remRow" onclick="DeleteItem()">행삭제</button>
	<div id="buy_order"  style ="width: 100%; height:400px">
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
	window.addEventListener('DOMContentLoaded', function () {

		createGrid("buy_order")
		createModalGrid("selectGrid")

		document.getElementById("slip_dt").value = new Date().toISOString().slice(0,10);
		document.getElementById("delivReq_dt").value = new Date().toISOString().slice(0,10);

	});

	let slip_no = document.getElementById('slip_no');
	let cust_cd = document.getElementById('cust_cd');
	let cust_nm = document.getElementById('cust_nm');
	let custProv_cd = document.getElementById('custProv_cd');
	let custProv_nm = document.getElementById('custProv_nm');

	slip_no.addEventListener("keyup", function (event) {
		if(slip_no.value == ''){
			alert('입고요청번호를 입력후 조회하세요.');
			return;
		}
		if(event.key=="Enter")
			Search();
	})
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

/*
	var children = document.body.childNodes;
	children.forEach(function(item){
		console.log(item);
	});
*/

</script>
</html>