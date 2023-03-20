let menuData = [
    {
        menu_cd: "MST_0000",
        menu_nm: "기준정보",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: ""
    }, {
        menu_cd: "MST_0001",
        menu_nm: "사업장관리",
        menu_location: "/mst/biz",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0002",
        menu_nm: "센터관리",
        menu_location: "/mst/center",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0003",
        menu_nm: "화주사관리",
        menu_location: "/mst/customer",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0004",
        menu_nm: "공급사관리",
        menu_location: "/mst/customer/supplier",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0005",
        menu_nm: "배송지관리",
        menu_location: "/mst/customer/destination",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0006",
        menu_nm: "품목관리",
        menu_location: "/mst/item",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },{
        menu_cd: "MST_0007",
        menu_nm: "품목 엑셀업로드",
        menu_location: "/mst/item/ExcelUpload",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },
/*    {
        menu_cd: "MST_0001",
        menu_nm: "품목등록",
        menu_location: "./views/Item.html",
        parent_yn: "N",
        parent_cd: "MST_0000"
    },*/
    {
        menu_cd: "INBOUND_0000",
        menu_nm: "입고관리",
        menu_location: "#",
        parent_yn: "Y",
        parent_cd: ""
    }, {
        menu_cd: "INBOUND_0001",
        menu_nm: "입고요청등록",
        menu_location: "/inbound/inbound_input",
        parent_yn: "N",
        parent_cd: "INBOUND_0000"
    },{
        menu_cd: "INBOUND_0002",
        menu_nm: "입고요청현황",
        menu_location: "/inbound/inbound_list",
        parent_yn: "N",
        parent_cd: "INBOUND_0000"
    },

   {
        menu_cd: "TEST_01",
        menu_nm: "TEST 1",
        menu_location: "/test/test",
        parent_yn: "Y",
        parent_cd: ""
    } /*,
    {
        menu_cd: "TEST_02",
        menu_nm: "TEST 2",
        menu_location: "./views/inbound/inbound_.jsp",
        parent_yn: "N",
        parent_cd: "menuList"
    },*/
]

for(i in menuData){
    if(menuData[i].parent_yn == "Y"){
        $("#menuList").append(`
              <li class="nav-item">
                <a href="${menuData[i].menu_location}" class="nav-link">
                  <i class="fas fa-circle nav-icon"></i>
                      <p>${menuData[i].menu_nm}
                        <i class="fas fa-angle-left right"></i>
                      </p>
                </a>
                <ul class="nav nav-treeview" id="${menuData[i].menu_cd}">
                </ul>
              </li>`)

        //console.log(i);
    }
    else{
        $("#"+menuData[i].parent_cd).append(`
            <li class="nav-item" ">
              <a href="${menuData[i].menu_location}" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>${menuData[i].menu_nm}</p>
              </a>
            </li>
        `)
    }
}