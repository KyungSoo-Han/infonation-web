$(()=>{
    var action_panel = $('#action_panel');
    console.log(action_panel);

    $('#btn_search').dxButton({
        icon: 'search',
        text: '조회',
        width: 'auto'
    });
    
    $('#btn_new').dxButton({
        icon: 'newfolder',
        text: '신규'
    });

    

    $('#btn_save').dxButton({
        icon: 'save',
        text: '등록'
    });

    

    $('#btn_delete').dxButton({
        icon: 'trash',
        text: '삭제'
    });
})