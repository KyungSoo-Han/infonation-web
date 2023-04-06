let bizCd = localStorage.getItem("bizCd");
let dataProvider, gridView;
let current;

$.ajax({
    method : "GET",
    url : "http://localhost/api/select/customer/"+ bizCd,
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for(let i = 0; i < data.length; i ++){
            console.log(data[i].code);
            $("#customer").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
        }

    }, error: function (data) {
        console.log(data);
    }
});

let supplierListField = [
    {
        "fieldName" : "supplierCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "supplierNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "supplierEnm",
        "dataType" : "text"
    },
    {
        "fieldName" : "ownerNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "bizNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "bizItem",
        "dataType" : "text"
    },
    {
        "fieldName" : "bizType",
        "dataType" : "text"
    },
    {
        "fieldName" : "email",
        "dataType" : "text"
    },
    {
        "fieldName" : "telNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "faxNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "zipNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "zipAddr1",
        "dataType" : "text"
    },
    {
        "fieldName" : "zipAddr2",
        "dataType" : "text"
    },
    {
        "fieldName" : "homepage",
        "dataType" : "text"
    },
    {
        "fieldName" : "status",
        "dataType" : "text"
    },
]

let supplierListColumn =[

    {
        "name" : "supplierCd",
        "fieldName" : "supplierCd",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "공급사코드",
        }
    },
    {
        "name" : "supplierNm",
        "fieldName" : "supplierNm",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "공급사명",
        }
    },
    {
        "name" : "supplierEnm",
        "fieldName" : "supplierEnm",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "공급사 영문명",
        }
    },
    {
        "name" : "ownerNm",
        "fieldName" : "ownerNm",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "대표자",
        }
    },
    {
        "name" : "bizNo",
        "fieldName" : "bizNo",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "사업자번호",
        }
    },
    {
        "name" : "bizItem",
        "fieldName" : "bizItem",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "종목",
        }
    },
    {
        "name" : "bizType",
        "fieldName" : "bizType",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "업태",
        }
    },
    {
        "name" : "email",
        "fieldName" : "email",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "이메일",
        }
    },
    {
        "name" : "telNo",
        "fieldName" : "telNo",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "전화번호",
        }
    },
    {
        "name" : "faxNo",
        "fieldName" : "faxNo",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "팩스번호",
        }
    },
    {
        "name" : "zipNo",
        "fieldName" : "zipNo",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "우편번호",
        }
    },
    {
        "name" : "zipAddr1",
        "fieldName" : "zipAddr1",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "주소",
        }
    },
    {
        "name" : "zipAddr2",
        "fieldName" : "zipAddr2",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "상세 주소",
        }
    },
    {
        "name" : "homepage",
        "fieldName" : "homepage",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "홈페이지",
        }
    },
    {
        "name" : "status",
        "fieldName" : "status",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "상태",
        }
    }
]

function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(supplierListField);
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        commitByCell: true,
        commitWhenExitLast: true,
        commitWhenLeave: true
    });
    gridView.setStateBar({
        visible: false
    });
    //편집 가능,불가능 그리드
    gridView.editOptions.editable = false;
    //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
    gridView.pasteOptions.checkReadOnly = true;
    gridView.groupPanel.visible = true;

    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;
    gridView.displayOptions.rowHeight = 23;
    gridView.sortMode = "explicit";         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음


    gridView.setDataSource(dataProvider);
    gridView.setColumns(supplierListColumn)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;
}

function Search(){

    let customer = document.getElementById('customerCd').value;
    /*let customer = $("#customer option:selected").val();*/

    $.ajax({
        method: "GET",
        url: "http://localhost/api/supplier/list?"+"bizCd="+bizCd+"&customerCd="+customer+"",
        contentType: 'application/json',
        success: function(data) {
            if (data != null) {
                dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
                gridView.closeLoading();                    // 로딩창 닫기
            } else {
                window.alert("조회하신 내역이 없습니다.")
            }
        }
    });
}
