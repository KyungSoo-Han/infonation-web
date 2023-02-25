$(() => {
    $('#form').dxForm({
        items:[
            {
                itemType:'group',
                caption: '로그인',
                align: 'center',
                items:[
                    {
                        dataField: 'login_id',
                        label:
                            {
                                height:20,
                                text: '아이디'
                            },
                        value: 'hanks',
                        editorOptions:{                            
                            height:20,
                            width:200,
                        }
                    },
                    {
                        dataField: 'password',
                        label: 
                            {
                                text: '비밀번호'   
                            },
                        value: '590405',
                        editorOptions: {  
                            height:20,
                            width:200,
                            mode: 'password',  
                        } 
                    }
                ]}

        ],
         //labelMode: 'floating',
        colCount: 2,
        labelLocation: 'left',
        minColWidth: 233,
        maxColWidth: 233,
        align: 'center'
       
    });
    
  $('#form').dxForm('instance').validate();
});

$(function() {
    $("#button").dxButton({
        text: "로그인",
        onClick(){
            
            Login() ;
        }
    });
});