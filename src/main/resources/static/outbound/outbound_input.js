let dataProvider, gridView;
let current;


let outbound_Field = [
    {
        "fieldName" : "outboundSeq",
        "dataType" : "number"
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
  /*  {
        "fieldName" : "amount",
        "dataType" : "number"
    },*/
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


let outbound_Column =[
    {
        "name" : "outboundSeq",
        "fieldName" : "outboundSeq",
        "type" :"data",
        "width" : "50",
        "header" :{
            "text" : "순번",
        },
        "visible" :false,
        numberFormat: "#,##0",
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            ret.styleName = "readonly-column";
            return ret;
        }
    },{
        "name" : "itemId",
        "fieldName" : "itemId",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "품목 ID",
        },
        button: "action",
        buttonVisibility: "always",
        styleCallback: function(grid, dataCell){
            let ret = {}

            if(dataCell.item.rowState == 'created' || dataCell.item.itemState == 'appending' || dataCell.item.itemState == 'inserting'){
                ret.editable = true;
            } else {
                ret.editable = false;
                ret.styleName = "readonly-column";
            }

            return ret;
        }
    },
    {
        "name" : "itemName",
        "fieldName" : "itemName",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "품목 명",
        },
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            ret.styleName = "readonly-column";

            return ret;
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
        "numberFormat" : "#,###.00"
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
 /*   {
        "name" : "amount",
        "fieldName" : "amount",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "공급가",
        },
        "numberFormat" : "#,###.00",
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            ret.styleName = "readonly-column";

            return ret;
        }
    },*/
    {
        "name" : "expDate",
        "fieldName" : "expDate",
        "width" : "100",
        "header" :{
            "text" : "유통기한",
        },
        "editor": {
            "type": "date",
            "datetimeFormat": "yyyy-MM-dd",
            "commitOnSelect": true,
            "dropDownWhenClick":true,
            "showButtons": false,
            "mask": {
                "editMask": "9999-99-99",
                "includedFormat": true
            },
            "defaultShowDate": "today"
        }
    },
    {
        "name" : "makeDate",
        "fieldName" : "makeDate",
        "width" : "100",
        "header" :{
            "text" : "제조일자",
        },
        "editor": {
            "type": "date",
            "datetimeFormat": "yyyy-MM-dd",
            "commitOnSelect": true,
            "dropDownWhenClick":true,
            "showButtons": false,
            "mask": {
                "editMask": "9999-99-99",
                "includedFormat": true
            },
            "defaultShowDate": "today"
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
            "text" : "비고",
        },
        styleName: 'left-align-column'
    }
]
function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(outbound_Field);
    dataProvider.setOptions({
        softDeleting: false                 // 행 삭제 시 실제로 삭제 됨, true: 삭제되지 않고 상태를 보여줌
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        insertable          : true,          // 행 삽입 가능 여부
        deleteable          : true,          // 행 삭제 가능 여부
        commitByCell        : true,
        commitWhenExitLast  : true,
        commitWhenLeave     : true
    });
    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;

    gridView.pasteOptions.checkReadOnly = true; //readOnly이거나 editable이 false인 Column은 paste대상에서 제외
    gridView.displayOptions.rowHeight = 23;
    gridView.pasteOptions.numberChars = [',']   //***숫자 필드에 '1,000'을 붙여넣기 할때 ','문자로 인해 1 붙여넣기 될때
    gridView.sortMode = 'explicit';         // 셀 입력중 그리드에 정렬이 설정되어 있을 경우 정렬이 자동으로 적용되지 않음
    gridView.filterMode = 'explicit';

    gridView.setDataSource(dataProvider);
    gridView.setColumns(outbound_Column);

    /**
     * 셀 버튼 클릭 이벤트
     * @param grid
     * @param cell
     * @param col
     */
    gridView.onCellButtonClicked = function(grid, cell, col) {

        let rowState = dataProvider.getRowState(cell.itemIndex);
        if(rowState == 'updated' || rowState == 'none' )
            return;

        if(document.getElementById('customerId').value == '')
        {
            alert('화주사를 선택해야합니다.');
            return;
        }
        current = gridView.getCurrent();
        SearchModal('item','');     // 모달 열기
    };
    /**
     * 셀 로우 데이터 변경 이벤트
     * @param grid
     * @param itemIndex
     * @param dataRow
     * @param field
     * @param oldValue
     * @param newValue
     */
    gridView.onEditRowChanged = function (grid, index, dataRow, field, oldValue, newValue) {
        let v = 0;
        console.log(field);
        if(field == 4){         // 수량 변경시
            v = grid.getValue(index, "qty");
            grid.setValue(index, "amount", v * newValue);
        }
        else if(field == 3){    // 단가 변경시
            v = grid.getValue(index, "price");
            grid.setValue(index, "amount", v * newValue);
        }
    };
    /**
     * 셀 키 입력시
     * @param grid
     * @param event
     */
    gridView.onKeyDown= function (grid, event) {

        if((event.key == "Enter") && gridView.getCurrent().column == 'itemId'){
            if(document.getElementById('customerId').value == '')
            {
                alert('화주사를 선택해야합니다.');
                return;
            }
            current = gridView.getCurrent();
            SearchModal('item',gridView.getEditValue() );
            //gridView.setCurrent({dataRow:current.dataRow}); // 수동 포커스 이동
        }
    }

};

