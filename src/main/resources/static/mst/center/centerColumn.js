
let centerColumn =[
    {
        "name" : "id",
        "fieldName" : "id",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "센터 코드",
        },
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
        "name" : "name",
        "fieldName" : "name",
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