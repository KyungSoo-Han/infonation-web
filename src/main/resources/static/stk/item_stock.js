let dataProvider, gridView;
let current;


let Field = [

    {
        "fieldName" : "customerId",
        "dataType" : "text"
    },
    {
        "fieldName" : "customerName",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemId",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemName",
        "dataType" : "text"
    },
    {
        "fieldName" : "qty",
        "dataType" : "number"
    },

    {
        "fieldName": "expDate",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName": "makeDate",
        "dataType": "text",
        "datetimeFormat":"yyyy-MM-dd"
    },
    {
        "fieldName" : "makeLotNo",
        "dataType" : "text"
    }
]


let Column =[

    {
        "name" : "customerId",
        "fieldName" : "customerId",
        "type" :"data",
        "width" : "80",
        "header" :{
            "text" : "화주사 ID",
        }
    },
    {
        "name" : "customerName",
        "fieldName" : "customerName",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "화주사명",
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "itemId",
        "fieldName" : "itemId",
        "type" :"data",
        "width" : "110",
        "header" :{
            "text" : "품목 ID",
        }
    },
    {
        "name" : "itemName",
        "fieldName" : "itemName",
        "type" :"data",
        "width" : "180",
        "header" :{
            "text" : "품목 명",
        },
        footer: {
            text: "합계 =>"
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "qty",
        "fieldName" : "qty",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "수량",
        },
        "numberFormat" : "#,###.00",
        footer: {
            text: "",
            numberFormat : "#,###.00",
            expression: "sum",
        }
    },
    {
        "name" : "expDate",
        "fieldName" : "expDate",
        "width" : "100",
        "type" :"data",
        "header" :{
            "text" : "유통기한",
        }
    },
    {
        "name" : "makeDate",
        "fieldName" : "makeDate",
        "width" : "100",
        "type" :"data",
        "header" :{
            "text" : "제조일자",
        }
    },
    {
        "name" : "makeLotNo",
        "fieldName" : "makeLotNo",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "생산LOT",
        }
    }
]



function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(Field);
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        commitByCell        : true,
        commitWhenExitLast  : true,
        commitWhenLeave     : true
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
    gridView.setColumns(Column)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;

};


function Search(){

    gridView.showLoading();

    let srchCond = new Object();
    srchCond.bizId = "1";
    srchCond.customerId ="1";//document.getElementById('customerId').value;

    $.ajax({
        method : "POST",
        url : "http://localhost:81/api/stock",
        contentType: 'application/json',
        data: JSON.stringify(srchCond),
        success: function(data) {

            dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}