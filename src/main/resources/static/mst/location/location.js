let bizCd = localStorage.getItem("bizCd");
let dataProvider, gridView;
let current;

$.ajax({
    method : "GET",
    url : sessionStorage.getItem("serverUrl") + "/api/select/center/"+ bizCd,
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for(let i = 0; i < data.length; i ++){
            console.log(data[i].code);
            $("#center").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
        }

    }, error: function (data) {
        console.log(data);
    }
});

let locationField = [

    {
        "fieldName" : "bizCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "centerCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "locationCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "zoneCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "locationNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "locationType",
        "dataType" : "text"
    },
    {
        "fieldName": "ableCbm",
        "dataType": "number",
    },
    {
        "fieldName": "ableWeight",
        "dataType": "number",
    },
    {
        "fieldName": "locX",
        "dataType": "number",
    },
    {
        "fieldName": "locY",
        "dataType": "number",
    },
    {
        "fieldName": "locZ",
        "dataType": "number",
    },
    {
        "fieldName": "useYn",
        "dataType": "text",
    }
]


let locationColumn =[
    {
        "name" : "locationCd",
        "fieldName" : "locationCd",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "로케이션 코드",
        }
    },
    {
        "name" : "zoneCd",
        "fieldName" : "zoneCd",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "존 코드",
        }
    },
    {
        "name" : "locationNm",
        "fieldName" : "locationNm",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "로케이션 명",
        }
    },
    {
        "name" : "locationType",
        "fieldName" : "locationType",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "로케이션 타입(할당/보관)",
        }
    },
    {
        "name" : "ableCbm",
        "fieldName" : "ableCbm",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "적치가능 CBM",
        }
    },
    {
        "name" : "ableWeight",
        "fieldName" : "ableWeight",
        "width" : "100",
        "header" :{
            "text" : "적치가능 중량",
        }
    },
    {
        "name" : "locX",
        "fieldName" : "locX",
        "width" : "100",
        "header" :{
            "text" : "열",
        }
    },
    {
        "name" : "locY",
        "fieldName" : "locY",
        "width" : "100",
        "header" :{
            "text" : "행",
        }
    },
    {
        "name" : "locZ",
        "fieldName" : "locZ",
        "width" : "100",
        "header" :{
            "text" : "단",
        }
    },
    {
        "name" : "useYn",
        "fieldName" : "useYn",
        "width" : "100",
        "header" :{
            "text" : "사용 여부",
        }
    },
]




function New(){

    dataProvider.clearRows();
}

function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(locationField);
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        insertable          : true,          // 행 삽입 가능 여부
        deleteable          : true,          // 행 삭제 가능 여부
        commitByCell: true,
        commitWhenExitLast: true,
        commitWhenLeave: true
    });
    gridView.setStateBar({
        visible: false
    });
    //편집 가능,불가능 그리드
    gridView.editOptions.editable = true;
    //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
    gridView.pasteOptions.checkReadOnly = true;
    gridView.groupPanel.visible = true;

    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;
    gridView.displayOptions.rowHeight = 23;
    gridView.sortMode = "explicit";         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음


    gridView.setDataSource(dataProvider);
    gridView.setColumns(locationColumn)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;
}

function Search(){


    let center = $("#center option:selected").val();

    $.ajax({
        method: "GET",
        url: sessionStorage.getItem("serverUrl") + "/api/location/list?"+"bizCd="+bizCd+"&centerCd="+center+"",
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


function Save(){

    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    let getSaveData = [ ...dataProvider.getAllStateRows().updated, ...dataProvider.getAllStateRows().created];
    let saveData = getSaveData.map(e=>{
        return e
    });

    let center = $("#center option:selected").val();
    for (let i in saveData) {

        jsonData = dataProvider.getJsonRow(saveData[i]);        // 그리드의 값으로 json 데이터 생성
        jsonData.bizCd = bizCd;
        jsonData.centerCd = center;
        data.push(jsonData);
    }

    console.log(jsonData);
    console.log(data);

    $.ajax({
        method : "POST",
        url : sessionStorage.getItem("serverUrl") + "/api/location/save",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {

            dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            dataProvider.clearRowStates();              // 추가 & 수정 상태 초기화
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}

function Delete() {

    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    let getSaveData = [ ...dataProvider.getAllStateRows().updated, ...dataProvider.getAllStateRows().created];
    let deleteData = getSaveData.map(e=>{
        return e
    });

    let center = $("#center option:selected").val();
    for (let i in deleteData) {

        jsonData = dataProvider.getJsonRow(deleteData[i]);        // 그리드의 값으로 json 데이터 생성
        jsonData.bizCd = bizCd;
        jsonData.centerCd = center;
        data.push(jsonData);
    }


    if (confirm("삭제하시겠습니까?")) {
        $.ajax({
            method: "POST",
            url: sessionStorage.getItem("serverUrl") + "/api/location/delete",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {

                dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
                dataProvider.clearRowStates();              // 추가 & 수정 상태 초기화
                gridView.closeLoading();                    // 로딩창 닫기
            },
            error: function (err) {
                dataProvider.clearRows();
            }
        });
    }
}

function addRow() {
    dataProvider.addRow({});
}

