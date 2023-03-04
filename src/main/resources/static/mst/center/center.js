let dataProvider, gridContainer, gridView, formView;
let rows;


function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(centerField);
    dataProvider.setOptions({
        softDeleting: false
    })

    gridView = new RealGrid.GridView(container);
    gridView.setEditOptions({
        insertable: true,
        appendable : true,
        deleteable :true
    });
    gridView.header.height = 30;
    gridView.footer.height = 30;
    gridView.stateBar.width = 16;
    gridView.displayOptions.rowHeight = 23;

    gridView.setDataSource(dataProvider);
    gridView.setColumns(centerColumn);

};

function Search() {
    gridView.showLoading();
    let srh_center_nm = document.getElementById('srh_center_nm').value;
    console.log(srh_center_nm);
    $.ajax({
        method : "GET",
        url : "http://39.117.158.182/api/center/detail?" +"gbn=DETAIL&biz_cd=10001&center_cd="+ srh_center_nm +"",
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            dataProvider.fillJsonData(data.data, {});
            gridView.closeLoading();

        }, error: function (data) {
            console.log(data);
        }
    });
}
function addRow() {
    dataProvider.addRow({});
}


function Delete(){
    let data = new Array();
    let jsonData = null;

    gridView.showLoading();

    let deleteData = gridView.getCheckedRows();

    console.log(deleteData);
    for (let i in deleteData){
        jsonData = dataProvider.getJsonRow(deleteData[i]);
        jsonData.biz_cd ='10001';
        jsonData.user_id ='hanks';
        data.push(jsonData);
    }

    $.ajax({
        method : "DELETE",
        url : "http://39.117.158.182/api/center",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            dataProvider.removeRows(deleteData);
            gridView.closeLoading();

        }, error: function (data) {
            console.log(data);
            gridView.closeLoading();
        }
    });
}
function Save(){
    gridView.commit();
    ;
    let data = new Array();
    let jsonData = null;

    gridView.showLoading();
    let createData = dataProvider.getStateRows('created');

    for (let i in createData){
        jsonData = dataProvider.getJsonRow(createData[i]);
        jsonData.biz_cd ='10001';
        jsonData.user_id ='hanks';

        if(jsonData.center_cd === undefined)
            continue;

        console.log(jsonData);
        data.push(jsonData);

        dataProvider.setRowState(createData[i], 'none');
    }
    /* for (let i in updateData){
         jsonData = dataProvider.getJsonRow(updateData[i]);
         jsonData.biz_cd ='10001';
         jsonData.user_id ='hanks';
         data.push(jsonData);
     }*/

    //console.log(JSON.stringify (data));
    //console.log(data);

    $.ajax({
        method : "POST",
        url : "http://39.117.158.182/api/center",
        contentType: 'application/json',
        data: JSON.stringify (data),
        success: function(data) {
            console.log(JSON.stringify (data));

            gridView.closeLoading();
            gridView.refresh();
        }, error: function (data) {
            console.log(data);
            gridView.closeLoading();
        }
    });
}
