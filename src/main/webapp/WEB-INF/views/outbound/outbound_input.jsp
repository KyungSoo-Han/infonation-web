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
    <title>출고등록</title>
	<%
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
		String nowDatetime = formatter.format(now);
	%>
	<link rel="stylesheet" href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>"/>
	<link rel="stylesheet" href="/outbound/outbound_modal.css?vs=<%=nowDatetime%>"/>
	<script type="text/javascript" src="/libs/realgrid-lic.js?vs=<%=nowDatetime%>"></script>
	<script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
	<script type="text/javascript" src="/libs/jquery-3.4.0.min.js" ></script>
	<script type="text/javascript" src="/outbound/outbound_input.js?vs=<%=nowDatetime%>"></script>
	<script type="text/javascript" src="/outbound/outbound_modal.js?vs=<%=nowDatetime%>"></script>
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
	<p>출고 > 출고등록</p>
	<button id="searchBtn" onclick="Search()">조회</button>
	<button id="newBtn" onclick="New()">신규</button>
	<button id="saveBtn" onclick="Save()">저장</button>
	<button id="deleteBtn" onclick="Delete()">삭제</button>

	<div id="" style=" width: 100%;  padding-top: 10px">
		<div class="formTable">
			<form autocomplete="off">
				<table>
					<tr>
						<th><label>출고번호</label></th>
						<td><input type="text" id="outboundNo" ></td>

						<th><label>출고일자</label></th>
						<td><input type="date" id="outboundDate"  ></td>

						<th><label>출고예정일자</label></th>
						<td><input type="date" id="outboundExpDate"></td>
					</tr>
					<tr>
						<th><label>화주사코드</label></th>
						<td>
							<input type="text" id="customerId" >
							<button type="button" onclick="SearchModal('customer','')">찾기</button>
						</td>

						<th><label>화주사명</label></th>
						<td><input type="text" id="customerName"  readonly></td>

						<th><label>배송지코드</label></th>
						<td>
							<input type="text" id="destinationId" >
							<button type="button" onclick="SearchModal('destination','')">찾기</button>
						</td>

						<th><label>배송지명</label></th>
						<td><input type="text" id="destinationName" readonly></td>
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
	<div id="outbound"  style ="width: 100%; height:400px">
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
	window.addEventListener('DOMContentLoaded', function () {

		createGrid("outbound")
		createModalGrid("selectGrid")

		document.getElementById("outboundDate").value = new Date().toISOString().slice(0,10);
		//document.getElementById("outboundExpDate").value = new Date().toISOString().slice(0,10);

	});

	let outboundNo = document.getElementById('outboundNo');
	let customerId = document.getElementById('customerId');
	let customerName = document.getElementById('customerName');
	let destinationId = document.getElementById('destinationId');
	let destinationName = document.getElementById('destinationName');

	outboundNo.addEventListener("keyup", function (event) {
		if(outboundNo.value == ''){
			alert('출고번호를 입력후 조회하세요.');
			return;
		}
		if(event.key=="Enter")
			Search();
	})
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

	let codeId = document.getElementById('codeId');
	codeId.addEventListener("keyup", function (event) {
		console.log(event.key);
		if(event.key=="Enter")
			SearchModal('','');
	})

	let codeName = document.getElementById('codeName');
	codeName .addEventListener("keyup", function (event) {
		console.log(event.key);
		if(event.key=="Enter")
			SearchModal('','');
	})

/*
	var children = document.body.childNodes;
	children.forEach(function(item){
		console.log(item);
	});
*/

</script>
</html>