<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: hanks
  Date: 2022-12-29
  Time: 오후 5:45
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <%
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String nowDatetime = formatter.format(now);
    %>
    <link href="/bsrp/css/realgrid-sky-blue.css?vs=<%=nowDatetime%>" rel="stylesheet" />
    <link href="/bsrp/css/jquery-splitter.css" rel="stylesheet" >

    <script type="text/javascript" src="/libs/realgrid-lic.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/libs/realgrid.2.6.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="/libs/jquery-splitter.js"></script>

    <script type="text/javascript" src="/mst/center/centerColumn.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/mst/center/centerField.js?vs=<%=nowDatetime%>"></script>
    <script type="text/javascript" src="/mst/center/center.js?vs=<%=nowDatetime%>"></script>

    <style>

        html{ height:800px;  }
        body { height:670px;  }
        .left-align-column{
            text-align: left;
        }
        .readonly-column{
            background: #f3ebdb;
        }
    </style>
</head>
<body>

    <p>
        <h4>센터 관리</h4>
    </p>

    <section style=" height: 100%">
        <div>
            조회
        </div>
        <div>
            <select id="mst_biz">
                <option value="">전체</option>
            </select>
            <label>센터명</label><input id="srh_center_nm" class="" type="text"/>
        </div>
        <div>
            <button onclick="Search()">조회</button>
            <button onclick="addRow()">추가</button>
            <button onclick="Delete()">삭제</button>
            <button onclick="Save()">저장</button>
            <button id="Test" onclick="Test()">TEST</button>
        </div>
        <div style="height: 100%">
            <div id="realgrid" style ="width: 100%; height:100%"></div>
        </div>
    </section>
</body>


<script>

    /**
     * 스플리터
     */
    //jQuery(function($) {
    //    // 좌우div(or상하div)를 감싸는 div에 splitter를 정의한다.
    //    //$('#widget').width(0).height(400).split({orientation:'horizontal', limit:100, position:100});
    //    $('#widget').height(400).split({orientation:'horizontal', limit:100, position:100});
    //});

    /**
     * 그리드 생성
     */
    window.addEventListener('DOMContentLoaded', function () {
        createGrid("realgrid");
    });

    /**
     * 엔터 검색
     * @type {HTMLElement}
     */
    let srh = document.getElementById('srh_center_nm');
    srh.addEventListener("keyup", function (event) {
        console.log(event.key);
        if(event.key=="Enter")
            Search();
    })

    $.ajax({
        method : "GET",
        url : "http://39.117.158.182/api/select/tbl/mst_biz",
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            for(let i = 0; i < data.length; i ++){
                $("#mst_biz").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
            }

        }, error: function (data) {
            console.log(data);
        }
    });

    $("#mst_biz").on('change', () => {
       Search();
    });

    function Test(){
        let test = [ ...dataProvider.getAllStateRows().updated, ...dataProvider.getAllStateRows().created];
        let data = test.map(e=>{
            return e
        })
        console.log(data);

    }
</script>
</html>