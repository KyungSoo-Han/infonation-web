$.ajax({
    method : "GET",
    url : "http://api.infonation.kr/api/biz",
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for(let i = 0; i < data.data.length; i ++){
            console.log(data.data[i].id);
            $("#biz").append("<option value=" + data.data[i].id + ">" + data.data[i].name +"</option>");
        }
    }, error: function (data) {
        console.log(data);
    }
});

$.ajax({
    method : "GET",
    url : "http://api.infonation.kr/api/customer?bizId=1",
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for(let i = 0; i < data.data.length; i ++){
            console.log(data.data[i].id);
            $("#customer").append("<option value=" + data.data[i].id + ">" + data.data[i].name +"</option>");
        }
        getSupplier();
    }, error: function (data) {
        console.log(data);
    }
});
function getSupplier() {

    $("#supplier").empty();

    $.ajax({
        method: "GET",
        url: "http://api.infonation.kr/api/select/supplier?bizId="+document.getElementById('biz').value+"&parentId="+document.getElementById('customer').value,
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].codeId);
                $("#supplier").append("<option value=" + data[i].codeId + ">" + data[i].codeName + "</option>");
            }

        }, error: function (data) {
            console.log(data);
        }
    });
}
function New(){
    $("#customer").empty();
    $("#supplier").empty();
    document.getElementById('id').value = '' ;
    document.getElementById('name').value = '' ;
    document.getElementById('customer').value = '' ;
    document.getElementById('supplier').value = '' ;
    document.getElementById('description').value = '' ;
    document.getElementById('sname').value = '' ;
    document.getElementById('status').value = '' ;
    document.getElementById('is_set').value = '' ;
    document.getElementById('near_exp_day').value = '' ;
    document.getElementById('non_deliver_day').value = '' ;
    document.getElementById('is_make_day').value = '' ;
    document.getElementById('from_make_day').value = '' ;
    document.getElementById('location').value = '' ;
    document.getElementById('case_ea_qty').value = '' ;
    document.getElementById('box_ea_qty').value = '' ;
    document.getElementById('pallet_ea_qty').value = '' ;
    document.getElementById('safe_stock_qty').value = '' ;
    document.getElementById('item_width').value = '';
    document.getElementById('item_height').value = '';
    document.getElementById('item_depth').value = '';
    document.getElementById('item_weight').value = '';
    document.getElementById('item_barcode').value = '';
    document.getElementById('case_width').value = '';
    document.getElementById('case_height').value = '';
    document.getElementById('case_depth').value = '';
    document.getElementById('case_weight').value = '';
    document.getElementById('case_barcode').value = '';
    document.getElementById('box_width').value = '';
    document.getElementById('box_height').value = '';
    document.getElementById('box_depth').value = '';
    document.getElementById('box_weight').value = '';
    document.getElementById('box_barcode').value = '';
    document.getElementById('pallet_width').value = '';
    document.getElementById('pallet_height').value = '';
    document.getElementById('pallet_depth').value = '';
    document.getElementById('pallet_weight').value = '';
    document.getElementById('pallet_barcode').value = '';

}
function Search(){

    if(document.getElementById('id').value == ''){
        alert('품목 ID를 입력후 조회하세요.');
        return;
    }
    $("#customer").empty();
    $("#supplier").empty();

    $.ajax({
        method: "GET",
        url: "http://api.infonation.kr/api/item/" + document.getElementById('id').value,
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            if(data.status!='OK'){
                alert('조회 중 오류가 발생했습니다.');
                return;
            }
            document.getElementById('customer').value = data.data.customerId ;
            //document.getElementById('supplier').value = data.data.supplierId ;
            document.getElementById('name').value = data.data.name ;
            document.getElementById('description').value = data.data.description ;
            document.getElementById('sname').value = data.data.sname ;
            document.getElementById('status').value = data.data.status ;
            document.getElementById('is_set').value = data.data.isSet ;
            document.getElementById('near_exp_day').value = data.data.nearExpDay ;
            document.getElementById('non_deliver_day').value = data.data.nonDeliverDay ;
            document.getElementById('is_make_day').value = data.data.isMakeDay ;
            document.getElementById('from_make_day').value = data.data.fromMakeDay ;
            document.getElementById('location').value = data.data.location ;
            document.getElementById('case_ea_qty').value = data.data.caseEaQty ;
            document.getElementById('box_ea_qty').value = data.data.boxEaQty ;
            document.getElementById('pallet_ea_qty').value = data.data.palletEaQty ;
            document.getElementById('safe_stock_qty').value = data.data.safeStockQty ;

             document.getElementById('item_width').value = data.data.itemStandard.width;
             document.getElementById('item_height').value = data.data.itemStandard.height;
             document.getElementById('item_depth').value = data.data.itemStandard.depth;
             document.getElementById('item_weight').value = data.data.itemStandard.weight;
             document.getElementById('item_barcode').value = data.data.itemStandard.barcode;

             document.getElementById('case_width').value = data.data.caseStandard.width;
             document.getElementById('case_height').value = data.data.caseStandard.height;
             document.getElementById('case_depth').value = data.data.caseStandard.depth;
             document.getElementById('case_weight').value = data.data.caseStandard.weight;
             document.getElementById('case_barcode').value = data.data.caseStandard.barcode;

             document.getElementById('box_width').value = data.data.boxStandard.width;
             document.getElementById('box_height').value = data.data.boxStandard.height;
             document.getElementById('box_depth').value = data.data.boxStandard.depth;
             document.getElementById('box_weight').value = data.data.boxStandard.weight;
             document.getElementById('box_barcode').value = data.data.boxStandard.barcode;

             document.getElementById('pallet_width').value = data.data.palletStandard.width;
             document.getElementById('pallet_height').value = data.data.palletStandard.height;
             document.getElementById('pallet_depth').value = data.data.palletStandard.depth;
             document.getElementById('pallet_weight').value = data.data.palletStandard.weight;
             document.getElementById('pallet_barcode').value = data.data.palletStandard.barcode;

            $.ajax({
                method : "GET",
                url : "http://api.infonation.kr/api/select/customer?bizId="
                                +document.getElementById('biz').value+"&codeId="+data.data.customerId,
                contentType: 'application/json',
                success: function(sel_cust) {
                    console.log(sel_cust);

                    for(let i = 0; i < sel_cust.length; i ++){
                        $("#customer").append("<option value=" + sel_cust[i].codeId + ">" + sel_cust[i].codeName +"</option>");
                    }

                    $.ajax({
                        method: "GET",
                        url: "http://api.infonation.kr/api/select/supplier?bizId="+document.getElementById('biz').value
                            +"&parentId="+document.getElementById('customer').value +"&codeId="+data.data.supplierId,
                        contentType: 'application/json',
                        success: function (sel_supl) {
                            console.log(sel_supl);
                            for (let i = 0; i < sel_supl.length; i++) {
                                $("#supplier").append("<option value=" + sel_supl[i].codeId + ">" + sel_supl[i].codeName + "</option>");
                            }

                        }, error: function (sel_supl) {
                            console.log(sel_supl);
                            if(sel_supl.status!='OK'){
                                New();
                            }
                        }
                    });

                }, error: function (sel_cust) {
                    console.log(sel_cust);
                    if(sel_cust.status !='OK'){
                        New();
                    }
                }
            });
        }, error: function (data) {
            console.log(data);
            alert('조회 중 오류가 발생했습니다.');
            New();
        }
    });

}

