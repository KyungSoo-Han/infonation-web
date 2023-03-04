let modal_dataProvider, modal_gridView;

let modal_Field = [
    {
        "fieldName" : "code",
        "dataType" : "text"
    },
    {
        "fieldName" : "name",
        "dataType" : "text",
        "text-align" :"left",
    }
]

let modal_Column =[
    {
        "name": "code",
        "fieldName": "code",
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
        "name": "name",
        "fieldName": "name",
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

function SearchModal(param, sub_param) {

    document.getElementById('code').value = '';

    if(param =='custProv' && document.getElementById('cust_cd').value == '')
    {
        alert('화주사를 선택해야합니다.');
        return;
    }
    document.querySelector('#modalWrap').style.display = 'block';   // 모달 보여주기

    if(param!='')
        document.getElementById('modal_param').value = param;
    if(sub_param!='')
        document.getElementById('code').value = sub_param

    modal_gridView.showLoading();       // 모달의 로딩창

    $.ajax({
        method : "GET",
        url : "http://39.117.158.182/api/select/tbl/"+ document.getElementById('modal_param').value +"?param1="+document.getElementById('code').value
                                                        +"&param2="+document.getElementById('name').value
                                                        +"&param3="+document.getElementById('cust_cd').value,
        contentType: 'application/json',
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

    if (document.getElementById('modal_param').value == 'cust') {
        document.getElementById('cust_cd').value = modal_dataProvider.getValue(modal_current.dataRow, 'code');
        document.getElementById('cust_nm').value = modal_dataProvider.getValue(modal_current.dataRow, 'name');
    } else if (document.getElementById('modal_param').value == 'custProv') {
        document.getElementById('custProv_cd').value = modal_dataProvider.getValue(modal_current.dataRow, 'code');
        document.getElementById('custProv_nm').value = modal_dataProvider.getValue(modal_current.dataRow, 'name');
    } else if (document.getElementById('modal_param').value == 'item') {
        dataProvider.setValue(current.dataRow, 'item_cd', modal_dataProvider.getValue(modal_current.dataRow, 'code'));
        dataProvider.setValue(current.dataRow, 'item_nm', modal_dataProvider.getValue(modal_current.dataRow, 'name'));
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
}

