$(() => {
    const popupContentTemplate = function () {
      return $('<div id ="createUserForm">').append();
    };

    let createUserForm = $('#createUserForm').dxForm();
    const popup = $('#popup').dxPopup({
      contentTemplate: "<html><body>"+ popupContentTemplate()+"</body></html>",
      width: 500,
      height: 680,
      container: '.dx-viewport',
      showTitle: true,
      title: '회원 가입',
      visible: false,
      dragEnabled: false,
      hideOnOutsideClick: true,
      showCloseButton: false,
      position: {
        at: 'center',
        my: 'center',
        collision: 'fit',
      },
      toolbarItems: [ {
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'before',
        options: {
          text: '가입',
          onClick() {
            const message = `Email is sent to  `;
            DevExpress.ui.notify({
              message,
              position: {
                my: 'center top',
                at: 'center top',
              },
            }, 'success', 3000);
          },
        },
      }, {
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'after',
        options: {
          text: '닫기',
          onClick() {
            popup.hide();
          },
        },
      }],
    }).dxPopup('instance');
  });
  