function Save() {
    if (document.getElementById('name').value == '')
    {
        alert('화주사명을 입력해야합니다.');
        return;
    }
    let jsonData = new Object() ;
    let itemStandard = new Object() ;
    let caseStandard = new Object() ;
    let boxStandard= new Object() ;
    let palletStandard= new Object() ;

    jsonData.bizId = document.getElementById('biz').value;
    jsonData.customerId = document.getElementById('customer').value;
    jsonData.name = document.getElementById('name').value;
    jsonData.sname = document.getElementById('sname').value;
    jsonData.status = document.getElementById('status').value;
    jsonData.isSet = document.getElementById('is_set').value;
    jsonData.nearExpDay = document.getElementById('near_exp_day').value;
    jsonData.nonDeliverDay = document.getElementById('non_deliver_day').value;
    jsonData.isMakeDay = document.getElementById('is_make_day').value;
    jsonData.fromMakeDay = document.getElementById('from_make_day').value;
    jsonData.location = document.getElementById('location').value;
    jsonData.caseEaQty = document.getElementById('case_ea_qty').value;
    jsonData.boxEaQty = document.getElementById('box_ea_qty').value;
    jsonData.palletEaQty = document.getElementById('pallet_ea_qty').value;
    jsonData.safeStockQty = document.getElementById('safe_stock_qty').value;
    //jsonData.description = document.getElementById('description').value;

    itemStandard.width = document.getElementById('item_width').value;
    itemStandard.height = document.getElementById('item_height').value;
    itemStandard.depth = document.getElementById('item_depth').value;
    itemStandard.weight = document.getElementById('item_weight').value;
    itemStandard.barcode = document.getElementById('item_barcode').value;
    jsonData.itemStandard = itemStandard;

    caseStandard.width = document.getElementById('case_width').value;
    caseStandard.height = document.getElementById('case_height').value;
    caseStandard.depth = document.getElementById('case_depth').value;
    caseStandard.weight = document.getElementById('case_weight').value;
    caseStandard.barcode = document.getElementById('case_barcode').value;
    jsonData.caseStandard = caseStandard;

    boxStandard.width = document.getElementById('box_width').value;
    boxStandard.height = document.getElementById('box_height').value;
    boxStandard.depth = document.getElementById('box_depth').value;
    boxStandard.weight = document.getElementById('box_weight').value;
    boxStandard.barcode = document.getElementById('box_barcode').value;
    jsonData.boxStandard = boxStandard;

    palletStandard.width = document.getElementById('pallet_width').value;
    palletStandard.height = document.getElementById('pallet_height').value;
    palletStandard.depth = document.getElementById('pallet_depth').value;
    palletStandard.weight = document.getElementById('pallet_weight').value;
    palletStandard.barcode = document.getElementById('pallet_barcode').value;
    jsonData.palletStandard = palletStandard;

    console.log(jsonData);

}

$("#customer").on('change', () => {
    getSupplier();
});
$("#status").on('change', () => {
    console.log(document.getElementById('status').value);
});
