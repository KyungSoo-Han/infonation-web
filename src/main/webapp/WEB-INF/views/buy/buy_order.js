

let buy_orderField = [
    {
        "fieldName" : "item_cd",
        "dataType" : "text"
    },
    {
        "fieldName" : "item_nm",
        "dataType" : "text"
    },
    {
        "fieldName" : "item_qty",
        "dataType" : "number"
    },
    {
        "fieldName" : "remark",
        "dataType" : "text"
    }
]


let buy_orderColumn =[
    {
        "name" : "item_cd",
        "fieldName" : "item_cd",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "품목 코드",
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
        "name" : "item_nm",
        "fieldName" : "item_nm",
        "type" :"data",
        "width" : "150",
        "header" :{
            "text" : "품목 명",
        }
    },
    {
        "name" : "item_qty",
        "fieldName" : "item_qty",
        "type" :"data",
        "width" : "100",
        "header" :{
            "text" : "수량",
        },
        "numberFormat" : "#,###.00"
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
    }
]
let dataProvider, gridContainer, gridView, formView;
function createGrid(container) {
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(buy_orderField);
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
    gridView.setColumns(buy_orderColumn);

};


const template = document.createElement('template');
template.innerHTML = `
<style>

.left-align-column{
  text-align: left;
}
.readonly-column{
  background: #f3ebdb;
}

#modalWrap {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 20px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#modalBody {
  padding: 15px;
  margin: 0 auto;
  border: 1px solid #777;
  background-color: #fff;
}

</style>


<div id="modalWrap" >
<div id="modalBody" >
    <button id="newBtn">초기화</button>
    <button id="saveBtn" onclick="saveBtn()">저장</button>
    <button id="closeBtn">닫기</button>
    <div id="" style=" width: 100%; height: 230px">
        <div>
            <label>입고요청번호</label><input type="text" id="slip_no" readonly>
            <label>입고요청일자</label><input type="date" id="slip_dt" >
            <label>입고예정일자</label><input type="date" id="deliveryReq_dt">
        </div>
        <div>  
            <label>화주사</label><input type="text" id="cust_cd">
            <button type="button">찾기</button>
            <label>공급사</label><input type="text" id="buyCust_cd">
            <button type="button">찾기</button>
        <span>
        </span>
        </div>
        <div>
            <label>ERP발주번호</label><input type="text" id="erp_slip_no" >
            <label>ERP발주일자</label><input type="text" id="erp_slip_seq">
        </div>
        <div>
            <label>비고</label><textarea id="erp_slip_seq"></textarea>
        </div>
        <br>
    </div>
    <button id="addRow">추가</button>
    <div id="realgrid"  style ="width: 100%; height:400px">
    </div>
</div>
</div>

`

class PopupNewSave extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback() {

        console.log('connectedCallback start');

        this.append(template.content.cloneNode(true))

        this.querySelector('#modalWrap').style.display = 'none';
        this.querySelector('#modalBody').style.width =`${this.getAttribute('width')}`;
        this.querySelector('#modalBody').style.height =`${this.getAttribute('height')}`;

        //모달 그리드 생성
        createGrid('realgrid');

        this.querySelector('#addRow').addEventListener('click',()=>{
            addRow();
        })

        this.querySelector('#closeBtn').addEventListener('click',()=>{
            this.querySelector('#modalWrap').style.display = 'none';
        })

        console.log('connectedCallback end');
    }
}

customElements.define('popup-new-save',PopupNewSave);

function addRow() {
    dataProvider.addRow({});
}

function saveBtn(){
    alert("TEST");
}

function showModal(){
    $(".modalWrap").fadeIn();
    document.querySelector('#modalWrap').style.display = 'block';
}
