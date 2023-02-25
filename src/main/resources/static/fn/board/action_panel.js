$(()=>{
    $('#btn_search').dxButton({
        icon: 'search',
        text: '조회',
        onClick(e) {

            GetBoardList();
        }
    });

})