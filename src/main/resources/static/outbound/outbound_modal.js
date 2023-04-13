let modal_dataProvider, modal_gridView;

let modal_Field = [
    {
        "fieldName" : "codeId",
        "dataType" : "text"
    },
    {
        "fieldName" : "codeName",
        "dataType" : "text",
        "text-align" :"left",
    }
]

let modal_Column =[
    {
        "name": "codeId",
        "fieldName": "codeId",
        "type": "data",
        "width": "150",
        "header": {
            "text": "코드",
        },
        styleCallback: function(grid, dataCell){
            let ret = {}
            ret.editable = false;
            return ret;
        }
    },
    {
        "name": "codeName",
        "fieldName": "codeName",
        "type": "data",
        "width": "250",
        "header": {
            "text": "명칭",
        },
        styleName: 'left-align-column',

        styleCallback: function (grid, dataCell) {
            let ret = {}
            ret.editable = false;
            return ret;
        }
    }
]


function createModalGrid(container) {
    modal_dataProvider = new RealGrid.LocalDataProvider();
    modal_dataProvider.setFields(modal_Field);
    modal_dataProvider.setOptions({
        softDeleting: false     //행 삭제 시 실제로 삭제됨, true: 삭제되지 않고 상태를 보여줌
    })

    modal_gridView = new RealGrid.GridView(container);
    // 체크바
    modal_gridView.setCheckBar({
        visible: false
    });
    // 상태바
    modal_gridView.setStateBar({
        visible: false
    });
    modal_gridView.header.height = 30;
    //modal_gridView.footer.height = 30;
    modal_gridView.stateBar.width = 16;
    modal_gridView.displayOptions.rowHeight = 23;
    /**
     * 그리드 더블 클릭
     * @param grid
     * @param clickData
     */
    modal_gridView.onCellDblClicked = function (grid, clickData) {

        selectedModal();
        closeModal();
    }

    modal_gridView.setDataSource(modal_dataProvider);
    modal_gridView.setColumns(modal_Column);


};

function SearchModal(param, param2) {

    //document.getElementById('codeId').value = '';
    if(param =='destination' && document.getElementById('customerId').value == '')
    {
        alert('화주사를 선택해야합니다.');
        return;
    }
    document.querySelector('#modalWrap').style.display = 'block';   // 모달 보여주기

    if(param!='')
        document.getElementById('modal_param').value = param;
    else
        param = document.getElementById('modal_param').value;

    if (param2 != '')// id값 코드에 적용, 화면에서 바로 id 입력하여 조회시
        document.getElementById('codeId').value = param2;
   /* else
        param2 = document.getElementById('codeId').value;*/

    let parentId = '';
    if(param == 'destination' || param == 'item'){
        parentId = document.getElementById('customerId').value
    }
    console.log(param);
    console.log(parentId);
    modal_gridView.showLoading();       // 모달의 로딩창

    $.ajax({
        method : "GET",
        url : sessionStorage.getItem("serverUrl") + "/api/select/"+ param
                                +"?bizId="+'1'
                                +"&parentId="+parentId
                                +"&codeId="+document.getElementById('codeId').value
                                +"&codeName="+document.getElementById('codeName').value,
        contentType: 'application/json',
        headers:{
            "userId" : "1"
        },
        success: function(data) {
            modal_dataProvider.fillJsonData(data, {});
            modal_gridView.closeLoading();      // 모달의 로딩창 닫기

        }, error: function (data) {
            modal_gridView.closeLoading();      // 모달의 로딩창 닫기
        }
    });
}

/**
 * 모달 그리드에서 데이터 선택시
 */
function selectedModal() {
    let modal_current = modal_gridView.getCurrent();

    console.log(document.getElementById('modal_param').value);

    if (document.getElementById('modal_param').value == 'customer') {
        document.getElementById('customerId').value = modal_dataProvider.getValue(modal_current.dataRow, 'codeId');
        document.getElementById('customerName').value = modal_dataProvider.getValue(modal_current.dataRow, 'codeName');
    } else if (document.getElementById('modal_param').value == 'destination') {
        document.getElementById('destinationId').value = modal_dataProvider.getValue(modal_current.dataRow, 'codeId');
        document.getElementById('destinationName').value = modal_dataProvider.getValue(modal_current.dataRow, 'codeName');
    } else if (document.getElementById('modal_param').value == 'item') {
        dataProvider.setValue(current.dataRow, 'itemId', modal_dataProvider.getValue(modal_current.dataRow, 'codeId'));
        dataProvider.setValue(current.dataRow, 'itemName', modal_dataProvider.getValue(modal_current.dataRow, 'codeName'));
    }
}

/**
 * 선택 버튼 클릭시
 */
function btnSelect(){
    selectedModal();
    closeModal();
}

/**
 * 모달 닫기
 */
function closeModal(){
    document.querySelector('#modalWrap').style.display = 'none';
    modal_dataProvider.clearRows();
    clearCode();
}
function clearCode(){
    document.getElementById('codeId').value = '';
    document.getElementById('codeName').value = '';
}

