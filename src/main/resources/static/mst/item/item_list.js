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

        GetSupplier(document.getElementById('customer').value);

    }, error: function (data) {
        console.log(data);
    }
});
function GetSupplier(customerCd){

    $("#supplier").empty();

    $.ajax({
        method : "GET",
        url : "http://localhost/api/select/supplier/"+ bizCd +"/" +customerCd,
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            for(let i = 0; i < data.length; i ++){
                console.log(data[i].code);
                $("#supplier").append("<option value=" + data[i].code + ">" + data[i].name +"</option>");
            }
        }, error: function (data) {
            console.log(data);
        }
    });

}

let itemListField = [
    {
        "fieldName" : "itemCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemNm",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemSnm",
        "dataType" : "text"
    },
    {
        "fieldName" : "supplierCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "description",
        "dataType" : "text"
    },
    {
        "fieldName" : "fromMakeDay",
        "dataType" : "int"
    },
    {
        "fieldName" : "isMakeDay",
        "dataType" : "text"
    },
    {
        "fieldName" : "isSet",
        "dataType" : "text"
    },
    {
        "fieldName" : "location",
        "dataType" : "text"
    },
    {
        "fieldName" : "nearExpDay",
        "dataType" : "int"
    },
    {
        "fieldName" : "nonDeliverDay",
        "dataType" : "int"
    },
    {
        "fieldName" : "safeStockQty",
        "dataType" : "int"
    },
    {
        "fieldName" : "itemBarcode",
        "dataType" : "text"
    },
    {
        "fieldName" : "itemWidth",
        "dataType" : "int"
    },
    {
        "fieldName" : "itemDepth",
        "dataType" : "int"
    },
    {
        "fieldName" : "itemHeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "itemWeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "caseBarcode",
        "dataType" : "text"
    },
    {
        "fieldName" : "caseEaQty",
        "dataType" : "int"
    },
    {
        "fieldName" : "caseWidth",
        "dataType" : "int"
    },
    {
        "fieldName" : "caseDepth",
        "dataType" : "int"
    },
    {
        "fieldName" : "caseHeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "caseWeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "boxBarcode",
        "dataType" : "text"
    },
    {
        "fieldName" : "boxEaQty",
        "dataType" : "int"
    },
    {
        "fieldName" : "boxWidth",
        "dataType" : "int"
    },
    {
        "fieldName" : "boxDepth",
        "dataType" : "int"
    },
    {
        "fieldName" : "boxHeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "boxWeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "palletBarcode",
        "dataType" : "text"
    },
    {
        "fieldName" : "palletEaQty",
        "dataType" : "int"
    },
    {
        "fieldName" : "palletWidth",
        "dataType" : "int"
    },
    {
        "fieldName" : "palletDepth",
        "dataType" : "int"
    },
    {
        "fieldName" : "palletHeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "palletWeight",
        "dataType" : "int"
    },
    {
        "fieldName" : "status",
        "dataType" : "text"
    }

]

