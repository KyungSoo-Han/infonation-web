let dataProvider, gridView;
let current;
let bizCd = localStorage.getItem("bizCd");

let centerField = [
    {
        "fieldName" : "centerCd",
        "dataType" : "text"
    },
    {
        "fieldName" : "centerNm",
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
        "fieldName" : "remark",
        "text-align" :"left",
        "dataType" : "text"
    }
]

let centerColumn =[
    {
        "name" : "centerCd",
        "fieldName" : "centerCd",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "센터 코드",
        },
        /*styleCallback: function(grid, dataCell){
            let ret = {}

            if(dataCell.item.rowState == 'created' || dataCell.item.itemState == 'appending' || dataCell.item.itemState == 'inserting'){
                ret.editable = true;
            } else {
                ret.editable = false;
                ret.styleName = "readonly-column";
            }

            return ret;
        }*/
    },
    {
        "name" : "centerNm",
        "fieldName" : "centerNm",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "센터 명",
        }
    },
    {
        "name" : "zipNo",
        "fieldName" : "zipNo",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "우편번호",
        }
    },
    {
        "name" : "zipAddr1",
        "fieldName" : "zipAddr1",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "주소",
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "zipAddr2",
        "fieldName" : "zipAddr2",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "상세주소",
        },
        styleName: 'left-align-column'
    },
    {
        "name" : "remark",
        "fieldName" : "remark",
        "type" :"data",
        "width" : "250",
        "header" :{
            "text" : "비고",
        },
        styleName: 'left-align-column'
    }
]

function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(centerField);
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
    gridView.setColumns(centerColumn)
    gridView.onContextMenuPopup = function (grid, x, y, elementName) {
        // realgrid-utils.js 기본 팝업 메뉴 생성
        setContextMenu(gridView);
    };
    gridView.onContextMenuItemClicked = onContextMenuClick;
}

function Search(){

    $.ajax({
        method: "GET",
        url: "http://localhost/api/center/list?"+"bizCd="+bizCd+"",
        contentType: 'application/json',
        datatype: JSON,
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
