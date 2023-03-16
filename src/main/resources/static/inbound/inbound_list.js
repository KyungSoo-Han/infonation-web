let dataProvider, gridView;
let current;


let inbound_Field = [
    {
        "fieldName" : "inboundNo",
        "dataType" : "text"
    },
    {
        "fieldName" : "inboundSeq",
        "dataType" : "number"
    },
    {
        "fieldName" : "customerId",
        "dataType" : "text"
    },
    {
        "fieldName" : "customerName",
        "dataType" : "text"
    },
    {
        "fieldName" : "supplierId",
        "dataType" : "text"
    },
    {
        "fieldName" : "supplierName",
        "dataType" : "text"
    },
    {
        "fieldName" : "inboundExpDate",
        "dataType" : "text"
    },
    {
        "fieldName" : "remark",
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
        "fieldName" : "price",
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
    },
    {
        "fieldName" : "subRemark",
        "dataType" : "text"
    }
]


let inbound_Column =[
    {
        "name" : "inboundNo",
        "fieldName" : "inboundNo",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "입고번호",
        }
    },
    {
        "name" : "inboundSeq",
        "fieldName" : "inboundSeq",
        "type" :"data",
        "width" : "50",
        "header" :{
            "text" : "순번",
        },
        numberFormat: "#,##0"
    },
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
        "name" : "supplierId",
        "fieldName" : "supplierId",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "공급사 ID",
        }
    },
    {
        "name" : "supplierName",
        "fieldName" : "supplierName",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "공급사명",
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "inboundExpDate",
        "fieldName" : "inboundExpDate",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "입고예정일",
        }
    },
    {
        "name" : "remark",
        "fieldName" : "remark",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "비고",
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
        "name" : "price",
        "fieldName" : "price",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "단가",
        },
        "numberFormat" : "#,###.00"
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
    },
    {
        "name" : "subRemark",
        "fieldName" : "subRemark",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "상세 비고",
        },
        styleName: 'left-align-column'
    }
]


function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(inbound_Field);
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
    gridView.setColumns(inbound_Column)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;

/*

    gridView.setContextMenu([
        {
            label: "필터"
        },
        {
            label:"필터 해제"
        },
        {
            label:"열고정"
        },
        {
            label:"열고정 해제"
        },
        {
            label:"행고정"
        },
        {
            label:"행고정 해제"
        }
    ]);

    gridView.onContextMenuItemClicked = function(grid, item, clickData) {
        console.log(clickData);
        console.log(item);
        if(item.label == '필터') {
            let cols = gridView.getColumns();
            for (let i in cols) {
                gridView.setColumnProperty(cols[i].fieldName, "autoFilter", true);
            }
        }
        else if (item.label == '필터 해제'){
            let cols = gridView.getColumns();
            for (let i in cols) {
                gridView.setColumnProperty(cols[i].fieldName, "autoFilter", false);
            }
        }
        else if (item.label == '열고정'){
            let leftFixed = gridView.fixedOptions.leftFixed;
            console.log(leftFixed);
            gridView.setFixedOptions({
                leftFixed:!leftFixed
            });
            gridView.setFixedOptions({
                colCount: clickData.fieldIndex
            });
        }
        else if (item.label == '열고정 해제'){
            gridView.setFixedOptions({
                leftFixed:false
            });
            gridView.setFixedOptions({
                colCount: 0
            });

        }
        else if (item.label == '행고정'){
            let rowFixed = gridView.fixedOptions.rowFixed;
            console.log(rowFixed);
            gridView.setFixedOptions({
                rowFixed:!rowFixed
            });
            gridView.setFixedOptions({
                rowCount: clickData.dataRow
            });
        }
        else if (item.label == '행고정 해제'){
            gridView.setFixedOptions({
                rowFixed:false
            });
            gridView.setFixedOptions({
                rowCount: 0
            });
        }
    };*/
    //setColumns보다 아래에 있어야 한다.
    //gridView.setColumnProperty("custProv_nm", "autoFilter", true);
    //gridView.setColumnProperty("item_cd", "autoFilter", true);
    //gridView.setColumnProperty("item_nm", "autoFilter", true);

};

function Search(){

    gridView.showLoading();

    let srchCond = new Object();
    srchCond.bizId = "1";
    srchCond.inboundNo = document.getElementById('inboundNo').value;    // 신규 입력시 공백,
    srchCond.fromDate = document.getElementById('fromDate').value;
    srchCond.toDate = document.getElementById('toDate').value;
    srchCond.customerId = document.getElementById('customerId').value;
    srchCond.supplierId = document.getElementById('supplierId').value;

    $.ajax({
        method : "POST",
        url : "http://api.infonation.kr/api/inbound/list",
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

function excelExport() {

    if (dataProvider.getRowCount() == 0){
        alert("조회된 목록이 없습니다.");
        return;
    }
    let now = new Date();
    let tempTime = now.YYYYMMDDHHMMSS();
    gridView.exportGrid({
        type: "excel",
        target: "local",
        fileName: "입고현황" + +"_"+tempTime +".xlsx",
        applyDynamicStyles: true,
        done: function () {
            // 엑셀 받기 완료 후
           /* alert("done excel export")*/
        }
    });
}

Date.prototype.YYYYMMDDHHMMSS = function () {
    let yyyy = this.getFullYear().toString();
    let MM = pad(this.getMonth() + 1,2);
    let dd = pad(this.getDate(), 2);
    let hh = pad(this.getHours(), 2);
    let mm = pad(this.getMinutes(), 2)
    let ss = pad(this.getSeconds(), 2)

    return yyyy +  MM + dd+  hh + mm + ss;
};

function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