let itemListColumn =[

    {
        "name" : "itemCd",
        "fieldName" : "itemCd",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목코드",
        }
    },
    {
        "name" : "itemNm",
        "fieldName" : "itemNm",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목명",
        }
    },
    {
        "name" : "itemSnm",
        "fieldName" : "itemSnm",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목 약식 명칭",
        }
    },
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
        "name" : "description",
        "fieldName" : "description",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목 설명",
        }
    },
    {
        "name" : "fromMakeDay",
        "fieldName" : "fromMakeDay",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "제조일로부터 00일",
        }
    },
    {
        "name" : "isMakeDay",
        "fieldName" : "isMakeDay",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "제조일자 사용",
        }
    },
    {
        "name" : "isSet",
        "fieldName" : "isSet",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "세트 여부",
        }
    },
    {
        "name" : "location",
        "fieldName" : "location",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "대표 로케이션",
        }
    },
    {
        "name" : "nearExpDay",
        "fieldName" : "nearExpDay",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "유통기한 임박 기준일",
        }
    },
    {
        "name" : "nonDeliverDay",
        "fieldName" : "nonDeliverDay",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "출고 불가 기준일",
        }
    },
    {
        "name" : "safeStockQty",
        "fieldName" : "safeStockQty",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "안전재고량",
        }
    },
    {
        "name" : "itemBarcode",
        "fieldName" : "itemBarcode",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목 바코드",
        }
    },
    {
        "name" : "itemWidth",
        "fieldName" : "itemWidth",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "넓이",
        }
    },
    {
        "name" : "itemDepth",
        "fieldName" : "itemDepth",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "깊이",
        }
    },
    {
        "name" : "item_height",
        "fieldName" : "item_height",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "높이",
        }
    },
    {
        "name" : "item_weight",
        "fieldName" : "item_weight",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "무게",
        }
    },
    {
        "name" : "case_barcode",
        "fieldName" : "case_barcode",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 바코드",
        }
    },
    {
        "name" : "case_ea_qty",
        "fieldName" : "case_ea_qty",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 입수량",
        }
    },
    {
        "name" : "case_width",
        "fieldName" : "case_width",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 넓이",
        }
    },
    {
        "name" : "case_depth",
        "fieldName" : "case_depth",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 깊이",
        }
    },
    {
        "name" : "case_height",
        "fieldName" : "case_height",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 높이",
        }
    },
    {
        "name" : "case_weight",
        "fieldName" : "case_weight",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "케이스 무게",
        }
    },
    {
        "name" : "box_barcode",
        "fieldName" : "box_barcode",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 바코드",
        }
    },
    {
        "name" : "box_ea_qty",
        "fieldName" : "box_ea_qty",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 입수량",
        }
    },
    {
        "name" : "box_width",
        "fieldName" : "box_width",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 넓이",
        }
    },
    {
        "name" : "box_depth",
        "fieldName" : "box_depth",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 깊이",
        }
    },
    {
        "name" : "box_height",
        "fieldName" : "box_height",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 높이",
        }
    },
    {
        "name" : "box_weight",
        "fieldName" : "box_weight",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "박스 무게",
        }
    },
    {
        "name" : "pallet_barcode",
        "fieldName" : "pallet_barcode",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 바코드",
        }
    },
    {
        "name" : "pallet_ea_qty",
        "fieldName" : "pallet_ea_qty",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 입수량",
        }
    },
    {
        "name" : "pallet_width",
        "fieldName" : "pallet_width",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 넓이",
        }
    },
    {
        "name" : "pallet_depth",
        "fieldName" : "pallet_depth",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 깊이",
        }
    },
    {
        "name" : "pallet_height",
        "fieldName" : "pallet_height",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 높이",
        }
    },
    {
        "name" : "pallet_weight",
        "fieldName" : "pallet_weight",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "파렛트 무게",
        }
    },
    {
        "name" : "status",
        "fieldName" : "status",
        "type" :"data",
        "width" : "120",
        "header" :{
            "text" : "품목 활성화 상태",
        }
    }

]

function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(itemListField);
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
    gridView.setColumns(itemListColumn)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;
}

function Search(){

    let customer = document.getElementById('customerCd').value;
    /*    let customer = $("#customer option:selected").val();*/

    $.ajax({
        method: "GET",
        url: "http://localhost/api/item/list?"+"bizCd="+bizCd+"&customerCd="+customer+"",
        contentType: 'application/json',
        success: function(data) {
            dataProvider.fillJsonData(data.data, {});   // 결과 데이터 그리드에 채워 넣기
            gridView.closeLoading();                    // 로딩창 닫기
        }, error: function (data) {
            gridView.closeLoading();
        }
    });

}

$("#customer").on('change', () => {

    GetSupplier(document.getElementById('customer').value);
});
