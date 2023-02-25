$(() => {
    $('#createUserForm').dxForm({
        readOnly: false,
        showColonAfterLabel: true,
        showValidationSummary: false,
        items: [
            {
                itemType: 'group',
                caption: '기본정보',
                items: [
                    {
                        dataField: 'login_id',
                        label: {
                            text: '아이디'
                        }
                    }, {
                        dataField: 'username',
                        label: {
                            text: '이름'
                        }
                    }, {
                        dataField: 'password1',
                        label: {
                            text: '비밀번호'
                        },
                        editorOptions: {
                            mode: 'password'
                        },
                        validationRules: [{
                          type: 'required',
                          message: '비밀번호를 입력하세요.',
                        }]
                    }, {
                        dataField: 'password2',
                        label: {
                            text: '비밀번호 확인'
                        },
                        editorOptions: {
                            mode: 'password'
                        },
                        validationRules: [{
                          type: 'required',
                          message: '비밀번호를 입력하세요.',
                        }]
                    },
                    // {     dataField: 'birthday',     editorType: 'dxDateBox',     label:
                    // {             text: '생일'         } },
                    {
                        dataField: 'email',
                        label: {
                            text: '이메일'
                        }
                    }, {
                        dataField: 'phoneNo',
                        label: {
                            text: '연락처'
                        },
                        editorOptions: {
                            mask: '000-0000-0000',
                            maskRules: {
                                X: /[0-9]/
                            }
                        }
                    }, {
                        itemType: 'button',
                        horizontalAlignment: 'left',
                        buttonOptions: {
                          text: '회원 가입',
                          onClick(e) {
                              var createUserForm = $('#createUserForm').dxForm('instance');
                              let password1 = createUserForm
                                  .option('formData')
                                  .password1;
                              let password2 = createUserForm
                                  .option('formData')
                                  .password2;
                                  
                              if (password1 !== password2) {
                                  alert('비밀번호가 일치하지 않습니다.');
                                  return;
                              }
                  
                          },
                          useSubmitBehavior: true
                        },
        onClick(e) {
            var createUserForm = $('#createUserForm').dxForm('instance');
            let password1 = createUserForm
                .option('formData')
                .password1;
            let password2 = createUserForm
                .option('formData')
                .password2;
            console.log(password1);
            console.log(password2);
            if (password1 !== password2) {
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }

        }
                      }
                ]
            }
            // , {     itemType: 'group',     caption: '주소정보',     items:[             {
            // dataField: 'zipCode',                 label:                     {
            // text: '우편번호'                     }             },             {
            // dataField: 'zipAddr1',                 label:                     {
            // text: '주소'                     }             },             {
            // dataField: 'zipAddr2',                 label:                     {
            // text: '상세주소 '                     } }]}

        ],
        //labelMode: 'floating',
        colCount: 1.5,
        labelLocation: 'left',
        minColWidth: 233,
        maxColWidth: 233
    })
    ;
    // $('#createUserForm').dxForm('instance').validate();
});

$(function () {
    $("#button").dxButton({
        useSubmitBehavior: true,
        text: "회원가입"
    });
});
$(function () {
    $("#back").dxButton({
        text: "뒤로가기",
        onClick(e) {

            location.href = "../index.jsp";
        }
    });
});