function addRow() {
    dataProvider.addRow({});
}
function Search(){
    if(document.getElementById('outboundNo').value == ''){
        alert('입고번호를 입력후 조회하세요.');
        return;
    }

    gridView.showLoading();
    $.ajax({
        method : "GET",
        url : "http://api.infonation.kr/api/outbound?outboundNo="+document.getElementById('outboundNo').value,
        contentType: 'application/json',
        headers:{
            "userId": "1"
        },
        success: function(data) {
            console.log(data.data[0]);
            if( data.data[0] !== undefined) {
                document.getElementById('outboundNo').readOnly = true;                   // 전표 텍스트박스 readOnly
                document.getElementById('outboundDate').value = data.data[0].outboundDate;
                document.getElementById('outboundExpDate').value = data.data[0].outboundExpDate;
                document.getElementById('customerId').value = data.data[0].customerId;
                document.getElementById('customerName').value = data.data[0].customerName;
                document.getElementById('destinationId').value = data.data[0].destinationId;
                document.getElementById('destinationName').value = data.data[0].destinationName;
                document.getElementById('remark').value = data.data[0].remark;

                dataProvider.fillJsonData(data.data[0].itemResponse, {});   // 결과 데이터 그리드에 채워 넣기
            }
            gridView.closeLoading();                    // 로딩창 닫기

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function Save(){

    let mainData = new Object() ;
    let itemData = new Array();
    gridView.showLoading();

    let getSaveData = [ ...dataProvider.getAllStateRows().updated, ...dataProvider.getAllStateRows().created];
    let saveData = getSaveData.map(e=>{
        return e
    });
    console.log(saveData);

    mainData.bizId = '1';
    mainData.centerId = '1';
    mainData.outboundNo = document.getElementById('outboundNo').value;    // 신규 입력시 공백,
    mainData.outboundDate = document.getElementById('outboundDate').value;
    mainData.destinationId = document.getElementById('destinationId').value;
    mainData.customerId = document.getElementById('customerId').value;
    mainData.outboundExpDate = document.getElementById('outboundExpDate').value;
    mainData.remark = document.getElementById('remark').value;

    if(saveData.length > 0) {
        for (let i in saveData) {
            if(dataProvider.getJsonRow(saveData[i]).itemId === undefined)
                continue;

            itemData.push(dataProvider.getJsonRow(saveData[i]));        // 그리드의 값으로 json 데이터 생성
        }
    }
    mainData.itemCreateRequest = itemData;
    console.log(mainData);
    console.log(itemData);
    
    $.ajax({
        method : "POST",
        url : "http://api.infonation.kr/api/outbound",
        contentType: 'application/json',
        headers: {
            "userId": "1",
        },
        data: JSON.stringify (mainData),
        success: function(data) {
            console.log(data);
            dataProvider.fillJsonData(data.data.itemCreateResponse, {});   // 결과 데이터 그리드에 채워 넣기
            dataProvider.clearRowStates();              // 추가 & 수정 상태 초기화
            gridView.closeLoading();                    // 로딩창 닫기

            document.getElementById('outboundNo').value = data.data.outboundNo;       // 채번된 전표번호 입력
            document.getElementById('outboundNo').readOnly  = true;                   // 전표 텍스트박스 readOnly

        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function New(){
    document.getElementById('outboundNo').readOnly  = false;

    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'text') {
            inputs[i].value = "";
        }
    }
    let textareas = document.getElementsByTagName('textarea');
    textareas[0].value = "";

    dataProvider.clearRows();
}

function Delete(){
    $.ajax({
        method : "DELETE",
        url : "http://api.infonation.kr/api/outbound/1/"+document.getElementById('outboundNo').value,
        contentType: 'application/json',
        success: function(data) {
            New();
            gridView.closeLoading();                    // 로딩창 닫기
            console.log(data);
        }, error: function (data) {
            gridView.closeLoading();
            console.log(data);
        }
    });
}

function DeleteItem(){
    let deleteData = gridView.getCheckedRows();
    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    for (let i in deleteData) {

        jsonData = dataProvider.getJsonRow(deleteData[i]);        // 그리드의 값으로 json 데이터 생성
        jsonData.biz_cd = '10001';
        jsonData.center_cd = '01';
        jsonData.slip_no = document.getElementById('slip_no').value;    // 신규 입력시 공백,
        jsonData.slip_dt = document.getElementById('slip_dt').value;
        jsonData.custProv_cd = document.getElementById('custProv_cd').value;
        jsonData.cust_cd = document.getElementById('cust_cd').value;
        jsonData.outboundExpDate = document.getElementById('outboundExpDate').value;
        jsonData.remark = document.getElementById('remark').value;
        jsonData.user_id = 'hanks';

        if (jsonData.item_cd === undefined)
            continue;

        data.push(jsonData);

    }
    if(data.length == 0){
        dataProvider.removeRows(deleteData);
        gridView.closeLoading();
        return;
    }

    $.ajax({
        method : "DELETE",
        url : "http://api.infonation.kr/api/outbound/deleteitem",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            dataProvider.removeRows(deleteData);
            gridView.closeLoading();                    // 로딩창 닫기

            let rowCount = dataProvider.getRowCount();
            if(rowCount==0)
                New();
        }, error: function (data) {
            gridView.closeLoading();
        }
    });
}
function Test(){
    //console.log(dataProvider.getAllStateRows());
    console.log(gridView.getCheckedItems());
}
