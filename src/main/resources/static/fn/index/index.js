$(() => {
    var menu_sts = 0;
    $('#menu_show_hide').dxButton({
        icon: 'hidepanel',
        onClick(e) {
            if(menu_sts == 0){
                main_treeview.option('visible',  false);
                this.option('icon', 'showpanel');
                menu_sts = 1;
            }
            else{
                main_treeview.option('visible',  true);
                this.option('icon', 'hidepanel');
                menu_sts = 0;
            }
        },
    });

    $('#btn_login').dxButton({
        icon: 'user',
        text: '로그인',
        onClick(e) {
            location.href="./user/login";
        },
    });

    $('#btn_join').dxButton({
        icon: 'add',
        text: '회원가입',
        onClick(e) {
            //var popup =  $('#popup').dxPopup('instance');
            //popup.show();
            //console.log(popup);
            //window.open("./user/createUser.html","회원 가입", "width=500, height=600, left = 300, top = 50");
            location.href="./user/createUser";
        },
    });

    const tabPanel = $('#tabPanel')
        .dxTabPanel({

            itemTitleTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append($('<span>').text(`${itemData.title}`));
                itemElement.append($('<i>')
                                        .addClass('dx-icon')
                                        .addClass('dx-icon-close')
                                            .click(() => {closeButtonHandler(itemData);}));
            },
            
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var mainContainer = $("<div id='"+ itemData.title +"' name='contents' style= 'height: 100%; width: 100%;'></div>");
                mainContainer.append( itemData.title );
                

                // var info = $("<div style='text-align:left;'>");
                // for (var field in itemData.data) {
                //     info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                // }
                // mainContainer.append(info);
                
                itemElement.append(mainContainer);
                document.getElementById(itemData.title).innerHTML='<object type="text/html" data="'+itemData.value+'" style= "height: 100%; width: 100%;"></object>';
            },
            items: [
               
            ],
            
            height: 993,
            deferRendering: false,
            showNavButtons: true,
            repaintChangesOnly: true,
            noDataText:"",
        })
        .dxSortable({

            moveItemOnDrop: true,
            filter: '.dx-tab',
            itemOrientation: 'horizontal',
            dragDirection: 'horizontal',
        })
        .dxTabPanel('instance');
        
    const main_treeview = $('#main_treeview')
        .dxTreeView({
            items: menus,
            searchEnabled: true,
            width: 200,
            onItemClick(e) {
                const item = e.itemData;
                // if( e.itemData.text !="로그인" && localStorage.getItem('token') == null)     // 로그인 토큰 확인
                // {
                //     alert('로그인을 해야합니다.');
                //     return;
                // }
                addButtonHandler(item);
                //alert(item.value);
            }
        })
        .dxTreeView('instance');

    function addButtonHandler(item) {
        const items = tabPanel.option('items');
        if( item.id == "1") 
            return;

        for (var i = 0; i < items.length; i++) {
            if (item.id == items[i].id) {

                console.log(items);
                tabPanel.option('selectedIndex', i);
                return;
            }
        };

        const newItem = {
            title: item.text,
            id: item.id,
            value: item.value
        };

        items.push(newItem);

        //updateButtonsState(items);

        tabPanel.option('items', items);
        tabPanel.option('selectedIndex', items.length - 1);
    }

    function closeButtonHandler(itemData) {
        const index = tabPanel.option('items').indexOf(itemData);
        const items = tabPanel.option('items');
        items.splice(index, 1);
    
        //updateButtonsState(items);
        tabPanel.option('items', items);
        if (index >= items.length && index > 0) tabPanel.option('selectedIndex', index - 1);
      }
    
    function updateButtonsState(items) {
        if(items.length == 0) 
            return;
            
        items[0].isLast = items.length === 1;
    }
});
